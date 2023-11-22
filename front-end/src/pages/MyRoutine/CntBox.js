import Styles from "../../styles/ExerciseSelect.module.css";


function CntBox() {
    // const [value, setValue] = useState(quantity);

    // const handleChangeInput = (e) => {
    //   const newValue = parseInt(e.target.value);

    //   if (isNaN(newValue) || newValue < 1) {
    //     setValue(1);
    //   } else {
    //     setValue(newValue);
    //   }
    // };

    // const handleBlurInput = (e) => {
    //   let newValue = parseInt(e.target.value);

    //   setValue(newValue);
    //   onBlur(newValue);
    // };

    return (
        <div className={Styles.CntBoxGroup}>
            <button className={Styles.MinusBox}
            // type="button"
            // disabled={value===1}
            // aria-label=""
            // onClick={() => onClick(-1)}
            >-</button>


            <div className={Styles.NumBox}>
                <input
                    className={Styles.Cnt}
                // type="number"
                // min={1}
                // max={5}
                // value={value}
                // onChange={handleChangeInput}
                // onBlur={handleBlurInput}
                ></input>
            </div>

            <button className={Styles.PlusBox}
            // type="button"
            // disabled={stock < 1 || stock === value}
            // aria-label=""
            // onClick={() => onClick(1)}
            >+
            </button>

        </div>
    );

}




export default CntBox;