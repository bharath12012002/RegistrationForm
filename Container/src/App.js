import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import { CssBaseline, makeStyles } from "@material-ui/core";
import clsx from "clsx";
// import Footer from "./components/footer";
import ScrollToTop from "./components/scroll";
import theme from "./components/theme";
import { Refresh } from "@material-ui/icons";
import Loading from "./components/pageloader";
import AppLogout from "./components/Timer";
import "./components/responsive.css";
import { Offline, Online } from "react-detect-offline";
import OfflineModal from "./components/networkStuatus";
// import './components/global.css'
//import IdleTimer from "./components/Timer";//
const AuthLazy = lazy(() => import("./components/AuthApp"));
const WarehouseLazy = lazy(() => import("./components/WarehouseApp"));
//const GrnLazy = lazy(() => import("./components/GrnApp"));
const EcomapiLazy = lazy(() => import("./components/EcomapiApp"));
const HomeLazy = lazy(() => import("./components/Home_hrmApp"));
const ExdashLazy = lazy(() => import("./components/ExdashboardApp"));
const LocatorLazy = lazy(() => import("./components/SkulocatorApp"));
const InventoryLazy = lazy(() => import("./components/InventoryApp"));
const ReturnsLazy = lazy(() => import("./components/ReturnsApp"));
const InventoryreturnsLazy = lazy(() =>
  import("./components/InventoryreturnsApp")
);
const VendorLazy = lazy(() => import("./components/VendorApp"));
const HomepageLazy = lazy(() => import("./components/HomepageApp"));
const SupportLazy = lazy(() => import("./components/SupportticketApp"));
const ConfigurationLazy = lazy(() => import("./components/ConfigurationApp"));
const UserprofileLazy = lazy(() => import("./components/UserprofileApp"));
const GoodsLazy = lazy(() => import("./components/GoodsnoteApp"));
const UserControlLazy = lazy(() => import("./components/UserControlApp"));
// const UserroleControlLazy = lazy(() => import("./components/UserRolesApp"));
const Amazonlazy = lazy(() => import("./components/AmazonApp"));
const Poproposal = lazy(() => import("./components/PoproposalApp"));
const Purchaseorder = lazy(() => import("./components/PurchaseorderApp"));
// const Vendor = lazy(() => import("./components/VendorApp"));
// const Deliverychallan = lazy(() => import("./components/DeliverychallanApp"));
// const Grn = lazy(() => import("./components/GrnApp"));
const EmployeeLazy = lazy(() => import("./components/EmployeeApp"));

const Rawmaterials = lazy(() => import("./components/RawmaterialsApp"));
// const Unitmeasure = lazy(() => import("./components/UnitmeasureApp"));
const Purchaseorderreport = lazy(() =>
  import("./components/PurchaseorderreportApp")
);
const Monitorpo = lazy(() => import("./components/MonitorpoApp"));
const Sequence = lazy(() => import("./components/SequenceApp"));
const Poquotation = lazy(() => import("./components/PoquotationApp"));
const CustomerLazy = lazy(() => import("./components/CustomerApp"));
const DeliverychallanLazy = lazy(() =>
  import("./components/DeliverychallanApp")
);
const BomLazy = lazy(() => import("./components/BomApp"));
// const ProductionLazy = lazy(() => import("./components/ProductionApp"));
// const NewproductionLazy = lazy(() => import("./components/NewproductionApp"));
const ExecutionLazy = lazy(() => import("./components/PoexecutionApp"));
const InventoryexecutionLazy = lazy(() =>
  import("./components/InventoryexecutionApp")
);
const UserRolesTabLazy = lazy(() => import("./components/UsersTabApp"));

const ExtrasLazy = lazy(() => import("./components/ExtrasApp"));
const TeamassignLazy = lazy(() => import("./components/TeamassignApp"));
const EmployerLazy = lazy(() => import("./components/EmployerconfigApp"));
const OtLazy = lazy(() => import("./components/ConfigotPermissionApp"));

const PermissionLazy = lazy(() => import("./components/ConfigPermissionApp"));

const OndutyLazy = lazy(() => import("./components/Hrm_on_dutyApp"));
const ShiftLazy = lazy(() => import("./components/Hrm_shift_configApp"));
const MapLazy = lazy(() => import("./components/MappingApp"));
const AttendanceLazy = lazy(() => import("./components/AttendanceApp"));

const BomreportLazy = lazy(() => import("./components/BomreportApp"));

// const ReturnsLazy = lazy(() => import("./components/ReportsApp"));
const LeaveadminLazy = lazy(() => import("./components/LeaveadminApp"));
const LeaveLazy = lazy(() => import("./components/LeaveApp"));
const LeaveorgportLazy = lazy(() =>
  import("./components/OrganizationReportApp")
);
const PayrollLazy = lazy(() => import("./components/PayrollApp"));
const ApplyLazy = lazy(() => import("./components/ApplyApp"));
const AttendanceConfigLazy = lazy(() =>
  import("./components/AttendanceConfigApp")
);
const IncentiveLazy = lazy(() => import("./components/IncentiveApp"));
const ReportLazy = lazy(() => import("./components/ReportApp"));
const PayreportLazy = lazy(() => import("./components/PayrollReportApp"));
const DashbaordLazy = lazy(() => import("./components/DashboardApp"));
const HolidayLazy = lazy(() => import("./components/HolidayApp"));
const IncentiveProvideLazy = lazy(() =>
  import("./components/IncentiveProvideApp")
);
const DashboardReportLazy = lazy(() => import("./components/DashboardApp"));
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
//
const history = createBrowserHistory();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 60,
  },
  containerShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default () => {
  const classes = useStyles();
  const [isSignedIn, setSignedIn] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const signIn = () => localStorage.setItem("isAuth", "true");
  //
  useEffect(() => {
    if (isSignedIn) {
      console.log(
        "CALLING HERE - Probably getting requested url and redirect to there"
      );
      console.log(history);
      // history.push("/dashboard");
    }
  }, [isSignedIn]);

  // temp2
  //   window.onbeforeunload = function() {
  //     localStorage.clear();
  //  }
  useEffect(() => {
    // if (localStorage.getItem("ipss_access_token")) {
    //   setSignedIn(true);
    //  // history.push('/home')
    // }

    if (!sessionStorage.getItem("ipss_access_token")) {
      localStorage.removeItem("ipss_access_token");

      setSignedIn(false);
      // navigator.sendBeacon('api/logout')
      // window.location.replace("/") //redirect to login
    }

    // window.closed = () =>{
    //   if (localStorage.getItem("access_token")){
    //     setSignedIn(false);
    //     setDrawerOpened(false)
    //   }
    // }
  }, []);
  useEffect(() => {
    if (
      localStorage.getItem("ipss_access_token") &&
      (localStorage.getItem("profile_stat") === true ||
        localStorage.getItem("profile_stat") === "true")
    ) {
      setSignedIn(true);
      // history.push('/home')
    }
    // document.body.style.zoom = "90%";
    //     if(localStorage.getItem("profile_stat")=== false || localStorage.getItem("profile_stat")=== "false"){
    //       localStorage.clear()
    //       history.push('/')
    //     }
  }, []);

  //
  let [online, isOnline] = useState(navigator.onLine);

  const setOnline = () => {
    console.log("We are online!");
    isOnline(true);
  };
  const setOffline = () => {
    console.log("We are offline!");
    isOnline(false);
  };
  //
  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, []);

  useEffect(() => {
    // This code will run continuously
    const intervalId = setInterval(() => {
      // continuous logic goes here

      // api url setup
      if (window.location.hostname === "billing.techgenzi.com") {
        localStorage.setItem("TGZ_api_url", "https://myhrmapi.techgenzi.com");
        // for user role
        localStorage.setItem("ipss_api_url", "https://myhrmapi.techgenzi.com");
      } else if (window.location.hostname === "pentagonhrm.techgenzi.com") {
        localStorage.setItem("TGZ_api_url", "https://pghrmapi.techgenzi.com");
        // for user role
        localStorage.setItem("ipss_api_url", "https://pghrmapi.techgenzi.com");
      } else if (window.location.hostname === "hrm-staging.techgenzi.com") {
        localStorage.setItem(
          "TGZ_api_url",
          "https://hrm-staging-api.techgenzi.com"
        );
        // for user role
        localStorage.setItem(
          "ipss_api_url",
          "https://hrm-staging-api.techgenzi.com"
        );
      } else if (window.location.hostname === "pmt.techgenzi.com") {
        localStorage.setItem("TGZ_api_url", "https://pmt-api.techgenzi.com/");
        // for user role
        localStorage.setItem("ipss_api_url", "https://pmt-api.techgenzi.com/");
      } else {
        localStorage.setItem("TGZ_api_url", "https://ipssapi.techgenzi.com");
        //for user role
        localStorage.setItem("ipss_api_url", "https://ipssapi.techgenzi.com");
      }
    }, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("ipss_access_token") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  //
  function PublicRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("ipss_access_token") ? (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }
  //

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <CssBaseline />
            {/* <ul class="background">
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
</ul> */}
            {/* <div class="background">
   <span></span>
   <span></span>
   
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div> */}
            <div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
            {/* {isSignedIn && (
              <Header
                // color='primary'
                onSignOut={() => {
                  localStorage.clear();
                  setSignedIn(false);
                  setDrawerOpened(false);
                  history.push("/auth");
                }}
                isSignedIn={isSignedIn}
                drawerOpened={drawerOpened}
                setDrawerOpened={setDrawerOpened}
              />
            )} */}
            {/*  */}
            {/*  */}
            <ScrollToTop />

            <Suspense fallback={<Loading />}>
              {/* {  ? */}
              {/* {isSignedIn && (
                <Sidebar
                  isSignedIn={isSignedIn}
                  drawerOpened={drawerOpened}
                  setDrawerOpened={setDrawerOpened}
                />
              )} */}
              {/* // }:""} */}

              <OfflineModal display={!online} />
              <div
                class="wave"
                className={clsx("container-root", "thechathon", {
                  [classes.containerShift]: drawerOpened,
                  [classes.container]: !drawerOpened && isSignedIn,
                })}
              >
                <Switch>
                  <Route path="/auth" exact>
                    <AuthLazy
                      onSignIn={(data) => {
                        console.log(data.profile_stat, "data home1");
                        localStorage.setItem(
                          "ipss_access_token",
                          data.access_token
                        );
                        //setSignedIn(true);
                        //  { data.profile_stat === true ?  history.push("/home"): history.push("/userprofile");}
                        if (
                          data.profile_stat === "false" ||
                          data.profile_stat === false
                        ) {
                          //  setSignedIn(true);
                          history.push("/userprofile");
                          console.log(data.profile_stat, "data profile 1");
                        }
                        // else{
                        // setSignedIn(true);
                        // history.push("/home");
                        // }
                      }}
                    />
                  </Route>
                  <Route path="/" exact>
                    <AuthLazy
                      onSignIn={(data) => {
                        // console.log(data.profile_stat,"data here");
                        localStorage.setItem(
                          "ipss_access_token",
                          data.access_token
                        );
                        // localStorage.setItem(
                        //   "profile_stat",
                        //   data.status
                        // );
                        // setSignedIn(true);
                        //  { data.profile_stat === true ?  history.push("/home"): history.push("/userprofile");}
                        if (
                          data.profile_stat === "false" ||
                          data.profile_stat === false
                        ) {
                          // setSignedIn(true);
                          history.push("/userprofile");
                          console.log(data.profile_stat, "data profile");
                        }
                        if (
                          data.profile_stat === "true" ||
                          data.profile_stat === true
                        ) {
                          setSignedIn(true);
                          history.push("/employee");
                          console.log(data.profile_stat, "data profile");
                        }
                        //   else{
                        //   setSignedIn(true);
                        //   history.push("/home");
                        //   console.log(data.profile_stat,"data home");
                        // }
                      }}
                    />
                  </Route>
                  <Route path="/homepage" exact>
                    <HomepageLazy />
                  </Route>
                  <AppLogout>
                    <PrivateRoute path="/warehouse">
                      <WarehouseLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/goodsnote">
                      <GoodsLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/ecomapi">
                      <EcomapiLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/inventory">
                      <InventoryLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/home">
                      <HomeLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/exdashboard">
                      <ExdashLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/skulocator">
                      <LocatorLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/returns">
                      <ReturnsLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/inventoryreturns">
                      <InventoryreturnsLazy />
                    </PrivateRoute>

                    <PrivateRoute path="/vendor">
                      <VendorLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/supportticket">
                      <SupportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/configuration/list">
                      <ConfigurationLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/userprofile">
                      <UserprofileLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/users">
                      <UserControlLazy history={history} />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/user-roles">
                      <UserroleControlLazy history={history} />
                    </PrivateRoute> */}
                    <PrivateRoute path="/amazonreport">
                      <Amazonlazy history={history} />
                    </PrivateRoute>

                    <PrivateRoute path="/employee">
                      <EmployeeLazy />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/users">
                  <Users/>
                  </PrivateRoute>  */}
                    <PrivateRoute path="/purchaseorder">
                      <Purchaseorder />
                    </PrivateRoute>
                    <PrivateRoute path="/sequence">
                      <Sequence />
                    </PrivateRoute>
                    <PrivateRoute path="/poproposal">
                      <Poproposal />
                    </PrivateRoute>
                    <PrivateRoute path="/purchaseorderreport">
                      <Purchaseorderreport />
                    </PrivateRoute>
                    <PrivateRoute path="/poquotation">
                      <Poquotation />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/vendor">
                  <Vendor/>
                  </PrivateRoute>  */}
                    {/* <PrivateRoute path="/deliverychallan">
                  <Deliverychallan/>
                  </PrivateRoute>  */}
                    {/* <PrivateRoute path="/grn">
                  <Grn/>
                  </PrivateRoute>
                   */}
                    <PrivateRoute path="/rawmaterials">
                      <Rawmaterials />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/unitmeasure">
                  <Unitmeasure/>
                  </PrivateRoute> */}

                    {/* <PrivateRoute path="/panelresetpassword">
                  <Panelresetpassword/>
                </PrivateRoute> */}
                    <PrivateRoute path="/monitorpo">
                      <Monitorpo />
                    </PrivateRoute>
                    <PrivateRoute path="/customer">
                      <CustomerLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/deliverychallan">
                      <DeliverychallanLazy history={history} />
                    </PrivateRoute>
                    <PrivateRoute path="/bom">
                      <BomLazy />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/production">
                  <NewproductionLazy  />
                </PrivateRoute> */}
                    <PrivateRoute path="/poexecution">
                      <ExecutionLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/inventoryexecution">
                      <InventoryexecutionLazy />
                    </PrivateRoute>

                    <PrivateRoute path="/extras">
                      <ExtrasLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/teamassign">
                      <TeamassignLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/employerconfig">
                      <EmployerLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/bomreport">
                      <BomreportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/overtime">
                      <OtLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/ConfigPermission">
                      <PermissionLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/onduty">
                      <OndutyLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/Shift">
                      <ShiftLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/mapping">
                      <MapLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/attendance">
                      <AttendanceLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/leave">
                      <LeaveadminLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/leave">
                      <LeaveLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/leave">
                      <LeaveorgportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/payroll">
                      <PayrollLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/ot">
                      <ApplyLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/config">
                      <AttendanceConfigLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/incentive">
                      <IncentiveLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/report">
                      <ReportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/payrollgeneration">
                      <PayreportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                      <DashbaordLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/holiday/list">
                      <HolidayLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/incentiveprovide">
                      <IncentiveProvideLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboardreport">
                      <DashboardReportLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/users">
                      <UserRolesTabLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/user-roles">
                      <UserRolesTabLazy />
                    </PrivateRoute>
                    <PrivateRoute path="/userstab">
                      <UserRolesTabLazy />
                    </PrivateRoute>
                    {/* User Role */}
                  </AppLogout>
                </Switch>
              </div>
            </Suspense>
            <br />
            {/* <Footer /> */}
          </div>
        </StylesProvider>
      </ThemeProvider>
      {/* <Footer/>  */}
    </Router>
  );
};

//
