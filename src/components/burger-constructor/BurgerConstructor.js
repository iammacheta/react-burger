
import burgerConstructorStyles from './BurgerConstructor.module.css';
import IngredientsList from './ingredientsList/IngredientsList.js';
import TotalPrice from './totalPrice/TotalPrice';
import constructorData from '../../utils/constructorData';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor() {
    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientsList />
            <div className={burgerConstructorStyles.totalSection}>
                <TotalPrice orderData={constructorData} />
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}