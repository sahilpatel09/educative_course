<template>
  <div>
    <section class="text-gray-400 bg-gray-900 body-font relative">
      <div class="absolute inset-0 bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          :src="
            'https://maps.google.com/maps?width=100%&height=600&hl=en&q=loc:' +
            user.data.location.coordinates.latitude +
            '+' +
            user.data.location.coordinates.longitude +
            '-78.3020&ie=UTF8&t=&z=14&iwloc=B&output=embed'
          "
          style="filter: grayscale(1) contrast(1.2) opacity(0.16)"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"
        >
          <h2 class="text-white text-2xl mb-1 font-medium title-font">
            Contact Me
          </h2>

          <p class="leading-relaxed mb-2">Email : {{ user.data.email }}</p>
          <p class="leading-relaxed mb-2">Phone : {{ user.data.phone }}</p>
          <p class="leading-relaxed mb-2">Cell : {{ user.data.cell }}</p>

          <p class="leading-relaxed mb-5">
            <bold>Address:</bold>
            <br />
            {{
              user.data.location.street.number +
              "-" +
              user.data.location.street.name +
              ", " +
              user.data.location.city +
              ", " +
              user.data.location.state +
              ", " +
              user.data.location.country +
              ", " +
              user.data.location.postcode +
              "."
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["pagevisit"],
});
const user = useUser();
console.log(user);
const url = "http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020";
</script>
