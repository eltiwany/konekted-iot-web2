import { Injectable } from '@angular/core';
import {
  faAngleDoubleRight,
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
  faLongArrowAltRight,
  faChartLine,
  faChevronCircleDown,
  faDotCircle,
  faExclamationTriangle,
  faCheck,
  faSpinner,
  faTachometerAlt,
  faCogs,
  faExclamationCircle,
  faCubes,
  faFileAlt,
  faTable,
  faCartPlus,
  faEye,
  faTrash,
  faPencilAlt,
  faAngleDown,
  faAngleUp,
  faPlusSquare,
  faPlus,
  faFileExcel,
  faFilePdf,
  faFileCsv,
  faArrowCircleLeft,
  faPrint,
  faUserPlus,
  faUserLock,
  faUniversity,
  faDoorOpen,
  faSignInAlt,
  faAddressCard,
  faListAlt,
  faMinus,
  faMinusSquare,
  faDownload,
  faCaretLeft,
  faCalculator,
  faGift,
  faGifts,
  faMoneyCheck,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faLink,
  faUnlink,
  faCross,
  faTimes,
  faSms,
  faCartArrowDown,
  faUndo,
  faRedo,
  faUpload,
  faUserSecret,
  faMemory,
  faSave,
  faPaperPlane,
  faBriefcase,
  faShieldAlt,
  faLightbulb,
  faCube,
  faTrophy,
  faLock,
  faUnlock,
  faRocket,
  faUserShield,
  faChartArea,
  faArrowUp,
  faArrowAltCircleUp,
  faGripHorizontal,
  faList
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  setIcon = {
    'fa-arrow-right': faArrowRight,
    'fa-arrow-left': faArrowLeft,
    'fa-long-arrow-right': faLongArrowAltRight,
    'fa-arrow-angle-double-right': faAngleDoubleRight,
    'fa-arrow-angle-down': faAngleDown,
    'fa-arrow-angle-up': faAngleUp,
    'fa-arrow-up': faArrowUp,
    'fa-arrow-circle-up': faArrowAltCircleUp,
    'fa-arrow-cicle-right': faArrowCircleRight,
    'fa-check-circle': faCheckCircle,
    'fa-chart-line': faChartLine,
    'fa-circle-down': faChevronCircleDown,
    'fa-circle': faDotCircle,
    'exclamation-triangle': faExclamationTriangle,
    'fa-check': faCheck,
    'fa-spinner': faSpinner,
    'fa-dashboard': faTachometerAlt,
    'fa-setting': faCogs,
    'fa-exclamation-circle': faExclamationCircle,
    'fa-cubes': faCubes,
    'fa-file-alt': faFileAlt,
    'fa-table': faTable,
    'fa-cart-plus': faCartPlus,
    'fa-cart-minus': faCartArrowDown,
    'fa-eye': faEye,
    'fa-trash': faTrash,
    'fa-pencil': faPencilAlt,
    'fa-plus-square': faPlusSquare,
    'fa-plus': faPlus,
    'fa-excel': faFileExcel,
    'fa-pdf': faFilePdf,
    'fa-csv': faFileCsv,
    'fa-back': faArrowCircleLeft,
    'fa-print': faPrint,
    'fa-user-plus': faUserPlus,
    'fa-university': faUniversity,
    'fa-user-admin': faUserLock,
    'fa-door-open': faDoorOpen,
    'fa-sign-in': faSignInAlt,
    'fa-vcard': faAddressCard,
    'fa-list-alt': faListAlt,
    'fa-minus': faMinus,
    'fa-minus-square': faMinusSquare,
    'fa-download': faDownload,
    'fa-caret-left': faCaretLeft,
    'fa-calculator': faCalculator,
    'fa-gift': faGifts,
    'fa-money': faMoneyCheckAlt,
    'fa-link': faLink,
    'fa-unlink': faUnlink,
    'fa-remove': faTimes,
    'fa-sms': faSms,
    'fa-undo': faUndo,
    'fa-redo': faRedo,
    'fa-refresh': '',
    'fa-upload': faUpload,
    'fa-admin': faUserSecret,
    'fa-company': faUniversity,
    'fa-save': faSave,
    'fa-send': faPaperPlane,
    'fa-briefcase': faBriefcase,
    'fa-shield': faShieldAlt,
    'fa-lightning': faLightbulb,
    'fa-cube': faCube,
    'fa-trophy': faTrophy,
    'fa-giftcard': faGift,
    'fa-lock': faLock,
    'fa-unlock': faUnlock,
    'fa-rocket': faRocket,
    'fa-admin-shield': faUserShield,
    'fa-performance': faChartArea,
    'fa-grid': faGripHorizontal,
    'fa-list': faList,
  };
}
