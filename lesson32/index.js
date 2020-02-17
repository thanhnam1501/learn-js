const fs = require('fs');
const readLineSync = require('readline-sync');
console.log('Nhấn phím 1 => Xem danh sách học sinh');
console.log('Nhấn phím 2 => Thêm học sinh m');
console.log('Nhấn phím 3 => Lưu và thoát chương trình!');
let option = readLineSync.question();
console.log(option);
if(option == 1){
    console.log(fs.readFileSync('lesson32/student'), { encoding: 'utf8' });
}else if (option == 2){

}