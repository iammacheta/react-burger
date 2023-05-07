import PropTypes from 'prop-types';

const INGREDIENTS_LIST_TYPE = {
    data: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string.isRequired,
        "isLocked": PropTypes.bool.isRequired,
        "type": PropTypes.oneOf(["top", "bottom", undefined])
    }))
};

const ORDER_DATA_TYPE = {
    orderData: PropTypes.arrayOf(PropTypes.shape({
        "price": PropTypes.number.isRequired,
    }))
};

const INGREDIENTS_CARD_TYPE = {
    image: PropTypes.string.isRequired,
    count: PropTypes.number,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

const PRODUCT_LIST_TYPE = {
    data: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "price": PropTypes.number.isRequired,
        "image_large": PropTypes.string.isRequired,
        "type": PropTypes.oneOf(["bun", "sauce", "main"])
    })),
    title: PropTypes.string,
    type: PropTypes.string
};

export { INGREDIENTS_LIST_TYPE, ORDER_DATA_TYPE, INGREDIENTS_CARD_TYPE, PRODUCT_LIST_TYPE };