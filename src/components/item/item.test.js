import React from "react";
// eslint-disable-next-line no-unused-vars
import setupTests from "../../setupTests";
import { shallow } from "enzyme";
import ItemComponent from "./index";

describe('ItemComponent', () => {
    it('Render item', () => {
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
        expect(wrapper.find('.item__sold-blocker').length).toBe(1);
        expect(wrapper.find('.item__fav').hasClass('is-favourite')).toBe(true);
    });
});