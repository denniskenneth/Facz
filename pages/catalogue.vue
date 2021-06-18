<template>
  <div class="catalogueHolder">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(building, index) in buildings" :key="index">
          <!-- <router-link tag='a' :to="{ name="building", params: {name: building.name, id:}}" href=""> -->
          <div id="card" class="card" style="width: 18rem;">
            <img :src="building.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ building.Name }}</h5>
              <p class="card-text">
                {{ building.Description }} {{building.docRef}}
                <!-- The Balme Library, established in 1948 is located on the main campus of the University of Ghana. The Balme Library was named after David Mowbray Balme, the first Principal of the University of Ghana -->
              </p>
              <!-- <a href="#" class="btn btn-primary">Edit This</a> -->
            </div>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/helpers'
import db from '../plugins/firebase'
import auth from '../plugins/auth'
// console.log(buildings)
export default {
  asyncData ({req, redirect}) {
    // eslint-disable-next-line no-empty
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/login')
      }
    // } else {
    //   // eslint-disable-next-line prefer-const
    //   let user = auth.currentUser
    //   if (!user) {
    //     redirect('/login')
    //   }
     }
  },
  data () {
    return {
      buildings: [],
      building: {},

    }
  },
  created () {
    // let mainone = []
    db.collection('buildings').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // mainone.push(doc.data())
        this.buildings.push(doc.data());
      });
    });
  }
}
</script>

<style>
.catalogueHolder {
  height: auto;
}
.container div.row {
  margin: 1rem 0 1rem 0;
}
.container div.row div.col-lg-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#card {
  height: 100%;
}
.col div.card#card {
  /* height: 2rem; */
}
#card img {
  width: 100%;
}
#card img.card-img-top {
  height: 45%;
}

div.card-body p.card-text{
  padding-bottom: 1rem;
  overflow: hidden;
}
div.card-body {
  overflow: scroll;
}
</style>
