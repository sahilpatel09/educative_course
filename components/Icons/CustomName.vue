<template>
  <div class="flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="50"
      height="50"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        class="hex"
        points="37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5"
        fill="transparent"
        stroke="cyan"
        stroke-width="3"
        transform="translate(10)"
      ></polygon>
      <text
        x="28"
        y="25"
        fill="cyan"
        font-family="Verdana"
        font-size="18"
        text-anchor="middle"
      >
        {{ user.data.name.first[0] }}
      </text>
    </svg>
  </div>
</template>
<script setup>
const user = useUser();
</script>
