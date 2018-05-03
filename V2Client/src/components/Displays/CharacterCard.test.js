import React from 'react';
import { shallow, mount } from 'enzyme';

import { CharacterCard } from './CharacterCard';

describe('<CharacterCard/>', () => {
    it('Should render without crashing', () => {
        shallow(<CharacterCard/>);
    });
});