import { Message, addNewMessage, getMessages, messagesCount, deleteMessage } from '../data-access';
import makeAddMessage from './addMessage';

const addMessage = makeAddMessage({Message, addNewMessage});

export { addMessage }