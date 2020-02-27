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

const ProductListPage = props => {
    useEffect(() => {
        props.actions.fetchItems();
    }, []);

    let items = props.items;
    if (props.isHidden) {
        items = items.filter(item => !item.sold);
    }

    return (
        <PageComponent>
            <ControlsComponent
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
};

function mapStateToProps(state) {
    return {
        items: state.list.items,
        isHidden: state.list.isHidden,
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