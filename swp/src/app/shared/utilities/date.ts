
const formatDate = (date: Date) => {

    return {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate(),
      }
    // return new Date().toISOString().substring(0, 10)
}

export default {
    formatDate
}
