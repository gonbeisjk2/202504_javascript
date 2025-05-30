// for文
for (let i = 0; i < 5; i++) {
  console.log(`iの値は${i}です`);
}
console.log('ループ終了');

const maker = ['TOYOTA', 'HONDA', 'NISSAN', 'SUZUKI', 'TESLA'];
console.log(maker);
for (let i = 0; i < maker.length; i++) {
  console.log(`車のメーカー: ${maker[i]}`);
}

let j = 0;
while (j < 3) {
  console.log(`jの値は${j}です`);

  j++;
}

// if文
const age = 18;
if (age >= 18) {
  console.log('あなたには選挙権があります');
}

const password = 'asdasdf';
if (password.length >= 8) {
  console.log('パスワードは8文字以上です');
} else {
  console.log('パスワードは8文字以上で設定してください');
}

if (password.length >= 12) {
  console.log('とても強いパスワードです')
} else if (password.length >= 8) {
  console.log('良いパスワードです');
} else {
  console.log('パスワードは8文字以上で設定してください');
}

// 論理演算
// password.length >= 12
// password.includes('@') // true / false

if (
  password.length >= 12 ||
  password.includes('@')
) {
  console.log('OK: とても強いパスワードです');
} else {
  console.log('NG: パスワードは12文字以上で@を含めてください');
}

let login = false;
if (!login) {
  console.log('ログインしてください');
}

if ('') {
  console.log('猫');
}

// break文とcontinue文
let scores = [50, 40, 30, 0, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

  console.log('あなたのスコア: ', scores[i]);
  if (scores[i] === 100) {
    console.log('100点獲得しました');
    break;
  }

}

for (let i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue;
  }
  console.log('あなたのスコア: ', scores[i]);

}

//switch文
let grade = 'C';

switch (grade) {
  case 'A':
    console.log('優秀！');
    break;
  case 'B':
    console.log('良い！');
    break;
  case 'C':
    console.log('普通');
    break;
  case 'D':
    console.log('がんばりましょう');
    break;
  case 'E':
    console.log('落第...');
    break;
  default:
    console.log('不明');
}

//スコープについて
let size = 25;

if (true) {
  let size = 30;
  console.log(size);
}

console.log(size);