import { makeMessage } from '../entities'
import sendEmail from '../shared/sendEmail'

type makeAddMsgArgsType = {
  Message: any;
  addNewMessage: Function;
}

const makeAddMessage = ({ Message, addNewMessage }: makeAddMsgArgsType) => {
  return async (messageInfo: any) => {

    const newMessage = await makeMessage(messageInfo);

    const messageDb = new Message(newMessage);

    const result = await addNewMessage(messageDb);

    const { name, email, message, subject } = result;

    const emailInfo = {
      from: name,
      subject: subject,
      email,
      message,
    };
    
     await sendEmail(emailInfo);

    return result;
  };
};

export default makeAddMessage;