export const ISOStringToDate = (dateString) => {
    const date = dateString.substring(0, 10);
    return date;
}

export const ISOStringtoDateTime = (dateString) => {
    const dateTime = new Date(dateString)

    return `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDate()} (${dateTime.getHours()}: ${dateTime.getMinutes()})`
}