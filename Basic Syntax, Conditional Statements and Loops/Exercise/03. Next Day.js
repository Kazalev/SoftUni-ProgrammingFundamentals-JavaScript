function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day)
    date.setDate(date.getDate() + 1);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    console.log(year + '-' + month + '-' + day);
}

nextDay(2016, 9, 30)