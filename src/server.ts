import { PORT, MONGO_URI } from './config'
import createApp from './app'
import { Logger } from './shared/logger'
import mongoose from 'mongoose'

(async () => {
    try {
      await mongoose.connect(MONGO_URI)

      Logger.info('MongoDB Connected... ');

      const { server } = createApp();
      
      server.listen(PORT, () => {
        Logger.info(`Server Started on Port : ${PORT}`);
      });

    } catch (err: any) {
      Logger.error(err);
    }
})();