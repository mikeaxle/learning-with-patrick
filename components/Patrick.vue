<template>
    <div class="container">
        <div class="box">
            <p class="pb-3 align-self-lg-start">{{ $t("home.learn") }}</p>

            <div class="title">
                <span class="block"></span>
                <h1 class="mb-5 mt-2">Patrick Mukad<span></span></h1>
            </div>

            <div class="role p-1">
                <div class="block"></div>
                <p class="font-italic mini-title">English Coach</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap");

.container {
  display: flex;
  align-items: center;

  .box {
    display: flex;
    flex-direction: column;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        width: 0%;
        height: inherit;
        background: #0d6efd;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        display: flex;
      }

      h1 {
        font-family: "Poppins";
        color: #fff;
        font-size: 32px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width: 0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;
        }
      }
    }

    .role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .mini-title {
        color: white;
        font-weight: 900;
      }

      .block {
        width: 0%;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 400;
        font-family: "Lato";
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }

  50% {
    width: 100%;
    left: 0;
  }

  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }

  50% {
    width: 100%;
    left: 0;
  }

  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }

  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }

  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }

  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }

  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;
  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
}

@media screen and (max-width: 450px) {
  .container .box .role .mini-title[data-v-d035dc27] {
    font-weight: 600;
    margin-top: 5%;
    background-color: red;
    display: none;
  }
  .container .box .mini-title {
    display: none;
  }

  .container .box .title h1[data-v-d035dc27] {
    font-size: 27px;
  }

}
</style>