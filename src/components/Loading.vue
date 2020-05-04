<template>
  <div class="out">
    <div class="fade-in">
      <div class="container">
        <div class="one common"></div>
        <div class="two common"></div>
        <div class="three common"></div>
        <div class="four common"></div>
        <div class="five common"></div>
        <div class="six common"></div>
        <div class="seven common"></div>
        <div class="eight common"></div>
      </div>
      <div class="bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  components: {}
};
</script>
<style lang="less" scoped>
@import "../assets/mixin";
.container {
  width: 40vw;
  height: 40vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
}

.common {
  height: 5vw;
  max-height: 100%;
  overflow: auto;
  width: 2vw;
  margin: auto;
  max-width: 100%;
  position: absolute;
  border-radius: 0vw 10vw 0vw 10vw;
  box-shadow: inset 0vw 0vw 0vw 0.1vw #e645d0, 0vw 0vw 1.5vw 0vw #e645d0;
}

.one {
  .animate(45deg, 0, 0, 0, 7.5vw);
}
.two {
  .animate(90deg, 5.5vw, 0, 0, 5.5vw, 0.125s);
}
.three {
  .animate(135deg, 7.5vw, 0, 0, 0, 0.25s);
}
.four {
  .animate(180deg, 5.5vw, 0, 5.5vw, 0, 0.375s);
}
.five {
  .animate(225deg, 0, 0, 7.5vw, 0, 0.5s);
}
.six {
  .animate(270deg, 0, 5.5vw, 5.5vw, 0, 0.625s);
}
.seven {
  .animate(315deg, 0, 7.5vw, 0, 0, 0.75s);
}
.eight {
  .animate(360deg, 0, 5.5vw, 0, 5.5vw, 0.875s);
}

.bar {
  width: 12vw;
  height: 0.25vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 16vw;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #e645d0;
}

.progress {
  width: 12vw;
  height: 0.5vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #17e1e6;
}

.container {
  animation: container 5s linear infinite;
  -moz-animation: container 5s linear infinite;
  /* Firefox */
  -webkit-animation: container 5s linear infinite;
  /* Safari and Chrome */
  -o-animation: container 5s linear infinite;
  /* Opera */
}

@keyframes container {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.progress {
  animation: progress 2s ease;
  -moz-animation: progress 2s ease;
  /* Firefox */
  -webkit-animation: progress 2s ease;
  /* Safari and Chrome */
  -o-animation: progress 2s ease;
  /* Opera */
}

@keyframes progress {
  0% {
    left: -24vw;
  }
  10% {
    left: -20vw;
  }
  30% {
    left: -16vw;
  }
  50% {
    left: -12vw;
  }
  65% {
    left: -10vw;
  }
  80% {
    left: -4vw;
  }
  100% {
    left: 0;
  }
}

.fade-in {
  animation: fade-in 2s ease;
  -moz-animation: fade-in 2s ease;
  /* Firefox */
  -webkit-animation: fade-in 2s ease;
  /* Safari and Chrome */
  -o-animation: fade-in 2s ease;
  /* Opera */
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.out {
  animation: out 2s 15s ease;
  -moz-animation: out 2s 15s ease;
  /* Firefox */
  -webkit-animation: out 2s 15s ease;
  /* Safari and Chrome */
  -o-animation: out 2s 15s ease;
  /* Opera */
}

@keyframes out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>