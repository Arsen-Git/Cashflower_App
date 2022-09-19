import API from "../API"

export default{
    html:{
        content: `
        <section class="content">
            <div class="wallets">
            </div>
        </section>`
    },
    async render(parent = document.querySelector(".nav")){
        let allCategories = {};
        parent.insertAdjacentHTML("afterend", this.html.content)

        const categoriesContainer = document.querySelector(".wallets")

        const transactions = await API.getTransactions();

        transactions.forEach(transaction =>{
            if(!Object.keys(allCategories).includes(transaction.category)){
                allCategories[transaction.category] = +transaction.amount;
            }else{
                allCategories[transaction.category] += +transaction.amount;
            }
        });

        for(let category in allCategories){
            categoriesContainer.insertAdjacentHTML("beforeend",`
            <div class="wallet">
                <h2 class="wallet__title">${category}</h2>
                <div class="wallet__text__group">
                    <p class="wallet__text">Сумма</p>
                    <p class="wallet__text">${allCategories[category]}</p>
                </div>
                <a class="wallet__link">Докладніше</a>
            </div>`)
        }
    }
}