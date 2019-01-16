new Vue({
  el: '#app',
  data: {
    greeting: '',
    user: 'mimikun',
    city: 'Fukui',
  },
  methods: {
    addGreeting() {
      this.greeting = 'Hello Vue!';
    }
  }
});
