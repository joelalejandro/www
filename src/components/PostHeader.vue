<template>
  <header>
    <div
      v-if="post.cover"
      class="post-cover overflow-hidden relative"
      :class="[post.fullscreen ? 'fullscreen' : 'max-h-cover']"
    >
      <div
        class="max-w-xl md:max-w-3xl xl:max-w-4xl text-center px-6 absolute z-10"
        :class="[post.fullscreen ? 'flex flex-col items-center m-auto inset-0': 'mx-auto bottom-0 inset-x-0 pb-16']"
      >
        <div class="md:m-auto md:block" :class="[post.fullscreen ? 'bg-gray-900-semitransparent p-10 hidden' : '']">
          <p class="text-white text-xs mb-2 uppercase">{{ post.timeToRead }} min. de lectura</p>
          <h1
            class="text-3xl sm:text-6xl font-caption font-bold leading-tight mb-2 text-white"
          >{{ post.title }}</h1>
          <p class="text-white">
            <span v-if="post.author.title">
              <g-link
                :to="`${post.author.path}/`"
                class="text-white capitalize border-b border-transparent hover:border-white dark-hover:border-teal-400 transition-colors duration-300"
              >{{ titleCase(post.author.title) }}</g-link>&nbsp;&bull;
            </span>
            <time :datetime="post.datetime">{{ formattedPublishDate }}</time>
          </p>
        </div>
      </div>
      <ClientOnly>
          <img :src="post.cover" :alt="post.title" />
      </ClientOnly>
      <div class="md:m-auto md:hidden p-10 text-center">
        <p class="text-white text-xs mb-2 uppercase">{{ post.timeToRead }} min. de lectura</p>
        <h1
          class="text-3xl sm:text-6xl font-caption font-bold leading-tight mb-2 text-white"
        >{{ post.title }}</h1>
        <p class="text-white">
          <span v-if="post.author.title">
            <g-link
              :to="`${post.author.path}/`"
              class="text-white capitalize border-b border-transparent hover:border-white dark-hover:border-teal-400 transition-colors duration-300"
            >{{ titleCase(post.author.title) }}</g-link>&nbsp;&bull;
          </span>
          <time :datetime="post.datetime">{{ formattedPublishDate }}</time>
        </p>
      </div>
    </div>
    <div v-else class="pt-24">
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6">
        <p class="text-gray-700 dark:text-gray-500 text-xs mb-2 uppercase">{{ post.timeToRead }} min. de lectura</p>
        <h1
          class="text-3xl sm:text-5xl leading-tight font-caption font-bold mb-2 text-black dark:text-teal-300"
        >{{ post.title }}</h1>
        <p class="text-gray-700 dark:text-gray-400">
          <span v-if="post.author">
            <g-link
              :to="`${post.author.path}/`"
                class="dark:text-white capitalize border-b border-transparent hover:border-white dark-hover:border-teal-400 transition-colors duration-300"
            >{{ titleCase(post.author.title) }}</g-link>&nbsp;&bull;
          </span>
          <time :datetime="post.datetime">{{ formattedPublishDate }}</time>
        </p>
      </div>
    </div>
    <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
      <g-link
        to="/"
        :class="[post.cover ? 'text-white border-white' : 'text-gray-900 border-gray-400 dark:text-gray-400']"
        class="text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300"
      >&larr; Volver a la portada</g-link>
    </nav>
  </header>
</template>

<script>
import moment from "moment";
import Parallax from "vue-parallaxy";

export default {
  props: ["post"],
  components: {
    Parallax
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD [de] MMMM, YYYY");
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37;
    }
  }
};
</script>
