// load styles
import './index.css';

//---

import { render as showTimeRender } from './time/show-time';
import { render as doCalcRender } from './math/do-calc';
import { render as assetsImageLoaderRender } from './image/assets-loader';
import { render as lazyImageLoaderRender } from './image/lazy-loader';

//---

showTimeRender();
doCalcRender();
assetsImageLoaderRender();
lazyImageLoaderRender();
