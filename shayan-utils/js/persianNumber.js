const perNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']

const persianNumber = englishNumber => String(englishNumber).split('').map(char => parseInt(char)?perNums[parseInt(char)]:parseInt(char)===0?'۰':char).join('')

export default persianNumber