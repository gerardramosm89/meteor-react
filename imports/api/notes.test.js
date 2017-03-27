import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { Notes } from './notes';


if (Meteor.isServer) {
  describe('notes', function() {
    
    beforeEach(function() {
      Notes.remove({ });
      Notes.insert({
        _id: 'testid1',
        title: 'My Title', 
        body: 'mybody for note',
        updatedAt: 0,
        userId: 'dummyuser'
      });
    });

    it('should insert new note', function() {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['notes.insert'].apply({ userId });
      expect(Notes.findOne({ _id, userId })).toExist();
    });

    it('should remove note', function() {
      Meteor.server.method_handlers['notes.remove'].apply({ userId: 'dummyuser'}, ['testid1']);
      expect(Notes.findOne({ _id: 'testid1'})).toNotExist();
    });

    it('should not insert new note if no authenticated user', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.insert']();
      }).toThrow();
    });

    it('should not remove note if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({}, ['testid1']);
      }).toThrow();
    });
  
    it('should not remove note if invalid _id', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({ userId: 'dummyuser'}, []);
      }).toThrow();
    });
  });
}