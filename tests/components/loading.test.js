/**
 * Created by liudonghui on 17/9/7.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import Loading from '../../src/components/Loading/index.jsx';

describe('Loading Component', () => {
    test('should has class loading-show', () => {
        const wrapper = shallow(<Loading loading={true}/>);
        expect(wrapper.find('div.loading-show').exists()).toBeTruthy()

    })
    
    test('should has calss loading-hide', () => {
        const wrapper = shallow(<Loading loading={false}/>);
        expect(wrapper.find('div.loading-hide').exists()).toBeTruthy()
    })
})