export const storage = {
setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value))
},
getItem(key){
    return localStorage.getItem(key)
},
deleteItem(key){
    localStorage.removeItem(key)
}
}

export function cleanPage(){
    document.body.innerHTML = "";
}