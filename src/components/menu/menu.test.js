import React from "react";
// eslint-disable-next-line no-unused-vars
import setupTests from "../../setupTests";
import { shallow } from "enzyme";
import MenuComponent from "./index";

describe('MenuComponent', () => {
    it('Render menu', () => {
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
        const dropdownValue = wrapper.find('.dropdown__value');
        expect(dropdownListItems.length).toBe(items.length);
        expect(dropdownValue.text()).toBe(String(items.length));
    });
});