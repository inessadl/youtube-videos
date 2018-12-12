import { mount } from 'enzyme';
import React from 'react';
import SimpleAppBar from './AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const component = mount(<SimpleAppBar />);

it('should render an AppBar component', () => {
    expect(component.contains(AppBar));
});

it('should render a Toolbar component', () => {
    expect(component.contains(Toolbar))
});

it('should render a Typography component', () => {
    expect(component.contains(Typography));
});

it('should have inner text "Youtube Videos"', () => {
    expect(component.text()).toBe('Youtube Videos');
});