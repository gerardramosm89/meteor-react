import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function() {

    it('should render title and timestamp', function() {
      const title = 'My title here';
      const updatedAt = 1490721481314;

      const wrapper = mount( <NoteListItem note={ {title, updatedAt} } /> );

      expect(wrapper.find('h3').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('3/28/17');
    });

    it('should set default title if no title set', function() {
      const wrapper = mount( <NoteListItem note={{}} /> );
      expect(wrapper.find('h3').text()).toBe('Note needs title');
    });

  });
}