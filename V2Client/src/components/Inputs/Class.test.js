import React from 'react';
import { shallow, mount } from 'enzyme';
import { setClassification } from '../../actions';
import { Class } from './Class';

describe('Class', () => {
    it('Should render without crashing', () => {
        mount(<Class/>);
    });

    it('Should render a radio group initially', () => {
        const wrapper = mount(<Class/>);
        wrapper.find('radio').forEach(radio => {
            expect(radio).hasClass('choice').toEqual(true)})
    });

    it('Triggers an onChange event', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Class onChange={dispatch} />);
        wrapper.find('radio').forEach(radio => {
            radio.simulate('change', {preventDefault(){}});
            expect(dispatch).toHaveBeenCalled();
        });
    });

});