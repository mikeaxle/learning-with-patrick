<template>
  <div class="container">
    <div class="flex-container container-wrapper">
      <div class="flex-item-left p-4 text-bg-dark">
        <h4>{{ $t("contacts.intro") }}</h4>
        <form class="" action="">
          <input class="form-control" type="text" :placeholder="$t('contacts.name')" />
          <input
            class="form-control mt-4"
            type="text"
            :placeholder="$t('contacts.email')"
          />
          <input class="form-control mt-4" type="text" :placeholder="$t('contacts.subject')" />
          <textarea
            class="form-control mt-4"
            name=""
            id=""
            cols="30"
            rows="10"
           :placeholder="$t('contacts.message')"
          ></textarea>
          <br />
          <input
            class="form-control submit-button"
            type="submit"
            :value="$t('contacts.send')"
          />
        </form>
      </div>
      <div class="flex-item-right p-5 text-bg-dark">
        <div class="container">
          <h4>{{ $t("contacts.contactInfo") }}</h4>
        </div>
        <div class="container">
          <h4 class="title_color">{{ $t("contacts.findUs") }}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            dignissimos incidunt similique dolore animi vero?
          </p>
        </div>
        <div class="container">
          <h4 class="title_color">{{ $t("contacts.emailUs") }}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis iusto exercitationem, minus ad error.
          </p>
        </div>
        <div class="container">
          <h4 class="title_color">{{ $t("contacts.callus") }}</h4>
          <ul>
            <li>Phone: +24396582458</li>
            <li>Whatsapp: +24396582458</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-wrapper {
  border: 5px solid #212529;
  border-radius: 10px 10px 10px 10px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  .flex-item-left {
    flex: 70%;
    background-color: $form_first;
  }
  .flex-item-right {
    flex: 30%;
    padding: 5px;
    background-color: $title_color;
  }
}

.submit-button {
  background-color: $title_color;
  color: white;
  border: 1px solid rgb(8, 68, 105);
}
.submit-button:hover{
  background-color: $form_first ;
}
.title_color {
  color: $form_first;
}
/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>