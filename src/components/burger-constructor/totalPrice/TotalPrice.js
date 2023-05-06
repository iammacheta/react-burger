import totalPriceStyles from './TotalPrice.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function TotalPrice({ orderData }) {
    const totalPriceValue = orderData.reduce((acc, currentValue) => {
        return acc += currentValue.price;
    }, 0)

    return (
        <div className={totalPriceStyles.priceContainer}>
            <p className="text text_type_digits-medium">
                {totalPriceValue}
            </p>
            <CurrencyIcon type="primary" className={totalPriceStyles.currencyIcon} />
        </div>
    )
}

TotalPrice.propTypes = {
    constructorData: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string,
        "isLocked": PropTypes.bool,
        "type": PropTypes.oneOf(["top", "bottom", undefined])
    }))
}; 