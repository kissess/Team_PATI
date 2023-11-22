import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { BiArchive } from "react-icons/bi";
import styles from './product.module.css';
// import Pagination from 'components/pagination/pagination';



const cx = classNames.bind(styles);

const Exercise = props => {
    const { name, url, cart, handleAddOrRemove } = props;
    const cartIcon = useMemo(() => <BiArchive size="24" />, []);
  
    return (
      <li className={cx('item')}>
        <div>
          <img className={cx('img')} src={url} alt={name} />
          <span className={cx('name')}>{name}</span>
          <button
            className={cx('button', { cart })}
            onClick={() => handleAddOrRemove(props)}
          >
            {cartIcon}
            {cart ? <span>빼기</span> : <span>담기</span>}
          </button>
        </div>
      </li>
    );
  };
  
  export default React.memo(Exercise);