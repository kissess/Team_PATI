import logins from "./logins.module.css";

function FormTitle({text}){
    return(
        <div className={logins.title}>{text}</div>
    );

}

export default FormTitle;