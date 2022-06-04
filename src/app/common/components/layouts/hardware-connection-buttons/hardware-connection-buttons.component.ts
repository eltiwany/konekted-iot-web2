import { BoardStateService } from './../../../../services/iot/board-state.service';
import { BoardsService } from './../../../../services/iot/boards.service';
import { PermissionsGuardService } from './../../../../services/guards/permissions-guard.service';
import { ModalsService } from './../../../services/layouts/modals.service';
import { Component, Injector, Input, OnInit, Type, OnChanges } from '@angular/core';
import { ProviderClass } from '../../modals/provider-class';

@Component({
  selector: 'app-hardware-connection-buttons',
  templateUrl: './hardware-connection-buttons.component.html',
  styleUrls: ['./hardware-connection-buttons.component.css']
})
export class HardwareConnectionButtonsComponent implements OnInit {

  dataInjected: any = {};
  // @ts-ignore
  componentConnectBoard: Type<any>;
  @Input() headingConnectBoard = "Connect Board";

  // Optional Buttons
  @Input() connectBoardAction = true;
  @Input() isBoardConnected = false;
  @Input() boardName = "";

  //
  @Input() iconNameConnectBoard = 'bi bi-link-45deg';


  // Data for ConnectBoard & Edit
  @Input() data = [];
  // @ts-ignore
  @Input() modalConnectBoardContent: Type<any>;
  @Input() modalConnectBoardSize: 'md' | 'lg' | 'sm' | 'xl' = 'xl';

  constructor(
    public modal: ModalsService,
    public permission: PermissionsGuardService,
    public boardState: BoardStateService,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.dataInjected = this.createInjector(this.data);
    this.boardState.getActiveBoard();
    setInterval(() => {
      this.boardState.getActiveBoard();
    }, 30000);
  }

  createInjector(dataObj: any) {
    // The ProviderClass is really just a stub, but is
    // neccessary for injection to work.
    return Injector.create(
      [{ provide: ProviderClass, useValue: dataObj }],
      this.injector
    );
  }

}
