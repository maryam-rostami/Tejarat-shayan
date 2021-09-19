export const Percentages = (amount, all) => {
    let per = ((amount * 100) / all ).toFixed(1);
    return per ;
};