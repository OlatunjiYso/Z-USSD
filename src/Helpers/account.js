import { accounts } from '../Data/accounts';

export const confirmPhone = (phoneNumber)=> {
    if(!phoneNumber) return false;
    const userAccount = accounts.find((acc, i)=>acc.phone === phoneNumber);
    return userAccount;
}