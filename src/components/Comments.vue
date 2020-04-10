<template>
  <div id="commento"></div>
</template>

<script>
const injectCommento = () => {
  if (!process.isClient) {
    return {};
  }

  if (!window.location.href.includes("joey.works")) {
    return {};
  }

  return { src: 'https://cdn.commento.io/js/commento.js', defer: true };
};

export default {
  metaInfo() {
    return {
      script: [
        injectCommento()
      ],
    }
  }
}
</script>
