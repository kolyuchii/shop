import React from "react";
import ListComponent from "components/list";
import ItemComponent from 'components/item';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {
    toggleFavourite,
} from 'store/list';

export const ListContainer = props => {
    const items = props.items && props.items.map(item => {
        return (
            <ItemComponent
                key={item.id}
                item={item}
                toggleFav={props.actions.toggleFavourite.bind(null, item.id)}
                onOpenItem={props.onOpenItem}
                isFavourite={props.favourite[item.id]}
            />
        )
    });
    return (
        <ListComponent
            isLoading={props.isLoading}
            items={items}
        />
    );
};

ListContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.object,
    onOpenItem: PropTypes.func,
    favourite: PropTypes.object,
    isLoading: PropTypes.bool,
};

function mapStateToProps(state) {
    return {
        favourite: state.list.favourite,
        isLoading: state.list.isLoading,
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
    mapDispatchToProps
)(ListContainer)