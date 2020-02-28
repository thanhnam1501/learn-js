const fs = require('fs');
const readLineSync = require('readline-sync');
// console.log('Nhấn phím 1 => Xem danh sách học sinh');
// console.log('Nhấn phím 2 => Thêm học sinh m');
// console.log('Nhấn phím 3 => Lưu và thoát chương trình!');
// let option = readLineSync.question();
// console.log(option);
let students = fs.readFileSync('json/student', {encoding: 'utf8'});
console.log(students);
let name = readLineSync.question("Tên của nó là gì: ");
let age = readLineSync.question("Nó bao nhiêu tuổi: ");
let member = [{"name": name, "age": age}];
let string = JSON.stringify(member);
fs.writeFileSync('json/student', string);
console.log(fs.readFileSync('json/student', {encoding: 'utf8'}));


