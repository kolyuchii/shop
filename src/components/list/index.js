import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const ListComponent= props => {
    if (props.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }
    return (
        <div className="list">
            {props.items}
        </div>
    );
};

ListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
};

export default ListComponent;