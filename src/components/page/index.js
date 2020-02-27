import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const PageComponent = props => (
    <section className="page">
        {props.children}
    </section>
);

PageComponent.propTypes = {
    children: PropTypes.array,
};

export default PageComponent;