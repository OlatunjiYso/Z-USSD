import { asterisksCount } from '../Helpers/main';
import selfDeposit from './selfDeposit';

const mainController = (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  const welcomeMessage = `CON Welcome, what will you like to do?
  1. Deposit-Self
  2. Deposit-Others
  3. Withdrawal
  4. Card Lock/Unlock
  5. PIN Management
  6. Open Account`
  if (text == '') {
    let response = welcomeMessage;
    return res.send(response)
  } 
  
  if (text == '1') {
    let response = `CON Please enter your recharge pin and hit Send`
    return res.send(response)
  } 

  if (text == '2') {
    let response = `END Please enter the recipient's account number`
    return res.send(response)
  }

  if (text == '3' || text == '4' || text == '5') {
    let response = `END Sorry, this service isn't available yet.`
    return res.send(response)
  }

  if (text.startsWith('1') && asterisksCount(text) == 1) {
    return selfDeposit(req, res);
  }

  if (text.startsWith('1') && asterisksCount(text) == 2 && text.endsWith('1')) {
    let response = `Kindly exit and dial *669# to open an account`
    return res.send(response)
  }

  if (text.startsWith('1') && asterisksCount(text) == 2 && text.endsWith('2')) {
    let response = `Okay, see you next time`
    return res.send(response)
  }

  let response = `END Invalid entry. Please try again.`
  return res.status(400).send(response);
  
}

export default mainController;