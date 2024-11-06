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
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { getApi } from "../service/User.service";

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
    marginRight: "35px",
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

export default function Forgotpassword() {
  const api = getApi();
  const history = useHistory();
  const classes = useStyles();
  const [submiting, setSubmit] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [success_msg, setSuccessMsg] = useState("");
  const [error_msg, setErrorMsg] = useState("");

  // redirect //vijayd
  useEffect(() => {
    console.log("working");
    if (localStorage.getItem("access_token")) {
      history.push("/home");
    }
  }, []);

  const submitemail = (values, { setErrors }) => {
    setSubmit(true);
    console.log(values);
    let data = {
      email: values.email,
      password: values.password,
    };
    // CALL API HERE
    api
      .post("/password/forgotpassword/", data)
      .then((res) => {
        setSuccess(false);
        setSubmit(false);
        console.log("forgot response");
        //  localStorage.setItem("access_token", res.data.access_token);
        //   history.push('/dashboard')
        console.log(res);
        if (res.data.success) {
          setSuccess(true);
          setSuccessMsg(res.data.msg);
        } else {
          setError(true);
          setErrorMsg(res.data.msg);
          setTimeout(() => {
            setError(false);
            setErrorMsg("");
          }, 3000);
        }
        setTimeout(() => {
          setSuccess(false);
          setSuccessMsg("");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setSubmit(false);
        setError(true);
        setErrorMsg("something went wrong.Try again");
        setTimeout(() => {
          setError(false);
          setErrorMsg("");
        }, 3000);
      });
  };

  const registerFormSchema = yup.object({
    email: yup
      .string()
      .email("Enter valid Email ID")
      .required("Email ID is required."),
  });
  const initialValues = {
    email: "",
  };
  const formik = useFormik({
    validationSchema: registerFormSchema,
    validateOnChange: false,
    validationOnBlur: true,
    onSubmit: submitemail,
    initialValues,
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    formik;

  useEffect(() => {
    console.log(errors);
  }, [formik]);

  return (
    <div className={classes.divison}>
      <br />
      <br />
      <br />

      <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} id="large_device">
          <img
            style={{ marginBottom: "200px", width: "600px" }}
            className={classes.img}
            src="/public/img/logginnew.png"
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
            <div id="f_id" className={classes.paper}>
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <div className={classes.inform}>
                  <Typography component="h1" variant="h5">
                    Forgot Password
                  </Typography>
                  <br />
                  <div className="alerts">
                    {error && <Alert severity="error">{error_msg}</Alert>}
                    {success && <Alert severity="success">{success_msg}</Alert>}
                  </div>

                  <Grid container justifyContent="center">
                    <TextField
                      variant="outlined"
                      type="email"
                      name="email"
                      label="Email ID"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email}
                      required
                      helperText={errors.email}
                    />
                  </Grid>

                  <br />
                  <br />
                  <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      style={{
                        textTransform: "capitalize",
                        width: "200px",
                        height: "50px",
                      }}
                      size="medium"
                      variant="contained"
                      color="primary"
                      disabled={submiting}
                    >
                      {submiting ? (
                        <CircularProgress
                          style={{ color: "#fff" }}
                          size={20}
                          color="secondary"
                        />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Grid>
                </div>
              </form>

              <br />
              <br />
              <Link
                style={{ marginBottom: 15, marginTop: 15 }}
                to="/auth/signin"
              >
                {" "}
                <b>Go to Login</b>{" "}
              </Link>
              {/*<div className={classes.inform}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me logged in"

              />
              <Typography>Forgot Password?</Typography>
              <div>
                <Grid container justifyContent="center">
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </Grid>
              </div>
            </form>
           </div>*/}
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
