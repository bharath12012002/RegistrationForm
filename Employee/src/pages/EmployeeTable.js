import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  FormControl,
  Checkbox,
  Drawer,
  IconButton,
  Autocomplete,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"; 
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import {
  Instagram,
  WhatsApp,
  Facebook,
  MailOutline,
  Phone,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./EmployeeRegistrationPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { liveApi } from "../service/Config_Shift_service";
const liveapi = liveApi();
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";


// Example: If the images folder is in the src directory and the component is also in src
const Logo = () => (
  <img
    src={require("../images/TechGenZi_Logo.png").default}
    alt="Company Logo"
    className="logo"
    style={{ width: "200px", height: "auto" }} // Inline styles
  />
);
    
const customerImages = [
  { id: 1, src: require("../images/aaa.png").default },
  { id: 2, src: require("../images/about.png").default },
  { id: 3, src: require("../images/agustan.png").default },
  { id: 4, src: require("../images/gj.png").default },
  { id: 5, src: require("../images/jk.png").default },
  { id: 6, src: require("../images/latee.png").default },
  { id: 7, src: require("../images/pgmetals.png").default },
  { id: 8, src: require("../images/royal.png").default },
  { id: 9, src: require("../images/ss.png").default },
  { id: 10, src: require("../images/ynt.png").default },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  

  return (
    <>
      <AppBar
        position="static"
        sx={{
          margin: 0,
          borderRadius: "10px 10px 0 0",
          padding: 0,
          background: "#fff",
        }}
        className="header"
      >
        <Toolbar
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              flexGrow: 1,
              justifyContent: "center",
              flexWrap: "nowrap", // Prevent wrapping of items
              marginY: 1,
            }}
          >
            {[
              { name: "Home", url: "https://techgenzi.com" },
              { name: "Solutions", url: "#" },
              { name: "Services", url: "https://techgenzi.com/services/" },
              { name: "About Us", url: "https://techgenzi.com/about-us/" },
              { name: "Contact Us", url: "https://techgenzi.com/contact-us/" },
            ].map(({ name, url }) => (
              <Typography
                key={name}
                variant="body1"
                sx={{
                  mx: 1,
                  color: "black",
                  fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                }}
              >
                <a
                  href={url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {name}
                </a>
              </Typography>
            ))}
          </Box>

          {/* Menu icon for small screens */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#118CE8" }}
          >
            Demo / Discussion
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            padding: 2,
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ marginBottom: 2 }}
          >
            <CloseIcon />
          </IconButton>
          {[
            { name: "Home", url: "https://techgenzi.com" },
            { name: "Solutions", url: "#" },
            { name: "Services", url: "https://techgenzi.com/services/" },
            { name: "About Us", url: "https://techgenzi.com/about-us/" },
            { name: "Contact Us", url: "https://techgenzi.com/contact-us/" },
          ].map(({ name, url }) => (
            <Typography
              key={name}
              variant="body1"
              sx={{
                my: 1,
                fontSize: "1rem", // You can customize this further
              }}
            >
              <a
                href={url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {name}
              </a>
            </Typography>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to right, #D3CCE3,#E9E4F0)",
        padding: "1rem",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
      }}
    >
      {/* Left Section: Copyright */}
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} TechGenzi Private Limited. All rights
        reserved.
      </Typography>

      {/* Center Section: Links */}
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: "center" }}
      >
        <a
          href="https://techgenzi.com/terms-conditions/"
          style={{ margin: "0 1rem" }}
        >
          Terms and Conditions
        </a>
        |
        <a
          href="https://techgenzi.com/privacy-policy/"
          style={{ margin: "0 1rem" }}
        >
          Privacy Policy
        </a>
      </Typography>

      {/* Right Section: Social Media Icons */}
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://www.linkedin.com/company/techgenzi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0077B5" }}
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.instagram.com/techgenzi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E4405F" }}
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCOskCvgnLFA7XPRbU1MYbgQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FF0000" }}
        >
          <YouTube />
        </a>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366" }}
        >
          <WhatsApp />
        </a>
        <a
          href="https://www.facebook.com/TechGenzi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4267B2" }}
        >
          <Facebook />
        </a>
        <a href="mailto:kannan.n@techgenzi.com" style={{ color: "#000000" }}>
          <MailOutline />
        </a>
        <a href="tel:+9150047718" style={{ color: "#000000" }}>
          <Phone />
        </a>
      </Box>
    </Box>
  );
};
const demoValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  emailid: Yup.string()
    .email("Invalid email")
    .required("Company email is required"),
  mobilenumber: Yup.string().required("Phone number is required"),
  problem_statement: Yup.string().required("Problem statement is required"),
  instance_to_assign: Yup.string()
    .min(1, "Select at least one solution")
    .required("Required"),
});
// Validation schema for the "Schedule a Discussion" form
const discussionValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobilenumber: Yup.string().required("Phone number is required"),
  industry: Yup.string().required("Industry is required"),
  interested_product: Yup.array().min(
    1,
    "At least one product must be selected"
  ),
  preferred_date: Yup.string().required("Preferred date required"),
  problem_statement: Yup.string(),
});

const solutionsOptions = {
  "Human Resource Management": 5,
  "Compliance Management System": 8,
  "Transport Management Solution": 9,
  "CRM - Customer Relationship Management": 20,
  "CRM (Mobile App)": 14,
  "Order to Delivery": 16,
  "Token - Vehicle In/Out": 3,
  "Invoice": 4,
  "Inventory / Production / PO": 6,
  "Time sheet/Skill": 7,
  "Asset (Mobile App)": 12,
  "Compliance (Mobile App)": 13,
  "Delivery Tracker (Mobile App)": 15,
  "Order to Delivery (Mobile App)": 16,
  // "Production Management (Mobile App)": 18,
  "Order and Warehouse Management": 18,
};

// Convert solutionsOptions object to an array
const optionsArray = Object.keys(solutionsOptions).map((key) => ({
  label: key,
  value: solutionsOptions[key].toString(),
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RegistrationForm = () => {
  const productMapping = {
    "Human Resource Management": 5,
    "Compliance Management System": 8,
    "Transport Management Solution": 9,
    "CRM - Customer Relationship Management": 20,
    "CRM (Mobile App)": 14,
    "Order to Delivery": 16,
    "Token - Vehicle In/Out": 3,
    "Invoice": 4,
    "Inventory / Production / PO": 6,
    "Time sheet/Skill": 7,
    "Asset (Mobile App)": 12,
    "Compliance (Mobile App)": 13,
    "Delivery Tracker (Mobile App)": 15,
    "Order to Delivery (Mobile App)": 16,
    // "Production Management (Mobile App)": 18,
    "Order and Warehouse Management": 18,
  };
  const textRef = useRef();

  const interestedProducts = Object.keys(productMapping).map((product) => ({
    label: product,
    value: productMapping[product],
  }));

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  const initialDemoValues = {
    firstname: "",
    lastname: "",
    emailid: "",
    mobilenumber: "",
    problem_statement: "",
    instance_to_assign: "",
  };

  const initialDiscussionValues = {
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    industry: "",
    interested_product: [],
    preferred_date: "",
    problem_statement: "",
  };
  const [activeForm, setActiveForm] = useState("demo"); // State to track which form is active
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State to control Snackbar message

  // Close Snackbar function
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmitDemo = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log("Submitting values:", values);
    // Create the payload using the values passed to this function
    const submittedDate = new Date();
    const endDate = new Date(submittedDate);
    endDate.setDate(endDate.getDate() + 20); // Add 20 days

    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      emailid: values.emailid,
      username: values.emailid, // Use email as username
      problem_statement: values.problem_statement,
      instance_to_assign: values.instance_to_assign,
      mobilenumber: values.mobilenumber,
      end_date: endDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      user_role: "Admin",
      user_type: "Internal User",
      assign_name: "Demo.Admin@techgenzi.com",
    };

    console.log(payload); // Replace with your API call

    liveapi
      .post("/demo_user/", payload) // Use payload for the API call
      .then((response) => {
        console.log("Demo data posted successfully:", response.data);
        resetForm(); // Clear form state after submission
        setDemoFormData(initialDemoValues); // Reset demo form state
      })
      .catch((error) => {
        console.error("Error posting demo data:", error);
        setSnackbarMessage("Error submitting the demo form. Please try again.");
        setSnackbarOpen(true); // Show Snackbar with error message
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleSubmitDiscussion = (values, { resetForm, setSubmitting }) => {
    // Map selected product names to their corresponding IDs
    const interestedProductIds = values.interested_product.map(
      (productName) => productMapping[productName]
    );

    // Convert the array of IDs to a comma-separated string
    const interestedProductString = interestedProductIds.join(",");
    const formattedDate = new Date(values.preferred_date)
      .toISOString()
      .split("T")[0];

    const dataToPost = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      username: values.email, // Username is derived from the email
      problem_statement: values.problem_statement,
      mobilenumber: values.mobilenumber,
      industry: values.industry,
      interested_product: interestedProductString, // Pass as a string
      preferred_date: formattedDate,
      status: "", // Default status
    };

    liveapi
      .post("/demo_user/discussion_user/", dataToPost)
      .then((response) => {
        console.log("Discussion data posted successfully:", response.data);
        resetForm(); // Clear form state after submission
        setSnackbarMessage("Discussion submitted successfully!");
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Error posting discussion data:", error);
        if (error.response && error.response.status === 502) {
          setSnackbarMessage(
            "Server is temporarily unavailable. Please try again later."
          );
        } else {
          setSnackbarMessage(
            "Error submitting the discussion form. Please try again."
          );
        }
        setSnackbarOpen(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Grid container spacing={2} sx={{ padding: "2rem" }} class="fullWidthGrid">
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align text to the top
          padding: "1rem",
          marginTop: "2rem", // Add margin to move it higher
        }}
      >
        <div ref={textRef}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "white" }} // Black color and bold
          >
            Want to see how TechGenzi solutions can help to take your business
            to the next level?
          </Typography>
          <Typography
            variant="h5" // Changed to h5 for a different style
            sx={{
              mb: 2,
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
            }} // Black color and bold
          >
            To know more
          </Typography>
          <Typography
            variant="h6" // Changed to h6 for a different style
            sx={{ mb: 1, fontSize: "1.3rem", color: "white" }} // Black color and bold
          >
            Try a Product Demo
          </Typography>
          <Typography
            variant="h6" // Changed to h6 for a different style
            sx={{
              mb: 1,
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: "white",
            }} // Black color and bold
          >
            or
          </Typography>
          <Typography
            variant="h6" // Changed to h6 for a different style
            sx={{ mb: 2, fontSize: "1.3rem", color: "white" }} // Black color and bold
          >
            Schedule a Discussion with our experts.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={6} className="forms">
        <Grid className="form-container" justifyContent="right">
          {/* Buttons to switch forms */}
          <div className="button-container">
            <Button
              className="demo-button"
              variant={activeForm === "demo" ? "contained" : "outlined"}
              onClick={() => setActiveForm("demo")}
              sx={{ marginRight: "10px", marginBottom: "10px" }}
            >
              Product Demo
            </Button>
            <Button
              className="schedule-button"
              variant={activeForm === "discussion" ? "contained" : "outlined"}
              onClick={() => setActiveForm("discussion")}
              sx={{ marginBottom: "10px" }}
            >
              Schedule a Discussion
            </Button>
          </div>

          {/* Form Section */}
          {activeForm === "demo" ? (
            <Formik
              initialValues={initialDemoValues}
              validationSchema={demoValidationSchema}
              onSubmit={handleSubmitDemo}
              enableReinitialize
            >
              {({ errors, touched, isSubmitting, setFieldValue, values }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="firstname"
                        label="First Name *"
                        variant="outlined"
                        error={touched.firstname && !!errors.firstname}
                        helperText={touched.firstname && errors.firstname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="lastname"
                        label="Last Name *"
                        variant="outlined"
                        error={touched.lastname && !!errors.lastname}
                        helperText={touched.lastname && errors.lastname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="emailid"
                        label="Company Email *"
                        variant="outlined"
                        error={touched.emailid && !!errors.emailid}
                        helperText={touched.emailid && errors.emailid}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="mobilenumber"
                        label="Phone Number *"
                        variant="outlined"
                        error={touched.mobilenumber && !!errors.mobilenumber}
                        helperText={touched.mobilenumber && errors.mobilenumber}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        error={
                          touched.instance_to_assign &&
                          !!errors.instance_to_assign
                        }
                      >
                        <Autocomplete
                          multiple
                          id="checkboxes-tags-demo"
                          options={optionsArray}
                          disableCloseOnSelect
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option, { selected }) => {
                            const { key, ...optionProps } = props;
                            return (
                              <li key={key} {...optionProps}>
                                <Checkbox
                                  icon={icon}
                                  checkedIcon={checkedIcon}
                                  style={{ marginRight: 8 }}
                                  checked={selected}
                                />
                                {option.label}
                              </li>
                            );
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Our Solutions *"
                              placeholder="Select solutions"
                            />
                          )}
                          onChange={(event, newValue) => {
                            const valueStrings = newValue
                              .map((option) => option.value)
                              .join(",");
                            setFieldValue("instance_to_assign", valueStrings);
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="problem_statement"
                        label="Problem Statement"
                        variant="outlined"
                        multiline
                        rows={2}
                        error={
                          touched.problem_statement &&
                          !!errors.problem_statement
                        }
                        helperText={
                          touched.problem_statement && errors.problem_statement
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={initialDiscussionValues}
              validationSchema={discussionValidationSchema}
              onSubmit={handleSubmitDiscussion}
              enableReinitialize
            >
              {({ errors, touched, isSubmitting, setFieldValue, values }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="firstname"
                        label="First Name *"
                        variant="outlined"
                        error={touched.firstname && !!errors.firstname}
                        helperText={touched.firstname && errors.firstname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="lastname"
                        label="Last Name *"
                        variant="outlined"
                        error={touched.lastname && !!errors.lastname}
                        helperText={touched.lastname && errors.lastname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="email"
                        label="Email *"
                        variant="outlined"
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="mobilenumber"
                        label="Phone Number *"
                        variant="outlined"
                        error={touched.mobilenumber && !!errors.mobilenumber}
                        helperText={touched.mobilenumber && errors.mobilenumber}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="industry"
                        label="Industry *"
                        variant="outlined"
                        error={touched.industry && !!errors.industry}
                        helperText={touched.industry && errors.industry}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        name="preferred_date"
                        label="Preferred Date *"
                        variant="outlined"
                        error={
                          touched.preferred_date && !!errors.preferred_date
                        }
                        helperText={
                          touched.preferred_date && errors.preferred_date
                        }
                        InputLabelProps={{
                          shrink: true, // Ensures the label is always visible
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        error={
                          touched.interested_product &&
                          !!errors.interested_product
                        }
                      >
                        <Autocomplete
                          multiple
                          id="interested-product"
                          options={interestedProducts}
                          disableCloseOnSelect
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option, { selected }) => {
                            return (
                              <li {...props}>
                                <Checkbox
                                  icon={
                                    <CheckBoxOutlineBlankIcon fontSize="small" />
                                  }
                                  checkedIcon={
                                    <CheckBoxIcon fontSize="small" />
                                  }
                                  style={{ marginRight: 8 }}
                                  checked={selected}
                                />
                                {option.label}
                              </li>
                            );
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Which products are you interested in? *"
                              placeholder="Select products"
                            />
                          )}
                          onChange={(event, newValue) => {
                            const valueStrings = newValue.map(
                              (option) => option.label
                            );
                            setFieldValue("interested_product", valueStrings);
                          }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        multiline
                        rows={4}
                        name="problem_statement"
                        label="Problem Statement"
                        variant="outlined"
                        error={
                          touched.problem_statement &&
                          !!errors.problem_statement
                        }
                        helperText={
                          touched.problem_statement && errors.problem_statement
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const OurCustomers = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4, pb: 4 }} className="grid1">
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: "bold", color: "black" }} // Make "Our Customers" bold and black
      >
        Our Customers
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontSize: "1.2rem", fontStyle: "italic", color: "#555" }} // Style the second text
      >
        Proud to be your trusted partner in realizing your strategic objectives
      </Typography>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ maxWidth: "90%", margin: "0 auto" }}
        breakpoints={{
          // When window width is >= 1024px (Desktop)
          1024: {
            slidesPerView: 5,
          },
          // When window width is >= 768px (Tablet)
          768: {
            slidesPerView: 3,
          },
          // When window width is < 768px (Mobile)
          0: {
            slidesPerView: 1, // Show 1 slide per view on smaller screens
          },
        }}
      >
        {customerImages.map((customer) => (
          <SwiperSlide key={customer.id}>
            <Box
              className="swipercustomer"
              sx={{
                padding: 3,
                textAlign: "center",
              }}
            >
              <img
                src={customer.src}
                alt={`Customer ${customer.id}`}
                style={{ width: "200px", height: "auto", borderRadius: "12px" }} // Apply the specified styles
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const AboutAndAddress = () => {
  return (
    <Box className="gaspEffect centeredText">
      <Typography variant="h5" sx={{ mb: 2 }}>
        <Logo />
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        We are committed to being a Technology Partner, providing bespoke,
        end-to-end solutions for all industries.
      </Typography>

      <Typography sx={{ mt: 3, fontSize: "1rem", color: "#555" }}>
        Registered Office: Rose Garden Road, JP Nagar 5th Phase, Bangalore
        560078
      </Typography>

      <Typography sx={{ mt: 1, fontSize: "1rem", color: "#555" }}>
        Branch Office: Raja Annamalai Rd, Ramachandra Layout, Saibaba Colony,
        Coimbatore, Tamil Nadu 641011
      </Typography>

      <Typography sx={{ mt: 1, fontSize: "1rem", color: "#555" }}>
        Contact:{" "}
        <a
          href="mailto:customer.connect@techgenzi.com"
          style={{ color: "#4481eb", textDecoration: "none" }}
        >
          customer.connect@techgenzi.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+919150047718"
          style={{ color: "#4481eb", textDecoration: "none" }}
        >
          +91 91500 47718
        </a>
      </Typography>
    </Box>
  );
};

const EmployeeRegistrationPage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ py: 0 }}>
        <Grid container>
          <Grid item xs={12} className="fullWidthGrid">
            <RegistrationForm />
          </Grid>
          <Grid item xs={12} className="customersGrid">
            <OurCustomers />
          </Grid>
          <Grid item xs={12} className="aboutGrid">
            <AboutAndAddress />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default EmployeeRegistrationPage;
