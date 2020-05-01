<template>
  <nav class="text-gray-700 dark:text-gray-600 w-full flex justify-end items-center mb-12">
    Compartir en
    <a class="p-4 hover:text-teal-600 dark-hover:text-teal-400 transition-all duration-300" :href="`https://www.facebook.com/share.php?u=${this.postUrl}`" target="_blank"><icon name="facebook" /> Facebook</a>
    <a class="p-4 hover:text-teal-600 dark-hover:text-teal-400 transition-all duration-300" :href="`https://twitter.com/share?url=${this.postUrl}`" target="_blank"><icon name="twitter" /> Twitter</a>
    <a class="p-4 hover:text-teal-600 dark-hover:text-teal-400 transition-all duration-300" :href="`https://www.linkedin.com/sharing/share-offsite/?url=${this.postUrl}`" target="_blank"><icon name="linkedin" /> LinkedIn</a>
  </nav>
</template>

<style>
  .icon {
    height: 1.5rem;
    display: inline-flex;
  }
</style>

<script>
import Icon from "vue-icon/lib/vue-feather.esm";

export default {
  components: {
    Icon,
  },
  props: {
    postUrl: ""
  }
}
</script>