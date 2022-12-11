<template>
  <main>
    <!-- First section -->
    <div class="parallax parallax-header">
      <div class="flex-container navbar pt-3">
        <div class="flex-item-left text-left">
          <div class="text-white logo">
            <p class="pb-3">Learn With</p>
            <Patrick />
          </div>
        </div>
        <div class="flex-item-right">
          <div class="container">
            <div class="text-right" @click="openNav">
              <span class="p-3 text-light">&#9776; </span>
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
              <img
                href="www.google.com"
                target="blank"
                class="m-2"
                width="30"
                src="@/assets/icons/twitter.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container main-content mt-5">
        <div class="flex-container-head">
          <div class="flex-item-left text-left">
            <div class="display-4 mb-5 mt-5 main-text text-left">
              <h2 class="display-1">Aimeriez-vous améliorer votre anglais ?</h2>
              <p class="display-4 text-white font-italic">
                Je vous aide à booster votre carrière professionnelle grâce à
                l'anglais.
              </p>
              <div class="button pt-5">
                <a href="#contact">
                  <Button
                    title="Contactez-nous"
                    secondTitle="Disponible pour vous"
                  />
                </a>

                <a href="#services">
                  <Button
                    class="m-2"
                    title="Services"
                    secondTitle="Nos Services"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second section -->
    <div class="text-bg-dark about pb-5 pt-5 about" >
      <div class="container">
        <h1>Qui est Patrick?</h1>
        <p>
          Entre faire du sport, écouter de la musique et regarder des spectacles
          de stand up, je ne peux pas dire lequel est mon préféré car j'aime
          tous ces hobbies. Je joue souvent au basket ou au football le
          week-end. J'aime chanter mes chansons préférées. J'admets que je n'ai
          pas la voix de John Legend ou d'Ed Sheeran, mais cela ne m'empêche pas
          de m'amuser. Me divertir est ma façon de me récompenser après une
          journée productive. Je suis né dans un petit village de la République
          démocratique du Congo. Grâce à mes parents, j'ai pu déménager dans une
          grande ville et j'ai eu la chance de fréquenter une meilleure école où
          j'ai étudié en français. Lorsque j'ai fini mes études secondaires, mes
          parents m'ont envoyé en INDE pour mes études universitaires et j'ai eu
          la chance d'étudier en anglais. Je suis donc reconnaissant à Dieu de
          m'avoir donné des parents qui valorisent l'éducation. Je considère
          qu'ill est impossible de progresser sur le plan professionnel ou
          personnel sans améliorer constamment ses compétences et ses
          connaissances. Et aucun pays ne peut progresser sans investir dans
          l'éducation de sa jeunesse. Pour moi, l'apprentissage est en effet un
          processus sans fin.
        </p>
        <ul>
          Je vois parfois:
          <li>
            Des personnes avec plusieurs années d'expérience rater des
            promotions à cause de l'anglais
          </li>
          <li>
            Des entrepreneurs rater des marchés importants à cause de l'anglais
          </li>
          <li>
            Des chefs d'entreprise souffrir lors d'événements et de réunions à
            l'étranger à cause de l'anglais
          </li>
          <li>
            Des demandeurs d'emploi souffrir lors d'un entretien en anglais
          </li>
        </ul>
        <p>
          Je sais combien l'anglais et les compétences en communication sont
          nécessaires dans le monde professionnel.
          <span
            >Voilà pourquoi j'aide les gens à booster leur carrière
            professionnelle.</span
          >
          Au cours des dernières années, mon équipe et moi-même avons aidé des
          chefs d'entreprises, des cadres, des employés et des étudiants à
          atteindre leurs objectifs grâce à nos services. Je suis convaincu
          qu'une communication efficace est un atout majeur pour une carrière
          réussie.
        </p>
      </div>
    </div>
    <!-- Third section -->
    <div class="parallax services" id="services">
      <div class="container text-center">
        <h2 class="text-justify title-text text-white">En quoi pourrai-je vous aider?</h2>

        <div class="flex-container-services p-5">
          <div class="flex-item-left cards">
            <h2>Apprendre l'anglais</h2>
            <p>
              Avez-vous déjà raté une opportunité à cause de l'anglais ? Vous
              écoutez mais trouvez difficile de parler ? Nous avons la solution
              ! Notre approche est pratique et adaptée pour répondre à vos
              besoins spécifiques. En plus de vos compétences techniques, parler
              anglais peut vous ouvrir les portes de nombreuses opportunités.
            </p>
          </div>
          <div class="flex-item-right cards">
            <h2>Préparer un entretien</h2>
            <p>
              Vous avez un entretien d'embauche qui approche ? Ou une réunion
              importante avec un client ? Les entretiens peuvent parfois être
              stressants, mais avec une bonne préparation, vous pourrez vous
              démarquer et atteindre votre objectif. Laissez-nous vous aider à
              vous préparer pour cette opportunité.
            </p>
          </div>
          <div class="flex-item-right cards">
            <h2>Préparer un discours/une présentation</h2>
            <p>
              Des études montrent qu'il faut 7 à 10 secondes pour capter
              l'attention de votre auditoire lorsque vous commencez un discours.
              D'où la nécessité de préparer un discours captivant. Laissez-nous
              vous aider à composer, structurer et pratiquer votre discours ou
              votre présentation afin que vous soyez prêt à communiquer vos
              idées plus efficacement et à atteindre vos objectifs.
            </p>
          </div>
          <div class="flex-item-right cards">
            <h2>Traduction de documents</h2>
            <p>
              Nous fournissons des services de traduction en français et en
              anglais. Nous pouvons vous aider à traduire vos lettres, CV,
              présentations et bien d'autres documents et textes commerciaux.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fourth section -->
    <div class="parallex text-bg-dark">
      <div class="container text-center">
        <Testimonial />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptate quisquam sit voluptas a ab laborum assumenda fugit dolor,
          enim illum quo dicta quas, cum et provident recusandae quos inventore?
          Dicta nulla voluptates possimus. Suscipit esse, iusto laudantium
          exercitationem reprehenderit sed cum saepe voluptates error non
          inventore, nulla quidem dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <div class="flex-container">
          <div class="flex-item-left">
            <img
              width="200px"
              src="../assets/images/itot.png"
              alt="ITOT Africa"
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="../assets/images/okademy.png"
              alt="Okademy"
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="../assets/images/rapid_network.png"
              alt="Rapid Network"
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="../assets/images/ideal_industries.png"
              alt="Ideal Industries"
            />
          </div>
          <div class="flex-item-right">
            <img
              width="200px"
              src="../assets/images/electronic_congo.png"
              alt="Electronic Congo"
            />
          </div>
          <div class="flex-item-right">
            <img width="200px" src="../assets/images/bunker.png" alt="Bunker" />
          </div>
        </div>
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
            <h3>Learn With Patrick<span class="text-primary">...</span></h3>
            <p class="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium cum officia dolor fugit quas laudantium!
            </p>
          </div>
          <div class="flex-item-right">
            <h4>Connect with us</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos in
              ut corporis. Alias, sequi cum?
              <a href="">
                <img
                  class="m-2"
                  width="30"
                  src="@/assets/icons/facebook.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  class="m-2"
                  width="30"
                  src="@/assets/icons/instagram.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  class="m-2"
                  width="30"
                  src="@/assets/icons/linkedin.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  class="m-2"
                  width="30"
                  src="@/assets/icons/twitter.png"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
        <p class="text-center p-5">
          © Copyright Learn With Patrick... 2022 | Built by Incognito Tech
        </p>
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
    // SEO
    useHead({
      title: "Learn With Patrick: votre meilleur coach d'anglais",
      meta: [{ name: "Votre meilleur coach", content: "My amazing site." }],
    });

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
.about {
  // background-image: url('../assets/images/patrick_black_and_white.jpg');
  // background-size: contain;
  // background-color: black;
  // filter: grayscale(70%);
  // background-repeat: no-repeat;
  .container p span {
    text-decoration: underline;
  }
}
.services {
  .container .title-text {
    font-size: 60px;
  }
}
.contact {
  background-color: #989898;
}

.parallax {
  /* The image used */
  background-image: url("../assets/images/patrick_black_and_white.jpg");
  // filter: opacity(20%);
  // filter: grayscale(100%);

  /* Set a specific height */
  // height: 500px;

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

.cards:hover {
  background-color: rgb(8, 68, 105);
  transition-timing-function: ease;
  transition: 0.9s;
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