import $ from 'jquery';
import moment from 'moment';

function renderUI(){
  let timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('.show-time')
    .append(`<p>${timeNow}</p>`);
  timeNow = null;
};

export const render = renderUI;
