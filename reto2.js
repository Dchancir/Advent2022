function countHours(year, holidays) {
    const holidayDates = holidays
    .map(holiday => new Date(holiday + '/' + year)
    .getDay());
    
    const extraHours = (holidayDates.filter
        (date => date !== 0 && date !== 6).length) * 2;
    return extraHours;
}

console.log(countHours(2022, ['01/06', '04/01', '12/25'] ))