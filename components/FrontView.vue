<template>
  <div>
    <div class="sm:px-8 mt-9">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="flex items-center justify-between">
              <div class="max-w-2xl">
                <h1
                  class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                >
                  Hello , I am
                  {{
                    props.userData.name.first + " " + props.userData.name.last
                  }}.
                </h1>
                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I’m
                  {{
                    props.userData.name.first + " " + props.userData.name.last
                  }}, a software designer and entrepreneur based in New York
                  City. I’m the founder and CEO of Planetaria, where we develop
                  technologies that empower regular people to explore space on
                  their own terms.
                </p>
                <GlobalSocialIcons />
              </div>
              <img
                src="https://ouch-cdn2.icons8.com/WQfnHYR8J3nbibE5WAKCNh05Q82_YGkxh-Nl_gdj_lI/rs:fit:561:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjky/LzA0MWM2NjI0LWE5/ZjUtNDkxYy1hNTUw/LTUxNjQyYzYwMGNi/OS5wbmc.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["userData"]);
</script>
