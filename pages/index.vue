<template>
  <main>
    <div class="parallax">
      <div id="mySidenav" class="sidenav" refs="mySidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <span @click="openNav">OPen</span>
    <p>{{ data.open }}</p>

    <div
      class="bg-primary p-5"
      style="min-height: 800px; height: 100%; background-color: #00bfff"
    >
      <div class="container">
        <h1 class="text-center" style="font-size: 35px">We Are Glint</h1>
        <p class="p-5 text-center text-dark" style="font-size: 25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          deleniti illo alias harum fugiat nobis saepe tempore nemo sequi
          corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatum vitae exercitationem repellat voluptas enim beatae eos
          deserunt maxime quam! Assumenda!
        </p>
        <div class="flex-container m-5">
          <div class="flex-item-left" style="border-right: 1px solid gray">
            <h2 style="font-size: 5.4rem">50</h2>
            <h3 class="text-dark">Projects</h3>
          </div>
          <div
            class="flex-item-right border-right-5"
            style="border-right: 1px solid gray"
          >
            <h2 style="font-size: 5.4rem">100</h2>
            <h3 class="text-dark">Students</h3>
            <!-- <div class="vr"></div> -->
          </div>
          <div
            class="flex-item-right border-right-5"
            style="border-right: 1px solid gray"
          >
            <h2 style="font-size: 5.4rem">150</h2>
            <h3 class="text-dark">Countries</h3>
          </div>
          <div class="flex-item-right">
            <h2 style="font-size: 5.4rem">200</h2>
            <h3 class="text-dark">Partners</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="parallax">
      <div class="container">
        <h2 class="text-center">Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          adipisci alias quibusdam eos tenetur, reprehenderit facilis natus
          totam quae!
        </p>
      </div>
    </div>
    <div
      class="text-dark"
      style="min-height: 800px; height: 100%; background-color: white"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, quisquam
        debitis hic est sit voluptatibus earum temporibus reprehenderit quas
        praesentium suscipit corrupti ratione excepturi repudiandae distinctio
        consequatur minima autem ab! Rem, perferendis modi accusamus suscipit
        repudiandae saepe expedita quisquam voluptatum nihil deleniti et quos
        quod ratione fuga aut temporibus aliquid!
      </p>
    </div>
  </main>
</template>
<script setup>
import { ref, reactive } from "vue";
const data = reactive({
  open: "hello",
});

let nav = ref("mySidenav");
const openNav = () => {
  console.log(this.$refs.nav);
  // nav.value.style.width ="250px";
};
const closeNav = () => {
  this.$refs.mySidenav.style.width = "0";
};
</script>
<style lang="scss">
.parallax {
  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1620553967189-8c0eddd81c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJsdWUlMjBhbmQlMjBncmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60");

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.flex-container {
  display: flex;
  flex-direction: row;
  text-align: center;
  // flex-wrap: wrap;
  .flex-item-left,
  .flex-item-right {
    flex: 50%;
    padding: 10px;
  }
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>