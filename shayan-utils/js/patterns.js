
export const persianEnglishNumsRegex = new RegExp(/^[0-9\u06F0-\u06F9]+$/);

export const englishMobileRegex = new RegExp(/^09\d{9}$/);

export const persianMobileRegex = new RegExp(/^۰۹[۰-۹]{9}$/);

export const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

export const mobileFaEnRegex = new RegExp(englishMobileRegex.source + "|" + persianMobileRegex.source);

export const mobileEmailRegex = new RegExp(emailRegex.source + "|" + mobileFaEnRegex.source);

export const shabaRegex = new RegExp(/^(?:IR)(?=.{24}$)[0-9]*$/)
