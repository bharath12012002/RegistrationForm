import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SecurityIcon from "@material-ui/icons/Security";
import SettingsIcon from "@material-ui/icons/Settings";
import TuneIcon from "@material-ui/icons/Tune";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
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
import SummarizeIcon from "@mui/icons-material/Summarize";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import ReportIcon from "@mui/icons-material/Report";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import BakeryDiningRoundedIcon from "@mui/icons-material/BakeryDiningRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import FlagCircleRoundedIcon from "@mui/icons-material/FlagCircleRounded";
import ThreePRoundedIcon from "@mui/icons-material/ThreePRounded";
import ReceiptIcon from "@mui/icons-material/Receipt";
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
import PermDataSettingRoundedIcon from "@mui/icons-material/PermDataSettingRounded";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ViewListIcon from "@mui/icons-material/ViewList";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import { Divider } from "@mui/material";
import "./global.css";
import { Show } from "@material-ui/core";
const drawerWidth = 260;
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SafetyCheckRoundedIcon from "@mui/icons-material/SafetyCheckRounded";
import MoreTimeRoundedIcon from "@mui/icons-material/MoreTimeRounded";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import SensorOccupiedRoundedIcon from "@mui/icons-material/SensorOccupiedRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import Groups3Icon from "@mui/icons-material/Groups3";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Groups2Icon from "@mui/icons-material/Groups2";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import RememberMeIcon from "@mui/icons-material/RememberMe";
// const useStyles = makeStyles(theme => ({

//   root: {

//         display: 'flex   !important',
//         flexWrap: 'wrap !important',

//         maxWidth: 360,
//         //padding: '0px !important',
//         width: '100% !important',

//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(1),
//   },
//   closeMenuButton: {
//     marginRight: 'auto',
//     marginLeft: 0,
//   },
//   nested: {
//     paddingRight: theme.spacing(1),
//     paddingTop: '4px',
//     paddingBottom: '4px',
//     paddingLeft: '17px',
//   },
//   ltcus: {
//     paddingLeft: theme.spacing(1),
//     paddingRight: theme.spacing(1),
//     paddingTop: '4px',
//     paddingBottom: '4px'
//   },
//   icon: {
//     minWidth: '34px',
//   },
//   iconn: {
//     minWidth: '26px',
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex   !important",
    flexWrap: "wrap !important",

    // maxWidth: 360,
    //padding: '0px !important',
    width: "100% !important",
  },

  nested: {
    paddingRight: theme.spacing(1),
    paddingTop: "4px !important",
    paddingBottom: "4px !important",
    paddingLeft: "17px !important",
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
    backgroundColor: "#ffffff !important",
    // marginTop: '60px',
    //textDecoration: 'none !important',
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: theme.zIndex.appBar - 1,
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#fff    !important",

    //textDecoration: 'none !important',
    transition: theme.transitions.create("width   !important", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#dde1fa    !important",
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
    backgroundColor: "#fff    !important",
    //textDecoration: 'none !important',
    width: drawerWidth,
    marginTop: "64px",
    borderRadius: "30px",
    height: "100%",
  },
  drawerHeader: {
    display: "flex   !important",
    alignItems: "center   !important",
    textDecoration: "none !important",
    backgroundColor: "#00308f !important",
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
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
function Mobilesidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();

  // const [open, setOpen] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  // const handleClick = () => {
  //   setOpen(!open);
  //   history.push('/inventory')
  // };
  const handleClick = () => {
    setOpen(!open);
    setOpen1(!open1);
  };
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
  //production
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

  //  const PermissionorderShipment=localStorage.getItem("orderShipment")

  const drawer = (
    <div style={{ marginTop: "10px" }} className="ecompage">
      <List component="nav" className={classes.root}>
        {/* {Permission.includes('view') &&  */}
        <ListItem
          selected={location.pathname === "/home"}
          onClick={() => history.push("/home")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_home" className={classes.iconn}>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_home"
            primary="Home"
          />
        </ListItem>
        {/* } */}
        <ListItem
          selected={location.pathname === "/dashboardreport"}
          onClick={() => history.push("/dashboardreport")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <SpaceDashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Executive Dashboard"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/report/home"}
          onClick={() => history.push("/report/home")}
          button
          className={classes.nested}
        >
          <ListItemIcon className={classes.iconn}>
            <ReportRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="ins_accinfo_js002"
            primary="Reports"
          />
        </ListItem>

        <ListItem
          selected={location.pathname === "/employee/list"}
          onClick={() => history.push("/employee/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <BadgeRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Employee"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/employee/config"}
          onClick={() => history.push("/employee/config")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <CoPresentIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Employee Onboard"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/employee/idcard_details"}
          onClick={() => history.push("/employee/idcard_details")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <RememberMeIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="ID Card Details"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/attendance/list"}
          onClick={() => history.push("/attendance/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <FingerprintRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Attendance"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/ot/apply"}
          onClick={() => history.push("/ot/apply")}
          button
          className={classes.nested}
        >
          <ListItemIcon className={classes.iconn}>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="ins_accinfo_js002"
            primary="Attendance Summary"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/mapping/forms/configure"}
          onClick={() => history.push("/mapping/forms/configure")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <LayersOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Assign"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/payroll/list"}
          onClick={() => history.push("/payroll/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <ReceiptRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Pay Template"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/incentiveprovide/list"}
          onClick={() => history.push("/incentiveprovide/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Incentive Provide"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/employee/paylist"}
          onClick={() => history.push("/employee/paylist")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <ReceiptLongRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Payroll Config"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/payrollgeneration/list"}
          onClick={() => history.push("/payrollgeneration/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon className={classes.iconn}>
            <CreditScoreIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="ins_accinfo_js002"
            primary="Pay Generation"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/employee/payslip"}
          onClick={() => history.push("/employee/payslip")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Payslip"
          />
        </ListItem>

        <ListItem
          selected={location.pathname === "/configuration/list"}
          onClick={() => history.push("/configuration/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <PermDataSettingRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Configuration"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/sequence"}
          onClick={() => history.push("/sequence")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <AnimationRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Sequence"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/config/attendance"}
          onClick={() => history.push("/config/attendance")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <NoteAddIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Attendance Configuration"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/Shift/list"}
          onClick={() => history.push("/Shift/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon className={classes.iconn}>
            <SensorOccupiedRoundedIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="ins_accinfo_js002"
            primary="Shift"
          />
        </ListItem>
        <ListItem
          selected={location.pathname === "/holiday/list"}
          onClick={() => history.push("/holiday/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <ManageHistoryIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Leave Configuration"
          />
        </ListItem>

        <ListItem
          selected={location.pathname === "/incentive/list"}
          onClick={() => history.push("/incentive/list")}
          button
          className={classes.nested}
        >
          <ListItemIcon id="sidebar_icon_unit_01" className={classes.iconn}>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.textlist}
            id="sidebar_grn"
            primary="Incentive"
          />
        </ListItem>
        {/* <ListItem selected={location.pathname === '/mapping/allocate'}
              onClick={() => history.push('/mapping/allocate')} button className={classes.nested}>
              <ListItemIcon id='sidebar_icon_unit_01' className={classes.iconn}>
                < AccountTreeIcon />
              </ListItemIcon>
              <ListItemText className={classes.textlist} id='sidebar_grn' primary="Establish Relation" />
            </ListItem> */}

        {/* <ListItem style={{paddingLeft:"6px"}} button onClick={handleClick} >
              <ListItemIcon id='sidebar_icon_unit_01' className={classes.iconn}>
                <SafetyCheckRoundedIcon />
              </ListItemIcon>
              <ListItemText className={classes.textlist} id='sidebar_grn' primary="Routine Configuration" />
              {open ? <ExpandLess /> : <ExpandMore />} 
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit> */}
        <List disablePadding>
          {/* <Tooltip title="Configuration" placement="right" arrow> */}
          {/* <ListItem selected={location.pathname === '/overtime/list'}
                  onClick={() => history.push('/overtime/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <MoreTimeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js001' primary="Over Time" />
                </ListItem>
                <ListItem selected={location.pathname === '/ConfigPermission/list'}
                  onClick={() => history.push('/ConfigPermission/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                   <GroupWorkRoundedIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Permission" />
                </ListItem> */}
          {/* </Tooltip> */}
          {/* <Tooltip title="Configuration" placement="right" arrow> */}

          <ListItem
            selected={location.pathname === "/report/rejoin_report"}
            onClick={() => history.push("/report/rejoin_report")}
            button
            className={classes.nested}
          >
            <ListItemIcon className={classes.iconn}>
              <SwipeLeftIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.textlist}
              id="ins_accinfo_js002"
              primary="Rejoin"
            />
          </ListItem>
          <ListItem
            selected={location.pathname === "/report/Resignation_report"}
            onClick={() => history.push("/report/Resignation_report")}
            button
            className={classes.nested}
          >
            <ListItemIcon className={classes.iconn}>
              <SummarizeIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.textlist}
              id="ins_accinfo_js002"
              primary="Resignation / Termination"
            />
          </ListItem>
          {/* <ListItem selected={location.pathname === '/report/Musterrole'}
                  onClick={() => history.push('/report/Musterrole')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                   <RecentActorsRoundedIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Muster Day Report" />
                </ListItem> */}
          {/* </Tooltip> */}
          {/* <Tooltip title="Configuration" placement="right" arrow> */}
          {/* <ListItem selected={location.pathname === '/onduty/list'}
                  onClick={() => history.push('/onduty/list')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <WorkHistoryRoundedIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="On Duty" />
                </ListItem> */}
          {/* <ListItem selected={location.pathname === '/ot/apply'}
                  onClick={() => history.push('/ot/apply')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <FactCheckIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="On Duty" />
                </ListItem> */}
          {/* </Tooltip> */}
          {/* <ListItem selected={location.pathname === '/leave/configure-leave'}
                  onClick={() => history.push('/leave/configure-leave')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <PendingActionsIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Configure Leave" />
                </ListItem>
                <ListItem selected={location.pathname === '/leave/manager-approval'}
                  onClick={() => history.push('/leave/manager-approval')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <Groups3Icon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Leave Approval" />
                </ListItem>
                <ListItem selected={location.pathname === '/leave/apply-leave'}
                  onClick={() => history.push('/leave/apply-leave')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <EditCalendarIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Apply Leave" />
                </ListItem>
                <ListItem selected={location.pathname === '/leave/manager-report'}
                  onClick={() => history.push('/leave/manager-report')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <DonutSmallIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Manager Report" />
                </ListItem>
                <ListItem selected={location.pathname === '/leave/organization-report'}
                  onClick={() => history.push('/leave/organization-report')} button className={classes.nested}>
                  <ListItemIcon className={classes.iconn}>
                  <StackedBarChartIcon/>  
                   </ListItemIcon>
                  <ListItemText className={classes.textlist} id='ins_accinfo_js002' primary="Organization Report" />
                </ListItem> */}
        </List>
        {/* </Collapse>  */}
      </List>
      <br />
      <br />
      <br />
    </div>
  );

  return (
    // <div className="d-lg-block d-sm-block d-xs-block">
    <div className={classes.root}>
      <CssBaseline />

      <Toolbar>
        <Hidden only={"xs"}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            //onMouseOver={handleDrawerToggle}
            style={{ marginLeft: "-10px", cursor: "pointer" }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden only={["lg", "sm", "xl", "md"]}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ marginLeft: "200px" }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {/* <img  style={{ marginTop: "10px",marginBottom: "10px",  width:100, hight: 45,  cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/aboutspace.png" /> */}
            {/* <img  style={{  width: 170, cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/elogo24.png" /> */}
            {/* <img  style={{  width: 170, cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/pentagon.gif" /> */}
          </Typography>
        </Hidden>
        <Hidden only={["xl", "lg", "md"]}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            // only={['xs', 'sm']}
          >
            {/* <img  only={['xs', 'sm']} style={{ marginTop: "10px", width: 70, cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/elogo24.png" /> */}
            <img
              only={["xs", "sm"]}
              style={{ marginTop: "10px", width: 70, cursor: "pointor" }}
              onClick={() => {
                history.push("/home");
              }}
              className={classes.img}
              src="/public/img/tegzlogo.png"
            />

            {/* <img  style={{ marginTop: "10px",marginBottom: "10px",  width:50, hight: 25,  cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/aboutspace.png" /> */}
          </Typography>
        </Hidden>
      </Toolbar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* <div className={classes.drawerHeader}> */}
            {/* <Typography className='mdc-drawer__title'><b>E-Commerce</b></Typography> */}
            {/* <IconButton className='side_icon' onClick={(event) => {
            setDrawerOpened(false)
          }}>
            {theme.direction === 'ltr' ? <ArrowCircleLeftOutlinedIcon /> : <ArrowCircleLeftOutlinedIcon />}
          </IconButton> */}
            {/* <IconButton onClick={handleDrawerToggle} className='side_icon' >
                <CloseIcon />
              </IconButton>
           
        </div>
        <Divider /> */}
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
    // </div>
  );
}

export default Mobilesidebar;
