import React from 'react';
import { shallow } from 'enzyme';
import AuthNav from './AuthNav';

const setUp = (props={}) => {
    const component = shallow(<AuthNav {...props} />)
    return component;
}

describe('AuthNav Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    test('renders without crashing', () => {
      const wrapper =component.find(`[data-test='AuthNav__Component']`);
      expect(wrapper.length).toBe(1);

    });

    test('renders login button', () => {
        const wrapper =component.find('.btn__login');
        expect(wrapper.length).toBe(1);
    })

    test('renders signup button', () => {
        const wrapper =component.find('.btn__signup');
        expect(wrapper.length).toBe(1);
    })
});
