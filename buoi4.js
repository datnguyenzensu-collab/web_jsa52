// khai báo mảng có chứa giá trị
// index bắt đầu từ 0 và kết thúc ở length -1
// length: độ dài của mảng (Myarray.length) (5 phần tử thì length = 5)
let Myarray = [1,2,3,4,5];
console.log("Mảng ban đầu: ",Myarray)

// Lấy ra phần tử cụ thể bằng cách sử dụng chỉ số (index)
// Cú pháp:  arrayName[index]

console.log("Phần tử đầu tiên của mảng Myarray:",Myarray[0]);
console.log("Phần tử thứ 2 của mảng Myarray: ", Myarray[1]);

// duyệt mảng sử dụng vòng lặp for

for (let i = 0; i < Myarray.length; i++) {
  console.log(`Phần tử tại index ${i}:`, Myarray[i]);
}

// thêm vào phần tử vào cuối mảng sử dụng push
// cú pháp arrayName.push(element);
Myarray.push(60);
console.log("Mảng sau khi thêm vào phần tử: ",Myarray);

// Thêm phần tử vào đầu mảng sử dụng unshift
// cú pháp: arrayName.unshift(element);

Myarray.unshift(0);
console.log("Mảng sau khi thêm phần tử vào đầu:",Myarray);

// thêm phần tử vào đầu mảng sử dụng splice
// cú pháp: arrayName.splice(startIndex, deletecount, element1, ...);

Myarray.splice(2,1,15); // thêm 15 vào index 2
Myarray.splice(2,0,15); // thêm 15 vào index 2
console.log("Mảng sau khi sử dụng splice: ",Myarray);

// cập nhật phần tử trong mảng
// cú pháp; arrayName[index] = newValue;

Myarray[3] = 35; // cập nhật phần tử tại index 3 thành 35
console.log("Mảng sau khi cập nhật phần tử: ",Myarray);

// tìm kiếm phần tử bằng cách sử dụng indexOf
// cú pháp: arrayName.index(element);
// trả về index của phần tử nếu tìm thấy, ngược lại trả về -1

let index = Myarray.indexOf(30);
if(index !== -1){
    console.log(` Phần tử 30 được tìm thấy tại index: ${index}`);
} else{
    console.log("Phần tử 30 ko tồn tại trong mảng");
}

// xóa phần tử cuối cùng trong mảng sử dụng pop
// cú pháp: arrayName.pop();

let removedElement = Myarray.pop();
console.log("Phần tử bị xóa:", removedElement);
console.log("Mảng sau khi bị xóa phần tử cuối cùng:",Myarray);

// xóa phần tử đầu tiên trong mảng sử dụng shift
// cú pháp: arrayName.shift();
let removedelement = myArray.shift();
console.log("Phần tử bị xóa:", removedElement);
 console.log("Mảng sau khi xóa phần tử đầu tiên:", myArray);

// khai báo object trong js
// cú pháp:
// key1: value1
// key2 : value2
// key3 : value3
// ...
//};
let human = {
    name:"Thai Son",
    age:3,
    isMarried: false,
    hobbies: ["reading","traveling","swimming"],
    address: {
        street: "123 main",
        city: "Ha Noi",
    },
};
console.log("Object human:",human);

// truy cập giá trị trong object sử dụng key 
//cú pháp: objectName.key hoặc objectName["key"]
human.job = "developer";// thêm key-value mới
human.age = 4; // cập nhật giá trị của key age
console.log("object human sau khi thêm/ cập nhật:",human);

// duyệt object sử dụng vòng lặp for .. in
for(let key in human){
    console.log(`Key: ${key}, Value: ${human[key]}`);
}

// xóa key sửu dụng delete 
// cú pháp: delete objectName.key;
delete human.isMarried;
console.log("Object human sau khi xóa isMarried:",human);

// tuowng tác với DOM
// document.getElemantById()
let demoElement= (document.getElementById("demo").interHTML= "hello world!");
console.log("Nội dung của phần tử có id 'demo':",demoElement);
