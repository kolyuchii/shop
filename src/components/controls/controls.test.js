import React from "react";
// eslint-disable-next-line no-unused-vars
import setupTests from "../../setupTests";
import { shallow } from "enzyme";
import ControlsComponent from "./index";

describe('ControlsComponent', () => {
    it('Render results', () => {
        const wrapper = shallow(
            <ControlsComponent
                isHiddenItems={false}
                resultsLength={2}
                onHide={jest.fn}
            />
        );

        expect(wrapper.find('.controls__title').text()).toBe('2 Results');
    });

    it('Render and click button', () => {
        const onHide = jest.fn();
        const wrapper = shallow(
            <ControlsComponent
                isHiddenItems={true}
                onHide={onHide}
            />
        );
        const button = wrapper.find('.controls__button');
        expect(button.text()).toBe('Show Sold Items');

        button.simulate('click');
        expect(onHide).toHaveBeenCalledTimes(1);
    });
});