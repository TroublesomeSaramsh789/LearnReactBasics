
import axiosInstance from '../../axios/axiosInstance';
const PaymentCall = (tokenData) => axiosInstance.post(`${process.env.REACT_APP_BASE_API_URL}/payment`, {
    token: tokenData
})
export default PaymentCall;