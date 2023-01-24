export default defineEventHandler(async (event) => {
  // https://api.countapi.xyz/create?namespace=personal-site&key=sitevisits&value=0
  // change namespace in the above URL to your domain or any secret string!
  const updateURL = "https://api.countapi.xyz/hit/personal-site/sitevisits";
  const updateSiteVisit = await $fetch(updateURL);
  return updateSiteVisit;
});
