# Handeling Environment Variables

When dealing with a full-stack framework like Nuxt, it is critical to manage private and public environment variables.

For an example, working with Firebase, you get public variables using which you can query for a single user's data. You can use service account credentials for Firebase, using which you will be able to access all the users data and have much more power on server side.

Nuxt allows us to expose certain variables to the browser while keeping others private and only accessible from the server side.