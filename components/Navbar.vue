<template>
  <div>
    <nav class="w-full h-28 text-black">
      <AppContainer>
        <div class="items-center w-full flex">
          <ul
            class="flex justify-between w-full font-medium">
            <li>
              <NuxtLink to="/" class="">Home</NuxtLink>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded">About</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded">Services</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded">Contact</a>
            </li>
          </ul>
        </div>
      </AppContainer>
    </nav>
  </div>
</template>


<script setup>
</script>

<style>
/* Add your custom styles here */
</style>