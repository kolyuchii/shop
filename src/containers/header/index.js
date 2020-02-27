import React from "react";
import HeaderComponent from "components/header";
import MenuComponent from "components/menu";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {
    toggleFavourite,
} from 'store/list';
import {bindActionCreators} from "redux";

const HeaderContainer = props => {
    const menuItems = props.items && props.items.filter(item => {
        return props.favourite[item.id];
    });
    return (
        <HeaderComponent>
            <MenuComponent
                menuItems={menuItems}
                onDelete={props.actions.toggleFavourite}
            />
        </HeaderComponent>
    );
};

HeaderContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    favourite: PropTypes.object,
    actions: PropTypes.shape({
        toggleFavourite: PropTypes.func,
    }),
};

function mapStateToProps(state) {
    return {
        favourite: state.list.favourite,
        items: state.list.items,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            toggleFavourite,
        }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderContainer)