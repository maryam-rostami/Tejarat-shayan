
// "درصد مقدار یک عدد را نسبت به کل آن با تابع زیر می توان برگرداند."

export const Percentages = (amount, all) => {
    let per = ((amount * 100) / all ).toFixed(1);
    return per ;
};