<template>
  <div class="registerHolder">
    <div class="container">
      <div class="register">
        <div v-if="error" class="error">
          {{ error.message }}
        </div>
        <form @submit.prevent="sub">
          <h3>Register</h3>
          <!-- <div id="usrName">
            <input id="" v-model="name" type="text" name="" placeholder="Full Name">
          </div> -->
          <div class="email">
            <input id="" v-model="email" type="email" name="" placeholder="Email@email.com">
          </div>
          <div class="password">
            <input id="" v-model="password" type="password" name="">
          </div>
          <button>Register</button>
        </form>
        <p>Have an account? <a id="createTxt" href="/login">Login</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../plugins/auth'
export default {
  data () {
    return {
      // name: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async sub () {
      try {
        const usr = auth.createUserWithEmailAndPassword(this.email, this.password)
        console.log(usr)
        this.$router.replace({ name: 'catalogue' })
      } catch (err) {
        console.log(err)
        this.error = err
      }
    }
  }
}
</script>

<style>
.registerHolder {
  height: 90vh;
}
.register {
  height: 100%;
  display: flex;
    /* margin-top: 50px; */
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.container {
  height: 100%;
}
.login {
    display: flex;
    /* margin-top: 50px; */
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
    width: 20rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 2rem;
}

button {
    background: #000073;
    color: white;
    width: 8rem;
    height: 4rem;
    border-radius: 0.9rem;
    font-size: ;
}

p a{
  color: #000073;
}
p a:hover{
  color: #167bff;
}
</style>
