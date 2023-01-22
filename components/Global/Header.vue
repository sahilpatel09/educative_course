<template>
  <div>
    <header>
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink to="/" class="mt-3 flex items-center justify-center text-center">
            <IconsCustomName alphabet="J"/>
        </NuxtLink>
        </div>
        <nav class="flex items-center">
          <NuxtLink to="/about" class="mr-5 hover:text-gray-900">About</NuxtLink>
          <NuxtLink to="/projects" class="mr-5 hover:text-gray-900">Projects</NuxtLink>
          <NuxtLink to="/blog" class="mr-5 hover:text-gray-900">Blog</NuxtLink>
          <NuxtLink to="/contact" class="mr-5 hover:text-gray-900">Contact</NuxtLink>
          <NuxtLink to="/resume">
            <button class="mr-5 hover:text-gray-900 font-bold bg-green-700 px-4 py-2 bottom-2 rounded-lg">Resume</button>
          </NuxtLink>
        </nav>
      </div>
    </header>  
  </div>
</template>