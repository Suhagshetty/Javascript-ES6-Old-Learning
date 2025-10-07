const now = new Date();

console.log("Year:", now.getFullYear()); // 2025
console.log("Month:", now.getMonth()); // 9 (October)
console.log("Date:", now.getDate()); // 7
console.log("Day:", now.getDay()); // 2 (0 = Sunday)
console.log("Hours:", now.getHours()); // 17
console.log("Minutes:", now.getMinutes()); // 45
console.log("Seconds:", now.getSeconds()); // 12
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp:", now.getTime()); // milliseconds since Jan 1, 1970

const date = new Date();
date.setFullYear(2030);
date.setMonth(11); // December (0-indexed)
date.setDate(25);
date.setHours(10, 30, 0); // hour, min, sec
console.log(date);

const dates = new Date();
console.log(dates);
