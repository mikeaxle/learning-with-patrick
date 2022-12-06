<template>
  <main>
    <div class="parallax" style="height: 800px">
      <div class="flex-container navbar pt-3">
        <div class="flex-item-left text-left">
          <p class="text-white" style="font-size: 25px; margin-left: 5%">
           <p style="font-size:12px; padding-left:2%">Learn With</p>
           <Patrick/>
          </p>
        </div>
        <div class="flex-item-right">
          <div class="container">
            <div
              class="text-right"
              style="
                text-align: right;
                font-size: 25px;
                margin-right: 5%;
                cursor: pointer;
              "
              @click="openNav"
            >
              <span class="">MENU</span>
              <span style="font-size: 40px">&#9776; </span>
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
      <div class="container mt-5">
        <div class="flex-container-head">
          <div class="flex-item-left text-left">
            <div class="display-4 mb-5 mt-5 text-left" style="width:82%">
              <h2 style="font-size:60px">Aimeriez-vous améliorer votre anglais ?</h2>
             <p style="font-size:30px">Je vous aide à booster votre carrière professionnelle grâce à l'anglais.</p>  
              <!-- <Text /> -->
              <div class="button pt-5">
                <Button title="Click Here" secondTitle="We are here" />

                <a href="#service"
                   style="cursor:pointer"><Button
                    class="m-2"
                    title="Click Here"
                    secondTitle="We are here"
                /></a>
              </div>
            </div>
          </div>
          <!-- <div class="flex-item-right" style="">
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
            
          </div> -->
        </div>
      </div>
    </div>
    <div class="bg-primary p-5" style="height: 100%; background-color: #00bfff">
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
    <div class="parallax" id="services" style="height: 100%">
      <div class="container text-center">
        <h2 class="text-justify" style="font-size: 60px">
          What You Can Get From Me
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          adipisci alias quibusdam eos tenetur, reprehenderit facilis natus
          totam quae!
        </p>
        <div class="flex-container-services">
          <div class="flex-item-left">
            <h2>Apprendre l'anglais</h2>
            <p>
              Avez-vous déjà raté une opportunité à cause de l'anglais ? Vous
              écoutez mais trouvez difficile de parler ? Nous avons la solution
              ! Notre approche est pratique et adaptée pour répondre à vos
              besoins spécifiques. En plus de vos compétences techniques, parler
              anglais peut vous ouvrir les portes de nombreuses opportunités.
            </p>
          </div>
          <div class="flex-item-right">
            <h2>Préparer un entretien</h2>
            <p>
              Vous avez un entretien d'embauche qui approche ? Ou une réunion
              importante avec un client ? Les entretiens peuvent parfois être
              stressants, mais avec une bonne préparation, vous pourrez vous
              démarquer et atteindre votre objectif. Laissez-nous vous aider à
              vous préparer pour cette opportunité.
            </p>
          </div>
          <div class="flex-item-right">
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
          <div class="flex-item-right">
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
    <div
      class="text-dark pb-5 pt-5"
      style="min-height: 300px; height: 100%; background-color: white"
    >
      <div class="container">
        <h1>Qui est Patrick?</h1>
        <p>
          Titulaire d'un diplôme en administration des affaires, j'apprends des
          sujets liés à la finance, au marketing, aux ressources humaines et au
          business en général. En 2015, lorsque j'ai quitté mon pays la RDC pour
          poursuivre mes études en INDE, j'ai été confrontée à un problème : la
          communication. Je ne maîtrisais pas l'anglais et cela m'empêchait de
          bien étudier. Pour résoudre ce problème, j'ai dû appliquer plusieurs
          techniques d'apprentissage et pratiquer chaque jour. Ce processus m'a
          aidé à comprendre ce qui marche et ce qui ne marche pas. Au cours de
          mon parcours universitaire, j'ai également développé une passion pour
          l'art oratoire. J'ai participé à de nombreux concours et j'ai fait
          plus d'une centaine de discours et de présentations devant des
          centaines de personnes et de petits groupes. Grâce à tous ces défis,
          j'ai appris de nombreuses méthodes et techniques pour capter
          l'attention de mon auditoire et atteindre l'objectif de mon discours
          ou de ma présentation. Lorsque je suis retourné dans mon pays en 2019,
          j'ai obtenu mon tout premier emploi parce qu'au-delà de mes autres
          compétences, je maîtrisais l'anglais et j'étais capable de bien me
          défendre lors des entretiens. <br />
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
          nécessaires dans le monde professionnel. Voilà pourquoi j'aide les
          gens à booster leur carrière professionnelle. Au cours des dernières
          années, mon équipe et moi-même avons aidé des chefs d'entreprises, des
          cadres, des employés et des étudiants à atteindre leurs objectifs
          grâce à nos services. Je suis convaincu qu'une communication efficace
          est un atout majeur pour une carrière réussie.
        </p>
      </div>
    </div>
    <div class="parallex">
      <div class="container text-center">
        <h2 class="text-dark p-5">Ce qu'ils disent de nous</h2>
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
    <div
      class="text-dark pb-5 pt-5 text-bg-primary"
      style="min-height: 300px; height: 100%"
    >
      <div class="container">
        <h2 class="text-center text-light">
          Mince, Un autre coach? un autre centre d'anglais?
        </h2>
        <p class="text-justify">
          Loin de la. Nous vous offrons un service de qualite. Et a la
          difference des autres, nos cours et nos services peuvent se passer
          virtuellement sans la presence physique pour ceux qui le desirent.
          C'est normale n'est-ce pas? nous vivons dans un monde digitale.
        </p>
        <h2>Qu'attends-tu? contactes nous</h2>
        <ul>
          <li>
            Envoie un e-mail ici:
            <a
              href="mailto:gauthierjorbel@gmail.com?subject = Feedback&body = Message"
              >mail here</a
            >
          </li>
          <li>Whatsapp ou appel normal: +24396582458</li>
        </ul>
      </div>
    </div>
    <div class="pb-5 pt-5 text-bg-dark" style="min-height: 300px; height: 100%">
      <div class="container">
        <div class="flex-container">
          <div class="flex-item-left">
            <h3>  Learn With Patrick<span class="text-primary">...</span></h3>
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
.parallax {
  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1484176141566-3674cda218f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80");

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