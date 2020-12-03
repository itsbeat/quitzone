<template>
  <div id="navbar" class="bg-white">
    <nav class="h-16 text-white bg-teal-600 flex items-center shadow">
        <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="logo_quitzone.png" class="fill-current h-200 w-300 ml-32" width="200" height="320" >
      
    
        </div>
        <div class="container mx-auto px-52 ml-44">
            <div class="flex justify-between items-center">
                <div class="flex">
                    <a href="#" class="text-blue-dark  font-semibold rounded-lg px-4 py-2 | hover:bg-grey-light hover:text-white-normal">
                        Home
                    </a>
                    <a href="#" class="text-grey-dark font-semibold rounded-lg px-4 py-2 | hover:bg-grey-light hover:text-white-normal">
                        Classi
                    </a>
                    <a href="#" class="text-grey-dark  font-semibold rounded-lg px-4 py-2 | hover:bg-grey-light hover:text-white-normal">
                        Esami
                    </a>
                    <a href="#" class="text-grey-dark font-semibold rounded-lg px-4 py-2 | hover:bg-grey-light hover:text-white-normal">
                        Quiz
                    </a>
                </div>
                <div class="flex">
                    <div class="relative">
                        <button class="rounded-full overflow-hidden border-2 border-teal-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                                @click="isOpen2 = true">
                            <img src="https://i.pravatar.cc/150?u=1" alt="">
                        </button>
                        <div v-if="isOpen2" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen2 = false"></div>
                        <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen2}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-white-normal hover:bg-grey-light">Profilo</a>
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-white-normal hover:bg-grey-light">Impostazioni</a>
                                <a href="#" class="block text-grey-dark font-semibold px-4 py-2 | hover:text-white-normal hover:bg-grey-light">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
        isOpen1: true,
        isOpen2: false,
    };
  },
  mounted() {},
  methods: {
  },
  computed: {}
};
</script>
<style></style>
