import {cleanPage, storage} from "../utils.js";
import API from "../API.js";
import navBar from "./navBar.js"
import navTabs from "./navTabs.js";
import walletPage from "./walletPage.js";

export default {
    elements:{
        formTitle: document.createElement("h2"),
        passwordConfirmationInput: document.createElement("input"),
        formBtn: document.createElement("button")
    },
    html:{
        content: `
        <section class="loginPage">
        <div class="leftSide"></div>
        <div class="rightSide">
          <form action="#" class="form">
            <input class="form__input" type="text" name="login" id="login" placeholder= "Ваш логін"/>
            <input class="form__input" type="password" name="passwodr" id="password" placeholder="Пароль"/>
          </form>
        </div>
      </section>`
    },
    render(parent = document.querySelector(".nav")){
        const {formTitle,formBtn,passwordConfirmationInput} = this.elements;
        formTitle.classList.add("form__title");
        formTitle.textContent = this.setFormTitle();

        formBtn.classList.add("form__submit");
        formBtn.type = "submit";
        formBtn.textContent = this.setFormBtn();

        parent.insertAdjacentHTML("afterend", this.html.content);
        document.querySelector(".form").insertAdjacentElement("afterbegin", formTitle);
        if(storage.getItem("newUser")){
            passwordConfirmationInput.classList.add("form__input");
            passwordConfirmationInput.setAttribute("id", "password2");
            passwordConfirmationInput.placeholder = "Підтвердіть пароль";
            passwordConfirmationInput.type = "password";
            passwordConfirmationInput.value = null;
            document.getElementById("password").insertAdjacentElement("afterend", passwordConfirmationInput);
        }
        document.querySelector(".form").insertAdjacentElement("beforeend", formBtn);

        formBtn.onclick = e => this.loginSubmit(e);
    },
    setFormTitle(){
        return storage.getItem("newUser")? "Sign in" : "Log in";
    },
    setFormBtn(){
        return storage.getItem("newUser")? "Зареєструватися" : "Увійти";
    },
    async loginSubmit(e){
        e.preventDefault();

        const loginValue = document.getElementById("login").value;
        const passwordValue = document.getElementById("password").value;
        const title = document.querySelector(".form__title");
        if(loginValue.length > 0 && passwordValue.length > 0){
            if(!storage.getItem("newUser")){
                const user = await API.getUser(loginValue,passwordValue);
                if(user.length > 0){
                    storage.setItem("user", user);
                    cleanPage();
                    navBar.render();
                    navTabs.render();
                    walletPage.render();
                }else{
                    title.textContent = "Не знайдено користувача за поданим ім'ям та паролем!";
                    title.style.color = "red";
                }
            }else{
                const passwordConfirmationValue = document.getElementById("password2").value;
                if(passwordConfirmationValue == passwordValue){
                    const user = await API.registerNewUser({name:loginValue,password:passwordValue});
                    if(user){
                        storage.deleteItem("newUser");
                        cleanPage();
                        navBar.render();
                        this.render();
                    }
                }else{
                    title.textContent = "Паролі не співпадають!";
                    title.style.color = "red";
                }
            }
        }else{
            title.textContent = "Введіть всі потрібні дані!";
            title.style.color = "red";
        }
    }
}