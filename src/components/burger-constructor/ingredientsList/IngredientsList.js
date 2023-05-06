
import IngredientsListStyles from './IngredientsList.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function IngredientsList({ constructorData }) {
    return (
        <div className={IngredientsListStyles.container}>
            <ul className={IngredientsListStyles.cardList}>
                {constructorData.map((element) => {
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

IngredientsList.propTypes = {
    constructorData: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string.isRequired,
        "isLocked": PropTypes.bool.isRequired,
        "type": PropTypes.oneOf(["top", "bottom", undefined])
    }))
};