import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const ControlsComponent = props => {
    let buttonText = 'Hide Sold Items';
    if (props.isHiddenItems) {
        buttonText = 'Show Sold Items';
    }
    return (
        <header className="controls">
            <div className="controls__title">{props.resultsLength} Results</div>
            <button className="controls__button" disabled={props.isLoading} onClick={props.onHide}>{buttonText}</button>
        </header>
    );
};

ControlsComponent.propTypes = {
    isHiddenItems: PropTypes.bool,
    resultsLength: PropTypes.number,
    onHide: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default ControlsComponent;