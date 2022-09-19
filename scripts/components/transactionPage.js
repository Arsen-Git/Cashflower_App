import API from "../API"

export default{
    html:{
        content: `
        <section class="content">
            <div class="wallets">
            </div>
        </section>`
    },
    async render(type,parent = document.querySelector(".nav")){
        parent.insertAdjacentHTML("afterend", this.html.content)

        const transactionsContainer = document.querySelector(".wallets")

        const transactions = await API.getTransactions();
        console.log(transactions);

        transactions.forEach(transaction=>{
            if(transaction.type == type){
                transactionsContainer.insertAdjacentHTML("beforeend",`
                <div class="wallet">
                    <h2 class="wallet__title">${transaction.category}</h2>
                    <div class="wallet__text__group">
                        <p class="wallet__text">Тип</p>
                        <p class="wallet__text">${transaction.type == "OUTCOME"? "Платіж": "Зарахування"}</p>
                    </div>
                    <div class="wallet__text__group">
                        <p class="wallet__text">Сумма</p>
                        <p class="wallet__text">${transaction.amount}</p>
                    </div>
                    <div class="wallet__text__group">
                        <p class="wallet__text">Номер гаманця:</p>
                        <p class="wallet__text">${transaction.wallet}</p>
                    </div>
                    <a class="wallet__link">Докладніше</a>
                </div>`)
            }
        })
    }
}