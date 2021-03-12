import { confirmPhone } from '../Helpers/account';
import { confirmVoucher } from '../Helpers/voucher'

const selfDeposit = (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    const voucher = text.split('*')[1];

    if(!confirmPhone(phoneNumber)) {
        const message = `CON There is no account registered with this number, will you like to open one?
        1. Yes, please
        2. No, never mind.`
        return res.send(message);
        
    }  

    if(!confirmVoucher(voucher)) {
        const message = `END Sorry, this recharge PIN is invalid.`
        return res.send(message);
    }

    const message = `END Congratulations, your account has been credited with N2000.`
    return res.send(message);
}

export default selfDeposit;