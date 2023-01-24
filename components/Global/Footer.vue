<template>
  <div>
    <div class="flex justify-between items-center mt-8">
      <div>
        <p class="text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © {{ currentYear }}
          <NuxtLink
            to="/"
            class="text-lightest-slate transition duration-200 hover:text-green-400"
          >
            {{ firstName }} {{ lastName }}
          </NuxtLink>
          All rights reserved.
          <button class="px-3 py-1 bg-green-400 rounded-none text-white">
            Page Visits : {{ pageVisits }} || Site Visits : {{ siteVisits }}
          </button>
        </p>
      </div>
      <div class="flex py-3 gap-3 items-center">
        <GlobalSocialIcons />
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useUser();
const pageData = await useFetch("/api/getPageVisits");
const siteData = await useFetch("/api/getSiteVisits");

const date = new Date();
const currentYear = ref(date.getFullYear());

const pageVisits = pageData.data.value.value;
const siteVisits = siteData.data.value.value;

const userData = user.value.data;
const firstName = userData.name.first;
const lastName = userData.name.last;
</script>
