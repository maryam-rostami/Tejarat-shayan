
// "برای تبدیل اعداد از فارسی به انگلیسی از تابع زیر استفاده می شود"

export const ConvertNumbersToEnglish = (number) => {
  let persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ];

  if (typeof number === "string") {
    for (let i = 0; i < 10; i++) {
      number = number
        .replace(persianNumbers[i], i)
        .replace(arabicNumbers[i], i);
    }
  }
  return number;
};
