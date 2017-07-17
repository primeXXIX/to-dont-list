const {assert, expect} = require('chai'),
      task = require('../scripts.js');

//Global Results
const addResult = task.add(),
      deleteResult = task.delete();

describe('Add', () => {
  it('should add an item to the list', () => {
    expect(task.list[0]).to.eql({value: 'blah', selected: false})
  })
})
