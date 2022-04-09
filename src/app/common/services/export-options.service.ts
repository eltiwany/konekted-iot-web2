import { FunctionsService } from './extras/functions.service';
import { AppConfigService } from './app-config.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class ExportOptionsService {
  // File definition
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = {
    excel: '.xlsx',
    pdf: '.pdf',
    csv: '.csv'
  };

  constructor(
    private config: AppConfigService,
    private fn: FunctionsService
  ) { }

  /**
   * Generate excel for given JSON data
   * @param jsonData any[]
   * @param fileName fileName
   */
  public excel(jsonData: any[], fileName: string, colsArray: any[]): void {
    let newData: any[] = [];
    let newCol: any = {};

    // filter only passed columns
    jsonData.map((cols) => {
      colsArray.forEach((element: string) => {
        newCol[this.fn.toUpperCamelCase(element)] = cols[element];
      });
      newData.push(newCol);
      newCol = {};
    });
    // console.log(jsonData, newData);

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(newData);
    const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName + "_" + Date.now());
  }

  htmlToExcel(tableId: string, name?: string) {
    let timeSpan = new Date().toISOString();
    let prefix = name || "ExportResult";
    let fileName = `${prefix}-${timeSpan}`;
    let targetTableElm = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{ sheet: prefix });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  /**
   * Save the generate excel file
   * given file buffer
   * @param buffer excelBuffer
   * @param fileName fileNamePassed
   */
  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension.excel);
  }

  /**
   * Generate CSV file based on given data
   * @param data dataArray
   * @param fileName exportedName
   */
  public csv(data: any[], fileName: string): void {
    const replacer = (key: string, value: string) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = fileName + this.fileExtension.csv;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  /**
   * Print PDF on a given data
   *
   * @param dataObject dataObject
   * @param pageSize pagesize
   * @param pageOrientation orientation
   * @param tableCols columnsArray
   */
  public printPDF(dataObject: any, fileName: string, pageSize: string, pageOrientation: string, tableCols: string[]): void {
    const pdf = new PdfMakeWrapper();
    this.makePDF(pdf, dataObject, pageSize, pageOrientation, tableCols);
    pdf.create().print();
  }

  /**
   * Open (Save) PDF
   *
   * @param dataObject dataObject
   * @param pageSize pagesize
   * @param pageOrientation orientation
   * @param tableCols columnsArray
   */
  public downloadPDF(dataObject: any, fileName: string, pageSize: string, pageOrientation: string, tableCols: string[]): void {
    const pdf = new PdfMakeWrapper();
    this.makePDF(pdf, dataObject, pageSize, pageOrientation, tableCols);
    pdf.create().download(fileName + "_" + Date.now());
  }

  /**
   * Generate PDF on given data
   *
   * @param pdf PdfMakeWrapper
   * @param dataObject dataObject
   * @param pageSize size
   * @param pageOrientation orientation
   * @param tableCols columnsArray
   */
  private makePDF(pdf: PdfMakeWrapper, dataObject: any[], pageSize: string, pageOrientation: any, tableCols: string[]): any {
    // Set the fonts to use
    PdfMakeWrapper.setFonts(pdfFonts);
    pdf.pageSize(pageSize);
    pdf.footer('Generated from ' + this.config.app.longName);
    pdf.pageOrientation(pageOrientation);
    pdf.styles({
      th: {
        width: 100,
        bold: true
      }
    });
    const data = {
      content: [
        {
          text: '' ,
          style: 'header',
          margin: 10,
        },
        this.table(dataObject, tableCols)
      ]
    };
    pdf.add(data.content);
  }

  /**
   * Build Table for PDF Maker
   *
   * @param data dataArray
   * @param columns columnsArray
   * @returns tableBody
   */
  buildTableBody(data: string[], columns: string[]): any {
    const body = [];

    // Make Column Uppercase
    const newCols: string[] = [];
    columns.forEach((column: string) => {
      newCols.push(this.fn.toUpperCamelCase(column));
    });

    body.push(newCols);

    data.forEach((row) => {
      const dataRow: any[] = [];

      columns.forEach((column: any) => {
        const columnData = row[column] ? row[column] : "-";
        dataRow.push(columnData.toString());
      });

      body.push(dataRow);
    });

    return body;
  }

  /**
   * Support function for table builder
   *
   * @param data dataArray
   * @param columns columnsArray
   * @returns table
   */
  table(data: any[], columns: any[]): any {
    return {
      table: {
        headerRows: 1,
        styles: {
          bold: true
        },
        body: this.buildTableBody(data, columns)
      }
    };
  }

  /**
   * Import Excel from a file
   *
   * @param bstr
   * @returns XLSX.AOA2SheetOpts dataArray
   */
  public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
    /* read workbook */
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    const data = (XLSX.utils.sheet_to_json(ws, { header: 1 })) as XLSX.AOA2SheetOpts;

    return data;
  }
}
