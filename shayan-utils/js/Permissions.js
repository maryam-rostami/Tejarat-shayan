
export const Permissions = Object.freeze({

    //SPECIAL PERMISSIONS
    REFRESHTOKEN:-2,
    AUTHORIZE: -1,
    
        
    //SETAD PERMISSIONS
    MANAGE_SETAD_USER:7,
    MANAGE_SETAD_COMPANY:8,
    CONFIRM_SETAD_COMAPNY:9,
    VIEW_SETAD_COMPANY:10,
   
    //Add user and roles for company
    MANAGE_COMPANY_USER:6,
    //confirm is used for buyers
    CONFIRM_INVOICE_COMPANY:2,
   
    //Add,Edit,Delete invoices 
    MANAGE_INVOICE_COMPANY:501,
    //View invoices
    VIEW_INVOICE_COMPANY:503,
    
    //finilized is used by sellers when issuing invoices
    FINILAZE_INOVICE_COMPANY:600,

    //SELF_ACCESS_FOR_COMPANYUSERS
    MANAGE_INVOICE_SELF:1,
    
});