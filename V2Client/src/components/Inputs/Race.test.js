import React from 'react';
import { shallow, mount } from 'enzyme';
import { setRace } from '../../actions';
import { Race } from './Race';

describe('Race', () => {
    it('Should render without crashing', () => {
        mount(<Race/>);
    });

    it('Should render a radio group initially', () => {
        const wrapper = mount(<Race/>);
        wrapper.find('radio').forEach(radio => {
            expect(radio).hasClass('choice').toEqual(true)})
    });

    it('Triggers an onChange event', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Race onChange={dispatch} />);
        wrapper.find('radio').forEach(radio => {
            radio.simulate('change', {preventDefault(){}});
            expect(dispatch).toHaveBeenCalled();
        });
    });

});