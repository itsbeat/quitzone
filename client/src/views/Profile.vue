<template>
  <div>
    

    <div class="h-full mt-24">
 
      <div class="block md:flex">

        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div class="flex justify-between">
            <span class="text-xl font-semibold block">Profilo</span>
            <button
              @click="goToEdit()" 
              class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                Modifica
            </button>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>

        </div>
    
      <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">

        <div class="rounded shadow p-6">

          <div class="pb-6">
            <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
            <div class="border-1 rounded-r px-4 py-2 w-full"/>
              {{user.name}}
            </div>
            <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
            <div class="border-1 rounded-r px-4 py-2 w-full"/>
              {{user.email}}
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>
<script>

export default {
  name: "Profile",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async goToEdit() {
        this.$router.push("/profile/edit");
    }
  },
  async mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>
