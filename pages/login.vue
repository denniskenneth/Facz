<template>
  <div class="loginHolder">
    <div class="container">
      <div class="login">
        <h3>Login</h3>
        <form @submit.prevent="pressed">
          <div class="login">
            <input id="" v-model="email" type="email" name="" placeholder="Email">
          </div>
          <div class="password">
            <input id="" v-model="password" type="password" name="" placeholder="Password">
          </div>
          <button>Login</button>
          <div v-if="error" class="error">
            {{ error.message }}
          </div>
        </form>
        <p>Don't have an account? <a id="createTxt" href="/register">Create Account</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../plugins/auth'
export default {
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed () {
      auth.signInWithEmailAndPassword(this.email, this.password).then((data) => {
        // console.log(data)
        this.$router.push('/catalogue');
      // eslint-disable-next-line no-return-assign
      }).catch(error => this.error = error)
    }
  }
}
</script>

<style scoped>
.loginHolder {
    height: 90vh;
}
.container {
    height: 100%;
}
.login {
    display: flex;
    /* margin-top: 50px; */
    width: 100%;
    height: 100%;
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
    /* font-size: ; */
}
p a#createTxt {
    color: #000073;
}
p a#createTxt:hover {
    color: #167bff;
}
.error {
  color: red;
  padding: 1rem 0 1rem 0;
  font-weight: 500;
}
</style>
