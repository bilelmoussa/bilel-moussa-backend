import { Document, Schema, model, Model } from 'mongoose';

//  message schema
const messageSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    createdOn: {type: Number, required: true},
});

interface MessageSchema extends Document {
    name: string,
    email: string,
    subject: string,
    message: string,
    createdOn: number,
}

const Message: Model<MessageSchema> = model('Message', messageSchema);

export { Message };

export const addNewMessage = async (messageInfo: MessageSchema) => {
  const result = await messageInfo.save();

  return result;
};

type getMessagesArgs = {
  skip:  string,
  limit: string,
}

export const getMessages = async ({skip = "0", limit = "10"}: getMessagesArgs) => {
  const parsedSkip = parseInt(skip);
  const parseLimit = parseInt(limit); 

  const result = await Message.find().sort({createdOn: -1}).skip(parsedSkip).limit(parseLimit);

  return result;
};

export const deleteMessage = async (id: string) => {
  const result = await Message.deleteOne({_id: id});

  return result;
};

export const messagesCount = async () => {
  const result = await Message.find().countDocuments();

  return result;
}



