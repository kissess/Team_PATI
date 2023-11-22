import { insertItem } from "pages/store/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetail(){
    let dispatch = useDispatch();

    return(
        <Button
                  name={'장바구니'}
                //   className={style.sale}
                  onClick={() => {
                    dispatch(
                      insertItem({
                        id: products.id,
                        isSoldOut: false,
                        price: products.price,
                        thumbnail: products.thumbnail,
                        title: products.title,
                        count: count,
                        checked: true,
                      })
                    );
                    setModal(true);
                  }}
                />
    )
}