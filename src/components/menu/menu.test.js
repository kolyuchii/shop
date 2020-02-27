import React from "react";
// eslint-disable-next-line no-unused-vars
import setupTests from "../../setupTests";
import { shallow } from "enzyme";
import MenuComponent from "./index";

describe('MenuComponent', () => {
    it('Render amount of items', () => {
        const items = [{
            title: 'hello',
            id: 1,
        }];
        const wrapper = shallow(
            <MenuComponent
                menuItems={items}
                onDelete={jest.fn()}
            />
        );
        expect(wrapper.find('.dropdown__value').text()).toBe(String(items.length));
    });

    it('Render dropdown list', () => {
        const items = [{
            title: 'hello',
            id: 1,
        }];
        const wrapper = shallow(
            <MenuComponent
                menuItems={items}
                onDelete={jest.fn()}
            />
        );
        const dropdownListItems = wrapper.find('.dropdown__list-item');
        expect(dropdownListItems.length).toBe(items.length);
    });
});