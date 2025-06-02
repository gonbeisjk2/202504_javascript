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
  // 👇メソッドのもう一つの書き方
  logout() {
    console.log('ログアウトしました');
  },
  logLikes() {
    this.likes.forEach(like => {
      console.log(like);
    });
  },
  test: () => {
    console.log(this.likes);//ここでのthisはwindowオブジェクトを参照する
  },
};

console.log(user);
console.log(user['born-place']);
console.log(user.name);

user.age = 25;

user.login();
user.logout();

// thisについて
console.log(this);

user.logLikes();

user.test();

// 配列内にオブジェクトデータを入れる
const blogs = [
  {
    title: '今日は曇りです',
    likes: 12
  },
  {
    title: '今日は沖縄に来ています',
    likes: 100
  }
];
blogs.forEach(blog => {
  console.log(`タイトル: ${blog.title}, いいねの数: ${blog.likes}`)
});

// ビルトインオブジェクト(日付)
const today = new Date();//オブジェクトを生成
console.log(typeof today);
console.log(today);
console.dir(today);

console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
const days = ['日', '月', '火', '水', '木', '金', '土'];
console.log(days[today.getDay()]);

// ビルトイン関数
setTimeout(() => {
  console.log('1秒経過しました')
}, 1000);

// setInterval(() => {
//   const now = new Date();
//   console.log(now.getSeconds());
// }, 1000);

// プリミティブ型と参照型のデータの違い
let userTest = '太郎';
let userTest2 = userTest;//コピーされる
userTest = '花子';
console.log(userTest2);

let reference = {
  name: '太郎',
  age: 18
};
let reference2 = reference;
reference.name = '花子';
console.log(reference2.name);