<template>
  <Layout class="bg-teal-400">
    <main class="flex items-center h-screen">
      <div class="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-xs mx-auto px-6 md:px-0 relative">
        <span class="absolute -mt-10 text-5xl inset-x-0 text-center pointer-events-none"><img src="/favicon-32x32.png"></span>
        <section class="bg-gray-100 mx-auto px-8 py-6 rounded shadow-xl relative">
          <h1 class="text-2xl font-sans font-bold mb-4">Aish...</h1>
          <p class="font-serif mb-4 leading-normal text-gray-700">...me parece que no hay nada por aquí.</p>
          <g-link to="/" class="text-sm text-teal-400 hover:text-teal-600 font-sans transition-color duration-300">&larr; Volver al blog</g-link>
        </section>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: `cuatrocerocuatro`,
    }
  },
}
</script>

