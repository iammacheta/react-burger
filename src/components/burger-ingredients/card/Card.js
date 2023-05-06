import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './Card.module.css';
import PropTypes from 'prop-types';

export default function Card({ image, count, price, name }) {
    return (
        <div className={cardStyles.card}>
            <Counter count={1} size="default" extraClass={cardStyles.counter + " m-1"} />
            <img src={image} alt='карточка' className={cardStyles.image} />
            <div className={cardStyles.priceSection}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={cardStyles.name + " text text_type_main-default"}>
                {name}
            </p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    count: PropTypes.number,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}