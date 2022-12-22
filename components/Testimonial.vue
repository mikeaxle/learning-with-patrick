<template>
  <div class="container">
    <div class="testimonials">
      <div class="testimonial-inner">
        <h1 class="text-white">Ce Qu'ils Disent De Nous</h1>
        <p class=" text-white pt-4">
          Notre satisfaction provient principalement du fait de voir nos clients réussir.
          Nous nous surpassons pour les aider à atteindre leurs objectifs.

          Nous croyons au progrès plutôt qu'au mouvement, c'est pourquoi nous cherchons le moyen le plus efficace
          d'aider nos clients à atteindre leurs objectifs.
        </p>
        <div class="row mt-5">
          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/samy.jpg" alt="" />
              <h3 class="name">Samy Mwamba</h3>
              <footer class="blockquote-footer">CEO - ITOT Africa</footer>
              <p>
                Je devais ameliorer ma communication en English très rapidement.
                Je devais le faire pour pouvoir presenter Itot Africa à des
                investisseurs qui ne parle pas français. Alors j'avais fait
                appel à Patrick. Il à commencer à coacher toute l'equipe Itot
                Africa. Grâce à son coaching, j'avais bien présenté Itot Africa,
                expliqué notre model financier, etc. On a obtenu le prêt qu'on
                voulait. Nous savons que vous aussi avez besoins de son
                coaching.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Herve.jpg" alt="" />
              <h3 class="name">Hervé Kapuya</h3>
              <footer class="blockquote-footer">
                Administrateur - Electronic Congo Development (e-CD)
              </footer>
              <p>
                C'était et ce sera toujours un plaisir pour moi de travailler
                avec vous. Merci pour la formation en anglais, car elle m'a
                permis de progresser et de franchir une nouvelle étape dans ma
                vie. Je vous souhaite d'être reconnu comme le meilleur coach
                d'anglais de notre pays. Continuez à faire du bon travail,
                continuez à évaluer le travail, continuez à aller de l'avant.
                Dites à vos apprenants cette citation de Denzel Washington :
                "Pour obtenir quelque chose que vous n'avez jamais eu, vous
                devez faire quelque chose que vous n'avez jamais fait"
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/sira.jpg" alt="" />
              <h3 class="name">Mariama Sira</h3>
              <footer class="blockquote-footer">Happy Customer</footer>
              <p>
                Quand j'ai contacté Patrick sur LinkedIn, c'était juste pour
                préparer un entretien d'embauche en anglais, mais quand nous
                avons commencé, j'ai tout de suite compris qu'il n'était pas
                simplement un coach d'anglais, c'est aussi un coach en
                développement personnel. Grâce à lui, je suis sorti de ma
                timidité et je suis parvenue à communiquer aisément au bout de
                quelques séances. J'ai découvert des talents en moi que je ne
                connaissais pas jusque-là. Il utilise une méthode de coaching
                très efficace et accessible à tous. J'apprécie également la
                disponibilité et les bonnes relations que nous avons gardé après
                le contrat.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/cril.jpg" alt="" />
              <h3 class="name">Cril Selemani</h3>
              <footer class="blockquote-footer">Happy Customer</footer>
              <p>
                Le fait d'être l'un de tes premiers étudiants me rend fier de
                toi car nous sommes venus de loin. Ta formation d'anglais m'a
                permis de bien commencer mon MBA à Southern Utah University.
                Cela aurait pu être beaucoup plus difficile si tu n'avais pas
                été là pour moi.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Evariste.jpg" alt="" />
              <h3 class="name">Evariste Liyele</h3>
              <footer class="blockquote-footer">-Co-founder & CEO - Ferme Azur</footer>
              <p>
                Lorsque notre projet a été sélectionné dans le cadre d'un concours de financement des entreprises à
                Kinshasa, je devais faire un discours le jour de l'annonce des prix.

                J'étais inquiet, alors j'ai demandé de l'aide à Patrick. Il a compris mes besoins et m'a aidé tel un
                médecin avec ses patients.
                Il m'a non seulement aidé à écrire mon discours, mais m'a aussi montré comment capter l'attention du
                public.

                Le jour J, j'ai pu faire un excellent discours. Cette expérience a impacté ma façon de communiquer et
                j'en suis très reconnaissant.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Gloire.jpg" alt="" />
              <h3 class="name">Gloire Kitenge</h3>
              <footer class="blockquote-footer">-HR Manager</footer>
              <p>
                Les cours d'anglais interactifs que j'ai suivis avec Patrick m'ont beaucoup aidé.

                J'avais l'habitude de me sentir mal à l'aise, mais après quelques mois, j'ai pu m'exprimer avec
                confiance. J'ai également amélioré ma grammaire et mon vocabulaire.

                Si vous souhaitez également améliorer votre anglais, je vous recommande de contacter Patrick.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 40px 0;
  color: #434343;
  text-align: center;
}

.testimonial-inner {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.border {
  width: 160px;
  height: 2px;
  background: $title_color;
  margin: 26px auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 33.33%;
  width: 100%;
  box-sizing: border-box;
}

.testimonial {
  color: white;
  padding: 5%;
}

.testimonial:hover {
  background-color: $title_color;
}

.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.name {
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}

@media screen and (max-width: 960px) {
  .col {
    flex: 100%;
    max-width: 80%;
  }
}

@media screen and (max-width: 960px) {
  .col[data-v-63dfa6cb] {
    flex: 100%;
    max-width: 100%;
    margin-top: 5%;
  }
}
</style>