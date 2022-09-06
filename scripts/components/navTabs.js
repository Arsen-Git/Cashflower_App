import modal from "./modal";

export default {
    html:{
        content: `
        <section class="tabs">
            <div class="tabs__content">
                <button class="tabs__btn tabs__btn-active" id="wallets">Гаманці</button>
                <button class="tabs__btn" id="outcomes">Усі витрати</button>
                <button class="tabs__btn" id="incomes">Усі надходження</button>
                <button class="tabs__btn" id="categories">Категорії</button>
                <div class="tabs__modalBtn">
                <div class="tabs__modalBtn__line"></div>
                <div class="tabs__modalBtn__line"></div>
              </div>
            </div>
        </section>`
    },
    render(parent = document.querySelector(".nav")){
        parent.insertAdjacentHTML("beforeend", this.html.content)
        btns = document.querySelectorAll(".tabs__btn");
        document.querySelector(".tabs__content").onclick = e => {
            if(e.target.className == "tabs__btn"){
                btns.forEach(btn=>{
                    btn.classList.remove("tabs__btn-active")
                })
                e.target.classList.add("tabs__btn-active")
            }else if(e.target.className == "tabs__modalBtn"){
                modal.render();
            }
        }
    }
}