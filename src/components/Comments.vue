<template>
  <div id="commento"></div>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        { src: 'https://cdn.commento.io/js/commento.js', defer: true }
      ],
    }
  }
}
</script>
