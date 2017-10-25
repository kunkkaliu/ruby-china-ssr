/**
 * Created by liudonghui on 17/9/9.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { AppTest } from '../../src/views/App/index.jsx';

let wrapper;
let props;

beforeEach( () => {
    props = {
        children: <p>hello world!</p>,
        httpLength: 1
    };
    wrapper = shallow (
        <AppTest {...props}/>
    );
});

describe('App Component', () => {
    test('should render self and subcomponents', ()=> {
        expect(wrapper.find('.app').exists()).toBeTruthy();
        expect(wrapper.find('p').text()).toBe('hello world!');
        expect(wrapper.find('Footer').exists()).toBeTruthy();
        expect(wrapper.find('Loading').exists()).toBeTruthy();
        const loadingProps = wrapper.find('Loading').props();
        expect(loadingProps.loading).toBe(true);
    })
})