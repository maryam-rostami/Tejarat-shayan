
// "برای تبدیل اعداد انگلیسی به فارسی از تابع persianNumber استفاده می شود"

const perNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']

export const persianNumber = englishNumber => String(englishNumber).split('').map(char => parseInt(char)?perNums[parseInt(char)]:parseInt(char)===0?'۰':char).join('')

