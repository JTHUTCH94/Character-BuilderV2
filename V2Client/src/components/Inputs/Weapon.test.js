import React from 'react';
import { shallow, mount } from 'enzyme';
import { Weapon } from './Weapon';

describe('Race', () => {
    it('Should render without crashing', () => {
        mount(<Weapon/>);
    });

    it('Should render a radio group initially', () => {
        const wrapper = mount(<Weapon/>);
        wrapper.find('radio').forEach(radio => {
            expect(radio).hasClass('choice').toEqual(true)})
    });

    it('Triggers an onChange event', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Weapon onChange={dispatch} />);
        wrapper.find('radio').forEach(radio => {
            radio.simulate('change', {preventDefault(){}});
            expect(dispatch).toHaveBeenCalled();
        });
    });

});