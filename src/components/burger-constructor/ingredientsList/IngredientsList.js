
import IngredientsListStyles from './IngredientsList.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { INGREDIENTS_LIST_TYPE } from '../../../utils/types';

export default function IngredientsList({ data }) {
    return (
        <div className={IngredientsListStyles.container}>
            <ul className={IngredientsListStyles.cardList}>
                {data.map((element) => {
                    const additionalText = element.type === "top" ? " (верх)" :
                        element.type === "bottom" ? " (низ)" : "";

                    return (
                        <li key={element._id} className={IngredientsListStyles.item}>
                            {element.isLocked ? <div></div> : <DragIcon type="primary" />}
                            <ConstructorElement
                                type={element.type}
                                isLocked={element.isLocked}
                                text={element.name + additionalText}
                                price={element.price}
                                thumbnail={element.image}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

IngredientsList.propTypes = INGREDIENTS_LIST_TYPE;