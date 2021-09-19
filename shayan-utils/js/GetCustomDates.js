import moment from "moment-jalaali";

export const GetCustomDates = (startof, customStart, customEnd) => {
    var arr = [];
    if (startof === "week") { 
        let lenghtWeek = 7
        for (let i = 1; i <= lenghtWeek; i++) {
            var day = (moment().startOf(startof).add(-1, "days"));
            let start = day.add(i, "days").format('YYYY/MM/DD 00:00:00');
            var day = (moment().startOf(startof).add(-1, "days"));
            let end = day.add(i, "days").format('YYYY/MM/DD 23:59:59');
            arr.push({ start, end });
        }

    } else if (startof === "month") {
        let lenghtMonth = moment().endOf("jMonth").jDate()
        for (let i = 1; i <= lenghtMonth; i++) {
            var day = (moment().startOf("jMonth").add(-1, "days"));
            let start = day.add(i, "days").format('YYYY/MM/DD 00:00:00');
            var day = (moment().startOf("jMonth").add(-1, "days"));
            let end = day.add(i, "days").format('YYYY/MM/DD 23:59:59');
            arr.push({ start, end });
            console.log(  '' , arr)
        }
    } else if (startof === "year") {
        var currentDay = moment().format("jYYYY/jM/jD");
        var start = moment(currentDay, "jYYYY/jM/jD");
        var end = moment(currentDay, "jYYYY/jM/jD");

        start.format("jYYYY/jM/jD [is] YYYY/M/D");
        end.format("jYYYY/jM/jD [is] YYYY/M/D");

        start.startOf("jYear");
        start.startOf("jMonth");

        end.startOf("jYear");
        end.startOf("jMonth");
        end.endOf("jMonth");

        var arr = [];
        arr.push({
            start: start.format("YYYY/MM/DD 00:00:00"),
            end: end.format("YYYY/MM/DD 23:59:59"),
        });
        for (let i = 2; i <= 12; i++) {
            start.add(1, "jMonth");
            end.add(1, "jMonth");
            arr.push({
                start: start.format("YYYY/MM/DD 00:00:00"),
                end: end.format("YYYY/MM/DD 23:59:59")
            });
        }
    } else if (startof === "currentweek") {
        let startOfWeek = (moment().startOf("week").add(-1, "days").format("YYYY/MM/DD 00:00:00"));
        let endOfWeek = (moment(startOfWeek).add(6, "days").format("YYYY/MM/DD 23:59:59"));
        arr.push({
            start: startOfWeek,
            end: endOfWeek
        });
    }
    else if (startof === "currentMonth") {
        let startOfMonth = moment().startOf('jMonth').format("YYYY/MM/DD 00:00:00");
        let endOfMonth = moment().endOf('jMonth').format("YYYY/MM/DD 23:59:59");
        arr.push({
            start: startOfMonth,
            end: endOfMonth
        });
    }
    else if (startof === "currentYear") {
        var currentDay = moment().format("jYYYY/jM/jD");
        var start = moment(currentDay, "jYYYY/jM/jD");
        var end = moment(currentDay, "jYYYY/jM/jD");

        start.format("jYYYY/jM/jD [is] YYYY/M/D");
        end.format("jYYYY/jM/jD [is] YYYY/M/D");

        start.startOf("jYear");
        start.startOf("jMonth");

        end.endOf("jYear");
        end.startOf("jMonth");
        end.endOf("jMonth");

        arr.push({
            start: start.format("YYYY/MM/DD 00:00:00"),
            end: end.format("YYYY/MM/DD 23:59:59")
        });
    } else if (startof === "nextFifteen") {
        var day = moment();
        var start = day;
        var end = moment(start).add(15, "days");
        arr.push({
            start: start.format("YYYY/MM/DD 00:00:00"),
            end: end.format("YYYY/MM-DD 23:59:59")
        });
        for (let i = 1; i < 4; i++) {
            start = moment(end).add(1, "days");
            end = moment(start).add(15, "days");
            arr.push({
                start: start.format("YYYY/MM/DD 00:00:00"),
                end: end.format("YYYY/MM/DD 23:59:59")
            });
        }
    } else if (startof === "pastFifteen") {
        var day = moment();
        var start = day;
        var end = moment(start).add(-5, "days");
        arr.push({
            start: end.format("YYYY/MM/DD 23:59:59"),
            end: start.format("YYYY/MM/DD 00:00:00")
        });
        for (let i = 1; i < 4; i++) {
            start = moment(end).add(-1, "days");
            end = moment(start).add(-5, "days");
            arr.push({
                start: end.format("YYYY/MM/DD 23:59:59"),
                end: start.format("YYYY/MM/DD 00:00:00")
            });
        }
    } else if (startof === "custom") {
        arr.push({
            start: customStart.format("YYYY/MM/DD 00:00:00"),
            end: customEnd.format("YYYY/MM/DD 23:59:59")
        });
    } else if (startof === "customBarDate") {
        var now = customStart.clone(), dates = [];
        while (now.isSameOrBefore(customEnd)) { 
            arr.push({
                start: now.format("YYYY/MM/DD 00:00:00"),
                end: now.format("YYYY/MM/DD 23:59:59")
            });
            now.add(1, 'days');
        }
    } else if (startof === "customNextFifteen") {
        var start = customStart;
        var end = moment(start).add(15, "days");
        arr.push({
            start: start.format("YYYY/MM/DD 00:00:00"),
            end: end.format("YYYY/MM-DD 23:59:59")
        });
        for (let i = 1; i < 4; i++) {
            start = moment(end).add(1, "days");
            end = moment(start).add(15, "days");
            arr.push({
                start: start.format("YYYY/MM/DD 00:00:00"),
                end: end.format("YYYY/MM/DD 23:59:59")
            });
        }
    }
    else if (startof === "customPastFifteen") {
        var start = customStart;
        var end = moment(start).add(-5, "days");
        arr.push({
            start: end.format("YYYY/MM/DD 23:59:59"),
            end: start.format("YYYY/MM/DD 00:00:00")
        });
        for (let i = 1; i < 4; i++) {
            start = moment(end).add(-1, "days");
            end = moment(start).add(-5, "days");
            arr.push({
                start: end.format("YYYY/MM/DD 23:59:59"),
                end: start.format("YYYY/MM/DD 00:00:00")
            });
        }
    }
    else {
        arr = [];
    }
    return arr;
}
