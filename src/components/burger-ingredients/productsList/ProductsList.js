import productsListStyles from './ProductsList.module.css';
import Card from '../card/Card';
import data from '../../../utils/data';

export default function ProductsList({ title, type }) {
    return (
        <div className={productsListStyles.container}>
            <p className="text text_type_main-medium">
                {title}
            </p>
            <ul className={productsListStyles.cardList}>
                {data.map((element) => {
                    if (element.type === type) {
                        return (
                            <li key={element._id}>
                                <Card image={element.image_large} count={0} price={element.price} name={element.name} />
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}