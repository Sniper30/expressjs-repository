

export function DateParser(date: Date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const h = date.getHours() % 12;
    const min = date.getMinutes();
    const seg = date.getSeconds();
    // console.log(date.getHours() > 12 && date.getHours() < 24 ? "pm" : "am")
    return `${year}-${month}-${day} ${h}-${min}-${seg}`
}