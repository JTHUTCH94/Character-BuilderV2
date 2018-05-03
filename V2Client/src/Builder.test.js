import React from 'react';
import { mount } from 'enzyme';

import { Builder } from './Builder';

describe('Builder', () => {
    it('Should render without crashing', () => {
        mount(<Builder/>);
    });
});