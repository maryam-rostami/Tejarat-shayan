
// "با انتخاب یک تاریخ کامل و مشخص کردن تعداد روز بعد از آن از تابع زیر استفاده می شود."
// " به عبارتی خروجی دستور WeekCalender(new Date(),10) تاریخ 10 روز بعد از تاریخ امروز را نشان میدهد."

export const WeekCalender = (date,days) =>{
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days);
    return copy
}
