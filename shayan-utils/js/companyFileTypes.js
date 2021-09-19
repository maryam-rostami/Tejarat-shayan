export const companyFileTypes = Object.freeze({ 
    MELLICARD : 0,
    SHENASNAMEH : 1,
    PARVANEH : 2,
    PARVANEHFANI : 3,
    NEZAMCARD : 4,
    ADDRESSFILE : 5,
    ASASNAMEH : 6,
    SHERKATNAMEH : 7,
    EZHARNAMEH : 8,
    TASIS : 9,
    AGAHI : 10,
    HESABRASI : 11,
    OTHER : 12
});

export const companyFileTypeTitles = Object.freeze({ 
    0 : "کارت ملی",
    1 : "شناسنامه",
    2 : "پروانه تاسیس داروخانه",
    3 : "پروانه مسئول فنی داروخانه",
    4 : "کارت نظام پزشکی موسس داروخانه",
    5 : "مدارک تایید صحت نشانی (اجاره نامه / سند ملک، قبض خدمات عمومی و...)",
    6 : "اساسنامه",
    7 : "شرکت نامه",
    8 : "اظهار نامه ثبت شرکت ها",
    9 : "آگهی تاسیس شرکت در روزنامه رسمی",
    10 : "آخرین آگهی تغییرات منتشره در روزنامه رسمی",
    11 : "آخرین صورت مالی حسابرسی شده (در صورت وجود)",
    12 : "سایر"
});

export const companyFileTypeMap = {
    "داروخانه" : [
        {
            type: companyFileTypes.MELLICARD,
            title: companyFileTypeTitles[companyFileTypes.MELLICARD]
        },
        {
            type: companyFileTypes.SHENASNAMEH,
            title: companyFileTypeTitles[companyFileTypes.SHENASNAMEH]
        },
        {
            type: companyFileTypes.PARVANEH,
            title: companyFileTypeTitles[companyFileTypes.PARVANEH]
        },
        {
            type: companyFileTypes.PARVANEHFANI,
            title: companyFileTypeTitles[companyFileTypes.PARVANEHFANI]
        },
        {
            type: companyFileTypes.NEZAMCARD,
            title: companyFileTypeTitles[companyFileTypes.NEZAMCARD]
        },
        {
            type: companyFileTypes.ADDRESSFILE,
            title: companyFileTypeTitles[companyFileTypes.ADDRESSFILE]
        },  
    ],
    "other" : [
        {
            type: companyFileTypes.ASASNAMEH,
            title: companyFileTypeTitles[companyFileTypes.ASASNAMEH]
        },
        {
            type: companyFileTypes.TASIS,
            title: companyFileTypeTitles[companyFileTypes.TASIS]
        },
        {
            type: companyFileTypes.AGAHI,
            title: companyFileTypeTitles[companyFileTypes.AGAHI]
        },
        {
            type: companyFileTypes.SHERKATNAMEH,
            title: companyFileTypeTitles[companyFileTypes.SHERKATNAMEH]
        },
        {
            type: companyFileTypes.EZHARNAMEH,
            title: companyFileTypeTitles[companyFileTypes.EZHARNAMEH]
        },
        {
            type: companyFileTypes.HESABRASI,
            title: companyFileTypeTitles[companyFileTypes.HESABRASI]
        },
    ],
    "person" : [
        {
            type: companyFileTypes.MELLICARD,
            title: "کارت ملی (صفحات پشت و رو)"
        },
        {
            type: companyFileTypes.SHENASNAMEH,
            title: "شناسنامه (صفحه اول و صفحه توضیحات)"
        },
    ]
}