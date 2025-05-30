// オブジェクトリテラル
let user = {
  name: '太郎',
  age: 20,
  email: 'taro@yamada.co.jp',
  address: 'tokyo',
  likes: ['野球', 'カレー', '映画'],
  'born-place': '沖縄',
  login: function () {
    console.log('ログインしました');
  },
};

console.log(user);
console.log(user['born-place']);
console.log(user.name);

user.age = 25;