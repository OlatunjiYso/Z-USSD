export const asterisksCount = (text) => {
    const regex = /[*]/g;
    const found = text.match(regex); 
    return found.length;
}