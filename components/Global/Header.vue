<template>
  <div>
    <header>
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
            class="mt-3 flex items-center justify-center text-center"
          >
            <IconsCustomName alphabet="J" />
          </NuxtLink>
        </div>
        <nav class="flex items-center gap-6">
          <NuxtLink to="/blog" class="mr-5 hover:text-gray-900">Blog</NuxtLink>
          <NuxtLink to="/contact" class="mr-5 hover:text-gray-900"
            >Contact</NuxtLink
          >
        </nav>
      </div>
    </header>
  </div>
</template>
