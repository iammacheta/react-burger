import burgerIngredientsStyles from './BurgerIngredients.module.css';
import ProductsList from './productsList/ProductsList';
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


export default function BurgerIngredients() {
    const [current, setCurrent] = useState('bun')

    return (
        <section className={burgerIngredientsStyles.burgerIngredients}>
            <p className={burgerIngredientsStyles.title + " text text_type_main-large"}>
                Соберите бургер
            </p>
            <div className={burgerIngredientsStyles.tabs}>
                <Tab value="one" active={current === 'bun'} onClick={() => { setCurrent('bun') }}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'sauce'} onClick={() => { setCurrent('sauce') }}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'main'} onClick={() => { setCurrent('main') }}>
                    Начинки
                </Tab>
            </div>
            {current === 'bun' ? <ProductsList title={"Булки"} type={"bun"} />
                : current === "sauce" ? <ProductsList title={"Соусы"} type={"sauce"} />
                    : <ProductsList title={"Начинки"} type={"main"} />
            }
        </section>
    )
}