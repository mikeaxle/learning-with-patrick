<template>
  <div class="container">
    <div class="flex-container container-wrapper">
      <div class="flex-item-left p-4 text-bg-dark">
        <h4>{{ $t("contacts.intro") }}</h4>
        <form method="POST" action="POST" data-netlify="true">
          <input class="form-control" name="name" type="text" :placeholder="$t('contacts.name')" required />
          <input class="form-control mt-4" name="text" type="email" :placeholder="$t('contacts.email')" required />
          <input class="form-control mt-4" name="tel" type="tel" :placeholder="$t('contacts.phone')" required />
          <select class="form-select mt-4" :placeholder="$t('contacts.subject')" :name="$t('contacts.subject')"
            id="subject" required>
            <option name="subject">{{ $t('contacts.subject0') }}</option>
            <option name="subject" :value="$t('contacts.subject1')">{{ $t('contacts.subject1') }}</option>
            <option name="subject" :value="$t('contacts.subject2')">{{ $t('contacts.subject2') }}</option>
            <option name="subject" :value="$t('contacts.subject3')">{{ $t('contacts.subject3') }}</option>
            <option name="subject" :value="$t('contacts.subject4')">{{ $t('contacts.subject4') }}</option>
            <option name="subject" :value="$t('contacts.subject5')">{{ $t('contacts.subject5') }}</option>
          </select>
          <div class="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <textarea class="form-control mt-4" name="message" id="message" cols="30" rows="10"
            :placeholder="$t('contacts.message')"></textarea>
          <br />
          <input class="form-control submit-button" type="submit" :value="$t('contacts.send')" />
        </form>
      </div>
      <div class="flex-item-right p-5 text-bg-dark">
        <div class="container">
          <h4>{{ $t("contacts.contactInfo") }}</h4>
        </div>
        <div class="container">
          <h4 class="title_color">{{ $t("contacts.callus") }}</h4>
          <ul>
            <li>Phone: +243 831 679 222</li>
            <li>Whatsapp: +243 831 679 222</li>
          </ul>
        </div>
        <div class="container">
          <h4 class="title_color">{{ $t("contacts.findUs") }}</h4>
          <p>
            195 Biayi, Lubumbashi, DRC
          </p>
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
  background-color: $form_first;
  color: white;
  border: 1px solid rgb(8, 68, 105);
}

.submit-button:hover {
  background-color: $title_color ;
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