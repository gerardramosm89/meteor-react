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

    it('should call loginWithPassword with the form data', function() {
      const email = 'gerry@test.com';
      const password = 'password123';

      const spy = expect.createSpy();
      const wrapper = mount( <Login loginWithPassword={spy} /> );

      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;
      wrapper.find('form').simulate('submit');
      expect(spy.calls[0].arguments[0]).toEqual({ email });
      expect(spy.calls[0].arguments[1]).toBe(password);

    });

    it('should set loginWithPassword callback with errors', function() {
      const spy = expect.createSpy();
      const wrapper = mount( <Login loginWithPassword={spy} /> );
      
      wrapper.find('form').simulate('submit');
      spy.calls[0].arguments[2]({});
      expect(wrapper.state('error').length).toNotBe(0);

      spy.calls[0].arguments[2]();
      expect(wrapper.state('error').length).toBe(0);

    });

  });
}