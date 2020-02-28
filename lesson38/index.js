const fs = require('fs');
const readLineSync = require('readline-sync');
console.log('Nhấn 1 => xem danh sách contact \n' +
    'Nhấn 2 => Cập nhật danh sách contact \n' +
    'Nhấn 3 => Thêm mới contact');
let option = readLineSync.question('Bây giờ anh muốn cái gì?????? ');
let data = JSON.parse(fs.readFileSync('lesson38/contact.txt'), {encoding: ''});
switch (option) {
    case '1':
        console.log(data);
        break;
    case '2':
        let findName = readLineSync.question('Tên cần chỉnh sửa: ');
        for(let key in data){
            if(key === findName){
                console.log(key , data[key]);
                let newName = readLineSync.question('New name: ');
                let newPhoneNumber = readLineSync.question('New phone number: ');
                data[newName] = newPhoneNumber;
                delete data[key];
                data = JSON.stringify(data);
                fs.writeFile('lesson38/contact.txt', data, function (err) {
                    if (err) throw err;
                    console.log('Done!');
                });
            }
        }
        break;
    case '3':
        let name = readLineSync.question('Tên contact: ');
        let phoneNumber = readLineSync.question('Số điện thoại: ');
        data[name] = phoneNumber;
        data = JSON.stringify(data);
        fs.writeFile('lesson38/contact.txt', data, function (err) {
            if (err) throw err;
            console.log('Done!');
        });
        break;
}
