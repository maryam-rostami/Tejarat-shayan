
// "برای چک کردن بازه قابل قبول اعداد فارسی، تعداد اعداد شماره موبایل چه انگلیسی و چه فارسی، داشتن @ و . در آدرس ایمیل و همچنین تعداد قابل قبول اعداد برای شماره شبا از متغییر های زیر استفاده میشود "
// "برای مثال خروجی دستور true" ،englishMobileRegex.test("09121362134")" است چون با 09 شروع شده و 11 رقم دارد. در حالیکه اگر  شماره موبایل با 09  شروع نشود و 11 رقم نباشد خروجی آن false میشود"

export const persianEnglishNumsRegex = new RegExp(/^[0-9\u06F0-\u06F9]+$/);

export const englishMobileRegex = new RegExp(/^09\d{9}$/);

export const persianMobileRegex = new RegExp(/^۰۹[۰-۹]{9}$/);

export const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

export const mobileFaEnRegex = new RegExp(englishMobileRegex.source + "|" + persianMobileRegex.source);

export const mobileEmailRegex = new RegExp(emailRegex.source + "|" + mobileFaEnRegex.source);

export const shabaRegex = new RegExp(/^(?:IR)(?=.{24}$)[0-9]*$/)
