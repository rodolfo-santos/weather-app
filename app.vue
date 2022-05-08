<template>
  <div class="h-screen relative overflow-hidden">
    <img src="" alt="" />
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">Toronto</h1>
          <p class="font-extralight text-2xl mt-2 text-white">Sunday Dec 9th</p>
          <img class="w-56 icon" src="" alt="" />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">53ª</p>
        </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Search a city..." />
        <button class="bg-sky-400 w-20 text-white h-10">Search</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
