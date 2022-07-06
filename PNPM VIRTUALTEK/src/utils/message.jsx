import {message} from 'antd'

export const successmessage = (msg)=> message.success(msg);
export const deletemessage = (msg) => message.error(msg);
export const errormessage = (msg) => message.error(msg);