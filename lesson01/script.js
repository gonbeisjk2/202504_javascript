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

// 数字
console.log(16 / 4);
const PI = 3.14;
let radius = 8;
console.log(PI * radius ** 2);

let num = 1;
num = num + 1;
console.log(num);

num += 1; // num = num + 1 と同等
console.log(num);

num++; // num += 1 と同等
console.log(num);
num--; // num -= 1 と同等
console.log(num);
// ++num; // 手前に記号を書くと優先度が上がる

// テンプレートリテラル
const author = '山田太郎';
const likes = 25;
let result = 'この記事の投稿者: ' + author + ', いいねの数: ' + likes;
console.log(result);

result = `この記事の投稿者: ${author}, いいねの数: ${likes}`;
console.log(result);

let sample = "今日の天気は\"快晴\"です。";

let html = `<p class="detail">この記事の投稿者: ${author}, いいねの数: ${likes}</p>`;
document.body.insertAdjacentHTML('beforeend', html);

const price = 100;
let priceFruits = `今日の特価品はりんご: ${price - price * 0.1}円`;
console.log(priceFruits);

//配列
let fruits = ['りんご', 'みかん', 'ぶどう'];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = 'バナナ';

console.log(fruits.join(' ☺️ '));

let fruitsCount = fruits.push('なし'); //元の配列が変化する
console.log(fruits, fruitsCount);

fruits.pop();
console.log(fruits);

// ブーリアン
let email2 = 'taro@yamada.co.jp';
console.log(email2.includes('#'));

let limit = '50';
console.log(limit == 50); // true
console.log(limit === 50); // false
console.log(limit !== 50); // true
console.log(limit >= 30); // true

// 型変換
console.log(typeof 123);
console.log(typeof '123');
let score = '100';
console.log(typeof Number(score));
score = Number(score);
console.log(score - 20);

let newAge = document.forms[0].age.value;
newAge = Number(newAge);
console.log(newAge);