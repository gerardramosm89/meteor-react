import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Signup } from './Signup';

if (Meteor.isClient) {
  describe('Sign Up Component', function() {
    it('should show error messages', function() {
      const err = 'this isnt working';

      const wrapper = mount( <Signup createUser={() => {}} />);

      wrapper.setState({
        error: err
      });
      expect(wrapper.find('#error').text()).toBe(err);

      wrapper.setState({error: ''});
      expect(wrapper.find('#error').length).toBe(0);
    });

    it('should call createUser with the form data', function() {
      const email = 'gerry@test.com';
      const password = 'password123';

      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy} /> );

      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;
      wrapper.find('form').simulate('submit');
      expect(spy.calls[0].arguments[0]).toEqual({ email, password });

    });

    it('should set error if password is short', function() {
      const email = 'gerry@test.com';
      const password = '123';

      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy} /> );

      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;
      wrapper.find('form').simulate('submit');

      expect(wrapper.state('error').length).toNotBe(0);
    });

    it('should set createUser callback with errors', function() {
      const password = 'password123!';
      const reason = "this is why it failed";
      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy} /> );
      
      wrapper.ref('password').node.value = password;
      wrapper.find('form').simulate('submit');
      spy.calls[0].arguments[1]({ reason });
      expect(wrapper.state('error')).toBe(reason);

      spy.calls[0].arguments[1]();
      expect(wrapper.state('error').length).toBe(0);

    });

  });
}