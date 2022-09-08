import API from "../API.js"
import {REASONS, storage} from "../utils.js"
import transactionPage from "./transactionPage.js";
import walletPage from "./walletPage.js"

export default{
    elements:{
        walletNameInput: document.createElement("input"),
        walletBallanceInput: document.createElement("input"),

        transactionCategoryInput: document.createElement("input"),
        transactionWalletInput: document.createElement("input"),
        transactionAmountInput: document.createElement("input"),

    submitBtnElement: document.createElement("button")
    },
    html:{
        content:`
        <div class="modal">
            <form class="modal__content">
            </form>
        </div>`},
    render(reason,parent = document.querySelector(".content")){
        parent.insertAdjacentHTML("beforeend",this.html.content);

        document.querySelector(".modal").onclick = e =>{
            if(e.target.className == "modal"){
                document.querySelector(".modal").remove();
            }
        }

        const {walletNameInput,walletBallanceInput,transactionCategoryInput,transactionWalletInput,transactionAmountInput,submitBtnElement} = this.elements;

        submitBtnElement.classList.add("form__submit");
        submitBtnElement.type = "submit";
        submitBtnElement.id = "add";
        submitBtnElement.textContent = "Підтверджую";

        switch(reason){
            case REASONS.ADDWALLET:
                walletNameInput.classList.add("form__input");
                walletBallanceInput.classList.add("form__input");

                walletNameInput.type = "text";
                walletNameInput.name = "walletName";
                walletNameInput.id = "name";
                walletNameInput.placeholder = "Введіть назву...";

                walletBallanceInput.type = "text";
                walletBallanceInput.name = "ballance";
                walletBallanceInput.id = "ballance";
                walletBallanceInput.placeholder = "Введіть баланс...";

                document.querySelector(".modal__content").append(walletNameInput,walletBallanceInput,submitBtnElement);
                break;
            case REASONS.ADDOUTCOMETRANS:
                transactionCategoryInput.classList.add("form__input");
                transactionWalletInput.classList.add("form__input");
                transactionAmountInput.classList.add("form__input");

                transactionCategoryInput.type = "text";
                transactionCategoryInput.name = "transCategory";
                transactionCategoryInput.id = "transCategory";
                transactionCategoryInput.placeholder = "Введіть категорію...";

                transactionWalletInput.type = "text";
                transactionWalletInput.name = "transWallet";
                transactionWalletInput.id = "transWallet";
                transactionWalletInput.placeholder = "Введіть номер гаманця...";

                transactionAmountInput.type = "text";
                transactionAmountInput.name = "transAmount";
                transactionAmountInput.id = "transAmount";
                transactionAmountInput.placeholder = "Введіть сумму...";

                document.querySelector(".modal__content").append(transactionCategoryInput,transactionWalletInput,transactionAmountInput,submitBtnElement);
                break;
            case REASONS.ADDINCOMETRANS:
                transactionCategoryInput.classList.add("form__input");
                transactionWalletInput.classList.add("form__input");
                transactionAmountInput.classList.add("form__input");

                transactionCategoryInput.type = "text";
                transactionCategoryInput.name = "transCategory";
                transactionCategoryInput.id = "transCategory";
                transactionCategoryInput.placeholder = "Введіть категорію...";

                transactionWalletInput.type = "text";
                transactionWalletInput.name = "transWallet";
                transactionWalletInput.id = "transWallet";
                transactionWalletInput.placeholder = "Введіть номер гаманця...";

                transactionAmountInput.type = "text";
                transactionAmountInput.name = "transAmount";
                transactionAmountInput.id = "transAmount";
                transactionAmountInput.placeholder = "Введіть сумму...";

                document.querySelector(".modal__content").append(transactionCategoryInput,transactionWalletInput,transactionAmountInput,submitBtnElement);
                break;
        }

        const submitBtn = document.getElementById("add");

        submitBtn.onclick = async e =>{
            e.preventDefault();

            switch(reason){
                case REASONS.ADDWALLET:
                    const walletName = document.getElementById("name").value;
                    const walletBallance = document.getElementById("ballance").value;
                    if(walletName.length > 0 && walletBallance.length > 0){
                        const savedWallet = await API.saveWallet({name:walletName, owner: storage.getItem("user")[0].id, balance: +walletBallance})
                        document.querySelector(".content").remove();
                        walletPage.render();
                    }
                    break;
                case REASONS.ADDOUTCOMETRANS:
                    let transCategory = document.getElementById("transCategory").value;
                    let transWallet = document.getElementById("transWallet").value;
                    let transAmount = document.getElementById("transAmount").value;
                    if(transCategory.length > 0 && transWallet.length > 0 && transAmount > 0){
                        const savedTransaction = await API.saveTransaction({type: "OUTCOME", category: transCategory, owner: storage.getItem("user")[0].id, wallet: transWallet, amount: transAmount, comment: "..."})
                        document.querySelector(".content").remove();
                        transactionPage.render("OUTCOME");
                    }
                    break;
                case REASONS.ADDINCOMETRANS:
                    let transCategory2 = document.getElementById("transCategory").value;
                    let transWallet2 = document.getElementById("transWallet").value;
                    let transAmount2 = document.getElementById("transAmount").value;
                    if(transCategory2.length > 0 && transWallet2.length > 0 && transAmount2 > 0){
                        const savedTransaction = await API.saveTransaction({type: "INCOME", category: transCategory2, owner: storage.getItem("user")[0].id, wallet: transWallet2, amount: transAmount2, comment: "..."})
                        document.querySelector(".content").remove();
                        transactionPage.render("INCOME");
                    }
                    break;
            }
        }
    }
}