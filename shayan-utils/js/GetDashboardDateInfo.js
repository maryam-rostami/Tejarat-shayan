import apiServices from 'globalUsage/apiServices';
import { GetCustomDates } from 'globalUsage/GetCustomDates';
import moment from "moment-jalaali";

export let GetDashboardDateInfo = async (startDate, states, customStart, customEnd , salesInvoice , buyInvoice) => { 
    const weekDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    const months = ['فروردین', "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    let periods = JSON.stringify(GetCustomDates(startDate, customStart, customEnd)); 
   
    var response;
    var fetch;
    var labels;      
    var datas;
    var total;
        await apiServices
             .path(`einvoice/getSummerize?query={"periods": ${periods},"states":${states},"salesInvoice":${salesInvoice},"buyInvoice":${buyInvoice}}`)
            .method("GET")
            .request(
                (result) => {
                    response = result;
                    let fetchData = [];
                    for (let a in result.states[0].InvoiceSent) {
                        fetchData.push({ ...result.states[0].InvoiceSent[a], date: moment(result.states[0].InvoiceSent[a].period[0]).format('jYYYY/jM/jD') });
                    }
                    if (fetchData.length > 0) {
                        let totalPrice = fetchData.reduce(function (sum, item) {
                            return sum = sum + item.count;
                        }, 0);
                        total = totalPrice;
                    } else {
                        console.log('khali')
                    }
                    if (startDate === 'week') {
                        weekDays.forEach(function (day, index) {
                            if (fetchData[index]) {
                                var item = fetchData[index];
                                item["day"] = day;
                            } else {
                                return
                            }
                        });
                    }
                    if (startDate === 'year') {
                        months.forEach(function (month, index) {
                            if (fetchData[index]) {
                                var item = fetchData[index];
                                item["month"] = month;
                            } else {
                                return
                            }
                        });
                    }
                    let fetchChartData = [];
                    let fetchChartlabel = [];
                    for (let key in fetchData) {
                        fetchChartData.push(fetchData[key].price)
                    }
                    if (startDate === 'week') {
                        for (let key in fetchData) {
                            fetchChartlabel.push(fetchData[key].day)
                        }
                    } else if (startDate === 'month') {
                        for (let key in fetchData) {
                            fetchChartlabel.push(fetchData[key].date)
                        }
                    } else if (startDate === 'year') {
                        for (let key in fetchData) {
                            fetchChartlabel.push(fetchData[key].month)
                        }
                    }
                    fetch = fetchData;
                    datas = fetchChartData;
                    labels = fetchChartlabel
                }
            );
   
    return [fetch, datas, labels, total, response];
}