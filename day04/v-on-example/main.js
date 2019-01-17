new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    alertMessage: ''
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
        'Hello Vue!' :
        'Hello World!';
    },
    alertMessageGreeting() {
      this.alertMessage = 'You typed something!';
    },
    alertEnterGreeting() {
        this.alertMessage = 'You typed and pressed Enter!';
    },
  }
});
