let counterOne = {
  templete: `
    <button class="component-button" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data () {
    return {
      counter: 0
    }
  }
}

let counterTwo = {
  templete: `
    <button class="component-button" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0
    }
  }
}

let counterThree = {
  templete: `
    <button class="component-button" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0
    }
  }
}

new Vue({
  el: "#app",
  data: {
    message: "Greetings!"
  },
  components: {
    "counter-one": counterOne,
    "counter-two": counterTwo,
    'counter-three': counterThree,
  }
});
