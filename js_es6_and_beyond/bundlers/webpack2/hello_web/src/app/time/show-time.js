import $ from 'jquery';
import moment from 'moment';

function renderUI(){
  let nowTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('.show-time')
    .append(`<p>${nowTime}</p>`)
  nowTime = null;
};

export const render = renderUI;
