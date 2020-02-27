import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const HeaderComponent = props => (
    <header className="header">
        {props.children}
    </header>
);

HeaderComponent.propTypes = {
    children: PropTypes.element,
};

export default HeaderComponent;