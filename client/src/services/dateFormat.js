export const formatDate = (date) => {
    const year = date.getFullYear()
    let month = date.getMonth() + 1 + ''
    let day = date.getDate() + ''
  
    if(month.length === 1) month = '0' + month
    if(day.length === 1) day = '0' + day
  
    const formatedDate = `${year}-${month}-${day}`
    return formatedDate
}

export const unFormatDate = (date) => {
    const targetArr = date.split('-')
    return new Date(parseInt(targetArr[0]), parseInt(targetArr[1]) - 1, parseInt(targetArr[2]))
  }