import Button from '../../Forms/Button/Button';

import styles from './subTotal.module.scss';

const SubTotal = ({selectedGamesArr}) => {
  let total = 0;
  selectedGamesArr.forEach(item => {
    total += item.price;
  });

  return (
    <div className={`content ${styles.subTotal}`}>
      <h2>SUBTOTAL</h2>
      <div className={styles.content}>
        <span>{total}$</span>
        <Button type='primary'>CHECKOUT</Button>
      </div>
    </div>
  )
}

export default SubTotal