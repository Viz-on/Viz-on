// MODULE
var vizOnApp = angular.module('vizOnApp', ['ngRoute', 'ngResource']);

// SERVICES
vizOnApp.factory('accessFac',function(){
	var obj = {}
	this.access = false;
	obj.getPermission = function(url,usr,pswd){    //set the permission to true
		hostString = url;
		//Console.log('hostString' + hostString + '  usr   ' +usr+'   pswd  '+pswd);
		connect(usr,pswd);
		if(issessionIdCreated){
		//	alert(sessionId);
		this.access = true;
		}
		if(!issessionIdCreated){
			//	alert(sessionId);
			console.log('httpStatusCd ' + httpStatusCd);
			console.log('httpStatusTxt '+httpStatusTxt);
		}
	}
	obj.checkPermission = function(){
		return this.access;				//returns the users permission level 
	}
	return obj;
});

// ROUTES

vizOnApp.config(function($routeProvider){
	$routeProvider
	.when('/login' ,{
        templateUrl: 'templates/login.htm',
        controller: 'loginController'
	})
	
	.when('/analysis' ,{
	templateUrl: "templates/analysis.htm",
	controller: 'analysisController',
	resolve:{
		"check":function(accessFac,$location){   //function to be resolved, accessFac and $location Injected
			if(accessFac.checkPermission()){    //check if the user has permission -- This happens before the page loads
				$location.path('/analysis');
			//	console.log('Access Granted!!!!'+ accessFac.checkPermission());
			}else{
				$location.path('/');				//redirect user to home if it does not have permission.
				//alert("You don't have access here");
				console.log('Access Denied!!!!');
			}
		}
	}
	})

	.when('/' ,{
	templateUrl: "templates/login.htm"
	});
});


// CONTROLLERS
vizOnApp.controller('loginController', ['$scope','accessFac','$location' , function($scope,accessFac,$location) {
    
	$scope.getAccess = function(){
		// Just for testing. We can remove the below hardcoded values during deployment.
		$scope.url = 'http://166.78.244.8:9522/analytics/';
		$scope.username = 'weblogic';
		$scope.password = 'w3bl0g1c123';
		//Just for testing ........................................
		accessFac.getPermission($scope.url,$scope.username,$scope.password);       //call the method in acccessFac to allow the user permission.
	//	console.log('username : '+ $scope.username+'   password  :  '+ $scope.password);
		if(accessFac.checkPermission()){
			$location.path('/analysis');
		}
		if(!accessFac.checkPermission()){
			$scope.error = 'Invalid URL/User/Password';
			console.log($scope.error);
		}
	}
        
    }]);
    
vizOnApp.controller('analysisController', ['$scope','$location' , function($scope,$location) {
$scope.currentUser;
getCurrentUser();
$scope.currentUser = user;
		allSAsDropDown();
	//console.log(sareas);
		$scope.SubjectAreas=[];
		for (var i = 0; i < sareas.length; i++) {
			$scope.SubjectAreas[i] = ((sareas[i].getName()).replace('"', '')).replace('"', '');
		}
		$scope.SelectedSubjectAreas;
		// console.log($scope.SelectedSubjectAreas);
		//Function to find Selected subject areas,Tables from dropdown
		$scope.SelectedSA = function(){
			$scope.SelectedSubjectAreas;
			var ms = new SAWSOAP_MetadataServiceSoap();
			ms.url = buildURL('metadataService');
			var detailsLevel = "IncludeTables";
			ms.describeSubjectArea(describeSubjectAreaSuccessCallback,
					describeSubjectAreaErrorCallback, $scope.SelectedSubjectAreas,
					detailsLevel, sessionId);
				//	console.log($scope.SelectedSubjectAreas);
			//Loop to select tables list
			$scope.tableName = [] ;
			for(var i=0;i<tables.length;i++){
					
					$scope.tableName[i] = (((tables[i].getName()).replace('"', '')).replace('"','')).trim();
				//	console.log($scope.tableName[i]);
			}
		}		
		//Function to select columns list
		$scope.selectedTables = function(){
			$scope.selTables;
			console.log($scope.selTables);

			var ms = new SAWSOAP_MetadataServiceSoap();
			ms.url = buildURL('metadataService');
			var detailsLevel = "IncludeColumns";
			ms.describeTable(describeTableSuccessCallback, describeTableErrorCallback,
				$scope.SelectedSubjectAreas, $scope.selTables, detailsLevel, sessionId);

				$scope.colName=[];
				for (var i = 0; i < columns.length; i++) {
					$scope.colName[i] = ((columns[i].getName()).replace('"', '')).replace('"', '');
					//console.log($scope.colName[i]);
				}
		//	console.log($scope.colName);	
		}			

		
// Capture Selected columns
		$scope.selectedCols = [];

		$scope.toggle = function (item,SelectedSubjectAreas,selTables, selectedCols1) {
			item = "\""+SelectedSubjectAreas+"\".\""+selTables+"\".\""+item+"\"";
			var idx = selectedCols1.indexOf(item);
		//	alert(idx);
			if (idx > -1) {
				selectedCols1.splice(idx, 1);
				console.log('If');
			}
			else {
				selectedCols1.push(item);
				console.log('Else');
			}
		  };
	
		  $scope.exists = function (item,SelectedSubjectAreas,selTables, selectedCols1) {
			 item = "\""+SelectedSubjectAreas+"\".\""+selTables+"\".\""+item+"\"";
				return selectedCols1.indexOf(item) > -1;
				console.log('Exists');
		  };
		  
// Capture Selected columns Data
$scope.colList = [];
$scope.dataSet ;
var sqlQuery ; 
		$scope.getColumnsData = function () {
			console.log('$scope.selectedCols.length '+ $scope.selectedCols.length)
			if($scope.selectedCols.length > 0) {
			for (var i = 0; i < $scope.selectedCols.length; i++) {
				$scope.colList[i] = $scope.selectedCols[i];

				console.log( $scope.selectedCols[i]+',');
			}
			sqlQuery = 'SELECT  ' + $scope.selectedCols + ' from '+ "\""+$scope.SelectedSubjectAreas+"\"";
		}
		else{
			sqlQuery = 'SELECT  0 from ' + "\""+$scope.SelectedSubjectAreas+"\"";
		}
			
		console.log(sqlQuery);
		//Getting Data
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
				$scope.dataSet = dataRowset;
		console.log($scope.dataSet);
		}

		
//Loggingoff session
$scope.logOffMsg;
$scope.logOffFlag;
$scope.logOff = function () {
	getCurrentUser(); // This function gives current user loggedin
	//console.log(user);
	var ss = new SAWSOAP_SAWSessionServiceSoap();
	//The below URL is hardcoded. We have to made it dynamic
	ss.url = "http://166.78.244.8:9522/analytics/saw.dll?SoapImpl=nQSessionService";
	ss.logoff(logoffSuccessCallback, logoffErrorCallback, sessionId);
	$scope.logOffMsg = 'User '+user+' '+vizLogoffMessage;
	$scope.logOffFlag = logOffFlag;
	console.log($scope.logOffMsg);
	if ($scope.logOffFlag)
	{
		$location.path('/');
		//The below command just executes to reset application  to index page
		location.reload();
	}
}

}]);


