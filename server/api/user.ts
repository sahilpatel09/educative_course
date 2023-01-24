export default defineEventHandler(async (event) => {
  const userData = await $fetch("https://randomuser.me/api/");
  return userData.results[0];
});
