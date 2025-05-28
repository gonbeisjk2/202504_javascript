// alert('ハローワールド');
/* コメント */

console.log('コンソールに表示されるメッセージ');
console.error('エラーだよ');
console.table(
  {
    'test': 123,
    'test2': 456
  },
);

let age = 29;
console.log(age);

age = 40;
console.log(age);

const tax = 0.1;

try {
  tax = 0.05;
} catch (error) {
  console.log(error.message)
}


console.log('エラーの後') //あいうえお

let lastName = '山田';
let firstName = '太郎';
let fullName = lastName + ' ' + firstName;
console.log(fullName);
console.log(fullName[0]);

console.log(fullName.length);
console.log(fullName.concat('くん'));

let email = 'hanako@yamada.co.jp';
console.log(email.slice(2));
console.log(email.slice(2, 6));
console.log(email.indexOf('@'));
console.log(email.slice(email.indexOf('@') + 1));//ドメイン部分のみ切り出し

console.log(email.replace('taro', 'jiro'));