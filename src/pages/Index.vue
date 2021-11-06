<template>
  <Layout>
    <main>
      <header>
        <div
          class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6 py-10 md:py-32 border-b border-gray-400 dark:border-gray-700"
        >
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">
            <g-link to="/">
              <img class="h-64 mx-auto filter-invert" src="./images/logo.svg" />
            </g-link>
          </h1>
          <p
            class="text-gray-700 text-lg sm:text-3xl italic dark:text-gray-300"
          >Trabajos e ideas de Joel A. Villarreal Bertoldi</p>
          <nav class="p-6 grid grid-flow-row md:grid-flow-col gap-4">
            <g-link to="/talks" class="text-gray-900 hover:bg-gray-300 dark:text-gray-400 border-gray-400 text-lg border rounded-full px-4 py-2 transition duration-300">Charlas</g-link>
            <g-link to="/ir" class="text-gray-900 hover:bg-gray-300 dark:text-gray-400 border-gray-400 text-lg border rounded-full px-4 py-2 transition duration-300">#IngenieríaReversa</g-link>
            <g-link to="/ask-me-anything" class="text-gray-900 hover:bg-gray-300 dark:text-gray-400 border-gray-400 text-lg border rounded-full px-4 py-2 transition duration-300">Preguntame</g-link>
          </nav>
        </div>
      </header>
      <section>
        <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";
import PostItem from "@/components/PostItem";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
        { name: "twitter:site", content: "@joelalejandro" },
        { name: "twitter:creator", content: "@joelalejandro" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/android-chrome-512x512.png`;
    }
  }
};
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
          tags {
            id
            title
            path
          }
          author {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
