import navBar from "./components/navBar.js";
import loginPage from "./components/loginPage.js";
import { storage } from "./utils.js";

navBar.render();
if(!storage.getItem("user")){
    loginPage.render();
}