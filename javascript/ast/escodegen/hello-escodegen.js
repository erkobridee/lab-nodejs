https://github.com/Constellation/escodegen

var escodegen = require('escodegen');

//---

var node = {
  type: 'BinaryExpression',
  operator: '+',
  left: { type: 'Literal', value: 40 },
  right: { type: 'Literal', value: 2 }
};

var ast = {
  type: 'Program',
  body: [
    {
      type: "VariableDeclaration",
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: "answer"
          },
          init: {
            type: "BinaryExpression",
            operator: "*",
            left: {
              type: "Literal",
              value: 6
            },
            right: {
              type: "Literal",
              value: 7
            }
          }
        }
      ],
      kind: "var"
    }
  ]
};

//---

var code = escodegen.generate(node);
console.log(code);

console.log('\n---::---::---\n');

code = escodegen.generate(ast);
console.log(code);

console.log('\n');

