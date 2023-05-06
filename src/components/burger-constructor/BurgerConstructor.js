
import burgerConstructorStyles from './BurgerConstructor.module.css';
import IngredientsList from './ingredientsList/IngredientsList.js';

export default function BurgerConstructor() {
    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientsList />
        </section>
    )
}