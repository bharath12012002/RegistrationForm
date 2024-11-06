const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
//   const domain = process.env.IPSS_FE_PRODUCTION_DOMAIN ? process.env.IPSS_FE_PRODUCTION_DOMAIN : 'https://ipss.asset.techgenzi.com/mfp';
const domain = process.env.IPSS_FE_PRODUCTION_DOMAIN
  ? process.env.IPSS_FE_PRODUCTION_DOMAIN
  : "https://pentagonhrm.techgenzi.com/mfp";

// const domain = process.env.IPSS_FE_PRODUCTION_DOMAIN ? process.env.IPSS_FE_PRODUCTION_DOMAIN:'http://localhost/mfp';
//
const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: `auth@${domain}/auth/remoteEntry.js`,
        //sku: `sku@${domain}/sku/remoteEntry.js`,
        warehouse: `warehouse@${domain}/warehouse/remoteEntry.js`,
        //grn: `grn@${domain}/goodsnote/remoteEntry.js`,
        ecomapi: `ecomapi@${domain}/ecomapi/remoteEntry.js`,
        home_hrm: `home_hrm@${domain}/home_hrm/remoteEntry.js`,
        order: `order@${domain}/order/remoteEntry.js`,
        exdashboard: `exdashboard@${domain}/exdashboard/remoteEntry.js`,
        skulocator: `skulocator@${domain}/skulocator/remoteEntry.js`,
        inventory: `inventory@${domain}/inventory/remoteEntry.js`,
        returns: `returns@${domain}/returns/remoteEntry.js`,
        inventoryreturns: `inventoryreturns@${domain}/inventoryreturns/remoteEntry.js`,
        vendor: `vendor@${domain}/vendor/remoteEntry.js`,
        homepage: `homepage@${domain}/homepage/remoteEntry.js`,
        supportticket: `supportticket@${domain}/supportticket/remoteEntry.js`,
        configuration: `configuration@${domain}/configuration/remoteEntry.js`,
        userprofile: `userprofile@${domain}/userprofile/remoteEntry.js`,
        goodsnote: `goodsnote@${domain}/goodsnote/remoteEntry.js`,
        amazonreport: `amazonreport@${domain}/amazonreport/remoteEntry.js`,
        users:
          "users@https://d3phu38bswk0vq.cloudfront.net/users/remoteEntry.js",
        user_roles:
          "user_roles@https://d3phu38bswk0vq.cloudfront.net/user_roles/remoteEntry.js",
        // users: `users@${domain}/users/remoteEntry.js`,
        // user_roles: `user_roles@${domain}/user_roles/remoteEntry.js`,
        employee: `employee@${domain}/employee/remoteEntry.js`,
        // panelresetpassword: `panelresetpassword@${domain}/panelresetpassword/remoteEntry.js`,

        poproposal: `poproposal@${domain}/poproposal/remoteEntry.js`,
        purchaseorder: `purchaseorder@${domain}/purchaseorder/remoteEntry.js`,
        // deliverychallan: `deliverychallan@${domain}/deliverychallan/remoteEntry.js`,
        // grn: `grn@${domain}/grn/remoteEntry.js`,
        // vendor: `vendor@${domain}/vendor/remoteEntry.js`,
        rawmaterials: `rawmaterials@${domain}/rawmaterials/remoteEntry.js`,
        purchaseorderreport: `purchaseorderreport@${domain}/purchaseorderreport/remoteEntry.js`,
        monitorpo: `monitorpo@${domain}/monitorpo/remoteEntry.js`,
        sequence: `sequence@${domain}/sequence/remoteEntry.js`,
        poquotation: `poquotation@${domain}/poquotation/remoteEntry.js`,
        customer: `customer@${domain}/customer/remoteEntry.js`,
        deliverychallan: `deliverychallan@${domain}/deliverychallan/remoteEntry.js`,
        bom: `bom@${domain}/bom/remoteEntry.js`,
        // production:  `production@${domain}/production/remoteEntry.js`,
        poexecution: `poexecution@${domain}/poexecution/remoteEntry.js`,
        inventoryexecution: `inventoryexecution@${domain}/inventoryexecution/remoteEntry.js`,
        // unitmeasure: `unitmeasure@${domain}/unitmeasure/remoteEntry.js`,
        dashboardreport: `dashboardreport@${domain}/dashboardreport/remoteEntry.js`,
        reports: `reports@${domain}/reports/remoteEntry.js`,
        extras: `extras@${domain}/extras/remoteEntry.js`,
        teamassign: `teamassign@${domain}/teamassign/remoteEntry.js`,
        employerconfig: `employerconfig@${domain}/employerconfig/remoteEntry.js`,
        bomreport: `bomreport@${domain}/bomreport/remoteEntry.js`,
        hrm_config_ot_permission: `hrm_config_ot_permission@${domain}/hrm_config_ot_permission/remoteEntry.js`,
        hrm_config_permission: `hrm_config_permission@${domain}/hrm_config_permission/remoteEntry.js`,
        hrm_on_duty: `hrm_on_duty@${domain}/hrm_on_duty/remoteEntry.js`,
        hrm_shift_config: `hrm_shift_config@${domain}/hrm_shift_config/remoteEntry.js`,
        mapping: `mapping@${domain}/mapping/remoteEntry.js`,
        attendance: `attendance@${domain}/attendance/remoteEntry.js`,
        leaveadmin: `leaveadmin@${domain}/leaveadmin/remoteEntry.js`,
        leave: `leave@${domain}/leave/remoteEntry.js`,
        orgreport: `orgreport@${domain}/orgreport/remoteEntry.js`,
        payroll: `payroll@${domain}/payroll/remoteEntry.js`,
        overtime_apply: `overtime_apply@${domain}/overtime_apply/remoteEntry.js`,
        attendance_configuration: `attendance_configuration@${domain}/attendance_configuration/remoteEntry.js`,
        incentive: `incentive@${domain}/incentive/remoteEntry.js`,
        report: `report@${domain}/report/remoteEntry.js`,
        payrollreport: `payrollreport@${domain}/payrollreport/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`,
        holidayconfig: `holidayconfig@${domain}/holidayconfig/remoteEntry.js`,
        incentive_provide: `incentive_provide@${domain}/incentive_provide/remoteEntry.js`,
        supportticket: `supportticket@https://d3phu38bswk0vq.cloudfront.net/supportticket/remoteEntry.js`,

        userstab:
          "userstab@https://d3phu38bswk0vq.cloudfront.net/userstab/remoteEntry.js",
      },
    }),
    //
  ],
};
module.exports = merge(commonConfig, prodConfig);
