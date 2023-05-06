import totalPriceStyles from './TotalPrice.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

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