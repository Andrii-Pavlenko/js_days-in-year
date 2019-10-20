function daysInYear(year) {
    try{
        if (year !== Number || !Number.isInteger(year)) {
            throw new Error();
        } 
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 366 : 365;
    } catch (e) {
        return 'exception, it is not a year!'
    }
}

daysInYear(2019); // 365
// daysInYear('2019'); // exception
// daysInYear(2020); // 366
// daysInYear(2020.2); // exception
// daysInYear(2100); // 365
// daysInYear({year: 2100}); // exception