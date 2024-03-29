const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
    res.render('index2')
  })
  router.get('/start', function (req, res) {
    res.render('index2')
  });


router.post('/order-certified-document', function(req, res) {

		res.redirect('CHS-signin')
})


router.post('/CHS-signin', function(req, res) {

    var errors = [];
    var emailHasError = false;
    var passwordHasError = false;
	
	if(req.session.data['email'] == ""){
		emailHasError = true;
		errors.push({text: "Enter your email address", href: "#email-error"});
	}
	
	if(req.session.data['password'] == ""){
        passwordHasError = true;
        errors.push({text: "Enter your password", href: "#password-error"});
	}

	if(emailHasError || passwordHasError){
		res.render('CHS-signin', {
        	errorEmail: emailHasError,
        	errorPassword: passwordHasError,
        	errorList: errors
      	})
	}
	else
	{
		res.redirect('filter-document-list')
	}
})




router.post('/filter-document-list', function(req, res) {

	var errors = [];
    var noDocumentSelectedHasError = false;

    if(req.session.data['selectedDocs'] == 0){
        noDocumentSelectedHasError = true;
	}

	if(noDocumentSelectedHasError){
		res.render('filter-document-list', {
			errorNoDocumentSelected: noDocumentSelectedHasError
      	})
	}
	else
	{
		res.redirect('delivery-address-name')
	}

})




router.post('/delivery-address-name', function(req, res) {

	var errors = [];
    var buildingStreetHasError = false;
    var townCityHasError = false;
    var postcodeHasError = false;
	var firstNameHasError = false;
    var lastNameHasError = false;
	
	if(req.session.data['first-name'] == ""){
		firstNameHasError = true;
		errors.push({text: "Enter your first name", href: "#first-name-error"});
	}
	
	if(req.session.data['last-name'] == ""){
        lastNameHasError = true;
        errors.push({text: "Enter your last name", href: "#last-name-error"});
	}

	if(req.session.data['address-line-1'] == ""){
		buildingStreetHasError = true;
		errors.push({text: "Enter a building and street", href: "#building-street-error"});
	}
	
	if(req.session.data['address-town'] == ""){
        townCityHasError = true;
        errors.push({text: "Enter a town or city", href: "#town-city-error"});
	}

	if(req.session.data['address-postcode'] == ""){
        postcodeHasError = true;
        errors.push({text: "Enter a postcode", href: "#postcode-error"});
	}

	if(buildingStreetHasError || townCityHasError || postcodeHasError){
		res.render('delivery-address-name', {
			errorFirstName: firstNameHasError,
        	errorLastName: lastNameHasError,
        	errorAddressLineOne: buildingStreetHasError,
        	errorTownCity: townCityHasError,
        	errorPostcode: postcodeHasError,
        	errorList: errors
      	})
	}
	else
	{
		res.redirect('check-details-certified-documents')
	}
})



 

module.exports = router
