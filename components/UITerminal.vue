<template>
  <div>
    <p class="text-900">
      Enter a <strong>"secret phrase"</strong>, you have {{ sec }}sec and
      {{ attempts }} attempts. Otherwise the app will be
      <strong>"DESTROYED"</strong>!
    </p>
    <Terminal
      welcomeMessage="Welcome:"
      prompt="$"
      aria-label="Terminal Service"
    />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import TerminalService from "primevue/terminalservice";

const attempts = ref(3);
const sec = ref(10);
const isDestroying = ref(false);

const destroy = () => {
  isDestroying.value = true;

  setTimeout(() => {
    document.querySelector("body").innerHTML =
      '<div class="text-center text-4xl font-bold" style="line-height: 100vh">Destroyed!</div>';
  }, 3000);
};

onMounted(() => {
  TerminalService.on("command", commandHandler);

  const timeout = setInterval(() => {
    sec.value -= 1;

    if (isDestroying.value) {
      clearTimeout(timeout);
      return;
    }

    if (sec.value <= 0) {
      clearTimeout(timeout);
      destroy();
    }
  }, 1000);

  document
    .querySelectorAll(".p-terminal, .p-splitter, .p-menu")
    .forEach((el) => {
      el.classList.add("destroying");
    });
});

onBeforeUnmount(() => {
  TerminalService.off("command", commandHandler);
});

const commandHandler = (text) => {
  if (isDestroying) {
    TerminalService.emit("response", `You are loser!`);
    return;
  }

  attempts.value -= 1;

  if (attempts.value === 0) {
    TerminalService.emit("response", `It's your the worst day!`);

    destroy();
    return;
  }

  TerminalService.emit("response", `UNKNOWN PHRASE: ${text};`);
};
</script>

<style>
.destroying {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0% {
    background: red;
  }

  25% {
    background: black;
  }

  50% {
    background: red;
  }

  100% {
    background: black;
  }
}
</style>
