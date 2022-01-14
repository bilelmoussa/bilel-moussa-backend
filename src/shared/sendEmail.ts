import { createTransport } from 'nodemailer'
import { Logger } from '../shared/logger'
import { ADMIN_EMAIL, EMAIL_PASS } from '../config'

type messageInfoType = {
    from: string,
    email: string,
    subject: string,
    message: string,
}

const sendEmail = async (messageInfo: messageInfoType) => {
    try {
        const transporter = createTransport({
            service: 'gmail',
            auth: {
              user: ADMIN_EMAIL,
              pass: EMAIL_PASS 
            },
            secure: false,
            tls: {
                rejectUnauthorized: false,
              },
          });
        
          const mailOptions = {
            from: `"${messageInfo.from}"<${ADMIN_EMAIL}>`,
            to: ADMIN_EMAIL,
            subject: messageInfo.subject,
            text: messageInfo.message,
            html: `<b>${messageInfo.message}</b>`,
            replyTo: messageInfo.email,
          };
          
          await transporter.sendMail(mailOptions);
    } catch (err) {
        Logger.error(err);
    }
  
};

export default sendEmail;
export { sendEmail };
