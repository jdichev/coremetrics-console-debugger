var consoleIncluded = false;
function includeConsole () {
	// TODO: this should be improved so display for now
	if (!consoleIncluded) {
		var consoleElement = document.createElement('div');
		consoleElement.id = 'cmConsole';
		consoleElement.style.position = "absolute";
		consoleElement.style.left = "0px";
		consoleElement.style.bottom = "0px";
		consoleElement.style.background = "#FFFFFF";
		consoleElement.style.color = "#000000";
		consoleElement.style.height = "auto";
		consoleElement.style.width = "100%";
		consoleElement.style.fontSize = "8pt";
		consoleElement.style.fontFamily = "monospaced";
		consoleElement.style.display = "none";
		document.body.appendChild(consoleElement);
		consoleIncluded = true;
	}
}

function consolePrint(infoLine) {
	if (!consoleIncluded) {
		includeConsole();
	}
	
	var textLine = document.createElement('p');
	textLine.appendChild(document.createTextNode(infoLine));
	var consoleElement = document.getElementById('cmConsole');
	consoleElement.appendChild(textLine);
}

if (typeof console == 'undefined') {
	console = {}
	console.log = function(infoLine) {
		consolePrint(infoLine);
	}
}
else {
	console.log('cmoverride.js is included');
}

OcmCreateManualImpressionTag = window['cmCreateManualImpressionTag'];
window['cmCreateManualImpressionTag'] = function(pageID, trackSP, trackRE) {
	var params = new Array();
	params.push("\tpageID: " + pageID);
	params.push("\ttrackSP: " + trackSP);
	params.push("\ttrackRE: " + trackRE);
	console.log("cmCreateManualImpressionTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateManualImpressionTag(pageID, trackSP, trackRE);
}

OcmCreateManualLinkClickTag = window['cmCreateManualLinkClickTag'];
window['cmCreateManualLinkClickTag'] = function(href,name,pageID) {
	var params = new Array();
	params.push("\thref: " + href);
	params.push("\tname: " + name);
	params.push("\tpageID: " + pageID);
	console.log("cmCreateManualLinkClickTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateManualLinkClickTag(href,name,pageID);
}

OcmCreateManualPageviewTag = window['cmCreateManualPageviewTag'];
window['cmCreateManualPageviewTag'] = function(pageID, categoryID,DestinationURL,ReferringURL) {
	var params = new Array();
	params.push("\tpageID: " + pageID);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tDestinationURL: " + DestinationURL);
	params.push("\tReferringURL: " + ReferringURL);
	console.log("cmCreateManualPageviewTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateManualPageviewTag(pageID, categoryID,DestinationURL,ReferringURL);
}

OcmCreateTechPropsTag = window['cmCreateTechPropsTag'];
window['cmCreateTechPropsTag'] = function(pageID, categoryID,attributes) {
	var params = new Array();
	params.push("\tpageID: " + pageID);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateTechPropsTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateTechPropsTag(pageID, categoryID,attributes);
}

OcmCreatePageviewTag = window['cmCreatePageviewTag'];
window['cmCreatePageviewTag'] = function(pageID, categoryID, searchString, searchResults,attributes) {
	var params = new Array();
	params.push("\tpageID: " + pageID);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tsearchString: " + searchString);
	params.push("\tsearchResults: " + searchResults);
	params.push("\tattributes: " + attributes);
	console.log("cmCreatePageviewTag(\n" + params.join(",\n") + "\n)");

	OcmCreatePageviewTag(pageID, categoryID, searchString, searchResults,attributes);
}

OcmCreateDefaultPageviewTag = window['cmCreateDefaultPageviewTag'];
window['cmCreateDefaultPageviewTag'] = function(categoryID) {
	var params = new Array();
	params.push("\tcategoryID: " + categoryID);
	console.log("cmCreateDefaultPageviewTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateDefaultPageviewTag(categoryID);
}

OcmCreateProductviewTag = window['cmCreateProductviewTag'];
window['cmCreateProductviewTag'] = function(productID, productName, categoryID,attributes) {
	var params = new Array();
	params.push("\tproductID: " + productID);
	params.push("\tproductName: " + productName);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateProductviewTag(\n" + params.join(",\n") + "\n)");

	OcmCreateProductviewTag(productID, productName, categoryID,attributes);
}

OcmCreateShopAction5Tag = window['cmCreateShopAction5Tag'];
window['cmCreateShopAction5Tag'] = function(productID,productName,productQuantity,productPrice,categoryID,attributes) {
	var params = new Array();
	params.push("\tproductID: " + productID);
	params.push("\tproductName: " + productName);
	params.push("\tproductQuantity: " + productQuantity);
	params.push("\tproductPrice: " + productPrice);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateShopAction5Tag(\n" + params.join(",\n") + "\n)");

	OcmCreateShopAction5Tag(productID,productName,productQuantity,productPrice,categoryID,attributes);
}

OcmCreateShopAction9Tag = window['cmCreateShopAction9Tag'];
window['cmCreateShopAction9Tag'] = function(productID,productName,productQuantity,productPrice,customerID,orderID,orderTotal,categoryID,attributes) {
	var params = new Array();
	params.push("\tproductID: " + productID);
	params.push("\tproductName: " + productName);
	params.push("\tproductQuantity: " + productQuantity);
	params.push("\tproductPrice: " + productPrice);
	params.push("\tcustomerID: " + customerID);
	params.push("\torderID: " + orderID);
	params.push("\torderTotal: " + orderTotal);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateShopAction9Tag(\n" + params.join(",\n") + "\n)");

	OcmCreateShopAction9Tag(productID,productName,productQuantity,productPrice,customerID,orderID,orderTotal,categoryID,attributes);
}

OcmDisplayShop5s = window['cmDisplayShop5s'];
window['cmDisplayShop5s'] = function() {
	console.log('cmDisplayShop5s()');
	
	OcmDisplayShop5s();
}

OcmDisplayShop9s = window['cmDisplayShop9s'];
window['cmDisplayShop9s'] = function() {
	console.log('cmDisplayShop9s()');
	
	OcmDisplayShop9s();
}

OcmDisplayShops = window['cmDisplayShops'];
window['cmDisplayShops'] = function() {
	console.log('cmDisplayShops()');
	
	OcmDisplayShops();
}

OcmCreateOrderTag = window['cmCreateOrderTag'];
window['cmCreateOrderTag'] = function(orderID,orderTotal,orderShipping,customerID,customerCity,customerState,customerZIP,attributes) {
	var params = new Array();
	params.push("\torderID: " + orderID);
	params.push("\torderTotal: " + orderTotal);
	params.push("\torderShipping: " + orderShipping);
	params.push("\tcustomerID: " + customerID);
	params.push("\tcustomerCity: " + customerCity);
	params.push("\tcustomerState: " + customerState);
	params.push("\tcustomerZIP: " + customerZIP);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateOrderTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateOrderTag(orderID,orderTotal,orderShipping,customerID,customerCity,customerState,customerZIP,attributes);
}

OcmCreateConversionEventTag = window['cmCreateConversionEventTag'];
window['cmCreateConversionEventTag'] = function(eventID, actionType, categoryID, points,attributes) {
	var params = new Array();
	params.push("\teventID: " + eventID);
	params.push("\tactionType: " + actionType);
	params.push("\tcategoryID: " + categoryID);
	params.push("\tpoints: " + points);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateConversionEventTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateConversionEventTag(eventID, actionType, categoryID, points,attributes);
}

OcmCreateRegistrationTag = window['cmCreateRegistrationTag'];
window['cmCreateRegistrationTag'] = function(customerID, customerEmail, customerCity, customerState, customerZIP, attributes) {
	var params = new Array();
	params.push("\tcustomerID: " + customerID);
	params.push("\tcustomerEmail: " + customerEmail);
	params.push("\tcustomerCity: " + customerCity);
	params.push("\tcustomerState: " + customerState);
	params.push("\tcustomerZIP: " + customerZIP);
	params.push("\tattributes: " + attributes);
	console.log("cmCreateRegistrationTag(\n" + params.join(",\n") + "\n)");

	OcmCreateRegistrationTag(customerID, customerEmail, customerCity, customerState, customerZIP, attributes);
}

OcmCreateErrorTag = window['cmCreateErrorTag'];
window['cmCreateErrorTag'] = function(pageID, categoryID) {
	var params = new Array();
	params.push("\tpageID: " + pageID);
	params.push("\tcategoryID: " + categoryID);
	console.log("cmCreateErrorTag(\n" + params.join(",\n") + "\n)");

	OcmCreateErrorTag(pageID, categoryID);
}

OcmCreateElementTag = window['cmCreateElementTag'];
window['cmCreateElementTag'] = function(elementID, elementCategory, attributes){	
	var params = new Array();
	params.push("\telementID: " + elementID);
	params.push("\telementCategory: " + elementCategory);
	params.push("\tattributes: " + attributes);
	/* In the new coremetrics lib cmCreatePageElementTag() and cmCreateProductElementTag() are combined in one*/ 
	console.log("cmCreateElementTag(\n" + params.join(",\n") + "\n)");
	
	OcmCreateElementTag(elementID, elementCategory, attributes);
}