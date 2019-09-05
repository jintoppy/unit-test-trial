import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';
import Util from '../../Util';

describe('<Container />', () => {
    let component;

    beforeEach(() => {
        Util.getContainerTitle = jest.fn(() => {
            return 'This is a container';
        });
        component = shallow(
            <Container />
        );
    });

    it('should render', () => {
        expect(component).toBeDefined();
        expect(component.find('h2').text()).toBe('This is a container');
    });

    it('should render span if active', () => {
        expect(component.find('span')).toHaveLength(0);
        component.setState({
            active: true
        });
        const SpanComponent = component.find('span');
        expect(SpanComponent.text()).toBe('Active Container');
    });

    it('should change active state on onClick', () => {
        expect(component.state().active).toBe(false);
        const componentInstance = component.instance();
        componentInstance.onBtnClick();
        expect(component.state().active).toBe(true);
    });

    it('should change active state on onClick', () => {
        expect(component.state().active).toBe(false);
        const ButtonComponent = component.find('Button');
        ButtonComponent.props().onClick();
        expect(component.state().active).toBe(true);
    });
});