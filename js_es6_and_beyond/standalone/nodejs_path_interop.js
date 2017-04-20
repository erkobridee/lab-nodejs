// babel : Modules Interop
// https://github.com/babel/babel/issues/95

import * as path from 'path';

console.log( path.join('a', 'b') );

//---

import { join } from 'path';

console.log( join('c', 'd') );
