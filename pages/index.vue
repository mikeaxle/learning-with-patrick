<template>
  <main>
    <div class="parallax">
    </div>

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
        <h2 class="text-center">We've got everything you need to launch and grow your business</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          adipisci alias quibusdam eos tenetur, reprehenderit facilis natus
          totam quae!
        
        </p>
        <div class="flex-container-services">
          <div class="flex-item-left">
Hello world
          </div>
          <div class="flex-item-right">
            Hello world
          </div>
          <div class="flex-item-right">
            Hello world
          </div>
          <div class="flex-item-right">
            Hello world
          </div>
        </div>
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
.flex-container-services{
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  .flex-item-left, .flex-item-right{
    flex: 50%;
    padding: 5%;
  }
}
/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container, .flex-container-services {
    flex-direction: column;
  }
}
</style>