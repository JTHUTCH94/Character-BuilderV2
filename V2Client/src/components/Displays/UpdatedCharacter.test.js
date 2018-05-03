import React from 'react';
import { shallow, mount } from 'enzyme';

import { UpdatedCharacter } from './UpdatedCharacter';

describe('<UpdatedCharacter/>', () => {
    it('Should render without crashing', () => {
        shallow(<UpdatedCharacter/>);
    });
});