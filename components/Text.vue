<template>

<ul>
    <li>
    <input type="checkbox" />
    <div>W</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>E</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>L</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>C</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>O</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>M</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>E</div>
  </li>



  <!-- <li>
    <input type="checkbox" />
    <div>P</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>R</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>A</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>T</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>H</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>A</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>M</div>
  </li> -->
</ul>

  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

/* body {
  padding: 0;
  margin: 0; 
  height: 100vh;
  background: #18191f;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
} */

ul {
  position: relative;
  display: flex;
}

li {
  list-style: none;
  cursor: pointer;
}

label {
  position: relative;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 50px;
  width: 50px;
  z-index: 100;
}

div {
  position: relative;
  height: 50px;
  width: 50px;
  background: #18191f;
  color: #555;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 20px;
  box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
    4px 4px 6px rgba(0, 0, 0, 0.2),
    inset -1px -1px 4px rgba(255, 255, 255, 0.05),
    inset 1px 1px 1px rgba(0, 0, 0, 0.1);
}

/* div:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 75px;
  height: 38px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
} */

input[type="checkbox"]:checked ~ div {
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
    inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  color: yellow;
  text-shadow: 0 0 15px yellow, 0 0 25px yellow;
  animation: glow 1.5s linear infinite;
}

@keyframes glow {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>