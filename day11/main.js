const tweets = [
  {
    id: 1,
    name: 'James',
    handle: '@jokerjames',
    img: './images/james.png',
    tweet: "If you don't succeed, dust yourself off...",
    likes: 10,
  },
  {
    id: 2,
    name: 'Fatima',
    handle: '@fantasticfatima',
    img: './images/fatima.png',
    tweet: 'Better late than never but never late...',
    likes: 12,
  },
  {
    id: 3,
    name: 'Xin',
    handle: '@xeroxin',
    img: './images/xin.png',
    tweet: 'Beauty in the struggle...',
    likes: 18,
  }
];

new Vue({
  el: '#app',
  data: {
    tweets
  }
});
