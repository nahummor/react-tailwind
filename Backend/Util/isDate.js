/**
 * 
 * @param {date} data 
 * check if it is a date 
 */
function isDate(data) {
    const dateValues = data.split('/');

    if (dateValues.length === 3) {
        dateValues[0] = dateValues[0].length > 1 ? dateValues[0] : `0${dateValues[0]}`;
        dateValues[1] = dateValues[1].length > 1 ? dateValues[1] : `0${dateValues[1]}`;
        const testDate = new Date(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`);
        return !isNaN(testDate.getMonth());
    }
    return false;
}

function addDays(date, days) {
    const copy = new Date(new Date(Number(date)).setHours(0, 0, 0, 0));
    copy.setDate(date.getDate() + days);

    return copy
}

/**
 * 
 * @param {date} date 
 *  if date return date object else return empty string
 */
function getDate(date) {
    if (date === null || date === '') {
        return '';
    }

    const d = new Date(date);

    if (typeof d.getMonth === 'function') {
        return d;
    }
    return '';
}

/**
 * 
 * @param {number} serial 
 * convert excel date to JSDate
 */
function ExcelDateToJSDate(serial) {
    return new Date(Math.round((serial - 25569) * 86400 * 1000));
}

module.exports = {
    isDate,
    addDays,
    getDate,
    ExcelDateToJSDate
}