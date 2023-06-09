// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  let currentHour = dayjs().hour() + 1;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('button').on('click', function(){
    let x = $(this).parent().attr("id").replace(/hour-/,'');
    let t = $(this).prev().val();
    console.log(t);
    localStorage.setItem(x, t);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $('.time-block').each(function(){
    let timeBlock = $(this).attr('id').replace(/hour-/,'');
    if (currentHour > timeBlock){
      $(this).addClass('past'); 
    } else if (currentHour < timeBlock){
      $(this).addClass('future');
    } else {
      $(this).addClass('present')
    }
  });
 
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('.time-block').each(function(){
    let timeBlock = $(this).attr('id').replace(/hour-/,'');
    $(this).children(1).val(localStorage.getItem(timeBlock));
    let x = $(this).children(1).val();
    console.log(x);
  });

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
