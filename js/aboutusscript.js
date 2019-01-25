// function openPage(pageName, elmnt) {

  // Hide all elements with class="tabcontent" by default */

  // var i, tabcontent, tablinks;
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }
  // $('.tabcontent').hide();

  // // Remove the background color of all tablinks/buttons
  // tablinks = document.getElementsByClassName("tablink");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].style.backgroundColor = "";
  // }
  // $('.tablink').css('background-color', '');

  // Show the specific tab content
  // document.getElementById(pageName).style.display = "block";
  // $(pageName).show();

  // Add the specific color to the button used to open the tab content
  // elmnt.style.backgroundColor = color;
  // $(elmnt).css('background-color', '#adadad');
// }

// Get the element with id="defaultOpen" and click on it
// document.getElementById('defaultOpen').click();
// $('#defaultOpen').click();

// $(".tablink").click(function(){
//   // action goes here!!
// }); 

// onclick="openPage('#tab_1', this)"
// onclick="openPage('#tab_2', this)"
// onclick="openPage('#tab_3', this)"
// onclick="openPage('#tab_4', this)"



$('.tablink').click(function(){
  var showTab = $(this).data('tab');
  $('.tabcontent').hide();
  $('#' + showTab).show();
  $('.tablink').removeClass('active');
  $(this).addClass('active');
  
});

$('#defaultOpen').click();