import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getApi } from "../service/User.service";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import InputField from "@ipss/utils/lib/components/InputField";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { useFormik } from "formik";
import * as yup from "yup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    alignItems: "left",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [submiting, setSubmit] = useState(false);
  const classes = useStyles();
  const api = getApi();
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [role_no, setRollno] = useState("");
  const [college_name, setCollegename] = useState("");
  const [department_name, setdepartment_name] = useState("");
  const [year_of_joining, setYear] = useState("");
  const [password, setPassword] = useState();
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setErrormsg] = useState("");
  const [success_msg, setSuccessmsg] = useState("");

  const CollegeNamesData = [
    { name: "The Shawshank Redemption", year: 1994 },
    { name: "The Godfather", year: 1972 },
  ];

  const validate = (values) => {
    const errors = {};

    if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password is not matched";
    }

    return errors;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };
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

  const onSignIn = (values, { setErrors }) => {
    setSubmit(true);
    console.log(values);
    let data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: values.phone_number,
      department_name: values.department_name,
      password: values.password,
      college_name: values.college_name,
      year_of_joining: values.year_of_joining,
      roll_no: values.roll_no,
    };
    // CALL API HERE Ok
    api
      .post("/users/register", data)
      .then((res) => {
        console.log("register response");
        setSubmit(false);
        if (res.data.success) {
          setOpen(true);
          setSuccessmsg(res.data.success);
          setTimeout(() => {
            setSuccessmsg("");
            setOpen(false);
            history.push("/auth/signin");
          }, 6000);
        }

        console.log(res);
      })
      .catch((err) => {
        setSubmit(false);
        console.log("errorrrrr");
        console.log(err.response.data.message);
        setOpen1(true);
        setErrormsg(err.response.data.message);
        setTimeout(() => {
          setOpen1(false);
          setErrormsg("");
        }, 3000);
      });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registerFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter valid Email ID")
      .required("Email ID is required."),
    last_name: yup
      .string()
      .required("Last Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    first_name: yup
      .string()
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Enter Strong Password (min 8 char, alpha numeric, one special character and one CAPS)"
      )
      .min(
        8,
        "Enter Strong Password (min 8 char, alpha numeric, one special character and one CAPS)"
      ),
    phone_number: yup
      .string()
      .matches(phoneRegExp, "Mobile number is not valid")
      .required("Mobile number is required")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    confirm_password: yup.string().required("Confirm Password is required"),
    college_name: yup
      .string()
      .required("College Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    roll_no: yup.string().required("Roll Number is required"),
    department_name: yup
      .string()
      .required("Department Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    year_of_joining: yup
      .string()
      .required("Year of Joining is required")
      .matches(/^[0-9]+$/, "This field accept numbers only")
      .min(4, "Must be exactly 4 digits")
      .max(4, "Must be exactly 4 digits"),
    terms: yup.bool().oneOf([true], "Accept Terms & Conditions"),
  });
  const initialValues = {
    email: "",
    last_name: "",
    first_name: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    college_name: "",
    roll_no: "",
    department_name: "",
    year_of_joining: "",
    terms: false,
  };
  const formik = useFormik({
    validationSchema: registerFormSchema,
    validateOnChange: true,
    validationOnBlur: false,
    onSubmit: onSignIn,
    initialValues,
    validate,
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    formik;

  useEffect(() => {
    console.log(errors);
  }, [formik]);

  const [years, setYears] = useState([]);
  const YEARS_UPTO = 80;
  useEffect(() => {
    let curYear = new Date().getFullYear();
    let temp_year = [];
    for (var i = curYear; i > curYear - YEARS_UPTO; i--) {
      temp_year.push({ name: "" + i });
    }
    console.log(temp_year);
    setYears(temp_year);
  }, []);

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="last_name"
                    label="First Name"
                    name="first_name"
                    autoComplete="fname"
                    error={errors.first_name}
                    helperText={errors.first_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="lname"
                    error={errors.last_name}
                    helperText={errors.last_name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="emailid"
                    label="Email ID"
                    name="email"
                    autoComplete="emailiii"
                    error={errors.email}
                    helperText={errors.email}
                  />
                </Grid>
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
                    id="standard-adornment-password"
                    type={show ? "text" : "password"}
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="phone_number"
                    label="Mobile Number"
                    name="phone_number"
                    autoComplete="off"
                    error={errors.phone_number}
                    helperText={errors.phone_number}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="college_name"
                    label="College Name"
                    name="college_name"
                    autoComplete="off"
                    error={errors.college_name}
                    helperText={errors.college_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="roll_no"
                    label="Roll Number"
                    name="roll_no"
                    autoComplete="roll_no"
                    error={errors.roll_no}
                    helperText={errors.roll_no}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="department_name"
                    label="Department Name"
                    name="department_name"
                    autoComplete="department_name"
                    error={errors.department_name}
                    helperText={errors.department_name}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    required
                    disableClearable
                    id="combo-box-demo"
                    options={years}
                    getOptionLabel={(option) => option.name}
                    fullWidth
                    onChange={(event, newValue) => {
                      console.log(newValue.name);
                      formik.setFieldValue(
                        "year_of_joining",
                        "" + newValue.name
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        id="year_of_joining"
                        label="Year of Joining"
                        name="year_of_joining"
                        {...params}
                        variant="outlined"
                        error={errors.year_of_joining}
                        helperText={errors.year_of_joining}
                      />
                    )}
                  />
                  {/* <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="year_of_joining"
                    label="Year of Joining"
                    name="year_of_joining"
                    autoComplete="year_of_joining"
                    error={errors.year_of_joining}
                    helperText={errors.year_of_joining}
                /> */}
                </Grid>

                <table>
                  <tr>
                    <td>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.terms}
                              onChange={handleChange}
                              name="terms"
                              color="primary"
                            />
                          }
                          label=" "
                        />
                      </FormGroup>
                    </td>
                    <td>
                      <span>
                        By clicking Sign up, you agree to the{" "}
                        <a
                          target="_blank"
                          href="https://freshvoice.app/page/terms-and-condtions"
                        >
                          {" "}
                          Terms and Conditions of Freshvoice{" "}
                        </a>{" "}
                      </span>
                    </td>
                  </tr>
                </table>
                {formik.values.terms !== true && (
                  <>
                    {errors.terms && (
                      <p style={{ color: "#f44336" }}>{errors.terms} </p>
                    )}
                  </>
                )}
              </Grid>

              <div className="text-right">
                <Button
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                  type="submit"
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // onClick={onSignIn}
                >
                  {submiting ? (
                    <CircularProgress
                      style={{ color: "#fff" }}
                      size={20}
                      color="secondary"
                    />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              id="si_img"
              style={{ marginTop: "10px", width: "480px" }}
              className={classes.img}
              src="/public/img/right_img.png"
            />
            <Grid item className="sign" justify="flex-center">
              <Link to="/">Already have an account? Sign In</Link>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {success_msg}{" "}
            <p>
              Successfully registered, Please Sign In for Techathon activities.{" "}
            </p>
          </Alert>
        </Snackbar>
        <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
          <Alert onClose={handleClose1} severity="error">
            {error_msg}
          </Alert>
        </Snackbar>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Signup;
