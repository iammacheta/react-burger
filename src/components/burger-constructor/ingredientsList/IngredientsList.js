
import IngredientsListStyles from './IngredientsList.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorData from '../../../utils/constructorData';

export default function IngredientsList() {
    return (
        <div className={IngredientsListStyles.container}>
            <ul className={IngredientsListStyles.cardList}>
                {constructorData.map((element) => {
                    return (
                        <li key={element._id} className={IngredientsListStyles.item}>
                            {element.isLocked ? <div></div> : <DragIcon type="primary" />}
                            <ConstructorElement
                                type={element.type}
                                isLocked={element.isLocked}
                                text={element.name}
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