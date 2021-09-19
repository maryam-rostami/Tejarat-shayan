import {
    dashboardHomePath,
    dashboardNetworkManagementPath,
    dashboardUsersListPath,
    dashboardInvoicesPath,
    dashboardSettingProfilePath,
    dashboardKartablSetadPath,
    dashboardNewUserPath,
    kartablSetadCompanyPreviewPath , 
    dashboardSupplierView
} from '../routes/paths'
import apiServices from "./apiServices";

const SETAD_ALLOWED_PATHS = [dashboardHomePath, dashboardKartablSetadPath, kartablSetadCompanyPreviewPath, dashboardUsersListPath, dashboardNewUserPath ,dashboardSupplierView ]

 
export function menuCheckActive(obj) {
    const currentPath = window.location.pathname;
    if(obj.path !== undefined && obj.path === currentPath) {
        obj.isActive = true;
    } else {
        obj.isActive = false;
    }
    return obj;
}

export function menuCheckPermission(obj) {
    if(obj.isAllowed !== undefined) {
        return obj;
    }
    let setad = apiServices.getValue("setad");
    if (setad && setad !== undefined && setad.toString() === 'true') {
        obj.isAllowed = SETAD_ALLOWED_PATHS.includes(obj.path);
    } else {
        obj.isAllowed = ! [dashboardKartablSetadPath].includes(obj.path);
    }
    return obj;
}

export const exampleMenu = {
    items: [
        menuCheckPermission({
            name: "dashboard",
            label: "پیشخوان",
            iconName: "DashboardOutlined",
            path: dashboardHomePath,
            isAllowed: true
        }),
        menuCheckPermission({
            name: "cartable",
            label: "کارتابل",
            iconName: "FileCopyOutlined",
            path: dashboardKartablSetadPath,

        }),
        /*menuCheckPermission({
            name: "settings",
            label: "مدیریت سفارشات",
            iconName: "AssignmentOutlined",
        }),*/
        menuCheckPermission({
            name: "invoices",
            label: "مدیریت صورتحساب",
            iconName: "ReceiptOutlined",
            path: dashboardInvoicesPath, 
        }),
        menuCheckPermission({
            name: "connections",
            label: "مدیریت تامین کنندگان و خریداران",
            iconName: "AccountTreeOutlined",
            path: dashboardNetworkManagementPath,
        }),
        menuCheckPermission({
            name: "users",
            label: "مدیریت کاربران",
            iconName: "GroupOutlined",
            path: dashboardUsersListPath,
        }),
        menuCheckPermission({
            name: "setting_profile",
            label: "پروفایل",
            iconName: "AccountBox",
            path: dashboardSettingProfilePath
        }) , 
       
        menuCheckPermission({
            name : "dashboard" , 
            label : "داشبورد" , 
            iconName : "Dashboard"  , 
            path : dashboardSupplierView , 
        
        })
    ]
}
 