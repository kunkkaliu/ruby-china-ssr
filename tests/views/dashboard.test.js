/**
 * Created by liudonghui on 17/9/8.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { DashboardTest } from '../../src/views/Dashboard/index.jsx';

let wrapper;
let props;

beforeEach( () => {
    props = {
        submit: jest.fn(),
        changeName: jest.fn(),
        name: 'dhl',
        userInfo: {
            nickname: '天下第一帅!',
        },
    };
    wrapper = shallow (
        <DashboardTest {...props}/>
    );
})

describe('Dashboard Component', () => {
    test('should render self and subcomponents', ()=> {
        expect(wrapper.find('.dashboard').exists()).toBeTruthy();
        expect(wrapper.find('form').exists()).toBeTruthy();
        expect(wrapper.find('input').exists()).toBeTruthy();
        expect(wrapper.find('button').exists()).toBeTruthy();
        expect(wrapper.find('h1').text()).toBe('hello world!');
        expect(wrapper.find('.name').text()).toContain('dhl');
        expect(wrapper.find('.nickname').text()).toContain('天下第一帅!');
    })

    test('should call changeName when the input value is changed', ()=> {
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'dhl@_@'
            }
        });
        expect(props.changeName).toBeCalled();
    })

    test('should call submit when button is clicked', ()=> {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(props.submit).toBeCalled();
    })
})