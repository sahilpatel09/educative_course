<template>
    <div class="container mx-auto py-3">
      <div class="flex justify-between items-center">
        <div>
            <p class="text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                © {{ currentYear }}
                <NuxtLink to="/" class="text-lightest-slate transition duration-200
                 hover:text-green-400">
                Jane Doe 
                </NuxtLink>
                All rights reserved.
            </p>
        </div>
        <div class="flex py-3 gap-3 items-center">
            <IconsFacebook class="text-gray-400 hover:text-gray-200" />
            <IconsGithub class="text-gray-400 hover:text-gray-200" />
            <IconsEmail class="text-gray-400 hover:text-gray-200" />
            <IconsLinkedin class="text-gray-400 hover:text-gray-200" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup> 
  const date = new Date();
  const currentYear = ref(date.getFullYear());
  </script>  