export default defineEventHandler(async (event) => {
  // https://api.countapi.xyz/create?namespace=personal-site&key=pagevisits&value=0
  // change namespace in the above URL to your domain or any secret string!

  const updateURL = "https://api.countapi.xyz/hit/personal-site/pagevisits";
  const updatePageVisit = await $fetch(updateURL);
  return updatePageVisit;
});
