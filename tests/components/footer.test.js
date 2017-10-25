/**
 * Created by liudonghui on 17/9/7.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import Footer from '../../src/components/Footer/index.jsx';

describe('Footer Component', () => {
    it('should render dom', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div').text()).toContain('xx 版权所有 © 2017 xx.com');
    })
})

// describe('Footer Snapshot Testing', () => {
//     it('should render dom"', () => {
//         const component = ReactTestRenderer.create(<Footer />);
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     })
// })