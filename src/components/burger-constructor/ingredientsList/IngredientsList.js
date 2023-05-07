
import IngredientsListStyles from './IngredientsList.module.css';
import { INGREDIENTS_LIST_TYPE } from '../../../utils/types';
import ListItems from './list-items/ListItems';

export default function IngredientsList({ data }) {

    return (
        <>
            <ul className={IngredientsListStyles.bun}>
                <ListItems data={data} ingredientType={'top'} />
            </ul>
            <div className={IngredientsListStyles.container}>
                <ul className={IngredientsListStyles.cardList}>
                    <ListItems data={data} />
                </ul>
            </div>
            <ul className={IngredientsListStyles.bun}>
                <ListItems data={data} ingredientType={'bottom'} />
            </ul>
        </>
    )
}

IngredientsList.propTypes = INGREDIENTS_LIST_TYPE;