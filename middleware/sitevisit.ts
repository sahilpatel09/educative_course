export default defineNuxtRouteMiddleware(async (to, from) => {
  //   if (to.params.id === "1") {
  //     return abortNavigation();
  //   }
  //   return navigateTo("/");
  console.log("Website Homepage is visited.");
  const data = await useFetch("/api/updateSiteVisit");
  console.log("Count upadate site visit: " + data);
});
