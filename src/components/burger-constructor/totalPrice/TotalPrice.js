import totalPriceStyles from './TotalPrice.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ORDER_DATA_TYPE } from '../../../utils/types';

export default function TotalPrice({ data }) {
    const totalPriceValue = data.reduce((acc, currentValue) => {
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

TotalPrice.propTypes = ORDER_DATA_TYPE;