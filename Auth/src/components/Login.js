import React, { useEffect, useState } from "react";
//import Avatar from '@material-ui/core/Avatar';
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { login, getAllUsers } from "../service/User.service";
// import './formstyle.css';
import Grid from "@mui/material/Grid";
import { Height, Maximize } from "@material-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Divider } from "@material-ui/core";
import { loginUser } from "../service/User.service";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getApi } from "../service/User.service";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import Chip from "@mui/material/Chip";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import S1img from "../../public/img/45.png";
import S2img from "../../public/img/49.jpg";
import S3img from "../../public/img/47.jpg";
import S4img from "../../public/img/48.jpg";
import logo from "../../public/img/pentagon.gif";
import JobSeimg from "../../public/img/jobseeker.jpg";
import EmplSeimg from "../../public/img/employers.jpg";
import TrainSeimg from "../../public/img/trainers.jpg";
import ColleSeimg from "../../public/img/colleges.jpg";
import "./animation.css";
import { Row, Col } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Carousel } from "react-bootstrap";
//
const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inform: {
    margin: "2px 0px",
  },
}));
// const useStyles = useTheme((theme) => ({
//   '@global': {
//     a: {
//       textDecoration: 'none',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(7),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   inform: {
//     margin: '2px 0px',
//   },
//   con: {
//     padding: '40px 15px',
//     justifyContent: 'right',
//     width: '806px',
//     height: '912px',
//   },
// }));

export default function SignIn({ onSignIn }) {
  const api = getApi();
  const history = useHistory();
  //   const classes = useStyles();
  const [submiting, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setErrormsg] = useState("");

  // redirect //vijayd
  useEffect(() => {
    document.title = "IPSS ";
    console.log("working");
    if (localStorage.getItem("ipss_access_token")) {
      history.push("/home");
    }
  }, []);

  const [show, showPassword] = useState(false);
  const handleClickShowPassword = () => {
    showPassword(!show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignInSub = (values, { setErrors }) => {
    setSubmit(true);
    console.log(values);
    let data = {
      username: values.email,
      password: values.password,
    };
    // CALL API HERE
    api
      .post("/users/login", data)
      .then((res) => {
        setSubmit(false);
        console.log("login response");
        console.log("res", res);
        if (onSignIn) {
          // companyProps(res.data.access_token)
          //User
          localStorage.setItem("userName", res.data.user.username);
          localStorage.setItem("Userid", res.data.user.userid);
          localStorage.setItem("Fisrtname", res.data.user.firstname);
          localStorage.setItem("Email", res.data.user.emailid);
          localStorage.setItem("photo", res.data.user.userphoto);

          //localStorage.setItem("Salstatert",res.data.user_roles.user_permissions.Salstatert)
          //Token
          //
          localStorage.setItem("ipss_access_token", res.data.access_token);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("profile_stat", res.data.user.status);
          //CRUD Ids
          localStorage.setItem(
            "available modules",
            JSON.stringify(Object.keys(res.data.user_roles.user_permissions))
          );
          localStorage.setItem(
            "dashboard_report",
            res.data.user_roles.user_permissions.dashboard_report
          );
          localStorage.setItem(
            "ineventory_crud",
            res.data.user_roles.user_permissions.ineventory_crud
          );
          localStorage.setItem(
            "configure_id",
            res.data.user_roles.user_permissions.configure_id
          );
          // localStorage.setItem("Leavemast", res.data.user_roles.user_permissions.Leavemast)
          localStorage.setItem(
            "Approveleave",
            res.data.user_roles.user_permissions.Approveleave
          );
          // localStorage.setItem("Holimas", res.data.user_roles.user_permissions.Holimas)
          // localStorage.setItem("Subholimas", res.data.user_roles.user_permissions.Subholimas)
          // localStorage.setItem("Managerapprove", res.data.user_roles.user_permissions.Managerapprove)
          // localStorage.setItem("RecallLeave", res.data.user_roles.user_permissions.RecallLeave)
          // localStorage.setItem("Manager_Report", res.data.user_roles.user_permissions.Manager_Report)
          // localStorage.setItem("Applyleave", res.data.user_roles.user_permissions.Applyleave)
          // localStorage.setItem("Leavebalance", res.data.user_roles.user_permissions.Leavebalance)
          // localStorage.setItem("Leavehistory", res.data.user_roles.user_permissions.Leavehistory)
          // localStorage.setItem("Leavestatus", res.data.user_roles.user_permissions.Leavestatus)
          localStorage.setItem(
            "BillOfMaterial",
            res.data.user_roles.user_permissions.BillOfMaterial
          );
          localStorage.setItem(
            "DeliveryChalan",
            res.data.user_roles.user_permissions.DeliveryChalan
          );
          localStorage.setItem(
            "grnote",
            res.data.user_roles.user_permissions.GoodsNote
          );
          localStorage.setItem(
            "PO_Dashboard",
            res.data.user_roles.user_permissions.PO_Dashboard
          );
          localStorage.setItem(
            "purchaseOrder",
            res.data.user_roles.user_permissions.purchaseOrder
          );
          localStorage.setItem(
            "POQuotation",
            res.data.user_roles.user_permissions.POQuotation
          );
          localStorage.setItem(
            "po_proposal",
            res.data.user_roles.user_permissions.po_proposal
          );
          localStorage.setItem(
            "proposalDetail",
            res.data.user_roles.user_permissions.proposalDetail
          );
          localStorage.setItem(
            "monitor_po",
            res.data.user_roles.user_permissions.monitor_po
          );
          localStorage.setItem(
            "RawMaterials",
            res.data.user_roles.user_permissions.RawMaterials
          );
          localStorage.setItem(
            "productgroup",
            res.data.user_roles.user_permissions.productgroup
          );
          localStorage.setItem("uom", res.data.user_roles.user_permissions.uom);
          localStorage.setItem(
            "vendor",
            res.data.user_roles.user_permissions.vendor
          );
          //Production
          localStorage.setItem(
            "customerreport",
            res.data.user_roles.user_permissions.customerreport
          );
          localStorage.setItem(
            "dashboardprodplan",
            res.data.user_roles.user_permissions.dashboardprodplan
          );
          localStorage.setItem(
            "dashboardproductmgmt",
            res.data.user_roles.user_permissions.dashboardproductmgmt
          );
          localStorage.setItem(
            "ordermanagdet",
            res.data.user_roles.user_permissions.ordermanagdet
          );
          localStorage.setItem(
            "ordermanagreport",
            res.data.user_roles.user_permissions.ordermanagreport
          );
          localStorage.setItem(
            "operationdet",
            res.data.user_roles.user_permissions.operationdet
          );
          localStorage.setItem(
            "orderstyle",
            res.data.user_roles.user_permissions.orderstyle
          );
          localStorage.setItem(
            "availableresource",
            res.data.user_roles.user_permissions.availableresource
          );
          localStorage.setItem(
            "internalplans",
            res.data.user_roles.user_permissions.internalplans
          );
          localStorage.setItem(
            "plans",
            res.data.user_roles.user_permissions.plans
          );
          localStorage.setItem(
            "operationmap",
            res.data.user_roles.user_permissions.operationmap
          );
          localStorage.setItem(
            "operationskills",
            res.data.user_roles.user_permissions.operationskills
          );
          localStorage.setItem(
            "cutting",
            res.data.user_roles.user_permissions.cutting
          );
          localStorage.setItem(
            "ordermang",
            res.data.user_roles.user_permissions.ordermang
          );
          localStorage.setItem(
            "packing",
            res.data.user_roles.user_permissions.packing
          );
          localStorage.setItem(
            "production",
            res.data.user_roles.user_permissions.production
          );
          localStorage.setItem(
            "quacheck",
            res.data.user_roles.user_permissions.quacheck
          );
          localStorage.setItem(
            "planning",
            res.data.user_roles.user_permissions.planning
          );
          localStorage.setItem(
            "prodplanentry",
            res.data.user_roles.user_permissions.prodplanentry
          );
          localStorage.setItem(
            "shipmentdet",
            res.data.user_roles.user_permissions.shipmentdet
          );
          localStorage.setItem(
            "orderShipment",
            res.data.user_roles.user_permissions.orderShipment
          );
          localStorage.setItem(
            "user_role",
            res.data.user_roles.user_permissions.user_role
          );
          localStorage.setItem(
            "user",
            res.data.user_roles.user_permissions.user
          );
          localStorage.setItem(
            "Skilladmin",
            res.data.user_roles.user_permissions.Skilladmin
          );
          localStorage.setItem(
            "operationmap",
            res.data.user_roles.user_permissions.operationmap
          );
          localStorage.setItem(
            "operation",
            res.data.user_roles.user_permissions.operation
          );
          localStorage.setItem(
            "efficiency",
            res.data.user_roles.user_permissions.efficiency
          );
          localStorage.setItem(
            "stylemapping",
            res.data.user_roles.user_permissions.stylemapping
          );
          localStorage.setItem(
            "qualitycheck",
            res.data.user_roles.user_permissions.qualitycheck
          );
          localStorage.setItem(
            "washing",
            res.data.user_roles.user_permissions.washing
          );
          localStorage.setItem(
            "finalaudit",
            res.data.user_roles.user_permissions.finalaudit
          );
          localStorage.setItem(
            "support_ticket_crud",
            res.data.user_roles.user_permissions.support_ticket_crud
          );
          localStorage.setItem(
            "Inventory Execution",
            res.data.user_roles.user_permissions.InventoryExecution
          );
          localStorage.setItem(
            "Production Execution",
            res.data.user_roles.user_permissions.ProductionExecution
          );
          localStorage.setItem(
            "Customers",
            res.data.user_roles.user_permissions.Customers
          );
          localStorage.setItem(
            "Returns",
            res.data.user_roles.user_permissions.Returns
          );
          localStorage.setItem(
            "Inventory Returns",
            res.data.user_roles.user_permissions.InventoryReturns
          );

          console.log(localStorage, "localstore");
        } else {
          localStorage.setItem(
            "availablemodules",
            JSON.stringify(Object.keys(res.data.user_roles.user_permissions))
          );
          console.log(localStorage, "localstore");
          console.log("available modules", localStorage.availablemodules);
          console.log("in dev mode");
        }
        // localStorage.setItem("role", res.data.role);
        // console.log(localStorage.getItem('role'))
        {
          /* if(res.data.success === true){
  console.log('password required')
  localStorage.setItem("access_token", res.data.access_token);
  localStorage.setItem("email", res.data.user.email);
  localStorage.setItem("role", res.data.role);
  if(onSignIn){
    onSignIn({
      access_token: res.data.access_token,
    });
  } else {
    console.log('in dev mode');
  }
  onSignIn(res.data) 
  history.push('/panelresetpassword')

} */
        }

        //  localStorage.setItem("role", res.data.role);
        // history.push('/dashboard?loggedIn=true')
        if (res.data.success) {
          localStorage.setItem("ipss_access_token", res.data.access_token);
          localStorage.setItem("access_token", res.data.access_token);
          sessionStorage.setItem("ipss_access_token", res.data.access_token);
          sessionStorage.setItem("access_token", res.data.access_token);
          // localStorage.setItem("email", res.data.user.email);
          // localStorage.setItem("role", res.data.role);
          // console.log(localStorage.getItem('role'))
          //  setSuccess(true)
          if (onSignIn) {
            onSignIn({
              access_token: res.data.access_token,
              profile_stat: res.data.user.status,
            });
          } else {
            console.log("in dev mode");
          }
        } else {
          console.log(res);
        }
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        onSignIn(res.data);
        //  console.log(res.data.user.reset_password)
      })
      .catch((err) => {
        setSubmit(false);
        console.log("errorrrrr");
        console.log(err);
        console.log(err.response.data.message);
        setError(true);
        setErrormsg(err.response.data.message);
        setTimeout(() => {
          setError(false);
          //  setErrormsg('User with given username is already exists.')
        }, 3000);
      });
  };

  const registerFormSchema = yup.object({
    email: yup
      .string()
      .email("Enter valid Username")
      .required("Username is required."),
    password: yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    validationSchema: registerFormSchema,
    validateOnChange: false,
    validationOnBlur: true,
    onSubmit: onSignInSub,
    initialValues,
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    formik;

  useEffect(() => {
    console.log(errors);
  }, [formik]);

  return (
    <div>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <MDBContainer
        class="col-md-12"
        className="gradient-form"
        style={{ marginRight: "50px" }}
      >
        <MDBRow style={{ margin: "50px" }}>
          <MDBCol
            class="col-md-4"
            className="authpage_form"
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            {/* <Paper elevation={5} style={{backgroundColor: 'white'}}> */}
            <div
              className="d-flex flex-column ms-5"
              style={{ marginRight: "40px", marginTop: "60px" }}
            >
              {/* <div className="text-center" style={{ alignContent: 'center', marginRight: '20px' }}> */}
              <div>
                <Row
                  style={{ alignContent: "center", justifyContent: "center" }}
                >
                  {/* <Col> */}
                  <img src={logo} style={{ width: "185px" }} alt="logo" />
                  {/* </Col> */}
                  {/* <Col> */}
                </Row>
                <br />
                <Row
                  style={{ alignContent: "center", justifyContent: "center" }}
                >
                  <Avatar
                    className="text-center"
                    style={{ backgroundColor: "#00d4ff", width: "50px" }}
                  >
                    <LockOpenRoundedIcon />
                  </Avatar>
                </Row>
                <br />
                <Row>
                  <h3
                    style={{
                      color: "#00308f",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Sign In
                  </h3>
                </Row>
                {/* </Col> */}
                <br />
                {/* <Col> */}
                {/* <Row style={{alignContent: 'center', justifyContent: 'center'}}>
             
              </Row> */}
                {error && (
                  <Alert style={{ marginBottom: 15 }} severity="error">
                    {error_msg}
                  </Alert>
                )}
                {success && (
                  <Alert severity="success">Successfully Signed In!</Alert>
                )}
                {/* </Col> */}
              </div>

              {/* <p>Please login to your account</p> */}

              <form
                onSubmit={handleSubmit}
                //   className={classes.form}
                noValidate
              >
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon style={{ color: "#00d4ff" }} />
                      </InputAdornment>
                    ),
                  }}
                  style={{ color: "#00308f" }}
                  variant="outlined"
                  type="email"
                  name="email"
                  label="Username"
                  margin="normal"
                  fullWidth
                  required
                  onChange={handleChange}
                  //onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  helperText={errors.email ? errors.email : ""}
                />
                <TextField
                  style={{ color: "#00308f" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon style={{ color: "#00d4ff" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          id="show_password"
                        >
                          {show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  variant="outlined"
                  type={show ? "text" : "password"}
                  name="password"
                  label="Password"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  helperText={errors.password ? errors.password : ""}
                />
                <br /> <br />
                <div className="text-center pt-1 mb-5 pb-1">
                  {/* <Button >Sign in</Button> */}
                  <Button
                    className="mb-4 w-100 gradient-custom-2"
                    type="submit"
                    // style={{
                    //   width: '80px',
                    //   height: '40px',
                    //   color: '#fff',
                    //   backgroundColor: 'white'
                    // }}
                    // style={{color: '#00308f'}}
                    size="medium"
                    variant="contained"
                    // className={classes.submit}
                    id="signin_button"
                  >
                    {submiting ? (
                      <CircularProgress
                        style={{ color: "#fff", textTransform: "capitalize" }}
                        size={20}
                        color="secondary"
                      />
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                  {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                </div>
              </form>

              {/* <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Danger
              </MDBBtn>
            </div> */}
            </div>
            {/* </Paper> */}
          </MDBCol>
          <MDBCol
            col="6"
            class="col-md-8"
            style={{ width: "63.666667%", height: "100%" }}
          >
            {/* <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
    <Carousel  >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
           style={{height: '80vh'}}
          src={S1img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3  style={{color:'#00308f'}}>Inventory Management </h3>
          <p style={{color:'#00308f'}}>Know your Stocks, Manage your Inventory 
 Efficiently manage your inventories from raw materials to finished products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{height: '80vh'}}
          src={S2img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'#00308f'}}>Purchase Order Management </h3>
          <p style={{color:'#00308f'}}>One stop solution to run all your purchase & delivery  operations
Control inventory with inwards and quality information reports.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '80vh'}}
          src={S3img}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'#00308f'}}>Production Management</h3>
          <p style={{color:'#00308f'}}>
           Tailored product management just for you.
Plan and track the production process  to increase quality , efficiency  and cutting down cost.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        


          </div>  */}
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <Carousel fade className="ltlicarsou">
                <Carousel.Item>
                  {/* <div style={{width: '50%', height: '100%'}}> */}
                  <img src={S1img} />
                  {/* </div> */}
                  <Carousel.Caption>
                    <h3 style={{ color: "white", fontWeight: "bolder" }}>
                      Inventory Management{" "}
                    </h3>
                    <p style={{ color: "white" }}>
                      Know your Stocks, Manage your Inventory Efficiently manage
                      your inventories from raw materials to finished products.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={S3img} />
                  <Carousel.Caption>
                    <h3 style={{ color: "white", fontWeight: "bolder" }}>
                      Purchase Order Management{" "}
                    </h3>
                    <p style={{ color: "white" }}>
                      One stop solution to run all your purchase & delivery
                      operations Control inventory with inwards and quality
                      information reports.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={S2img} />
                  <Carousel.Caption>
                    <h3 style={{ color: "white", fontWeight: "bolder" }}>
                      Production Management
                    </h3>
                    <p style={{ color: "white" }}>
                      Tailored product management just for you. Plan and track
                      the production process to increase quality , efficiency
                      and cutting down cost.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item>
                <img src={S4img} />
                <Carousel.Caption>
                  <h3 style={{ color: 'white' }}> Goods Recepit Notes</h3>
                  <p style={{ color: 'white' }}>
                    Tailored product management just for you.
                    Plan and track the production process  to increase quality , efficiency  and cutting down cost.
                  </p>

                </Carousel.Caption>
              </Carousel.Item> */}
              </Carousel>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
