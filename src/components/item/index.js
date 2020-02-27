import React from "react";
import './styles.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ItemComponent = props => {
    const {
        img,
        title,
        description,
        price,
        brand,
        size,
        sold,
        id,
    } = props.item;

    const imageClass = classnames({
        "is-sold": sold,
        "item__picture": true,
    });
    const favClass = classnames({
        "item__fav": true,
        "is-favourite": props.isFavourite,
    });

    return (
        <article data-id={id} className="item" onClick={props.onOpenItem}>
            <picture className={imageClass}>
                <img className="item__image" src={img} alt={`${description} from ${brand}`}/>
                {sold ? (
                    <div className="item__sold-blocker">SOLD</div>
                ) : null}
                <div onClick={props.toggleFav} className={favClass} />
            </picture>
            <ul className="item__info">
                <li className="item__info-line">Name: {title}</li>
                <li className="item__info-line">Brand: {brand}</li>
                <li className="item__info-line">Size: {size}</li>
                <li className="item__info-line"><b>Price: {price}</b></li>
            </ul>
        </article>
    );
};

ItemComponent.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        brand: PropTypes.string,
        size: PropTypes.string,
        sold: PropTypes.bool,
        id: PropTypes.number,
    }),
    isFavourite: PropTypes.bool,
    onOpenItem: PropTypes.func,
    toggleFav: PropTypes.func,
};

export default ItemComponent;