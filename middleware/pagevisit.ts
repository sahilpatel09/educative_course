export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("Website page is visited.");
  const data = await useFetch("/api/updatePageVisit");
  console.log("Count upadate page visit: " + data);
});
