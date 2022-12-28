export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  return { myKey: config.privateVar, allKeys: config }
})