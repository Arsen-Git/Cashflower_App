import API from "../API"
import { storage } from "../utils"

export default{
    html:{
        content: `
        <section class="content">
            <div class="wallets">
            </div>
        </section>`,
        wallet: `
        `
    },
    async render(parent = document.querySelector(".nav")){
        parent.insertAdjacentHTML("afterend", this.html.content)

        const walletsContainer = document.querySelector(".wallets")

        const user = storage.getItem("user");
        const wallets = await API.getWallets(user[0].id);

        wallets.forEach(wallet=>{
            walletsContainer.insertAdjacentHTML("beforeend",`
                <div class="wallet">
                    <h2 class="wallet__title">${wallet.name}</h2>
                    <div class="wallet__text__group">
                        <p class="wallet__text">Залишок</p>
                        <p class="wallet__text">${wallet.balance}</p>
                    </div>
                    <div class="wallet__text__group">
                        <p class="wallet__text">Всього транзакцій</p>
                        <p class="wallet__text">${wallet.transactions.length}</p>
                    </div>
                    <a class="wallet__link">Докладніше</a>
                </div>`)
        })
    }
}