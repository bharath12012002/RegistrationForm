import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { Badge, Divider } from '@mui/material'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Dropdown, Tab, Tabs, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Avatar } from '@material-ui/core';
import { Link, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { login, getNotification, patchNotificationStatus, getNotificationid, getUnreadnotification } from '../service/notification.service';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import './notification.css';
//import {toast} from 'react-toastify';
//import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
//import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 130;


//import useParams from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: -1,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  label: {
    display: 'block',
  },
  input: {
    width: 200,
  },
  listbox: {
    width: '100%',
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    color: '#000000',
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li[data-focus="true"]': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  },
}));

//drawer menu open close controlled based on user login
export default function Notification() {
  const classes = useStyles();
  // const id = useParams();
  //const navigate = useNavigate()
  const [notify, setNotify] = useState([])
  const [count, setCount] = useState()
  const [formData, setFormData] = useState({ id: "", action: "" });
  const [noteId, setNoteid] = useState();
  // const [id, setId] = useState();
  // const [action, setAction] = useState();

  // const mock = [{ "id": "001", "name": 'Your profile was shorlisted for Ekalaiv Tech', "time": " 20 minutes ago" },
  // { "id": "002", "name": 'Your profile was invited for Ekalaiv Tech as React Developer', "time": " 35 minutes ago" },
  // { "id": "003", "name": 'Ekalaiv Tech post a new job  Fullstack Developer', "time": "40 minutes ago" },
  // { "id": "004", "name": 'Trainer post a new event  Techathon', "time": "45 minutes ago" },
  // ];
  // const nomock = [{ "id": "001", "name": 'Your got offer from Ekalaiv Tech', "time": "1 minutes ago" },
  // { "id": "005", "name": 'The event Techathon was cancelled', "time": "10 minutes ago" },
  // { "id": "006", "name": 'Your profile was invited for Ekalaiv Tech as React Developer', "time": "12 minutes ago" },
  // { "id": "007", "name": 'Your profile was invited for Ekalaiv Tech as React Developer', "time": "15 minutes ago" },
  // ];

  const history = useHistory();

  const getNotify = () => {
    const notification_access_token = localStorage.getItem("ipss_access_token");
    getNotification(notification_access_token).then(res => {
      //setCount(res.data.total_results)
      setNotify(res.data.results)
    }).catch(err => {
      // Handle error
    })
  }
  const getUnread = () => {
    const notification_access_token = localStorage.getItem("ipss_access_token");
    getUnreadnotification(notification_access_token).then(res => {
      setCount(res.data.total_results)
      //setNotify(res.data.results)
    }).catch(err => {
      // Handle error
    })
  }

  function actionWithData(d) {
    const querystring = Object.entries(d).map(([key, value]) => `${key}:${value}`)
    {if (d.type === 'Ecom')
    history.push('/home') 
    //handleClose();
  }
  getNoid(d.id);
  updateStatus(d.id)
   // history.push(`/home/?${querystring.join("&")}`)
 
    console.log(d)
    console.log(d.id)
    console.log(updateStatus)
  }

  const getNoid = (id) => {

    const notification_access_token = localStorage.getItem("ipss_access_token");

    //const id = id;
    //const sku_mast_id = window.location.pathname.split('/')[3];
    //console.log('sku_mast_id : ' + sku_mast_id);

    getNotificationid(notification_access_token, id).then(res => {
      // handle success
      console.log(res);
      setFormData({ id: res.data.id, action: res.data.action })
      getNotify();
      // setId(res.data.id)
      // setAction(res.data.action)
    })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        console.log('always');
      });
  }

  const updateStatus = (id) => {
    // event.preventDefault();
    // setSubmit(true)
    // setOpen1(true)
    //let id = noteId;
    const nomessage = {

      status: "Read",
      // "attachment": attachment.mediakey.value
    };
    const notification_access_token = localStorage.getItem("ipss_access_token");
    //const id = d.id;
    //const id = id;
    patchNotificationStatus(notification_access_token, nomessage, id)
      .then(res => {
        // handle success
        //getNoid()
        console.log(res);
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


  // const onChange = (id, value) => {
  //   console.log(value, id);
  //   setFormData({ ...formData, [id]: value });

  // }
  const notificationDetails = () => {
    //getNoid();
    // onChange();
    updateStatus();
  }


  useEffect(() => {
    getNotify();
   getUnread();
   //setInterval(getNotify, 3000)

  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
          <Badge badgeContent={count} color="error">
            <NotificationsIcon style={{color: '#00308f'}} id='NotificationIcon' />
          </Badge>
      </IconButton>
      <Menu
      className='nos'
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '46ch',
            marginTop: '20px'
          },
        }}
      >
          {/* <Dropdown.Menu alignRight style={{ backgroundColor: '#ffff', color: '#00308f', fontFamily: 'Poppins', marginBottom: '10px', marginTop: '10px', }}> */}
          <h2 style={{ fontSize: 30, marginBottom: '20px', marginTop: '20px', marginLeft: '10px' }}><b>Notifications</b></h2>
          <Divider />
          <p>{noteId}</p>
          <div style={{ marginLeft: '10px' }}>
            <Row md={12}>

              <Col md={12}>


                <Tab.Container >
                  <Tabs
                    color='secondary'
                    variant='pills'
                    defaultActiveKey="All"

                  >
                    <Tab id='tabname' eventKey="All" title="All">
                      <br />
                      <Tab.Content id='btrp_tab' style={{ marginLeft: "10px" }}>
                        {/* {count>0 ?  */}
                        <div  id='force-scroll'>
                          {notify.map((d, idx) => {

                            {
                              if (d.status === "Unread"){
                             

                            {
                              if (d.type === 'roql') {
                                return (
                                  <div>

                                    <Link onClick={() => history.push('/inventory')} id={"Notify_" + idx}

                                      style={{ backgroundColor: '#ede8eb', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove', fontWeight: 'bold' }}  >


                                      <Row style={{ marginLeft: '5px' }}>

                                        <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                        <Col>
                                          <p>{d.subject} </p>

                                        </Col>
                                      </Row>

                                      <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                    </Link>
                                    <Divider variant='middle' />
                                  </div>
                                )
                              }
                            }
                            {
                              if (d.type === 'grn') {
                                return (
                                  <div>

                                    <Link onClick={() => history.push('/goodsnote/list')} id={"Notify_" + idx} style={{ backgroundColor: '#ede8eb', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove', color: '#0e69f0', fontWeight: 'bold' }}  >


                                      <Row style={{ marginLeft: '5px' }}>

                                        <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                        <Col>
                                          <p>{d.subject} </p>
                                        </Col>
                                      </Row>

                                      <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                    </Link>
                                    <Divider variant='middle' />
                                  </div>
                                )
                              }
                            }
                            {
                              if (d.type === 'Ecom') {
                                return (
                                  <div>

                                    <Link onClick={() => actionWithData(d)} id={"Notify_" + idx} style={{ backgroundColor: '#ede8eb', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}  >
                                    {/* //ffd0ef */}

                                      <Row style={{ marginLeft: '5px' }}>

                                        < ShoppingCartCheckoutRoundedIcon style={{ color: '#00308f', width: '60px', height: '40px' }} />

                                        <Col>
                                          <p style={{color: '#0e69f0', fontWeight: 'bold'}}>{d.action} </p>
                                          {/* <p>{d.id}</p> */}
                                        </Col>
                                      </Row>

                                      <Col className='time_span' style={{color: '#00308f', fontWeight: 'italic', marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                    </Link>
                                    <Divider variant='middle' />
                                  </div>
                                )
                              }
                            }

   
                          }
                        }
                        
                        {
                          if (d.status === "Read"){
                         

                        {
                          if (d.type === 'roql') {
                            return (
                              <div>

                                <Link onClick={() => history.push('/inventory')} id={"Notify_" + idx}

                                  // style={{ backgroundColor: '#D0F2FF', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }} 
                                   >


                                  <Row style={{ marginLeft: '5px' }}>

                                    <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                    <Col>
                                      <p>{d.subject} </p>

                                    </Col>
                                  </Row>

                                  <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )
                          }
                        }
                        {
                          if (d.type === 'grn') {
                            return (
                              <div>

                                <Link onClick={() => history.push('/goodsnote/list')} id={"Notify_" + idx} 
                                // style={{ backgroundColor: '#D0F2FF', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}
                                  >


                                  <Row style={{ marginLeft: '5px' }}>

                                    <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                    <Col>
                                      <p>{d.subject} </p>
                                    </Col>
                                  </Row>

                                  <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )
                          }
                        }
                        {
                          if (d.type === 'Ecom') {
                            return (
                              <div>

                                <Link onClick={() => history.push('/home')} id={"Notify_" + idx} 
                                style={{ backgroundColor: '#fff', borderLeftColor: '#dde1fa ', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}
                                  >

                                  <Row style={{ marginLeft: '5px' }}>

                                    <ShoppingCartCheckoutRoundedIcon style={{ color: 'gray', width: '60px', height: '40px' }} />

                                    <Col>
                                      <p style={{color: 'black'}}>{d.action} </p>
                                      {/* <p>{d.id}</p> */}
                                    </Col>
                                  </Row>
                                 
                                  <Col className='time_span' style={{color: 'black', fontWeight: 'italic', marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )
                          }
                        }


                      }
                    }
                          })}

                          {/* {mock.map(function (d, idx) {
                                  return (
                                    <div>

                                      <Link  to={'/notification/details'} >


                                        <Row style={{ marginLeft: '5px' }}>

                                          <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                          <Col>
                                            <p>{d.name} </p>
                                          </Col>
                                        </Row>

                                        <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.time}</span></Col>

                                      </Link>
                                      <Divider variant='middle' />
                                    </div>
                                  )
                                })} */}
                        </div>
                         {/* :
                         <h1>No Notifications!</h1>
                              } */}
                      </Tab.Content>

                    </Tab>

                    <Tab id='tabname1' eventKey="ROQL" title="ROQL">
                      <br />
                      <Tab.Content id='btrp_tab' style={{ marginLeft: '10px' }}>
                      
                        <div id='force-scroll'>
 
                          {/* {notify.map((d, idx) => {
                            {
                              if(d.status === 'Unread' && d.type === 'roql' && count > 0 )
                            
                          
                                return (
                                  <div>

                                    <Link onClick={() => history.push('/inventory')} id={"Notify_" + idx}

                                      style={{ backgroundColor: '#ede8eb', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove', fontWeight: 'bold' }}  >


                                      <Row style={{ marginLeft: '5px' }}>

                                        <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                        <Col>
                                          <p>{d.subject} </p>

                                        </Col>
                                      </Row>

                                      <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                    </Link>
                                    <Divider variant='middle' />
                                  </div>
                                )
                          }
                          {
                            if(d.status === 'Read' && d.type === 'roql' && count > 0)
                            return (
                              <div>

                                <Link onClick={() => history.push('/inventory')} id={"Notify_" + idx}

                                  // style={{ backgroundColor: '#D0F2FF', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }} 
                                   >


                                  <Row style={{ marginLeft: '5px' }}>

                                    <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                    <Col>
                                      <p>{d.action} </p>

                                    </Col>
                                  </Row>

                                  <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )
                          }
                          {if(count <= 0 )
                            <h1>No Notifications!</h1>
                          }
                          })} */}
                          <h2>No Notifications!</h2>
                        </div>
                        
                        
                      </Tab.Content>
                    </Tab>
                    <Tab id='tabname1' eventKey="GRN" title="GRN">
                      <br />
                      <Tab.Content id='btrp_tab' style={{ marginLeft: '10px' }}>
                        <div id='force-scroll'>

                          {/* {notify.map((d, idx) => {


                            {
                              if (d.type === 'grn') {
                                return (
                                  <div>

                                    <Link onClick={() => history.push('/grn/grnnote')} id={"Notify_" + idx} style={{ backgroundColor: '#D0F2FF', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}  >


                                      <Row style={{ marginLeft: '5px' }}>

                                        <Avatar style={{ color: '#00308f', width: '30px', height: '30px' }} />

                                        <Col>
                                          <p>{d.subject} </p>
                                        </Col>
                                      </Row>

                                      <Col className='time_span' style={{ marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                    </Link>
                                    <Divider variant='middle' />
                                  </div>
                                )
                              }
                            }


                          })} */}
                           <h2>No Notifications!</h2>
                        </div>
                      </Tab.Content>
                    </Tab>
                    <Tab id='tabname1' eventKey="Ecom" title="Ecom">
                      <br />
                      <Tab.Content id='btrp_tab' style={{ marginLeft: '10px' }}>
                        <div id='force-scroll'>

                          {notify.map((d, idx) => {

                           {
                            if(d.status === 'Unread' && d.type === 'Ecom' )
                            return (
                              <div>

                                <Link onClick={() => actionWithData(d)} id={"Notify_" + idx} style={{ backgroundColor: '#ede8eb', borderLeftColor: '#3874ff', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}  >
                                {/* //ffd0ef */}

                                  <Row style={{ marginLeft: '5px' }}>

                                    < ShoppingCartCheckoutRoundedIcon style={{ color: '#00308f', width: '60px', height: '40px' }} />

                                    <Col>
                                      <p style={{color: '#0e69f0', fontWeight: 'bold'}}>{d.action} </p>
                                      {/* <p>{d.id}</p> */}
                                    </Col>
                                  </Row>

                                  <Col className='time_span' style={{color: '#00308f', fontWeight: 'italic', marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )
                           }
                           {
                            if (d.status === 'Read' && d.type === 'Ecom')
                            return (
                              <div>

                                <Link onClick={() => history.push('/home')} id={"Notify_" + idx} 
                                style={{ backgroundColor: '#fff', borderLeftColor: '#dde1fa ', borderLeftWidth: '10px', borderLeftStyle: 'groove' }}
                                  >


                                  <Row style={{ marginLeft: '5px' }}>

                                    <ShoppingCartCheckoutRoundedIcon style={{ color: 'gray', width: '60px', height: '40px' }} />

                                    <Col>
                                      <p style={{color: 'black'}}>{d.action} </p>
                                      {/* <p>{d.id}</p> */}
                                    </Col>
                                  </Row>
                                 
                                  <Col className='time_span' style={{color: 'black', fontWeight: 'italic', marginLeft: '150px' }}><span>{d.created_at}</span></Col>

                                </Link>
                                <Divider variant='middle' />
                              </div>
                            )

                           }
                          })}
                        </div>
                      </Tab.Content>
                    </Tab>
                  </Tabs>
                </Tab.Container>
              </Col>
              {/* <Col md={6} >
                      <Link  className='btrp_markread' to="#" style={{ marginBottom: '30px' }}>< DoneAllIcon />Mark as Read</Link>
                    </Col> */}
            </Row>
          </div>
          <Divider></Divider>
          <Row style={{ justifyContent: 'right', marginLeft: '270px' }}>
            <Link className='btrp_markread' style={{ cursor: 'pointer' }} onClick={() => history.push('/home/notifications')} id={"Notify_all"}   >

              <ArrowBack />View All</Link></Row>


        {/* </Dropdown.Menu> */}
      </Menu>
    </div>
  );
}
 
