import React, { useDebugValue, useState, useEffect } from "react";
import clsx from "clsx";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
//import { IconButton } from '@material-ui/core';
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import "./notification.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import LoginIcon from "@mui/icons-material/Login";
//import { Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
//import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
//import PersonAdd from '@mui/icons-material/PersonAdd';
//import Settings from '@mui/icons-material/Settings';
import Logout from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { Badge, Divider, TextField } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
//import { finYear } from '../service/Usercontrol.service';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
//import { useHistory as H } from 'react-router';
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Dropdown, Tab, Tabs, Row, Col } from "react-bootstrap";
import Notification from "./Notification";
import "bootstrap/dist/css/bootstrap.css";
//import { Avatar } from '@material-ui/core';
//import { Link } from '@material-ui/core';
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { login, getNotification } from "../service/notification.service";
//import { finYear } from '../service/Usercontrol.service';
import menus from "./menu.json";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { useLayoutEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Hidden from "@material-ui/core/Hidden";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  finYear,
  fetchYear,
  comProbs,
  comProbsUpdate,
  reloadToken,
  companyProperties,
  getuser,
} from "../service/Usercontrol.service";
import { Autocomplete } from "@mui/material";
import { S3_URL } from "../service/s3url";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
const drawerWidth = 240;
//import Mobile from "./mobilesidebar";
import Mobilesidebar from "./mobilesidebar";
import { Image } from "react-bootstrap";
import { baseURL } from "../config/index";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PeopleIcon from "@mui/icons-material/People";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,

      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  label: {
    display: "block",
  },
  input: {
    width: 200,
  },
  listbox: {
    width: "100%",
    margin: 0,

    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    color: "#44bfd8",
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "#44bfd8",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "#44bfd8",
    },
  },
}));

export const defaultS3Data = {
  //media_id: "",
  media_key: "",
};

//drawer menu open close controlled based on user login
export default function Header({
  isSignedIn,
  onSignOut,
  drawerOpened,
  setDrawerOpened,
}) {
  const classes = useStyles();
  const [selectedkey, setSelectKey] = useState("");
  // const [open, setOpen] = React.useState(false);
  const [notify, setNotify] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open1, setOpen1] = React.useState(false);
  const [username, setName] = useState("");
  //const h = H();
  const [searchValue, setSearchValue] = React.useState("");
  const [photo, setPhoto] = useState(localStorage.getItem("photo"));
  const handleClose1 = () => {
    setOpen1(false);
    // loadSku();
  };

  const handleOpen = () => {
    setOpen1(true);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
    // document.cookie.split(';').forEach((cookie) => {
    //   document.cookie = cookie
    //     .replace(/^ +/, '')
    //     .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    // });

    // Clear session storage
    window.sessionStorage.clear();

    // Clear local storage
    window.localStorage.clear();
    // window.location.href = '/logout?cache-clear=' + Date.now();
  };

  const handleLogout = () => {
    // Clear cookies
    onClick();
  };

  const PermissionUser = localStorage.getItem("user");
  const PermissionoUserrole = localStorage.getItem("user_role");
  const PermissionoSupport = localStorage.getItem("support_ticket_crud");
  const PermissionTeam = localStorage.getItem("Team Assign");
  const PermissionEmployee = localStorage.getItem("Employee Configuration");
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   setSelectKey(selectedkey)

  // }, [])
  const HandleHome = () => {
    history.push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("photo") != "") {
      setPhoto(localStorage.getItem("photo"));
    }
    console.log(photo, "userphoto");
  }, [localStorage.getItem("photo")]);

  const loadphoto = () => {
    const id = localStorage.getItem("Userid");
    const user_access_token = localStorage.getItem("ipss_access_token");

    getuser(user_access_token, id)
      .then((res) => {
        // handle success
        console.log(res);
        setPhoto(res.data.userphoto);
        setName(res.data.firstname);
        // setPhoto({
        //   media_key: res.data.userphoto,
        // })
        // setStatus(res.data.)
        // setRawmat(res.data.results[0].bomDetails)
        //  setBomuantity(res.data.quantity)

        setTimeout(function () {
          window.scrollTo(0, 0);
        }, 2);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        console.log("Always");
      });
  };

  // const Permission=localStorage.getItem("ineventory_crud")
  /*
 
  
  
    const getCompanyProperties = () => {
      const user_access_token = localStorage.getItem("ipss_access_token");
      // Make a req to get all users with current page number
      finYear(user_access_token).then(res => { // handle success
        console.log(res);
        setCompanyProps(res.data)
        setUpdateOpen(true);
      })
        .catch(error => {// handle error
          console.log(error);
        })
        .then(() => {// always executed
          console.log('always');
        });
    }
  */

  // useEffect(() => {
  //   console.log("Component mounted")
  //   if(localStorage.getItem("ipss_access_token")){
  //     getCompanyProperties();
  //     getComp();

  //   }
  // }, [])
  const [year, setyear] = useState([]);
  const [companyID, setCompanyID] = useState([]);
  const Permissions = ["PG"];
  // var nameObject=companyID.filter((f) => Permissions.includes(f.compcode));

  const setLocalFinYear = (finyr_id, finyr, company_id, compcode, compname) => {
    localStorage.setItem("finyear_id", finyr_id);
    localStorage.setItem("finyear_name", finyr);
    localStorage.setItem("company_id", company_id);
    localStorage.setItem("compcode", compcode);
    localStorage.setItem("compname", compname);
  };
  const getCompanyProperties = () => {
    const user_access_token = localStorage.getItem("ipss_access_token");
    // Make a req to get all users with current page number
    fetchYear(user_access_token).then((res) => {
      // handle success
      console.log("years");
      console.log(res);
      setyear(res.data.fin_years);
      setCompanyID(res.data.company_codes);
    });

    finYear(user_access_token)
      .then((res) => {
        // handle success
        console.log(res);
        // setCompanyProps(res.data)
        // SET FIN YEAR ID AND COMP CODE ID
        let { finyr_id, finyr, company_id, compcode, compname } = res.data;
        setLocalFinYear(finyr_id, finyr, company_id, compcode, compname);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        console.log("always");
      });
  };

  const [currentyear, setFinYear] = useState([]);
  const [currentcompcode, setCompCode] = useState([]);
  const user_access_token = localStorage.getItem("ipss_access_token");
  const getComp = () => {
    companyProperties(user_access_token).then((res) => {
      console.log("success");
      console.log(res);
      setFinYear(res.data.finyr);
      setCompCode(res.data.compcode);
      //console.log(res.data.finyr)
      //console.log(res.data.compcode)
    });
  };
  const reloadUserToken = () => {
    const user_access_token = localStorage.getItem("ipss_access_token");
    reloadToken(user_access_token)
      .then((res) => {
        // Set new token
        localStorage.setItem("ipss_access_token", res.data.access_token);
        localStorage.setItem("access_token", res.data.access_token);

        // A Redirect is fine
      })
      .catch((err) => {
        //handle error
      })
      .then(() => {
        // always executed
        window.location.reload();
        console.log("always");
      });
  };
  const updateCompanyprops = (fieldName, fieldValue) => {
    // GET local variable here
    console.log("Called this function Vijay D");
    let finyr,
      compcode = "";
    if (fieldName === "fin_year") {
      finyr = fieldValue.finyr;
      compcode = localStorage.getItem("compcode");
    } else if (fieldName === "company_id") {
      compcode = fieldValue.compcode;
      finyr = localStorage.getItem("finyear_name");
    }
    // Update values here
    const user_access_token = localStorage.getItem("ipss_access_token");
    comProbsUpdate(finyr, compcode, user_access_token)
      .then((res) => {
        // Reload token
        reloadUserToken();
        // Reload local storage
        getCompanyProperties();
      })
      .catch((err) => {
        //handle error
      })
      .then(() => {
        // always executed
        console.log("always");
      });
  };
  // const url='https://pghrmapi.techgenzi.com';

  const access_token = localStorage.getItem("ipss_access_token");
  useEffect(() => {
    console.log("Component mounted");

    getCompanyProperties();
    getComp();
    sessionStorage.setItem("ipss_api_url", url);
    localStorage.setItem("ipss_api_url", url);
  }, [access_token, url]);

  const history = useHistory();

  const url = baseURL();

  // const url= 'https://pghrmapi.techgenzi.com';

  useEffect(() => {
    sessionStorage.setItem("ipss_api_url", url);
    localStorage.setItem("ipss_api_url", url);
    if (isSignedIn === "true") {
      getCompanyProperties();
      getComp();
    } else {
      ("");
    }
    loadphoto();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpened,
        })}
      >
        <Toolbar className={classes.toolbar}>
          {!isSignedIn ? (
            // <Hidden only={"xs"} >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {/* <img style={{width: 170, cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/elogo24.png" /> */}
              <img
                style={{ width: 170, cursor: "pointor" }}
                onClick={() => {
                  history.push("/home");
                }}
                className={classes.img}
                src="/public/img/pentagon.gif"
              />
            </Typography>
          ) : (
            // </Hidden>
            <Mobilesidebar
              isSignedIn={isSignedIn}
              className={classes.title}
              //setDrawerOpened={setDrawerOpened(false)}
            />
          )}

          {/* 
          {(isSignedIn && !drawerOpened) &&
            <>
              {/* <Hidden only={"xs"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={(event) => {
                setDrawerOpened(true)
              }}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >


              <ArrowCircleRightOutlinedIcon style={{ width: '50px', height: '40px' }} />
            </IconButton>
             </Hidden> 
             <Row>
             <Col lg={13} sm={13} xs={12} style={{ padding: '15px' }}>
             { /* mobile sidebar start 
             < Mobilesidebar 
              isSignedIn={isSignedIn}
             
            //setDrawerOpened={setDrawerOpened(false)}
             />
             </Col>


             </Row> 


            </>
          } */}
          {/* <Hidden only={"xs"} >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}

            > */}
          {/* <img style={{ marginTop: "10px", width: 200, cursor: 'pointor' }} onClick={() => { history.push('/home') }} className={classes.img} src="/public/img/logo_1.png" /> */}

          {/* </Typography>
          </Hidden> */}

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

          {isSignedIn ? (
            <>
              {/* {Permission.includes('view') &&  */}
              {/* <Autocomplete
            variant="outlined"
            id="compcode"
            className={classes.year}
            style={{ width: '180px' }}
            required
            options={companyID}
            value={companyID.filter((item) => item.compcode === currentcompcode).length ? companyID.filter((item) => item.compcode === currentcompcode)[0] : {}}
            getOptionLabel={(option) => option.compcode}
            onChange={(event, newComp) => {
              console.log(newComp)
              updateCompanyprops("company_id", newComp)
            }}
            renderInput={(params) =>
              <TextField
                id="compcode"
                variant="outlined"
                label="Company code"
                //label="Comp code"
                name="compcode"
                placeholder='Comp code'
                {...params}
                 InputLabelProps={{
               shrink: true,
                 }}
                
                size="small"

              />}
          /> */}
              {/* <Tooltip title="Notifications">
              <IconButton>
            <Notification></Notification>
            </IconButton>
            </Tooltip> */}
              {/* } */}
              {/* {PermissionoSupport.includes("view") && ( */}
              <Tooltip title="Support Ticket">
                <IconButton
                  color="blue"
                  variant="outlined"
                  onClick={() => {
                    history.push("/supportticket/list");
                  }}
                >
                  <SupportAgentIcon sx={{ color: "blue" }} />
                </IconButton>
              </Tooltip>
              {/* )} */}
              {/* } */}
              {/* <IconButton
              color="inherit"
              variant="outlined"
              className={classes.link}
              //component={Link}
              onClick={() => { history.push('/profile') }}
            ><HelpOutlineRoundedIcon /></IconButton> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    {/* <Avatar sx={{ width: 32, height: 32 }} src={S3_URL + photo.media_key}></Avatar> */}
                    {/* {photo && photo.media_key ? */}
                    {/* <Image className="round user_avatar" roundedCircle src={S3_URL + localStorage.getItem("photo")} alt="Profile image" />
            : */}
                    <Avatar
                      className="user_avatar"
                      style={{ backgroundColor: "#3874ff    " }}
                      alt="Remy Sharp"
                      src={S3_URL + photo}
                    >
                      {username.charAt(0)}
                    </Avatar>
                    {/* } */}
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem style={{ marginLeft: "7px", marginRight: "7px" }}>
                    <ListItemIcon>
                      <IconButton
                        id="signout"
                        color="inherit"
                        variant="outlined"
                        onClick={() => history.push("/userprofile")}
                        component={Link}
                      >
                        {" "}
                        <ManageAccountsIcon style={{ color: "#00308f" }} />{" "}
                        &nbsp;
                        <ListItemText style={{ color: "#00308f" }}>
                          My Account
                        </ListItemText>
                      </IconButton>
                    </ListItemIcon>

                    {/*
            <Logout fontSize="small" />
          
          Logout */}
                  </MenuItem>
                  {/* <br /> */}
                  {/* {PermissionUser.includes('view') &&
                      <><MenuItem style={{ marginLeft: '7px', marginRight: '5px', marginBottom: '5px' }}>
                        <ListItemIcon>
                          <IconButton
                            id='define_user'
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push('/users/users-list')}
                            component={Link}
                          > <PersonAddIcon style={{ color: '#00308f' }} /> &nbsp;
                            <ListItemText style={{ color: '#00308f' }}> Define User</ListItemText>

                          </IconButton>

                        </ListItemIcon> */}

                  {/*
      <Logout fontSize="small" />
    
    Logout */}
                  {/* </MenuItem> */}
                  {/* <br></br> */}
                  {/* </>
                    } */}
                  {/* } */}
                  {PermissionoUserrole.includes("view") && (
                    <>
                      <MenuItem
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <ListItemIcon>
                          <IconButton
                            id="userrole"
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push("/userstab")}
                            component={Link}
                          >
                            {" "}
                            <AdminPanelSettingsIcon
                              style={{ color: "#00308f" }}
                            />{" "}
                            &nbsp;
                            <ListItemText style={{ color: "#00308f" }}>
                              Manage Userole
                            </ListItemText>
                          </IconButton>
                        </ListItemIcon>

                        {/*
      <Logout fontSize="small" />
    
    Logout */}
                      </MenuItem>
                      {/* <br /> */}
                    </>
                  )}
                  {/* } */}
                  <>
                    <MenuItem
                      style={{
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <ListItemIcon>
                        <IconButton
                          id="userrole"
                          color="inherit"
                          variant="outlined"
                          onClick={handleOpen}
                          // component={Link}
                        >
                          {" "}
                          <SettingsApplicationsRoundedIcon
                            style={{ color: "#00308f" }}
                          />{" "}
                          &nbsp;
                          <ListItemText style={{ color: "#00308f" }}>
                            Configure
                          </ListItemText>
                        </IconButton>
                      </ListItemIcon>

                      {/*
      <Logout fontSize="small" />
    
    Logout */}
                    </MenuItem>
                    {/* <br /> */}
                  </>
                  {PermissionTeam.includes("view") && (
                    <>
                      <MenuItem
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <ListItemIcon>
                          <IconButton
                            id="userrole"
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push("/teamassign")}
                            component={Link}
                          >
                            {" "}
                            <Diversity1Icon style={{ color: "#00308f" }} />{" "}
                            &nbsp;
                            <ListItemText style={{ color: "#00308f" }}>
                              Assign Team
                            </ListItemText>
                          </IconButton>
                        </ListItemIcon>

                        {/*
      <Logout fontSize="small" />
    
    Logout */}
                      </MenuItem>
                      {/* <br /> */}
                    </>
                  )}
                  {PermissionEmployee.includes("view") && (
                    <>
                      <MenuItem
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <ListItemIcon>
                          <IconButton
                            id="userrole"
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push("/employerconfig")}
                            component={Link}
                          >
                            {" "}
                            <PeopleIcon style={{ color: "#00308f" }} /> &nbsp;
                            <ListItemText style={{ color: "#00308f" }}>
                              Employer Configure
                            </ListItemText>
                          </IconButton>
                        </ListItemIcon>

                        {/*
      <Logout fontSize="small" />
    
    Logout */}
                      </MenuItem>
                      {/* <br /> */}
                    </>
                  )}
                  {PermissionEmployee.includes("view") && (
                    <>
                      <MenuItem
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <ListItemIcon>
                          <IconButton
                            id="biometric"
                            color="inherit"
                            variant="outlined"
                            onClick={() =>
                              history.push("/attendance/biometricatt")
                            }
                            component={Link}
                          >
                            {" "}
                            <DocumentScannerIcon
                              style={{ color: "#00308f" }}
                            />{" "}
                            &nbsp;
                            <ListItemText style={{ color: "#00308f" }}>
                              Biometric Attendance
                            </ListItemText>
                          </IconButton>
                        </ListItemIcon>

                        {/*
      <Logout fontSize="small" />
    
    Logout */}
                      </MenuItem>
                      {/* <br /> */}
                    </>
                  )}
                  <MenuItem
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <ListItemIcon>
                      <IconButton
                        id="signout"
                        color="inherit"
                        variant="outlined"
                        // className={classes.link}
                        component={Link}
                        to={isSignedIn ? "/" : "/auth/signin"}
                        onClick={onClick}
                      >
                        {" "}
                        <Logout style={{ color: "#00308f" }} /> &nbsp;{" "}
                        <ListItemText style={{ color: "#00308f" }}>
                          Sign Out
                        </ListItemText>
                      </IconButton>
                    </ListItemIcon>
                    {/* <ListItemText>Logout</ListItemText> */}
                    {/*
            <Logout fontSize="small" />
          
          Logout */}
                  </MenuItem>
                </Menu>
              </Box>{" "}
              {/* <Button style={{ textTransform: 'capitalize' }} id='home_header' onClick={() => history.push('/')} color="inherit">profile</Button> */}
            </>
          ) : (
            <>
              {/* <Button style={{ textTransform: 'capitalize' }} id='home_header' onClick={() => history.push('/')} color="inherit"><HomeIcon />Home</Button>
              <Button style={{ textTransform: 'capitalize' }} id='signin_header' onClick={() => history.push('/auth/signin')} color="inherit"> <LoginIcon />Sign In</Button>
   */}
            </>
            //               <React.Fragment>
            //                 {/* {
            //                  onClick === {HandleHome} ?

            //                 <IconButton onClick={HandleHome}>
            //                 <HomeIcon  style={{color: '#ffffff'}} />
            //                 </IconButton>
            //                 :
            //                 <IconButton onClick={HandleHome}>
            //                 <HomeIcon   />
            //                 </IconButton>
            // } */}

            //                 <Nav className="fv-menu" activeKey={selectedkey}
            //                   onSelect={() => setSelectKey(selectedkey)}>
            //                   <Nav.Item id='homelink' className={location.pathname === '/' ? 'active' : ''} to="/" as={Link}><HomeIcon /> Home</Nav.Item>
            //                   <Nav.Item id='signinlink' to="/auth/signin" className={location.pathname === '/auth/signin' ? 'active' : ''} as={Link}><LoginIcon /> Sign In</Nav.Item>
            //                 </Nav>
            //                 {/* <List
            //             component="nav"  className={classes.root}
            //           >
            //             <ListItem selected={location.pathname === '/'}
            //               onClick={() => history.push('/')} button className={classes.nested}>
            //               <ListItemIcon  id='sidebar_icon_home'className={classes.iconn}>
            //                 <HomeIcon />
            //               </ListItemIcon>
            //               <ListItemText className={classes.textlist} id='sidebar_home' primary="Home" />
            //             </ListItem>
            //              &nbsp;
            //             <ListItem selected={location.pathname === '/auth/signin'}
            //               onClick={() => history.push('/auth/signin')} button className={classes.nested}>
            //               <ListItemIcon id='sidebar_icon_dashboard' className={classes.iconn}>
            //                 <LoginIcon />
            //               </ListItemIcon>
            //               <ListItemText className={classes.textlist} id='sidebar_dashboard' primary="Sign In" />
            //             </ListItem>
            //             </List>
            //                */}
            //               </React.Fragment>
          )}
          {/* {isSignedIn ?
            (<IconButton
            id='signout'
              color="inherit"
              variant="outlined"
              className={classes.link}
              component={Link}
              to={isSignedIn ? '/' : '/auth/signin'}
              onClick={onClick}
            ><LogoutIcon /></IconButton>)
            :
            ''
            // (<Button style={{ textTransform:'capitalize'}} onClick={() => h.push('/')} color="inherit">Sign In</Button>)
          } */}
        </Toolbar>
      </AppBar>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          {/* Post data form starts */}
          <form onSubmit={handleClose}>
            {/* Dialog header */}
            <DialogTitle
              id="alert-dialog-title"
              style={{ color: "#fff", backgroundColor: "#00308f" }}
            >
              {"Configure"}
            </DialogTitle>
            <br />
            {/*Dialogue content starts here*/}
            <DialogContent>
              {/*Eroor message from backend. */}

              <DialogContentText id="alert-dialog-description">
                <Autocomplete
                  variant="outlined"
                  id="compcode"
                  className={classes.year}
                  style={{ width: "180px" }}
                  required
                  options={companyID}
                  value={
                    companyID.filter(
                      (item) => item.compcode === currentcompcode
                    ).length
                      ? companyID.filter(
                          (item) => item.compcode === currentcompcode
                        )[0]
                      : {}
                  }
                  getOptionLabel={(option) => option.compcode}
                  onChange={(event, newComp) => {
                    console.log(newComp);
                    updateCompanyprops("company_id", newComp);
                  }}
                  renderInput={(params) => (
                    <TextField
                      id="compcode"
                      variant="outlined"
                      label="Company code"
                      //label="Comp code"
                      name="compcode"
                      placeholder="Comp code"
                      {...params}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </DialogContentText>
            </DialogContent>
          </form>
        </div>
        <DialogActions>
          {/*Cancel button*/}
          <Button
            id="teamadd_cancel"
            variant="outlined"
            style={{ color: "#00308f" }}
            onClick={() => {
              handleClose1();
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
