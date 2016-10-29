/*
    Company:    Controls Inc.
    Filename:   PageSelectButton.js
    Author:     Trevor Parsh
*/

/*
When the user clicks on the page select button,
toggle between hiding and showing the drop-down content
*/
function PageSelectButton_Change()
{
    document.getElementById("PageSelectButtonContent-ID").classList.toggle("show");
}

// Close the drop-down menu if the user clicks outside of it
window.onclick = function(event)
{
  if (!event.target.matches('.PageSelectButton'))
  {
    var dropdowns = document.getElementsByClassName("PageSelectButton-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}