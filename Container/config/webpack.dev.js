const { merge } = require('webpack-merge');
//const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const hostip = Object.values(require("os").networkInterfaces())
    .flat()
    .filter((item) => !item.internal && item.family === "IPv4")
    .find(Boolean).address;

const HOST_IP = process.env.HOST_IP ? process.env.HOST_IP : hostip;
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://' + HOST_IP + ':11080/',
    },
    devServer: {
        port: 11080,
        host: '0.0.0.0',
        historyApiFallback: true,
        //publicPath: "/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                auth: 'auth@http://' + HOST_IP + ':10082/remoteEntry.js',
                warehouse: 'warehouse@http://' + HOST_IP + ':4003/remoteEntry.js',
                ecomapi: 'ecomapi@http://' + HOST_IP + ':4005/remoteEntry.js',
                //mail: 'mail@http://' + HOST_IP + ':10005/remoteEntry.js',
                home_hrm: 'home_hrm@http://' + HOST_IP + ':4011/remoteEntry.js',
                order: 'order@http://' + HOST_IP + ':4006/remoteEntry.js',
                exdashboard: 'exdashboard@http://' + HOST_IP + ':5000/remoteEntry.js',
                skulocator: 'skulocator@http://' + HOST_IP + ':5001/remoteEntry.js',
                inventory: 'inventory@http://' + HOST_IP + ':4011/remoteEntry.js',
                returns: 'returns@http://' + HOST_IP + ':5016/remoteEntry.js',
                inventoryreturns: 'inventoryreturns@http://' + HOST_IP + ':5017/remoteEntry.js',
                vendor: 'vendor@http://' + HOST_IP + ':4016/remoteEntry.js',
                homepage: 'homepage@http://' + HOST_IP + ':10085/remoteEntry.js',
                supportticket: 'supportticket@http://' + HOST_IP + ':11999/remoteEntry.js',
                configuration: 'configuration@http://' + HOST_IP + ':10113/remoteEntry.js',
                userprofile: 'userprofile@http://' + HOST_IP + ':4018/remoteEntry.js',
                goodsnote: 'goodsnote@http://' + HOST_IP + ':4020/remoteEntry.js',
                amazonreport: 'amazonreport@http://' + HOST_IP + ':4021/remoteEntry.js',
                users: 'users@https://d3phu38bswk0vq.cloudfront.net/users/remoteEntry.js',
                user_roles: 'user_roles@https://d3phu38bswk0vq.cloudfront.net/user_roles/remoteEntry.js',
                // users: 'users@http://' + HOST_IP + ':10999/remoteEntry.js',
                // user_roles: 'user_roles@http://' + HOST_IP + ':10998/remoteEntry.js',
                employee: 'employee@http://' + HOST_IP + ':40001/remoteEntry.js',
                // panelresetpassword: 'panelresetpassword@http://' + HOST_IP + ':10888/remoteEntry.js',
                poproposal: 'poproposal@http://' + HOST_IP + ':10589/remoteEntry.js',
                purchaseorder: 'purchaseorder@http://' + HOST_IP + ':10890/remoteEntry.js',
                rawmaterials: 'rawmaterials@http://' + HOST_IP + ':10112/remoteEntry.js',
                purchaseorderreport: 'purchaseorderreport@http://' + HOST_IP + ':10086/remoteEntry.js',
                monitorpo: 'monitorpo@http://' + HOST_IP + ':10500/remoteEntry.js',
                sequence: 'sequence@http://' + HOST_IP + ':10400/remoteEntry.js',
                poquotation: 'poquotation@http://' + HOST_IP + ':10540/remoteEntry.js',
                customer: 'customer@http://' + HOST_IP + ':4030/remoteEntry.js',
                deliverychallan: 'deliverychallan@http://' + HOST_IP + ':10111/remoteEntry.js',
                bom: 'bom@http://' + HOST_IP + ':10114/remoteEntry.js',
                poexecution: 'poexecution@http://' + HOST_IP + ':5011/remoteEntry.js',
                inventoryexecution: 'inventoryexecution@http://' + HOST_IP + ':5012/remoteEntry.js',
                // unitmeasure: 'unitmeasure@http://' + HOST_IP + ':10113/remoteEntry.js',    
                dashboardreport: 'dashboardreport@http://' + HOST_IP + ':10002/remoteEntry.js',
                reports: 'reports@http://' + HOST_IP + ':5015/remoteEntry.js',
                extras: 'extras@http://' + HOST_IP + ':6011/remoteEntry.js',
                teamassign: 'teamassign@http://' + HOST_IP + ':10509/remoteEntry.js',
                employerconfig: 'employerconfig@http://' + HOST_IP + ':10004/remoteEntry.js',
                bomreport: 'bomreport@http://' + HOST_IP + ':8001/remoteEntry.js',
                hrm_config_ot_permission: 'hrm_config_ot_permission@http://' + HOST_IP + ':11090/remoteEntry.js',
                hrm_config_permission: 'hrm_config_permission@http://' + HOST_IP + ':10090/remoteEntry.js',
                hrm_on_duty: 'hrm_on_duty@http://' + HOST_IP + ':10126/remoteEntry.js',
                hrm_shift_config: 'hrm_shift_config@http://' + HOST_IP + ':10125/remoteEntry.js',
                mapping: 'mapping@http://' + HOST_IP + ':20129/remoteEntry.js',
                attendance: 'attendance@http://' + HOST_IP + ':11009/remoteEntry.js',

                leaveadmin: 'leaveadmin@http://' + HOST_IP + ':10092/remoteEntry.js',
                leave: 'leave@http://' + HOST_IP + ':10300/remoteEntry.js',
                orgreport: 'orgreport@http://' + HOST_IP + ':10305/remoteEntry.js',

                payroll: 'payroll@http://' + HOST_IP + ':40009/remoteEntry.js',
                overtime_apply: 'overtime_apply@http://' + HOST_IP + ':11010/remoteEntry.js',
                attendance_configuration: 'attendance_configuration@http://' + HOST_IP + ':11201/remoteEntry.js',
                incentive: 'incentive@http://' + HOST_IP + ':11021/remoteEntry.js',
                report: 'report@http://' + HOST_IP + ':11022/remoteEntry.js',
                payrollreport: 'payrollreport@http://' + HOST_IP + ':10023/remoteEntry.js',
                dashboard: 'dashboard@http://' + HOST_IP + ':40011/remoteEntry.js',
                holidayconfig: 'holidayconfig@http://' + HOST_IP + ':11024/remoteEntry.js',
                supportticket:
                "supportticket@https://d3phu38bswk0vq.cloudfront.net/supportticket/remoteEntry.js",
                incentive_provide: 'incentive_provide@http://' + HOST_IP + ':11025/remoteEntry.js',
                userstab:
                    "userstab@https://d3phu38bswk0vq.cloudfront.net/userstab/remoteEntry.js",
            },
            //shared: ['react', 'react-dom'],
            // 
        }),

    ]
};

module.exports = merge(commonConfig, devConfig);