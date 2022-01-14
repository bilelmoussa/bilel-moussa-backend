const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DATABASE,
  } = process.env


export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@3dwave-xwprz.mongodb.net/${MONGO_DATABASE}?retryWrites=true`
