<template>
  <div class="mainHolder">
    <div class="container hpContainer">
      <div class="row">
        <div class="col-lg-6" id="halfTextHolder">
          <p class="welText">Welcome to Facz</p>
          <p>
            The first and only facility <br />
            Archive
          </p>
          <!-- <p><button>See More</button><br> -->
          <NuxtLink to="/catalogue">
            <button type="button" class="btn btn-primary">See More</button>
          </NuxtLink>
        </div>
        <div class="col-lg-6">
          <img src="../assets/building.svg" alt="building image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style >
/* GENERAL STYLING */
@import url("https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap");
* {
  font-family: "KoHo", sans-serif;
}
.mainHolder{
  height: 90vh;
}
.hpContainer {
  margin: 0 auto;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container .row {
  width: 100%;
}


/*HOMEPAGE TEXT AREA STYLING */
.row #halfTextHolder {
  padding: 15% 0;
}
.row #halfTextHolder p:first-child{
  font-weight: 700;
  font-size: 3.5rem;
}


/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
} */

.links {
  padding-top: 15px;
}
</style>
