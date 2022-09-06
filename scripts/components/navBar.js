import {cleanPage, storage} from "../utils.js";
import loginPage from "./loginPage.js";

export default {
    elements:{
        link: document.createElement("a"),
        registrationLink: document.createElement("a")
    },
    html: {
        navigation: `
        <section class="nav">
        <div class="nav__container">
          <h2 class="nav__logo">CASHFLOWER</h2>
          <div class="nav__account">
            <figure class="nav__account__img">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 28.5C22.4557 28.5 28.5 22.4557 28.5 15C28.5 7.54425 22.4557 1.5 15 1.5C7.54425 1.5 1.5 7.54425 1.5 15C1.5 22.4557 7.54425 28.5 15 28.5ZM15 30C23.2845 30 30 23.2845 30 15C30 6.7155 23.2845 0 15 0C6.7155 0 0 6.7155 0 15C0 23.2845 6.7155 30 15 30Z"
                  fill="white"
                />
                <path
                  d="M6 23.7225C6 22.9478 6.579 22.293 7.35 22.2075C13.1362 21.567 16.89 21.6248 22.6635 22.2218C22.9518 22.252 23.2251 22.3656 23.4499 22.5486C23.6747 22.7317 23.8414 22.9762 23.9295 23.2524C24.0176 23.5285 24.0234 23.8244 23.9462 24.1038C23.8689 24.3832 23.712 24.6341 23.4945 24.8258C16.6807 30.765 12.7867 30.6833 6.48 24.8318C6.1725 24.5468 6 24.1418 6 23.7233V23.7225Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5863 22.9673C16.8585 22.3748 13.1588 22.3193 7.43175 22.953C7.24324 22.975 7.06945 23.0657 6.94365 23.2078C6.81786 23.35 6.74891 23.5335 6.75 23.7233C6.75 23.9378 6.83925 24.141 6.99 24.282C10.116 27.1815 12.4845 28.4918 14.7998 28.5C17.1233 28.5083 19.6193 27.2085 23.0018 24.261C23.1092 24.1654 23.1866 24.0406 23.2244 23.9018C23.2623 23.763 23.259 23.6162 23.215 23.4792C23.171 23.3423 23.0881 23.221 22.9765 23.1303C22.8649 23.0395 22.7293 22.9832 22.5863 22.968V22.9673ZM7.2675 21.462C13.1145 20.8148 16.923 20.8733 22.7415 21.4755C23.1752 21.5208 23.5863 21.6915 23.9245 21.9669C24.2627 22.2422 24.5133 22.6101 24.6455 23.0257C24.7778 23.4412 24.7861 23.8863 24.6693 24.3065C24.5525 24.7266 24.3157 25.1036 23.988 25.3913C20.5568 28.3823 17.6993 30.0113 14.7953 30C11.883 29.9895 9.1515 28.3328 5.97075 25.3815C5.74302 25.1694 5.56147 24.9126 5.43746 24.6271C5.31345 24.3417 5.24963 24.0337 5.25 23.7225C5.24891 23.1633 5.45416 22.6234 5.82643 22.2062C6.1987 21.7889 6.71182 21.5237 7.2675 21.4613V21.462Z"
                  fill="white"
                />
                <path
                  d="M21 12C21 13.5913 20.3679 15.1174 19.2426 16.2426C18.1174 17.3679 16.5913 18 15 18C13.4087 18 11.8826 17.3679 10.7574 16.2426C9.63214 15.1174 9 13.5913 9 12C9 10.4087 9.63214 8.88258 10.7574 7.75736C11.8826 6.63214 13.4087 6 15 6C16.5913 6 18.1174 6.63214 19.2426 7.75736C20.3679 8.88258 21 10.4087 21 12Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 16.5C16.1935 16.5 17.3381 16.0259 18.182 15.182C19.0259 14.3381 19.5 13.1935 19.5 12C19.5 10.8065 19.0259 9.66193 18.182 8.81802C17.3381 7.97411 16.1935 7.5 15 7.5C13.8065 7.5 12.6619 7.97411 11.818 8.81802C10.9741 9.66193 10.5 10.8065 10.5 12C10.5 13.1935 10.9741 14.3381 11.818 15.182C12.6619 16.0259 13.8065 16.5 15 16.5ZM15 18C16.5913 18 18.1174 17.3679 19.2426 16.2426C20.3679 15.1174 21 13.5913 21 12C21 10.4087 20.3679 8.88258 19.2426 7.75736C18.1174 6.63214 16.5913 6 15 6C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 13.5913 9.63214 15.1174 10.7574 16.2426C11.8826 17.3679 13.4087 18 15 18Z"
                  fill="white"
                />
              </svg>
            </figure>
          </div>
        </div>
      </section>`
    },

    render(parent = document.body) {
        const {link, registrationLink} = this.elements;
        link.classList.add("nav__account__link");
        link.textContent = this.setLinkText();
        link.href = "#";

        parent.insertAdjacentHTML("afterbegin", this.html.navigation);

        if(!storage.getItem("user")){
          registrationLink.classList.add("nav__account__link");
          registrationLink.textContent = "Sign in";
          registrationLink.href = "#";
          document.querySelector(".nav__logo").insertAdjacentElement("afterend", registrationLink);
          registrationLink.onclick = ()=>{
            storage.setItem("newUser", "true")
            cleanPage();
            this.render();
            loginPage.render();
          }
        }    

        document.querySelector(".nav__account").insertAdjacentElement("afterbegin", link);
        link.onclick =  (e)=>{
          if(storage.getItem("user")){
            storage.deleteItem("user");
            cleanPage();
            this.render();
            loginPage.render();
          }else{
            storage.deleteItem("newUser");
            cleanPage();
            this.render();
            loginPage.render();
          }
        }
    },
    setLinkText(){
      return storage.getItem("user") ? "Log out" : "Log in";
    }
}