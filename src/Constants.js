// manual cid

export const CHECK_FETCHING = "CHECK_FETCHING";
export const CHECK_SUCCESS = "CHECK_SUCCESS";
export const CHECK_NOTFOUND = "CHECK_NOTFOUND";
export const ADD_NUMBER = "ADD_NUMBER";
export const CLEAR_NUMBER = "CLEAR_NUMBER";

// notification
//export const NOTIFICATION = "NOTIFICATION";
export const CLOSENOTIFICATION = "CLOSENOTIFICATION";

// Stock Edit Page
export const STOCK_EDIT_FETCHING = "STOCK_EDIT_FETCHING";
export const STOCK_EDIT_SUCCESS = "STOCK_EDIT_SUCCESS";
export const STOCK_EDIT_FAILED = "STOCK_EDIT_FAILED";
export const STOCK_EDIT_INITIALED = "STOCK_EDIT_INITIALED";

//export const apiHisUrl = "http://localhost:8081/api/";
export const apiMqttUrl = "ws://localhost:10884";
export const smartcardAgent = "http://localhost:8189";
export const soapNhso =
  "http://ucws.nhso.go.th:80/ucwstokenp1/UCWSTokenP1?wsdl";
export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";

export const LOGIN_STATUS = "LOGIN_STATUS";

export const server = {
  LOGIN_URL: `authen/login`,
  REGISTER_URL: `authen/register`,
  PRODUCT_URL: `stock/product`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `stock/report`,
  LOGIN_PASSED: `yes`,
  PATIENT_URL: `getpatient/`,
  apiHisUrl: `http://localhost:8081/api/`,
};

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
