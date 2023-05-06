import productsListStyles from './ProductsList.module.css';
import Card from '../card/Card';
import PropTypes from 'prop-types';

export default function ProductsList({ data, title, type }) {
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

ProductsList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string,
        "isLocked": PropTypes.bool,
        "type": PropTypes.oneOf(["top", "bottom", undefined])
    })),
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["sauce", "bun", "main"]).isRequired
}