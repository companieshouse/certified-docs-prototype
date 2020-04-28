/* global $ */


var selectedDocuments = 0;
// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


$("input[name='accounts']").on('change', function () {
	if ($(this).prop('checked') === false) {
		$('tr td:nth-child(3)').each(function (index, element) {
	    	if($(this).text().trim() == "TM02"){
	    		$(this).closest('tr').show();
	    	}
 		});
    } else {
     	$('tr td:nth-child(3)').each(function (index, element) {
	    	if($(this).text().trim() == "TM02"){
	    		$(this).closest('tr').hide();
	    	}
 		});
	}
})


$("input[name='documentType']").on('change', function () {
    if ($(this).prop('checked') === false) {
      $('.document-type').hide()
    } else {
      $('.document-type').show()
    }
  })

})

$("input[name='rowCheckBox']").on('change', function () {
  if ($(this).prop('checked') === false) {
      selectedDocuments--;
      var newText = "";
      if(selectedDocuments == 0){
        newText = "No documents selected"
      }
      else if(selectedDocuments == 1){
        newText = "1 document selected"
      }
      else if(selectedDocuments > 1){
        newText = selectedDocuments + " documents selected"
      }
      var element = $(this).closest('tr').index();
      $("#ul"+ element).remove();

    } else {
      selectedDocuments++;
      if(selectedDocuments == 1){
        newText = "1 document selected"
      }
      else if(selectedDocuments > 1){
        newText = selectedDocuments + " documents selected"
      }
      var element = $(this).closest('tr').index();
      var description = $(this).closest('td').nextAll().last().text();
      $("#documentsSelectedList").append("<li id='ul" + element + "'>" + description + "</li>");
  }
  $("#documentsSelectedCountTop").text(newText);
  $("#documentsSelectedCountBottom").text(newText);
})
