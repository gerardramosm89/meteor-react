import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import { Editor } from './Editor';
import { notes } from '../../fixtures/fixtures';

if (Meteor.isClient) {
  console.log("From the editor comp");
  describe('Editor', function() {
    let browserHistory;
    let call;

    beforeEach(function() {
      call = expect.createSpy();

      browserHistory = {
        push: expect.createSpy()
      }
    });

    it('should render pick note message', function() {
      const wrapper = mount( <Editor browserHistory={browserHistory} call={call} /> );
      expect(wrapper.find('p').text()).toBe('Pick or create a note');

    });
  });
}