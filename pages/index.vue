<template>
  <main>
    <div class="parallax" style="height: 700px">
      <div class="flex-container navbar">
        <div class="flex-item-left text-left">Learn With Patrick</div>
        <div class="flex-item-right">
          <div class="container">
            <div
              class="text-right p-5"
              style="text-align: right; font-size: 1.9rem; cursor: pointer"
              @click="openNav"
            >
              <span>MENU</span> <span style="font-size: 50px">&#9776; </span>
            </div>
          </div>

          <div id="mySidenav" class="sidenav text-bg-dark" ref="sidenav">
            <div class="container p-3">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav">
                &times;</a
              >
            </div>

            <div class="flex-container">
              <div class="flex-item-right"></div>
            </div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <p class="p-3">
              Lorem ipsum dolor sit amet. Odio, alias?, amet consectetur
              adipisicing elit. Vero fugit ab, delectus repellendus dolores
              ratione itaque? Ratione nisi quod, maiores voluptatibus, ullam vel
              ab numquam rem quo, ad similique qui?
            </p>
            <div class="p-3">
              <img
                class="m-2"
                width="30"
                src="@/assets/icons/facebook.png"
                alt=""
              />
              <img
                class="m-2"
                width="30"
                src="@/assets/icons/instagram.png"
                alt=""
              />
              <img
                class="m-2"
                width="30"
                src="@/assets/icons/linkedin.png"
                alt=""
              />
              <img href="www.google.com" target="blank"
                class="m-2"
                width="30"
                src="@/assets/icons/twitter.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="flex-container-head">
          <div class="flex-item-left text-left">
            <div class="display-4 mb-5 text-left">
              We are a creative group of people who design influential brands
              and digital experiences.
              <div class="button pt-5">
                <Button title="Click Here" secondTitle="We are here" />
                <Button
                  class="m-2"
                  title="Click Here"
                  secondTitle="We are here"
                />
              </div>
            </div>
          </div>
          <div class="flex-item-right" style="">
            <a href="">
              <img class="m-2" width="30" src="@/assets/icons/facebook.png" alt="" />
            </a>
            <a href="">
              <img class="m-2" width="30" src="@/assets/icons/instagram.png" alt="" />
            </a>
            <a href="">
              <img class="m-2" width="30" src="@/assets/icons/linkedin.png" alt="" />
            </a>
              <a href="">
                <img class="m-2" width="30" src="@/assets/icons/twitter.png" alt="">
              </a>
            <!-- 
            
             -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-primary p-5"
      style="min-height: 800px; height: 100%; background-color: #00bfff"
    >
      <div class="container text-center">
        <h1 style="font-size: 60px">We Are Glint</h1>
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
        <h2 class="text-center" style="font-size: 60px">
          What You Can Get From Me
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          adipisci alias quibusdam eos tenetur, reprehenderit facilis natus
          totam quae!
        </p>
        <div class="flex-container-services">
          <div class="flex-item-left">Hello world</div>
          <div class="flex-item-right">Hello world</div>
          <div class="flex-item-right">Hello world</div>
          <div class="flex-item-right">Hello world</div>
        </div>
      </div>
    </div>
    <div
      class="text-dark"
      style="min-height: 300px; height: 100%; background-color: white"
    >
      <div class="container">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
          quisquam debitis hic est sit voluptatibus earum temporibus
          reprehenderit quas praesentium suscipit corrupti ratione excepturi
          repudiandae distinctio consequatur minima autem ab! Rem, perferendis
          modi accusamus suscipit repudiandae saepe expedita quisquam voluptatum
          nihil deleniti et quos quod ratione fuga aut temporibus aliquid!
        </p>
      </div>
    </div>
    <div class="parallex">
      <div class="container text-center">
        <h2 class="text-dark p-5">Some clients & Partners</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptate quisquam sit voluptas a ab laborum assumenda fugit dolor,
          enim illum quo dicta quas, cum et provident recusandae quos inventore?
          Dicta nulla voluptates possimus. Suscipit esse, iusto laudantium
          exercitationem reprehenderit sed cum saepe voluptates error non
          inventore, nulla quidem dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam voluptates dignissimos explicabo, ab ut
          ratione suscipit recusandae debitis labore cumque nemo assumenda
          laboriosam ad ex quasi sunt, adipisci facere quas cupiditate! Ex
          eveniet eius nemo libero molestiae dolor impedit veritatis, sequi
          harum fugiat quibusdam ullam sint autem pariatur, minus cupiditate cum
          aliquid, eaque dolorem dicta. Nulla, quisquam corporis. Rem cumque
          voluptatem aliquam, nobis culpa quibusdam iure, eaque atque tempore
          eveniet ipsa dolores explicabo sapiente nihil consequatur consequuntur
          eum architecto accusantium velit molestias. Quis repellendus dolor
          quos, repudiandae, vero sint accusantium laborum minus debitis illum
          in excepturi eius ullam aliquam sequi.
        </p>
        <div class="flex-container">
          <div class="flex-item-left">
            <img
              width="200px"
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Button from "../components/Button.vue";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const sidenav: string = "";

    function openNav(): void {
      this.$refs.sidenav.style.backgroundColor = "red";
      this.$refs.sidenav.style.width = "250px";
    }
    function closeNav(): void {
      this.$refs.sidenav.style.width = "0";
    }
    return {
      openNav,
      closeNav,
    };
  },
});
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
  // flex-wrap: wrap;
  .flex-item-left,
  .flex-item-right {
    flex: 50%;
    padding: 10px;
  }
}
.flex-container-services {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .flex-item-left,
  .flex-item-right {
    flex: 50%;
    padding: 5%;
  }
}
.flex-container-head {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .flex-item-left {
    font-size: 35px;
    flex: 80%;
  }
  .flex-item-right {
    flex: 20%;
  }
}
/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container,
  .flex-container-services,
  .flex-container-head {
    flex-direction: column;
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
  padding-top: 40px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>