const {JSDOM} = require('jsdom');

const dom = new JSDOM(`
  <!DOCTYPE html>
  <body>
    <input id="inputField" value="Blah"/>
    <ul id="list"></ul>
    <button id="addButton">Add</button>
    <button id="removeButton">Remove</button>
  </body>`
);

const { document } = dom.window

global.document = document
