import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const ControlsComponent = props => {
    let buttonText = 'Hide Sold Items';
    if (props.isHidden) {
        buttonText = 'Show Sold Items';
    }
    return (
        <header className="controls">
            <div className="controls__title">{props.resultsLength} Results</div>
            <button className="controls__button" onClick={props.onHide}>{buttonText}</button>
        </header>
    );
};

ControlsComponent.propTypes = {
    isHidden: PropTypes.bool,
    resultsLength: PropTypes.number,
    onHide: PropTypes.func,
};

export default ControlsComponent;