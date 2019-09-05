import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
    let component;
    let props = {
        onClick: jest.fn()
    };

    beforeEach(() => {
        component = shallow(
            <Button {...props}>
                Hello
            </Button>
        );
    });

    it('should render', () => {
        //console.log(component.debug());
        expect(component).toBeDefined();
        const HeaderComponent = component.find('h3');
        expect(HeaderComponent.text()).toBe('This is My Button');
        const ButtonCopmonent  = component.find('button');
        expect(ButtonCopmonent.text()).toBe('Hello');
    });

    it('should trigger onClick on button click', () => {
        const ButtonCopmonent  = component.find('button');
        ButtonCopmonent.simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
    
});