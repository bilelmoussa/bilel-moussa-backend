const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DATABASE,
    MONGO_URL
  } = process.env


export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}.mongodb.net/${MONGO_DATABASE}?retryWrites=true`
