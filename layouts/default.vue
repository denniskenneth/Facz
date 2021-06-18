<template>
  <div>
    <nav class="navbar navbar-dark">
      <!-- Navbar content -->
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Facz</a>
        <a v-if="$route.path == '/catalogue' && loggedIn" href="/add">Add New</a>
        <a v-if="loggedIn && $route.path !== '/register'" href="#" @click="logout">Logout</a>
        <a v-else-if="!loggedIn && $route.path !== '/login' && $route.path !== '/register' && $route.path !== '/add'" href="/login">Login</a>
      </div>
    </nav>
    <Nuxt />
    <div class="footer">
      <!-- Navbar content -->
      <div class="container-fluid">
        <p>Built by Group 12</p>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import auth from '../plugins/auth'
export default {
  data () {
    return {
      loggedIn: false
    }
  },
  mounted () {
    this.setupFirebase()
  },
  methods: {
    logout () {
      // alert('logout')
      auth.signOut().then(() => {
        this.$router.push('/')
      })
    },
    setupFirebase () {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // eslint-disable-next-line no-console
          // console.log('loggedIn');
          this.loggedIn = true
          auth
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set('access_token', token);
            })
        } else {
          this.loggedIn = false
          Cookies.remove('access_token')
        }
      })
    }
  }
 };
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

div nav {
  background-color: #000073;
  /* height: 5vh; */
}
.container-fluid a {
    font-weight: bold;
    font-size: 2rem;
}
a {
  color: white;
}
a:hover {
  text-decoration: none;
}

.footer {
  background-color: #000073;
  width: 100%;
  height: auto;
  color: white;
}
.footer .container-fluid {
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  align-self: center;
  /* text-align: center; */
}
.footer .container-fluid p {
  align-items: center;
}
</style>
