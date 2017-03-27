import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { Notes } from './notes';


if (Meteor.isServer) {
  describe('notes', function() {
    
    const noteOne = {
        _id: 'testid1',
        title: 'My Title', 
        body: 'mybody for note',
        updatedAt: 0,
        userId: 'dummyuser1'
    };

    const noteTwo = {
        _id: 'testid2',
        title: 'Things gerry needs to do', 
        body: 'mybody for note',
        updatedAt: 0,
        userId: 'dummyuser2'
    };

    beforeEach(function() {
      Notes.remove({ });
      Notes.insert(noteOne);
      Notes.insert(noteTwo);
    });

    it('should insert new note', function() {
      const _id = Meteor.server.method_handlers['notes.insert'].apply({ userId: noteOne.userId });
      expect(Notes.findOne({ _id, userId: noteOne.userId })).toExist();
    });

    it('should remove note', function() {
      Meteor.server.method_handlers['notes.remove'].apply({ userId: noteOne.userId}, [noteOne._id]);
      expect(Notes.findOne({ _id: noteOne._id})).toNotExist();
    });

    it('should not insert new note if no authenticated user', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.insert']();
      }).toThrow();
    });

    it('should not remove note if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({}, [noteOne._id]);
      }).toThrow();
    });
  
    it('should not remove note if invalid _id', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({ userId: noteOne.userId}, []);
      }).toThrow();
    });

    it('should update note', function() {
      const title = 'this is an updated title';

      Meteor.server.method_handlers['notes.update'].apply({
        userId: noteOne.userId
      }, [noteOne._id, { title }]);

      const note = Notes.findOne(noteOne._id);

      expect(note.updatedAt).toBeGreaterThan(0);
      expect(note).toInclude({
        title,
        body: noteOne.body
      });

    });

    it('should throw error if extra content is provided', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.update'].apply({
          userId: noteOne.userId
        }, [noteOne._id, { title, addingcontext: "context" }]); 
      }).toThrow();
    });

    it('should note update if user was not creator', function() {
      const title = 'this is an updated title';

      Meteor.server.method_handlers['notes.update'].apply({
        userId: 'testid'
      }, [noteOne._id, { title }]);

      const note = Notes.findOne(noteOne._id);


      expect(note).toInclude(noteOne);

    });

    it('should not update note if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.update'].apply({}, [noteOne._id]);
      }).toThrow();
    });
  
    it('should not update note if invalid _id', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.update'].apply({ userId: noteOne.userId}, []);
      }).toThrow();
    });

    it('should return a users notes', function() {
      const res = Meteor.server.publish_handlers.notes.apply({ userId: noteOne.userId });
      const notes = res.fetch();
      expect(notes.length).toBe(1);
      expect(notes[0]).toEqual(noteOne);
    });

    it('should no notes when user has no notes', function() {
      const res = Meteor.server.publish_handlers.notes.apply({ userId: "no_notes_user" });
      const notes = res.fetch();
      expect(notes.length).toBe(0);
    });

  });
}