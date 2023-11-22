import logins from "./logins.module.css";

function Logo({text}){
    return(
        <div className={logins.logo}>{text}</div>
    )
};

export default Logo;