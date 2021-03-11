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
    let response = `CON Choose account information you want to view
    1. Account number
    2. Account balance`
    return res.send(response)
  } 

  if (text == '2') {
    let response = `END Your phone number is ${phoneNumber}`
    return res.send(response)
  }

  if (text == '3' || text == '4' || text == '5') {
    let response = `END Sorry, this service isn't available yet.`
    return res.send(response)
  }

  if (text == '1*1') {
    let accountNumber = '22785609874'
    let response = `END Your account number is ${accountNumber}`
    return res.send(response)
  }

  if (text == '1*2') {
    let balance = 'NGN 10,000'
    let response = `END Your balance is ${balance}`
    return res.send(response)
  }
  
  return res.status(400).send(welcomeMessage)
  
}

export default mainController;