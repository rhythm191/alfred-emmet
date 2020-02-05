const alfy = require('alfy');
const expand = require('emmet').default;

const source = alfy.input;

try {
  const title = expand(source, { options: { 'output.format': false }});
  const text = expand(source);
  alfy.output([{
    title: title,
    arg: text
  }]);
} catch {
  console.log(`error text: ${source}`);
}
