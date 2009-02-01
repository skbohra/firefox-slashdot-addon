

function changeLocale() {

	try {
		// Which locale did the user select?
		var localeListbox = document.getElementById('menulistslash');
		var newLocale = localeListbox.selectedItem.value;
		alert(newLocale);
		// Write preferred locale to local user config
		var prefs = Components.classes["@mozilla.org/preferences-service;1"].
                    getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref("general.useragent.locale", 'hi');
				
		
	} catch(err) {
	
		alert("Couldn't change locale: " + err);
	}
}
