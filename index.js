const alfy = require('alfy');
const expand = require('emmet').default;

const outputs = [];
const source = alfy.input;

try {
  const title = expand(source, { options: { 'output.format': false }});
  const text = expand(source);
  outputs.push({
    title: title,
    arg: text
  });
} catch(e) {
  //console.log(`error text: ${source}`);
}


try {
  const title = expand(source, { type: 'stylesheet', syntax: 'css', options: { 'output.format': false }});
  const text = expand(source, { type: 'stylesheet', syntax: 'css' });
  //console.log(title);
  outputs.push({
    title: title,
    arg: text
  });
} catch(e) {
  //console.log(`error style: ${source}`);
}

alfy.output(outputs);
