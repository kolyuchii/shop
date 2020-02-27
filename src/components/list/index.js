import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const ListComponent= props => (
    <div className="list">
        {props.items}
    </div>
);

ListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default ListComponent;