const alfy = require('alfy');
const expand = require('emmet').default;

const source = alfy.input;

try {
  const text = expand(source);
  alfy.output([{
    title: text,
    arg: text
  }]);
} catch {
  console.log(`error text: ${source}`);
}
