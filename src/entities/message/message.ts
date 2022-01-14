export type MessageType = {
    name: string,
    email: string,
    subject: string,
    message: string,
    createdOn: number,
}

/**
 * Message
 */
 export default class Message {
    public name: string;
    public email: string;
    public subject: string;
    public message: string;
    public createdOn: number;
    static error: string;
  
    /**
     * message class constructor
     * @param {MessageType} MessageInfo
     * @param {Function} messageValidate
     */
    constructor(
        MessageInfo: MessageType,
        messageValidate: Function,
    ) {
      this.name = MessageInfo.name
      this.email = MessageInfo.email;
      this.subject = MessageInfo.subject;
      this.message = MessageInfo.message;
      this.createdOn = MessageInfo.createdOn;
  
      Message.error = messageValidate({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        createdOn: this.createdOn,
      });
  
      if (Message.error) throw new Error(Message.error);
  
    }
  }
  