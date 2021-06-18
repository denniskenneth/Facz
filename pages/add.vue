<template>
  <div class="addContainer">
    <div class="container">
      <div class="add">
        <form @submit.prevent="add">
          <h3>Add New Building</h3>
          <!-- <div id="usrName">
            <input id="" v-model="name" type="text" name="" placeholder="Full Name">
          </div> -->
          <div class="name">
            <label for="name">Name:</label>
            <input id="" v-model="name" type="text" name="name" placeholder="Name of building" required>
          </div>
          <div class="img">
            <label for="img">Image Link:</label>
            <input id="img" type="url" name="img" v-model='img' required>
          </div>
          <div class="img1">
            <label for="img1">Image Link:</label>
            <input id="img1" type="url" name="img1">
          </div>
          <div class="img2">
            <label for="img2">Image Link:</label>
            <input id="img2" type="url" name="img2">
          </div>
          <div class="desc">
            <label for="desc">Building Description:</label>
            <textarea id="" v-model="desc" type="text" name="desc" required/>
          </div>
          <button>Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../plugins/firebase'
export default {
  data () {
    return {
      name: '',
      desc: '',
      img: '',
      img1: '',
      img2: ''
    }
  },
  methods: {
    add () {
      db.collection('buildings').add({
        Name: this.name,
        Description: this.desc,
        image: this.img,
        image1: this.img1,
        image2: this.img2
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.$router.replace({ name: 'catalogue' })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    }
  }

}
</script>

<style>
.addContainer {
    height: 90vh;
}
.add {
    display: flex;
    /* margin-top: 50px; */
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.container {
    height: 100%;
}
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
    width: 20rem;
    padding: 0.3rem;
    margin: 1rem;
    font-size: 1rem;
}
textarea {
    width: 20rem;
    height: 10rem;
}

label {
    display: block;
    font-weight: 500;
    font-size: 1.3rem;
}

button {
    background: #000073;
    color: white;
    width: 8rem;
    height: 4rem;
    border-radius: 0.9rem;
    font-size: ;
}
</style>
