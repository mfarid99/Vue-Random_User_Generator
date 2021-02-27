const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Peters',
      email: 'jhetfield@gmail.coms',
      gender: 'male',
      age: 44,
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      console.log(results)
      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.thumbnail
    },
  },
})

app.mount('#app')
