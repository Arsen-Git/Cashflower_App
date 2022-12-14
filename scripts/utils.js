export const storage = {
setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value))
},
getItem(key){
    return JSON.parse(localStorage.getItem(key))
},
deleteItem(key){
    localStorage.removeItem(key)
}
}

export function cleanPage(target = document.body){
    target.innerHTML = "";
}

export const REASONS = Object.freeze({
    ADDWALLET: "wallet",
    ADDINCOMETRANS: "incomeTransactions",
    ADDOUTCOMETRANS: "outcomeTransaction",
    ADDCATEGORY: "category"
})