export default defineEventHandler(async (event) => {
  // https://api.countapi.xyz/create?namespace=personal-site&key=pagevisits&value=0
  // for docs visit https://countapi.xyz/
  const updateURL = "https://api.countapi.xyz/get/personal-site/pagevisits";
  const pageVisitCount = await $fetch(updateURL);
  return pageVisitCount;
});
