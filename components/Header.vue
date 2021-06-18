/* eslint-disable no-console */
<template>
  <div>
    <!-- <nav class="navbar navbar-dark"> -->
      <!-- Navbar content -->
      <!-- <div class="container-fluid">
        <a class="navbar-brand" href="/">Facz</a>
        <a v-if="loggedIn" href="/login">Login</a>
        <a v-else href="#" @click="logout">Logout</a>
      </div>
    </nav> -->
  </div>
</template>

<script>
// import auth from '../plugins/auth'
// export default {
//   data () {
//     return {
//       loggedIn: false
//     }
//   },
//   mounted () {
//     this.setupFirebase()
//   },
//   methods: {
//     logout () {
//       alert('logout')
//       auth.signOut().then( () => {
//         this.$router.push('/')
//       })
//     },
//     setupFirebase () {
//       auth.onAuthStateChanged((user) => {
//         if (user) {
//           // eslint-disable-next-line no-console
//           console.log('loggedIn');
//           this.loggedIn = true
//         } else {
//           this.loggedIn = false
//         }
//       })
//     }
//     // logout () {
//     // }
//   }
// };
</script>

<style>

div nav {
  background-color: #000073;
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
</style>
