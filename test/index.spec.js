/* global describe, it, before */

import chai from 'chai';
import {Input} from '../lib/noisefy.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Input library', ()=> {
  before(()=> {
    lib = new Input();
  });
  describe('when I need the name', ()=> {
    it('should return the name', ()=> {
      expect(lib.name).to.be.equal('Input');
    });
  });
});

// describe('Given an instance of my Dog library', ()=> {
//   before(()=> {
//     lib = new Output();
//   });
//   describe('when I need the name', ()=> {
//     it('should return the name', ()=> {
//       expect(lib.name).to.be.equal('Output');
//     });
//   });
// });
