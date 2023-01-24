export default defineNuxtPlugin(async (nuxtApp) => {
  // Doing something with nuxtApp
  console.log("Server side execauted.");
  const foo = useUser();
  const data = await useFetch("/api/user");
  foo.value = data;
});
