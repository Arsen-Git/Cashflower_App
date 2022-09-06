import API from "../API.js"
import {cleanPage, storage} from "../utils.js"
import walletPage from "./walletPage.js"

export default{
    html:{
        content:`
        <div class="modal">
            <form class="modal__content">
                <input
                  class="form__input"
                  type="text"
                  name="walletName"
                  id="name"
                  placeholder="Введіть назву..."
                />
                <input
                  class="form__input"
                  type="text"
                  name="ballance"
                  id="ballance"
                  placeholder="Введіть баланс..."
                />
                <button class="form__submit" type="submit" id="addWallet">Підтверджую</button>
            </form>
        </div>`},
    render(parent = document.querySelector(".content")){
        parent.insertAdjacentHTML("beforeend",this.html.content);
        const submitBtn = document.getElementById("addWallet");
        submitBtn.onclick = async e =>{
            e.preventDefault();
            const walletName = document.getElementById("name").value;
            const walletBallance = document.getElementById("ballance").value;
            if(walletName.length > 0 && walletBallance.length > 0){
                const savedWallet = await API.saveWallet({name:walletName, owner: storage.getItem("user")[0].id, balance: walletBallance})
                document.querySelector(".content").remove();
                walletPage.render();
            }
        }
    }
}