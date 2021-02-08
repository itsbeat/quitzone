<template>
  <div >
    <nav
      :class="{ 'hidden-navbar': !showNavbar }"
      class="navbar h-16 text-white bg-white-normal bg-teal-600 flex items-center shadow flex w-full"
    >
      <div class="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div class="flex items-center text-white mr-52">
          <img
            src="logo_quitzone.png"
            class="fill-current"
            width="400"
            height="520"
          />
        </div>
        <div class="flex items-center container mx-auto">
          <div class="flex justify-between items-center">
            <div class="flex">
              <a
                href="#"
                @click="gotoSection(route, index)"
                v-for="(route, index) in visibleRoutes"
                :key="index"
                class="font-semibold px-1 py-1 mx-3"
                :class="{
                  ' text-blue-dark border-b-2': selectRouteIndex == index,
                  'text-gray-200': selectRouteIndex != index,
                }"
              >
                {{ route.meta.label }}
              </a>
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="lg:flex lg:flex-grow items-center container mx-auto px-32 ml-74"
          >
            <div class="relative">
              <button
                class="rounded-full overflow-hidden border-2 border-teal-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                @click="isOpen2 = true"
              >
                <img src="https://i.pravatar.cc/150?u=1" alt="" />
              </button>
              <div
                v-if="isOpen2"
                class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
                @click="isOpen2 = false"
              ></div>
              <div
                class="absolute z-30 right-0 mt-2"
                :class="{ hidden: !isOpen2 }"
              >
                <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                  <a
                    href="#"
                    class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark"
                    >Profilo</a
                  >
                  <a
                    href="#"
                    class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark"
                    >Impostazioni</a
                  >
                  <a
                    href="#"
                    class="block text-grey-dark font-semibold px-4 py-2 | hover:text-blue-dark"
                    >Log out</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
.navbar {
  position: fixed;
  padding: 2em;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.1s all ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
const OFFSET = 40;
export default {
  name: "navbar",
  data() {
    return {
      isOpen1: true,
      isOpen2: false,
      routes: [],
      selectRouteIndex: -1,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    console.log(this.$router.options.routes);
    this.selectRouteIndex = 0;
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    gotoSection(route, index) {
      this.selectRouteIndex = index;
      this.$router.push({
        name: route.name,
      });
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = this.lastScrollPosition > OFFSET;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
  computed: {
    visibleRoutes() {
      return this.$router.options.routes.filter((route) => {
        //funzione per filtrare ogni elemento dell'array
        if (route.meta && route.meta.label) {
          return true;
        }
        return false;
      });
    },
  },
};
</script>
<style></style>
