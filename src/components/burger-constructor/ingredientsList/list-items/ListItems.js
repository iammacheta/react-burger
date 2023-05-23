import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import listItemsStyles from './ListItems.module.css';
import { LIST_ITEMS_TYPE } from '../../../../utils/types';

export default function ListItems({ data, ingredientType }) {
    return (
        data.map((element) => {
            const additionalText = element.type === "top" ? " (верх)" :
                element.type === "bottom" ? " (низ)" : "";
            const isBun = element.type === "top" || element.type === "bottom";

            if (element.type === ingredientType) {
                return (
                    <li key={element._id} className={listItemsStyles.item}>
                        {element.isBun ?
                            <DragIcon type="primary" /> : <div></div>}
                        <ConstructorElement
                            type={element.type}
                            isLocked={isBun}
                            text={element.name + additionalText}
                            price={element.price}
                            thumbnail={element.image}
                        />
                    </li>
                )
            }
        })
    )
}

ListItems.propTypes = LIST_ITEMS_TYPE;