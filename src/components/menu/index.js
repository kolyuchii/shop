import React, {useState} from "react";
import './styles.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const MenuComponent = ({ menuItems, onDelete }) => {
    const [isOpened, setIsOpened] = useState(false);
    let items = null;
    if (menuItems && menuItems.length) {
        items = menuItems.map(item => {
            return (
                <li
                    key={item.id}
                    className="dropdown__list-item"
                >
                    {item.title}
                    <span className="dropdown__list-item_delete" onClick={onDelete.bind(null, item.id)} />
                </li>
            );
        });
    }

    function toggleMenu() {
        if (menuItems && menuItems.length) {
            setIsOpened(!isOpened);
        } else {
            setIsOpened(false);
        }
    }

    const dropDownClass = classnames({
        "dropdown__list": true,
        "is-active": isOpened,
    });
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="dropdown__value">
                <span className="dropdown__value_icon" />
                {menuItems ? menuItems.length : 0}
            </div>
            <ul className={dropDownClass}>
                {items}
            </ul>
        </div>
    );
};

MenuComponent.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
};

export default MenuComponent;