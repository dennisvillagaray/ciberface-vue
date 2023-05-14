<template>
  <div class="container relative flex flex-col min-h-screen mx-auto">
    <header
      class="fixed top-0 left-0 items-center justify-center w-full h-16 p-4 bg-gray-800"
    >
      <nav class="container flex items-center justify-between mx-auto">
        <a href="#" class="text-xl font-bold text-white">Ciberface</a>
        <div>
          <a href="#" class="text-white">link a una página</a>
          <a
            href="#"
            class="px-4 py-2 ml-4 font-bold text-gray-800 bg-white rounded"
            >link a otra página</a
          >
        </div>
      </nav>
    </header>
    <main class="flex items-center justify-center flex-1 py-4">
      <router-view></router-view>
    </main>
    <footer class="flex items-center justify-center h-16 bg-gray-800">
      <div class="container mx-auto text-center text-white">
        © 2023 Ciberface
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>
