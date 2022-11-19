
export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) {unique.push(task.dateFormat);}});
    return unique;
}

export const orderDates = (dates) => {
    return dates.sort((a, b) => {
    const dateA = moment(a, "DD/MM/YYYY");
    const dateB = moment(b, "DD/MM/YYYY");
    return dateA - dateB;
    })
}