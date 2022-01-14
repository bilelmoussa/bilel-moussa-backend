import Joi from 'joi'

const messageSchema = Joi.object({
    name: Joi.string().trim().min(1).max(30).lowercase().required(),
    email: Joi.string().trim().email().required(),
    subject: Joi.string().trim().min(1).max(30).lowercase().required(),
    message: Joi.string().trim().min(1).required(),
    createdOn: Joi.number().required(),
});
  
  export default messageSchema;