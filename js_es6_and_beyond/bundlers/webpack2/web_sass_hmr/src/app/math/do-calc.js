import $ from 'jquery';
import sum from './sum';

function renderUI(){
  let result = sum(10, 5);
  $('.sum-result')
    .append(`<p>sum of 10 + 5 = ${result}</p>`);
  result = null;
};

export const render = renderUI;
