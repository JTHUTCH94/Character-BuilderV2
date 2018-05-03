import React from 'react';
import { mount } from 'enzyme';
import { TopNav } from './TopNav';
import { createForm, getCharactersAction } from '../../actions';

describe('TopNav', () => {
    it('Should render without crashing', () => {
        mount(<TopNav/>);
    });

    it('Dispatches the createForm action', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.create-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(createForm());
    });

    it('Dispatches the getCharactersAction', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.show-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(getCharactersAction());
    });
});