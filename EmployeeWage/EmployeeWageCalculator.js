//UC1_Check employee attendance
const IS_ABSENT = 0;
let attendance = Math.floor(Math.random() * 10) % 2;
if (attendance == IS_ABSENT) {
    console.log("Employee is ABSENT");
}
else {
    console.log("Employee is PRESENT");
}