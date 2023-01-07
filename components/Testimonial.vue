<template>
  <div class="container">
    <div class="testimonials">
      <div class="testimonial-inner">
        <h1 class="text-white">{{ $t("testimonials.intro") }}</h1>
        <p class=" text-white pt-4">
          {{ $t("testimonials.description") }}
        </p>
        <div class="row mt-5">
          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Herve.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial2Name") }}</h3>
              <footer class="blockquote-footer">
                {{ $t("testimonials.testimonial2Title") }}
              </footer>
              <p>
                {{ $t("testimonials.testimonial2Description") }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/samy.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial1Name") }}</h3>
              <footer class="blockquote-footer"> {{ $t("testimonials.testimonial1Title") }}</footer>
              <p>
                {{ $t("testimonials.testimonial1Description") }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/sira.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial3Name") }}</h3>
              <footer class="blockquote-footer"> {{ $t("testimonials.testimonial3Title") }}</footer>
              <p>
                {{ $t("testimonials.testimonial3Description") }}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/cril.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial4Name") }}</h3>
              <footer class="blockquote-footer"> {{ $t("testimonials.testimonial4Title") }}</footer>
              <p>
                {{ $t("testimonials.testimonial4Description") }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Evariste.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial5Name") }}</h3>
              <footer class="blockquote-footer"> {{ $t("testimonials.testimonial5Title") }}</footer>
              <p>
                {{ $t("testimonials.testimonial5Description") }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img src="../assets/images/testimonial/Gloire.jpg" alt="" />
              <h3 class="name"> {{ $t("testimonials.testimonial6Name") }}</h3>
              <footer class="blockquote-footer"> {{ $t("testimonials.testimonial6Title") }}r</footer>
              <p>
                {{ $t("testimonials.testimonial6Description") }}
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

@media (max-width: 600px) {
  .testimonial[data-v-63dfa6cb] {
    color: black;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: 2px solid white;
    border-radius: 5px;
  }
}
</style>