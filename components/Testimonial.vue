<template>
  <div class="testimonial-inner">

    <div class="text-center mt-5">
      <h1 class="text-white">{{ $t("testimonials.intro") }}</h1>
      <p class=" text-white pt-4">
        {{ $t("testimonials.description") }}
      </p>
      <div class="flex-container ">
        <div class="flex-item-left cards mt-5">
          <div class="testimonial">
            <img src="../assets/images/testimonial/Herve.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial2Name") }}</h3>
            <footer class="blockquote-footer">
              {{ $t("testimonials.testimonial2Title") }}
            </footer>
            <q>
              <p>{{ $t("testimonials.testimonial2Desc2Paragraph1") }}</p>
              <p>{{ $t("testimonials.testimonial2Desc2Paragraph2") }}</p>
              <p>{{ $t("testimonials.testimonial2Desc2Paragraph3") }}</p>
            </q>
          </div>
        </div>
        <div class="flex-item-right cards mt-5">
          <div class="testimonial">
            <img src="../assets/images/testimonial/samy.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial1Name") }}</h3>
            <footer class="blockquote-footer"> {{ $t("testimonials.testimonial1Title") }}</footer>
            <q>
              <p>{{ $t("testimonials.testimonial1Desc1Paragraph1") }}</p>
              <p>{{ $t("testimonials.testimonial1Desc1Paragraph2") }}</p>
              <p>{{ $t("testimonials.testimonial1Desc1Paragraph3") }}</p>
              <p>{{ $t("testimonials.testimonial1Desc1Paragraph4") }}</p>
            </q>
          </div>
        </div>
        <div class="flex-item-right cards mt-5">
          <div class="testimonial">
            <img src="../assets/images/testimonial/sira.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial3Name") }}</h3>
            <footer class="blockquote-footer"> {{ $t("testimonials.testimonial3Title") }}</footer>
            <q>
              <p>{{ $t("testimonials.testimonial3Desc3Paragraph1") }}</p>
              <p>{{ $t("testimonials.testimonial3Desc3Paragraph2") }}</p>
              <p>{{ $t("testimonials.testimonial3Desc3Paragraph3") }}</p>
              <p> {{ $t("testimonials.testimonial3Desc3Paragraph4") }}</p>
              <p> {{ $t("testimonials.testimonial3Desc3Paragraph5") }}</p>
            </q>
          </div>
        </div>

        <div class="flex-item-right cards mt-5">
          <div class="testimonial">
            <img src="../assets/images/testimonial/Evariste.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial5Name") }}</h3>
            <footer class="blockquote-footer"> {{ $t("testimonials.testimonial5Title") }}</footer>
            <q>
              <p>{{ $t("testimonials.testimonial5Desc5Paragraph1") }}</p>
              <p>{{ $t("testimonials.testimonial5Desc5Paragraph2") }}</p>
              <p>{{ $t("testimonials.testimonial5Desc5Paragraph3") }}</p>
            </q>
          </div>
        </div>
        <div class="flex-item-right cards mt-5 ">
          <div class="testimonial">
            <img src="../assets/images/testimonial/cril.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial4Name") }}</h3>
            <footer class="blockquote-footer"> {{ $t("testimonials.testimonial4Title") }}</footer>
            <q>
              <p>{{ $t("testimonials.testimonial4Desc4Paragraph1") }}</p>
              <p>{{ $t("testimonials.testimonial4Desc4Paragraph2") }}</p>
            </q>
          </div>
        </div>
        <div class="flex-item-right cards mt-5 mb-5">
          <div class="testimonial">
            <img src="../assets/images/testimonial/Gloire.jpg" alt="" />
            <h3 class="name"> {{ $t("testimonials.testimonial6Name") }}</h3>
            <footer class="blockquote-footer"> {{ $t("testimonials.testimonial6Title") }}</footer>
            <q>
              <p> {{ $t("testimonials.testimonial6Desc6Paragraph1") }} </p>
              <p>{{ $t("testimonials.testimonial6Desc6Paragraph2") }}</p>
              <p>{{ $t("testimonials.testimonial6Desc6Paragraph3") }}</p>
            </q>
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
.flex-container {
  display: flex;
  flex-direction: row;

  .flex-item-left,
  .flex-item-right {
    flex: 50%;
    padding: 3%;
  }
}

.testimonial-inner {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.cards:hover {
  background-color: #082948;
}

.testimonial {
  color: white;
}


.testimonial img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.name {
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }

  .testimonial img {
    margin-top: 15%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .cards {
    background-color: #082948;
  }
}
</style>