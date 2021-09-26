
// "برای ویرگول بعد از هر 3 رقم و گرد کردن اعداد با تنها 1 رقم اعشار از این تابع استفاده می شود"

export const formatCuurency = amount => {
    return Number(amount)
      .toFixed(1)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};