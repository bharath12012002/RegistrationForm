import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { shadows } from "@material-ui/system";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { login, getAllUsers } from "../service/User.service";
import "./formstyle.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { Height, Maximize } from "@material-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Divider } from "@material-ui/core";
import { loginUser } from "../service/User.service";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { getApi } from "../service/User.service";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  con: {
    padding: "40px 15px",
    justifyContent: "right",
    width: "806px",
    height: "912px",
  },
}));

//func
export default function Changepassword() {
  const location = useLocation();
  const search = window.location.search;
  const params = queryString.parse(search);
  const api = getApi();
  const history = useHistory();
  const classes = useStyles();
  const [submiting, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [success_msg, setSuccessMsg] = useState("");
  const [error_msg, setErrorMsg] = useState("");

  const [show, showPassword] = useState(false);
  const [show1, showPassword1] = useState(false);
  const handleClickShowPassword = () => {
    showPassword(!show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword1 = () => {
    showPassword1(!show1);
  };

  // const [searchParams] = useSearchParams();
  // redirect //vijayd
  useEffect(() => {
    console.log("working reset password");
    if (localStorage.getItem("ipss_access_token")) {
      history.push("/home");
    }
  }, []);

  useEffect(() => {
    console.log("_uid =");
    //console.log(searchParams)

    console.log(params._uid);
  }, []);

  const validate = (values) => {
    const errors = {};

    if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password is not matched";
    }

    return errors;
  };

  const changepassword = (values, { setErrors }) => {
    setSubmit(true);
    console.log("change pass response");
    console.log(values);
    let data = {
      token: params._uid,
      password: values.password,
    };
    // CALL API HERE
    api
      .post("/password/forgotpassword/verify/", data)
      .then((res) => {
        console.log("change pass response");
        //  localStorage.setItem("access_token", res.data.access_token);
        //   history.push('/dashboard')
        console.log(res);
        if (res.data.success) {
          setSuccess(true);
          setSuccessMsg(res.data.msg);
          setTimeout(() => {
            setSuccess(false);
            setSuccessMsg("Password changed successfully");
            history.push("/auth/signin");
          }, 3000);
        } else {
          setError(true);
          setErrorMsg(res.data.msg);
          setTimeout(() => {
            setError(false);
            setErrorMsg("");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMsg(err.response.data.msg);
        setTimeout(() => {
          setError(false);
          setErrorMsg("");
        }, 3000);
      });
  };

  const registerFormSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^[0-9A-Za-z][!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Enter Strong Password (min 8 char, alpha numeric, one special character and one CAPS)"
      )
      .min(
        8,
        "Enter Strong Password (min 8 char, alpha numeric, one special character and one CAPS)"
      ),
    confirm_password: yup.string().required("Confirm Password is required"),
  });
  const initialValues = {
    password: "",
    confirm_password: "",
  };
  const formik = useFormik({
    validationSchema: registerFormSchema,
    validateOnChange: false,
    validationOnBlur: true,
    onSubmit: changepassword,
    initialValues,
    validate,
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    formik;

  useEffect(() => {
    console.log(errors);
  }, [formik]);

  return (
    <div className={classes.divison}>
      <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} id="large_device">
          <img
            style={{ marginBottom: "200px", width: "600px", marginTop: "70px" }}
            className={classes.img}
            src="/public/img/image.png"
          />
        </Grid>

        {/* <img src="/src/Images/signin.png" style={{maxWidth: "190px"}}/>
    
      <Container>
        <Row>
      <Col lg={6} sm={6} xs={12}>
                <img src={Signin} alt="#" />
              </Col>
          
              <Col lg={6} sm={12} xs={12}>
                </Col>

                </Row>*/}
        <Grid item xs={6} className="signin_form">
          <Container>
            <div className="l_large">
              <h1 align="center"></h1>{" "}
            </div>
            <div id="f_id" className={classes.paper}>
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <div className={classes.inform}>
                  <Typography component="h1" variant="h5">
                    Change Password
                  </Typography>
                  <br />
                  <div className="alerts">
                    {error && (
                      <Alert style={{ marginBottom: 20 }} severity="error">
                        {error_msg}
                      </Alert>
                    )}
                    {success && (
                      <Alert style={{ marginBottom: 20 }} severity="success">
                        {success_msg}
                      </Alert>
                    )}
                  </div>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {show ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={show ? "text" : "password"}
                        id="password"
                        autoComplete="current-password"
                        error={errors.password}
                        helperText={errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {show1 ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type={show1 ? "text" : "password"}
                        id="confirm_password"
                        autoComplete="current-password"
                        error={errors.confirm_password}
                        helperText={errors.confirm_password}
                      />
                    </Grid>
                  </Grid>

                  <br />
                  <br />
                  <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      size="medium"
                      variant="contained"
                      color="primary"
                      style={{ textTransform: "capitalize" }}
                      // disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </div>
              </form>

              <br />
              <br />
            </div>
          </Container>
          <Grid id="small_device" item xs={12}>
            <img
              style={{ width: "100%" }}
              className={classes.img}
              src="/public/img/image.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
