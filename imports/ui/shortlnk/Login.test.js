import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Login } from './Login';

if (Meteor.isClient) {
  describe('Login Component', function() {
    it('should show error messages', function() {
      const err = 'this isnt working';

      const wrapper = mount( <Login loginWithPassword={() => {}} />);

      wrapper.setState({
        error: err
      });
      expect(wrapper.find('#error').text()).toBe(err);

      wrapper.setState({error: ''});
      expect(wrapper.find('#error').length).toBe(0);
    });
  });
}