import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function() {
    it('should allow valid email address', function() {
      const testUser = {
        emails: [{ address: "test@test.com" }]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });

    it('should reject invalid email', function() {
      expect( () => {
        const testUser = {
          emails: [{ address: "test" }]
        };
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}




// const add = (a,b) => {

//   if (typeof b !== 'number') {
//     return a + a;
//   }

//   return a + b;
// };


// describe('add', function() {
//   it('should add two numbers', function() {
//     const res = add(11,9);
//     expect(res).toBe(20);
//   });

//   it ('should double a single number', function() {
//     const res = add(44);
//     expect(res).toBe(88);
//   });
// });




