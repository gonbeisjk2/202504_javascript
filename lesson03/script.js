//関数宣言
greet();

function greet() {
  console.log('こんにちは');
}




//関数式
const speak = function (greet = 'ごきげんよう', name = '名無し') {
  console.log(`${name}さん、${greet}`);
};

speak('こんにちは', '花子');


//返り値
const calcArea = function (r) {
  return 3.14 * r ** 2;

  console.log('あいうえお'); // この行は実行されない
}

const result = calcArea(3);
console.log(result);


// アロー関数
// const arrowCalcArea = (r) => {
//   return 3.14 * r ** 2;
// };
const arrowCalcArea = r => 3.14 * r ** 2;
console.log(arrowCalcArea(5));


// 問題１
// const hello = function() {
// 	return '世界の皆さんこんにちは！';
// };

// let result =  hello(); //関数の呼び出し
// console.log(result); //とコンソールへの表示
const hello = () => '世界の皆さんこんにちは！';
console.log(hello());

// 問題2
// const calculator = function(price, tax) {
//   let total = 0;
//   for(let i = 0; i < price.length; i++) {
//     total += price[i] + price[i] * tax;
//   }
//   return total;
// }

const calculator = (priceTable, tax) => {
  let total = 0;
  for (let i = 0; i < priceTable.length; i++) {
    total += priceTable[i] + priceTable[i] * tax;
  }
  return total;
};

let priceTable = [100, 80, 200, 50]; //価格表
let totalPrice = calculator(priceTable, 0.1);
console.log(totalPrice);

// コールバック関数
const funcA = (callback) => {
  console.log('funcAを実行しました');
  let value = 5;
  callback(value);
};

const funcB = (value) => {
  console.log('値: ', value);
};

funcA(funcB);

let train = ['山手線', '中央線', '京浜東北線', '埼京線', '湘南新宿ライン'];

train.forEach(function (value) {
  console.log(value + 'の電車が発車いたします');
});

// 「線」を含む路線のみ抽出
let newLine = train.filter(function (line) {
  return line.includes('線');
});
console.log(newLine);

let html = '';
train.forEach(line => {
  html += `<li>${line}</li>`;
});

const ul = document.querySelector('.train');
ul.innerHTML = html;