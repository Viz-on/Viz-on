/*Declare the variables */
var addAllColumnsButtonIndexs = [];
var selectColumnsButtonIndexs = [];

//function for subject areas dropdown
function allSAsDropDown() {
	document.body.innerHTML = '';
	/* Display the logged in user. */
	document.write('<br><br>');
	document.write('<p id="userInfo" align="center"></p>')
	document.write('<br><br>');

	document.getElementById("userInfo").innerHTML = "Logged In User : "
			+ getCurrentUser();
			
	getAllSubjectAreas();
	var sareas = subjectAreas;
	document.write('<select id="subjectAreasDropDown"'
			+ ' onchange="onChangeSubjectAreaDropDown()">');
	document.write("<option selected>" + "--Select Subject Area--"
			+ "</option>");

	for (var i = 0; i < sareas.length; i++) {
		var ssArea = ((sareas[i].getName()).replace('"', '')).replace('"', '');
		document.write("<option value=" + sareas[i].getName() + ">" + ssArea
				+ "</option>");
	}

	document.write("</select>");
	document.write("<br><br>");
}

/* function 'buildURL()' will builds the required url to call the service. */
function buildURL(serviceName) {
	var corsString = 'localhost:8889/'
	var serviceString = '/analytics/saw.dll?SoapImpl=' + serviceName;
	if(isHostStringBuild == false){
	if(hostString.search('http:') != -1){
		//global variable 'urlType'.
		urlType = 'http://';
	}else if(hostString.search('https:') != -1){
		urlType = 'https://';
	}else{
		document.write('<br>Error Message : Enter the URL properly.<br>');
		document.write('<br>URL should be in this form : "http://111.1.1.1:5502"<br>');
		document.write('<br>URL must contains either "http:" or "https:"<br>');
	}
	//replace 'urlType'.
	hostString = hostString.replace(urlType,'');
	//check whether '/analytics' is there .
	if(hostString.search('/analytics') != -1){
		//replace '/analytics........end'.
		var str1 = hostString.substr(hostString.search('/analytics'),hostString.length-1);
		hostString = hostString.replace(str1,'');
	}
	//building of hostString completed.
	isHostStringBuild = true;
	
	//build the 'genericURL' and save .
	genericURL = urlType + corsString + hostString+'/analytics/saw.dll?SoapImpl=';
	}
	var url = urlType + corsString + hostString + serviceString;
	return url;
}
// this function will be called when user selects the list of columns.
function onColumnsSelection() {
	var sColumns = [];
	for (var i = 0; i < columns.length; i++) {
		var checkbox = document.getElementById(i);
		if (checkbox.checked) {
			sColumns.push(columns[i].getName());
		}
	}
	selectedColumns.push(sColumns);
	columns = [];
	tablesRendarer();
}
// This function renders the list of tables with buttons.
function tablesRendarer() {
	document.body.innerHTML = '';
	var tablesString = '';
	var ssarea = (selectedSubjectArea.replace('"', '')).replace('"', '');
	tablesString = tablesString + '<br><h3>Select Tables from    ' + ssarea
			+ '  ' + '</h3><br>' + '<table align="center">' + '<tr>' + '<th>'
			+ 'Tables' + '</th>' + '<th></th>' + '</tr>';
	for (var i = 0; i < tables.length; i++) {
		var tableName = ((tables[i].getName()).replace('"', '')).replace('"',
				'');
		tablesString = tablesString + '<tr>' + '<td>' + tableName + '</td>'
				+ '<td>';

		var selectionCheckFlag1 = false;
		var selectionCheckFlag2 = false;
		for (var j = 0; j < addAllColumnsButtonIndexs.length; j++) {
			if (addAllColumnsButtonIndexs[j] == i) {
				selectionCheckFlag1 = true;
			}
		}
		if (selectionCheckFlag1) {
			tablesString = tablesString
					+ '<input type="button" value="Add All Columns" disabled>';
		} else {
			tablesString = tablesString
					+ '<input type="button" value="Add All Columns" onclick="onClickAddAllColumns('
					+ i + ')">';
		}
		for (var k = 0; k < selectColumnsButtonIndexs.length; k++) {
			if (selectColumnsButtonIndexs[k] == i) {
				selectionCheckFlag2 = true;
			}
		}
		if (selectionCheckFlag2) {
			document
					.write('<input type="button" value="Select Columns" disabled>'
							+ '<br>');
			tablesString = tablesString
					+ '<input type="button" value="Select Columns" disabled>'
					+ '<br>';
		} else {
			tablesString = tablesString
					+ '<input type="button" value="Select Columns" onclick="onClickSelectColumns('
					+ i + ')">' + '<br>';
		}
		tablesString = tablesString + '</td>' + '</tr>';
	}
	tablesString = tablesString + '<tr><td align = "center">';
	if (selectedTables.length == 0) {
		tablesString = tablesString
				+ '<input type="button" value="Get Data" onclick="getData()" disabled>';

	} else {
		tablesString = tablesString
				+ '<input type="button" value="Get Data" onclick="getData()">';
	}
	document.write('</td></tr>');
	document.write('</table>');
	tablesString = tablesString + '</td></tr>' + '</table>';
	document.body.innerHTML = tablesString;
}
// this function will be called when 'Add All Columns' columns button clicked.
// Which will select all columns of the table.
function onClickAddAllColumns(i) {
	var tableName = ((tables[i].getName()).replace('"', '')).replace('"', '');
	getTableMetaData(tables[i].getName());
	selectedTables.push(tableName);
	var sColumns = [];
	for (var j = 0; j < columns.length; j++) {
		sColumns.push(columns[j].getName());
	}
	selectedColumns.push(sColumns);
	columns = [];
	
	addAllColumnsButtonIndexs.push(i);
	tablesRendarer();
}
function onClickSelectColumns(i) {
	getTableMetaData(tables[i].getName());

	var tableName = ((tables[i].getName()).replace('"', '')).replace('"', '');
	selectedTables.push(tableName);
	selectColumnsButtonIndexs.push(i);
	columnsRendarer(tableName);
}

// When user clicks on 'Select Columns' button this function will be called.
// this function is for showing the selected table columns with check boxes.
function columnsRendarer(tName) {
	document.body.innerHTML = '';
	// //////////////////////////////////////////////////////////////////////////////////////

	var columnsString = '';
	columnsString = columnsString + '<br>' + '<br><h3>Select columns from '
			+ tName + '</h3><br>' + '<br><br>' + '<table align="center">'
			+ '<tr>' + '<th align="left">' + 'Columns' + '</th>'
			+ '<th align="left">' + '</th>' + '</tr>' + '<br>';

	for (var i = 0; i < columns.length; i++) {
		columnsString = columnsString + '<tr><td>'
				+ ((columns[i].getName()).replace('"', '')).replace('"', '')
				+ '</td>' + '<td>' + '<input type="checkbox" id="' + i + '" >'
				+ '</td></tr>';
	}
	columnsString = columnsString
			+ '<tr><td>'
			+ '<input type="button" align="center" value="Add columns" onclick="onColumnsSelection()">'
			+ '</td></tr>' + '</table>' + '<br><br>';
	document.body.innerHTML = columnsString;
}
function onChangeSubjectAreaDropDown() {
	var sad = document.getElementById("subjectAreasDropDown");
	selectedSubjectArea = sad.options[sad.selectedIndex].value;
	selectedSubjectArea = '"' + selectedSubjectArea + '"';

	getAllTablesInSubjectArea();

	tablesRendarer();
}

function parseRowset(rowset) {
	var xmlDoc;
	if (window.DOMParser) {
		xmlDoc = (new window.DOMParser()).parseFromString(rowset,
				"text/xml");
	} else if (typeof window.ActiveXObject != "undefined"
			&& new window.ActiveXObject("Microsoft.XMLDOM")) {
		xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = false;
		xmlDoc.loadXML(rowset);
	}
	var xml = xmlDoc.documentElement;
	
	var rowsetArray;
	if (xml.nodeType == 3) { 
		rowsetArray = xml.nodeValue;
	} else if (xml.nodeType == 1) {
		rowsetArray = [];
		if (xml.hasChildNodes()) {
			var rowElements = xml.childNodes;
			for (var i = 0; i < rowElements.length; i++) {
				var rowElement = rowElements[i];
				if(rowElement.nodeType == 3)
				{
					// text node in between <Row> elements like '/n/t' .
					continue;
				}
				var rowarray = [];
				var columnElements = rowElement.childNodes;

				var isColumnDataMissed = false;
	
				// iterate column elements with in the row.
				for (var j = 0; j < columnElements.length; j++) {
					var columnElement = columnElements[j];
					if(columnElement.nodeType == 3)
					{
						// text node comes between <column/>/t/n<column>.
						continue;
					}
					// Check whether the value of column is 'undefined' (or)
					// null.
					if(columnElement.childNodes[0] == null)
						{	
							// passing null value for this column.
							rowarray.push(null);
						}
					else if(columnElement.childNodes[0].nodeValue == 'undefined'){
						// The column value is 'undefined'.
						// passing null value for this column.
						rowarray.push(null);
					}
					else{
						// data for the column is available.
						rowarray.push(columnElement.childNodes[0].nodeValue);
					}
				}
				rowsetArray.push(rowarray);
				rowarray = [];
			}
		} else {
			document.write("No rows of data");
		}
	}
	return rowsetArray;
}
function connectErrorCallback(httpStatusCode, httpStatusText) {
	document.write("<br>connectErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}
function connectSuccessCallback(responseObject) {
	if (responseObject.typeMarker == 'Fault') {
		faultCode = responseObject.getFaultCode();
		faultString = responseObject.getFaultString();
		issessionIdCreated = false;
	} else if (responseObject.typeMarker == 'SAWSOAP_logonResult') {
		var sessionID = responseObject.getSessionID();
		sessionId = sessionID;
		issessionIdCreated = true;
	}
}
function getCurrentUserSuccessCallback(responseObject) {
	user = responseObject.getReturn();
}
function getCurrentUserErrorCallback(httpStatusCode, httpStatusText) {
	document.write("<br>getCurrentUserErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}

function getSubjectAreasSuccessCallback(responseObject) {
	subjectAreas = responseObject.getSubjectArea();
}

function getSubjectAreaErrorCallback() {
	document.write("<br>getSubjectAreaErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}
function describeSubjectAreaSuccessCallback(responseObject) {
	var sa = responseObject.getSubjectArea();
	tables = sa.getTables();
}

function describeSubjectAreaErrorCallback(httpStatusCode, httpStatusText) {
	document.write("<br>describeSubjectAreaErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}

function describeTableSuccessCallback(responseObject) {
	var table = responseObject.getTable();
	columns = table.getColumns();
}
function describeTableErrorCallback(httpStatusCode, httpStatusText) {
	document.write("<br>describeTableErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}

function connect(userName, password) {
	var ss = new SAWSOAP_SAWSessionServiceSoap();
	// call build url to get url.
	ss.url = buildURL('nQSessionService');
	ss.logon(connectSuccessCallback, connectErrorCallback, userName, password);
}
function getCurrentUser() {
	var ss = new SAWSOAP_SAWSessionServiceSoap();
	ss.url =  buildURL('nQSessionService');
	ss.getCurUser(getCurrentUserSuccessCallback, getCurrentUserErrorCallback,
			sessionId);
	return user;
}
function getAllSubjectAreas() {
	var ms = new SAWSOAP_MetadataServiceSoap();
	ms.url = buildURL('metadataService');
	ms.getSubjectAreas(getSubjectAreasSuccessCallback,
			getSubjectAreaErrorCallback, sessionId);
	return subjectAreas;
}
function getAllTablesInSubjectArea() {
	var ms = new SAWSOAP_MetadataServiceSoap();
	ms.url = buildURL('metadataService');
	var detailsLevel = "IncludeTables";
	ms.describeSubjectArea(describeSubjectAreaSuccessCallback,
			describeSubjectAreaErrorCallback, selectedSubjectArea,
			detailsLevel, sessionId);
}
function getTableMetaData(tabl) {
	var ms = new SAWSOAP_MetadataServiceSoap();
	ms.url = buildURL('metadataService');
	var detailsLevel = "IncludeColumns";
	ms.describeTable(describeTableSuccessCallback, describeTableErrorCallback,
			selectedSubjectArea, tabl, detailsLevel, sessionId);
}
function getDataSuccessCallback(responseObject) {
	if (responseObject.typeMarker == 'Fault') {
		faultCode = responseObject.getFaultCode();
		faultString = responseObject.getFaultString();
	} else if (responseObject.typeMarker == 'SAWSOAP_executeSQLQueryResult') {
		var ret = responseObject.getReturn();	
	dataRowset = parseRowset(ret.getRowset());
	document.write('data as array : '+dataRowset.toString());
	}
}
function getDataErrorCallback(httpStatusCode, httpStatusText) {
	document.write("<br>getDataErrorCallback called<br>");
	document.write("<br>httpStatusCode : " + httpStatusCode
			+ "<br>httpStatusText : " + httpStatusText);
}
function getData() {
	document.body.innerHTML = '';
	var sqlQuery = 'SELECT  ';
	for (var i = 0; i < selectedColumns.length; i++) {
		var tname = '"' + selectedTables[i] + '"';
		for (var j = 0; j < selectedColumns[i].length; j++) {
			var cName = selectedColumns[i][j];
			sqlQuery = sqlQuery + selectedSubjectArea + '.' + tname + '.'
					+ cName + ' , ';
		}
	}
	// removing lastly appended ','
	sqlQuery = sqlQuery.substring(0, sqlQuery.lastIndexOf(',') - 1);
	sqlQuery = sqlQuery + ' From ' + selectedSubjectArea;
	
	var outputFormat = 'SAWRowsetData';
	// execution options object.
	var executionOptions = new SAWSOAP_XMLQueryExecutionOptions();
	executionOptions.setAsync(false);
	executionOptions.setMaxRowsPerPage(10);
	executionOptions.setRefresh(true);
	executionOptions.setPresentationInfo(false);
	executionOptions.setType('sqlQueryResult');
	
	var xvs = new SAWSOAP_XmlViewServiceSoap();
	
	//We need to get URL from 'genericURL'.
	xvs.url = genericURL +'xmlViewService';
	
	xvs.executeSQLQuery(getDataSuccessCallback, getDataErrorCallback,
			sqlQuery, outputFormat, executionOptions, sessionId);
}
function logoffSuccessCallback() {
	alert('logoffSuccessCallback() function call back');
}
function logoffErrorCallback() {
	alert('logoffErrorCallback() function called');
}
// When user clicks on 'logoff' button or when 'Get Data' button was clicked.
// this function will be called.
function logoff() {
	var ss = new SAWSOAP_SAWSessionServiceSoap();
	ss.url = "http://localhost:8889/166.78.244.8:9522/analytics/saw.dll?SoapImpl=nQSessionService";
	ss.logoff(logoffSuccessCallback, logoffErrorCallback, sessionId);
}

