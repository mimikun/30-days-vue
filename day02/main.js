new Vue({
  el: '#app',
  data: {
    greeting: 'Hello Vue!',
    user: 'mimikun',
    city: 'Fukui',
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello Vue!' ?
        'Hello React!' :
        'Hello Vue!';
    }
  }
});
