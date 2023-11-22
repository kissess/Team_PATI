import logins from "./logins.module.css";

function Buttons({text}){
    return(
        <button className={logins.btn}>{text}</button>
    )
};


export default Buttons;