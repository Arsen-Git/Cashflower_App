import navBar from "./components/navBar.js";
import loginPage from "./components/loginPage.js";
import { storage } from "./utils.js";
import navTabs from "./components/navTabs.js";
import walletPage from "./components/walletPage.js";

navBar.render();
if(!storage.getItem("user")){
    loginPage.render();
}else{
    navTabs.render();
    walletPage.render();
}