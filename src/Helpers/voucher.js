export const confirmVoucher = (voucher) => {
    
    if(!voucher || voucher.length < 12) {
        return false;
    }
    return true;
}