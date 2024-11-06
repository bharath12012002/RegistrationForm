import React, { useEffect } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme, alpha } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
//import Tooltip from '@material-ui/core/Tooltip';
import Tooltip from "@mui/material/Tooltip";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PersonIcon from "@material-ui/icons/Person";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import MailIcon from "@material-ui/icons/Mail";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DvrIcon from "@material-ui/icons/Dvr";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
//import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from "@material-ui/icons/Edit";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import AssistantIcon from "@material-ui/icons/Assistant";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ListIcon from "@material-ui/icons/List";
import TabUnselectedIcon from "@material-ui/icons/TabUnselected";
import PublishIcon from "@material-ui/icons/Publish";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PolicyIcon from "@mui/icons-material/Policy";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
//import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ListAltIcon from "@material-ui/icons/ListAlt";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded";
import InfoIcon from "@material-ui/icons/Info";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import { Link, useHistory } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import { useLocation } from "react-router-dom";
import { MenuIcon as CustomIcon } from "./MenuIcon";
import "./global.css";
import menus from "./menu.json";
import AssignmentTurnedInOutlined from "@mui/icons-material/AssignmentTurnedInOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import RedoIcon from "@mui/icons-material/Redo";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import Hidden from "@material-ui/core/Hidden";
import ReportIcon from "@mui/icons-material/Report";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import BakeryDiningRoundedIcon from "@mui/icons-material/BakeryDiningRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import FlagCircleRoundedIcon from "@mui/icons-material/FlagCircleRounded";
import ThreePRoundedIcon from "@mui/icons-material/ThreePRounded";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraIcon from "@mui/icons-material/Camera";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddCommentIcon from "@mui/icons-material/AddComment";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PermDataSettingRoundedIcon from "@mui/icons-material/PermDataSettingRounded";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ViewListIcon from "@mui/icons-material/ViewList";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SafetyCheckRoundedIcon from "@mui/icons-material/SafetyCheckRounded";
import MoreTimeRoundedIcon from "@mui/icons-material/MoreTimeRounded";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import SensorOccupiedRoundedIcon from "@mui/icons-material/SensorOccupiedRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import Groups3Icon from "@mui/icons-material/Groups3";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Groups2Icon from "@mui/icons-material/Groups2";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddCardIcon from "@mui/icons-material/AddCard";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import DescriptionIcon from "@mui/icons-material/Description";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import UpdateIcon from "@mui/icons-material/Update";
import ScheduleSend from "@mui/icons-material/ScheduleSend";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex   !important",
    flexWrap: "wrap !important",

    maxWidth: 360,
    //padding: '0px !important',
    width: "100% !important",
  },

  nested: {
    paddingRight: theme.spacing(1),
    paddingTop: "4px !important",
    paddingBottom: "4px !important",
    paddingLeft: "5px !important",
  },
  ltcus: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: "4px !important",
    paddingBottom: "4px !important",
  },
  icon: {
    minWidth: "26px !important",
    marginLeft: "10px !important",
    color: "#00308f!important",
  },
  iconn: {
    minWidth: "26px !important",
    marginLeft: "10px !important",
    color: "#00308f!important",
    marginTop: "10px",
  },
  menuButton: {
    marginRight: 36,
  },
  link: {
    margin: 0,
    padding: "0 !important",
  },
  hide: {
    display: "none   !important",
  },
  drawer: {
    width: drawerWidth,
    background: "transparent !important",
    //textDecoration: 'none !important',
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: theme.zIndex.appBar - 1,
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#dde1fa    !important",

    //textDecoration: 'none !important',
    transition: theme.transitions.create("width   !important", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: "transparent    !important",
    marginTop: "64px",
    zIndex: "0",
    // z-index: '-1',
    borderRight: "0px",
    //textDecoration: 'none !important',
    transition: theme.transitions.create("width   !important", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    // overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    background: "transparent    !important",
    //textDecoration: 'none !important',
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex   !important",
    alignItems: "center   !important",
    textDecoration: "none !important",
    backgroundColor: "#fff !important",
    color: "#ffffff !important",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end  !important",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#dde1fa   !important",
    color: "#00308f!important",
    //   '&:hover': {
    //     backgroundColor: "#00308f!important",
    //     color: "#ffffff !important"
    //  },
    //textDecoration: 'none !important',
  },
  sidebarContent1: {
    justifyContent: "flex-start  !important",
    float: "left  !important ",
    marginLeft: "0px  !important",
    backgroundColor: "#dde1fa   !important",
    color: "#00308f!important",

    //textDecoration: 'none !important',
  },
  ipssMenuItem: {
    justifyContent: "flex-start !important",
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
    backgroundColor: "#dde1fa  !important",
    color: "#00308f!important",
  },

  ipssmenuname: {
    paddingLeft: "10px !important",
    alignItems: "top !important",
    //color: '#00308f!important',
    textDecoration: "none !important",
    //   '&:hover': {
    //     backgroundColor: "#fff !important",
    //     // color: "#ffffff !important"
    //  },
  },
  ipsssubmenuname: {
    color: "#00308f!important",
    textDecoration: "none !important",
    //   '&:hover': {
    //     backgroundColor: "#fff !important",

    //  },
  },
  textlist: {
    marginLeft: "20px",
  },
}));

export default function MiniDrawer({
  isSignedIn,
  onSignOut,
  drawerOpened,
  setDrawerOpened,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const history = useHistory();
  const [activeMenu, setActiveMenu] = React.useState("");
  //const [activeItem, setActiveItem] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setOpen1(!open1);
  };
  useEffect(() => {
    if (isSignedIn) {
      setDrawerOpened(false);
    }
    // if(Hidden){
    //   setDrawerOpened(false)
    // }
  }, [location]);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const Permission = localStorage.getItem("ineventory_crud");
  const PermissionBillOfMaterial = localStorage.getItem("BillOfMaterial");
  const PermissionDeliveryChalan = localStorage.getItem("DeliveryChalan");
  const Permissiongrnote = localStorage.getItem("grnote");
  const PermissionPO_Dashboard = localStorage.getItem("PO_Dashboard");
  const PermissionpurchaseOrder = localStorage.getItem("purchaseOrder");
  const Permissionpo_proposal = localStorage.getItem("po_proposal");
  const PermissionproposalDetail = localStorage.getItem("proposalDetail");
  const Permissionmonitor_po = localStorage.getItem("monitor_po");
  const PermissionRawMaterials = localStorage.getItem("RawMaterials");
  const Permissionproductgroup = localStorage.getItem("productgroup");
  const Permissionuom = localStorage.getItem("uom");
  const Permissionvendor = localStorage.getItem("vendor");
  //Production
  const Permissioncustomerreport = localStorage.getItem("customerreport");
  const Permissiondashboardprodplan = localStorage.getItem("dashboardprodplan");
  const Permissiondashboardproductmgmt = localStorage.getItem(
    "dashboardproductmgmt"
  );
  const Permissionordermanagdet = localStorage.getItem("ordermanagdet");
  const Permissionordermanagreport = localStorage.getItem("ordermanagreport");
  const Permissionoperationdet = localStorage.getItem("operationdet");
  const Permissionorderstyle = localStorage.getItem("orderstyle");
  const Permissionavailableresource = localStorage.getItem("availableresource");
  const Permissioninternalplans = localStorage.getItem("customerreport");
  const Permissionplans = localStorage.getItem("plans");
  const Permissionoperationmap = localStorage.getItem("operationmap");
  const Permissionoperationskills = localStorage.getItem("operationskills");
  const Permissioncutting = localStorage.getItem("cutting");
  const Permissionordermang = localStorage.getItem("ordermang");
  const Permissionpacking = localStorage.getItem("packing");
  const Permissionproduction = localStorage.getItem("production");
  const Permissionquacheck = localStorage.getItem("quacheck");
  const Permissionplanning = localStorage.getItem("planning");
  const Permissionprodplanentry = localStorage.getItem("prodplanentry");
  const Permissionshipmentdet = localStorage.getItem("shipmentdet");
  const PermissionorderShipment = localStorage.getItem("orderShipment");
  const PermissionInventoryexecution = localStorage.getItem(
    "Inventory Execution"
  );
  const PermissionProductionexecution = localStorage.getItem(
    "Production Execution"
  );
  const PermissionCustomers = localStorage.getItem("Customers");
  const PermissionReturns = localStorage.getItem("Returns");
  const PermissionInventoryReturns = localStorage.getItem("Inventory Returns");
  const PermissionPOQuotation = localStorage.getItem("POQuotation");
  const PermissionExtras = localStorage.getItem("Extras");
  const PermissionInventoryExtras = localStorage.getItem("Inventory Extras");
  const PermissionMerchantExtras = localStorage.getItem("Merchant Extras");

  //  const Permissionshipmentdet=localStorage.getItem("customerreport")

  return (
    <>
      <Hidden only="xs">
        <div className={classes.root}>
          <CssBaseline />
          <Drawer
            style={{ backgroundColor: "#d1c4e9" }}
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: drawerOpened,
              [classes.drawerClose]: !drawerOpened,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: drawerOpened,
                [classes.drawerClose]: !drawerOpened,
              }),
            }}
          >
            {/* <div className={classes.drawerHeader}>
          <Typography className='mdc-drawer__title'><b>E-Commerce</b></Typography>
          <IconButton className='side_icon' onClick={(event) => {
            setDrawerOpened(false)
          }}>
            {theme.direction === 'ltr' ? <ArrowCircleLeftOutlinedIcon /> : <ArrowCircleLeftOutlinedIcon />}
          </IconButton>
        </div> */}
            {/* <Divider /> */}

            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
            <div className="ecompage">
              <nobr />
              <nobr />

              <List component="nav" className={classes.root}>
                {/* {Permission.includes('view') &&  */}

                <Tooltip title="Home" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/home"}
                    onClick={() => history.push("/home")}
                    button="true"
                    //onClick={handleDrawerToggle}
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_home_01"
                      className={classes.iconn}
                    >
                      <HomeRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Executive Dashboard" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/dashboardreport"}
                    onClick={() => history.push("/dashboardreport")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <SpaceDashboardRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Reports" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/report/home"}
                    onClick={() => history.push("/report/home")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <ReportRoundedIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>
                {/* {PermissionPO_Dashboard.includes('view') &&    */}
                <Tooltip title="Employee" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/employee/list"}
                    onClick={() => history.push("/employee/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <BadgeRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip title="Employee Onboard" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/employee/config"}
                    onClick={() => history.push("/employee/config")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <CoPresentIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip title="ID Card Details" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/employee/idcard_details"}
                    onClick={() => history.push("/employee/idcard_details")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <RememberMeIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip title="Attendance" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/attendance/list"}
                    onClick={() => history.push("/attendance/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <FingerprintRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                {/* } */}

                <Tooltip title="Attendance Summary" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/ot/apply"}
                    onClick={() => history.push("/ot/apply")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <FactCheckIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>
                <Tooltip title="Assign" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/mapping/forms/configure"}
                    onClick={() => history.push("/mapping/forms/configure")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <LayersOutlinedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                {/* }  */}
                {/* } */}

                {/* {PermissionPO_Dashboard.includes('view') &&    */}

                {/* <Tooltip title="Establish Relation" placement="right" arrow>
            <ListItem selected={location.pathname === '/mapping/allocate'}
              onClick={() => history.push('/mapping/allocate')} button className={classes.nested}>
              <ListItemIcon id='sidebar_icon_unit_01' className={classes.iconn}>
                <AccountTreeIcon />
              </ListItemIcon>
            </ListItem>
            </Tooltip> */}

                <Tooltip title="Pay Template" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/payroll/list"}
                    onClick={() => history.push("/payroll/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <ReceiptRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Incentive Provide" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/incentiveprovide/list"}
                    onClick={() => history.push("/incentiveprovide/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <CardGiftcardIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Payroll Config" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/employee/paylist"}
                    onClick={() => history.push("/employee/paylist")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <ReceiptLongRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                {/* <Tooltip title="Routine Configuration" placement="right" arrow>

          <ListItem style={{paddingLeft:"6px"}} button onClick={handleClick} >
              <ListItemIcon id='sidebar_icon_inventory' className={classes.icon}>
                <SafetyCheckRoundedIcon />
              </ListItemIcon>
              {/* <ListItemText className={classes.textlist} primary="Inventory" id='sidebar_inventory'/>  
              {open ? <ExpandLess /> : <ExpandMore />} 
            </ListItem>
            </Tooltip> */}

                {/* <List   component="nav" className={classes.root}> */}

                {/* <Collapse in={open} timeout="auto" unmountOnExit> */}

                {/* <Tooltip title="Over Time" placement="right" arrow>
                <ListItem selected={location.pathname === '/overtime/list'}
                  onClick={() => history.push('/overtime/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <MoreTimeRoundedIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
                <Tooltip title="Permission" placement="right" arrow>
                <ListItem selected={location.pathname === '/ConfigPermission/list'}
                  onClick={() => history.push('/ConfigPermission/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <GroupWorkRoundedIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip> */}

                <Tooltip title="Pay Generation" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/payrollgeneration/list"}
                    onClick={() => history.push("/payrollgeneration/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <CreditScoreIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>
                <Tooltip title="Payslip" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/employee/payslip"}
                    onClick={() => history.push("/employee/payslip")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <DescriptionIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Configuration" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/configuration/list"}
                    onClick={() => history.push("/configuration/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <PermDataSettingRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Sequence" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/sequence"}
                    onClick={() => history.push("/sequence")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <AnimationRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip title="Shift" placement="right" arrow>
                  <ListItem
                    selected={
                      location.pathname === "/attendance/shift_reassign"
                    }
                    onClick={() => history.push("/attendance/shift_reassign")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <ScheduleSend />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip
                  title="Attendance Configuration"
                  placement="right"
                  arrow
                >
                  <ListItem
                    selected={location.pathname === "/config/attendance"}
                    onClick={() => history.push("/config/attendance")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <NoteAddIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Shift" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/Shift/list"}
                    onClick={() => history.push("/Shift/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <SensorOccupiedRoundedIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>
                {/* <Tooltip title="On Duty" placement="right" arrow>
                <ListItem selected={location.pathname === '/onduty/list'}
                  onClick={() => history.push('/onduty/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <WorkHistoryRoundedIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip> */}

                <Tooltip title="Leave Configuration" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/holiday/list"}
                    onClick={() => history.push("/holiday/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <ManageHistoryIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>

                <Tooltip title="Incentive" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/incentive/list"}
                    onClick={() => history.push("/incentive/list")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon
                      id="sidebar_icon_unit_01"
                      className={classes.iconn}
                    >
                      <AddCardIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                <Tooltip title="Rejoin" placement="right" arrow>
                  <ListItem
                    selected={location.pathname === "/report/rejoin_report"}
                    onClick={() => history.push("/report/rejoin_report")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <SwipeLeftIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>
                <Tooltip
                  title="Resignation / Termination"
                  placement="right"
                  arrow
                >
                  <ListItem
                    selected={
                      location.pathname === "/report/Resignation_report"
                    }
                    onClick={() => history.push("/report/Resignation_report")}
                    button
                    className={classes.nested}
                  >
                    <ListItemIcon className={classes.iconn}>
                      <SummarizeIcon />
                    </ListItemIcon>
                    {/* <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" /> */}
                  </ListItem>
                </Tooltip>

                {/* <Tooltip title="Muster Day Report" placement="right" arrow>
                <ListItem selected={location.pathname === '/report/Musterrole'}
                  onClick={() => history.push('/report/Musterrole')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <RecentActorsRoundedIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip> */}
                {/* <Tooltip title="Configure Leave" placement="right" arrow>
                <ListItem selected={location.pathname === '/leave/configure-leave'}
                  onClick={() => history.push('/leave/configure-leave')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <PendingActionsIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
                <Tooltip title="Leave Approval" placement="right" arrow>
                <ListItem selected={location.pathname === '/leave/manager-approval'}
                  onClick={() => history.push('/leave/manager-approval')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <Groups3Icon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
                <Tooltip title="Apply Leave" placement="right" arrow>
                <ListItem selected={location.pathname === '/leave/apply-leave'}
                  onClick={() => history.push('/leave/apply-leave')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <EditCalendarIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
                <Tooltip title="Manager Report" placement="right" arrow>
                <ListItem selected={location.pathname === '/leave/manager-report'}
                  onClick={() => history.push('/leave/manager-report')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <DonutSmallIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
                <Tooltip title="Organization Report" placement="right" arrow>
                <ListItem selected={location.pathname === '/leave/organization-report'}
                  onClick={() => history.push('/leave/organization-report')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <StackedBarChartIcon />
                  </ListItemIcon>
                </ListItem>
                </Tooltip>
               */}
                {/* </Collapse>  */}
                {/* </List> */}
              </List>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Drawer>
        </div>
      </Hidden>
    </>
  );
}

{
  /* 
   <ListItem button onClick={handleClick} >
              <ListItemIcon id='sidebar_icon_inventory' className={classes.icon}>
                <Inventory2RoundedIcon />
              </ListItemIcon> */
}
{
  /* <ListItemText className={classes.textlist} primary="Inventory" id='sidebar_inventory'/> //
              {/* {open ? <ExpandLess /> : <ExpandMore />} //
            </ListItem> */
}

{
  /* <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding> */
}

{
  /* <ListItem button onClick={handleClick} >
              <ListItemIcon className={classes.icon}>
                <AssignmentTurnedInRoundedIcon />
              </ListItemIcon>
              <ListItemText  className={classes.textlist} primary="GRN" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
        
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem selected={location.pathname === '/grn/new-grn'}
                  onClick={() => history.push('/grn/new-grn')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <PersonAddOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js001' primary="Generate GRN" />
                </ListItem>
          
                <ListItem selected={location.pathname === '/grn'}
                  onClick={() => history.push('/grn')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                    <PlaylistAddCheckOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="GRN List" />
                </ListItem>
              </List>
            </Collapse> */
}

{
  /* <ListItemText className={classes.textlist} id='sidebar_vendors' primary="Vendors" /> */
}

{
  /* </List>
            </Collapse> */
}
