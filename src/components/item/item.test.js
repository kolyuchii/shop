import React from "react";
// eslint-disable-next-line no-unused-vars
import setupTests from "../../setupTests";
import { shallow } from "enzyme";
import ItemComponent from "./index";

describe('ItemComponent', () => {
    it('Add to favourite', () => {
        const toggleFav = jest.fn();
        const wrapper = shallow(
            <ItemComponent
                item={{
                    sold: true,
                }}
                isFavourite={true}
                toggleFav={toggleFav}
            />
        );
        const favButton = wrapper.find('.item__fav');
        favButton.simulate('click');
        expect(toggleFav).toHaveBeenCalledTimes(1);
        expect(wrapper.find('.item__fav').hasClass('is-favourite')).toBe(true);
    });

    it('Render normal item', () => {
        const wrapper = shallow(
            <ItemComponent
                item={{
                    sold: false,
                }}
            />
        );
        expect(wrapper.find('.item__sold-blocker').length).toBe(0);
    });

    it('Render sold item', () => {
        const wrapper = shallow(
            <ItemComponent
                item={{
                    sold: true,
                }}
            />
        );
        expect(wrapper.find('.item__sold-blocker').length).toBe(1);
    });
});