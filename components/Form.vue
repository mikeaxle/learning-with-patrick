<template>
  <div class="container">
    <div class="flex-container container-wrapper">
      <div class="flex-item-left p-5 text-bg-dark">
        <h4>SEND US A MESSAGE</h4>
        <form class="" action="">
          <input class="form-control" type="text" placeholder="Your Name" />
          <input
            class="form-control mt-4"
            type="text"
            placeholder="Your Email"
          />
          <input class="form-control mt-4" type="text" placeholder="Suject" />
          <textarea
            class="form-control mt-4"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <br />
          <input
            class="form-control btn btn-primary"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div class="flex-item-right p-5 text-bg-dark">
        <div class="container">
          <h4>CONTACT INFO</h4>
        </div>
        <div class="container">
          <h4 class="text-primary">Where to Find Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            dignissimos incidunt similique dolore animi vero?
          </p>
        </div>
        <div class="container">
          <h4 class="text-primary">Email Us At</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis iusto exercitationem, minus ad error.
          </p>
        </div>
        <div class="container">
          <h4 class="text-primary">Call Us At</h4>
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
/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>