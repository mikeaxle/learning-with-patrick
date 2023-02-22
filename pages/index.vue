<template>
  <main>
    <!-- First section -->
    <div class="parallax parallax-header" id="home">
      <div class="flex-container navbar pt-3">
        <div class="flex-item-left text-left">
          <div class="text-white logo">
            <p class="pb-3">{{ $t("home.learn") }}</p>
            <Patrick />
          </div>
        </div>
        <div class="flex-item-right">
          <div class="container">
            <div class="text-right" @click="openNav">
              <span class="p-3 text-light">&#9776; </span>
            </div>
          </div>

          <div id="mySidenav" class="sidenav" ref="sidenav">
            <div class="container p-3">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav">
                &times;</a>
            </div>

            <div class="flex-container">
              <div class="flex-item-right"></div>
            </div>
            <a href="#home">{{ $t("Navigation.home") }}</a>
            <a href="#about">{{ $t("Navigation.about") }}</a>
            <a href="#services">{{ $t("Navigation.services") }}</a>
            <a href="#testimonials">{{ $t("Navigation.clients") }}</a>
            <a href="#contact">{{ $t("Navigation.contact") }}</a>
            <p class="p-3">
              {{ $t("Navigation.text") }}
            </p>
            <div class="text-bg-primary mt-5">
              <NuxtLink style="font-size:15px !important;" v-for="locale in availableLocales" :key="locale.code"
                :to="switchLocalePath(locale.code)">{{
                  locale.name
                }}
                <img class="m-2 linkedin" width="80" src="@/assets/icons/language.png" alt="" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="container main-content mt-3" id="home">
        <div class="flex-container-head">
          <div class="flex-item-left text-left">
            <div class="mb-5 mt-5 main-text text-left">
              <h2 class="display-1"> {{ $t("home.intro") }}</h2>
              <p class="display-4 text-white font-italic">
                {{ $t("home.introDescription") }}
              </p>
              <div class="button pt-5">
                <a href="#services">
                  <Button class="m-2" :title="$t('home.servicesButton')"
                    :secondTitle="$t('home.ServicesButtomHover')" /></a>
                <a href="#contact">
                  <Button :title="$t('home.contactButton')" :secondTitle="$t('home.contacButtontHover')" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second section -->
    <div class="text-white about pb-5 pt-5 about" id="about">
      <div class="container">
        <h1> {{ $t("about.intro") }}</h1>
        <div class="mt-5">
          <p>{{ $t("about.description.firstParagraph") }}</p>
          <p>{{ $t("about.description.secondParagraph") }}</p>
          <p>{{ $t("about.description.thirdParagraph") }}</p>
          <p>{{ $t("about.description.fourthParagraph") }}</p>
          <p>{{ $t("about.description.fifthParagraph") }}</p>
          <p>{{ $t("about.description.seventhParagraph") }}</p>
          <h4 class="font-weight-bold" style="">{{ $t("about.description.titleMission") }}</h4>
          <p>{{ $t("about.description.eightParagraph") }}</p>
          <p>{{ $t("about.description.ninthParagraph") }}</p>
          <p>{{ $t("about.description.tenthParagraph") }}</p>
          <p>{{ $t("about.description.eleventhParagraph") }}</p>
          <p>{{ $t("about.description.twelvethParagraph") }}</p>
          <p>{{ $t("about.description.thirteenthParagraph") }}</p>
          <p>{{ $t("about.description.forteenthParagraph") }}</p>
          <ul>
            <li>{{ $t("about.description.bullet1") }}</li>
            <li>{{ $t("about.description.bullet2") }}</li>
            <li>{{ $t("about.description.bullet3") }}</li>
            <li>{{ $t("about.description.bullet4") }}</li>
          </ul>
          <p>{{ $t("about.description.fifteenthParagraph") }}</p>
          <p>{{ $t("about.description.sixteenthParagraph") }}</p>
        </div>
      </div>
    </div>
    <!-- Third section -->
    <div class="parallax services" id="services">
      <div class="container text-center">
        <h1 class="text-justify text-white pt-5">
          {{ $t("services.intro") }}
        </h1>

        <div class="flex-container-services p-3">
          <div class="flex-item-left cards">
            <img class="mb-3" src="https://cdn-icons-png.flaticon.com/512/4185/4185714.png" alt="">
            <h2> {{ $t("services.service1Title") }}</h2>
            <p class="pt-3">
              {{ $t("services.service1Description") }}
            </p>
          </div>
          <div class="flex-item-right cards">
            <img class="mb-3" src="https://cdn-icons-png.flaticon.com/512/3454/3454898.png" alt="">
            <h2>{{ $t("services.service2Title") }}</h2>
            <p class="pt-3">
              {{ $t("services.service2Description") }}
            </p>
          </div>
          <div class="flex-item-right cards">
            <img class="mb-3" src="https://cdn-icons-png.flaticon.com/512/609/609001.png" alt="">
            <h2>{{ $t("services.service3Title") }}</h2>
            <p class="pt-3">
              {{ $t("services.service3Description") }}
            </p>
          </div>
          <div class="flex-item-right cards">
            <img class="mb-3" src="https://cdn-icons-png.flaticon.com/512/4951/4951698.png" alt="">
            <h2> {{ $t("services.service4Title") }}</h2>
            <p class="pt-3">
              {{ $t("services.service4Description") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fourth section -->
    <div class="parallex testimonials pb-5" id="testimonials">
      <div class="container text-center">
        <Testimonial />
      </div>
    </div>
    <div id="sponsors" class="sponsors pb-5 pt-5 text-bg-white">
      <div class="container">
        <Sponsors />
      </div>
    </div>


    <!-- Fifth section -->
    <div id="contact" class="contact pb-5 pt-5">
      <div class="container">
        <Form />
      </div>
    </div>
    <!-- Sixth section -->
    <div class="footer pb-5 pt-5 text-bg-dark">
      <div class="container">
        <div class="flex-container">
          <div class="flex-item-left">
            <h3>{{ $t("footer.quoteTitle") }}</h3>
            <figure>
              <blockquote class="blockquote">
                <q>{{ $t("footer.quoteText1") }}</q>
              </blockquote>
              <figcaption class="blockquote-footer">
                {{ $t("footer.quoteSource1") }}
              </figcaption>
            </figure>
            <figure>
              <blockquote class="blockquote">
                <q>{{ $t("footer.quoteText2") }}</q>
              </blockquote>
              <figcaption class="blockquote-footer">
                {{ $t("footer.quoteSource2") }}
              </figcaption>
            </figure>
          </div>
          <div class="flex-item-right">
            <h4> {{ $t("footer.connect") }}</h4>
            <p>
              {{ $t("footer.connectText") }} <br>
              <a href="https://www.linkedin.com/in/patrick-mukad-91a96a1b6/" target="blank">
                <img class="m-2 linkedin" width="30" src="@/assets/icons/linkedin.png" alt="" />
              </a>
              <a href="https://t.me/LearnWithPatrick" target="blank"> <img class="m-2 telegram" width="30"
                  src="@/assets/icons/telegram.png" alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100006056104626" target="blank">
                <img class="m-2 facebook" width="30" src="@/assets/icons/facebook.png" alt="" />
              </a>
              <a href="https://www.instagram.com/patrick_mukad/" target="blank">
                <img class="m-2 instagram" width="30" src="@/assets/icons/instagram.png" alt="" />
              </a>

              <a href="https://twitter.com/Patrick_Mukad?t=hRYcyL6RqoHklRk2MZi_NQ&s=08" target="blank">
                <img class="m-2 twitter" width="30" src="@/assets/icons/twitter.png" alt="" />
              </a>
            </p>
          </div>

        </div>
        <p class="text-center p-5">
          © Copyright Learn With Patrick 2023 | Built by Incognito Software
        </p>
        <div><a href="#home">{{ $t("Navigation.home") }} <img width="20" height="20" style="padding-left:4px;"
              src="../assets/icons/up-arrow.png" alt=""> </a></div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Button from "../components/Button.vue";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    // SEO
    useHead({
      title: "Learn With Patrick: votre meilleur coach d'anglais",
      meta: [{ name: "Votre meilleur coach", content: "My amazing site." }],
    });

    const sidenav: string = "";

    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();

    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });

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
      availableLocales,
      locale,
      locales

    };
  },
});
</script>

<style lang="scss">
.parallax-header {
  height: 800px;

  .navbar {
    .flex-item-left {
      .logo {
        font-size: 25px;
        margin-left: 5%;

        p {
          font-size: 12px;
          padding-left: 2%;
        }
      }
    }

    .flex-item-right {
      .container {
        div {
          text-align: right;
          font-size: 25px;
          margin-right: 5%;
          cursor: pointer;

          span {
            font-size: 40px;
            background-color: rgb(8, 68, 105);
            position: sticky;
            border: 2px solid white;
            padding: 10px;
            border-radius: 50px 30px;
          }
        }
      }
    }
  }

  .main-content {
    .flex-container-head {
      .flex-item-left {
        .main-text {
          width: 82% h2 {
            font-size: 60px !important;
            color: rgb(8, 68, 105);
          }

          p {
            font-size: 30px;
            color: rgb(8, 68, 105);
          }

          .button a {
            cursor: pointer;
          }
        }
      }
    }
  }
}

#home {
  .display-1 {
    color: $title_color;
    font-family: 'Merienda', cursive;
  }
}

.about {
  .container p span {
    text-decoration: underline;
  }

  background-color: $title_color;
}

.services {
  .container .title-text {
    font-size: 60px;

  }

  img {
    width: 100px;
  }
}

.contact {
  background-color: $title_color;
}

.sponsors {
  background-color: white;
}

.parallax {
  /* The image used */
  background-image: url("../assets/images/patrick_profile.jpg");
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}

.testimonials {
  background-color: $title_color;
}

.footer {
  q {
    font-size: 17px;
  }
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .flex-item-left,
  .flex-item-right {
    flex: 30%;
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

a {
  color: rgb(138 209 254);
}

a:hover {
  color: $bg_nav;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {

  .flex-container,
  .flex-container-services,
  .flex-container-head {
    flex-direction: column;
  }

}

@media (max-width: 600px) {
  .parallax {
    text-align: center;
  }

  .about {
    text-align: center;
  }

  .flex-container-services .flex-item-left,
  .flex-container-services .flex-item-right {
    border: 2px solid rgb(4 35 65);
    border-radius: 5px;
    background-color: rgb(4 35 65);
    margin-top: 5%;
  }

  .parallax-header .main-content .flex-container-head .flex-item-left .main-text p {
    font-size: 20px;
    margin-top: 15%;
  }

  .sidenav {
    z-index: 100 !important;
  }
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $bg_nav !important;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.sidenav a:hover {
  color: #012433;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  padding-top: 40px;
}

.cards:hover {
  background-color: rgb(8, 68, 105);
  transition-timing-function: ease;
  transition: background 0.2s linear;
  border-radius: 1s ease-n 1s;
  cursor: pointer;
}

.footer,
.social {
  .facebook:hover {
    transform: scale(1.2);
  }

  .telegram:hover {
    transform: scale(1.2);
  }

  .instagram:hover {
    transform: scale(1.2);
  }

  .linkedin:hover {
    transform: scale(1.2);
  }

  .twitter:hover {
    transform: scale(1.2);
  }

}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }

}

@media (max-width: 700px) {
  .logos {
    flex-wrap: wrap;
  }

  .about {
    text-align: center !important;
  }
}

@media screen and (max-width: 450px) {
  .services {
    img {
      width: 80px !important;
      margin-top: 5%;
    }
  }
}

.parallax-header .navbar .flex-item-right .container div span {
  font-size: 30px;
  border: 1px solid white;
  padding: 10px;
  border-radius: 50px 30px;
}
</style>
