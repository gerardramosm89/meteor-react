import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import PrivateHeader from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function() {

    it('should set butotn text to logout', function() {
      const wrapper = mount( <PrivateHeader /> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should return Protected Resources header', function() {
      const title = 'Protected Resources';
      const wrapper = mount( <PrivateHeader /> );
      
      expect(wrapper.find('h1').text()).toBe(title);
    });

  });
}