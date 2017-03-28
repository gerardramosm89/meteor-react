import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { PrivateHeader } from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function() {

    it('should set butotn text to logout', function() {
      const wrapper = mount( <PrivateHeader /> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should return "Dashboard" header', function() {
      const title = 'Dashboard';
      const wrapper = mount( <PrivateHeader /> );

      expect(wrapper.find('h1').text()).toBe(title);
    });

    it('should call the function', function() {
      const spy = expect.createSpy();
      // spy(3,4,1);5
      expect(spy).toNotHaveBeenCalled();
    });

    it('should call onLogout on click', function() {
      const spy = expect.createSpy();

      const wrapper = mount( <PrivateHeader onLogout={spy} /> );

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });

  });
}