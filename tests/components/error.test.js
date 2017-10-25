/**
 * Created by liudonghui on 17/9/8.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import Error from '../../src/components/Error/index.jsx';

describe('Error Component', () => {
    test('没有错误信息时应该打印"404 Not Found"', () => {
        const wrapper = shallow(<Error errorMsg=''/>);
        expect(wrapper.find('div.not-found').html()).toContain('<h1>404 Not Found</h1>');
    })
    
    test('有错误信息时应该打印错误信息', () => {
        const wrapper = shallow(<Error errorMsg="this is a test!"/>);
        expect(wrapper.find('div.not-found').html()).toContain('<h1>this is a test!</h1>');
    })
})