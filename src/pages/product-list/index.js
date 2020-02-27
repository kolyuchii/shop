import React, {useEffect} from 'react';
import PageComponent from 'components/page';
import ControlsComponent from "components/controls";
import ListContainer from 'containers/list';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    fetchItems,
    hideItems,
} from 'store/list';

// This is a main entity.
// Here is a good place to send some requests (like fetch product items)

const ProductListPage = props => {

    // Fetching the list of items
    // Since there is no API some pagination stuff was not implemented here
    useEffect(() => {
        props.actions.fetchItems();
    }, []);

    let items = props.items;
    if (props.isHiddenItems) {
        items = items.filter(item => !item.sold);
    }

    return (
        <PageComponent>
            <ControlsComponent
                isLoading={props.isLoading}
                isHidden={props.isHidden}
                resultsLength={items && items.length}
                onHide={props.actions.hideItems}
            />
            <ListContainer
                items={items}
            />
        </PageComponent>
    );
};

ProductListPage.propTypes = {
    isHidden: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.object,
    isLoading: PropTypes.bool,
};

function mapStateToProps(state) {
    return {
        items: state.list.items,
        isHiddenItems: state.list.isHiddenItems,
        isLoading: state.list.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchItems,
            hideItems,
        }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListPage)