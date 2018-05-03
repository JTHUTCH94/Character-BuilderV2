import React from 'react';
import { shallow, mount } from 'enzyme';
import { setName } from '../../actions';
import { Name } from './Name';

describe('<Name/>', () => {
    it('Should render without crashing', () => {
        shallow(<Name/>);
    });

    it('Should render a text input initially', () => {
        const wrapper = mount(<Name/>);
        expect(wrapper.find('input').hasClass('name')).toEqual(true);
    });

    it('Triggers an onInput event', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Name onInput={dispatch} />);
        wrapper.find('input').simulate('input', {preventDefault(){}});
        expect(dispatch).toHaveBeenCalled();
    });

});