//
// Definitions for schema: urn://oracle.bi.webservices/v6
//  http://166.78.244.8:9522/analytics/saw.dll?wsdl#types1
//
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}TemplateInfoInstance
//
function SAWSOAP_TemplateInfoInstance () {
    this.typeMarker = 'SAWSOAP_TemplateInfoInstance';
    this._instanceName = '';
    this._nameValues = [];
}

//
// accessor is SAWSOAP_TemplateInfoInstance.prototype.getInstanceName
// element get for instanceName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for instanceName
// setter function is is SAWSOAP_TemplateInfoInstance.prototype.setInstanceName
//
function SAWSOAP_TemplateInfoInstance_getInstanceName() { return this._instanceName;}

SAWSOAP_TemplateInfoInstance.prototype.getInstanceName = SAWSOAP_TemplateInfoInstance_getInstanceName;

function SAWSOAP_TemplateInfoInstance_setInstanceName(value) { this._instanceName = value;}

SAWSOAP_TemplateInfoInstance.prototype.setInstanceName = SAWSOAP_TemplateInfoInstance_setInstanceName;
//
// accessor is SAWSOAP_TemplateInfoInstance.prototype.getNameValues
// element get for nameValues
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
//
// element set for nameValues
// setter function is is SAWSOAP_TemplateInfoInstance.prototype.setNameValues
//
function SAWSOAP_TemplateInfoInstance_getNameValues() { return this._nameValues;}

SAWSOAP_TemplateInfoInstance.prototype.getNameValues = SAWSOAP_TemplateInfoInstance_getNameValues;

function SAWSOAP_TemplateInfoInstance_setNameValues(value) { this._nameValues = value;}

SAWSOAP_TemplateInfoInstance.prototype.setNameValues = SAWSOAP_TemplateInfoInstance_setNameValues;
//
// Serialize {urn://oracle.bi.webservices/v6}TemplateInfoInstance
//
function SAWSOAP_TemplateInfoInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:instanceName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._instanceName);
     xml = xml + '</jns0:instanceName>';
    }
    // block for local variables
    {
     if (this._nameValues != null) {
      for (var ax = 0;ax < this._nameValues.length;ax ++) {
       if (this._nameValues[ax] == null) {
        xml = xml + '<jns0:nameValues/>';
       } else {
        xml = xml + this._nameValues[ax].serialize(cxfjsutils, 'jns0:nameValues', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_TemplateInfoInstance.prototype.serialize = SAWSOAP_TemplateInfoInstance_serialize;

function SAWSOAP_TemplateInfoInstance_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_TemplateInfoInstance();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing instanceName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setInstanceName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nameValues');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'nameValues')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'nameValues'));
     newobject.setNameValues(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}TemplateInfo
//
function SAWSOAP_TemplateInfo () {
    this.typeMarker = 'SAWSOAP_TemplateInfo';
    this._templateForEach = '';
    this._templateIterator = '';
    this._instance = [];
}

//
// accessor is SAWSOAP_TemplateInfo.prototype.getTemplateForEach
// element get for templateForEach
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for templateForEach
// setter function is is SAWSOAP_TemplateInfo.prototype.setTemplateForEach
//
function SAWSOAP_TemplateInfo_getTemplateForEach() { return this._templateForEach;}

SAWSOAP_TemplateInfo.prototype.getTemplateForEach = SAWSOAP_TemplateInfo_getTemplateForEach;

function SAWSOAP_TemplateInfo_setTemplateForEach(value) { this._templateForEach = value;}

SAWSOAP_TemplateInfo.prototype.setTemplateForEach = SAWSOAP_TemplateInfo_setTemplateForEach;
//
// accessor is SAWSOAP_TemplateInfo.prototype.getTemplateIterator
// element get for templateIterator
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for templateIterator
// setter function is is SAWSOAP_TemplateInfo.prototype.setTemplateIterator
//
function SAWSOAP_TemplateInfo_getTemplateIterator() { return this._templateIterator;}

SAWSOAP_TemplateInfo.prototype.getTemplateIterator = SAWSOAP_TemplateInfo_getTemplateIterator;

function SAWSOAP_TemplateInfo_setTemplateIterator(value) { this._templateIterator = value;}

SAWSOAP_TemplateInfo.prototype.setTemplateIterator = SAWSOAP_TemplateInfo_setTemplateIterator;
//
// accessor is SAWSOAP_TemplateInfo.prototype.getInstance
// element get for instance
// - element type is {urn://oracle.bi.webservices/v6}TemplateInfoInstance
// - required element
// - array
//
// element set for instance
// setter function is is SAWSOAP_TemplateInfo.prototype.setInstance
//
function SAWSOAP_TemplateInfo_getInstance() { return this._instance;}

SAWSOAP_TemplateInfo.prototype.getInstance = SAWSOAP_TemplateInfo_getInstance;

function SAWSOAP_TemplateInfo_setInstance(value) { this._instance = value;}

SAWSOAP_TemplateInfo.prototype.setInstance = SAWSOAP_TemplateInfo_setInstance;
//
// Serialize {urn://oracle.bi.webservices/v6}TemplateInfo
//
function SAWSOAP_TemplateInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:templateForEach>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._templateForEach);
     xml = xml + '</jns0:templateForEach>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:templateIterator>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._templateIterator);
     xml = xml + '</jns0:templateIterator>';
    }
    // block for local variables
    {
     if (this._instance != null) {
      for (var ax = 0;ax < this._instance.length;ax ++) {
       if (this._instance[ax] == null) {
        xml = xml + '<jns0:instance/>';
       } else {
        xml = xml + this._instance[ax].serialize(cxfjsutils, 'jns0:instance', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_TemplateInfo.prototype.serialize = SAWSOAP_TemplateInfo_serialize;

function SAWSOAP_TemplateInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_TemplateInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing templateForEach');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTemplateForEach(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing templateIterator');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTemplateIterator(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing instance');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'instance')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_TemplateInfoInstance_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'instance'));
     newobject.setInstance(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SessionEnvironment
//
function SAWSOAP_SessionEnvironment () {
    this.typeMarker = 'SAWSOAP_SessionEnvironment';
    this._userName = '';
    this._homeDirectory = null;
    this._sharedDirectories = [];
}

//
// accessor is SAWSOAP_SessionEnvironment.prototype.getUserName
// element get for userName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for userName
// setter function is is SAWSOAP_SessionEnvironment.prototype.setUserName
//
function SAWSOAP_SessionEnvironment_getUserName() { return this._userName;}

SAWSOAP_SessionEnvironment.prototype.getUserName = SAWSOAP_SessionEnvironment_getUserName;

function SAWSOAP_SessionEnvironment_setUserName(value) { this._userName = value;}

SAWSOAP_SessionEnvironment.prototype.setUserName = SAWSOAP_SessionEnvironment_setUserName;
//
// accessor is SAWSOAP_SessionEnvironment.prototype.getHomeDirectory
// element get for homeDirectory
// - element type is {urn://oracle.bi.webservices/v6}ItemInfo
// - required element
//
// element set for homeDirectory
// setter function is is SAWSOAP_SessionEnvironment.prototype.setHomeDirectory
//
function SAWSOAP_SessionEnvironment_getHomeDirectory() { return this._homeDirectory;}

SAWSOAP_SessionEnvironment.prototype.getHomeDirectory = SAWSOAP_SessionEnvironment_getHomeDirectory;

function SAWSOAP_SessionEnvironment_setHomeDirectory(value) { this._homeDirectory = value;}

SAWSOAP_SessionEnvironment.prototype.setHomeDirectory = SAWSOAP_SessionEnvironment_setHomeDirectory;
//
// accessor is SAWSOAP_SessionEnvironment.prototype.getSharedDirectories
// element get for sharedDirectories
// - element type is {urn://oracle.bi.webservices/v6}ItemInfo
// - required element
// - array
//
// element set for sharedDirectories
// setter function is is SAWSOAP_SessionEnvironment.prototype.setSharedDirectories
//
function SAWSOAP_SessionEnvironment_getSharedDirectories() { return this._sharedDirectories;}

SAWSOAP_SessionEnvironment.prototype.getSharedDirectories = SAWSOAP_SessionEnvironment_getSharedDirectories;

function SAWSOAP_SessionEnvironment_setSharedDirectories(value) { this._sharedDirectories = value;}

SAWSOAP_SessionEnvironment.prototype.setSharedDirectories = SAWSOAP_SessionEnvironment_setSharedDirectories;
//
// Serialize {urn://oracle.bi.webservices/v6}SessionEnvironment
//
function SAWSOAP_SessionEnvironment_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:userName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._userName);
     xml = xml + '</jns0:userName>';
    }
    // block for local variables
    {
     xml = xml + this._homeDirectory.serialize(cxfjsutils, 'jns0:homeDirectory', null);
    }
    // block for local variables
    {
     if (this._sharedDirectories != null) {
      for (var ax = 0;ax < this._sharedDirectories.length;ax ++) {
       if (this._sharedDirectories[ax] == null) {
        xml = xml + '<jns0:sharedDirectories/>';
       } else {
        xml = xml + this._sharedDirectories[ax].serialize(cxfjsutils, 'jns0:sharedDirectories', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SessionEnvironment.prototype.serialize = SAWSOAP_SessionEnvironment_serialize;

function SAWSOAP_SessionEnvironment_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SessionEnvironment();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing userName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUserName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing homeDirectory');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ItemInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setHomeDirectory(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sharedDirectories');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sharedDirectories')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_ItemInfo_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sharedDirectories'));
     newobject.setSharedDirectories(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}UpdateACLParams
//
function SAWSOAP_UpdateACLParams () {
    this.typeMarker = 'SAWSOAP_UpdateACLParams';
    this._updateFlag = '';
}

//
// accessor is SAWSOAP_UpdateACLParams.prototype.getUpdateFlag
// element get for updateFlag
// - element type is {urn://oracle.bi.webservices/v6}UpdateACLMode
// - required element
//
// element set for updateFlag
// setter function is is SAWSOAP_UpdateACLParams.prototype.setUpdateFlag
//
function SAWSOAP_UpdateACLParams_getUpdateFlag() { return this._updateFlag;}

SAWSOAP_UpdateACLParams.prototype.getUpdateFlag = SAWSOAP_UpdateACLParams_getUpdateFlag;

function SAWSOAP_UpdateACLParams_setUpdateFlag(value) { this._updateFlag = value;}

SAWSOAP_UpdateACLParams.prototype.setUpdateFlag = SAWSOAP_UpdateACLParams_setUpdateFlag;
//
// Serialize {urn://oracle.bi.webservices/v6}UpdateACLParams
//
function SAWSOAP_UpdateACLParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:updateFlag>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._updateFlag);
     xml = xml + '</jns0:updateFlag>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_UpdateACLParams.prototype.serialize = SAWSOAP_UpdateACLParams_serialize;

function SAWSOAP_UpdateACLParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_UpdateACLParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing updateFlag');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUpdateFlag(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ReportHTMLLinksMode
//
// - SamePage
// - NewPage
// - InPlace
//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}OverrideType
//
// - Default
// - None
// - All
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}NameValueArrayPair
//
function SAWSOAP_NameValueArrayPair () {
    this.typeMarker = 'SAWSOAP_NameValueArrayPair';
    this._name = '';
    this._values = [];
}

//
// accessor is SAWSOAP_NameValueArrayPair.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_NameValueArrayPair.prototype.setName
//
function SAWSOAP_NameValueArrayPair_getName() { return this._name;}

SAWSOAP_NameValueArrayPair.prototype.getName = SAWSOAP_NameValueArrayPair_getName;

function SAWSOAP_NameValueArrayPair_setName(value) { this._name = value;}

SAWSOAP_NameValueArrayPair.prototype.setName = SAWSOAP_NameValueArrayPair_setName;
//
// accessor is SAWSOAP_NameValueArrayPair.prototype.getValues
// element get for values
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for values
// setter function is is SAWSOAP_NameValueArrayPair.prototype.setValues
//
function SAWSOAP_NameValueArrayPair_getValues() { return this._values;}

SAWSOAP_NameValueArrayPair.prototype.getValues = SAWSOAP_NameValueArrayPair_getValues;

function SAWSOAP_NameValueArrayPair_setValues(value) { this._values = value;}

SAWSOAP_NameValueArrayPair.prototype.setValues = SAWSOAP_NameValueArrayPair_setValues;
//
// Serialize {urn://oracle.bi.webservices/v6}NameValueArrayPair
//
function SAWSOAP_NameValueArrayPair_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     if (this._values != null) {
      for (var ax = 0;ax < this._values.length;ax ++) {
       if (this._values[ax] == null) {
        xml = xml + '<jns0:values/>';
       } else {
        xml = xml + '<jns0:values>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._values[ax]);
        xml = xml + '</jns0:values>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_NameValueArrayPair.prototype.serialize = SAWSOAP_NameValueArrayPair_serialize;

function SAWSOAP_NameValueArrayPair_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_NameValueArrayPair();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing values');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'values')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'values'));
     newobject.setValues(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}Privilege
//
function SAWSOAP_Privilege () {
    this.typeMarker = 'SAWSOAP_Privilege';
    this._name = '';
    this._description = null;
}

//
// accessor is SAWSOAP_Privilege.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_Privilege.prototype.setName
//
function SAWSOAP_Privilege_getName() { return this._name;}

SAWSOAP_Privilege.prototype.getName = SAWSOAP_Privilege_getName;

function SAWSOAP_Privilege_setName(value) { this._name = value;}

SAWSOAP_Privilege.prototype.setName = SAWSOAP_Privilege_setName;
//
// accessor is SAWSOAP_Privilege.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for description
// setter function is is SAWSOAP_Privilege.prototype.setDescription
//
function SAWSOAP_Privilege_getDescription() { return this._description;}

SAWSOAP_Privilege.prototype.getDescription = SAWSOAP_Privilege_getDescription;

function SAWSOAP_Privilege_setDescription(value) { this._description = value;}

SAWSOAP_Privilege.prototype.setDescription = SAWSOAP_Privilege_setDescription;
//
// Serialize {urn://oracle.bi.webservices/v6}Privilege
//
function SAWSOAP_Privilege_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     if (this._description == null) {
      xml = xml + '<jns0:description xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</jns0:description>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_Privilege.prototype.serialize = SAWSOAP_Privilege_serialize;

function SAWSOAP_Privilege_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_Privilege();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ReportRef
//
function SAWSOAP_ReportRef () {
    this.typeMarker = 'SAWSOAP_ReportRef';
    this._reportPath = null;
    this._reportXml = null;
}

//
// accessor is SAWSOAP_ReportRef.prototype.getReportPath
// element get for reportPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for reportPath
// setter function is is SAWSOAP_ReportRef.prototype.setReportPath
//
function SAWSOAP_ReportRef_getReportPath() { return this._reportPath;}

SAWSOAP_ReportRef.prototype.getReportPath = SAWSOAP_ReportRef_getReportPath;

function SAWSOAP_ReportRef_setReportPath(value) { this._reportPath = value;}

SAWSOAP_ReportRef.prototype.setReportPath = SAWSOAP_ReportRef_setReportPath;
//
// accessor is SAWSOAP_ReportRef.prototype.getReportXml
// element get for reportXml
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for reportXml
// setter function is is SAWSOAP_ReportRef.prototype.setReportXml
//
function SAWSOAP_ReportRef_getReportXml() { return this._reportXml;}

SAWSOAP_ReportRef.prototype.getReportXml = SAWSOAP_ReportRef_getReportXml;

function SAWSOAP_ReportRef_setReportXml(value) { this._reportXml = value;}

SAWSOAP_ReportRef.prototype.setReportXml = SAWSOAP_ReportRef_setReportXml;
//
// Serialize {urn://oracle.bi.webservices/v6}ReportRef
//
function SAWSOAP_ReportRef_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._reportPath == null) {
      xml = xml + '<jns0:reportPath xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:reportPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._reportPath);
      xml = xml + '</jns0:reportPath>';
     }
    }
    // block for local variables
    {
     if (this._reportXml == null) {
      xml = xml + '<jns0:reportXml xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:reportXml>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._reportXml);
      xml = xml + '</jns0:reportXml>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ReportRef.prototype.serialize = SAWSOAP_ReportRef_serialize;

function SAWSOAP_ReportRef_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ReportRef();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportPath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportXml');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportXml(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}UpdateACLMode
//
// - ReplaceAcl
// - ReplaceForSpecifiedAccounts
// - DeleteAccountsFromAcl
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SATable
//
function SAWSOAP_SATable () {
    this.typeMarker = 'SAWSOAP_SATable';
    this._name = '';
    this._displayName = '';
    this._description = '';
    this._columns = [];
}

//
// accessor is SAWSOAP_SATable.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_SATable.prototype.setName
//
function SAWSOAP_SATable_getName() { return this._name;}

SAWSOAP_SATable.prototype.getName = SAWSOAP_SATable_getName;

function SAWSOAP_SATable_setName(value) { this._name = value;}

SAWSOAP_SATable.prototype.setName = SAWSOAP_SATable_setName;
//
// accessor is SAWSOAP_SATable.prototype.getDisplayName
// element get for displayName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for displayName
// setter function is is SAWSOAP_SATable.prototype.setDisplayName
//
function SAWSOAP_SATable_getDisplayName() { return this._displayName;}

SAWSOAP_SATable.prototype.getDisplayName = SAWSOAP_SATable_getDisplayName;

function SAWSOAP_SATable_setDisplayName(value) { this._displayName = value;}

SAWSOAP_SATable.prototype.setDisplayName = SAWSOAP_SATable_setDisplayName;
//
// accessor is SAWSOAP_SATable.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is SAWSOAP_SATable.prototype.setDescription
//
function SAWSOAP_SATable_getDescription() { return this._description;}

SAWSOAP_SATable.prototype.getDescription = SAWSOAP_SATable_getDescription;

function SAWSOAP_SATable_setDescription(value) { this._description = value;}

SAWSOAP_SATable.prototype.setDescription = SAWSOAP_SATable_setDescription;
//
// accessor is SAWSOAP_SATable.prototype.getColumns
// element get for columns
// - element type is {urn://oracle.bi.webservices/v6}SAColumn
// - required element
// - array
// - nillable
//
// element set for columns
// setter function is is SAWSOAP_SATable.prototype.setColumns
//
function SAWSOAP_SATable_getColumns() { return this._columns;}

SAWSOAP_SATable.prototype.getColumns = SAWSOAP_SATable_getColumns;

function SAWSOAP_SATable_setColumns(value) { this._columns = value;}

SAWSOAP_SATable.prototype.setColumns = SAWSOAP_SATable_setColumns;
//
// Serialize {urn://oracle.bi.webservices/v6}SATable
//
function SAWSOAP_SATable_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:displayName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._displayName);
     xml = xml + '</jns0:displayName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</jns0:description>';
    }
    // block for local variables
    {
     if (this._columns != null) {
      for (var ax = 0;ax < this._columns.length;ax ++) {
       if (this._columns[ax] == null) {
        xml = xml + '<jns0:columns xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._columns[ax].serialize(cxfjsutils, 'jns0:columns', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SATable.prototype.serialize = SAWSOAP_SATable_serialize;

function SAWSOAP_SATable_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SATable();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing displayName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDisplayName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing columns');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'columns')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_SAColumn_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'columns'));
     newobject.setColumns(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}NameValuePair
//
function SAWSOAP_NameValuePair () {
    this.typeMarker = 'SAWSOAP_NameValuePair';
    this._name = '';
    this._value = '';
}

//
// accessor is SAWSOAP_NameValuePair.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_NameValuePair.prototype.setName
//
function SAWSOAP_NameValuePair_getName() { return this._name;}

SAWSOAP_NameValuePair.prototype.getName = SAWSOAP_NameValuePair_getName;

function SAWSOAP_NameValuePair_setName(value) { this._name = value;}

SAWSOAP_NameValuePair.prototype.setName = SAWSOAP_NameValuePair_setName;
//
// accessor is SAWSOAP_NameValuePair.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is SAWSOAP_NameValuePair.prototype.setValue
//
function SAWSOAP_NameValuePair_getValue() { return this._value;}

SAWSOAP_NameValuePair.prototype.getValue = SAWSOAP_NameValuePair_getValue;

function SAWSOAP_NameValuePair_setValue(value) { this._value = value;}

SAWSOAP_NameValuePair.prototype.setValue = SAWSOAP_NameValuePair_setValue;
//
// Serialize {urn://oracle.bi.webservices/v6}NameValuePair
//
function SAWSOAP_NameValuePair_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</jns0:value>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_NameValuePair.prototype.serialize = SAWSOAP_NameValuePair_serialize;

function SAWSOAP_NameValuePair_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_NameValuePair();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}AccessControlToken
//
function SAWSOAP_AccessControlToken () {
    this.typeMarker = 'SAWSOAP_AccessControlToken';
    this._account = null;
    this._permissionMask = 0;
}

//
// accessor is SAWSOAP_AccessControlToken.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
//
// element set for account
// setter function is is SAWSOAP_AccessControlToken.prototype.setAccount
//
function SAWSOAP_AccessControlToken_getAccount() { return this._account;}

SAWSOAP_AccessControlToken.prototype.getAccount = SAWSOAP_AccessControlToken_getAccount;

function SAWSOAP_AccessControlToken_setAccount(value) { this._account = value;}

SAWSOAP_AccessControlToken.prototype.setAccount = SAWSOAP_AccessControlToken_setAccount;
//
// accessor is SAWSOAP_AccessControlToken.prototype.getPermissionMask
// element get for permissionMask
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for permissionMask
// setter function is is SAWSOAP_AccessControlToken.prototype.setPermissionMask
//
function SAWSOAP_AccessControlToken_getPermissionMask() { return this._permissionMask;}

SAWSOAP_AccessControlToken.prototype.getPermissionMask = SAWSOAP_AccessControlToken_getPermissionMask;

function SAWSOAP_AccessControlToken_setPermissionMask(value) { this._permissionMask = value;}

SAWSOAP_AccessControlToken.prototype.setPermissionMask = SAWSOAP_AccessControlToken_setPermissionMask;
//
// Serialize {urn://oracle.bi.webservices/v6}AccessControlToken
//
function SAWSOAP_AccessControlToken_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._account.serialize(cxfjsutils, 'jns0:account', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:permissionMask>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._permissionMask);
     xml = xml + '</jns0:permissionMask>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_AccessControlToken.prototype.serialize = SAWSOAP_AccessControlToken_serialize;

function SAWSOAP_AccessControlToken_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_AccessControlToken();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
    }
    newobject.setAccount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing permissionMask');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setPermissionMask(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}XMLQueryOutputFormat
//
// - SAWRowsetData
// - SAWRowsetSchema
// - SAWRowsetSchemaAndData
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions
//
function SAWSOAP_XMLQueryExecutionOptions () {
    this.typeMarker = 'SAWSOAP_XMLQueryExecutionOptions';
    this._async = '';
    this._maxRowsPerPage = 0;
    this._refresh = '';
    this._presentationInfo = '';
    this._type = null;
}

//
// accessor is SAWSOAP_XMLQueryExecutionOptions.prototype.getAsync
// element get for async
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for async
// setter function is is SAWSOAP_XMLQueryExecutionOptions.prototype.setAsync
//
function SAWSOAP_XMLQueryExecutionOptions_getAsync() { return this._async;}

SAWSOAP_XMLQueryExecutionOptions.prototype.getAsync = SAWSOAP_XMLQueryExecutionOptions_getAsync;

function SAWSOAP_XMLQueryExecutionOptions_setAsync(value) { this._async = value;}

SAWSOAP_XMLQueryExecutionOptions.prototype.setAsync = SAWSOAP_XMLQueryExecutionOptions_setAsync;
//
// accessor is SAWSOAP_XMLQueryExecutionOptions.prototype.getMaxRowsPerPage
// element get for maxRowsPerPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for maxRowsPerPage
// setter function is is SAWSOAP_XMLQueryExecutionOptions.prototype.setMaxRowsPerPage
//
function SAWSOAP_XMLQueryExecutionOptions_getMaxRowsPerPage() { return this._maxRowsPerPage;}

SAWSOAP_XMLQueryExecutionOptions.prototype.getMaxRowsPerPage = SAWSOAP_XMLQueryExecutionOptions_getMaxRowsPerPage;

function SAWSOAP_XMLQueryExecutionOptions_setMaxRowsPerPage(value) { this._maxRowsPerPage = value;}

SAWSOAP_XMLQueryExecutionOptions.prototype.setMaxRowsPerPage = SAWSOAP_XMLQueryExecutionOptions_setMaxRowsPerPage;
//
// accessor is SAWSOAP_XMLQueryExecutionOptions.prototype.getRefresh
// element get for refresh
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for refresh
// setter function is is SAWSOAP_XMLQueryExecutionOptions.prototype.setRefresh
//
function SAWSOAP_XMLQueryExecutionOptions_getRefresh() { return this._refresh;}

SAWSOAP_XMLQueryExecutionOptions.prototype.getRefresh = SAWSOAP_XMLQueryExecutionOptions_getRefresh;

function SAWSOAP_XMLQueryExecutionOptions_setRefresh(value) { this._refresh = value;}

SAWSOAP_XMLQueryExecutionOptions.prototype.setRefresh = SAWSOAP_XMLQueryExecutionOptions_setRefresh;
//
// accessor is SAWSOAP_XMLQueryExecutionOptions.prototype.getPresentationInfo
// element get for presentationInfo
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for presentationInfo
// setter function is is SAWSOAP_XMLQueryExecutionOptions.prototype.setPresentationInfo
//
function SAWSOAP_XMLQueryExecutionOptions_getPresentationInfo() { return this._presentationInfo;}

SAWSOAP_XMLQueryExecutionOptions.prototype.getPresentationInfo = SAWSOAP_XMLQueryExecutionOptions_getPresentationInfo;

function SAWSOAP_XMLQueryExecutionOptions_setPresentationInfo(value) { this._presentationInfo = value;}

SAWSOAP_XMLQueryExecutionOptions.prototype.setPresentationInfo = SAWSOAP_XMLQueryExecutionOptions_setPresentationInfo;
//
// accessor is SAWSOAP_XMLQueryExecutionOptions.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for type
// setter function is is SAWSOAP_XMLQueryExecutionOptions.prototype.setType
//
function SAWSOAP_XMLQueryExecutionOptions_getType() { return this._type;}

SAWSOAP_XMLQueryExecutionOptions.prototype.getType = SAWSOAP_XMLQueryExecutionOptions_getType;

function SAWSOAP_XMLQueryExecutionOptions_setType(value) { this._type = value;}

SAWSOAP_XMLQueryExecutionOptions.prototype.setType = SAWSOAP_XMLQueryExecutionOptions_setType;
//
// Serialize {urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions
//
function SAWSOAP_XMLQueryExecutionOptions_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:async>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._async);
     xml = xml + '</jns0:async>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:maxRowsPerPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._maxRowsPerPage);
     xml = xml + '</jns0:maxRowsPerPage>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:refresh>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._refresh);
     xml = xml + '</jns0:refresh>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:presentationInfo>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._presentationInfo);
     xml = xml + '</jns0:presentationInfo>';
    }
    // block for local variables
    {
     if (this._type == null) {
      xml = xml + '<jns0:type xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:type>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._type);
      xml = xml + '</jns0:type>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_XMLQueryExecutionOptions.prototype.serialize = SAWSOAP_XMLQueryExecutionOptions_serialize;

function SAWSOAP_XMLQueryExecutionOptions_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_XMLQueryExecutionOptions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing async');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAsync(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing maxRowsPerPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setMaxRowsPerPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing refresh');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRefresh(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing presentationInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setPresentationInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}GetSubItemsParams
//
function SAWSOAP_GetSubItemsParams () {
    this.typeMarker = 'SAWSOAP_GetSubItemsParams';
    this._filter = null;
    this._includeACL = '';
    this._withPermission = 0;
    this._withPermissionMask = 0;
    this._withAttributes = 0;
    this._withAttributesMask = 0;
}

//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getFilter
// element get for filter
// - element type is {urn://oracle.bi.webservices/v6}GetSubItemsFilter
// - required element
// - nillable
//
// element set for filter
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setFilter
//
function SAWSOAP_GetSubItemsParams_getFilter() { return this._filter;}

SAWSOAP_GetSubItemsParams.prototype.getFilter = SAWSOAP_GetSubItemsParams_getFilter;

function SAWSOAP_GetSubItemsParams_setFilter(value) { this._filter = value;}

SAWSOAP_GetSubItemsParams.prototype.setFilter = SAWSOAP_GetSubItemsParams_setFilter;
//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getIncludeACL
// element get for includeACL
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for includeACL
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setIncludeACL
//
function SAWSOAP_GetSubItemsParams_getIncludeACL() { return this._includeACL;}

SAWSOAP_GetSubItemsParams.prototype.getIncludeACL = SAWSOAP_GetSubItemsParams_getIncludeACL;

function SAWSOAP_GetSubItemsParams_setIncludeACL(value) { this._includeACL = value;}

SAWSOAP_GetSubItemsParams.prototype.setIncludeACL = SAWSOAP_GetSubItemsParams_setIncludeACL;
//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getWithPermission
// element get for withPermission
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for withPermission
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setWithPermission
//
function SAWSOAP_GetSubItemsParams_getWithPermission() { return this._withPermission;}

SAWSOAP_GetSubItemsParams.prototype.getWithPermission = SAWSOAP_GetSubItemsParams_getWithPermission;

function SAWSOAP_GetSubItemsParams_setWithPermission(value) { this._withPermission = value;}

SAWSOAP_GetSubItemsParams.prototype.setWithPermission = SAWSOAP_GetSubItemsParams_setWithPermission;
//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getWithPermissionMask
// element get for withPermissionMask
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for withPermissionMask
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setWithPermissionMask
//
function SAWSOAP_GetSubItemsParams_getWithPermissionMask() { return this._withPermissionMask;}

SAWSOAP_GetSubItemsParams.prototype.getWithPermissionMask = SAWSOAP_GetSubItemsParams_getWithPermissionMask;

function SAWSOAP_GetSubItemsParams_setWithPermissionMask(value) { this._withPermissionMask = value;}

SAWSOAP_GetSubItemsParams.prototype.setWithPermissionMask = SAWSOAP_GetSubItemsParams_setWithPermissionMask;
//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getWithAttributes
// element get for withAttributes
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for withAttributes
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setWithAttributes
//
function SAWSOAP_GetSubItemsParams_getWithAttributes() { return this._withAttributes;}

SAWSOAP_GetSubItemsParams.prototype.getWithAttributes = SAWSOAP_GetSubItemsParams_getWithAttributes;

function SAWSOAP_GetSubItemsParams_setWithAttributes(value) { this._withAttributes = value;}

SAWSOAP_GetSubItemsParams.prototype.setWithAttributes = SAWSOAP_GetSubItemsParams_setWithAttributes;
//
// accessor is SAWSOAP_GetSubItemsParams.prototype.getWithAttributesMask
// element get for withAttributesMask
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for withAttributesMask
// setter function is is SAWSOAP_GetSubItemsParams.prototype.setWithAttributesMask
//
function SAWSOAP_GetSubItemsParams_getWithAttributesMask() { return this._withAttributesMask;}

SAWSOAP_GetSubItemsParams.prototype.getWithAttributesMask = SAWSOAP_GetSubItemsParams_getWithAttributesMask;

function SAWSOAP_GetSubItemsParams_setWithAttributesMask(value) { this._withAttributesMask = value;}

SAWSOAP_GetSubItemsParams.prototype.setWithAttributesMask = SAWSOAP_GetSubItemsParams_setWithAttributesMask;
//
// Serialize {urn://oracle.bi.webservices/v6}GetSubItemsParams
//
function SAWSOAP_GetSubItemsParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._filter == null) {
      xml = xml + '<jns0:filter xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._filter.serialize(cxfjsutils, 'jns0:filter', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:includeACL>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._includeACL);
     xml = xml + '</jns0:includeACL>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:withPermission>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._withPermission);
     xml = xml + '</jns0:withPermission>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:withPermissionMask>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._withPermissionMask);
     xml = xml + '</jns0:withPermissionMask>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:withAttributes>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._withAttributes);
     xml = xml + '</jns0:withAttributes>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:withAttributesMask>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._withAttributesMask);
     xml = xml + '</jns0:withAttributesMask>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_GetSubItemsParams.prototype.serialize = SAWSOAP_GetSubItemsParams_serialize;

function SAWSOAP_GetSubItemsParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_GetSubItemsParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_GetSubItemsFilter_deserialize(cxfjsutils, curElement);
    }
    newobject.setFilter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing includeACL');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIncludeACL(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing withPermission');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setWithPermission(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing withPermissionMask');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setWithPermissionMask(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing withAttributes');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setWithAttributes(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing withAttributesMask');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setWithAttributesMask(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SAWException
//
function SAWSOAP_SAWException () {
    this.typeMarker = 'SAWSOAP_SAWException';
    this._message = '';
    this._exception = [];
}

//
// accessor is SAWSOAP_SAWException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for message
// setter function is is SAWSOAP_SAWException.prototype.setMessage
//
function SAWSOAP_SAWException_getMessage() { return this._message;}

SAWSOAP_SAWException.prototype.getMessage = SAWSOAP_SAWException_getMessage;

function SAWSOAP_SAWException_setMessage(value) { this._message = value;}

SAWSOAP_SAWException.prototype.setMessage = SAWSOAP_SAWException_setMessage;
//
// accessor is SAWSOAP_SAWException.prototype.getException
// element get for exception
// - element type is {urn://oracle.bi.webservices/v6}SAWException
// - required element
// - array
//
// element set for exception
// setter function is is SAWSOAP_SAWException.prototype.setException
//
function SAWSOAP_SAWException_getException() { return this._exception;}

SAWSOAP_SAWException.prototype.getException = SAWSOAP_SAWException_getException;

function SAWSOAP_SAWException_setException(value) { this._exception = value;}

SAWSOAP_SAWException.prototype.setException = SAWSOAP_SAWException_setException;
//
// Serialize {urn://oracle.bi.webservices/v6}SAWException
//
function SAWSOAP_SAWException_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:message>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._message);
     xml = xml + '</jns0:message>';
    }
    // block for local variables
    {
     if (this._exception != null) {
      for (var ax = 0;ax < this._exception.length;ax ++) {
       if (this._exception[ax] == null) {
        xml = xml + '<jns0:exception/>';
       } else {
        xml = xml + this._exception[ax].serialize(cxfjsutils, 'jns0:exception', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SAWException.prototype.serialize = SAWSOAP_SAWException_serialize;

function SAWSOAP_SAWException_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SAWException();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing message');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exception');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'exception')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_SAWException_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'exception'));
     newobject.setException(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ACL
//
function SAWSOAP_ACL () {
    this.typeMarker = 'SAWSOAP_ACL';
    this._dummy = null;
    this._accessControlTokens = [];
}

//
// accessor is SAWSOAP_ACL.prototype.getDummy
// element get for dummy
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for dummy
// setter function is is SAWSOAP_ACL.prototype.setDummy
//
function SAWSOAP_ACL_getDummy() { return this._dummy;}

SAWSOAP_ACL.prototype.getDummy = SAWSOAP_ACL_getDummy;

function SAWSOAP_ACL_setDummy(value) { this._dummy = value;}

SAWSOAP_ACL.prototype.setDummy = SAWSOAP_ACL_setDummy;
//
// accessor is SAWSOAP_ACL.prototype.getAccessControlTokens
// element get for accessControlTokens
// - element type is {urn://oracle.bi.webservices/v6}AccessControlToken
// - required element
// - array
//
// element set for accessControlTokens
// setter function is is SAWSOAP_ACL.prototype.setAccessControlTokens
//
function SAWSOAP_ACL_getAccessControlTokens() { return this._accessControlTokens;}

SAWSOAP_ACL.prototype.getAccessControlTokens = SAWSOAP_ACL_getAccessControlTokens;

function SAWSOAP_ACL_setAccessControlTokens(value) { this._accessControlTokens = value;}

SAWSOAP_ACL.prototype.setAccessControlTokens = SAWSOAP_ACL_setAccessControlTokens;
//
// Serialize {urn://oracle.bi.webservices/v6}ACL
//
function SAWSOAP_ACL_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._dummy != null) {
      xml = xml + '<jns0:dummy>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._dummy);
      xml = xml + '</jns0:dummy>';
     }
    }
    // block for local variables
    {
     if (this._accessControlTokens != null) {
      for (var ax = 0;ax < this._accessControlTokens.length;ax ++) {
       if (this._accessControlTokens[ax] == null) {
        xml = xml + '<jns0:accessControlTokens/>';
       } else {
        xml = xml + this._accessControlTokens[ax].serialize(cxfjsutils, 'jns0:accessControlTokens', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ACL.prototype.serialize = SAWSOAP_ACL_serialize;

function SAWSOAP_ACL_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ACL();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dummy');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'dummy')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDummy(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accessControlTokens');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'accessControlTokens')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_AccessControlToken_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'accessControlTokens'));
     newobject.setAccessControlTokens(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ReportParams
//
function SAWSOAP_ReportParams () {
    this.typeMarker = 'SAWSOAP_ReportParams';
    this._filterExpressions = [];
    this._variables = [];
    this._nameValues = [];
    this._templateInfos = [];
    this._viewName = null;
}

//
// accessor is SAWSOAP_ReportParams.prototype.getFilterExpressions
// element get for filterExpressions
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for filterExpressions
// setter function is is SAWSOAP_ReportParams.prototype.setFilterExpressions
//
function SAWSOAP_ReportParams_getFilterExpressions() { return this._filterExpressions;}

SAWSOAP_ReportParams.prototype.getFilterExpressions = SAWSOAP_ReportParams_getFilterExpressions;

function SAWSOAP_ReportParams_setFilterExpressions(value) { this._filterExpressions = value;}

SAWSOAP_ReportParams.prototype.setFilterExpressions = SAWSOAP_ReportParams_setFilterExpressions;
//
// accessor is SAWSOAP_ReportParams.prototype.getVariables
// element get for variables
// - element type is {urn://oracle.bi.webservices/v6}Variable
// - required element
// - array
//
// element set for variables
// setter function is is SAWSOAP_ReportParams.prototype.setVariables
//
function SAWSOAP_ReportParams_getVariables() { return this._variables;}

SAWSOAP_ReportParams.prototype.getVariables = SAWSOAP_ReportParams_getVariables;

function SAWSOAP_ReportParams_setVariables(value) { this._variables = value;}

SAWSOAP_ReportParams.prototype.setVariables = SAWSOAP_ReportParams_setVariables;
//
// accessor is SAWSOAP_ReportParams.prototype.getNameValues
// element get for nameValues
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
//
// element set for nameValues
// setter function is is SAWSOAP_ReportParams.prototype.setNameValues
//
function SAWSOAP_ReportParams_getNameValues() { return this._nameValues;}

SAWSOAP_ReportParams.prototype.getNameValues = SAWSOAP_ReportParams_getNameValues;

function SAWSOAP_ReportParams_setNameValues(value) { this._nameValues = value;}

SAWSOAP_ReportParams.prototype.setNameValues = SAWSOAP_ReportParams_setNameValues;
//
// accessor is SAWSOAP_ReportParams.prototype.getTemplateInfos
// element get for templateInfos
// - element type is {urn://oracle.bi.webservices/v6}TemplateInfo
// - required element
// - array
//
// element set for templateInfos
// setter function is is SAWSOAP_ReportParams.prototype.setTemplateInfos
//
function SAWSOAP_ReportParams_getTemplateInfos() { return this._templateInfos;}

SAWSOAP_ReportParams.prototype.getTemplateInfos = SAWSOAP_ReportParams_getTemplateInfos;

function SAWSOAP_ReportParams_setTemplateInfos(value) { this._templateInfos = value;}

SAWSOAP_ReportParams.prototype.setTemplateInfos = SAWSOAP_ReportParams_setTemplateInfos;
//
// accessor is SAWSOAP_ReportParams.prototype.getViewName
// element get for viewName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for viewName
// setter function is is SAWSOAP_ReportParams.prototype.setViewName
//
function SAWSOAP_ReportParams_getViewName() { return this._viewName;}

SAWSOAP_ReportParams.prototype.getViewName = SAWSOAP_ReportParams_getViewName;

function SAWSOAP_ReportParams_setViewName(value) { this._viewName = value;}

SAWSOAP_ReportParams.prototype.setViewName = SAWSOAP_ReportParams_setViewName;
//
// Serialize {urn://oracle.bi.webservices/v6}ReportParams
//
function SAWSOAP_ReportParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._filterExpressions != null) {
      for (var ax = 0;ax < this._filterExpressions.length;ax ++) {
       if (this._filterExpressions[ax] == null) {
        xml = xml + '<jns0:filterExpressions/>';
       } else {
        xml = xml + '<jns0:filterExpressions>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._filterExpressions[ax]);
        xml = xml + '</jns0:filterExpressions>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._variables != null) {
      for (var ax = 0;ax < this._variables.length;ax ++) {
       if (this._variables[ax] == null) {
        xml = xml + '<jns0:variables/>';
       } else {
        xml = xml + this._variables[ax].serialize(cxfjsutils, 'jns0:variables', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._nameValues != null) {
      for (var ax = 0;ax < this._nameValues.length;ax ++) {
       if (this._nameValues[ax] == null) {
        xml = xml + '<jns0:nameValues/>';
       } else {
        xml = xml + this._nameValues[ax].serialize(cxfjsutils, 'jns0:nameValues', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._templateInfos != null) {
      for (var ax = 0;ax < this._templateInfos.length;ax ++) {
       if (this._templateInfos[ax] == null) {
        xml = xml + '<jns0:templateInfos/>';
       } else {
        xml = xml + this._templateInfos[ax].serialize(cxfjsutils, 'jns0:templateInfos', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._viewName != null) {
      xml = xml + '<jns0:viewName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._viewName);
      xml = xml + '</jns0:viewName>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ReportParams.prototype.serialize = SAWSOAP_ReportParams_serialize;

function SAWSOAP_ReportParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ReportParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filterExpressions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'filterExpressions')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'filterExpressions'));
     newobject.setFilterExpressions(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing variables');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'variables')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Variable_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'variables'));
     newobject.setVariables(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nameValues');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'nameValues')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'nameValues'));
     newobject.setNameValues(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing templateInfos');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'templateInfos')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_TemplateInfo_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'templateInfos'));
     newobject.setTemplateInfos(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing viewName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'viewName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setViewName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}QueryResults
//
function SAWSOAP_QueryResults () {
    this.typeMarker = 'SAWSOAP_QueryResults';
    this._rowset = '';
    this._queryID = '';
    this._finished = '';
}

//
// accessor is SAWSOAP_QueryResults.prototype.getRowset
// element get for rowset
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for rowset
// setter function is is SAWSOAP_QueryResults.prototype.setRowset
//
function SAWSOAP_QueryResults_getRowset() { return this._rowset;}

SAWSOAP_QueryResults.prototype.getRowset = SAWSOAP_QueryResults_getRowset;

function SAWSOAP_QueryResults_setRowset(value) { this._rowset = value;}

SAWSOAP_QueryResults.prototype.setRowset = SAWSOAP_QueryResults_setRowset;
//
// accessor is SAWSOAP_QueryResults.prototype.getQueryID
// element get for queryID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for queryID
// setter function is is SAWSOAP_QueryResults.prototype.setQueryID
//
function SAWSOAP_QueryResults_getQueryID() { return this._queryID;}

SAWSOAP_QueryResults.prototype.getQueryID = SAWSOAP_QueryResults_getQueryID;

function SAWSOAP_QueryResults_setQueryID(value) { this._queryID = value;}

SAWSOAP_QueryResults.prototype.setQueryID = SAWSOAP_QueryResults_setQueryID;
//
// accessor is SAWSOAP_QueryResults.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is SAWSOAP_QueryResults.prototype.setFinished
//
function SAWSOAP_QueryResults_getFinished() { return this._finished;}

SAWSOAP_QueryResults.prototype.getFinished = SAWSOAP_QueryResults_getFinished;

function SAWSOAP_QueryResults_setFinished(value) { this._finished = value;}

SAWSOAP_QueryResults.prototype.setFinished = SAWSOAP_QueryResults_setFinished;
//
// Serialize {urn://oracle.bi.webservices/v6}QueryResults
//
function SAWSOAP_QueryResults_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:rowset>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._rowset);
     xml = xml + '</jns0:rowset>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:queryID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._queryID);
     xml = xml + '</jns0:queryID>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</jns0:finished>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_QueryResults.prototype.serialize = SAWSOAP_QueryResults_serialize;

function SAWSOAP_QueryResults_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_QueryResults();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing rowset');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setRowset(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing queryID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setQueryID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}JobStats
//
function SAWSOAP_JobStats () {
    this.typeMarker = 'SAWSOAP_JobStats';
    this._jobID = '';
    this._jobType = '';
    this._jobUser = '';
    this._jobState = '';
    this._jobTotalMilliSec = '';
    this._jobStartedTime = '';
    this._jobFinishedTime = null;
    this._jobIsCancelling = '';
    this._exception = null;
}

//
// accessor is SAWSOAP_JobStats.prototype.getJobID
// element get for jobID
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for jobID
// setter function is is SAWSOAP_JobStats.prototype.setJobID
//
function SAWSOAP_JobStats_getJobID() { return this._jobID;}

SAWSOAP_JobStats.prototype.getJobID = SAWSOAP_JobStats_getJobID;

function SAWSOAP_JobStats_setJobID(value) { this._jobID = value;}

SAWSOAP_JobStats.prototype.setJobID = SAWSOAP_JobStats_setJobID;
//
// accessor is SAWSOAP_JobStats.prototype.getJobType
// element get for jobType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for jobType
// setter function is is SAWSOAP_JobStats.prototype.setJobType
//
function SAWSOAP_JobStats_getJobType() { return this._jobType;}

SAWSOAP_JobStats.prototype.getJobType = SAWSOAP_JobStats_getJobType;

function SAWSOAP_JobStats_setJobType(value) { this._jobType = value;}

SAWSOAP_JobStats.prototype.setJobType = SAWSOAP_JobStats_setJobType;
//
// accessor is SAWSOAP_JobStats.prototype.getJobUser
// element get for jobUser
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for jobUser
// setter function is is SAWSOAP_JobStats.prototype.setJobUser
//
function SAWSOAP_JobStats_getJobUser() { return this._jobUser;}

SAWSOAP_JobStats.prototype.getJobUser = SAWSOAP_JobStats_getJobUser;

function SAWSOAP_JobStats_setJobUser(value) { this._jobUser = value;}

SAWSOAP_JobStats.prototype.setJobUser = SAWSOAP_JobStats_setJobUser;
//
// accessor is SAWSOAP_JobStats.prototype.getJobState
// element get for jobState
// - element type is null
// - required element
//
// element set for jobState
// setter function is is SAWSOAP_JobStats.prototype.setJobState
//
function SAWSOAP_JobStats_getJobState() { return this._jobState;}

SAWSOAP_JobStats.prototype.getJobState = SAWSOAP_JobStats_getJobState;

function SAWSOAP_JobStats_setJobState(value) { this._jobState = value;}

SAWSOAP_JobStats.prototype.setJobState = SAWSOAP_JobStats_setJobState;
//
// accessor is SAWSOAP_JobStats.prototype.getJobTotalMilliSec
// element get for jobTotalMilliSec
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for jobTotalMilliSec
// setter function is is SAWSOAP_JobStats.prototype.setJobTotalMilliSec
//
function SAWSOAP_JobStats_getJobTotalMilliSec() { return this._jobTotalMilliSec;}

SAWSOAP_JobStats.prototype.getJobTotalMilliSec = SAWSOAP_JobStats_getJobTotalMilliSec;

function SAWSOAP_JobStats_setJobTotalMilliSec(value) { this._jobTotalMilliSec = value;}

SAWSOAP_JobStats.prototype.setJobTotalMilliSec = SAWSOAP_JobStats_setJobTotalMilliSec;
//
// accessor is SAWSOAP_JobStats.prototype.getJobStartedTime
// element get for jobStartedTime
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for jobStartedTime
// setter function is is SAWSOAP_JobStats.prototype.setJobStartedTime
//
function SAWSOAP_JobStats_getJobStartedTime() { return this._jobStartedTime;}

SAWSOAP_JobStats.prototype.getJobStartedTime = SAWSOAP_JobStats_getJobStartedTime;

function SAWSOAP_JobStats_setJobStartedTime(value) { this._jobStartedTime = value;}

SAWSOAP_JobStats.prototype.setJobStartedTime = SAWSOAP_JobStats_setJobStartedTime;
//
// accessor is SAWSOAP_JobStats.prototype.getJobFinishedTime
// element get for jobFinishedTime
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - optional element
//
// element set for jobFinishedTime
// setter function is is SAWSOAP_JobStats.prototype.setJobFinishedTime
//
function SAWSOAP_JobStats_getJobFinishedTime() { return this._jobFinishedTime;}

SAWSOAP_JobStats.prototype.getJobFinishedTime = SAWSOAP_JobStats_getJobFinishedTime;

function SAWSOAP_JobStats_setJobFinishedTime(value) { this._jobFinishedTime = value;}

SAWSOAP_JobStats.prototype.setJobFinishedTime = SAWSOAP_JobStats_setJobFinishedTime;
//
// accessor is SAWSOAP_JobStats.prototype.getJobIsCancelling
// element get for jobIsCancelling
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for jobIsCancelling
// setter function is is SAWSOAP_JobStats.prototype.setJobIsCancelling
//
function SAWSOAP_JobStats_getJobIsCancelling() { return this._jobIsCancelling;}

SAWSOAP_JobStats.prototype.getJobIsCancelling = SAWSOAP_JobStats_getJobIsCancelling;

function SAWSOAP_JobStats_setJobIsCancelling(value) { this._jobIsCancelling = value;}

SAWSOAP_JobStats.prototype.setJobIsCancelling = SAWSOAP_JobStats_setJobIsCancelling;
//
// accessor is SAWSOAP_JobStats.prototype.getException
// element get for exception
// - element type is {urn://oracle.bi.webservices/v6}SAWException
// - optional element
//
// element set for exception
// setter function is is SAWSOAP_JobStats.prototype.setException
//
function SAWSOAP_JobStats_getException() { return this._exception;}

SAWSOAP_JobStats.prototype.getException = SAWSOAP_JobStats_getException;

function SAWSOAP_JobStats_setException(value) { this._exception = value;}

SAWSOAP_JobStats.prototype.setException = SAWSOAP_JobStats_setException;
//
// Serialize {urn://oracle.bi.webservices/v6}JobStats
//
function SAWSOAP_JobStats_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobID);
     xml = xml + '</jns0:jobID>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobType);
     xml = xml + '</jns0:jobType>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobUser>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobUser);
     xml = xml + '</jns0:jobUser>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobState>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobState);
     xml = xml + '</jns0:jobState>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobTotalMilliSec>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobTotalMilliSec);
     xml = xml + '</jns0:jobTotalMilliSec>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobStartedTime>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobStartedTime);
     xml = xml + '</jns0:jobStartedTime>';
    }
    // block for local variables
    {
     if (this._jobFinishedTime != null) {
      xml = xml + '<jns0:jobFinishedTime>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._jobFinishedTime);
      xml = xml + '</jns0:jobFinishedTime>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobIsCancelling>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobIsCancelling);
     xml = xml + '</jns0:jobIsCancelling>';
    }
    // block for local variables
    {
     if (this._exception != null) {
      xml = xml + this._exception.serialize(cxfjsutils, 'jns0:exception', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_JobStats.prototype.serialize = SAWSOAP_JobStats_serialize;

function SAWSOAP_JobStats_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_JobStats();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobUser');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobUser(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobState');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobState(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobTotalMilliSec');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobTotalMilliSec(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobStartedTime');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobStartedTime(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobFinishedTime');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'jobFinishedTime')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setJobFinishedTime(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobIsCancelling');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobIsCancelling(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exception');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'exception')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_SAWException_deserialize(cxfjsutils, curElement);
     }
     newobject.setException(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ImportFlags
//
// - processLocalChanges
// - processRemoteChanges
// - processAllChanges
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}GetSubItemsFilter
//
function SAWSOAP_GetSubItemsFilter () {
    this.typeMarker = 'SAWSOAP_GetSubItemsFilter';
    this._itemInfoFilters = [];
    this._dummy = null;
}

//
// accessor is SAWSOAP_GetSubItemsFilter.prototype.getItemInfoFilters
// element get for itemInfoFilters
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
// - nillable
//
// element set for itemInfoFilters
// setter function is is SAWSOAP_GetSubItemsFilter.prototype.setItemInfoFilters
//
function SAWSOAP_GetSubItemsFilter_getItemInfoFilters() { return this._itemInfoFilters;}

SAWSOAP_GetSubItemsFilter.prototype.getItemInfoFilters = SAWSOAP_GetSubItemsFilter_getItemInfoFilters;

function SAWSOAP_GetSubItemsFilter_setItemInfoFilters(value) { this._itemInfoFilters = value;}

SAWSOAP_GetSubItemsFilter.prototype.setItemInfoFilters = SAWSOAP_GetSubItemsFilter_setItemInfoFilters;
//
// accessor is SAWSOAP_GetSubItemsFilter.prototype.getDummy
// element get for dummy
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for dummy
// setter function is is SAWSOAP_GetSubItemsFilter.prototype.setDummy
//
function SAWSOAP_GetSubItemsFilter_getDummy() { return this._dummy;}

SAWSOAP_GetSubItemsFilter.prototype.getDummy = SAWSOAP_GetSubItemsFilter_getDummy;

function SAWSOAP_GetSubItemsFilter_setDummy(value) { this._dummy = value;}

SAWSOAP_GetSubItemsFilter.prototype.setDummy = SAWSOAP_GetSubItemsFilter_setDummy;
//
// Serialize {urn://oracle.bi.webservices/v6}GetSubItemsFilter
//
function SAWSOAP_GetSubItemsFilter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._itemInfoFilters != null) {
      for (var ax = 0;ax < this._itemInfoFilters.length;ax ++) {
       if (this._itemInfoFilters[ax] == null) {
        xml = xml + '<jns0:itemInfoFilters xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._itemInfoFilters[ax].serialize(cxfjsutils, 'jns0:itemInfoFilters', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._dummy == null) {
      xml = xml + '<jns0:dummy xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:dummy>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._dummy);
      xml = xml + '</jns0:dummy>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_GetSubItemsFilter.prototype.serialize = SAWSOAP_GetSubItemsFilter_serialize;

function SAWSOAP_GetSubItemsFilter_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_GetSubItemsFilter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing itemInfoFilters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemInfoFilters')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemInfoFilters'));
     newobject.setItemInfoFilters(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dummy');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDummy(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}PathMap
//
function SAWSOAP_PathMap () {
    this.typeMarker = 'SAWSOAP_PathMap';
    this._pathMapEntries = [];
}

//
// accessor is SAWSOAP_PathMap.prototype.getPathMapEntries
// element get for pathMapEntries
// - element type is {urn://oracle.bi.webservices/v6}PathMapEntry
// - required element
// - array
//
// element set for pathMapEntries
// setter function is is SAWSOAP_PathMap.prototype.setPathMapEntries
//
function SAWSOAP_PathMap_getPathMapEntries() { return this._pathMapEntries;}

SAWSOAP_PathMap.prototype.getPathMapEntries = SAWSOAP_PathMap_getPathMapEntries;

function SAWSOAP_PathMap_setPathMapEntries(value) { this._pathMapEntries = value;}

SAWSOAP_PathMap.prototype.setPathMapEntries = SAWSOAP_PathMap_setPathMapEntries;
//
// Serialize {urn://oracle.bi.webservices/v6}PathMap
//
function SAWSOAP_PathMap_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._pathMapEntries != null) {
      for (var ax = 0;ax < this._pathMapEntries.length;ax ++) {
       if (this._pathMapEntries[ax] == null) {
        xml = xml + '<jns0:pathMapEntries/>';
       } else {
        xml = xml + this._pathMapEntries[ax].serialize(cxfjsutils, 'jns0:pathMapEntries', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_PathMap.prototype.serialize = SAWSOAP_PathMap_serialize;

function SAWSOAP_PathMap_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_PathMap();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathMapEntries');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'pathMapEntries')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_PathMapEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'pathMapEntries'));
     newobject.setPathMapEntries(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SAColumn
//
function SAWSOAP_SAColumn () {
    this.typeMarker = 'SAWSOAP_SAColumn';
    this._name = '';
    this._displayName = '';
    this._description = '';
    this._nullable = '';
    this._dataType = '';
    this._aggregatable = '';
    this._aggrRule = '';
}

//
// accessor is SAWSOAP_SAColumn.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_SAColumn.prototype.setName
//
function SAWSOAP_SAColumn_getName() { return this._name;}

SAWSOAP_SAColumn.prototype.getName = SAWSOAP_SAColumn_getName;

function SAWSOAP_SAColumn_setName(value) { this._name = value;}

SAWSOAP_SAColumn.prototype.setName = SAWSOAP_SAColumn_setName;
//
// accessor is SAWSOAP_SAColumn.prototype.getDisplayName
// element get for displayName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for displayName
// setter function is is SAWSOAP_SAColumn.prototype.setDisplayName
//
function SAWSOAP_SAColumn_getDisplayName() { return this._displayName;}

SAWSOAP_SAColumn.prototype.getDisplayName = SAWSOAP_SAColumn_getDisplayName;

function SAWSOAP_SAColumn_setDisplayName(value) { this._displayName = value;}

SAWSOAP_SAColumn.prototype.setDisplayName = SAWSOAP_SAColumn_setDisplayName;
//
// accessor is SAWSOAP_SAColumn.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is SAWSOAP_SAColumn.prototype.setDescription
//
function SAWSOAP_SAColumn_getDescription() { return this._description;}

SAWSOAP_SAColumn.prototype.getDescription = SAWSOAP_SAColumn_getDescription;

function SAWSOAP_SAColumn_setDescription(value) { this._description = value;}

SAWSOAP_SAColumn.prototype.setDescription = SAWSOAP_SAColumn_setDescription;
//
// accessor is SAWSOAP_SAColumn.prototype.getNullable
// element get for nullable
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for nullable
// setter function is is SAWSOAP_SAColumn.prototype.setNullable
//
function SAWSOAP_SAColumn_getNullable() { return this._nullable;}

SAWSOAP_SAColumn.prototype.getNullable = SAWSOAP_SAColumn_getNullable;

function SAWSOAP_SAColumn_setNullable(value) { this._nullable = value;}

SAWSOAP_SAColumn.prototype.setNullable = SAWSOAP_SAColumn_setNullable;
//
// accessor is SAWSOAP_SAColumn.prototype.getDataType
// element get for dataType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for dataType
// setter function is is SAWSOAP_SAColumn.prototype.setDataType
//
function SAWSOAP_SAColumn_getDataType() { return this._dataType;}

SAWSOAP_SAColumn.prototype.getDataType = SAWSOAP_SAColumn_getDataType;

function SAWSOAP_SAColumn_setDataType(value) { this._dataType = value;}

SAWSOAP_SAColumn.prototype.setDataType = SAWSOAP_SAColumn_setDataType;
//
// accessor is SAWSOAP_SAColumn.prototype.getAggregatable
// element get for aggregatable
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for aggregatable
// setter function is is SAWSOAP_SAColumn.prototype.setAggregatable
//
function SAWSOAP_SAColumn_getAggregatable() { return this._aggregatable;}

SAWSOAP_SAColumn.prototype.getAggregatable = SAWSOAP_SAColumn_getAggregatable;

function SAWSOAP_SAColumn_setAggregatable(value) { this._aggregatable = value;}

SAWSOAP_SAColumn.prototype.setAggregatable = SAWSOAP_SAColumn_setAggregatable;
//
// accessor is SAWSOAP_SAColumn.prototype.getAggrRule
// element get for aggrRule
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for aggrRule
// setter function is is SAWSOAP_SAColumn.prototype.setAggrRule
//
function SAWSOAP_SAColumn_getAggrRule() { return this._aggrRule;}

SAWSOAP_SAColumn.prototype.getAggrRule = SAWSOAP_SAColumn_getAggrRule;

function SAWSOAP_SAColumn_setAggrRule(value) { this._aggrRule = value;}

SAWSOAP_SAColumn.prototype.setAggrRule = SAWSOAP_SAColumn_setAggrRule;
//
// Serialize {urn://oracle.bi.webservices/v6}SAColumn
//
function SAWSOAP_SAColumn_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:displayName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._displayName);
     xml = xml + '</jns0:displayName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</jns0:description>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:nullable>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._nullable);
     xml = xml + '</jns0:nullable>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:dataType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._dataType);
     xml = xml + '</jns0:dataType>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:aggregatable>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._aggregatable);
     xml = xml + '</jns0:aggregatable>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:aggrRule>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._aggrRule);
     xml = xml + '</jns0:aggrRule>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SAColumn.prototype.serialize = SAWSOAP_SAColumn_serialize;

function SAWSOAP_SAColumn_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SAColumn();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing displayName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDisplayName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nullable');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setNullable(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dataType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDataType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing aggregatable');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAggregatable(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing aggrRule');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setAggrRule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}SADataType
//
// - Invalid
// - Unknown
// - VarBinary
// - LongVarBinary
// - Binary
// - Char
// - VarChar
// - LongVarChar
// - Date
// - Time
// - TimeStamp
// - Numeric
// - Decimal
// - Integer
// - SmallInt
// - BigInt
// - TinyInt
// - Bit
// - Float
// - Real
// - Double
// - Coordinate
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}TreeNodePath
//
function SAWSOAP_TreeNodePath () {
    this.typeMarker = 'SAWSOAP_TreeNodePath';
    this._treePath = '';
    this._treeNode = '';
}

//
// accessor is SAWSOAP_TreeNodePath.prototype.getTreePath
// element get for treePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for treePath
// setter function is is SAWSOAP_TreeNodePath.prototype.setTreePath
//
function SAWSOAP_TreeNodePath_getTreePath() { return this._treePath;}

SAWSOAP_TreeNodePath.prototype.getTreePath = SAWSOAP_TreeNodePath_getTreePath;

function SAWSOAP_TreeNodePath_setTreePath(value) { this._treePath = value;}

SAWSOAP_TreeNodePath.prototype.setTreePath = SAWSOAP_TreeNodePath_setTreePath;
//
// accessor is SAWSOAP_TreeNodePath.prototype.getTreeNode
// element get for treeNode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for treeNode
// setter function is is SAWSOAP_TreeNodePath.prototype.setTreeNode
//
function SAWSOAP_TreeNodePath_getTreeNode() { return this._treeNode;}

SAWSOAP_TreeNodePath.prototype.getTreeNode = SAWSOAP_TreeNodePath_getTreeNode;

function SAWSOAP_TreeNodePath_setTreeNode(value) { this._treeNode = value;}

SAWSOAP_TreeNodePath.prototype.setTreeNode = SAWSOAP_TreeNodePath_setTreeNode;
//
// Serialize {urn://oracle.bi.webservices/v6}TreeNodePath
//
function SAWSOAP_TreeNodePath_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:treePath>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._treePath);
     xml = xml + '</jns0:treePath>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:treeNode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._treeNode);
     xml = xml + '</jns0:treeNode>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_TreeNodePath.prototype.serialize = SAWSOAP_TreeNodePath_serialize;

function SAWSOAP_TreeNodePath_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_TreeNodePath();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treePath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTreePath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treeNode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTreeNode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}Variable
//
function SAWSOAP_Variable () {
    this.typeMarker = 'SAWSOAP_Variable';
    this._name = '';
    this._value = null;
}

//
// accessor is SAWSOAP_Variable.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_Variable.prototype.setName
//
function SAWSOAP_Variable_getName() { return this._name;}

SAWSOAP_Variable.prototype.getName = SAWSOAP_Variable_getName;

function SAWSOAP_Variable_setName(value) { this._name = value;}

SAWSOAP_Variable.prototype.setName = SAWSOAP_Variable_setName;
//
// accessor is SAWSOAP_Variable.prototype.getValue
// element get for value
// - required element
// - nillable
//
// element set for value
// setter function is is SAWSOAP_Variable.prototype.setValue
//
function SAWSOAP_Variable_getValue() { return this._value;}

SAWSOAP_Variable.prototype.getValue = SAWSOAP_Variable_getValue;

function SAWSOAP_Variable_setValue(value) { this._value = value;}

SAWSOAP_Variable.prototype.setValue = SAWSOAP_Variable_setValue;
//
// Serialize {urn://oracle.bi.webservices/v6}Variable
//
function SAWSOAP_Variable_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     if (this._value == null) {
      xml = xml + '<jns0:value xsi:nil=\'true\'/>';
     } else {
      var anyHolder = this._value;
      var anySerializer;
      var typeAttr = '';
      if (anyHolder != null) {
       if (!anyHolder.raw) {
        anySerializer = cxfjsutils.interfaceObject.globalElementSerializers[anyHolder.qname];
       }
       if (anyHolder.xsiType) {
        var typePrefix = 'cxfjst34';
        var typeAttr = 'xmlns:' + typePrefix + '=\'' + anyHolder.namespaceURI + '\'';
        typeAttr = typeAttr + ' xsi:type=\'' + typePrefix + ':' + anyHolder.localName + '\'';
       }
       if (anySerializer) {
        xml = xml + this._value.serialize(cxfjsutils, 'jns0:value', typeAttr);
       } else {
        xml = xml + '<jns0:value ' + typeAttr + '>';
        if (!anyHolder.raw) {
         xml = xml + cxfjsutils.escapeXmlEntities(this._value);
        } else {
         xml = xml + anyHolder.xml;
        }
        xml = xml + '</jns0:value>';
       }
      } else {
       xml = xml + '<jns0:value xsi:nil=\'true\'/>';
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_Variable.prototype.serialize = SAWSOAP_Variable_serialize;

function SAWSOAP_Variable_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_Variable();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = org_apache_cxf_deserialize_anyType(cxfjsutils, curElement);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ErrorDetailsLevel
//
// - ErrorCode
// - ErrorCodeAndText
// - FullDetails
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SegmentationOptions
//
function SAWSOAP_SegmentationOptions () {
    this.typeMarker = 'SAWSOAP_SegmentationOptions';
    this._removeCacheHits = null;
    this._countOverride = null;
    this._cacheOverride = null;
    this._samplingFactor = null;
    this._govRules = [];
    this._prompts = [];
}

//
// accessor is SAWSOAP_SegmentationOptions.prototype.getRemoveCacheHits
// element get for removeCacheHits
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for removeCacheHits
// setter function is is SAWSOAP_SegmentationOptions.prototype.setRemoveCacheHits
//
function SAWSOAP_SegmentationOptions_getRemoveCacheHits() { return this._removeCacheHits;}

SAWSOAP_SegmentationOptions.prototype.getRemoveCacheHits = SAWSOAP_SegmentationOptions_getRemoveCacheHits;

function SAWSOAP_SegmentationOptions_setRemoveCacheHits(value) { this._removeCacheHits = value;}

SAWSOAP_SegmentationOptions.prototype.setRemoveCacheHits = SAWSOAP_SegmentationOptions_setRemoveCacheHits;
//
// accessor is SAWSOAP_SegmentationOptions.prototype.getCountOverride
// element get for countOverride
// - element type is {urn://oracle.bi.webservices/v6}OverrideType
// - optional element
//
// element set for countOverride
// setter function is is SAWSOAP_SegmentationOptions.prototype.setCountOverride
//
function SAWSOAP_SegmentationOptions_getCountOverride() { return this._countOverride;}

SAWSOAP_SegmentationOptions.prototype.getCountOverride = SAWSOAP_SegmentationOptions_getCountOverride;

function SAWSOAP_SegmentationOptions_setCountOverride(value) { this._countOverride = value;}

SAWSOAP_SegmentationOptions.prototype.setCountOverride = SAWSOAP_SegmentationOptions_setCountOverride;
//
// accessor is SAWSOAP_SegmentationOptions.prototype.getCacheOverride
// element get for cacheOverride
// - element type is {urn://oracle.bi.webservices/v6}OverrideType
// - optional element
//
// element set for cacheOverride
// setter function is is SAWSOAP_SegmentationOptions.prototype.setCacheOverride
//
function SAWSOAP_SegmentationOptions_getCacheOverride() { return this._cacheOverride;}

SAWSOAP_SegmentationOptions.prototype.getCacheOverride = SAWSOAP_SegmentationOptions_getCacheOverride;

function SAWSOAP_SegmentationOptions_setCacheOverride(value) { this._cacheOverride = value;}

SAWSOAP_SegmentationOptions.prototype.setCacheOverride = SAWSOAP_SegmentationOptions_setCacheOverride;
//
// accessor is SAWSOAP_SegmentationOptions.prototype.getSamplingFactor
// element get for samplingFactor
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - optional element
//
// element set for samplingFactor
// setter function is is SAWSOAP_SegmentationOptions.prototype.setSamplingFactor
//
function SAWSOAP_SegmentationOptions_getSamplingFactor() { return this._samplingFactor;}

SAWSOAP_SegmentationOptions.prototype.getSamplingFactor = SAWSOAP_SegmentationOptions_getSamplingFactor;

function SAWSOAP_SegmentationOptions_setSamplingFactor(value) { this._samplingFactor = value;}

SAWSOAP_SegmentationOptions.prototype.setSamplingFactor = SAWSOAP_SegmentationOptions_setSamplingFactor;
//
// accessor is SAWSOAP_SegmentationOptions.prototype.getGovRules
// element get for govRules
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
//
// element set for govRules
// setter function is is SAWSOAP_SegmentationOptions.prototype.setGovRules
//
function SAWSOAP_SegmentationOptions_getGovRules() { return this._govRules;}

SAWSOAP_SegmentationOptions.prototype.getGovRules = SAWSOAP_SegmentationOptions_getGovRules;

function SAWSOAP_SegmentationOptions_setGovRules(value) { this._govRules = value;}

SAWSOAP_SegmentationOptions.prototype.setGovRules = SAWSOAP_SegmentationOptions_setGovRules;
//
// accessor is SAWSOAP_SegmentationOptions.prototype.getPrompts
// element get for prompts
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
//
// element set for prompts
// setter function is is SAWSOAP_SegmentationOptions.prototype.setPrompts
//
function SAWSOAP_SegmentationOptions_getPrompts() { return this._prompts;}

SAWSOAP_SegmentationOptions.prototype.getPrompts = SAWSOAP_SegmentationOptions_getPrompts;

function SAWSOAP_SegmentationOptions_setPrompts(value) { this._prompts = value;}

SAWSOAP_SegmentationOptions.prototype.setPrompts = SAWSOAP_SegmentationOptions_setPrompts;
//
// Serialize {urn://oracle.bi.webservices/v6}SegmentationOptions
//
function SAWSOAP_SegmentationOptions_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._removeCacheHits != null) {
      xml = xml + '<jns0:removeCacheHits>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._removeCacheHits);
      xml = xml + '</jns0:removeCacheHits>';
     }
    }
    // block for local variables
    {
     if (this._countOverride != null) {
      xml = xml + '<jns0:countOverride>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._countOverride);
      xml = xml + '</jns0:countOverride>';
     }
    }
    // block for local variables
    {
     if (this._cacheOverride != null) {
      xml = xml + '<jns0:cacheOverride>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._cacheOverride);
      xml = xml + '</jns0:cacheOverride>';
     }
    }
    // block for local variables
    {
     if (this._samplingFactor != null) {
      xml = xml + '<jns0:samplingFactor>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._samplingFactor);
      xml = xml + '</jns0:samplingFactor>';
     }
    }
    // block for local variables
    {
     if (this._govRules != null) {
      for (var ax = 0;ax < this._govRules.length;ax ++) {
       if (this._govRules[ax] == null) {
        xml = xml + '<jns0:govRules/>';
       } else {
        xml = xml + this._govRules[ax].serialize(cxfjsutils, 'jns0:govRules', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._prompts != null) {
      for (var ax = 0;ax < this._prompts.length;ax ++) {
       if (this._prompts[ax] == null) {
        xml = xml + '<jns0:prompts/>';
       } else {
        xml = xml + this._prompts[ax].serialize(cxfjsutils, 'jns0:prompts', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SegmentationOptions.prototype.serialize = SAWSOAP_SegmentationOptions_serialize;

function SAWSOAP_SegmentationOptions_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SegmentationOptions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing removeCacheHits');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'removeCacheHits')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setRemoveCacheHits(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing countOverride');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'countOverride')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCountOverride(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cacheOverride');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'cacheOverride')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCacheOverride(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing samplingFactor');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'samplingFactor')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSamplingFactor(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing govRules');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'govRules')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'govRules'));
     newobject.setGovRules(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing prompts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'prompts')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'prompts'));
     newobject.setPrompts(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}CatalogItemsFilter
//
function SAWSOAP_CatalogItemsFilter () {
    this.typeMarker = 'SAWSOAP_CatalogItemsFilter';
    this._items = [];
    this._from = '';
    this._to = '';
}

//
// accessor is SAWSOAP_CatalogItemsFilter.prototype.getItems
// element get for items
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for items
// setter function is is SAWSOAP_CatalogItemsFilter.prototype.setItems
//
function SAWSOAP_CatalogItemsFilter_getItems() { return this._items;}

SAWSOAP_CatalogItemsFilter.prototype.getItems = SAWSOAP_CatalogItemsFilter_getItems;

function SAWSOAP_CatalogItemsFilter_setItems(value) { this._items = value;}

SAWSOAP_CatalogItemsFilter.prototype.setItems = SAWSOAP_CatalogItemsFilter_setItems;
//
// accessor is SAWSOAP_CatalogItemsFilter.prototype.getFrom
// element get for from
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for from
// setter function is is SAWSOAP_CatalogItemsFilter.prototype.setFrom
//
function SAWSOAP_CatalogItemsFilter_getFrom() { return this._from;}

SAWSOAP_CatalogItemsFilter.prototype.getFrom = SAWSOAP_CatalogItemsFilter_getFrom;

function SAWSOAP_CatalogItemsFilter_setFrom(value) { this._from = value;}

SAWSOAP_CatalogItemsFilter.prototype.setFrom = SAWSOAP_CatalogItemsFilter_setFrom;
//
// accessor is SAWSOAP_CatalogItemsFilter.prototype.getTo
// element get for to
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for to
// setter function is is SAWSOAP_CatalogItemsFilter.prototype.setTo
//
function SAWSOAP_CatalogItemsFilter_getTo() { return this._to;}

SAWSOAP_CatalogItemsFilter.prototype.getTo = SAWSOAP_CatalogItemsFilter_getTo;

function SAWSOAP_CatalogItemsFilter_setTo(value) { this._to = value;}

SAWSOAP_CatalogItemsFilter.prototype.setTo = SAWSOAP_CatalogItemsFilter_setTo;
//
// Serialize {urn://oracle.bi.webservices/v6}CatalogItemsFilter
//
function SAWSOAP_CatalogItemsFilter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._items != null) {
      for (var ax = 0;ax < this._items.length;ax ++) {
       if (this._items[ax] == null) {
        xml = xml + '<jns0:items/>';
       } else {
        xml = xml + '<jns0:items>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._items[ax]);
        xml = xml + '</jns0:items>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:from>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._from);
     xml = xml + '</jns0:from>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:to>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._to);
     xml = xml + '</jns0:to>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_CatalogItemsFilter.prototype.serialize = SAWSOAP_CatalogItemsFilter_serialize;

function SAWSOAP_CatalogItemsFilter_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_CatalogItemsFilter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing items');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'items')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'items'));
     newobject.setItems(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing from');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFrom(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing to');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ImportError
//
function SAWSOAP_ImportError () {
    this.typeMarker = 'SAWSOAP_ImportError';
    this._item = '';
    this._operation = '';
    this._file = '';
    this._line = '';
    this._catalogError = '';
}

//
// accessor is SAWSOAP_ImportError.prototype.getItem
// element get for item
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for item
// setter function is is SAWSOAP_ImportError.prototype.setItem
//
function SAWSOAP_ImportError_getItem() { return this._item;}

SAWSOAP_ImportError.prototype.getItem = SAWSOAP_ImportError_getItem;

function SAWSOAP_ImportError_setItem(value) { this._item = value;}

SAWSOAP_ImportError.prototype.setItem = SAWSOAP_ImportError_setItem;
//
// accessor is SAWSOAP_ImportError.prototype.getOperation
// element get for operation
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for operation
// setter function is is SAWSOAP_ImportError.prototype.setOperation
//
function SAWSOAP_ImportError_getOperation() { return this._operation;}

SAWSOAP_ImportError.prototype.getOperation = SAWSOAP_ImportError_getOperation;

function SAWSOAP_ImportError_setOperation(value) { this._operation = value;}

SAWSOAP_ImportError.prototype.setOperation = SAWSOAP_ImportError_setOperation;
//
// accessor is SAWSOAP_ImportError.prototype.getFile
// element get for file
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for file
// setter function is is SAWSOAP_ImportError.prototype.setFile
//
function SAWSOAP_ImportError_getFile() { return this._file;}

SAWSOAP_ImportError.prototype.getFile = SAWSOAP_ImportError_getFile;

function SAWSOAP_ImportError_setFile(value) { this._file = value;}

SAWSOAP_ImportError.prototype.setFile = SAWSOAP_ImportError_setFile;
//
// accessor is SAWSOAP_ImportError.prototype.getLine
// element get for line
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for line
// setter function is is SAWSOAP_ImportError.prototype.setLine
//
function SAWSOAP_ImportError_getLine() { return this._line;}

SAWSOAP_ImportError.prototype.getLine = SAWSOAP_ImportError_getLine;

function SAWSOAP_ImportError_setLine(value) { this._line = value;}

SAWSOAP_ImportError.prototype.setLine = SAWSOAP_ImportError_setLine;
//
// accessor is SAWSOAP_ImportError.prototype.getCatalogError
// element get for catalogError
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for catalogError
// setter function is is SAWSOAP_ImportError.prototype.setCatalogError
//
function SAWSOAP_ImportError_getCatalogError() { return this._catalogError;}

SAWSOAP_ImportError.prototype.getCatalogError = SAWSOAP_ImportError_getCatalogError;

function SAWSOAP_ImportError_setCatalogError(value) { this._catalogError = value;}

SAWSOAP_ImportError.prototype.setCatalogError = SAWSOAP_ImportError_setCatalogError;
//
// Serialize {urn://oracle.bi.webservices/v6}ImportError
//
function SAWSOAP_ImportError_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:item>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._item);
     xml = xml + '</jns0:item>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:operation>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._operation);
     xml = xml + '</jns0:operation>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:file>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._file);
     xml = xml + '</jns0:file>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:line>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._line);
     xml = xml + '</jns0:line>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:catalogError>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._catalogError);
     xml = xml + '</jns0:catalogError>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ImportError.prototype.serialize = SAWSOAP_ImportError_serialize;

function SAWSOAP_ImportError_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ImportError();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing item');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setItem(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing operation');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOperation(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing file');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFile(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing line');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLine(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing catalogError');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCatalogError(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}UpdateCatalogItemACLParams
//
function SAWSOAP_UpdateCatalogItemACLParams () {
    this.typeMarker = 'SAWSOAP_UpdateCatalogItemACLParams';
    this._updateFlag = '';
    this._recursive = '';
}

//
// accessor is SAWSOAP_UpdateCatalogItemACLParams.prototype.getUpdateFlag
// element get for updateFlag
// - element type is {urn://oracle.bi.webservices/v6}UpdateACLMode
// - required element
//
// element set for updateFlag
// setter function is is SAWSOAP_UpdateCatalogItemACLParams.prototype.setUpdateFlag
//
function SAWSOAP_UpdateCatalogItemACLParams_getUpdateFlag() { return this._updateFlag;}

SAWSOAP_UpdateCatalogItemACLParams.prototype.getUpdateFlag = SAWSOAP_UpdateCatalogItemACLParams_getUpdateFlag;

function SAWSOAP_UpdateCatalogItemACLParams_setUpdateFlag(value) { this._updateFlag = value;}

SAWSOAP_UpdateCatalogItemACLParams.prototype.setUpdateFlag = SAWSOAP_UpdateCatalogItemACLParams_setUpdateFlag;
//
// accessor is SAWSOAP_UpdateCatalogItemACLParams.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_UpdateCatalogItemACLParams.prototype.setRecursive
//
function SAWSOAP_UpdateCatalogItemACLParams_getRecursive() { return this._recursive;}

SAWSOAP_UpdateCatalogItemACLParams.prototype.getRecursive = SAWSOAP_UpdateCatalogItemACLParams_getRecursive;

function SAWSOAP_UpdateCatalogItemACLParams_setRecursive(value) { this._recursive = value;}

SAWSOAP_UpdateCatalogItemACLParams.prototype.setRecursive = SAWSOAP_UpdateCatalogItemACLParams_setRecursive;
//
// Serialize {urn://oracle.bi.webservices/v6}UpdateCatalogItemACLParams
//
function SAWSOAP_UpdateCatalogItemACLParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:updateFlag>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._updateFlag);
     xml = xml + '</jns0:updateFlag>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_UpdateCatalogItemACLParams.prototype.serialize = SAWSOAP_UpdateCatalogItemACLParams_serialize;

function SAWSOAP_UpdateCatalogItemACLParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_UpdateCatalogItemACLParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing updateFlag');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUpdateFlag(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}AggregationRule
//
// - None
// - Sum
// - Count
// - Rank
// - Avg
// - Min
// - Max
// - Last
// - Percentile
// - First
// - ServerDefault
// - CountStar
// - Complex
// - TopN
// - BottomN
// - SubTotal
// - DimensionAggr
// - CountDistinct
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}StartPageParams
//
function SAWSOAP_StartPageParams () {
    this.typeMarker = 'SAWSOAP_StartPageParams';
    this._idsPrefix = null;
    this._dontUseHttpCookies = 'false';
}

//
// accessor is SAWSOAP_StartPageParams.prototype.getIdsPrefix
// element get for idsPrefix
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for idsPrefix
// setter function is is SAWSOAP_StartPageParams.prototype.setIdsPrefix
//
function SAWSOAP_StartPageParams_getIdsPrefix() { return this._idsPrefix;}

SAWSOAP_StartPageParams.prototype.getIdsPrefix = SAWSOAP_StartPageParams_getIdsPrefix;

function SAWSOAP_StartPageParams_setIdsPrefix(value) { this._idsPrefix = value;}

SAWSOAP_StartPageParams.prototype.setIdsPrefix = SAWSOAP_StartPageParams_setIdsPrefix;
//
// accessor is SAWSOAP_StartPageParams.prototype.getDontUseHttpCookies
// element get for dontUseHttpCookies
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for dontUseHttpCookies
// setter function is is SAWSOAP_StartPageParams.prototype.setDontUseHttpCookies
//
function SAWSOAP_StartPageParams_getDontUseHttpCookies() { return this._dontUseHttpCookies;}

SAWSOAP_StartPageParams.prototype.getDontUseHttpCookies = SAWSOAP_StartPageParams_getDontUseHttpCookies;

function SAWSOAP_StartPageParams_setDontUseHttpCookies(value) { this._dontUseHttpCookies = value;}

SAWSOAP_StartPageParams.prototype.setDontUseHttpCookies = SAWSOAP_StartPageParams_setDontUseHttpCookies;
//
// Serialize {urn://oracle.bi.webservices/v6}StartPageParams
//
function SAWSOAP_StartPageParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._idsPrefix == null) {
      xml = xml + '<jns0:idsPrefix xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:idsPrefix>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._idsPrefix);
      xml = xml + '</jns0:idsPrefix>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:dontUseHttpCookies>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._dontUseHttpCookies);
     xml = xml + '</jns0:dontUseHttpCookies>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_StartPageParams.prototype.serialize = SAWSOAP_StartPageParams_serialize;

function SAWSOAP_StartPageParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_StartPageParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing idsPrefix');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIdsPrefix(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dontUseHttpCookies');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setDontUseHttpCookies(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ReadObjectsReturnOptions
//
// - NoObject
// - ObjectAsString
// - ObjectAsBinary
// - ObjectAsBinaryUseMtom
//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}SASubjectAreaDetails
//
// - Minimum
// - IncludeTables
// - IncludeTablesAndColumns
//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ExportFlags
//
// - processAll_ForMerge
// - processAll_ForReplace
// - processAll_ForWriteIfNotExists
// - processLocalChanges
// - processRemoteChanges
// - processAllChanges
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ErrorInfo
//
function SAWSOAP_ErrorInfo () {
    this.typeMarker = 'SAWSOAP_ErrorInfo';
    this._code = null;
    this._context = null;
    this._message = null;
    this._details = null;
}

//
// accessor is SAWSOAP_ErrorInfo.prototype.getCode
// element get for code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for code
// setter function is is SAWSOAP_ErrorInfo.prototype.setCode
//
function SAWSOAP_ErrorInfo_getCode() { return this._code;}

SAWSOAP_ErrorInfo.prototype.getCode = SAWSOAP_ErrorInfo_getCode;

function SAWSOAP_ErrorInfo_setCode(value) { this._code = value;}

SAWSOAP_ErrorInfo.prototype.setCode = SAWSOAP_ErrorInfo_setCode;
//
// accessor is SAWSOAP_ErrorInfo.prototype.getContext
// element get for context
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for context
// setter function is is SAWSOAP_ErrorInfo.prototype.setContext
//
function SAWSOAP_ErrorInfo_getContext() { return this._context;}

SAWSOAP_ErrorInfo.prototype.getContext = SAWSOAP_ErrorInfo_getContext;

function SAWSOAP_ErrorInfo_setContext(value) { this._context = value;}

SAWSOAP_ErrorInfo.prototype.setContext = SAWSOAP_ErrorInfo_setContext;
//
// accessor is SAWSOAP_ErrorInfo.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is SAWSOAP_ErrorInfo.prototype.setMessage
//
function SAWSOAP_ErrorInfo_getMessage() { return this._message;}

SAWSOAP_ErrorInfo.prototype.getMessage = SAWSOAP_ErrorInfo_getMessage;

function SAWSOAP_ErrorInfo_setMessage(value) { this._message = value;}

SAWSOAP_ErrorInfo.prototype.setMessage = SAWSOAP_ErrorInfo_setMessage;
//
// accessor is SAWSOAP_ErrorInfo.prototype.getDetails
// element get for details
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for details
// setter function is is SAWSOAP_ErrorInfo.prototype.setDetails
//
function SAWSOAP_ErrorInfo_getDetails() { return this._details;}

SAWSOAP_ErrorInfo.prototype.getDetails = SAWSOAP_ErrorInfo_getDetails;

function SAWSOAP_ErrorInfo_setDetails(value) { this._details = value;}

SAWSOAP_ErrorInfo.prototype.setDetails = SAWSOAP_ErrorInfo_setDetails;
//
// Serialize {urn://oracle.bi.webservices/v6}ErrorInfo
//
function SAWSOAP_ErrorInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._code != null) {
      xml = xml + '<jns0:code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._code);
      xml = xml + '</jns0:code>';
     }
    }
    // block for local variables
    {
     if (this._context != null) {
      xml = xml + '<jns0:context>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._context);
      xml = xml + '</jns0:context>';
     }
    }
    // block for local variables
    {
     if (this._message != null) {
      xml = xml + '<jns0:message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</jns0:message>';
     }
    }
    // block for local variables
    {
     if (this._details != null) {
      xml = xml + '<jns0:details>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._details);
      xml = xml + '</jns0:details>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ErrorInfo.prototype.serialize = SAWSOAP_ErrorInfo_serialize;

function SAWSOAP_ErrorInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ErrorInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCode(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing context');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'context')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setContext(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing message');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'message')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing details');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'details')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDetails(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SASubjectArea
//
function SAWSOAP_SASubjectArea () {
    this.typeMarker = 'SAWSOAP_SASubjectArea';
    this._name = '';
    this._displayName = '';
    this._description = '';
    this._tables = [];
}

//
// accessor is SAWSOAP_SASubjectArea.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_SASubjectArea.prototype.setName
//
function SAWSOAP_SASubjectArea_getName() { return this._name;}

SAWSOAP_SASubjectArea.prototype.getName = SAWSOAP_SASubjectArea_getName;

function SAWSOAP_SASubjectArea_setName(value) { this._name = value;}

SAWSOAP_SASubjectArea.prototype.setName = SAWSOAP_SASubjectArea_setName;
//
// accessor is SAWSOAP_SASubjectArea.prototype.getDisplayName
// element get for displayName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for displayName
// setter function is is SAWSOAP_SASubjectArea.prototype.setDisplayName
//
function SAWSOAP_SASubjectArea_getDisplayName() { return this._displayName;}

SAWSOAP_SASubjectArea.prototype.getDisplayName = SAWSOAP_SASubjectArea_getDisplayName;

function SAWSOAP_SASubjectArea_setDisplayName(value) { this._displayName = value;}

SAWSOAP_SASubjectArea.prototype.setDisplayName = SAWSOAP_SASubjectArea_setDisplayName;
//
// accessor is SAWSOAP_SASubjectArea.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is SAWSOAP_SASubjectArea.prototype.setDescription
//
function SAWSOAP_SASubjectArea_getDescription() { return this._description;}

SAWSOAP_SASubjectArea.prototype.getDescription = SAWSOAP_SASubjectArea_getDescription;

function SAWSOAP_SASubjectArea_setDescription(value) { this._description = value;}

SAWSOAP_SASubjectArea.prototype.setDescription = SAWSOAP_SASubjectArea_setDescription;
//
// accessor is SAWSOAP_SASubjectArea.prototype.getTables
// element get for tables
// - element type is {urn://oracle.bi.webservices/v6}SATable
// - required element
// - array
// - nillable
//
// element set for tables
// setter function is is SAWSOAP_SASubjectArea.prototype.setTables
//
function SAWSOAP_SASubjectArea_getTables() { return this._tables;}

SAWSOAP_SASubjectArea.prototype.getTables = SAWSOAP_SASubjectArea_getTables;

function SAWSOAP_SASubjectArea_setTables(value) { this._tables = value;}

SAWSOAP_SASubjectArea.prototype.setTables = SAWSOAP_SASubjectArea_setTables;
//
// Serialize {urn://oracle.bi.webservices/v6}SASubjectArea
//
function SAWSOAP_SASubjectArea_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:displayName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._displayName);
     xml = xml + '</jns0:displayName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</jns0:description>';
    }
    // block for local variables
    {
     if (this._tables != null) {
      for (var ax = 0;ax < this._tables.length;ax ++) {
       if (this._tables[ax] == null) {
        xml = xml + '<jns0:tables xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._tables[ax].serialize(cxfjsutils, 'jns0:tables', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SASubjectArea.prototype.serialize = SAWSOAP_SASubjectArea_serialize;

function SAWSOAP_SASubjectArea_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SASubjectArea();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing displayName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDisplayName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tables');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'tables')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_SATable_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'tables'));
     newobject.setTables(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}AuthResult
//
function SAWSOAP_AuthResult () {
    this.typeMarker = 'SAWSOAP_AuthResult';
    this._sessionID = '';
    this._authCompleted = '';
}

//
// accessor is SAWSOAP_AuthResult.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for sessionID
// setter function is is SAWSOAP_AuthResult.prototype.setSessionID
//
function SAWSOAP_AuthResult_getSessionID() { return this._sessionID;}

SAWSOAP_AuthResult.prototype.getSessionID = SAWSOAP_AuthResult_getSessionID;

function SAWSOAP_AuthResult_setSessionID(value) { this._sessionID = value;}

SAWSOAP_AuthResult.prototype.setSessionID = SAWSOAP_AuthResult_setSessionID;
//
// accessor is SAWSOAP_AuthResult.prototype.getAuthCompleted
// element get for authCompleted
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for authCompleted
// setter function is is SAWSOAP_AuthResult.prototype.setAuthCompleted
//
function SAWSOAP_AuthResult_getAuthCompleted() { return this._authCompleted;}

SAWSOAP_AuthResult.prototype.getAuthCompleted = SAWSOAP_AuthResult_getAuthCompleted;

function SAWSOAP_AuthResult_setAuthCompleted(value) { this._authCompleted = value;}

SAWSOAP_AuthResult.prototype.setAuthCompleted = SAWSOAP_AuthResult_setAuthCompleted;
//
// Serialize {urn://oracle.bi.webservices/v6}AuthResult
//
function SAWSOAP_AuthResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:sessionID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
     xml = xml + '</jns0:sessionID>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:authCompleted>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._authCompleted);
     xml = xml + '</jns0:authCompleted>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_AuthResult.prototype.serialize = SAWSOAP_AuthResult_serialize;

function SAWSOAP_AuthResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_AuthResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing authCompleted');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAuthCompleted(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}LogonParameter
//
function SAWSOAP_LogonParameter () {
    this.typeMarker = 'SAWSOAP_LogonParameter';
    this._name = '';
    this._value = '';
}

//
// accessor is SAWSOAP_LogonParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_LogonParameter.prototype.setName
//
function SAWSOAP_LogonParameter_getName() { return this._name;}

SAWSOAP_LogonParameter.prototype.getName = SAWSOAP_LogonParameter_getName;

function SAWSOAP_LogonParameter_setName(value) { this._name = value;}

SAWSOAP_LogonParameter.prototype.setName = SAWSOAP_LogonParameter_setName;
//
// accessor is SAWSOAP_LogonParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is SAWSOAP_LogonParameter.prototype.setValue
//
function SAWSOAP_LogonParameter_getValue() { return this._value;}

SAWSOAP_LogonParameter.prototype.getValue = SAWSOAP_LogonParameter_getValue;

function SAWSOAP_LogonParameter_setValue(value) { this._value = value;}

SAWSOAP_LogonParameter.prototype.setValue = SAWSOAP_LogonParameter_setValue;
//
// Serialize {urn://oracle.bi.webservices/v6}LogonParameter
//
function SAWSOAP_LogonParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</jns0:value>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_LogonParameter.prototype.serialize = SAWSOAP_LogonParameter_serialize;

function SAWSOAP_LogonParameter_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_LogonParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}PromptedColumnInfo
//
function SAWSOAP_PromptedColumnInfo () {
    this.typeMarker = 'SAWSOAP_PromptedColumnInfo';
    this._Columns = [];
}

//
// accessor is SAWSOAP_PromptedColumnInfo.prototype.getColumns
// element get for Columns
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for Columns
// setter function is is SAWSOAP_PromptedColumnInfo.prototype.setColumns
//
function SAWSOAP_PromptedColumnInfo_getColumns() { return this._Columns;}

SAWSOAP_PromptedColumnInfo.prototype.getColumns = SAWSOAP_PromptedColumnInfo_getColumns;

function SAWSOAP_PromptedColumnInfo_setColumns(value) { this._Columns = value;}

SAWSOAP_PromptedColumnInfo.prototype.setColumns = SAWSOAP_PromptedColumnInfo_setColumns;
//
// Serialize {urn://oracle.bi.webservices/v6}PromptedColumnInfo
//
function SAWSOAP_PromptedColumnInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Columns != null) {
      for (var ax = 0;ax < this._Columns.length;ax ++) {
       if (this._Columns[ax] == null) {
        xml = xml + '<jns0:Columns/>';
       } else {
        xml = xml + '<jns0:Columns>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._Columns[ax]);
        xml = xml + '</jns0:Columns>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_PromptedColumnInfo.prototype.serialize = SAWSOAP_PromptedColumnInfo_serialize;

function SAWSOAP_PromptedColumnInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_PromptedColumnInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Columns');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'Columns')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'Columns'));
     newobject.setColumns(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ReportHTMLOptions
//
function SAWSOAP_ReportHTMLOptions () {
    this.typeMarker = 'SAWSOAP_ReportHTMLOptions';
    this._enableDelayLoading = '';
    this._linkMode = '';
}

//
// accessor is SAWSOAP_ReportHTMLOptions.prototype.getEnableDelayLoading
// element get for enableDelayLoading
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for enableDelayLoading
// setter function is is SAWSOAP_ReportHTMLOptions.prototype.setEnableDelayLoading
//
function SAWSOAP_ReportHTMLOptions_getEnableDelayLoading() { return this._enableDelayLoading;}

SAWSOAP_ReportHTMLOptions.prototype.getEnableDelayLoading = SAWSOAP_ReportHTMLOptions_getEnableDelayLoading;

function SAWSOAP_ReportHTMLOptions_setEnableDelayLoading(value) { this._enableDelayLoading = value;}

SAWSOAP_ReportHTMLOptions.prototype.setEnableDelayLoading = SAWSOAP_ReportHTMLOptions_setEnableDelayLoading;
//
// accessor is SAWSOAP_ReportHTMLOptions.prototype.getLinkMode
// element get for linkMode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for linkMode
// setter function is is SAWSOAP_ReportHTMLOptions.prototype.setLinkMode
//
function SAWSOAP_ReportHTMLOptions_getLinkMode() { return this._linkMode;}

SAWSOAP_ReportHTMLOptions.prototype.getLinkMode = SAWSOAP_ReportHTMLOptions_getLinkMode;

function SAWSOAP_ReportHTMLOptions_setLinkMode(value) { this._linkMode = value;}

SAWSOAP_ReportHTMLOptions.prototype.setLinkMode = SAWSOAP_ReportHTMLOptions_setLinkMode;
//
// Serialize {urn://oracle.bi.webservices/v6}ReportHTMLOptions
//
function SAWSOAP_ReportHTMLOptions_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:enableDelayLoading>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._enableDelayLoading);
     xml = xml + '</jns0:enableDelayLoading>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:linkMode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._linkMode);
     xml = xml + '</jns0:linkMode>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ReportHTMLOptions.prototype.serialize = SAWSOAP_ReportHTMLOptions_serialize;

function SAWSOAP_ReportHTMLOptions_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ReportHTMLOptions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing enableDelayLoading');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setEnableDelayLoading(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing linkMode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLinkMode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}FileInfo
//
function SAWSOAP_FileInfo () {
    this.typeMarker = 'SAWSOAP_FileInfo';
    this._filepath = '';
    this._startTime = '';
    this._endTime = '';
    this._filesize = 0;
    this._fileAttribs = [];
}

//
// accessor is SAWSOAP_FileInfo.prototype.getFilepath
// element get for filepath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for filepath
// setter function is is SAWSOAP_FileInfo.prototype.setFilepath
//
function SAWSOAP_FileInfo_getFilepath() { return this._filepath;}

SAWSOAP_FileInfo.prototype.getFilepath = SAWSOAP_FileInfo_getFilepath;

function SAWSOAP_FileInfo_setFilepath(value) { this._filepath = value;}

SAWSOAP_FileInfo.prototype.setFilepath = SAWSOAP_FileInfo_setFilepath;
//
// accessor is SAWSOAP_FileInfo.prototype.getStartTime
// element get for startTime
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for startTime
// setter function is is SAWSOAP_FileInfo.prototype.setStartTime
//
function SAWSOAP_FileInfo_getStartTime() { return this._startTime;}

SAWSOAP_FileInfo.prototype.getStartTime = SAWSOAP_FileInfo_getStartTime;

function SAWSOAP_FileInfo_setStartTime(value) { this._startTime = value;}

SAWSOAP_FileInfo.prototype.setStartTime = SAWSOAP_FileInfo_setStartTime;
//
// accessor is SAWSOAP_FileInfo.prototype.getEndTime
// element get for endTime
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for endTime
// setter function is is SAWSOAP_FileInfo.prototype.setEndTime
//
function SAWSOAP_FileInfo_getEndTime() { return this._endTime;}

SAWSOAP_FileInfo.prototype.getEndTime = SAWSOAP_FileInfo_getEndTime;

function SAWSOAP_FileInfo_setEndTime(value) { this._endTime = value;}

SAWSOAP_FileInfo.prototype.setEndTime = SAWSOAP_FileInfo_setEndTime;
//
// accessor is SAWSOAP_FileInfo.prototype.getFilesize
// element get for filesize
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for filesize
// setter function is is SAWSOAP_FileInfo.prototype.setFilesize
//
function SAWSOAP_FileInfo_getFilesize() { return this._filesize;}

SAWSOAP_FileInfo.prototype.getFilesize = SAWSOAP_FileInfo_getFilesize;

function SAWSOAP_FileInfo_setFilesize(value) { this._filesize = value;}

SAWSOAP_FileInfo.prototype.setFilesize = SAWSOAP_FileInfo_setFilesize;
//
// accessor is SAWSOAP_FileInfo.prototype.getFileAttribs
// element get for fileAttribs
// - element type is {urn://oracle.bi.webservices/v6}NameValueArrayPair
// - required element
// - array
//
// element set for fileAttribs
// setter function is is SAWSOAP_FileInfo.prototype.setFileAttribs
//
function SAWSOAP_FileInfo_getFileAttribs() { return this._fileAttribs;}

SAWSOAP_FileInfo.prototype.getFileAttribs = SAWSOAP_FileInfo_getFileAttribs;

function SAWSOAP_FileInfo_setFileAttribs(value) { this._fileAttribs = value;}

SAWSOAP_FileInfo.prototype.setFileAttribs = SAWSOAP_FileInfo_setFileAttribs;
//
// Serialize {urn://oracle.bi.webservices/v6}FileInfo
//
function SAWSOAP_FileInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:filepath>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filepath);
     xml = xml + '</jns0:filepath>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:startTime>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._startTime);
     xml = xml + '</jns0:startTime>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:endTime>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._endTime);
     xml = xml + '</jns0:endTime>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:filesize>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filesize);
     xml = xml + '</jns0:filesize>';
    }
    // block for local variables
    {
     if (this._fileAttribs != null) {
      for (var ax = 0;ax < this._fileAttribs.length;ax ++) {
       if (this._fileAttribs[ax] == null) {
        xml = xml + '<jns0:fileAttribs/>';
       } else {
        xml = xml + this._fileAttribs[ax].serialize(cxfjsutils, 'jns0:fileAttribs', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_FileInfo.prototype.serialize = SAWSOAP_FileInfo_serialize;

function SAWSOAP_FileInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_FileInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filepath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFilepath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing startTime');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setStartTime(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing endTime');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEndTime(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filesize');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFilesize(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing fileAttribs');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'fileAttribs')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValueArrayPair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'fileAttribs'));
     newobject.setFileAttribs(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}JobInfo
//
function SAWSOAP_JobInfo () {
    this.typeMarker = 'SAWSOAP_JobInfo';
    this._jobStats = null;
    this._fileInfo = [];
    this._detailedInfo = null;
}

//
// accessor is SAWSOAP_JobInfo.prototype.getJobStats
// element get for jobStats
// - element type is {urn://oracle.bi.webservices/v6}JobStats
// - required element
//
// element set for jobStats
// setter function is is SAWSOAP_JobInfo.prototype.setJobStats
//
function SAWSOAP_JobInfo_getJobStats() { return this._jobStats;}

SAWSOAP_JobInfo.prototype.getJobStats = SAWSOAP_JobInfo_getJobStats;

function SAWSOAP_JobInfo_setJobStats(value) { this._jobStats = value;}

SAWSOAP_JobInfo.prototype.setJobStats = SAWSOAP_JobInfo_setJobStats;
//
// accessor is SAWSOAP_JobInfo.prototype.getFileInfo
// element get for fileInfo
// - element type is {urn://oracle.bi.webservices/v6}FileInfo
// - required element
// - array
//
// element set for fileInfo
// setter function is is SAWSOAP_JobInfo.prototype.setFileInfo
//
function SAWSOAP_JobInfo_getFileInfo() { return this._fileInfo;}

SAWSOAP_JobInfo.prototype.getFileInfo = SAWSOAP_JobInfo_getFileInfo;

function SAWSOAP_JobInfo_setFileInfo(value) { this._fileInfo = value;}

SAWSOAP_JobInfo.prototype.setFileInfo = SAWSOAP_JobInfo_setFileInfo;
//
// accessor is SAWSOAP_JobInfo.prototype.getDetailedInfo
// element get for detailedInfo
// - element type is null
// - optional element
//
// element set for detailedInfo
// setter function is is SAWSOAP_JobInfo.prototype.setDetailedInfo
//
function SAWSOAP_JobInfo_getDetailedInfo() { return this._detailedInfo;}

SAWSOAP_JobInfo.prototype.getDetailedInfo = SAWSOAP_JobInfo_getDetailedInfo;

function SAWSOAP_JobInfo_setDetailedInfo(value) { this._detailedInfo = value;}

SAWSOAP_JobInfo.prototype.setDetailedInfo = SAWSOAP_JobInfo_setDetailedInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}JobInfo
//
function SAWSOAP_JobInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobStats.serialize(cxfjsutils, 'jns0:jobStats', null);
    }
    // block for local variables
    {
     if (this._fileInfo != null) {
      for (var ax = 0;ax < this._fileInfo.length;ax ++) {
       if (this._fileInfo[ax] == null) {
        xml = xml + '<jns0:fileInfo/>';
       } else {
        xml = xml + this._fileInfo[ax].serialize(cxfjsutils, 'jns0:fileInfo', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._detailedInfo != null) {
      xml = xml + this._detailedInfo.serialize(cxfjsutils, 'jns0:detailedInfo', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_JobInfo.prototype.serialize = SAWSOAP_JobInfo_serialize;

function SAWSOAP_JobInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_JobInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobStats');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobStats_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobStats(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing fileInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'fileInfo')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_FileInfo_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'fileInfo'));
     newobject.setFileInfo(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing detailedInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'detailedInfo')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_detailedInfo_deserialize(cxfjsutils, curElement);
     }
     newobject.setDetailedInfo(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SAWLocale
//
function SAWSOAP_SAWLocale () {
    this.typeMarker = 'SAWSOAP_SAWLocale';
    this._language = null;
    this._country = null;
}

//
// accessor is SAWSOAP_SAWLocale.prototype.getLanguage
// element get for language
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for language
// setter function is is SAWSOAP_SAWLocale.prototype.setLanguage
//
function SAWSOAP_SAWLocale_getLanguage() { return this._language;}

SAWSOAP_SAWLocale.prototype.getLanguage = SAWSOAP_SAWLocale_getLanguage;

function SAWSOAP_SAWLocale_setLanguage(value) { this._language = value;}

SAWSOAP_SAWLocale.prototype.setLanguage = SAWSOAP_SAWLocale_setLanguage;
//
// accessor is SAWSOAP_SAWLocale.prototype.getCountry
// element get for country
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for country
// setter function is is SAWSOAP_SAWLocale.prototype.setCountry
//
function SAWSOAP_SAWLocale_getCountry() { return this._country;}

SAWSOAP_SAWLocale.prototype.getCountry = SAWSOAP_SAWLocale_getCountry;

function SAWSOAP_SAWLocale_setCountry(value) { this._country = value;}

SAWSOAP_SAWLocale.prototype.setCountry = SAWSOAP_SAWLocale_setCountry;
//
// Serialize {urn://oracle.bi.webservices/v6}SAWLocale
//
function SAWSOAP_SAWLocale_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._language == null) {
      xml = xml + '<jns0:language xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:language>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._language);
      xml = xml + '</jns0:language>';
     }
    }
    // block for local variables
    {
     if (this._country == null) {
      xml = xml + '<jns0:country xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:country>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._country);
      xml = xml + '</jns0:country>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SAWLocale.prototype.serialize = SAWSOAP_SAWLocale_serialize;

function SAWSOAP_SAWLocale_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SAWLocale();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing language');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLanguage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing country');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCountry(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}arrayOfGUIDs
//
function SAWSOAP_arrayOfGUIDs () {
    this.typeMarker = 'SAWSOAP_arrayOfGUIDs';
    this._GUID = [];
}

//
// accessor is SAWSOAP_arrayOfGUIDs.prototype.getGUID
// element get for GUID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for GUID
// setter function is is SAWSOAP_arrayOfGUIDs.prototype.setGUID
//
function SAWSOAP_arrayOfGUIDs_getGUID() { return this._GUID;}

SAWSOAP_arrayOfGUIDs.prototype.getGUID = SAWSOAP_arrayOfGUIDs_getGUID;

function SAWSOAP_arrayOfGUIDs_setGUID(value) { this._GUID = value;}

SAWSOAP_arrayOfGUIDs.prototype.setGUID = SAWSOAP_arrayOfGUIDs_setGUID;
//
// Serialize {urn://oracle.bi.webservices/v6}arrayOfGUIDs
//
function SAWSOAP_arrayOfGUIDs_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._GUID != null) {
      for (var ax = 0;ax < this._GUID.length;ax ++) {
       if (this._GUID[ax] == null) {
        xml = xml + '<jns0:GUID/>';
       } else {
        xml = xml + '<jns0:GUID>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._GUID[ax]);
        xml = xml + '</jns0:GUID>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_arrayOfGUIDs.prototype.serialize = SAWSOAP_arrayOfGUIDs_serialize;

function SAWSOAP_arrayOfGUIDs_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_arrayOfGUIDs();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing GUID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'GUID')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'GUID'));
     newobject.setGUID(item);
     var item = null;
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}ItemInfoType
//
// - Folder
// - Link
// - Object
// - Missing
// - NoAccess
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}Account
//
function SAWSOAP_Account () {
    this.typeMarker = 'SAWSOAP_Account';
    this._name = null;
    this._accountType = 0;
    this._guid = null;
}

//
// accessor is SAWSOAP_Account.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is SAWSOAP_Account.prototype.setName
//
function SAWSOAP_Account_getName() { return this._name;}

SAWSOAP_Account.prototype.getName = SAWSOAP_Account_getName;

function SAWSOAP_Account_setName(value) { this._name = value;}

SAWSOAP_Account.prototype.setName = SAWSOAP_Account_setName;
//
// accessor is SAWSOAP_Account.prototype.getAccountType
// element get for accountType
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for accountType
// setter function is is SAWSOAP_Account.prototype.setAccountType
//
function SAWSOAP_Account_getAccountType() { return this._accountType;}

SAWSOAP_Account.prototype.getAccountType = SAWSOAP_Account_getAccountType;

function SAWSOAP_Account_setAccountType(value) { this._accountType = value;}

SAWSOAP_Account.prototype.setAccountType = SAWSOAP_Account_setAccountType;
//
// accessor is SAWSOAP_Account.prototype.getGuid
// element get for guid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for guid
// setter function is is SAWSOAP_Account.prototype.setGuid
//
function SAWSOAP_Account_getGuid() { return this._guid;}

SAWSOAP_Account.prototype.getGuid = SAWSOAP_Account_getGuid;

function SAWSOAP_Account_setGuid(value) { this._guid = value;}

SAWSOAP_Account.prototype.setGuid = SAWSOAP_Account_setGuid;
//
// Serialize {urn://oracle.bi.webservices/v6}Account
//
function SAWSOAP_Account_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<jns0:name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</jns0:name>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:accountType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._accountType);
     xml = xml + '</jns0:accountType>';
    }
    // block for local variables
    {
     if (this._guid != null) {
      xml = xml + '<jns0:guid>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._guid);
      xml = xml + '</jns0:guid>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_Account.prototype.serialize = SAWSOAP_Account_serialize;

function SAWSOAP_Account_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_Account();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accountType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setAccountType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing guid');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'guid')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setGuid(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Simple type (enumeration) {urn://oracle.bi.webservices/v6}SATableDetails
//
// - Minimum
// - IncludeColumns
//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}SAWSessionParameters
//
function SAWSOAP_SAWSessionParameters () {
    this.typeMarker = 'SAWSOAP_SAWSessionParameters';
    this._locale = null;
    this._userAgent = null;
    this._asyncLogon = '';
    this._logonParams = [];
    this._sessionID = null;
    this._syndicate = null;
}

//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getLocale
// element get for locale
// - element type is {urn://oracle.bi.webservices/v6}SAWLocale
// - required element
// - nillable
//
// element set for locale
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setLocale
//
function SAWSOAP_SAWSessionParameters_getLocale() { return this._locale;}

SAWSOAP_SAWSessionParameters.prototype.getLocale = SAWSOAP_SAWSessionParameters_getLocale;

function SAWSOAP_SAWSessionParameters_setLocale(value) { this._locale = value;}

SAWSOAP_SAWSessionParameters.prototype.setLocale = SAWSOAP_SAWSessionParameters_setLocale;
//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getUserAgent
// element get for userAgent
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for userAgent
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setUserAgent
//
function SAWSOAP_SAWSessionParameters_getUserAgent() { return this._userAgent;}

SAWSOAP_SAWSessionParameters.prototype.getUserAgent = SAWSOAP_SAWSessionParameters_getUserAgent;

function SAWSOAP_SAWSessionParameters_setUserAgent(value) { this._userAgent = value;}

SAWSOAP_SAWSessionParameters.prototype.setUserAgent = SAWSOAP_SAWSessionParameters_setUserAgent;
//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getAsyncLogon
// element get for asyncLogon
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for asyncLogon
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setAsyncLogon
//
function SAWSOAP_SAWSessionParameters_getAsyncLogon() { return this._asyncLogon;}

SAWSOAP_SAWSessionParameters.prototype.getAsyncLogon = SAWSOAP_SAWSessionParameters_getAsyncLogon;

function SAWSOAP_SAWSessionParameters_setAsyncLogon(value) { this._asyncLogon = value;}

SAWSOAP_SAWSessionParameters.prototype.setAsyncLogon = SAWSOAP_SAWSessionParameters_setAsyncLogon;
//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getLogonParams
// element get for logonParams
// - element type is {urn://oracle.bi.webservices/v6}LogonParameter
// - required element
// - array
// - nillable
//
// element set for logonParams
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setLogonParams
//
function SAWSOAP_SAWSessionParameters_getLogonParams() { return this._logonParams;}

SAWSOAP_SAWSessionParameters.prototype.getLogonParams = SAWSOAP_SAWSessionParameters_getLogonParams;

function SAWSOAP_SAWSessionParameters_setLogonParams(value) { this._logonParams = value;}

SAWSOAP_SAWSessionParameters.prototype.setLogonParams = SAWSOAP_SAWSessionParameters_setLogonParams;
//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setSessionID
//
function SAWSOAP_SAWSessionParameters_getSessionID() { return this._sessionID;}

SAWSOAP_SAWSessionParameters.prototype.getSessionID = SAWSOAP_SAWSessionParameters_getSessionID;

function SAWSOAP_SAWSessionParameters_setSessionID(value) { this._sessionID = value;}

SAWSOAP_SAWSessionParameters.prototype.setSessionID = SAWSOAP_SAWSessionParameters_setSessionID;
//
// accessor is SAWSOAP_SAWSessionParameters.prototype.getSyndicate
// element get for syndicate
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for syndicate
// setter function is is SAWSOAP_SAWSessionParameters.prototype.setSyndicate
//
function SAWSOAP_SAWSessionParameters_getSyndicate() { return this._syndicate;}

SAWSOAP_SAWSessionParameters.prototype.getSyndicate = SAWSOAP_SAWSessionParameters_getSyndicate;

function SAWSOAP_SAWSessionParameters_setSyndicate(value) { this._syndicate = value;}

SAWSOAP_SAWSessionParameters.prototype.setSyndicate = SAWSOAP_SAWSessionParameters_setSyndicate;
//
// Serialize {urn://oracle.bi.webservices/v6}SAWSessionParameters
//
function SAWSOAP_SAWSessionParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._locale == null) {
      xml = xml + '<jns0:locale xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._locale.serialize(cxfjsutils, 'jns0:locale', null);
     }
    }
    // block for local variables
    {
     if (this._userAgent == null) {
      xml = xml + '<jns0:userAgent xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:userAgent>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._userAgent);
      xml = xml + '</jns0:userAgent>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:asyncLogon>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._asyncLogon);
     xml = xml + '</jns0:asyncLogon>';
    }
    // block for local variables
    {
     if (this._logonParams != null) {
      for (var ax = 0;ax < this._logonParams.length;ax ++) {
       if (this._logonParams[ax] == null) {
        xml = xml + '<jns0:logonParams xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._logonParams[ax].serialize(cxfjsutils, 'jns0:logonParams', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    // block for local variables
    {
     if (this._syndicate == null) {
      xml = xml + '<jns0:syndicate xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:syndicate>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._syndicate);
      xml = xml + '</jns0:syndicate>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_SAWSessionParameters.prototype.serialize = SAWSOAP_SAWSessionParameters_serialize;

function SAWSOAP_SAWSessionParameters_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_SAWSessionParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing locale');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SAWLocale_deserialize(cxfjsutils, curElement);
    }
    newobject.setLocale(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing userAgent');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUserAgent(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing asyncLogon');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAsyncLogon(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing logonParams');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'logonParams')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_LogonParameter_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'logonParams'));
     newobject.setLogonParams(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing syndicate');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSyndicate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}ItemInfo
//
function SAWSOAP_ItemInfo () {
    this.typeMarker = 'SAWSOAP_ItemInfo';
    this._path = '';
    this._type = '';
    this._caption = null;
    this._attributes = null;
    this._lastModified = null;
    this._created = null;
    this._accessed = null;
    this._creator = null;
    this._lastModifier = null;
    this._signature = null;
    this._targetPath = null;
    this._acl = null;
    this._owner = null;
    this._itemProperties = [];
}

//
// accessor is SAWSOAP_ItemInfo.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_ItemInfo.prototype.setPath
//
function SAWSOAP_ItemInfo_getPath() { return this._path;}

SAWSOAP_ItemInfo.prototype.getPath = SAWSOAP_ItemInfo_getPath;

function SAWSOAP_ItemInfo_setPath(value) { this._path = value;}

SAWSOAP_ItemInfo.prototype.setPath = SAWSOAP_ItemInfo_setPath;
//
// accessor is SAWSOAP_ItemInfo.prototype.getType
// element get for type
// - element type is {urn://oracle.bi.webservices/v6}ItemInfoType
// - required element
//
// element set for type
// setter function is is SAWSOAP_ItemInfo.prototype.setType
//
function SAWSOAP_ItemInfo_getType() { return this._type;}

SAWSOAP_ItemInfo.prototype.getType = SAWSOAP_ItemInfo_getType;

function SAWSOAP_ItemInfo_setType(value) { this._type = value;}

SAWSOAP_ItemInfo.prototype.setType = SAWSOAP_ItemInfo_setType;
//
// accessor is SAWSOAP_ItemInfo.prototype.getCaption
// element get for caption
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for caption
// setter function is is SAWSOAP_ItemInfo.prototype.setCaption
//
function SAWSOAP_ItemInfo_getCaption() { return this._caption;}

SAWSOAP_ItemInfo.prototype.getCaption = SAWSOAP_ItemInfo_getCaption;

function SAWSOAP_ItemInfo_setCaption(value) { this._caption = value;}

SAWSOAP_ItemInfo.prototype.setCaption = SAWSOAP_ItemInfo_setCaption;
//
// accessor is SAWSOAP_ItemInfo.prototype.getAttributes
// element get for attributes
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for attributes
// setter function is is SAWSOAP_ItemInfo.prototype.setAttributes
//
function SAWSOAP_ItemInfo_getAttributes() { return this._attributes;}

SAWSOAP_ItemInfo.prototype.getAttributes = SAWSOAP_ItemInfo_getAttributes;

function SAWSOAP_ItemInfo_setAttributes(value) { this._attributes = value;}

SAWSOAP_ItemInfo.prototype.setAttributes = SAWSOAP_ItemInfo_setAttributes;
//
// accessor is SAWSOAP_ItemInfo.prototype.getLastModified
// element get for lastModified
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - optional element
//
// element set for lastModified
// setter function is is SAWSOAP_ItemInfo.prototype.setLastModified
//
function SAWSOAP_ItemInfo_getLastModified() { return this._lastModified;}

SAWSOAP_ItemInfo.prototype.getLastModified = SAWSOAP_ItemInfo_getLastModified;

function SAWSOAP_ItemInfo_setLastModified(value) { this._lastModified = value;}

SAWSOAP_ItemInfo.prototype.setLastModified = SAWSOAP_ItemInfo_setLastModified;
//
// accessor is SAWSOAP_ItemInfo.prototype.getCreated
// element get for created
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - optional element
//
// element set for created
// setter function is is SAWSOAP_ItemInfo.prototype.setCreated
//
function SAWSOAP_ItemInfo_getCreated() { return this._created;}

SAWSOAP_ItemInfo.prototype.getCreated = SAWSOAP_ItemInfo_getCreated;

function SAWSOAP_ItemInfo_setCreated(value) { this._created = value;}

SAWSOAP_ItemInfo.prototype.setCreated = SAWSOAP_ItemInfo_setCreated;
//
// accessor is SAWSOAP_ItemInfo.prototype.getAccessed
// element get for accessed
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - optional element
//
// element set for accessed
// setter function is is SAWSOAP_ItemInfo.prototype.setAccessed
//
function SAWSOAP_ItemInfo_getAccessed() { return this._accessed;}

SAWSOAP_ItemInfo.prototype.getAccessed = SAWSOAP_ItemInfo_getAccessed;

function SAWSOAP_ItemInfo_setAccessed(value) { this._accessed = value;}

SAWSOAP_ItemInfo.prototype.setAccessed = SAWSOAP_ItemInfo_setAccessed;
//
// accessor is SAWSOAP_ItemInfo.prototype.getCreator
// element get for creator
// - element type is {urn://oracle.bi.webservices/v6}Account
// - optional element
//
// element set for creator
// setter function is is SAWSOAP_ItemInfo.prototype.setCreator
//
function SAWSOAP_ItemInfo_getCreator() { return this._creator;}

SAWSOAP_ItemInfo.prototype.getCreator = SAWSOAP_ItemInfo_getCreator;

function SAWSOAP_ItemInfo_setCreator(value) { this._creator = value;}

SAWSOAP_ItemInfo.prototype.setCreator = SAWSOAP_ItemInfo_setCreator;
//
// accessor is SAWSOAP_ItemInfo.prototype.getLastModifier
// element get for lastModifier
// - element type is {urn://oracle.bi.webservices/v6}Account
// - optional element
//
// element set for lastModifier
// setter function is is SAWSOAP_ItemInfo.prototype.setLastModifier
//
function SAWSOAP_ItemInfo_getLastModifier() { return this._lastModifier;}

SAWSOAP_ItemInfo.prototype.getLastModifier = SAWSOAP_ItemInfo_getLastModifier;

function SAWSOAP_ItemInfo_setLastModifier(value) { this._lastModifier = value;}

SAWSOAP_ItemInfo.prototype.setLastModifier = SAWSOAP_ItemInfo_setLastModifier;
//
// accessor is SAWSOAP_ItemInfo.prototype.getSignature
// element get for signature
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for signature
// setter function is is SAWSOAP_ItemInfo.prototype.setSignature
//
function SAWSOAP_ItemInfo_getSignature() { return this._signature;}

SAWSOAP_ItemInfo.prototype.getSignature = SAWSOAP_ItemInfo_getSignature;

function SAWSOAP_ItemInfo_setSignature(value) { this._signature = value;}

SAWSOAP_ItemInfo.prototype.setSignature = SAWSOAP_ItemInfo_setSignature;
//
// accessor is SAWSOAP_ItemInfo.prototype.getTargetPath
// element get for targetPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for targetPath
// setter function is is SAWSOAP_ItemInfo.prototype.setTargetPath
//
function SAWSOAP_ItemInfo_getTargetPath() { return this._targetPath;}

SAWSOAP_ItemInfo.prototype.getTargetPath = SAWSOAP_ItemInfo_getTargetPath;

function SAWSOAP_ItemInfo_setTargetPath(value) { this._targetPath = value;}

SAWSOAP_ItemInfo.prototype.setTargetPath = SAWSOAP_ItemInfo_setTargetPath;
//
// accessor is SAWSOAP_ItemInfo.prototype.getAcl
// element get for acl
// - element type is {urn://oracle.bi.webservices/v6}ACL
// - optional element
//
// element set for acl
// setter function is is SAWSOAP_ItemInfo.prototype.setAcl
//
function SAWSOAP_ItemInfo_getAcl() { return this._acl;}

SAWSOAP_ItemInfo.prototype.getAcl = SAWSOAP_ItemInfo_getAcl;

function SAWSOAP_ItemInfo_setAcl(value) { this._acl = value;}

SAWSOAP_ItemInfo.prototype.setAcl = SAWSOAP_ItemInfo_setAcl;
//
// accessor is SAWSOAP_ItemInfo.prototype.getOwner
// element get for owner
// - element type is {urn://oracle.bi.webservices/v6}Account
// - optional element
//
// element set for owner
// setter function is is SAWSOAP_ItemInfo.prototype.setOwner
//
function SAWSOAP_ItemInfo_getOwner() { return this._owner;}

SAWSOAP_ItemInfo.prototype.getOwner = SAWSOAP_ItemInfo_getOwner;

function SAWSOAP_ItemInfo_setOwner(value) { this._owner = value;}

SAWSOAP_ItemInfo.prototype.setOwner = SAWSOAP_ItemInfo_setOwner;
//
// accessor is SAWSOAP_ItemInfo.prototype.getItemProperties
// element get for itemProperties
// - element type is {urn://oracle.bi.webservices/v6}NameValuePair
// - required element
// - array
//
// element set for itemProperties
// setter function is is SAWSOAP_ItemInfo.prototype.setItemProperties
//
function SAWSOAP_ItemInfo_getItemProperties() { return this._itemProperties;}

SAWSOAP_ItemInfo.prototype.getItemProperties = SAWSOAP_ItemInfo_getItemProperties;

function SAWSOAP_ItemInfo_setItemProperties(value) { this._itemProperties = value;}

SAWSOAP_ItemInfo.prototype.setItemProperties = SAWSOAP_ItemInfo_setItemProperties;
//
// Serialize {urn://oracle.bi.webservices/v6}ItemInfo
//
function SAWSOAP_ItemInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</jns0:type>';
    }
    // block for local variables
    {
     if (this._caption != null) {
      xml = xml + '<jns0:caption>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._caption);
      xml = xml + '</jns0:caption>';
     }
    }
    // block for local variables
    {
     if (this._attributes != null) {
      xml = xml + '<jns0:attributes>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._attributes);
      xml = xml + '</jns0:attributes>';
     }
    }
    // block for local variables
    {
     if (this._lastModified != null) {
      xml = xml + '<jns0:lastModified>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._lastModified);
      xml = xml + '</jns0:lastModified>';
     }
    }
    // block for local variables
    {
     if (this._created != null) {
      xml = xml + '<jns0:created>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._created);
      xml = xml + '</jns0:created>';
     }
    }
    // block for local variables
    {
     if (this._accessed != null) {
      xml = xml + '<jns0:accessed>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._accessed);
      xml = xml + '</jns0:accessed>';
     }
    }
    // block for local variables
    {
     if (this._creator != null) {
      xml = xml + this._creator.serialize(cxfjsutils, 'jns0:creator', null);
     }
    }
    // block for local variables
    {
     if (this._lastModifier != null) {
      xml = xml + this._lastModifier.serialize(cxfjsutils, 'jns0:lastModifier', null);
     }
    }
    // block for local variables
    {
     if (this._signature != null) {
      xml = xml + '<jns0:signature>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._signature);
      xml = xml + '</jns0:signature>';
     }
    }
    // block for local variables
    {
     if (this._targetPath != null) {
      xml = xml + '<jns0:targetPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._targetPath);
      xml = xml + '</jns0:targetPath>';
     }
    }
    // block for local variables
    {
     if (this._acl != null) {
      xml = xml + this._acl.serialize(cxfjsutils, 'jns0:acl', null);
     }
    }
    // block for local variables
    {
     if (this._owner != null) {
      xml = xml + this._owner.serialize(cxfjsutils, 'jns0:owner', null);
     }
    }
    // block for local variables
    {
     if (this._itemProperties != null) {
      for (var ax = 0;ax < this._itemProperties.length;ax ++) {
       if (this._itemProperties[ax] == null) {
        xml = xml + '<jns0:itemProperties/>';
       } else {
        xml = xml + this._itemProperties[ax].serialize(cxfjsutils, 'jns0:itemProperties', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_ItemInfo.prototype.serialize = SAWSOAP_ItemInfo_serialize;

function SAWSOAP_ItemInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_ItemInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing caption');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'caption')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCaption(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing attributes');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'attributes')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setAttributes(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing lastModified');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'lastModified')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLastModified(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing created');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'created')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCreated(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accessed');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'accessed')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAccessed(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing creator');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'creator')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
     }
     newobject.setCreator(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing lastModifier');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'lastModifier')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
     }
     newobject.setLastModifier(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing signature');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'signature')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSignature(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing targetPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'targetPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTargetPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing acl');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'acl')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_ACL_deserialize(cxfjsutils, curElement);
     }
     newobject.setAcl(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing owner');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'owner')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
     }
     newobject.setOwner(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing itemProperties');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemProperties')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_NameValuePair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemProperties'));
     newobject.setItemProperties(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}PathMapEntry
//
function SAWSOAP_PathMapEntry () {
    this.typeMarker = 'SAWSOAP_PathMapEntry';
    this._source = '';
    this._destination = '';
}

//
// accessor is SAWSOAP_PathMapEntry.prototype.getSource
// element get for source
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for source
// setter function is is SAWSOAP_PathMapEntry.prototype.setSource
//
function SAWSOAP_PathMapEntry_getSource() { return this._source;}

SAWSOAP_PathMapEntry.prototype.getSource = SAWSOAP_PathMapEntry_getSource;

function SAWSOAP_PathMapEntry_setSource(value) { this._source = value;}

SAWSOAP_PathMapEntry.prototype.setSource = SAWSOAP_PathMapEntry_setSource;
//
// accessor is SAWSOAP_PathMapEntry.prototype.getDestination
// element get for destination
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for destination
// setter function is is SAWSOAP_PathMapEntry.prototype.setDestination
//
function SAWSOAP_PathMapEntry_getDestination() { return this._destination;}

SAWSOAP_PathMapEntry.prototype.getDestination = SAWSOAP_PathMapEntry_getDestination;

function SAWSOAP_PathMapEntry_setDestination(value) { this._destination = value;}

SAWSOAP_PathMapEntry.prototype.setDestination = SAWSOAP_PathMapEntry_setDestination;
//
// Serialize {urn://oracle.bi.webservices/v6}PathMapEntry
//
function SAWSOAP_PathMapEntry_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:source>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._source);
     xml = xml + '</jns0:source>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:destination>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._destination);
     xml = xml + '</jns0:destination>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_PathMapEntry.prototype.serialize = SAWSOAP_PathMapEntry_serialize;

function SAWSOAP_PathMapEntry_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_PathMapEntry();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing source');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSource(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing destination');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDestination(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}CatalogObject
//
function SAWSOAP_CatalogObject () {
    this.typeMarker = 'SAWSOAP_CatalogObject';
    this._catalogObject = null;
    this._catalogObjectBytes = null;
    this._itemInfo = null;
    this._errorInfo = null;
}

//
// accessor is SAWSOAP_CatalogObject.prototype.getCatalogObject
// element get for catalogObject
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for catalogObject
// setter function is is SAWSOAP_CatalogObject.prototype.setCatalogObject
//
function SAWSOAP_CatalogObject_getCatalogObject() { return this._catalogObject;}

SAWSOAP_CatalogObject.prototype.getCatalogObject = SAWSOAP_CatalogObject_getCatalogObject;

function SAWSOAP_CatalogObject_setCatalogObject(value) { this._catalogObject = value;}

SAWSOAP_CatalogObject.prototype.setCatalogObject = SAWSOAP_CatalogObject_setCatalogObject;
//
// accessor is SAWSOAP_CatalogObject.prototype.getCatalogObjectBytes
// element get for catalogObjectBytes
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - optional element
//
// element set for catalogObjectBytes
// setter function is is SAWSOAP_CatalogObject.prototype.setCatalogObjectBytes
//
function SAWSOAP_CatalogObject_getCatalogObjectBytes() { return this._catalogObjectBytes;}

SAWSOAP_CatalogObject.prototype.getCatalogObjectBytes = SAWSOAP_CatalogObject_getCatalogObjectBytes;

function SAWSOAP_CatalogObject_setCatalogObjectBytes(value) { this._catalogObjectBytes = value;}

SAWSOAP_CatalogObject.prototype.setCatalogObjectBytes = SAWSOAP_CatalogObject_setCatalogObjectBytes;
//
// accessor is SAWSOAP_CatalogObject.prototype.getItemInfo
// element get for itemInfo
// - element type is {urn://oracle.bi.webservices/v6}ItemInfo
// - optional element
//
// element set for itemInfo
// setter function is is SAWSOAP_CatalogObject.prototype.setItemInfo
//
function SAWSOAP_CatalogObject_getItemInfo() { return this._itemInfo;}

SAWSOAP_CatalogObject.prototype.getItemInfo = SAWSOAP_CatalogObject_getItemInfo;

function SAWSOAP_CatalogObject_setItemInfo(value) { this._itemInfo = value;}

SAWSOAP_CatalogObject.prototype.setItemInfo = SAWSOAP_CatalogObject_setItemInfo;
//
// accessor is SAWSOAP_CatalogObject.prototype.getErrorInfo
// element get for errorInfo
// - element type is {urn://oracle.bi.webservices/v6}ErrorInfo
// - optional element
//
// element set for errorInfo
// setter function is is SAWSOAP_CatalogObject.prototype.setErrorInfo
//
function SAWSOAP_CatalogObject_getErrorInfo() { return this._errorInfo;}

SAWSOAP_CatalogObject.prototype.getErrorInfo = SAWSOAP_CatalogObject_getErrorInfo;

function SAWSOAP_CatalogObject_setErrorInfo(value) { this._errorInfo = value;}

SAWSOAP_CatalogObject.prototype.setErrorInfo = SAWSOAP_CatalogObject_setErrorInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}CatalogObject
//
function SAWSOAP_CatalogObject_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._catalogObject != null) {
      xml = xml + '<jns0:catalogObject>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._catalogObject);
      xml = xml + '</jns0:catalogObject>';
     }
    }
    // block for local variables
    {
     if (this._catalogObjectBytes != null) {
      xml = xml + '<jns0:catalogObjectBytes>';
      xml = xml + cxfjsutils.packageMtom(this._catalogObjectBytes);
      xml = xml + '</jns0:catalogObjectBytes>';
     }
    }
    // block for local variables
    {
     if (this._itemInfo != null) {
      xml = xml + this._itemInfo.serialize(cxfjsutils, 'jns0:itemInfo', null);
     }
    }
    // block for local variables
    {
     if (this._errorInfo != null) {
      xml = xml + this._errorInfo.serialize(cxfjsutils, 'jns0:errorInfo', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_CatalogObject.prototype.serialize = SAWSOAP_CatalogObject_serialize;

function SAWSOAP_CatalogObject_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_CatalogObject();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing catalogObject');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObject')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCatalogObject(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing catalogObjectBytes');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObjectBytes')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = cxfjsutils.deserializeBase64orMom(curElement);
     }
     newobject.setCatalogObjectBytes(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing itemInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemInfo')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_ItemInfo_deserialize(cxfjsutils, curElement);
     }
     newobject.setItemInfo(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'errorInfo')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_ErrorInfo_deserialize(cxfjsutils, curElement);
     }
     newobject.setErrorInfo(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}upgradeXMLResult
//
function SAWSOAP_upgradeXMLResult () {
    this.typeMarker = 'SAWSOAP_upgradeXMLResult';
    this._return = '';
}

//
// accessor is SAWSOAP_upgradeXMLResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_upgradeXMLResult.prototype.setReturn
//
function SAWSOAP_upgradeXMLResult_getReturn() { return this._return;}

SAWSOAP_upgradeXMLResult.prototype.getReturn = SAWSOAP_upgradeXMLResult_getReturn;

function SAWSOAP_upgradeXMLResult_setReturn(value) { this._return = value;}

SAWSOAP_upgradeXMLResult.prototype.setReturn = SAWSOAP_upgradeXMLResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}upgradeXMLResult
//
function SAWSOAP_upgradeXMLResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_upgradeXMLResult.prototype.serialize = SAWSOAP_upgradeXMLResult_serialize;

function SAWSOAP_upgradeXMLResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_upgradeXMLResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}importResult
//
function SAWSOAP_importResult () {
    this.typeMarker = 'SAWSOAP_importResult';
    this._error = [];
}

//
// accessor is SAWSOAP_importResult.prototype.getError
// element get for error
// - element type is {urn://oracle.bi.webservices/v6}ImportError
// - required element
// - array
//
// element set for error
// setter function is is SAWSOAP_importResult.prototype.setError
//
function SAWSOAP_importResult_getError() { return this._error;}

SAWSOAP_importResult.prototype.getError = SAWSOAP_importResult_getError;

function SAWSOAP_importResult_setError(value) { this._error = value;}

SAWSOAP_importResult.prototype.setError = SAWSOAP_importResult_setError;
//
// Serialize {urn://oracle.bi.webservices/v6}importResult
//
function SAWSOAP_importResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._error != null) {
      for (var ax = 0;ax < this._error.length;ax ++) {
       if (this._error[ax] == null) {
        xml = xml + '<jns0:error/>';
       } else {
        xml = xml + this._error[ax].serialize(cxfjsutils, 'jns0:error', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_importResult.prototype.serialize = SAWSOAP_importResult_serialize;

function SAWSOAP_importResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_importResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing error');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'error')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_ImportError_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'error'));
     newobject.setError(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setBridge
//
function SAWSOAP_setBridge () {
    this.typeMarker = 'SAWSOAP_setBridge';
    this._bridge = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_setBridge.prototype.getBridge
// element get for bridge
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for bridge
// setter function is is SAWSOAP_setBridge.prototype.setBridge
//
function SAWSOAP_setBridge_getBridge() { return this._bridge;}

SAWSOAP_setBridge.prototype.getBridge = SAWSOAP_setBridge_getBridge;

function SAWSOAP_setBridge_setBridge(value) { this._bridge = value;}

SAWSOAP_setBridge.prototype.setBridge = SAWSOAP_setBridge_setBridge;
//
// accessor is SAWSOAP_setBridge.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_setBridge.prototype.setSessionID
//
function SAWSOAP_setBridge_getSessionID() { return this._sessionID;}

SAWSOAP_setBridge.prototype.getSessionID = SAWSOAP_setBridge_getSessionID;

function SAWSOAP_setBridge_setSessionID(value) { this._sessionID = value;}

SAWSOAP_setBridge.prototype.setSessionID = SAWSOAP_setBridge_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}setBridge
//
function SAWSOAP_setBridge_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:bridge>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._bridge);
     xml = xml + '</jns0:bridge>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setBridge.prototype.serialize = SAWSOAP_setBridge_serialize;

function SAWSOAP_setBridge_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setBridge();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bridge');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBridge(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteItem
//
function SAWSOAP_deleteItem () {
    this.typeMarker = 'SAWSOAP_deleteItem';
    this._path = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_deleteItem.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_deleteItem.prototype.setPath
//
function SAWSOAP_deleteItem_getPath() { return this._path;}

SAWSOAP_deleteItem.prototype.getPath = SAWSOAP_deleteItem_getPath;

function SAWSOAP_deleteItem_setPath(value) { this._path = value;}

SAWSOAP_deleteItem.prototype.setPath = SAWSOAP_deleteItem_setPath;
//
// accessor is SAWSOAP_deleteItem.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_deleteItem.prototype.setSessionID
//
function SAWSOAP_deleteItem_getSessionID() { return this._sessionID;}

SAWSOAP_deleteItem.prototype.getSessionID = SAWSOAP_deleteItem_getSessionID;

function SAWSOAP_deleteItem_setSessionID(value) { this._sessionID = value;}

SAWSOAP_deleteItem.prototype.setSessionID = SAWSOAP_deleteItem_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}deleteItem
//
function SAWSOAP_deleteItem_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteItem.prototype.serialize = SAWSOAP_deleteItem_serialize;

function SAWSOAP_deleteItem_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteItem();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}cancelQueryResult
//
function SAWSOAP_cancelQueryResult () {
    this.typeMarker = 'SAWSOAP_cancelQueryResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}cancelQueryResult
//
function SAWSOAP_cancelQueryResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_cancelQueryResult.prototype.serialize = SAWSOAP_cancelQueryResult_serialize;

function SAWSOAP_cancelQueryResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_cancelQueryResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSubjectAreasResult
//
function SAWSOAP_getSubjectAreasResult () {
    this.typeMarker = 'SAWSOAP_getSubjectAreasResult';
    this._subjectArea = [];
}

//
// accessor is SAWSOAP_getSubjectAreasResult.prototype.getSubjectArea
// element get for subjectArea
// - element type is {urn://oracle.bi.webservices/v6}SASubjectArea
// - required element
// - array
//
// element set for subjectArea
// setter function is is SAWSOAP_getSubjectAreasResult.prototype.setSubjectArea
//
function SAWSOAP_getSubjectAreasResult_getSubjectArea() { return this._subjectArea;}

SAWSOAP_getSubjectAreasResult.prototype.getSubjectArea = SAWSOAP_getSubjectAreasResult_getSubjectArea;

function SAWSOAP_getSubjectAreasResult_setSubjectArea(value) { this._subjectArea = value;}

SAWSOAP_getSubjectAreasResult.prototype.setSubjectArea = SAWSOAP_getSubjectAreasResult_setSubjectArea;
//
// Serialize {urn://oracle.bi.webservices/v6}getSubjectAreasResult
//
function SAWSOAP_getSubjectAreasResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._subjectArea != null) {
      for (var ax = 0;ax < this._subjectArea.length;ax ++) {
       if (this._subjectArea[ax] == null) {
        xml = xml + '<jns0:subjectArea/>';
       } else {
        xml = xml + this._subjectArea[ax].serialize(cxfjsutils, 'jns0:subjectArea', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSubjectAreasResult.prototype.serialize = SAWSOAP_getSubjectAreasResult_serialize;

function SAWSOAP_getSubjectAreasResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSubjectAreasResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subjectArea');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'subjectArea')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_SASubjectArea_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'subjectArea'));
     newobject.setSubjectArea(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}renameAccountsResult
//
function SAWSOAP_renameAccountsResult () {
    this.typeMarker = 'SAWSOAP_renameAccountsResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}renameAccountsResult
//
function SAWSOAP_renameAccountsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_renameAccountsResult.prototype.serialize = SAWSOAP_renameAccountsResult_serialize;

function SAWSOAP_renameAccountsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_renameAccountsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logonex
//
function SAWSOAP_logonex () {
    this.typeMarker = 'SAWSOAP_logonex';
    this._name = null;
    this._password = null;
    this._sessionparams = null;
}

//
// accessor is SAWSOAP_logonex.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for name
// setter function is is SAWSOAP_logonex.prototype.setName
//
function SAWSOAP_logonex_getName() { return this._name;}

SAWSOAP_logonex.prototype.getName = SAWSOAP_logonex_getName;

function SAWSOAP_logonex_setName(value) { this._name = value;}

SAWSOAP_logonex.prototype.setName = SAWSOAP_logonex_setName;
//
// accessor is SAWSOAP_logonex.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for password
// setter function is is SAWSOAP_logonex.prototype.setPassword
//
function SAWSOAP_logonex_getPassword() { return this._password;}

SAWSOAP_logonex.prototype.getPassword = SAWSOAP_logonex_getPassword;

function SAWSOAP_logonex_setPassword(value) { this._password = value;}

SAWSOAP_logonex.prototype.setPassword = SAWSOAP_logonex_setPassword;
//
// accessor is SAWSOAP_logonex.prototype.getSessionparams
// element get for sessionparams
// - element type is {urn://oracle.bi.webservices/v6}SAWSessionParameters
// - required element
// - nillable
//
// element set for sessionparams
// setter function is is SAWSOAP_logonex.prototype.setSessionparams
//
function SAWSOAP_logonex_getSessionparams() { return this._sessionparams;}

SAWSOAP_logonex.prototype.getSessionparams = SAWSOAP_logonex_getSessionparams;

function SAWSOAP_logonex_setSessionparams(value) { this._sessionparams = value;}

SAWSOAP_logonex.prototype.setSessionparams = SAWSOAP_logonex_setSessionparams;
//
// Serialize {urn://oracle.bi.webservices/v6}logonex
//
function SAWSOAP_logonex_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name == null) {
      xml = xml + '<jns0:name xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</jns0:name>';
     }
    }
    // block for local variables
    {
     if (this._password == null) {
      xml = xml + '<jns0:password xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:password>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._password);
      xml = xml + '</jns0:password>';
     }
    }
    // block for local variables
    {
     if (this._sessionparams == null) {
      xml = xml + '<jns0:sessionparams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._sessionparams.serialize(cxfjsutils, 'jns0:sessionparams', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logonex.prototype.serialize = SAWSOAP_logonex_serialize;

function SAWSOAP_logonex_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logonex();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionparams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SAWSessionParameters_deserialize(cxfjsutils, curElement);
    }
    newobject.setSessionparams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeXMLQueryResult
//
function SAWSOAP_executeXMLQueryResult () {
    this.typeMarker = 'SAWSOAP_executeXMLQueryResult';
    this._return = null;
}

//
// accessor is SAWSOAP_executeXMLQueryResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}QueryResults
// - required element
//
// element set for return
// setter function is is SAWSOAP_executeXMLQueryResult.prototype.setReturn
//
function SAWSOAP_executeXMLQueryResult_getReturn() { return this._return;}

SAWSOAP_executeXMLQueryResult.prototype.getReturn = SAWSOAP_executeXMLQueryResult_getReturn;

function SAWSOAP_executeXMLQueryResult_setReturn(value) { this._return = value;}

SAWSOAP_executeXMLQueryResult.prototype.setReturn = SAWSOAP_executeXMLQueryResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}executeXMLQueryResult
//
function SAWSOAP_executeXMLQueryResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeXMLQueryResult.prototype.serialize = SAWSOAP_executeXMLQueryResult_serialize;

function SAWSOAP_executeXMLQueryResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeXMLQueryResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_QueryResults_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeIBotNowResult
//
function SAWSOAP_executeIBotNowResult () {
    this.typeMarker = 'SAWSOAP_executeIBotNowResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}executeIBotNowResult
//
function SAWSOAP_executeIBotNowResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeIBotNowResult.prototype.serialize = SAWSOAP_executeIBotNowResult_serialize;

function SAWSOAP_executeIBotNowResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeIBotNowResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSessionVariables
//
function SAWSOAP_getSessionVariables () {
    this.typeMarker = 'SAWSOAP_getSessionVariables';
    this._names = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getSessionVariables.prototype.getNames
// element get for names
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
// - nillable
//
// element set for names
// setter function is is SAWSOAP_getSessionVariables.prototype.setNames
//
function SAWSOAP_getSessionVariables_getNames() { return this._names;}

SAWSOAP_getSessionVariables.prototype.getNames = SAWSOAP_getSessionVariables_getNames;

function SAWSOAP_getSessionVariables_setNames(value) { this._names = value;}

SAWSOAP_getSessionVariables.prototype.setNames = SAWSOAP_getSessionVariables_setNames;
//
// accessor is SAWSOAP_getSessionVariables.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getSessionVariables.prototype.setSessionID
//
function SAWSOAP_getSessionVariables_getSessionID() { return this._sessionID;}

SAWSOAP_getSessionVariables.prototype.getSessionID = SAWSOAP_getSessionVariables_getSessionID;

function SAWSOAP_getSessionVariables_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getSessionVariables.prototype.setSessionID = SAWSOAP_getSessionVariables_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getSessionVariables
//
function SAWSOAP_getSessionVariables_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._names != null) {
      for (var ax = 0;ax < this._names.length;ax ++) {
       if (this._names[ax] == null) {
        xml = xml + '<jns0:names xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<jns0:names>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._names[ax]);
        xml = xml + '</jns0:names>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSessionVariables.prototype.serialize = SAWSOAP_getSessionVariables_serialize;

function SAWSOAP_getSessionVariables_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSessionVariables();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing names');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'names')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'names'));
     newobject.setNames(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeListFilesResult
//
function SAWSOAP_writeListFilesResult () {
    this.typeMarker = 'SAWSOAP_writeListFilesResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_writeListFilesResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_writeListFilesResult.prototype.setJobInfo
//
function SAWSOAP_writeListFilesResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_writeListFilesResult.prototype.getJobInfo = SAWSOAP_writeListFilesResult_getJobInfo;

function SAWSOAP_writeListFilesResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_writeListFilesResult.prototype.setJobInfo = SAWSOAP_writeListFilesResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}writeListFilesResult
//
function SAWSOAP_writeListFilesResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeListFilesResult.prototype.serialize = SAWSOAP_writeListFilesResult_serialize;

function SAWSOAP_writeListFilesResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeListFilesResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}keepAlive
//
function SAWSOAP_keepAlive () {
    this.typeMarker = 'SAWSOAP_keepAlive';
    this._sessionID = [];
}

//
// accessor is SAWSOAP_keepAlive.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for sessionID
// setter function is is SAWSOAP_keepAlive.prototype.setSessionID
//
function SAWSOAP_keepAlive_getSessionID() { return this._sessionID;}

SAWSOAP_keepAlive.prototype.getSessionID = SAWSOAP_keepAlive_getSessionID;

function SAWSOAP_keepAlive_setSessionID(value) { this._sessionID = value;}

SAWSOAP_keepAlive.prototype.setSessionID = SAWSOAP_keepAlive_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}keepAlive
//
function SAWSOAP_keepAlive_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      for (var ax = 0;ax < this._sessionID.length;ax ++) {
       if (this._sessionID[ax] == null) {
        xml = xml + '<jns0:sessionID/>';
       } else {
        xml = xml + '<jns0:sessionID>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID[ax]);
        xml = xml + '</jns0:sessionID>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_keepAlive.prototype.serialize = SAWSOAP_keepAlive_serialize;

function SAWSOAP_keepAlive_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_keepAlive();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID'));
     newobject.setSessionID(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}evaluateInlineConditionResult
//
function SAWSOAP_evaluateInlineConditionResult () {
    this.typeMarker = 'SAWSOAP_evaluateInlineConditionResult';
    this._conditionIsTrue = '';
}

//
// accessor is SAWSOAP_evaluateInlineConditionResult.prototype.getConditionIsTrue
// element get for conditionIsTrue
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for conditionIsTrue
// setter function is is SAWSOAP_evaluateInlineConditionResult.prototype.setConditionIsTrue
//
function SAWSOAP_evaluateInlineConditionResult_getConditionIsTrue() { return this._conditionIsTrue;}

SAWSOAP_evaluateInlineConditionResult.prototype.getConditionIsTrue = SAWSOAP_evaluateInlineConditionResult_getConditionIsTrue;

function SAWSOAP_evaluateInlineConditionResult_setConditionIsTrue(value) { this._conditionIsTrue = value;}

SAWSOAP_evaluateInlineConditionResult.prototype.setConditionIsTrue = SAWSOAP_evaluateInlineConditionResult_setConditionIsTrue;
//
// Serialize {urn://oracle.bi.webservices/v6}evaluateInlineConditionResult
//
function SAWSOAP_evaluateInlineConditionResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:conditionIsTrue>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._conditionIsTrue);
     xml = xml + '</jns0:conditionIsTrue>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_evaluateInlineConditionResult.prototype.serialize = SAWSOAP_evaluateInlineConditionResult_serialize;

function SAWSOAP_evaluateInlineConditionResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_evaluateInlineConditionResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing conditionIsTrue');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setConditionIsTrue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCounts
//
function SAWSOAP_getCounts () {
    this.typeMarker = 'SAWSOAP_getCounts';
    this._segmentPath = null;
    this._treePath = null;
    this._segmentationOptions = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getCounts.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_getCounts.prototype.setSegmentPath
//
function SAWSOAP_getCounts_getSegmentPath() { return this._segmentPath;}

SAWSOAP_getCounts.prototype.getSegmentPath = SAWSOAP_getCounts_getSegmentPath;

function SAWSOAP_getCounts_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_getCounts.prototype.setSegmentPath = SAWSOAP_getCounts_setSegmentPath;
//
// accessor is SAWSOAP_getCounts.prototype.getTreePath
// element get for treePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for treePath
// setter function is is SAWSOAP_getCounts.prototype.setTreePath
//
function SAWSOAP_getCounts_getTreePath() { return this._treePath;}

SAWSOAP_getCounts.prototype.getTreePath = SAWSOAP_getCounts_getTreePath;

function SAWSOAP_getCounts_setTreePath(value) { this._treePath = value;}

SAWSOAP_getCounts.prototype.setTreePath = SAWSOAP_getCounts_setTreePath;
//
// accessor is SAWSOAP_getCounts.prototype.getSegmentationOptions
// element get for segmentationOptions
// - element type is {urn://oracle.bi.webservices/v6}SegmentationOptions
// - optional element
//
// element set for segmentationOptions
// setter function is is SAWSOAP_getCounts.prototype.setSegmentationOptions
//
function SAWSOAP_getCounts_getSegmentationOptions() { return this._segmentationOptions;}

SAWSOAP_getCounts.prototype.getSegmentationOptions = SAWSOAP_getCounts_getSegmentationOptions;

function SAWSOAP_getCounts_setSegmentationOptions(value) { this._segmentationOptions = value;}

SAWSOAP_getCounts.prototype.setSegmentationOptions = SAWSOAP_getCounts_setSegmentationOptions;
//
// accessor is SAWSOAP_getCounts.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_getCounts.prototype.setSessionID
//
function SAWSOAP_getCounts_getSessionID() { return this._sessionID;}

SAWSOAP_getCounts.prototype.getSessionID = SAWSOAP_getCounts_getSessionID;

function SAWSOAP_getCounts_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getCounts.prototype.setSessionID = SAWSOAP_getCounts_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getCounts
//
function SAWSOAP_getCounts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treePath != null) {
      xml = xml + '<jns0:treePath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._treePath);
      xml = xml + '</jns0:treePath>';
     }
    }
    // block for local variables
    {
     if (this._segmentationOptions != null) {
      xml = xml + this._segmentationOptions.serialize(cxfjsutils, 'jns0:segmentationOptions', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCounts.prototype.serialize = SAWSOAP_getCounts_serialize;

function SAWSOAP_getCounts_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCounts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTreePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentationOptions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentationOptions')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_SegmentationOptions_deserialize(cxfjsutils, curElement);
     }
     newobject.setSegmentationOptions(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSubjectAreas
//
function SAWSOAP_getSubjectAreas () {
    this.typeMarker = 'SAWSOAP_getSubjectAreas';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getSubjectAreas.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getSubjectAreas.prototype.setSessionID
//
function SAWSOAP_getSubjectAreas_getSessionID() { return this._sessionID;}

SAWSOAP_getSubjectAreas.prototype.getSessionID = SAWSOAP_getSubjectAreas_getSessionID;

function SAWSOAP_getSubjectAreas_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getSubjectAreas.prototype.setSessionID = SAWSOAP_getSubjectAreas_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getSubjectAreas
//
function SAWSOAP_getSubjectAreas_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSubjectAreas.prototype.serialize = SAWSOAP_getSubjectAreas_serialize;

function SAWSOAP_getSubjectAreas_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSubjectAreas();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHtmlForReportResult
//
function SAWSOAP_getHtmlForReportResult () {
    this.typeMarker = 'SAWSOAP_getHtmlForReportResult';
    this._return = '';
}

//
// accessor is SAWSOAP_getHtmlForReportResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_getHtmlForReportResult.prototype.setReturn
//
function SAWSOAP_getHtmlForReportResult_getReturn() { return this._return;}

SAWSOAP_getHtmlForReportResult.prototype.getReturn = SAWSOAP_getHtmlForReportResult_getReturn;

function SAWSOAP_getHtmlForReportResult_setReturn(value) { this._return = value;}

SAWSOAP_getHtmlForReportResult.prototype.setReturn = SAWSOAP_getHtmlForReportResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getHtmlForReportResult
//
function SAWSOAP_getHtmlForReportResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHtmlForReportResult.prototype.serialize = SAWSOAP_getHtmlForReportResult_serialize;

function SAWSOAP_getHtmlForReportResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHtmlForReportResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteResultSetResult
//
function SAWSOAP_deleteResultSetResult () {
    this.typeMarker = 'SAWSOAP_deleteResultSetResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_deleteResultSetResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_deleteResultSetResult.prototype.setJobInfo
//
function SAWSOAP_deleteResultSetResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_deleteResultSetResult.prototype.getJobInfo = SAWSOAP_deleteResultSetResult_getJobInfo;

function SAWSOAP_deleteResultSetResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_deleteResultSetResult.prototype.setJobInfo = SAWSOAP_deleteResultSetResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}deleteResultSetResult
//
function SAWSOAP_deleteResultSetResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteResultSetResult.prototype.serialize = SAWSOAP_deleteResultSetResult_serialize;

function SAWSOAP_deleteResultSetResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteResultSetResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}removeFolderResult
//
function SAWSOAP_removeFolderResult () {
    this.typeMarker = 'SAWSOAP_removeFolderResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}removeFolderResult
//
function SAWSOAP_removeFolderResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_removeFolderResult.prototype.serialize = SAWSOAP_removeFolderResult_serialize;

function SAWSOAP_removeFolderResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_removeFolderResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSubItems
//
function SAWSOAP_getSubItems () {
    this.typeMarker = 'SAWSOAP_getSubItems';
    this._path = '';
    this._mask = '';
    this._resolveLinks = '';
    this._options = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getSubItems.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_getSubItems.prototype.setPath
//
function SAWSOAP_getSubItems_getPath() { return this._path;}

SAWSOAP_getSubItems.prototype.getPath = SAWSOAP_getSubItems_getPath;

function SAWSOAP_getSubItems_setPath(value) { this._path = value;}

SAWSOAP_getSubItems.prototype.setPath = SAWSOAP_getSubItems_setPath;
//
// accessor is SAWSOAP_getSubItems.prototype.getMask
// element get for mask
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mask
// setter function is is SAWSOAP_getSubItems.prototype.setMask
//
function SAWSOAP_getSubItems_getMask() { return this._mask;}

SAWSOAP_getSubItems.prototype.getMask = SAWSOAP_getSubItems_getMask;

function SAWSOAP_getSubItems_setMask(value) { this._mask = value;}

SAWSOAP_getSubItems.prototype.setMask = SAWSOAP_getSubItems_setMask;
//
// accessor is SAWSOAP_getSubItems.prototype.getResolveLinks
// element get for resolveLinks
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for resolveLinks
// setter function is is SAWSOAP_getSubItems.prototype.setResolveLinks
//
function SAWSOAP_getSubItems_getResolveLinks() { return this._resolveLinks;}

SAWSOAP_getSubItems.prototype.getResolveLinks = SAWSOAP_getSubItems_getResolveLinks;

function SAWSOAP_getSubItems_setResolveLinks(value) { this._resolveLinks = value;}

SAWSOAP_getSubItems.prototype.setResolveLinks = SAWSOAP_getSubItems_setResolveLinks;
//
// accessor is SAWSOAP_getSubItems.prototype.getOptions
// element get for options
// - element type is {urn://oracle.bi.webservices/v6}GetSubItemsParams
// - required element
// - nillable
//
// element set for options
// setter function is is SAWSOAP_getSubItems.prototype.setOptions
//
function SAWSOAP_getSubItems_getOptions() { return this._options;}

SAWSOAP_getSubItems.prototype.getOptions = SAWSOAP_getSubItems_getOptions;

function SAWSOAP_getSubItems_setOptions(value) { this._options = value;}

SAWSOAP_getSubItems.prototype.setOptions = SAWSOAP_getSubItems_setOptions;
//
// accessor is SAWSOAP_getSubItems.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getSubItems.prototype.setSessionID
//
function SAWSOAP_getSubItems_getSessionID() { return this._sessionID;}

SAWSOAP_getSubItems.prototype.getSessionID = SAWSOAP_getSubItems_getSessionID;

function SAWSOAP_getSubItems_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getSubItems.prototype.setSessionID = SAWSOAP_getSubItems_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getSubItems
//
function SAWSOAP_getSubItems_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:mask>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mask);
     xml = xml + '</jns0:mask>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:resolveLinks>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._resolveLinks);
     xml = xml + '</jns0:resolveLinks>';
    }
    // block for local variables
    {
     if (this._options == null) {
      xml = xml + '<jns0:options xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._options.serialize(cxfjsutils, 'jns0:options', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSubItems.prototype.serialize = SAWSOAP_getSubItems_serialize;

function SAWSOAP_getSubItems_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSubItems();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mask');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMask(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resolveLinks');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResolveLinks(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing options');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_GetSubItemsParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHeadersHtmlResult
//
function SAWSOAP_getHeadersHtmlResult () {
    this.typeMarker = 'SAWSOAP_getHeadersHtmlResult';
    this._return = '';
}

//
// accessor is SAWSOAP_getHeadersHtmlResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_getHeadersHtmlResult.prototype.setReturn
//
function SAWSOAP_getHeadersHtmlResult_getReturn() { return this._return;}

SAWSOAP_getHeadersHtmlResult.prototype.getReturn = SAWSOAP_getHeadersHtmlResult_getReturn;

function SAWSOAP_getHeadersHtmlResult_setReturn(value) { this._return = value;}

SAWSOAP_getHeadersHtmlResult.prototype.setReturn = SAWSOAP_getHeadersHtmlResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getHeadersHtmlResult
//
function SAWSOAP_getHeadersHtmlResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHeadersHtmlResult.prototype.serialize = SAWSOAP_getHeadersHtmlResult_serialize;

function SAWSOAP_getHeadersHtmlResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHeadersHtmlResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPromptedFilters
//
function SAWSOAP_getPromptedFilters () {
    this.typeMarker = 'SAWSOAP_getPromptedFilters';
    this._report = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getPromptedFilters.prototype.getReport
// element get for report
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for report
// setter function is is SAWSOAP_getPromptedFilters.prototype.setReport
//
function SAWSOAP_getPromptedFilters_getReport() { return this._report;}

SAWSOAP_getPromptedFilters.prototype.getReport = SAWSOAP_getPromptedFilters_getReport;

function SAWSOAP_getPromptedFilters_setReport(value) { this._report = value;}

SAWSOAP_getPromptedFilters.prototype.setReport = SAWSOAP_getPromptedFilters_setReport;
//
// accessor is SAWSOAP_getPromptedFilters.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getPromptedFilters.prototype.setSessionID
//
function SAWSOAP_getPromptedFilters_getSessionID() { return this._sessionID;}

SAWSOAP_getPromptedFilters.prototype.getSessionID = SAWSOAP_getPromptedFilters_getSessionID;

function SAWSOAP_getPromptedFilters_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getPromptedFilters.prototype.setSessionID = SAWSOAP_getPromptedFilters_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getPromptedFilters
//
function SAWSOAP_getPromptedFilters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._report.serialize(cxfjsutils, 'jns0:report', null);
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPromptedFilters.prototype.serialize = SAWSOAP_getPromptedFilters_serialize;

function SAWSOAP_getPromptedFilters_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPromptedFilters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing report');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReport(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}sendMessage
//
function SAWSOAP_sendMessage () {
    this.typeMarker = 'SAWSOAP_sendMessage';
    this._recipient = [];
    this._group = [];
    this._subject = '';
    this._body = '';
    this._priority = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_sendMessage.prototype.getRecipient
// element get for recipient
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for recipient
// setter function is is SAWSOAP_sendMessage.prototype.setRecipient
//
function SAWSOAP_sendMessage_getRecipient() { return this._recipient;}

SAWSOAP_sendMessage.prototype.getRecipient = SAWSOAP_sendMessage_getRecipient;

function SAWSOAP_sendMessage_setRecipient(value) { this._recipient = value;}

SAWSOAP_sendMessage.prototype.setRecipient = SAWSOAP_sendMessage_setRecipient;
//
// accessor is SAWSOAP_sendMessage.prototype.getGroup
// element get for group
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for group
// setter function is is SAWSOAP_sendMessage.prototype.setGroup
//
function SAWSOAP_sendMessage_getGroup() { return this._group;}

SAWSOAP_sendMessage.prototype.getGroup = SAWSOAP_sendMessage_getGroup;

function SAWSOAP_sendMessage_setGroup(value) { this._group = value;}

SAWSOAP_sendMessage.prototype.setGroup = SAWSOAP_sendMessage_setGroup;
//
// accessor is SAWSOAP_sendMessage.prototype.getSubject
// element get for subject
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for subject
// setter function is is SAWSOAP_sendMessage.prototype.setSubject
//
function SAWSOAP_sendMessage_getSubject() { return this._subject;}

SAWSOAP_sendMessage.prototype.getSubject = SAWSOAP_sendMessage_getSubject;

function SAWSOAP_sendMessage_setSubject(value) { this._subject = value;}

SAWSOAP_sendMessage.prototype.setSubject = SAWSOAP_sendMessage_setSubject;
//
// accessor is SAWSOAP_sendMessage.prototype.getBody
// element get for body
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for body
// setter function is is SAWSOAP_sendMessage.prototype.setBody
//
function SAWSOAP_sendMessage_getBody() { return this._body;}

SAWSOAP_sendMessage.prototype.getBody = SAWSOAP_sendMessage_getBody;

function SAWSOAP_sendMessage_setBody(value) { this._body = value;}

SAWSOAP_sendMessage.prototype.setBody = SAWSOAP_sendMessage_setBody;
//
// accessor is SAWSOAP_sendMessage.prototype.getPriority
// element get for priority
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for priority
// setter function is is SAWSOAP_sendMessage.prototype.setPriority
//
function SAWSOAP_sendMessage_getPriority() { return this._priority;}

SAWSOAP_sendMessage.prototype.getPriority = SAWSOAP_sendMessage_getPriority;

function SAWSOAP_sendMessage_setPriority(value) { this._priority = value;}

SAWSOAP_sendMessage.prototype.setPriority = SAWSOAP_sendMessage_setPriority;
//
// accessor is SAWSOAP_sendMessage.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_sendMessage.prototype.setSessionID
//
function SAWSOAP_sendMessage_getSessionID() { return this._sessionID;}

SAWSOAP_sendMessage.prototype.getSessionID = SAWSOAP_sendMessage_getSessionID;

function SAWSOAP_sendMessage_setSessionID(value) { this._sessionID = value;}

SAWSOAP_sendMessage.prototype.setSessionID = SAWSOAP_sendMessage_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}sendMessage
//
function SAWSOAP_sendMessage_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._recipient != null) {
      for (var ax = 0;ax < this._recipient.length;ax ++) {
       if (this._recipient[ax] == null) {
        xml = xml + '<jns0:recipient/>';
       } else {
        xml = xml + '<jns0:recipient>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._recipient[ax]);
        xml = xml + '</jns0:recipient>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._group != null) {
      for (var ax = 0;ax < this._group.length;ax ++) {
       if (this._group[ax] == null) {
        xml = xml + '<jns0:group/>';
       } else {
        xml = xml + '<jns0:group>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._group[ax]);
        xml = xml + '</jns0:group>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:subject>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._subject);
     xml = xml + '</jns0:subject>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:body>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._body);
     xml = xml + '</jns0:body>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:priority>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._priority);
     xml = xml + '</jns0:priority>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_sendMessage.prototype.serialize = SAWSOAP_sendMessage_serialize;

function SAWSOAP_sendMessage_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_sendMessage();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recipient');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'recipient')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'recipient'));
     newobject.setRecipient(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group'));
     newobject.setGroup(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subject');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSubject(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing body');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBody(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing priority');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPriority(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}forgetAccountsResult
//
function SAWSOAP_forgetAccountsResult () {
    this.typeMarker = 'SAWSOAP_forgetAccountsResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}forgetAccountsResult
//
function SAWSOAP_forgetAccountsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_forgetAccountsResult.prototype.serialize = SAWSOAP_forgetAccountsResult_serialize;

function SAWSOAP_forgetAccountsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_forgetAccountsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}renameAccounts
//
function SAWSOAP_renameAccounts () {
    this.typeMarker = 'SAWSOAP_renameAccounts';
    this._from = [];
    this._to = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_renameAccounts.prototype.getFrom
// element get for from
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for from
// setter function is is SAWSOAP_renameAccounts.prototype.setFrom
//
function SAWSOAP_renameAccounts_getFrom() { return this._from;}

SAWSOAP_renameAccounts.prototype.getFrom = SAWSOAP_renameAccounts_getFrom;

function SAWSOAP_renameAccounts_setFrom(value) { this._from = value;}

SAWSOAP_renameAccounts.prototype.setFrom = SAWSOAP_renameAccounts_setFrom;
//
// accessor is SAWSOAP_renameAccounts.prototype.getTo
// element get for to
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for to
// setter function is is SAWSOAP_renameAccounts.prototype.setTo
//
function SAWSOAP_renameAccounts_getTo() { return this._to;}

SAWSOAP_renameAccounts.prototype.getTo = SAWSOAP_renameAccounts_getTo;

function SAWSOAP_renameAccounts_setTo(value) { this._to = value;}

SAWSOAP_renameAccounts.prototype.setTo = SAWSOAP_renameAccounts_setTo;
//
// accessor is SAWSOAP_renameAccounts.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_renameAccounts.prototype.setSessionID
//
function SAWSOAP_renameAccounts_getSessionID() { return this._sessionID;}

SAWSOAP_renameAccounts.prototype.getSessionID = SAWSOAP_renameAccounts_getSessionID;

function SAWSOAP_renameAccounts_setSessionID(value) { this._sessionID = value;}

SAWSOAP_renameAccounts.prototype.setSessionID = SAWSOAP_renameAccounts_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}renameAccounts
//
function SAWSOAP_renameAccounts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._from != null) {
      for (var ax = 0;ax < this._from.length;ax ++) {
       if (this._from[ax] == null) {
        xml = xml + '<jns0:from/>';
       } else {
        xml = xml + this._from[ax].serialize(cxfjsutils, 'jns0:from', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._to != null) {
      for (var ax = 0;ax < this._to.length;ax ++) {
       if (this._to[ax] == null) {
        xml = xml + '<jns0:to/>';
       } else {
        xml = xml + this._to[ax].serialize(cxfjsutils, 'jns0:to', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_renameAccounts.prototype.serialize = SAWSOAP_renameAccounts_serialize;

function SAWSOAP_renameAccounts_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_renameAccounts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing from');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'from')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'from'));
     newobject.setFrom(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing to');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'to')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'to'));
     newobject.setTo(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHeadersHtml
//
function SAWSOAP_getHeadersHtml () {
    this.typeMarker = 'SAWSOAP_getHeadersHtml';
    this._pageID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getHeadersHtml.prototype.getPageID
// element get for pageID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageID
// setter function is is SAWSOAP_getHeadersHtml.prototype.setPageID
//
function SAWSOAP_getHeadersHtml_getPageID() { return this._pageID;}

SAWSOAP_getHeadersHtml.prototype.getPageID = SAWSOAP_getHeadersHtml_getPageID;

function SAWSOAP_getHeadersHtml_setPageID(value) { this._pageID = value;}

SAWSOAP_getHeadersHtml.prototype.setPageID = SAWSOAP_getHeadersHtml_setPageID;
//
// accessor is SAWSOAP_getHeadersHtml.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getHeadersHtml.prototype.setSessionID
//
function SAWSOAP_getHeadersHtml_getSessionID() { return this._sessionID;}

SAWSOAP_getHeadersHtml.prototype.getSessionID = SAWSOAP_getHeadersHtml_getSessionID;

function SAWSOAP_getHeadersHtml_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getHeadersHtml.prototype.setSessionID = SAWSOAP_getHeadersHtml_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getHeadersHtml
//
function SAWSOAP_getHeadersHtml_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageID);
     xml = xml + '</jns0:pageID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHeadersHtml.prototype.serialize = SAWSOAP_getHeadersHtml_serialize;

function SAWSOAP_getHeadersHtml_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHeadersHtml();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}unsubscribeResult
//
function SAWSOAP_unsubscribeResult () {
    this.typeMarker = 'SAWSOAP_unsubscribeResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}unsubscribeResult
//
function SAWSOAP_unsubscribeResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_unsubscribeResult.prototype.serialize = SAWSOAP_unsubscribeResult_serialize;

function SAWSOAP_unsubscribeResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_unsubscribeResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getConditionCustomizableReportElements
//
function SAWSOAP_getConditionCustomizableReportElements () {
    this.typeMarker = 'SAWSOAP_getConditionCustomizableReportElements';
    this._path = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getConditionCustomizableReportElements.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_getConditionCustomizableReportElements.prototype.setPath
//
function SAWSOAP_getConditionCustomizableReportElements_getPath() { return this._path;}

SAWSOAP_getConditionCustomizableReportElements.prototype.getPath = SAWSOAP_getConditionCustomizableReportElements_getPath;

function SAWSOAP_getConditionCustomizableReportElements_setPath(value) { this._path = value;}

SAWSOAP_getConditionCustomizableReportElements.prototype.setPath = SAWSOAP_getConditionCustomizableReportElements_setPath;
//
// accessor is SAWSOAP_getConditionCustomizableReportElements.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getConditionCustomizableReportElements.prototype.setSessionID
//
function SAWSOAP_getConditionCustomizableReportElements_getSessionID() { return this._sessionID;}

SAWSOAP_getConditionCustomizableReportElements.prototype.getSessionID = SAWSOAP_getConditionCustomizableReportElements_getSessionID;

function SAWSOAP_getConditionCustomizableReportElements_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getConditionCustomizableReportElements.prototype.setSessionID = SAWSOAP_getConditionCustomizableReportElements_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getConditionCustomizableReportElements
//
function SAWSOAP_getConditionCustomizableReportElements_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getConditionCustomizableReportElements.prototype.serialize = SAWSOAP_getConditionCustomizableReportElements_serialize;

function SAWSOAP_getConditionCustomizableReportElements_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getConditionCustomizableReportElements();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}sendMessageResult
//
function SAWSOAP_sendMessageResult () {
    this.typeMarker = 'SAWSOAP_sendMessageResult';
    this._status = '';
}

//
// accessor is SAWSOAP_sendMessageResult.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for status
// setter function is is SAWSOAP_sendMessageResult.prototype.setStatus
//
function SAWSOAP_sendMessageResult_getStatus() { return this._status;}

SAWSOAP_sendMessageResult.prototype.getStatus = SAWSOAP_sendMessageResult_getStatus;

function SAWSOAP_sendMessageResult_setStatus(value) { this._status = value;}

SAWSOAP_sendMessageResult.prototype.setStatus = SAWSOAP_sendMessageResult_setStatus;
//
// Serialize {urn://oracle.bi.webservices/v6}sendMessageResult
//
function SAWSOAP_sendMessageResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:status>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._status);
     xml = xml + '</jns0:status>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_sendMessageResult.prototype.serialize = SAWSOAP_sendMessageResult_serialize;

function SAWSOAP_sendMessageResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_sendMessageResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setStatus(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}impersonateResult
//
function SAWSOAP_impersonateResult () {
    this.typeMarker = 'SAWSOAP_impersonateResult';
    this._sessionID = '';
}

//
// accessor is SAWSOAP_impersonateResult.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for sessionID
// setter function is is SAWSOAP_impersonateResult.prototype.setSessionID
//
function SAWSOAP_impersonateResult_getSessionID() { return this._sessionID;}

SAWSOAP_impersonateResult.prototype.getSessionID = SAWSOAP_impersonateResult_getSessionID;

function SAWSOAP_impersonateResult_setSessionID(value) { this._sessionID = value;}

SAWSOAP_impersonateResult.prototype.setSessionID = SAWSOAP_impersonateResult_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}impersonateResult
//
function SAWSOAP_impersonateResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:sessionID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
     xml = xml + '</jns0:sessionID>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_impersonateResult.prototype.serialize = SAWSOAP_impersonateResult_serialize;

function SAWSOAP_impersonateResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_impersonateResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeIBotNow
//
function SAWSOAP_executeIBotNow () {
    this.typeMarker = 'SAWSOAP_executeIBotNow';
    this._path = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_executeIBotNow.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_executeIBotNow.prototype.setPath
//
function SAWSOAP_executeIBotNow_getPath() { return this._path;}

SAWSOAP_executeIBotNow.prototype.getPath = SAWSOAP_executeIBotNow_getPath;

function SAWSOAP_executeIBotNow_setPath(value) { this._path = value;}

SAWSOAP_executeIBotNow.prototype.setPath = SAWSOAP_executeIBotNow_setPath;
//
// accessor is SAWSOAP_executeIBotNow.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_executeIBotNow.prototype.setSessionID
//
function SAWSOAP_executeIBotNow_getSessionID() { return this._sessionID;}

SAWSOAP_executeIBotNow.prototype.getSessionID = SAWSOAP_executeIBotNow_getSessionID;

function SAWSOAP_executeIBotNow_setSessionID(value) { this._sessionID = value;}

SAWSOAP_executeIBotNow.prototype.setSessionID = SAWSOAP_executeIBotNow_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}executeIBotNow
//
function SAWSOAP_executeIBotNow_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeIBotNow.prototype.serialize = SAWSOAP_executeIBotNow_serialize;

function SAWSOAP_executeIBotNow_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeIBotNow();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}generateReportSQL
//
function SAWSOAP_generateReportSQL () {
    this.typeMarker = 'SAWSOAP_generateReportSQL';
    this._reportRef = null;
    this._reportParams = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_generateReportSQL.prototype.getReportRef
// element get for reportRef
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for reportRef
// setter function is is SAWSOAP_generateReportSQL.prototype.setReportRef
//
function SAWSOAP_generateReportSQL_getReportRef() { return this._reportRef;}

SAWSOAP_generateReportSQL.prototype.getReportRef = SAWSOAP_generateReportSQL_getReportRef;

function SAWSOAP_generateReportSQL_setReportRef(value) { this._reportRef = value;}

SAWSOAP_generateReportSQL.prototype.setReportRef = SAWSOAP_generateReportSQL_setReportRef;
//
// accessor is SAWSOAP_generateReportSQL.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - required element
// - nillable
//
// element set for reportParams
// setter function is is SAWSOAP_generateReportSQL.prototype.setReportParams
//
function SAWSOAP_generateReportSQL_getReportParams() { return this._reportParams;}

SAWSOAP_generateReportSQL.prototype.getReportParams = SAWSOAP_generateReportSQL_getReportParams;

function SAWSOAP_generateReportSQL_setReportParams(value) { this._reportParams = value;}

SAWSOAP_generateReportSQL.prototype.setReportParams = SAWSOAP_generateReportSQL_setReportParams;
//
// accessor is SAWSOAP_generateReportSQL.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_generateReportSQL.prototype.setSessionID
//
function SAWSOAP_generateReportSQL_getSessionID() { return this._sessionID;}

SAWSOAP_generateReportSQL.prototype.getSessionID = SAWSOAP_generateReportSQL_getSessionID;

function SAWSOAP_generateReportSQL_setSessionID(value) { this._sessionID = value;}

SAWSOAP_generateReportSQL.prototype.setSessionID = SAWSOAP_generateReportSQL_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}generateReportSQL
//
function SAWSOAP_generateReportSQL_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._reportRef.serialize(cxfjsutils, 'jns0:reportRef', null);
    }
    // block for local variables
    {
     if (this._reportParams == null) {
      xml = xml + '<jns0:reportParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_generateReportSQL.prototype.serialize = SAWSOAP_generateReportSQL_serialize;

function SAWSOAP_generateReportSQL_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_generateReportSQL();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportRef');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportRef(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}createLinkResult
//
function SAWSOAP_createLinkResult () {
    this.typeMarker = 'SAWSOAP_createLinkResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}createLinkResult
//
function SAWSOAP_createLinkResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_createLinkResult.prototype.serialize = SAWSOAP_createLinkResult_serialize;

function SAWSOAP_createLinkResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_createLinkResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}purgeLogResult
//
function SAWSOAP_purgeLogResult () {
    this.typeMarker = 'SAWSOAP_purgeLogResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}purgeLogResult
//
function SAWSOAP_purgeLogResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_purgeLogResult.prototype.serialize = SAWSOAP_purgeLogResult_serialize;

function SAWSOAP_purgeLogResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_purgeLogResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}evaluateCondition
//
function SAWSOAP_evaluateCondition () {
    this.typeMarker = 'SAWSOAP_evaluateCondition';
    this._path = '';
    this._reportCustomizationParameters = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_evaluateCondition.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_evaluateCondition.prototype.setPath
//
function SAWSOAP_evaluateCondition_getPath() { return this._path;}

SAWSOAP_evaluateCondition.prototype.getPath = SAWSOAP_evaluateCondition_getPath;

function SAWSOAP_evaluateCondition_setPath(value) { this._path = value;}

SAWSOAP_evaluateCondition.prototype.setPath = SAWSOAP_evaluateCondition_setPath;
//
// accessor is SAWSOAP_evaluateCondition.prototype.getReportCustomizationParameters
// element get for reportCustomizationParameters
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for reportCustomizationParameters
// setter function is is SAWSOAP_evaluateCondition.prototype.setReportCustomizationParameters
//
function SAWSOAP_evaluateCondition_getReportCustomizationParameters() { return this._reportCustomizationParameters;}

SAWSOAP_evaluateCondition.prototype.getReportCustomizationParameters = SAWSOAP_evaluateCondition_getReportCustomizationParameters;

function SAWSOAP_evaluateCondition_setReportCustomizationParameters(value) { this._reportCustomizationParameters = value;}

SAWSOAP_evaluateCondition.prototype.setReportCustomizationParameters = SAWSOAP_evaluateCondition_setReportCustomizationParameters;
//
// accessor is SAWSOAP_evaluateCondition.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_evaluateCondition.prototype.setSessionID
//
function SAWSOAP_evaluateCondition_getSessionID() { return this._sessionID;}

SAWSOAP_evaluateCondition.prototype.getSessionID = SAWSOAP_evaluateCondition_getSessionID;

function SAWSOAP_evaluateCondition_setSessionID(value) { this._sessionID = value;}

SAWSOAP_evaluateCondition.prototype.setSessionID = SAWSOAP_evaluateCondition_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}evaluateCondition
//
function SAWSOAP_evaluateCondition_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._reportCustomizationParameters != null) {
      for (var ax = 0;ax < this._reportCustomizationParameters.length;ax ++) {
       if (this._reportCustomizationParameters[ax] == null) {
        xml = xml + '<jns0:reportCustomizationParameters/>';
       } else {
        xml = xml + '<jns0:reportCustomizationParameters>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._reportCustomizationParameters[ax]);
        xml = xml + '</jns0:reportCustomizationParameters>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_evaluateCondition.prototype.serialize = SAWSOAP_evaluateCondition_serialize;

function SAWSOAP_evaluateCondition_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_evaluateCondition();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportCustomizationParameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'reportCustomizationParameters')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'reportCustomizationParameters'));
     newobject.setReportCustomizationParameters(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeObjectsResult
//
function SAWSOAP_writeObjectsResult () {
    this.typeMarker = 'SAWSOAP_writeObjectsResult';
    this._errorInfo = [];
}

//
// accessor is SAWSOAP_writeObjectsResult.prototype.getErrorInfo
// element get for errorInfo
// - element type is {urn://oracle.bi.webservices/v6}ErrorInfo
// - required element
// - array
//
// element set for errorInfo
// setter function is is SAWSOAP_writeObjectsResult.prototype.setErrorInfo
//
function SAWSOAP_writeObjectsResult_getErrorInfo() { return this._errorInfo;}

SAWSOAP_writeObjectsResult.prototype.getErrorInfo = SAWSOAP_writeObjectsResult_getErrorInfo;

function SAWSOAP_writeObjectsResult_setErrorInfo(value) { this._errorInfo = value;}

SAWSOAP_writeObjectsResult.prototype.setErrorInfo = SAWSOAP_writeObjectsResult_setErrorInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}writeObjectsResult
//
function SAWSOAP_writeObjectsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._errorInfo != null) {
      for (var ax = 0;ax < this._errorInfo.length;ax ++) {
       if (this._errorInfo[ax] == null) {
        xml = xml + '<jns0:errorInfo/>';
       } else {
        xml = xml + this._errorInfo[ax].serialize(cxfjsutils, 'jns0:errorInfo', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeObjectsResult.prototype.serialize = SAWSOAP_writeObjectsResult_serialize;

function SAWSOAP_writeObjectsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeObjectsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'errorInfo')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_ErrorInfo_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'errorInfo'));
     newobject.setErrorInfo(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}moveItem
//
function SAWSOAP_moveItem () {
    this.typeMarker = 'SAWSOAP_moveItem';
    this._pathSrc = '';
    this._pathDest = '';
    this._flagACL = 0;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_moveItem.prototype.getPathSrc
// element get for pathSrc
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pathSrc
// setter function is is SAWSOAP_moveItem.prototype.setPathSrc
//
function SAWSOAP_moveItem_getPathSrc() { return this._pathSrc;}

SAWSOAP_moveItem.prototype.getPathSrc = SAWSOAP_moveItem_getPathSrc;

function SAWSOAP_moveItem_setPathSrc(value) { this._pathSrc = value;}

SAWSOAP_moveItem.prototype.setPathSrc = SAWSOAP_moveItem_setPathSrc;
//
// accessor is SAWSOAP_moveItem.prototype.getPathDest
// element get for pathDest
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pathDest
// setter function is is SAWSOAP_moveItem.prototype.setPathDest
//
function SAWSOAP_moveItem_getPathDest() { return this._pathDest;}

SAWSOAP_moveItem.prototype.getPathDest = SAWSOAP_moveItem_getPathDest;

function SAWSOAP_moveItem_setPathDest(value) { this._pathDest = value;}

SAWSOAP_moveItem.prototype.setPathDest = SAWSOAP_moveItem_setPathDest;
//
// accessor is SAWSOAP_moveItem.prototype.getFlagACL
// element get for flagACL
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for flagACL
// setter function is is SAWSOAP_moveItem.prototype.setFlagACL
//
function SAWSOAP_moveItem_getFlagACL() { return this._flagACL;}

SAWSOAP_moveItem.prototype.getFlagACL = SAWSOAP_moveItem_getFlagACL;

function SAWSOAP_moveItem_setFlagACL(value) { this._flagACL = value;}

SAWSOAP_moveItem.prototype.setFlagACL = SAWSOAP_moveItem_setFlagACL;
//
// accessor is SAWSOAP_moveItem.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_moveItem.prototype.setSessionID
//
function SAWSOAP_moveItem_getSessionID() { return this._sessionID;}

SAWSOAP_moveItem.prototype.getSessionID = SAWSOAP_moveItem_getSessionID;

function SAWSOAP_moveItem_setSessionID(value) { this._sessionID = value;}

SAWSOAP_moveItem.prototype.setSessionID = SAWSOAP_moveItem_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}moveItem
//
function SAWSOAP_moveItem_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pathSrc>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pathSrc);
     xml = xml + '</jns0:pathSrc>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pathDest>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pathDest);
     xml = xml + '</jns0:pathDest>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flagACL>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flagACL);
     xml = xml + '</jns0:flagACL>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_moveItem.prototype.serialize = SAWSOAP_moveItem_serialize;

function SAWSOAP_moveItem_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_moveItem();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathSrc');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPathSrc(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathDest');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPathDest(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flagACL');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFlagACL(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeTable
//
function SAWSOAP_describeTable () {
    this.typeMarker = 'SAWSOAP_describeTable';
    this._subjectAreaName = '';
    this._tableName = '';
    this._detailsLevel = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_describeTable.prototype.getSubjectAreaName
// element get for subjectAreaName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for subjectAreaName
// setter function is is SAWSOAP_describeTable.prototype.setSubjectAreaName
//
function SAWSOAP_describeTable_getSubjectAreaName() { return this._subjectAreaName;}

SAWSOAP_describeTable.prototype.getSubjectAreaName = SAWSOAP_describeTable_getSubjectAreaName;

function SAWSOAP_describeTable_setSubjectAreaName(value) { this._subjectAreaName = value;}

SAWSOAP_describeTable.prototype.setSubjectAreaName = SAWSOAP_describeTable_setSubjectAreaName;
//
// accessor is SAWSOAP_describeTable.prototype.getTableName
// element get for tableName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for tableName
// setter function is is SAWSOAP_describeTable.prototype.setTableName
//
function SAWSOAP_describeTable_getTableName() { return this._tableName;}

SAWSOAP_describeTable.prototype.getTableName = SAWSOAP_describeTable_getTableName;

function SAWSOAP_describeTable_setTableName(value) { this._tableName = value;}

SAWSOAP_describeTable.prototype.setTableName = SAWSOAP_describeTable_setTableName;
//
// accessor is SAWSOAP_describeTable.prototype.getDetailsLevel
// element get for detailsLevel
// - element type is {urn://oracle.bi.webservices/v6}SATableDetails
// - required element
//
// element set for detailsLevel
// setter function is is SAWSOAP_describeTable.prototype.setDetailsLevel
//
function SAWSOAP_describeTable_getDetailsLevel() { return this._detailsLevel;}

SAWSOAP_describeTable.prototype.getDetailsLevel = SAWSOAP_describeTable_getDetailsLevel;

function SAWSOAP_describeTable_setDetailsLevel(value) { this._detailsLevel = value;}

SAWSOAP_describeTable.prototype.setDetailsLevel = SAWSOAP_describeTable_setDetailsLevel;
//
// accessor is SAWSOAP_describeTable.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_describeTable.prototype.setSessionID
//
function SAWSOAP_describeTable_getSessionID() { return this._sessionID;}

SAWSOAP_describeTable.prototype.getSessionID = SAWSOAP_describeTable_getSessionID;

function SAWSOAP_describeTable_setSessionID(value) { this._sessionID = value;}

SAWSOAP_describeTable.prototype.setSessionID = SAWSOAP_describeTable_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}describeTable
//
function SAWSOAP_describeTable_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:subjectAreaName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._subjectAreaName);
     xml = xml + '</jns0:subjectAreaName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:tableName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._tableName);
     xml = xml + '</jns0:tableName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:detailsLevel>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._detailsLevel);
     xml = xml + '</jns0:detailsLevel>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeTable.prototype.serialize = SAWSOAP_describeTable_serialize;

function SAWSOAP_describeTable_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeTable();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subjectAreaName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSubjectAreaName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tableName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTableName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing detailsLevel');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDetailsLevel(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}maintenanceModeResult
//
function SAWSOAP_maintenanceModeResult () {
    this.typeMarker = 'SAWSOAP_maintenanceModeResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}maintenanceModeResult
//
function SAWSOAP_maintenanceModeResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_maintenanceModeResult.prototype.serialize = SAWSOAP_maintenanceModeResult_serialize;

function SAWSOAP_maintenanceModeResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_maintenanceModeResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}purgeCacheResult
//
function SAWSOAP_purgeCacheResult () {
    this.typeMarker = 'SAWSOAP_purgeCacheResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_purgeCacheResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_purgeCacheResult.prototype.setJobInfo
//
function SAWSOAP_purgeCacheResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_purgeCacheResult.prototype.getJobInfo = SAWSOAP_purgeCacheResult_getJobInfo;

function SAWSOAP_purgeCacheResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_purgeCacheResult.prototype.setJobInfo = SAWSOAP_purgeCacheResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}purgeCacheResult
//
function SAWSOAP_purgeCacheResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_purgeCacheResult.prototype.serialize = SAWSOAP_purgeCacheResult_serialize;

function SAWSOAP_purgeCacheResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_purgeCacheResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setItemPropertyResult
//
function SAWSOAP_setItemPropertyResult () {
    this.typeMarker = 'SAWSOAP_setItemPropertyResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}setItemPropertyResult
//
function SAWSOAP_setItemPropertyResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setItemPropertyResult.prototype.serialize = SAWSOAP_setItemPropertyResult_serialize;

function SAWSOAP_setItemPropertyResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setItemPropertyResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}leaveGroupsResult
//
function SAWSOAP_leaveGroupsResult () {
    this.typeMarker = 'SAWSOAP_leaveGroupsResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}leaveGroupsResult
//
function SAWSOAP_leaveGroupsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_leaveGroupsResult.prototype.serialize = SAWSOAP_leaveGroupsResult_serialize;

function SAWSOAP_leaveGroupsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_leaveGroupsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}generateReportSQLResult
//
function SAWSOAP_generateReportSQLResult () {
    this.typeMarker = 'SAWSOAP_generateReportSQLResult';
    this._return = '';
}

//
// accessor is SAWSOAP_generateReportSQLResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_generateReportSQLResult.prototype.setReturn
//
function SAWSOAP_generateReportSQLResult_getReturn() { return this._return;}

SAWSOAP_generateReportSQLResult.prototype.getReturn = SAWSOAP_generateReportSQLResult_getReturn;

function SAWSOAP_generateReportSQLResult_setReturn(value) { this._return = value;}

SAWSOAP_generateReportSQLResult.prototype.setReturn = SAWSOAP_generateReportSQLResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}generateReportSQLResult
//
function SAWSOAP_generateReportSQLResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_generateReportSQLResult.prototype.serialize = SAWSOAP_generateReportSQLResult_serialize;

function SAWSOAP_generateReportSQLResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_generateReportSQLResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCurUserResult
//
function SAWSOAP_getCurUserResult () {
    this.typeMarker = 'SAWSOAP_getCurUserResult';
    this._return = '';
}

//
// accessor is SAWSOAP_getCurUserResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_getCurUserResult.prototype.setReturn
//
function SAWSOAP_getCurUserResult_getReturn() { return this._return;}

SAWSOAP_getCurUserResult.prototype.getReturn = SAWSOAP_getCurUserResult_getReturn;

function SAWSOAP_getCurUserResult_setReturn(value) { this._return = value;}

SAWSOAP_getCurUserResult.prototype.setReturn = SAWSOAP_getCurUserResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getCurUserResult
//
function SAWSOAP_getCurUserResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCurUserResult.prototype.serialize = SAWSOAP_getCurUserResult_serialize;

function SAWSOAP_getCurUserResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCurUserResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}forgetAccounts
//
function SAWSOAP_forgetAccounts () {
    this.typeMarker = 'SAWSOAP_forgetAccounts';
    this._account = [];
    this._cleanuplevel = 0;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_forgetAccounts.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for account
// setter function is is SAWSOAP_forgetAccounts.prototype.setAccount
//
function SAWSOAP_forgetAccounts_getAccount() { return this._account;}

SAWSOAP_forgetAccounts.prototype.getAccount = SAWSOAP_forgetAccounts_getAccount;

function SAWSOAP_forgetAccounts_setAccount(value) { this._account = value;}

SAWSOAP_forgetAccounts.prototype.setAccount = SAWSOAP_forgetAccounts_setAccount;
//
// accessor is SAWSOAP_forgetAccounts.prototype.getCleanuplevel
// element get for cleanuplevel
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for cleanuplevel
// setter function is is SAWSOAP_forgetAccounts.prototype.setCleanuplevel
//
function SAWSOAP_forgetAccounts_getCleanuplevel() { return this._cleanuplevel;}

SAWSOAP_forgetAccounts.prototype.getCleanuplevel = SAWSOAP_forgetAccounts_getCleanuplevel;

function SAWSOAP_forgetAccounts_setCleanuplevel(value) { this._cleanuplevel = value;}

SAWSOAP_forgetAccounts.prototype.setCleanuplevel = SAWSOAP_forgetAccounts_setCleanuplevel;
//
// accessor is SAWSOAP_forgetAccounts.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_forgetAccounts.prototype.setSessionID
//
function SAWSOAP_forgetAccounts_getSessionID() { return this._sessionID;}

SAWSOAP_forgetAccounts.prototype.getSessionID = SAWSOAP_forgetAccounts_getSessionID;

function SAWSOAP_forgetAccounts_setSessionID(value) { this._sessionID = value;}

SAWSOAP_forgetAccounts.prototype.setSessionID = SAWSOAP_forgetAccounts_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}forgetAccounts
//
function SAWSOAP_forgetAccounts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._account != null) {
      for (var ax = 0;ax < this._account.length;ax ++) {
       if (this._account[ax] == null) {
        xml = xml + '<jns0:account/>';
       } else {
        xml = xml + this._account[ax].serialize(cxfjsutils, 'jns0:account', null);
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:cleanuplevel>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._cleanuplevel);
     xml = xml + '</jns0:cleanuplevel>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_forgetAccounts.prototype.serialize = SAWSOAP_forgetAccounts_serialize;

function SAWSOAP_forgetAccounts_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_forgetAccounts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account'));
     newobject.setAccount(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cleanuplevel');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCleanuplevel(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}prepareCache
//
function SAWSOAP_prepareCache () {
    this.typeMarker = 'SAWSOAP_prepareCache';
    this._segmentPath = null;
    this._treePath = null;
    this._refresh = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_prepareCache.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_prepareCache.prototype.setSegmentPath
//
function SAWSOAP_prepareCache_getSegmentPath() { return this._segmentPath;}

SAWSOAP_prepareCache.prototype.getSegmentPath = SAWSOAP_prepareCache_getSegmentPath;

function SAWSOAP_prepareCache_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_prepareCache.prototype.setSegmentPath = SAWSOAP_prepareCache_setSegmentPath;
//
// accessor is SAWSOAP_prepareCache.prototype.getTreePath
// element get for treePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for treePath
// setter function is is SAWSOAP_prepareCache.prototype.setTreePath
//
function SAWSOAP_prepareCache_getTreePath() { return this._treePath;}

SAWSOAP_prepareCache.prototype.getTreePath = SAWSOAP_prepareCache_getTreePath;

function SAWSOAP_prepareCache_setTreePath(value) { this._treePath = value;}

SAWSOAP_prepareCache.prototype.setTreePath = SAWSOAP_prepareCache_setTreePath;
//
// accessor is SAWSOAP_prepareCache.prototype.getRefresh
// element get for refresh
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for refresh
// setter function is is SAWSOAP_prepareCache.prototype.setRefresh
//
function SAWSOAP_prepareCache_getRefresh() { return this._refresh;}

SAWSOAP_prepareCache.prototype.getRefresh = SAWSOAP_prepareCache_getRefresh;

function SAWSOAP_prepareCache_setRefresh(value) { this._refresh = value;}

SAWSOAP_prepareCache.prototype.setRefresh = SAWSOAP_prepareCache_setRefresh;
//
// accessor is SAWSOAP_prepareCache.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_prepareCache.prototype.setSessionID
//
function SAWSOAP_prepareCache_getSessionID() { return this._sessionID;}

SAWSOAP_prepareCache.prototype.getSessionID = SAWSOAP_prepareCache_getSessionID;

function SAWSOAP_prepareCache_setSessionID(value) { this._sessionID = value;}

SAWSOAP_prepareCache.prototype.setSessionID = SAWSOAP_prepareCache_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}prepareCache
//
function SAWSOAP_prepareCache_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treePath != null) {
      xml = xml + '<jns0:treePath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._treePath);
      xml = xml + '</jns0:treePath>';
     }
    }
    // block for local variables
    {
     if (this._refresh != null) {
      xml = xml + '<jns0:refresh>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._refresh);
      xml = xml + '</jns0:refresh>';
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_prepareCache.prototype.serialize = SAWSOAP_prepareCache_serialize;

function SAWSOAP_prepareCache_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_prepareCache();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTreePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing refresh');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'refresh')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setRefresh(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logoff
//
function SAWSOAP_logoff () {
    this.typeMarker = 'SAWSOAP_logoff';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_logoff.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_logoff.prototype.setSessionID
//
function SAWSOAP_logoff_getSessionID() { return this._sessionID;}

SAWSOAP_logoff.prototype.getSessionID = SAWSOAP_logoff_getSessionID;

function SAWSOAP_logoff_setSessionID(value) { this._sessionID = value;}

SAWSOAP_logoff.prototype.setSessionID = SAWSOAP_logoff_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}logoff
//
function SAWSOAP_logoff_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logoff.prototype.serialize = SAWSOAP_logoff_serialize;

function SAWSOAP_logoff_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logoff();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}applyReportDefaults
//
function SAWSOAP_applyReportDefaults () {
    this.typeMarker = 'SAWSOAP_applyReportDefaults';
    this._reportRefs = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_applyReportDefaults.prototype.getReportRefs
// element get for reportRefs
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for reportRefs
// setter function is is SAWSOAP_applyReportDefaults.prototype.setReportRefs
//
function SAWSOAP_applyReportDefaults_getReportRefs() { return this._reportRefs;}

SAWSOAP_applyReportDefaults.prototype.getReportRefs = SAWSOAP_applyReportDefaults_getReportRefs;

function SAWSOAP_applyReportDefaults_setReportRefs(value) { this._reportRefs = value;}

SAWSOAP_applyReportDefaults.prototype.setReportRefs = SAWSOAP_applyReportDefaults_setReportRefs;
//
// accessor is SAWSOAP_applyReportDefaults.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_applyReportDefaults.prototype.setSessionID
//
function SAWSOAP_applyReportDefaults_getSessionID() { return this._sessionID;}

SAWSOAP_applyReportDefaults.prototype.getSessionID = SAWSOAP_applyReportDefaults_getSessionID;

function SAWSOAP_applyReportDefaults_setSessionID(value) { this._sessionID = value;}

SAWSOAP_applyReportDefaults.prototype.setSessionID = SAWSOAP_applyReportDefaults_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}applyReportDefaults
//
function SAWSOAP_applyReportDefaults_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._reportRefs.serialize(cxfjsutils, 'jns0:reportRefs', null);
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_applyReportDefaults.prototype.serialize = SAWSOAP_applyReportDefaults_serialize;

function SAWSOAP_applyReportDefaults_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_applyReportDefaults();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportRefs');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportRefs(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}createFolderResult
//
function SAWSOAP_createFolderResult () {
    this.typeMarker = 'SAWSOAP_createFolderResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}createFolderResult
//
function SAWSOAP_createFolderResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_createFolderResult.prototype.serialize = SAWSOAP_createFolderResult_serialize;

function SAWSOAP_createFolderResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_createFolderResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGlobalPrivileges
//
function SAWSOAP_getGlobalPrivileges () {
    this.typeMarker = 'SAWSOAP_getGlobalPrivileges';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getGlobalPrivileges.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getGlobalPrivileges.prototype.setSessionID
//
function SAWSOAP_getGlobalPrivileges_getSessionID() { return this._sessionID;}

SAWSOAP_getGlobalPrivileges.prototype.getSessionID = SAWSOAP_getGlobalPrivileges_getSessionID;

function SAWSOAP_getGlobalPrivileges_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getGlobalPrivileges.prototype.setSessionID = SAWSOAP_getGlobalPrivileges_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getGlobalPrivileges
//
function SAWSOAP_getGlobalPrivileges_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGlobalPrivileges.prototype.serialize = SAWSOAP_getGlobalPrivileges_serialize;

function SAWSOAP_getGlobalPrivileges_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGlobalPrivileges();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGlobalPrivilegeACLResult
//
function SAWSOAP_getGlobalPrivilegeACLResult () {
    this.typeMarker = 'SAWSOAP_getGlobalPrivilegeACLResult';
    this._acl = null;
}

//
// accessor is SAWSOAP_getGlobalPrivilegeACLResult.prototype.getAcl
// element get for acl
// - element type is {urn://oracle.bi.webservices/v6}ACL
// - required element
//
// element set for acl
// setter function is is SAWSOAP_getGlobalPrivilegeACLResult.prototype.setAcl
//
function SAWSOAP_getGlobalPrivilegeACLResult_getAcl() { return this._acl;}

SAWSOAP_getGlobalPrivilegeACLResult.prototype.getAcl = SAWSOAP_getGlobalPrivilegeACLResult_getAcl;

function SAWSOAP_getGlobalPrivilegeACLResult_setAcl(value) { this._acl = value;}

SAWSOAP_getGlobalPrivilegeACLResult.prototype.setAcl = SAWSOAP_getGlobalPrivilegeACLResult_setAcl;
//
// Serialize {urn://oracle.bi.webservices/v6}getGlobalPrivilegeACLResult
//
function SAWSOAP_getGlobalPrivilegeACLResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._acl.serialize(cxfjsutils, 'jns0:acl', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGlobalPrivilegeACLResult.prototype.serialize = SAWSOAP_getGlobalPrivilegeACLResult_serialize;

function SAWSOAP_getGlobalPrivilegeACLResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGlobalPrivilegeACLResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing acl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ACL_deserialize(cxfjsutils, curElement);
    }
    newobject.setAcl(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCommonBodyHtmlResult
//
function SAWSOAP_getCommonBodyHtmlResult () {
    this.typeMarker = 'SAWSOAP_getCommonBodyHtmlResult';
    this._return = '';
}

//
// accessor is SAWSOAP_getCommonBodyHtmlResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_getCommonBodyHtmlResult.prototype.setReturn
//
function SAWSOAP_getCommonBodyHtmlResult_getReturn() { return this._return;}

SAWSOAP_getCommonBodyHtmlResult.prototype.getReturn = SAWSOAP_getCommonBodyHtmlResult_getReturn;

function SAWSOAP_getCommonBodyHtmlResult_setReturn(value) { this._return = value;}

SAWSOAP_getCommonBodyHtmlResult.prototype.setReturn = SAWSOAP_getCommonBodyHtmlResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getCommonBodyHtmlResult
//
function SAWSOAP_getCommonBodyHtmlResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCommonBodyHtmlResult.prototype.serialize = SAWSOAP_getCommonBodyHtmlResult_serialize;

function SAWSOAP_getCommonBodyHtmlResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCommonBodyHtmlResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHtmlForReport
//
function SAWSOAP_getHtmlForReport () {
    this.typeMarker = 'SAWSOAP_getHtmlForReport';
    this._pageID = '';
    this._pageReportID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getHtmlForReport.prototype.getPageID
// element get for pageID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageID
// setter function is is SAWSOAP_getHtmlForReport.prototype.setPageID
//
function SAWSOAP_getHtmlForReport_getPageID() { return this._pageID;}

SAWSOAP_getHtmlForReport.prototype.getPageID = SAWSOAP_getHtmlForReport_getPageID;

function SAWSOAP_getHtmlForReport_setPageID(value) { this._pageID = value;}

SAWSOAP_getHtmlForReport.prototype.setPageID = SAWSOAP_getHtmlForReport_setPageID;
//
// accessor is SAWSOAP_getHtmlForReport.prototype.getPageReportID
// element get for pageReportID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageReportID
// setter function is is SAWSOAP_getHtmlForReport.prototype.setPageReportID
//
function SAWSOAP_getHtmlForReport_getPageReportID() { return this._pageReportID;}

SAWSOAP_getHtmlForReport.prototype.getPageReportID = SAWSOAP_getHtmlForReport_getPageReportID;

function SAWSOAP_getHtmlForReport_setPageReportID(value) { this._pageReportID = value;}

SAWSOAP_getHtmlForReport.prototype.setPageReportID = SAWSOAP_getHtmlForReport_setPageReportID;
//
// accessor is SAWSOAP_getHtmlForReport.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getHtmlForReport.prototype.setSessionID
//
function SAWSOAP_getHtmlForReport_getSessionID() { return this._sessionID;}

SAWSOAP_getHtmlForReport.prototype.getSessionID = SAWSOAP_getHtmlForReport_getSessionID;

function SAWSOAP_getHtmlForReport_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getHtmlForReport.prototype.setSessionID = SAWSOAP_getHtmlForReport_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getHtmlForReport
//
function SAWSOAP_getHtmlForReport_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageID);
     xml = xml + '</jns0:pageID>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageReportID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageReportID);
     xml = xml + '</jns0:pageReportID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHtmlForReport.prototype.serialize = SAWSOAP_getHtmlForReport_serialize;

function SAWSOAP_getHtmlForReport_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHtmlForReport();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageReportID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageReportID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeXMLQuery
//
function SAWSOAP_executeXMLQuery () {
    this.typeMarker = 'SAWSOAP_executeXMLQuery';
    this._report = null;
    this._outputFormat = '';
    this._executionOptions = null;
    this._reportParams = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_executeXMLQuery.prototype.getReport
// element get for report
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for report
// setter function is is SAWSOAP_executeXMLQuery.prototype.setReport
//
function SAWSOAP_executeXMLQuery_getReport() { return this._report;}

SAWSOAP_executeXMLQuery.prototype.getReport = SAWSOAP_executeXMLQuery_getReport;

function SAWSOAP_executeXMLQuery_setReport(value) { this._report = value;}

SAWSOAP_executeXMLQuery.prototype.setReport = SAWSOAP_executeXMLQuery_setReport;
//
// accessor is SAWSOAP_executeXMLQuery.prototype.getOutputFormat
// element get for outputFormat
// - element type is {urn://oracle.bi.webservices/v6}XMLQueryOutputFormat
// - required element
//
// element set for outputFormat
// setter function is is SAWSOAP_executeXMLQuery.prototype.setOutputFormat
//
function SAWSOAP_executeXMLQuery_getOutputFormat() { return this._outputFormat;}

SAWSOAP_executeXMLQuery.prototype.getOutputFormat = SAWSOAP_executeXMLQuery_getOutputFormat;

function SAWSOAP_executeXMLQuery_setOutputFormat(value) { this._outputFormat = value;}

SAWSOAP_executeXMLQuery.prototype.setOutputFormat = SAWSOAP_executeXMLQuery_setOutputFormat;
//
// accessor is SAWSOAP_executeXMLQuery.prototype.getExecutionOptions
// element get for executionOptions
// - element type is {urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions
// - required element
// - nillable
//
// element set for executionOptions
// setter function is is SAWSOAP_executeXMLQuery.prototype.setExecutionOptions
//
function SAWSOAP_executeXMLQuery_getExecutionOptions() { return this._executionOptions;}

SAWSOAP_executeXMLQuery.prototype.getExecutionOptions = SAWSOAP_executeXMLQuery_getExecutionOptions;

function SAWSOAP_executeXMLQuery_setExecutionOptions(value) { this._executionOptions = value;}

SAWSOAP_executeXMLQuery.prototype.setExecutionOptions = SAWSOAP_executeXMLQuery_setExecutionOptions;
//
// accessor is SAWSOAP_executeXMLQuery.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - required element
// - nillable
//
// element set for reportParams
// setter function is is SAWSOAP_executeXMLQuery.prototype.setReportParams
//
function SAWSOAP_executeXMLQuery_getReportParams() { return this._reportParams;}

SAWSOAP_executeXMLQuery.prototype.getReportParams = SAWSOAP_executeXMLQuery_getReportParams;

function SAWSOAP_executeXMLQuery_setReportParams(value) { this._reportParams = value;}

SAWSOAP_executeXMLQuery.prototype.setReportParams = SAWSOAP_executeXMLQuery_setReportParams;
//
// accessor is SAWSOAP_executeXMLQuery.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_executeXMLQuery.prototype.setSessionID
//
function SAWSOAP_executeXMLQuery_getSessionID() { return this._sessionID;}

SAWSOAP_executeXMLQuery.prototype.getSessionID = SAWSOAP_executeXMLQuery_getSessionID;

function SAWSOAP_executeXMLQuery_setSessionID(value) { this._sessionID = value;}

SAWSOAP_executeXMLQuery.prototype.setSessionID = SAWSOAP_executeXMLQuery_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}executeXMLQuery
//
function SAWSOAP_executeXMLQuery_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._report.serialize(cxfjsutils, 'jns0:report', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:outputFormat>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._outputFormat);
     xml = xml + '</jns0:outputFormat>';
    }
    // block for local variables
    {
     if (this._executionOptions == null) {
      xml = xml + '<jns0:executionOptions xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._executionOptions.serialize(cxfjsutils, 'jns0:executionOptions', null);
     }
    }
    // block for local variables
    {
     if (this._reportParams == null) {
      xml = xml + '<jns0:reportParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeXMLQuery.prototype.serialize = SAWSOAP_executeXMLQuery_serialize;

function SAWSOAP_executeXMLQuery_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeXMLQuery();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing report');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReport(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing outputFormat');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOutputFormat(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing executionOptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_XMLQueryExecutionOptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setExecutionOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeIBot
//
function SAWSOAP_writeIBot () {
    this.typeMarker = 'SAWSOAP_writeIBot';
    this._obj = null;
    this._path = '';
    this._resolveLinks = '';
    this._allowOverwrite = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_writeIBot.prototype.getObj
// element get for obj
// - element type is {urn://oracle.bi.webservices/v6}CatalogObject
// - required element
//
// element set for obj
// setter function is is SAWSOAP_writeIBot.prototype.setObj
//
function SAWSOAP_writeIBot_getObj() { return this._obj;}

SAWSOAP_writeIBot.prototype.getObj = SAWSOAP_writeIBot_getObj;

function SAWSOAP_writeIBot_setObj(value) { this._obj = value;}

SAWSOAP_writeIBot.prototype.setObj = SAWSOAP_writeIBot_setObj;
//
// accessor is SAWSOAP_writeIBot.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_writeIBot.prototype.setPath
//
function SAWSOAP_writeIBot_getPath() { return this._path;}

SAWSOAP_writeIBot.prototype.getPath = SAWSOAP_writeIBot_getPath;

function SAWSOAP_writeIBot_setPath(value) { this._path = value;}

SAWSOAP_writeIBot.prototype.setPath = SAWSOAP_writeIBot_setPath;
//
// accessor is SAWSOAP_writeIBot.prototype.getResolveLinks
// element get for resolveLinks
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for resolveLinks
// setter function is is SAWSOAP_writeIBot.prototype.setResolveLinks
//
function SAWSOAP_writeIBot_getResolveLinks() { return this._resolveLinks;}

SAWSOAP_writeIBot.prototype.getResolveLinks = SAWSOAP_writeIBot_getResolveLinks;

function SAWSOAP_writeIBot_setResolveLinks(value) { this._resolveLinks = value;}

SAWSOAP_writeIBot.prototype.setResolveLinks = SAWSOAP_writeIBot_setResolveLinks;
//
// accessor is SAWSOAP_writeIBot.prototype.getAllowOverwrite
// element get for allowOverwrite
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for allowOverwrite
// setter function is is SAWSOAP_writeIBot.prototype.setAllowOverwrite
//
function SAWSOAP_writeIBot_getAllowOverwrite() { return this._allowOverwrite;}

SAWSOAP_writeIBot.prototype.getAllowOverwrite = SAWSOAP_writeIBot_getAllowOverwrite;

function SAWSOAP_writeIBot_setAllowOverwrite(value) { this._allowOverwrite = value;}

SAWSOAP_writeIBot.prototype.setAllowOverwrite = SAWSOAP_writeIBot_setAllowOverwrite;
//
// accessor is SAWSOAP_writeIBot.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_writeIBot.prototype.setSessionID
//
function SAWSOAP_writeIBot_getSessionID() { return this._sessionID;}

SAWSOAP_writeIBot.prototype.getSessionID = SAWSOAP_writeIBot_getSessionID;

function SAWSOAP_writeIBot_setSessionID(value) { this._sessionID = value;}

SAWSOAP_writeIBot.prototype.setSessionID = SAWSOAP_writeIBot_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}writeIBot
//
function SAWSOAP_writeIBot_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._obj.serialize(cxfjsutils, 'jns0:obj', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:resolveLinks>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._resolveLinks);
     xml = xml + '</jns0:resolveLinks>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:allowOverwrite>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._allowOverwrite);
     xml = xml + '</jns0:allowOverwrite>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeIBot.prototype.serialize = SAWSOAP_writeIBot_serialize;

function SAWSOAP_writeIBot_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeIBot();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing obj');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_CatalogObject_deserialize(cxfjsutils, curElement);
    }
    newobject.setObj(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resolveLinks');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResolveLinks(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing allowOverwrite');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAllowOverwrite(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}maintenanceMode
//
function SAWSOAP_maintenanceMode () {
    this.typeMarker = 'SAWSOAP_maintenanceMode';
    this._flag = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_maintenanceMode.prototype.getFlag
// element get for flag
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for flag
// setter function is is SAWSOAP_maintenanceMode.prototype.setFlag
//
function SAWSOAP_maintenanceMode_getFlag() { return this._flag;}

SAWSOAP_maintenanceMode.prototype.getFlag = SAWSOAP_maintenanceMode_getFlag;

function SAWSOAP_maintenanceMode_setFlag(value) { this._flag = value;}

SAWSOAP_maintenanceMode.prototype.setFlag = SAWSOAP_maintenanceMode_setFlag;
//
// accessor is SAWSOAP_maintenanceMode.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_maintenanceMode.prototype.setSessionID
//
function SAWSOAP_maintenanceMode_getSessionID() { return this._sessionID;}

SAWSOAP_maintenanceMode.prototype.getSessionID = SAWSOAP_maintenanceMode_getSessionID;

function SAWSOAP_maintenanceMode_setSessionID(value) { this._sessionID = value;}

SAWSOAP_maintenanceMode.prototype.setSessionID = SAWSOAP_maintenanceMode_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}maintenanceMode
//
function SAWSOAP_maintenanceMode_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flag>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flag);
     xml = xml + '</jns0:flag>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_maintenanceMode.prototype.serialize = SAWSOAP_maintenanceMode_serialize;

function SAWSOAP_maintenanceMode_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_maintenanceMode();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flag');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFlag(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}endPage
//
function SAWSOAP_endPage () {
    this.typeMarker = 'SAWSOAP_endPage';
    this._pageID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_endPage.prototype.getPageID
// element get for pageID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageID
// setter function is is SAWSOAP_endPage.prototype.setPageID
//
function SAWSOAP_endPage_getPageID() { return this._pageID;}

SAWSOAP_endPage.prototype.getPageID = SAWSOAP_endPage_getPageID;

function SAWSOAP_endPage_setPageID(value) { this._pageID = value;}

SAWSOAP_endPage.prototype.setPageID = SAWSOAP_endPage_setPageID;
//
// accessor is SAWSOAP_endPage.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_endPage.prototype.setSessionID
//
function SAWSOAP_endPage_getSessionID() { return this._sessionID;}

SAWSOAP_endPage.prototype.getSessionID = SAWSOAP_endPage_getSessionID;

function SAWSOAP_endPage_setSessionID(value) { this._sessionID = value;}

SAWSOAP_endPage.prototype.setSessionID = SAWSOAP_endPage_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}endPage
//
function SAWSOAP_endPage_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageID);
     xml = xml + '</jns0:pageID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_endPage.prototype.serialize = SAWSOAP_endPage_serialize;

function SAWSOAP_endPage_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_endPage();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}addReportToPageResult
//
function SAWSOAP_addReportToPageResult () {
    this.typeMarker = 'SAWSOAP_addReportToPageResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}addReportToPageResult
//
function SAWSOAP_addReportToPageResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_addReportToPageResult.prototype.serialize = SAWSOAP_addReportToPageResult_serialize;

function SAWSOAP_addReportToPageResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_addReportToPageResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}clearQueryCacheResult
//
function SAWSOAP_clearQueryCacheResult () {
    this.typeMarker = 'SAWSOAP_clearQueryCacheResult';
    this._result = '';
}

//
// accessor is SAWSOAP_clearQueryCacheResult.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for result
// setter function is is SAWSOAP_clearQueryCacheResult.prototype.setResult
//
function SAWSOAP_clearQueryCacheResult_getResult() { return this._result;}

SAWSOAP_clearQueryCacheResult.prototype.getResult = SAWSOAP_clearQueryCacheResult_getResult;

function SAWSOAP_clearQueryCacheResult_setResult(value) { this._result = value;}

SAWSOAP_clearQueryCacheResult.prototype.setResult = SAWSOAP_clearQueryCacheResult_setResult;
//
// Serialize {urn://oracle.bi.webservices/v6}clearQueryCacheResult
//
function SAWSOAP_clearQueryCacheResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:result>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._result);
     xml = xml + '</jns0:result>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_clearQueryCacheResult.prototype.serialize = SAWSOAP_clearQueryCacheResult_serialize;

function SAWSOAP_clearQueryCacheResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_clearQueryCacheResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logonResult
//
function SAWSOAP_logonResult () {
    this.typeMarker = 'SAWSOAP_logonResult';
    this._sessionID = '';
}

//
// accessor is SAWSOAP_logonResult.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for sessionID
// setter function is is SAWSOAP_logonResult.prototype.setSessionID
//
function SAWSOAP_logonResult_getSessionID() { return this._sessionID;}

SAWSOAP_logonResult.prototype.getSessionID = SAWSOAP_logonResult_getSessionID;

function SAWSOAP_logonResult_setSessionID(value) { this._sessionID = value;}

SAWSOAP_logonResult.prototype.setSessionID = SAWSOAP_logonResult_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}logonResult
//
function SAWSOAP_logonResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:sessionID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
     xml = xml + '</jns0:sessionID>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logonResult.prototype.serialize = SAWSOAP_logonResult_serialize;

function SAWSOAP_logonResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logonResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACLResult
//
function SAWSOAP_updateGlobalPrivilegeACLResult () {
    this.typeMarker = 'SAWSOAP_updateGlobalPrivilegeACLResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACLResult
//
function SAWSOAP_updateGlobalPrivilegeACLResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_updateGlobalPrivilegeACLResult.prototype.serialize = SAWSOAP_updateGlobalPrivilegeACLResult_serialize;

function SAWSOAP_updateGlobalPrivilegeACLResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_updateGlobalPrivilegeACLResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPermissionsResult
//
function SAWSOAP_getPermissionsResult () {
    this.typeMarker = 'SAWSOAP_getPermissionsResult';
    this._return = [];
}

//
// accessor is SAWSOAP_getPermissionsResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for return
// setter function is is SAWSOAP_getPermissionsResult.prototype.setReturn
//
function SAWSOAP_getPermissionsResult_getReturn() { return this._return;}

SAWSOAP_getPermissionsResult.prototype.getReturn = SAWSOAP_getPermissionsResult_getReturn;

function SAWSOAP_getPermissionsResult_setReturn(value) { this._return = value;}

SAWSOAP_getPermissionsResult.prototype.setReturn = SAWSOAP_getPermissionsResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getPermissionsResult
//
function SAWSOAP_getPermissionsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<jns0:return/>';
       } else {
        xml = xml + '<jns0:return>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._return[ax]);
        xml = xml + '</jns0:return>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPermissionsResult.prototype.serialize = SAWSOAP_getPermissionsResult_serialize;

function SAWSOAP_getPermissionsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPermissionsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeSubjectArea
//
function SAWSOAP_describeSubjectArea () {
    this.typeMarker = 'SAWSOAP_describeSubjectArea';
    this._subjectAreaName = '';
    this._detailsLevel = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_describeSubjectArea.prototype.getSubjectAreaName
// element get for subjectAreaName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for subjectAreaName
// setter function is is SAWSOAP_describeSubjectArea.prototype.setSubjectAreaName
//
function SAWSOAP_describeSubjectArea_getSubjectAreaName() { return this._subjectAreaName;}

SAWSOAP_describeSubjectArea.prototype.getSubjectAreaName = SAWSOAP_describeSubjectArea_getSubjectAreaName;

function SAWSOAP_describeSubjectArea_setSubjectAreaName(value) { this._subjectAreaName = value;}

SAWSOAP_describeSubjectArea.prototype.setSubjectAreaName = SAWSOAP_describeSubjectArea_setSubjectAreaName;
//
// accessor is SAWSOAP_describeSubjectArea.prototype.getDetailsLevel
// element get for detailsLevel
// - element type is {urn://oracle.bi.webservices/v6}SASubjectAreaDetails
// - required element
//
// element set for detailsLevel
// setter function is is SAWSOAP_describeSubjectArea.prototype.setDetailsLevel
//
function SAWSOAP_describeSubjectArea_getDetailsLevel() { return this._detailsLevel;}

SAWSOAP_describeSubjectArea.prototype.getDetailsLevel = SAWSOAP_describeSubjectArea_getDetailsLevel;

function SAWSOAP_describeSubjectArea_setDetailsLevel(value) { this._detailsLevel = value;}

SAWSOAP_describeSubjectArea.prototype.setDetailsLevel = SAWSOAP_describeSubjectArea_setDetailsLevel;
//
// accessor is SAWSOAP_describeSubjectArea.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_describeSubjectArea.prototype.setSessionID
//
function SAWSOAP_describeSubjectArea_getSessionID() { return this._sessionID;}

SAWSOAP_describeSubjectArea.prototype.getSessionID = SAWSOAP_describeSubjectArea_getSessionID;

function SAWSOAP_describeSubjectArea_setSessionID(value) { this._sessionID = value;}

SAWSOAP_describeSubjectArea.prototype.setSessionID = SAWSOAP_describeSubjectArea_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}describeSubjectArea
//
function SAWSOAP_describeSubjectArea_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:subjectAreaName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._subjectAreaName);
     xml = xml + '</jns0:subjectAreaName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:detailsLevel>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._detailsLevel);
     xml = xml + '</jns0:detailsLevel>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeSubjectArea.prototype.serialize = SAWSOAP_describeSubjectArea_serialize;

function SAWSOAP_describeSubjectArea_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeSubjectArea();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subjectAreaName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSubjectAreaName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing detailsLevel');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDetailsLevel(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPermissions
//
function SAWSOAP_getPermissions () {
    this.typeMarker = 'SAWSOAP_getPermissions';
    this._acls = [];
    this._account = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getPermissions.prototype.getAcls
// element get for acls
// - element type is {urn://oracle.bi.webservices/v6}ACL
// - required element
// - array
//
// element set for acls
// setter function is is SAWSOAP_getPermissions.prototype.setAcls
//
function SAWSOAP_getPermissions_getAcls() { return this._acls;}

SAWSOAP_getPermissions.prototype.getAcls = SAWSOAP_getPermissions_getAcls;

function SAWSOAP_getPermissions_setAcls(value) { this._acls = value;}

SAWSOAP_getPermissions.prototype.setAcls = SAWSOAP_getPermissions_setAcls;
//
// accessor is SAWSOAP_getPermissions.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - nillable
//
// element set for account
// setter function is is SAWSOAP_getPermissions.prototype.setAccount
//
function SAWSOAP_getPermissions_getAccount() { return this._account;}

SAWSOAP_getPermissions.prototype.getAccount = SAWSOAP_getPermissions_getAccount;

function SAWSOAP_getPermissions_setAccount(value) { this._account = value;}

SAWSOAP_getPermissions.prototype.setAccount = SAWSOAP_getPermissions_setAccount;
//
// accessor is SAWSOAP_getPermissions.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getPermissions.prototype.setSessionID
//
function SAWSOAP_getPermissions_getSessionID() { return this._sessionID;}

SAWSOAP_getPermissions.prototype.getSessionID = SAWSOAP_getPermissions_getSessionID;

function SAWSOAP_getPermissions_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getPermissions.prototype.setSessionID = SAWSOAP_getPermissions_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getPermissions
//
function SAWSOAP_getPermissions_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._acls != null) {
      for (var ax = 0;ax < this._acls.length;ax ++) {
       if (this._acls[ax] == null) {
        xml = xml + '<jns0:acls/>';
       } else {
        xml = xml + this._acls[ax].serialize(cxfjsutils, 'jns0:acls', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._account == null) {
      xml = xml + '<jns0:account xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._account.serialize(cxfjsutils, 'jns0:account', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPermissions.prototype.serialize = SAWSOAP_getPermissions_serialize;

function SAWSOAP_getPermissions_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPermissions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing acls');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'acls')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_ACL_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'acls'));
     newobject.setAcls(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
    }
    newobject.setAccount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getItemInfoResult
//
function SAWSOAP_getItemInfoResult () {
    this.typeMarker = 'SAWSOAP_getItemInfoResult';
    this._return = null;
}

//
// accessor is SAWSOAP_getItemInfoResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}ItemInfo
// - required element
//
// element set for return
// setter function is is SAWSOAP_getItemInfoResult.prototype.setReturn
//
function SAWSOAP_getItemInfoResult_getReturn() { return this._return;}

SAWSOAP_getItemInfoResult.prototype.getReturn = SAWSOAP_getItemInfoResult_getReturn;

function SAWSOAP_getItemInfoResult_setReturn(value) { this._return = value;}

SAWSOAP_getItemInfoResult.prototype.setReturn = SAWSOAP_getItemInfoResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getItemInfoResult
//
function SAWSOAP_getItemInfoResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getItemInfoResult.prototype.serialize = SAWSOAP_getItemInfoResult_serialize;

function SAWSOAP_getItemInfoResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getItemInfoResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ItemInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}addReportToPage
//
function SAWSOAP_addReportToPage () {
    this.typeMarker = 'SAWSOAP_addReportToPage';
    this._pageID = '';
    this._reportID = '';
    this._report = null;
    this._reportViewName = null;
    this._reportParams = null;
    this._options = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_addReportToPage.prototype.getPageID
// element get for pageID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageID
// setter function is is SAWSOAP_addReportToPage.prototype.setPageID
//
function SAWSOAP_addReportToPage_getPageID() { return this._pageID;}

SAWSOAP_addReportToPage.prototype.getPageID = SAWSOAP_addReportToPage_getPageID;

function SAWSOAP_addReportToPage_setPageID(value) { this._pageID = value;}

SAWSOAP_addReportToPage.prototype.setPageID = SAWSOAP_addReportToPage_setPageID;
//
// accessor is SAWSOAP_addReportToPage.prototype.getReportID
// element get for reportID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for reportID
// setter function is is SAWSOAP_addReportToPage.prototype.setReportID
//
function SAWSOAP_addReportToPage_getReportID() { return this._reportID;}

SAWSOAP_addReportToPage.prototype.getReportID = SAWSOAP_addReportToPage_getReportID;

function SAWSOAP_addReportToPage_setReportID(value) { this._reportID = value;}

SAWSOAP_addReportToPage.prototype.setReportID = SAWSOAP_addReportToPage_setReportID;
//
// accessor is SAWSOAP_addReportToPage.prototype.getReport
// element get for report
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for report
// setter function is is SAWSOAP_addReportToPage.prototype.setReport
//
function SAWSOAP_addReportToPage_getReport() { return this._report;}

SAWSOAP_addReportToPage.prototype.getReport = SAWSOAP_addReportToPage_getReport;

function SAWSOAP_addReportToPage_setReport(value) { this._report = value;}

SAWSOAP_addReportToPage.prototype.setReport = SAWSOAP_addReportToPage_setReport;
//
// accessor is SAWSOAP_addReportToPage.prototype.getReportViewName
// element get for reportViewName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for reportViewName
// setter function is is SAWSOAP_addReportToPage.prototype.setReportViewName
//
function SAWSOAP_addReportToPage_getReportViewName() { return this._reportViewName;}

SAWSOAP_addReportToPage.prototype.getReportViewName = SAWSOAP_addReportToPage_getReportViewName;

function SAWSOAP_addReportToPage_setReportViewName(value) { this._reportViewName = value;}

SAWSOAP_addReportToPage.prototype.setReportViewName = SAWSOAP_addReportToPage_setReportViewName;
//
// accessor is SAWSOAP_addReportToPage.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - required element
// - nillable
//
// element set for reportParams
// setter function is is SAWSOAP_addReportToPage.prototype.setReportParams
//
function SAWSOAP_addReportToPage_getReportParams() { return this._reportParams;}

SAWSOAP_addReportToPage.prototype.getReportParams = SAWSOAP_addReportToPage_getReportParams;

function SAWSOAP_addReportToPage_setReportParams(value) { this._reportParams = value;}

SAWSOAP_addReportToPage.prototype.setReportParams = SAWSOAP_addReportToPage_setReportParams;
//
// accessor is SAWSOAP_addReportToPage.prototype.getOptions
// element get for options
// - element type is {urn://oracle.bi.webservices/v6}ReportHTMLOptions
// - required element
// - nillable
//
// element set for options
// setter function is is SAWSOAP_addReportToPage.prototype.setOptions
//
function SAWSOAP_addReportToPage_getOptions() { return this._options;}

SAWSOAP_addReportToPage.prototype.getOptions = SAWSOAP_addReportToPage_getOptions;

function SAWSOAP_addReportToPage_setOptions(value) { this._options = value;}

SAWSOAP_addReportToPage.prototype.setOptions = SAWSOAP_addReportToPage_setOptions;
//
// accessor is SAWSOAP_addReportToPage.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_addReportToPage.prototype.setSessionID
//
function SAWSOAP_addReportToPage_getSessionID() { return this._sessionID;}

SAWSOAP_addReportToPage.prototype.getSessionID = SAWSOAP_addReportToPage_getSessionID;

function SAWSOAP_addReportToPage_setSessionID(value) { this._sessionID = value;}

SAWSOAP_addReportToPage.prototype.setSessionID = SAWSOAP_addReportToPage_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}addReportToPage
//
function SAWSOAP_addReportToPage_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageID);
     xml = xml + '</jns0:pageID>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:reportID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._reportID);
     xml = xml + '</jns0:reportID>';
    }
    // block for local variables
    {
     xml = xml + this._report.serialize(cxfjsutils, 'jns0:report', null);
    }
    // block for local variables
    {
     if (this._reportViewName == null) {
      xml = xml + '<jns0:reportViewName xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:reportViewName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._reportViewName);
      xml = xml + '</jns0:reportViewName>';
     }
    }
    // block for local variables
    {
     if (this._reportParams == null) {
      xml = xml + '<jns0:reportParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
     }
    }
    // block for local variables
    {
     if (this._options == null) {
      xml = xml + '<jns0:options xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._options.serialize(cxfjsutils, 'jns0:options', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_addReportToPage.prototype.serialize = SAWSOAP_addReportToPage_serialize;

function SAWSOAP_addReportToPage_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_addReportToPage();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing report');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReport(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportViewName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportViewName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing options');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportHTMLOptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getAccounts
//
function SAWSOAP_getAccounts () {
    this.typeMarker = 'SAWSOAP_getAccounts';
    this._account = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getAccounts.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for account
// setter function is is SAWSOAP_getAccounts.prototype.setAccount
//
function SAWSOAP_getAccounts_getAccount() { return this._account;}

SAWSOAP_getAccounts.prototype.getAccount = SAWSOAP_getAccounts_getAccount;

function SAWSOAP_getAccounts_setAccount(value) { this._account = value;}

SAWSOAP_getAccounts.prototype.setAccount = SAWSOAP_getAccounts_setAccount;
//
// accessor is SAWSOAP_getAccounts.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getAccounts.prototype.setSessionID
//
function SAWSOAP_getAccounts_getSessionID() { return this._sessionID;}

SAWSOAP_getAccounts.prototype.getSessionID = SAWSOAP_getAccounts_getSessionID;

function SAWSOAP_getAccounts_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getAccounts.prototype.setSessionID = SAWSOAP_getAccounts_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getAccounts
//
function SAWSOAP_getAccounts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._account != null) {
      for (var ax = 0;ax < this._account.length;ax ++) {
       if (this._account[ax] == null) {
        xml = xml + '<jns0:account/>';
       } else {
        xml = xml + this._account[ax].serialize(cxfjsutils, 'jns0:account', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getAccounts.prototype.serialize = SAWSOAP_getAccounts_serialize;

function SAWSOAP_getAccounts_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getAccounts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account'));
     newobject.setAccount(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}applyReportParams
//
function SAWSOAP_applyReportParams () {
    this.typeMarker = 'SAWSOAP_applyReportParams';
    this._reportRef = null;
    this._reportParams = null;
    this._encodeInString = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_applyReportParams.prototype.getReportRef
// element get for reportRef
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for reportRef
// setter function is is SAWSOAP_applyReportParams.prototype.setReportRef
//
function SAWSOAP_applyReportParams_getReportRef() { return this._reportRef;}

SAWSOAP_applyReportParams.prototype.getReportRef = SAWSOAP_applyReportParams_getReportRef;

function SAWSOAP_applyReportParams_setReportRef(value) { this._reportRef = value;}

SAWSOAP_applyReportParams.prototype.setReportRef = SAWSOAP_applyReportParams_setReportRef;
//
// accessor is SAWSOAP_applyReportParams.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - required element
//
// element set for reportParams
// setter function is is SAWSOAP_applyReportParams.prototype.setReportParams
//
function SAWSOAP_applyReportParams_getReportParams() { return this._reportParams;}

SAWSOAP_applyReportParams.prototype.getReportParams = SAWSOAP_applyReportParams_getReportParams;

function SAWSOAP_applyReportParams_setReportParams(value) { this._reportParams = value;}

SAWSOAP_applyReportParams.prototype.setReportParams = SAWSOAP_applyReportParams_setReportParams;
//
// accessor is SAWSOAP_applyReportParams.prototype.getEncodeInString
// element get for encodeInString
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for encodeInString
// setter function is is SAWSOAP_applyReportParams.prototype.setEncodeInString
//
function SAWSOAP_applyReportParams_getEncodeInString() { return this._encodeInString;}

SAWSOAP_applyReportParams.prototype.getEncodeInString = SAWSOAP_applyReportParams_getEncodeInString;

function SAWSOAP_applyReportParams_setEncodeInString(value) { this._encodeInString = value;}

SAWSOAP_applyReportParams.prototype.setEncodeInString = SAWSOAP_applyReportParams_setEncodeInString;
//
// accessor is SAWSOAP_applyReportParams.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_applyReportParams.prototype.setSessionID
//
function SAWSOAP_applyReportParams_getSessionID() { return this._sessionID;}

SAWSOAP_applyReportParams.prototype.getSessionID = SAWSOAP_applyReportParams_getSessionID;

function SAWSOAP_applyReportParams_setSessionID(value) { this._sessionID = value;}

SAWSOAP_applyReportParams.prototype.setSessionID = SAWSOAP_applyReportParams_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}applyReportParams
//
function SAWSOAP_applyReportParams_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._reportRef.serialize(cxfjsutils, 'jns0:reportRef', null);
    }
    // block for local variables
    {
     xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:encodeInString>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._encodeInString);
     xml = xml + '</jns0:encodeInString>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_applyReportParams.prototype.serialize = SAWSOAP_applyReportParams_serialize;

function SAWSOAP_applyReportParams_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_applyReportParams();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportRef');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportRef(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing encodeInString');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setEncodeInString(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteItemResult
//
function SAWSOAP_deleteItemResult () {
    this.typeMarker = 'SAWSOAP_deleteItemResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}deleteItemResult
//
function SAWSOAP_deleteItemResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteItemResult.prototype.serialize = SAWSOAP_deleteItemResult_serialize;

function SAWSOAP_deleteItemResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteItemResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}purgeCache
//
function SAWSOAP_purgeCache () {
    this.typeMarker = 'SAWSOAP_purgeCache';
    this._segmentPath = null;
    this._treePath = null;
    this._ignoreCacheRef = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_purgeCache.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_purgeCache.prototype.setSegmentPath
//
function SAWSOAP_purgeCache_getSegmentPath() { return this._segmentPath;}

SAWSOAP_purgeCache.prototype.getSegmentPath = SAWSOAP_purgeCache_getSegmentPath;

function SAWSOAP_purgeCache_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_purgeCache.prototype.setSegmentPath = SAWSOAP_purgeCache_setSegmentPath;
//
// accessor is SAWSOAP_purgeCache.prototype.getTreePath
// element get for treePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for treePath
// setter function is is SAWSOAP_purgeCache.prototype.setTreePath
//
function SAWSOAP_purgeCache_getTreePath() { return this._treePath;}

SAWSOAP_purgeCache.prototype.getTreePath = SAWSOAP_purgeCache_getTreePath;

function SAWSOAP_purgeCache_setTreePath(value) { this._treePath = value;}

SAWSOAP_purgeCache.prototype.setTreePath = SAWSOAP_purgeCache_setTreePath;
//
// accessor is SAWSOAP_purgeCache.prototype.getIgnoreCacheRef
// element get for ignoreCacheRef
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for ignoreCacheRef
// setter function is is SAWSOAP_purgeCache.prototype.setIgnoreCacheRef
//
function SAWSOAP_purgeCache_getIgnoreCacheRef() { return this._ignoreCacheRef;}

SAWSOAP_purgeCache.prototype.getIgnoreCacheRef = SAWSOAP_purgeCache_getIgnoreCacheRef;

function SAWSOAP_purgeCache_setIgnoreCacheRef(value) { this._ignoreCacheRef = value;}

SAWSOAP_purgeCache.prototype.setIgnoreCacheRef = SAWSOAP_purgeCache_setIgnoreCacheRef;
//
// accessor is SAWSOAP_purgeCache.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_purgeCache.prototype.setSessionID
//
function SAWSOAP_purgeCache_getSessionID() { return this._sessionID;}

SAWSOAP_purgeCache.prototype.getSessionID = SAWSOAP_purgeCache_getSessionID;

function SAWSOAP_purgeCache_setSessionID(value) { this._sessionID = value;}

SAWSOAP_purgeCache.prototype.setSessionID = SAWSOAP_purgeCache_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}purgeCache
//
function SAWSOAP_purgeCache_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treePath != null) {
      xml = xml + '<jns0:treePath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._treePath);
      xml = xml + '</jns0:treePath>';
     }
    }
    // block for local variables
    {
     if (this._ignoreCacheRef != null) {
      xml = xml + '<jns0:ignoreCacheRef>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ignoreCacheRef);
      xml = xml + '</jns0:ignoreCacheRef>';
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_purgeCache.prototype.serialize = SAWSOAP_purgeCache_serialize;

function SAWSOAP_purgeCache_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_purgeCache();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTreePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ignoreCacheRef');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'ignoreCacheRef')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setIgnoreCacheRef(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}unsubscribe
//
function SAWSOAP_unsubscribe () {
    this.typeMarker = 'SAWSOAP_unsubscribe';
    this._path = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_unsubscribe.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_unsubscribe.prototype.setPath
//
function SAWSOAP_unsubscribe_getPath() { return this._path;}

SAWSOAP_unsubscribe.prototype.getPath = SAWSOAP_unsubscribe_getPath;

function SAWSOAP_unsubscribe_setPath(value) { this._path = value;}

SAWSOAP_unsubscribe.prototype.setPath = SAWSOAP_unsubscribe_setPath;
//
// accessor is SAWSOAP_unsubscribe.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_unsubscribe.prototype.setSessionID
//
function SAWSOAP_unsubscribe_getSessionID() { return this._sessionID;}

SAWSOAP_unsubscribe.prototype.getSessionID = SAWSOAP_unsubscribe_getSessionID;

function SAWSOAP_unsubscribe_setSessionID(value) { this._sessionID = value;}

SAWSOAP_unsubscribe.prototype.setSessionID = SAWSOAP_unsubscribe_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}unsubscribe
//
function SAWSOAP_unsubscribe_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_unsubscribe.prototype.serialize = SAWSOAP_unsubscribe_serialize;

function SAWSOAP_unsubscribe_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_unsubscribe();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCountsResult
//
function SAWSOAP_getCountsResult () {
    this.typeMarker = 'SAWSOAP_getCountsResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_getCountsResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_getCountsResult.prototype.setJobInfo
//
function SAWSOAP_getCountsResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_getCountsResult.prototype.getJobInfo = SAWSOAP_getCountsResult_getJobInfo;

function SAWSOAP_getCountsResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_getCountsResult.prototype.setJobInfo = SAWSOAP_getCountsResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}getCountsResult
//
function SAWSOAP_getCountsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCountsResult.prototype.serialize = SAWSOAP_getCountsResult_serialize;

function SAWSOAP_getCountsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCountsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}prepareCacheResult
//
function SAWSOAP_prepareCacheResult () {
    this.typeMarker = 'SAWSOAP_prepareCacheResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_prepareCacheResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_prepareCacheResult.prototype.setJobInfo
//
function SAWSOAP_prepareCacheResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_prepareCacheResult.prototype.getJobInfo = SAWSOAP_prepareCacheResult_getJobInfo;

function SAWSOAP_prepareCacheResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_prepareCacheResult.prototype.setJobInfo = SAWSOAP_prepareCacheResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}prepareCacheResult
//
function SAWSOAP_prepareCacheResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_prepareCacheResult.prototype.serialize = SAWSOAP_prepareCacheResult_serialize;

function SAWSOAP_prepareCacheResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_prepareCacheResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCurUser
//
function SAWSOAP_getCurUser () {
    this.typeMarker = 'SAWSOAP_getCurUser';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getCurUser.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getCurUser.prototype.setSessionID
//
function SAWSOAP_getCurUser_getSessionID() { return this._sessionID;}

SAWSOAP_getCurUser.prototype.getSessionID = SAWSOAP_getCurUser_getSessionID;

function SAWSOAP_getCurUser_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getCurUser.prototype.setSessionID = SAWSOAP_getCurUser_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getCurUser
//
function SAWSOAP_getCurUser_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCurUser.prototype.serialize = SAWSOAP_getCurUser_serialize;

function SAWSOAP_getCurUser_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCurUser();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}moveItemResult
//
function SAWSOAP_moveItemResult () {
    this.typeMarker = 'SAWSOAP_moveItemResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}moveItemResult
//
function SAWSOAP_moveItemResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_moveItemResult.prototype.serialize = SAWSOAP_moveItemResult_serialize;

function SAWSOAP_moveItemResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_moveItemResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}applyReportDefaultsResult
//
function SAWSOAP_applyReportDefaultsResult () {
    this.typeMarker = 'SAWSOAP_applyReportDefaultsResult';
    this._reportXml = '';
}

//
// accessor is SAWSOAP_applyReportDefaultsResult.prototype.getReportXml
// element get for reportXml
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for reportXml
// setter function is is SAWSOAP_applyReportDefaultsResult.prototype.setReportXml
//
function SAWSOAP_applyReportDefaultsResult_getReportXml() { return this._reportXml;}

SAWSOAP_applyReportDefaultsResult.prototype.getReportXml = SAWSOAP_applyReportDefaultsResult_getReportXml;

function SAWSOAP_applyReportDefaultsResult_setReportXml(value) { this._reportXml = value;}

SAWSOAP_applyReportDefaultsResult.prototype.setReportXml = SAWSOAP_applyReportDefaultsResult_setReportXml;
//
// Serialize {urn://oracle.bi.webservices/v6}applyReportDefaultsResult
//
function SAWSOAP_applyReportDefaultsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:reportXml>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._reportXml);
     xml = xml + '</jns0:reportXml>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_applyReportDefaultsResult.prototype.serialize = SAWSOAP_applyReportDefaultsResult_serialize;

function SAWSOAP_applyReportDefaultsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_applyReportDefaultsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportXml');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportXml(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}startPage
//
function SAWSOAP_startPage () {
    this.typeMarker = 'SAWSOAP_startPage';
    this._options = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_startPage.prototype.getOptions
// element get for options
// - element type is {urn://oracle.bi.webservices/v6}StartPageParams
// - required element
// - nillable
//
// element set for options
// setter function is is SAWSOAP_startPage.prototype.setOptions
//
function SAWSOAP_startPage_getOptions() { return this._options;}

SAWSOAP_startPage.prototype.getOptions = SAWSOAP_startPage_getOptions;

function SAWSOAP_startPage_setOptions(value) { this._options = value;}

SAWSOAP_startPage.prototype.setOptions = SAWSOAP_startPage_setOptions;
//
// accessor is SAWSOAP_startPage.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_startPage.prototype.setSessionID
//
function SAWSOAP_startPage_getSessionID() { return this._sessionID;}

SAWSOAP_startPage.prototype.getSessionID = SAWSOAP_startPage_getSessionID;

function SAWSOAP_startPage_setSessionID(value) { this._sessionID = value;}

SAWSOAP_startPage.prototype.setSessionID = SAWSOAP_startPage_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}startPage
//
function SAWSOAP_startPage_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._options == null) {
      xml = xml + '<jns0:options xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._options.serialize(cxfjsutils, 'jns0:options', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_startPage.prototype.serialize = SAWSOAP_startPage_serialize;

function SAWSOAP_startPage_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_startPage();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing options');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_StartPageParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeColumn
//
function SAWSOAP_describeColumn () {
    this.typeMarker = 'SAWSOAP_describeColumn';
    this._subjectAreaName = '';
    this._tableName = '';
    this._columnName = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_describeColumn.prototype.getSubjectAreaName
// element get for subjectAreaName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for subjectAreaName
// setter function is is SAWSOAP_describeColumn.prototype.setSubjectAreaName
//
function SAWSOAP_describeColumn_getSubjectAreaName() { return this._subjectAreaName;}

SAWSOAP_describeColumn.prototype.getSubjectAreaName = SAWSOAP_describeColumn_getSubjectAreaName;

function SAWSOAP_describeColumn_setSubjectAreaName(value) { this._subjectAreaName = value;}

SAWSOAP_describeColumn.prototype.setSubjectAreaName = SAWSOAP_describeColumn_setSubjectAreaName;
//
// accessor is SAWSOAP_describeColumn.prototype.getTableName
// element get for tableName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for tableName
// setter function is is SAWSOAP_describeColumn.prototype.setTableName
//
function SAWSOAP_describeColumn_getTableName() { return this._tableName;}

SAWSOAP_describeColumn.prototype.getTableName = SAWSOAP_describeColumn_getTableName;

function SAWSOAP_describeColumn_setTableName(value) { this._tableName = value;}

SAWSOAP_describeColumn.prototype.setTableName = SAWSOAP_describeColumn_setTableName;
//
// accessor is SAWSOAP_describeColumn.prototype.getColumnName
// element get for columnName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for columnName
// setter function is is SAWSOAP_describeColumn.prototype.setColumnName
//
function SAWSOAP_describeColumn_getColumnName() { return this._columnName;}

SAWSOAP_describeColumn.prototype.getColumnName = SAWSOAP_describeColumn_getColumnName;

function SAWSOAP_describeColumn_setColumnName(value) { this._columnName = value;}

SAWSOAP_describeColumn.prototype.setColumnName = SAWSOAP_describeColumn_setColumnName;
//
// accessor is SAWSOAP_describeColumn.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_describeColumn.prototype.setSessionID
//
function SAWSOAP_describeColumn_getSessionID() { return this._sessionID;}

SAWSOAP_describeColumn.prototype.getSessionID = SAWSOAP_describeColumn_getSessionID;

function SAWSOAP_describeColumn_setSessionID(value) { this._sessionID = value;}

SAWSOAP_describeColumn.prototype.setSessionID = SAWSOAP_describeColumn_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}describeColumn
//
function SAWSOAP_describeColumn_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:subjectAreaName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._subjectAreaName);
     xml = xml + '</jns0:subjectAreaName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:tableName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._tableName);
     xml = xml + '</jns0:tableName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:columnName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._columnName);
     xml = xml + '</jns0:columnName>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeColumn.prototype.serialize = SAWSOAP_describeColumn_serialize;

function SAWSOAP_describeColumn_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeColumn();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subjectAreaName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSubjectAreaName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tableName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTableName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing columnName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setColumnName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logon
//
function SAWSOAP_logon () {
    this.typeMarker = 'SAWSOAP_logon';
    this._name = null;
    this._password = null;
}

//
// accessor is SAWSOAP_logon.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for name
// setter function is is SAWSOAP_logon.prototype.setName
//
function SAWSOAP_logon_getName() { return this._name;}

SAWSOAP_logon.prototype.getName = SAWSOAP_logon_getName;

function SAWSOAP_logon_setName(value) { this._name = value;}

SAWSOAP_logon.prototype.setName = SAWSOAP_logon_setName;
//
// accessor is SAWSOAP_logon.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for password
// setter function is is SAWSOAP_logon.prototype.setPassword
//
function SAWSOAP_logon_getPassword() { return this._password;}

SAWSOAP_logon.prototype.getPassword = SAWSOAP_logon_getPassword;

function SAWSOAP_logon_setPassword(value) { this._password = value;}

SAWSOAP_logon.prototype.setPassword = SAWSOAP_logon_setPassword;
//
// Serialize {urn://oracle.bi.webservices/v6}logon
//
function SAWSOAP_logon_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name == null) {
      xml = xml + '<jns0:name xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</jns0:name>';
     }
    }
    // block for local variables
    {
     if (this._password == null) {
      xml = xml + '<jns0:password xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:password>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._password);
      xml = xml + '</jns0:password>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logon.prototype.serialize = SAWSOAP_logon_serialize;

function SAWSOAP_logon_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logon();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}saveResultSetResult
//
function SAWSOAP_saveResultSetResult () {
    this.typeMarker = 'SAWSOAP_saveResultSetResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_saveResultSetResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_saveResultSetResult.prototype.setJobInfo
//
function SAWSOAP_saveResultSetResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_saveResultSetResult.prototype.getJobInfo = SAWSOAP_saveResultSetResult_getJobInfo;

function SAWSOAP_saveResultSetResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_saveResultSetResult.prototype.setJobInfo = SAWSOAP_saveResultSetResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}saveResultSetResult
//
function SAWSOAP_saveResultSetResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_saveResultSetResult.prototype.serialize = SAWSOAP_saveResultSetResult_serialize;

function SAWSOAP_saveResultSetResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_saveResultSetResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSubItemsResult
//
function SAWSOAP_getSubItemsResult () {
    this.typeMarker = 'SAWSOAP_getSubItemsResult';
    this._itemInfo = [];
}

//
// accessor is SAWSOAP_getSubItemsResult.prototype.getItemInfo
// element get for itemInfo
// - element type is {urn://oracle.bi.webservices/v6}ItemInfo
// - required element
// - array
//
// element set for itemInfo
// setter function is is SAWSOAP_getSubItemsResult.prototype.setItemInfo
//
function SAWSOAP_getSubItemsResult_getItemInfo() { return this._itemInfo;}

SAWSOAP_getSubItemsResult.prototype.getItemInfo = SAWSOAP_getSubItemsResult_getItemInfo;

function SAWSOAP_getSubItemsResult_setItemInfo(value) { this._itemInfo = value;}

SAWSOAP_getSubItemsResult.prototype.setItemInfo = SAWSOAP_getSubItemsResult_setItemInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}getSubItemsResult
//
function SAWSOAP_getSubItemsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._itemInfo != null) {
      for (var ax = 0;ax < this._itemInfo.length;ax ++) {
       if (this._itemInfo[ax] == null) {
        xml = xml + '<jns0:itemInfo/>';
       } else {
        xml = xml + this._itemInfo[ax].serialize(cxfjsutils, 'jns0:itemInfo', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSubItemsResult.prototype.serialize = SAWSOAP_getSubItemsResult_serialize;

function SAWSOAP_getSubItemsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSubItemsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing itemInfo');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemInfo')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_ItemInfo_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'itemInfo'));
     newobject.setItemInfo(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getConditionCustomizableReportElementsResult
//
function SAWSOAP_getConditionCustomizableReportElementsResult () {
    this.typeMarker = 'SAWSOAP_getConditionCustomizableReportElementsResult';
    this._customizableElement = [];
}

//
// accessor is SAWSOAP_getConditionCustomizableReportElementsResult.prototype.getCustomizableElement
// element get for customizableElement
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for customizableElement
// setter function is is SAWSOAP_getConditionCustomizableReportElementsResult.prototype.setCustomizableElement
//
function SAWSOAP_getConditionCustomizableReportElementsResult_getCustomizableElement() { return this._customizableElement;}

SAWSOAP_getConditionCustomizableReportElementsResult.prototype.getCustomizableElement = SAWSOAP_getConditionCustomizableReportElementsResult_getCustomizableElement;

function SAWSOAP_getConditionCustomizableReportElementsResult_setCustomizableElement(value) { this._customizableElement = value;}

SAWSOAP_getConditionCustomizableReportElementsResult.prototype.setCustomizableElement = SAWSOAP_getConditionCustomizableReportElementsResult_setCustomizableElement;
//
// Serialize {urn://oracle.bi.webservices/v6}getConditionCustomizableReportElementsResult
//
function SAWSOAP_getConditionCustomizableReportElementsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._customizableElement != null) {
      for (var ax = 0;ax < this._customizableElement.length;ax ++) {
       if (this._customizableElement[ax] == null) {
        xml = xml + '<jns0:customizableElement/>';
       } else {
        xml = xml + '<jns0:customizableElement>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._customizableElement[ax]);
        xml = xml + '</jns0:customizableElement>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getConditionCustomizableReportElementsResult.prototype.serialize = SAWSOAP_getConditionCustomizableReportElementsResult_serialize;

function SAWSOAP_getConditionCustomizableReportElementsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getConditionCustomizableReportElementsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customizableElement');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'customizableElement')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'customizableElement'));
     newobject.setCustomizableElement(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}applyReportParamsResult
//
function SAWSOAP_applyReportParamsResult () {
    this.typeMarker = 'SAWSOAP_applyReportParamsResult';
    this._return = '';
}

//
// accessor is SAWSOAP_applyReportParamsResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}anyType
// - required element
//
// element set for return
// setter function is is SAWSOAP_applyReportParamsResult.prototype.setReturn
//
function SAWSOAP_applyReportParamsResult_getReturn() { return this._return;}

SAWSOAP_applyReportParamsResult.prototype.getReturn = SAWSOAP_applyReportParamsResult_getReturn;

function SAWSOAP_applyReportParamsResult_setReturn(value) { this._return = value;}

SAWSOAP_applyReportParamsResult.prototype.setReturn = SAWSOAP_applyReportParamsResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}applyReportParamsResult
//
function SAWSOAP_applyReportParamsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     var anyHolder = this._return;
     var anySerializer;
     var typeAttr = '';
     if (anyHolder != null) {
      if (!anyHolder.raw) {
       anySerializer = cxfjsutils.interfaceObject.globalElementSerializers[anyHolder.qname];
      }
      if (anyHolder.xsiType) {
       var typePrefix = 'cxfjst35';
       var typeAttr = 'xmlns:' + typePrefix + '=\'' + anyHolder.namespaceURI + '\'';
       typeAttr = typeAttr + ' xsi:type=\'' + typePrefix + ':' + anyHolder.localName + '\'';
      }
      if (anySerializer) {
       xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', typeAttr);
      } else {
       xml = xml + '<jns0:return ' + typeAttr + '>';
       if (!anyHolder.raw) {
        xml = xml + cxfjsutils.escapeXmlEntities(this._return);
       } else {
        xml = xml + anyHolder.xml;
       }
       xml = xml + '</jns0:return>';
      }
     } else {
      xml = xml + '<jns0:return xsi:nil=\'true\'/>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_applyReportParamsResult.prototype.serialize = SAWSOAP_applyReportParamsResult_serialize;

function SAWSOAP_applyReportParamsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_applyReportParamsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = org_apache_cxf_deserialize_anyType(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}joinGroupsResult
//
function SAWSOAP_joinGroupsResult () {
    this.typeMarker = 'SAWSOAP_joinGroupsResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}joinGroupsResult
//
function SAWSOAP_joinGroupsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_joinGroupsResult.prototype.serialize = SAWSOAP_joinGroupsResult_serialize;

function SAWSOAP_joinGroupsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_joinGroupsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setOwnership
//
function SAWSOAP_setOwnership () {
    this.typeMarker = 'SAWSOAP_setOwnership';
    this._path = [];
    this._owner = null;
    this._recursive = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_setOwnership.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for path
// setter function is is SAWSOAP_setOwnership.prototype.setPath
//
function SAWSOAP_setOwnership_getPath() { return this._path;}

SAWSOAP_setOwnership.prototype.getPath = SAWSOAP_setOwnership_getPath;

function SAWSOAP_setOwnership_setPath(value) { this._path = value;}

SAWSOAP_setOwnership.prototype.setPath = SAWSOAP_setOwnership_setPath;
//
// accessor is SAWSOAP_setOwnership.prototype.getOwner
// element get for owner
// - element type is {urn://oracle.bi.webservices/v6}Account
// - optional element
//
// element set for owner
// setter function is is SAWSOAP_setOwnership.prototype.setOwner
//
function SAWSOAP_setOwnership_getOwner() { return this._owner;}

SAWSOAP_setOwnership.prototype.getOwner = SAWSOAP_setOwnership_getOwner;

function SAWSOAP_setOwnership_setOwner(value) { this._owner = value;}

SAWSOAP_setOwnership.prototype.setOwner = SAWSOAP_setOwnership_setOwner;
//
// accessor is SAWSOAP_setOwnership.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_setOwnership.prototype.setRecursive
//
function SAWSOAP_setOwnership_getRecursive() { return this._recursive;}

SAWSOAP_setOwnership.prototype.getRecursive = SAWSOAP_setOwnership_getRecursive;

function SAWSOAP_setOwnership_setRecursive(value) { this._recursive = value;}

SAWSOAP_setOwnership.prototype.setRecursive = SAWSOAP_setOwnership_setRecursive;
//
// accessor is SAWSOAP_setOwnership.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_setOwnership.prototype.setSessionID
//
function SAWSOAP_setOwnership_getSessionID() { return this._sessionID;}

SAWSOAP_setOwnership.prototype.getSessionID = SAWSOAP_setOwnership_getSessionID;

function SAWSOAP_setOwnership_setSessionID(value) { this._sessionID = value;}

SAWSOAP_setOwnership.prototype.setSessionID = SAWSOAP_setOwnership_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}setOwnership
//
function SAWSOAP_setOwnership_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._path != null) {
      for (var ax = 0;ax < this._path.length;ax ++) {
       if (this._path[ax] == null) {
        xml = xml + '<jns0:path/>';
       } else {
        xml = xml + '<jns0:path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._path[ax]);
        xml = xml + '</jns0:path>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._owner != null) {
      xml = xml + this._owner.serialize(cxfjsutils, 'jns0:owner', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setOwnership.prototype.serialize = SAWSOAP_setOwnership_serialize;

function SAWSOAP_setOwnership_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setOwnership();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path'));
     newobject.setPath(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing owner');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'owner')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
     }
     newobject.setOwner(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}fetchNext
//
function SAWSOAP_fetchNext () {
    this.typeMarker = 'SAWSOAP_fetchNext';
    this._queryID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_fetchNext.prototype.getQueryID
// element get for queryID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for queryID
// setter function is is SAWSOAP_fetchNext.prototype.setQueryID
//
function SAWSOAP_fetchNext_getQueryID() { return this._queryID;}

SAWSOAP_fetchNext.prototype.getQueryID = SAWSOAP_fetchNext_getQueryID;

function SAWSOAP_fetchNext_setQueryID(value) { this._queryID = value;}

SAWSOAP_fetchNext.prototype.setQueryID = SAWSOAP_fetchNext_setQueryID;
//
// accessor is SAWSOAP_fetchNext.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_fetchNext.prototype.setSessionID
//
function SAWSOAP_fetchNext_getSessionID() { return this._sessionID;}

SAWSOAP_fetchNext.prototype.getSessionID = SAWSOAP_fetchNext_getSessionID;

function SAWSOAP_fetchNext_setSessionID(value) { this._sessionID = value;}

SAWSOAP_fetchNext.prototype.setSessionID = SAWSOAP_fetchNext_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}fetchNext
//
function SAWSOAP_fetchNext_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:queryID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._queryID);
     xml = xml + '</jns0:queryID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_fetchNext.prototype.serialize = SAWSOAP_fetchNext_serialize;

function SAWSOAP_fetchNext_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_fetchNext();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing queryID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setQueryID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}impersonateex
//
function SAWSOAP_impersonateex () {
    this.typeMarker = 'SAWSOAP_impersonateex';
    this._name = '';
    this._password = '';
    this._impersonateID = '';
    this._sessionparams = null;
}

//
// accessor is SAWSOAP_impersonateex.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is SAWSOAP_impersonateex.prototype.setName
//
function SAWSOAP_impersonateex_getName() { return this._name;}

SAWSOAP_impersonateex.prototype.getName = SAWSOAP_impersonateex_getName;

function SAWSOAP_impersonateex_setName(value) { this._name = value;}

SAWSOAP_impersonateex.prototype.setName = SAWSOAP_impersonateex_setName;
//
// accessor is SAWSOAP_impersonateex.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for password
// setter function is is SAWSOAP_impersonateex.prototype.setPassword
//
function SAWSOAP_impersonateex_getPassword() { return this._password;}

SAWSOAP_impersonateex.prototype.getPassword = SAWSOAP_impersonateex_getPassword;

function SAWSOAP_impersonateex_setPassword(value) { this._password = value;}

SAWSOAP_impersonateex.prototype.setPassword = SAWSOAP_impersonateex_setPassword;
//
// accessor is SAWSOAP_impersonateex.prototype.getImpersonateID
// element get for impersonateID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for impersonateID
// setter function is is SAWSOAP_impersonateex.prototype.setImpersonateID
//
function SAWSOAP_impersonateex_getImpersonateID() { return this._impersonateID;}

SAWSOAP_impersonateex.prototype.getImpersonateID = SAWSOAP_impersonateex_getImpersonateID;

function SAWSOAP_impersonateex_setImpersonateID(value) { this._impersonateID = value;}

SAWSOAP_impersonateex.prototype.setImpersonateID = SAWSOAP_impersonateex_setImpersonateID;
//
// accessor is SAWSOAP_impersonateex.prototype.getSessionparams
// element get for sessionparams
// - element type is {urn://oracle.bi.webservices/v6}SAWSessionParameters
// - required element
// - nillable
//
// element set for sessionparams
// setter function is is SAWSOAP_impersonateex.prototype.setSessionparams
//
function SAWSOAP_impersonateex_getSessionparams() { return this._sessionparams;}

SAWSOAP_impersonateex.prototype.getSessionparams = SAWSOAP_impersonateex_getSessionparams;

function SAWSOAP_impersonateex_setSessionparams(value) { this._sessionparams = value;}

SAWSOAP_impersonateex.prototype.setSessionparams = SAWSOAP_impersonateex_setSessionparams;
//
// Serialize {urn://oracle.bi.webservices/v6}impersonateex
//
function SAWSOAP_impersonateex_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</jns0:name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:password>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._password);
     xml = xml + '</jns0:password>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:impersonateID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._impersonateID);
     xml = xml + '</jns0:impersonateID>';
    }
    // block for local variables
    {
     if (this._sessionparams == null) {
      xml = xml + '<jns0:sessionparams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._sessionparams.serialize(cxfjsutils, 'jns0:sessionparams', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_impersonateex.prototype.serialize = SAWSOAP_impersonateex_serialize;

function SAWSOAP_impersonateex_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_impersonateex();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing impersonateID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setImpersonateID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionparams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SAWSessionParameters_deserialize(cxfjsutils, curElement);
    }
    newobject.setSessionparams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}evaluateConditionResult
//
function SAWSOAP_evaluateConditionResult () {
    this.typeMarker = 'SAWSOAP_evaluateConditionResult';
    this._conditionIsTrue = '';
}

//
// accessor is SAWSOAP_evaluateConditionResult.prototype.getConditionIsTrue
// element get for conditionIsTrue
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for conditionIsTrue
// setter function is is SAWSOAP_evaluateConditionResult.prototype.setConditionIsTrue
//
function SAWSOAP_evaluateConditionResult_getConditionIsTrue() { return this._conditionIsTrue;}

SAWSOAP_evaluateConditionResult.prototype.getConditionIsTrue = SAWSOAP_evaluateConditionResult_getConditionIsTrue;

function SAWSOAP_evaluateConditionResult_setConditionIsTrue(value) { this._conditionIsTrue = value;}

SAWSOAP_evaluateConditionResult.prototype.setConditionIsTrue = SAWSOAP_evaluateConditionResult_setConditionIsTrue;
//
// Serialize {urn://oracle.bi.webservices/v6}evaluateConditionResult
//
function SAWSOAP_evaluateConditionResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:conditionIsTrue>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._conditionIsTrue);
     xml = xml + '</jns0:conditionIsTrue>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_evaluateConditionResult.prototype.serialize = SAWSOAP_evaluateConditionResult_serialize;

function SAWSOAP_evaluateConditionResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_evaluateConditionResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing conditionIsTrue');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setConditionIsTrue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setItemProperty
//
function SAWSOAP_setItemProperty () {
    this.typeMarker = 'SAWSOAP_setItemProperty';
    this._path = [];
    this._name = [];
    this._value = [];
    this._recursive = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_setItemProperty.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for path
// setter function is is SAWSOAP_setItemProperty.prototype.setPath
//
function SAWSOAP_setItemProperty_getPath() { return this._path;}

SAWSOAP_setItemProperty.prototype.getPath = SAWSOAP_setItemProperty_getPath;

function SAWSOAP_setItemProperty_setPath(value) { this._path = value;}

SAWSOAP_setItemProperty.prototype.setPath = SAWSOAP_setItemProperty_setPath;
//
// accessor is SAWSOAP_setItemProperty.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for name
// setter function is is SAWSOAP_setItemProperty.prototype.setName
//
function SAWSOAP_setItemProperty_getName() { return this._name;}

SAWSOAP_setItemProperty.prototype.getName = SAWSOAP_setItemProperty_getName;

function SAWSOAP_setItemProperty_setName(value) { this._name = value;}

SAWSOAP_setItemProperty.prototype.setName = SAWSOAP_setItemProperty_setName;
//
// accessor is SAWSOAP_setItemProperty.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for value
// setter function is is SAWSOAP_setItemProperty.prototype.setValue
//
function SAWSOAP_setItemProperty_getValue() { return this._value;}

SAWSOAP_setItemProperty.prototype.getValue = SAWSOAP_setItemProperty_getValue;

function SAWSOAP_setItemProperty_setValue(value) { this._value = value;}

SAWSOAP_setItemProperty.prototype.setValue = SAWSOAP_setItemProperty_setValue;
//
// accessor is SAWSOAP_setItemProperty.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_setItemProperty.prototype.setRecursive
//
function SAWSOAP_setItemProperty_getRecursive() { return this._recursive;}

SAWSOAP_setItemProperty.prototype.getRecursive = SAWSOAP_setItemProperty_getRecursive;

function SAWSOAP_setItemProperty_setRecursive(value) { this._recursive = value;}

SAWSOAP_setItemProperty.prototype.setRecursive = SAWSOAP_setItemProperty_setRecursive;
//
// accessor is SAWSOAP_setItemProperty.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_setItemProperty.prototype.setSessionID
//
function SAWSOAP_setItemProperty_getSessionID() { return this._sessionID;}

SAWSOAP_setItemProperty.prototype.getSessionID = SAWSOAP_setItemProperty_getSessionID;

function SAWSOAP_setItemProperty_setSessionID(value) { this._sessionID = value;}

SAWSOAP_setItemProperty.prototype.setSessionID = SAWSOAP_setItemProperty_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}setItemProperty
//
function SAWSOAP_setItemProperty_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._path != null) {
      for (var ax = 0;ax < this._path.length;ax ++) {
       if (this._path[ax] == null) {
        xml = xml + '<jns0:path/>';
       } else {
        xml = xml + '<jns0:path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._path[ax]);
        xml = xml + '</jns0:path>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      for (var ax = 0;ax < this._name.length;ax ++) {
       if (this._name[ax] == null) {
        xml = xml + '<jns0:name/>';
       } else {
        xml = xml + '<jns0:name>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._name[ax]);
        xml = xml + '</jns0:name>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._value != null) {
      for (var ax = 0;ax < this._value.length;ax ++) {
       if (this._value[ax] == null) {
        xml = xml + '<jns0:value/>';
       } else {
        xml = xml + '<jns0:value>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._value[ax]);
        xml = xml + '</jns0:value>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setItemProperty.prototype.serialize = SAWSOAP_setItemProperty_serialize;

function SAWSOAP_setItemProperty_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setItemProperty();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path'));
     newobject.setPath(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'name')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'name'));
     newobject.setName(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'value')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'value'));
     newobject.setValue(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReportResult
//
function SAWSOAP_getHtmlForPageWithOneReportResult () {
    this.typeMarker = 'SAWSOAP_getHtmlForPageWithOneReportResult';
    this._return = '';
}

//
// accessor is SAWSOAP_getHtmlForPageWithOneReportResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_getHtmlForPageWithOneReportResult.prototype.setReturn
//
function SAWSOAP_getHtmlForPageWithOneReportResult_getReturn() { return this._return;}

SAWSOAP_getHtmlForPageWithOneReportResult.prototype.getReturn = SAWSOAP_getHtmlForPageWithOneReportResult_getReturn;

function SAWSOAP_getHtmlForPageWithOneReportResult_setReturn(value) { this._return = value;}

SAWSOAP_getHtmlForPageWithOneReportResult.prototype.setReturn = SAWSOAP_getHtmlForPageWithOneReportResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReportResult
//
function SAWSOAP_getHtmlForPageWithOneReportResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHtmlForPageWithOneReportResult.prototype.serialize = SAWSOAP_getHtmlForPageWithOneReportResult_serialize;

function SAWSOAP_getHtmlForPageWithOneReportResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHtmlForPageWithOneReportResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeSubjectAreaResult
//
function SAWSOAP_describeSubjectAreaResult () {
    this.typeMarker = 'SAWSOAP_describeSubjectAreaResult';
    this._subjectArea = null;
}

//
// accessor is SAWSOAP_describeSubjectAreaResult.prototype.getSubjectArea
// element get for subjectArea
// - element type is {urn://oracle.bi.webservices/v6}SASubjectArea
// - required element
//
// element set for subjectArea
// setter function is is SAWSOAP_describeSubjectAreaResult.prototype.setSubjectArea
//
function SAWSOAP_describeSubjectAreaResult_getSubjectArea() { return this._subjectArea;}

SAWSOAP_describeSubjectAreaResult.prototype.getSubjectArea = SAWSOAP_describeSubjectAreaResult_getSubjectArea;

function SAWSOAP_describeSubjectAreaResult_setSubjectArea(value) { this._subjectArea = value;}

SAWSOAP_describeSubjectAreaResult.prototype.setSubjectArea = SAWSOAP_describeSubjectAreaResult_setSubjectArea;
//
// Serialize {urn://oracle.bi.webservices/v6}describeSubjectAreaResult
//
function SAWSOAP_describeSubjectAreaResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._subjectArea.serialize(cxfjsutils, 'jns0:subjectArea', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeSubjectAreaResult.prototype.serialize = SAWSOAP_describeSubjectAreaResult_serialize;

function SAWSOAP_describeSubjectAreaResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeSubjectAreaResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing subjectArea');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SASubjectArea_deserialize(cxfjsutils, curElement);
    }
    newobject.setSubjectArea(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}copyItem
//
function SAWSOAP_copyItem () {
    this.typeMarker = 'SAWSOAP_copyItem';
    this._pathSrc = '';
    this._pathDest = '';
    this._flagACL = 0;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_copyItem.prototype.getPathSrc
// element get for pathSrc
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pathSrc
// setter function is is SAWSOAP_copyItem.prototype.setPathSrc
//
function SAWSOAP_copyItem_getPathSrc() { return this._pathSrc;}

SAWSOAP_copyItem.prototype.getPathSrc = SAWSOAP_copyItem_getPathSrc;

function SAWSOAP_copyItem_setPathSrc(value) { this._pathSrc = value;}

SAWSOAP_copyItem.prototype.setPathSrc = SAWSOAP_copyItem_setPathSrc;
//
// accessor is SAWSOAP_copyItem.prototype.getPathDest
// element get for pathDest
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pathDest
// setter function is is SAWSOAP_copyItem.prototype.setPathDest
//
function SAWSOAP_copyItem_getPathDest() { return this._pathDest;}

SAWSOAP_copyItem.prototype.getPathDest = SAWSOAP_copyItem_getPathDest;

function SAWSOAP_copyItem_setPathDest(value) { this._pathDest = value;}

SAWSOAP_copyItem.prototype.setPathDest = SAWSOAP_copyItem_setPathDest;
//
// accessor is SAWSOAP_copyItem.prototype.getFlagACL
// element get for flagACL
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for flagACL
// setter function is is SAWSOAP_copyItem.prototype.setFlagACL
//
function SAWSOAP_copyItem_getFlagACL() { return this._flagACL;}

SAWSOAP_copyItem.prototype.getFlagACL = SAWSOAP_copyItem_getFlagACL;

function SAWSOAP_copyItem_setFlagACL(value) { this._flagACL = value;}

SAWSOAP_copyItem.prototype.setFlagACL = SAWSOAP_copyItem_setFlagACL;
//
// accessor is SAWSOAP_copyItem.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_copyItem.prototype.setSessionID
//
function SAWSOAP_copyItem_getSessionID() { return this._sessionID;}

SAWSOAP_copyItem.prototype.getSessionID = SAWSOAP_copyItem_getSessionID;

function SAWSOAP_copyItem_setSessionID(value) { this._sessionID = value;}

SAWSOAP_copyItem.prototype.setSessionID = SAWSOAP_copyItem_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}copyItem
//
function SAWSOAP_copyItem_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pathSrc>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pathSrc);
     xml = xml + '</jns0:pathSrc>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pathDest>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pathDest);
     xml = xml + '</jns0:pathDest>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flagACL>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flagACL);
     xml = xml + '</jns0:flagACL>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_copyItem.prototype.serialize = SAWSOAP_copyItem_serialize;

function SAWSOAP_copyItem_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_copyItem();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathSrc');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPathSrc(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathDest');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPathDest(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flagACL');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFlagACL(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}pasteItem2Result
//
function SAWSOAP_pasteItem2Result () {
    this.typeMarker = 'SAWSOAP_pasteItem2Result';
}

//
// Serialize {urn://oracle.bi.webservices/v6}pasteItem2Result
//
function SAWSOAP_pasteItem2Result_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_pasteItem2Result.prototype.serialize = SAWSOAP_pasteItem2Result_serialize;

function SAWSOAP_pasteItem2Result_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_pasteItem2Result();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}startPageResult
//
function SAWSOAP_startPageResult () {
    this.typeMarker = 'SAWSOAP_startPageResult';
    this._return = '';
}

//
// accessor is SAWSOAP_startPageResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for return
// setter function is is SAWSOAP_startPageResult.prototype.setReturn
//
function SAWSOAP_startPageResult_getReturn() { return this._return;}

SAWSOAP_startPageResult.prototype.getReturn = SAWSOAP_startPageResult_getReturn;

function SAWSOAP_startPageResult_setReturn(value) { this._return = value;}

SAWSOAP_startPageResult.prototype.setReturn = SAWSOAP_startPageResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}startPageResult
//
function SAWSOAP_startPageResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:return>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._return);
     xml = xml + '</jns0:return>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_startPageResult.prototype.serialize = SAWSOAP_startPageResult_serialize;

function SAWSOAP_startPageResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_startPageResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSessionEnvironment
//
function SAWSOAP_getSessionEnvironment () {
    this.typeMarker = 'SAWSOAP_getSessionEnvironment';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getSessionEnvironment.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getSessionEnvironment.prototype.setSessionID
//
function SAWSOAP_getSessionEnvironment_getSessionID() { return this._sessionID;}

SAWSOAP_getSessionEnvironment.prototype.getSessionID = SAWSOAP_getSessionEnvironment_getSessionID;

function SAWSOAP_getSessionEnvironment_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getSessionEnvironment.prototype.setSessionID = SAWSOAP_getSessionEnvironment_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getSessionEnvironment
//
function SAWSOAP_getSessionEnvironment_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSessionEnvironment.prototype.serialize = SAWSOAP_getSessionEnvironment_serialize;

function SAWSOAP_getSessionEnvironment_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSessionEnvironment();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}cancelQuery
//
function SAWSOAP_cancelQuery () {
    this.typeMarker = 'SAWSOAP_cancelQuery';
    this._queryID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_cancelQuery.prototype.getQueryID
// element get for queryID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for queryID
// setter function is is SAWSOAP_cancelQuery.prototype.setQueryID
//
function SAWSOAP_cancelQuery_getQueryID() { return this._queryID;}

SAWSOAP_cancelQuery.prototype.getQueryID = SAWSOAP_cancelQuery_getQueryID;

function SAWSOAP_cancelQuery_setQueryID(value) { this._queryID = value;}

SAWSOAP_cancelQuery.prototype.setQueryID = SAWSOAP_cancelQuery_setQueryID;
//
// accessor is SAWSOAP_cancelQuery.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_cancelQuery.prototype.setSessionID
//
function SAWSOAP_cancelQuery_getSessionID() { return this._sessionID;}

SAWSOAP_cancelQuery.prototype.getSessionID = SAWSOAP_cancelQuery_getSessionID;

function SAWSOAP_cancelQuery_setSessionID(value) { this._sessionID = value;}

SAWSOAP_cancelQuery.prototype.setSessionID = SAWSOAP_cancelQuery_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}cancelQuery
//
function SAWSOAP_cancelQuery_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:queryID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._queryID);
     xml = xml + '</jns0:queryID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_cancelQuery.prototype.serialize = SAWSOAP_cancelQuery_serialize;

function SAWSOAP_cancelQuery_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_cancelQuery();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing queryID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setQueryID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPromptedFiltersResult
//
function SAWSOAP_getPromptedFiltersResult () {
    this.typeMarker = 'SAWSOAP_getPromptedFiltersResult';
    this._promptedFilter = [];
}

//
// accessor is SAWSOAP_getPromptedFiltersResult.prototype.getPromptedFilter
// element get for promptedFilter
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for promptedFilter
// setter function is is SAWSOAP_getPromptedFiltersResult.prototype.setPromptedFilter
//
function SAWSOAP_getPromptedFiltersResult_getPromptedFilter() { return this._promptedFilter;}

SAWSOAP_getPromptedFiltersResult.prototype.getPromptedFilter = SAWSOAP_getPromptedFiltersResult_getPromptedFilter;

function SAWSOAP_getPromptedFiltersResult_setPromptedFilter(value) { this._promptedFilter = value;}

SAWSOAP_getPromptedFiltersResult.prototype.setPromptedFilter = SAWSOAP_getPromptedFiltersResult_setPromptedFilter;
//
// Serialize {urn://oracle.bi.webservices/v6}getPromptedFiltersResult
//
function SAWSOAP_getPromptedFiltersResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._promptedFilter != null) {
      for (var ax = 0;ax < this._promptedFilter.length;ax ++) {
       if (this._promptedFilter[ax] == null) {
        xml = xml + '<jns0:promptedFilter/>';
       } else {
        xml = xml + '<jns0:promptedFilter>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._promptedFilter[ax]);
        xml = xml + '</jns0:promptedFilter>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPromptedFiltersResult.prototype.serialize = SAWSOAP_getPromptedFiltersResult_serialize;

function SAWSOAP_getPromptedFiltersResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPromptedFiltersResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing promptedFilter');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'promptedFilter')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'promptedFilter'));
     newobject.setPromptedFilter(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}subscribe
//
function SAWSOAP_subscribe () {
    this.typeMarker = 'SAWSOAP_subscribe';
    this._path = '';
    this._customizationXml = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_subscribe.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_subscribe.prototype.setPath
//
function SAWSOAP_subscribe_getPath() { return this._path;}

SAWSOAP_subscribe.prototype.getPath = SAWSOAP_subscribe_getPath;

function SAWSOAP_subscribe_setPath(value) { this._path = value;}

SAWSOAP_subscribe.prototype.setPath = SAWSOAP_subscribe_setPath;
//
// accessor is SAWSOAP_subscribe.prototype.getCustomizationXml
// element get for customizationXml
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for customizationXml
// setter function is is SAWSOAP_subscribe.prototype.setCustomizationXml
//
function SAWSOAP_subscribe_getCustomizationXml() { return this._customizationXml;}

SAWSOAP_subscribe.prototype.getCustomizationXml = SAWSOAP_subscribe_getCustomizationXml;

function SAWSOAP_subscribe_setCustomizationXml(value) { this._customizationXml = value;}

SAWSOAP_subscribe.prototype.setCustomizationXml = SAWSOAP_subscribe_setCustomizationXml;
//
// accessor is SAWSOAP_subscribe.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_subscribe.prototype.setSessionID
//
function SAWSOAP_subscribe_getSessionID() { return this._sessionID;}

SAWSOAP_subscribe.prototype.getSessionID = SAWSOAP_subscribe_getSessionID;

function SAWSOAP_subscribe_setSessionID(value) { this._sessionID = value;}

SAWSOAP_subscribe.prototype.setSessionID = SAWSOAP_subscribe_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}subscribe
//
function SAWSOAP_subscribe_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._customizationXml == null) {
      xml = xml + '<jns0:customizationXml xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:customizationXml>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._customizationXml);
      xml = xml + '</jns0:customizationXml>';
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_subscribe.prototype.serialize = SAWSOAP_subscribe_serialize;

function SAWSOAP_subscribe_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_subscribe();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customizationXml');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCustomizationXml(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPrivilegesStatus
//
function SAWSOAP_getPrivilegesStatus () {
    this.typeMarker = 'SAWSOAP_getPrivilegesStatus';
    this._privileges = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getPrivilegesStatus.prototype.getPrivileges
// element get for privileges
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for privileges
// setter function is is SAWSOAP_getPrivilegesStatus.prototype.setPrivileges
//
function SAWSOAP_getPrivilegesStatus_getPrivileges() { return this._privileges;}

SAWSOAP_getPrivilegesStatus.prototype.getPrivileges = SAWSOAP_getPrivilegesStatus_getPrivileges;

function SAWSOAP_getPrivilegesStatus_setPrivileges(value) { this._privileges = value;}

SAWSOAP_getPrivilegesStatus.prototype.setPrivileges = SAWSOAP_getPrivilegesStatus_setPrivileges;
//
// accessor is SAWSOAP_getPrivilegesStatus.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getPrivilegesStatus.prototype.setSessionID
//
function SAWSOAP_getPrivilegesStatus_getSessionID() { return this._sessionID;}

SAWSOAP_getPrivilegesStatus.prototype.getSessionID = SAWSOAP_getPrivilegesStatus_getSessionID;

function SAWSOAP_getPrivilegesStatus_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getPrivilegesStatus.prototype.setSessionID = SAWSOAP_getPrivilegesStatus_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getPrivilegesStatus
//
function SAWSOAP_getPrivilegesStatus_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._privileges != null) {
      for (var ax = 0;ax < this._privileges.length;ax ++) {
       if (this._privileges[ax] == null) {
        xml = xml + '<jns0:privileges/>';
       } else {
        xml = xml + '<jns0:privileges>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._privileges[ax]);
        xml = xml + '</jns0:privileges>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPrivilegesStatus.prototype.serialize = SAWSOAP_getPrivilegesStatus_serialize;

function SAWSOAP_getPrivilegesStatus_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPrivilegesStatus();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing privileges');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'privileges')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'privileges'));
     newobject.setPrivileges(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}readObjectsResult
//
function SAWSOAP_readObjectsResult () {
    this.typeMarker = 'SAWSOAP_readObjectsResult';
    this._catalogObject = [];
}

//
// accessor is SAWSOAP_readObjectsResult.prototype.getCatalogObject
// element get for catalogObject
// - element type is {urn://oracle.bi.webservices/v6}CatalogObject
// - required element
// - array
//
// element set for catalogObject
// setter function is is SAWSOAP_readObjectsResult.prototype.setCatalogObject
//
function SAWSOAP_readObjectsResult_getCatalogObject() { return this._catalogObject;}

SAWSOAP_readObjectsResult.prototype.getCatalogObject = SAWSOAP_readObjectsResult_getCatalogObject;

function SAWSOAP_readObjectsResult_setCatalogObject(value) { this._catalogObject = value;}

SAWSOAP_readObjectsResult.prototype.setCatalogObject = SAWSOAP_readObjectsResult_setCatalogObject;
//
// Serialize {urn://oracle.bi.webservices/v6}readObjectsResult
//
function SAWSOAP_readObjectsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._catalogObject != null) {
      for (var ax = 0;ax < this._catalogObject.length;ax ++) {
       if (this._catalogObject[ax] == null) {
        xml = xml + '<jns0:catalogObject/>';
       } else {
        xml = xml + this._catalogObject[ax].serialize(cxfjsutils, 'jns0:catalogObject', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_readObjectsResult.prototype.serialize = SAWSOAP_readObjectsResult_serialize;

function SAWSOAP_readObjectsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_readObjectsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing catalogObject');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObject')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_CatalogObject_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObject'));
     newobject.setCatalogObject(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setOwnershipResult
//
function SAWSOAP_setOwnershipResult () {
    this.typeMarker = 'SAWSOAP_setOwnershipResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}setOwnershipResult
//
function SAWSOAP_setOwnershipResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setOwnershipResult.prototype.serialize = SAWSOAP_setOwnershipResult_serialize;

function SAWSOAP_setOwnershipResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setOwnershipResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}markForReplicationResult
//
function SAWSOAP_markForReplicationResult () {
    this.typeMarker = 'SAWSOAP_markForReplicationResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}markForReplicationResult
//
function SAWSOAP_markForReplicationResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_markForReplicationResult.prototype.serialize = SAWSOAP_markForReplicationResult_serialize;

function SAWSOAP_markForReplicationResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_markForReplicationResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeIBotResult
//
function SAWSOAP_writeIBotResult () {
    this.typeMarker = 'SAWSOAP_writeIBotResult';
    this._jobID = 0;
}

//
// accessor is SAWSOAP_writeIBotResult.prototype.getJobID
// element get for jobID
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for jobID
// setter function is is SAWSOAP_writeIBotResult.prototype.setJobID
//
function SAWSOAP_writeIBotResult_getJobID() { return this._jobID;}

SAWSOAP_writeIBotResult.prototype.getJobID = SAWSOAP_writeIBotResult_getJobID;

function SAWSOAP_writeIBotResult_setJobID(value) { this._jobID = value;}

SAWSOAP_writeIBotResult.prototype.setJobID = SAWSOAP_writeIBotResult_setJobID;
//
// Serialize {urn://oracle.bi.webservices/v6}writeIBotResult
//
function SAWSOAP_writeIBotResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobID);
     xml = xml + '</jns0:jobID>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeIBotResult.prototype.serialize = SAWSOAP_writeIBotResult_serialize;

function SAWSOAP_writeIBotResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeIBotResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setJobID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getAccountsResult
//
function SAWSOAP_getAccountsResult () {
    this.typeMarker = 'SAWSOAP_getAccountsResult';
    this._accountDetails = [];
}

//
// accessor is SAWSOAP_getAccountsResult.prototype.getAccountDetails
// element get for accountDetails
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for accountDetails
// setter function is is SAWSOAP_getAccountsResult.prototype.setAccountDetails
//
function SAWSOAP_getAccountsResult_getAccountDetails() { return this._accountDetails;}

SAWSOAP_getAccountsResult.prototype.getAccountDetails = SAWSOAP_getAccountsResult_getAccountDetails;

function SAWSOAP_getAccountsResult_setAccountDetails(value) { this._accountDetails = value;}

SAWSOAP_getAccountsResult.prototype.setAccountDetails = SAWSOAP_getAccountsResult_setAccountDetails;
//
// Serialize {urn://oracle.bi.webservices/v6}getAccountsResult
//
function SAWSOAP_getAccountsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._accountDetails != null) {
      for (var ax = 0;ax < this._accountDetails.length;ax ++) {
       if (this._accountDetails[ax] == null) {
        xml = xml + '<jns0:accountDetails/>';
       } else {
        xml = xml + this._accountDetails[ax].serialize(cxfjsutils, 'jns0:accountDetails', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getAccountsResult.prototype.serialize = SAWSOAP_getAccountsResult_serialize;

function SAWSOAP_getAccountsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getAccountsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accountDetails');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'accountDetails')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'accountDetails'));
     newobject.setAccountDetails(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logoffResult
//
function SAWSOAP_logoffResult () {
    this.typeMarker = 'SAWSOAP_logoffResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}logoffResult
//
function SAWSOAP_logoffResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logoffResult.prototype.serialize = SAWSOAP_logoffResult_serialize;

function SAWSOAP_logoffResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logoffResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}subscribeResult
//
function SAWSOAP_subscribeResult () {
    this.typeMarker = 'SAWSOAP_subscribeResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}subscribeResult
//
function SAWSOAP_subscribeResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_subscribeResult.prototype.serialize = SAWSOAP_subscribeResult_serialize;

function SAWSOAP_subscribeResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_subscribeResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getItemInfo
//
function SAWSOAP_getItemInfo () {
    this.typeMarker = 'SAWSOAP_getItemInfo';
    this._path = '';
    this._resolveLinks = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getItemInfo.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_getItemInfo.prototype.setPath
//
function SAWSOAP_getItemInfo_getPath() { return this._path;}

SAWSOAP_getItemInfo.prototype.getPath = SAWSOAP_getItemInfo_getPath;

function SAWSOAP_getItemInfo_setPath(value) { this._path = value;}

SAWSOAP_getItemInfo.prototype.setPath = SAWSOAP_getItemInfo_setPath;
//
// accessor is SAWSOAP_getItemInfo.prototype.getResolveLinks
// element get for resolveLinks
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for resolveLinks
// setter function is is SAWSOAP_getItemInfo.prototype.setResolveLinks
//
function SAWSOAP_getItemInfo_getResolveLinks() { return this._resolveLinks;}

SAWSOAP_getItemInfo.prototype.getResolveLinks = SAWSOAP_getItemInfo_getResolveLinks;

function SAWSOAP_getItemInfo_setResolveLinks(value) { this._resolveLinks = value;}

SAWSOAP_getItemInfo.prototype.setResolveLinks = SAWSOAP_getItemInfo_setResolveLinks;
//
// accessor is SAWSOAP_getItemInfo.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getItemInfo.prototype.setSessionID
//
function SAWSOAP_getItemInfo_getSessionID() { return this._sessionID;}

SAWSOAP_getItemInfo.prototype.getSessionID = SAWSOAP_getItemInfo_getSessionID;

function SAWSOAP_getItemInfo_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getItemInfo.prototype.setSessionID = SAWSOAP_getItemInfo_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getItemInfo
//
function SAWSOAP_getItemInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:resolveLinks>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._resolveLinks);
     xml = xml + '</jns0:resolveLinks>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getItemInfo.prototype.serialize = SAWSOAP_getItemInfo_serialize;

function SAWSOAP_getItemInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getItemInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resolveLinks');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResolveLinks(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}logonexResult
//
function SAWSOAP_logonexResult () {
    this.typeMarker = 'SAWSOAP_logonexResult';
    this._return = null;
}

//
// accessor is SAWSOAP_logonexResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}AuthResult
// - required element
//
// element set for return
// setter function is is SAWSOAP_logonexResult.prototype.setReturn
//
function SAWSOAP_logonexResult_getReturn() { return this._return;}

SAWSOAP_logonexResult.prototype.getReturn = SAWSOAP_logonexResult_getReturn;

function SAWSOAP_logonexResult_setReturn(value) { this._return = value;}

SAWSOAP_logonexResult.prototype.setReturn = SAWSOAP_logonexResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}logonexResult
//
function SAWSOAP_logonexResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_logonexResult.prototype.serialize = SAWSOAP_logonexResult_serialize;

function SAWSOAP_logonexResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_logonexResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_AuthResult_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeSQLQueryResult
//
function SAWSOAP_executeSQLQueryResult () {
    this.typeMarker = 'SAWSOAP_executeSQLQueryResult';
    this._return = null;
}

//
// accessor is SAWSOAP_executeSQLQueryResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}QueryResults
// - required element
//
// element set for return
// setter function is is SAWSOAP_executeSQLQueryResult.prototype.setReturn
//
function SAWSOAP_executeSQLQueryResult_getReturn() { return this._return;}

SAWSOAP_executeSQLQueryResult.prototype.getReturn = SAWSOAP_executeSQLQueryResult_getReturn;

function SAWSOAP_executeSQLQueryResult_setReturn(value) { this._return = value;}

SAWSOAP_executeSQLQueryResult.prototype.setReturn = SAWSOAP_executeSQLQueryResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}executeSQLQueryResult
//
function SAWSOAP_executeSQLQueryResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeSQLQueryResult.prototype.serialize = SAWSOAP_executeSQLQueryResult_serialize;

function SAWSOAP_executeSQLQueryResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeSQLQueryResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_QueryResults_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSessionEnvironmentResult
//
function SAWSOAP_getSessionEnvironmentResult () {
    this.typeMarker = 'SAWSOAP_getSessionEnvironmentResult';
    this._return = null;
}

//
// accessor is SAWSOAP_getSessionEnvironmentResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}SessionEnvironment
// - required element
//
// element set for return
// setter function is is SAWSOAP_getSessionEnvironmentResult.prototype.setReturn
//
function SAWSOAP_getSessionEnvironmentResult_getReturn() { return this._return;}

SAWSOAP_getSessionEnvironmentResult.prototype.getReturn = SAWSOAP_getSessionEnvironmentResult_getReturn;

function SAWSOAP_getSessionEnvironmentResult_setReturn(value) { this._return = value;}

SAWSOAP_getSessionEnvironmentResult.prototype.setReturn = SAWSOAP_getSessionEnvironmentResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getSessionEnvironmentResult
//
function SAWSOAP_getSessionEnvironmentResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSessionEnvironmentResult.prototype.serialize = SAWSOAP_getSessionEnvironmentResult_serialize;

function SAWSOAP_getSessionEnvironmentResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSessionEnvironmentResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SessionEnvironment_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setItemAttributesResult
//
function SAWSOAP_setItemAttributesResult () {
    this.typeMarker = 'SAWSOAP_setItemAttributesResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}setItemAttributesResult
//
function SAWSOAP_setItemAttributesResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setItemAttributesResult.prototype.serialize = SAWSOAP_setItemAttributesResult_serialize;

function SAWSOAP_setItemAttributesResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setItemAttributesResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeColumnResult
//
function SAWSOAP_describeColumnResult () {
    this.typeMarker = 'SAWSOAP_describeColumnResult';
    this._column = null;
}

//
// accessor is SAWSOAP_describeColumnResult.prototype.getColumn
// element get for column
// - element type is {urn://oracle.bi.webservices/v6}SAColumn
// - required element
//
// element set for column
// setter function is is SAWSOAP_describeColumnResult.prototype.setColumn
//
function SAWSOAP_describeColumnResult_getColumn() { return this._column;}

SAWSOAP_describeColumnResult.prototype.getColumn = SAWSOAP_describeColumnResult_getColumn;

function SAWSOAP_describeColumnResult_setColumn(value) { this._column = value;}

SAWSOAP_describeColumnResult.prototype.setColumn = SAWSOAP_describeColumnResult_setColumn;
//
// Serialize {urn://oracle.bi.webservices/v6}describeColumnResult
//
function SAWSOAP_describeColumnResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._column.serialize(cxfjsutils, 'jns0:column', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeColumnResult.prototype.serialize = SAWSOAP_describeColumnResult_serialize;

function SAWSOAP_describeColumnResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeColumnResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing column');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SAColumn_deserialize(cxfjsutils, curElement);
    }
    newobject.setColumn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}evaluateInlineCondition
//
function SAWSOAP_evaluateInlineCondition () {
    this.typeMarker = 'SAWSOAP_evaluateInlineCondition';
    this._conditionXML = '';
    this._reportCustomizationParameters = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_evaluateInlineCondition.prototype.getConditionXML
// element get for conditionXML
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for conditionXML
// setter function is is SAWSOAP_evaluateInlineCondition.prototype.setConditionXML
//
function SAWSOAP_evaluateInlineCondition_getConditionXML() { return this._conditionXML;}

SAWSOAP_evaluateInlineCondition.prototype.getConditionXML = SAWSOAP_evaluateInlineCondition_getConditionXML;

function SAWSOAP_evaluateInlineCondition_setConditionXML(value) { this._conditionXML = value;}

SAWSOAP_evaluateInlineCondition.prototype.setConditionXML = SAWSOAP_evaluateInlineCondition_setConditionXML;
//
// accessor is SAWSOAP_evaluateInlineCondition.prototype.getReportCustomizationParameters
// element get for reportCustomizationParameters
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for reportCustomizationParameters
// setter function is is SAWSOAP_evaluateInlineCondition.prototype.setReportCustomizationParameters
//
function SAWSOAP_evaluateInlineCondition_getReportCustomizationParameters() { return this._reportCustomizationParameters;}

SAWSOAP_evaluateInlineCondition.prototype.getReportCustomizationParameters = SAWSOAP_evaluateInlineCondition_getReportCustomizationParameters;

function SAWSOAP_evaluateInlineCondition_setReportCustomizationParameters(value) { this._reportCustomizationParameters = value;}

SAWSOAP_evaluateInlineCondition.prototype.setReportCustomizationParameters = SAWSOAP_evaluateInlineCondition_setReportCustomizationParameters;
//
// accessor is SAWSOAP_evaluateInlineCondition.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_evaluateInlineCondition.prototype.setSessionID
//
function SAWSOAP_evaluateInlineCondition_getSessionID() { return this._sessionID;}

SAWSOAP_evaluateInlineCondition.prototype.getSessionID = SAWSOAP_evaluateInlineCondition_getSessionID;

function SAWSOAP_evaluateInlineCondition_setSessionID(value) { this._sessionID = value;}

SAWSOAP_evaluateInlineCondition.prototype.setSessionID = SAWSOAP_evaluateInlineCondition_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}evaluateInlineCondition
//
function SAWSOAP_evaluateInlineCondition_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:conditionXML>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._conditionXML);
     xml = xml + '</jns0:conditionXML>';
    }
    // block for local variables
    {
     if (this._reportCustomizationParameters != null) {
      for (var ax = 0;ax < this._reportCustomizationParameters.length;ax ++) {
       if (this._reportCustomizationParameters[ax] == null) {
        xml = xml + '<jns0:reportCustomizationParameters/>';
       } else {
        xml = xml + '<jns0:reportCustomizationParameters>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._reportCustomizationParameters[ax]);
        xml = xml + '</jns0:reportCustomizationParameters>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_evaluateInlineCondition.prototype.serialize = SAWSOAP_evaluateInlineCondition_serialize;

function SAWSOAP_evaluateInlineCondition_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_evaluateInlineCondition();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing conditionXML');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setConditionXML(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportCustomizationParameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'reportCustomizationParameters')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'reportCustomizationParameters'));
     newobject.setReportCustomizationParameters(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}executeSQLQuery
//
function SAWSOAP_executeSQLQuery () {
    this.typeMarker = 'SAWSOAP_executeSQLQuery';
    this._sql = '';
    this._outputFormat = '';
    this._executionOptions = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_executeSQLQuery.prototype.getSql
// element get for sql
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for sql
// setter function is is SAWSOAP_executeSQLQuery.prototype.setSql
//
function SAWSOAP_executeSQLQuery_getSql() { return this._sql;}

SAWSOAP_executeSQLQuery.prototype.getSql = SAWSOAP_executeSQLQuery_getSql;

function SAWSOAP_executeSQLQuery_setSql(value) { this._sql = value;}

SAWSOAP_executeSQLQuery.prototype.setSql = SAWSOAP_executeSQLQuery_setSql;
//
// accessor is SAWSOAP_executeSQLQuery.prototype.getOutputFormat
// element get for outputFormat
// - element type is {urn://oracle.bi.webservices/v6}XMLQueryOutputFormat
// - required element
//
// element set for outputFormat
// setter function is is SAWSOAP_executeSQLQuery.prototype.setOutputFormat
//
function SAWSOAP_executeSQLQuery_getOutputFormat() { return this._outputFormat;}

SAWSOAP_executeSQLQuery.prototype.getOutputFormat = SAWSOAP_executeSQLQuery_getOutputFormat;

function SAWSOAP_executeSQLQuery_setOutputFormat(value) { this._outputFormat = value;}

SAWSOAP_executeSQLQuery.prototype.setOutputFormat = SAWSOAP_executeSQLQuery_setOutputFormat;
//
// accessor is SAWSOAP_executeSQLQuery.prototype.getExecutionOptions
// element get for executionOptions
// - element type is {urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions
// - required element
// - nillable
//
// element set for executionOptions
// setter function is is SAWSOAP_executeSQLQuery.prototype.setExecutionOptions
//
function SAWSOAP_executeSQLQuery_getExecutionOptions() { return this._executionOptions;}

SAWSOAP_executeSQLQuery.prototype.getExecutionOptions = SAWSOAP_executeSQLQuery_getExecutionOptions;

function SAWSOAP_executeSQLQuery_setExecutionOptions(value) { this._executionOptions = value;}

SAWSOAP_executeSQLQuery.prototype.setExecutionOptions = SAWSOAP_executeSQLQuery_setExecutionOptions;
//
// accessor is SAWSOAP_executeSQLQuery.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_executeSQLQuery.prototype.setSessionID
//
function SAWSOAP_executeSQLQuery_getSessionID() { return this._sessionID;}

SAWSOAP_executeSQLQuery.prototype.getSessionID = SAWSOAP_executeSQLQuery_getSessionID;

function SAWSOAP_executeSQLQuery_setSessionID(value) { this._sessionID = value;}

SAWSOAP_executeSQLQuery.prototype.setSessionID = SAWSOAP_executeSQLQuery_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}executeSQLQuery
//
function SAWSOAP_executeSQLQuery_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:sql>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._sql);
     xml = xml + '</jns0:sql>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:outputFormat>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._outputFormat);
     xml = xml + '</jns0:outputFormat>';
    }
    // block for local variables
    {
     if (this._executionOptions == null) {
      xml = xml + '<jns0:executionOptions xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._executionOptions.serialize(cxfjsutils, 'jns0:executionOptions', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_executeSQLQuery.prototype.serialize = SAWSOAP_executeSQLQuery_serialize;

function SAWSOAP_executeSQLQuery_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_executeSQLQuery();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sql');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSql(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing outputFormat');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOutputFormat(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing executionOptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_XMLQueryExecutionOptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setExecutionOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getMembersResult
//
function SAWSOAP_getMembersResult () {
    this.typeMarker = 'SAWSOAP_getMembersResult';
    this._account = [];
}

//
// accessor is SAWSOAP_getMembersResult.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for account
// setter function is is SAWSOAP_getMembersResult.prototype.setAccount
//
function SAWSOAP_getMembersResult_getAccount() { return this._account;}

SAWSOAP_getMembersResult.prototype.getAccount = SAWSOAP_getMembersResult_getAccount;

function SAWSOAP_getMembersResult_setAccount(value) { this._account = value;}

SAWSOAP_getMembersResult.prototype.setAccount = SAWSOAP_getMembersResult_setAccount;
//
// Serialize {urn://oracle.bi.webservices/v6}getMembersResult
//
function SAWSOAP_getMembersResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._account != null) {
      for (var ax = 0;ax < this._account.length;ax ++) {
       if (this._account[ax] == null) {
        xml = xml + '<jns0:account/>';
       } else {
        xml = xml + this._account[ax].serialize(cxfjsutils, 'jns0:account', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getMembersResult.prototype.serialize = SAWSOAP_getMembersResult_serialize;

function SAWSOAP_getMembersResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getMembersResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account'));
     newobject.setAccount(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getSessionVariablesResult
//
function SAWSOAP_getSessionVariablesResult () {
    this.typeMarker = 'SAWSOAP_getSessionVariablesResult';
    this._return = [];
}

//
// accessor is SAWSOAP_getSessionVariablesResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
// - nillable
//
// element set for return
// setter function is is SAWSOAP_getSessionVariablesResult.prototype.setReturn
//
function SAWSOAP_getSessionVariablesResult_getReturn() { return this._return;}

SAWSOAP_getSessionVariablesResult.prototype.getReturn = SAWSOAP_getSessionVariablesResult_getReturn;

function SAWSOAP_getSessionVariablesResult_setReturn(value) { this._return = value;}

SAWSOAP_getSessionVariablesResult.prototype.setReturn = SAWSOAP_getSessionVariablesResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getSessionVariablesResult
//
function SAWSOAP_getSessionVariablesResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<jns0:return xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<jns0:return>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._return[ax]);
        xml = xml + '</jns0:return>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getSessionVariablesResult.prototype.serialize = SAWSOAP_getSessionVariablesResult_serialize;

function SAWSOAP_getSessionVariablesResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getSessionVariablesResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPromptedColumnsResult
//
function SAWSOAP_getPromptedColumnsResult () {
    this.typeMarker = 'SAWSOAP_getPromptedColumnsResult';
    this._ColumnInfo = null;
}

//
// accessor is SAWSOAP_getPromptedColumnsResult.prototype.getColumnInfo
// element get for ColumnInfo
// - element type is {urn://oracle.bi.webservices/v6}PromptedColumnInfo
// - required element
//
// element set for ColumnInfo
// setter function is is SAWSOAP_getPromptedColumnsResult.prototype.setColumnInfo
//
function SAWSOAP_getPromptedColumnsResult_getColumnInfo() { return this._ColumnInfo;}

SAWSOAP_getPromptedColumnsResult.prototype.getColumnInfo = SAWSOAP_getPromptedColumnsResult_getColumnInfo;

function SAWSOAP_getPromptedColumnsResult_setColumnInfo(value) { this._ColumnInfo = value;}

SAWSOAP_getPromptedColumnsResult.prototype.setColumnInfo = SAWSOAP_getPromptedColumnsResult_setColumnInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}getPromptedColumnsResult
//
function SAWSOAP_getPromptedColumnsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._ColumnInfo.serialize(cxfjsutils, 'jns0:ColumnInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPromptedColumnsResult.prototype.serialize = SAWSOAP_getPromptedColumnsResult_serialize;

function SAWSOAP_getPromptedColumnsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPromptedColumnsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ColumnInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_PromptedColumnInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setColumnInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}import
//
function SAWSOAP_import () {
    this.typeMarker = 'SAWSOAP_import';
    this._filename = '';
    this._flag = '';
    this._lastPurgedLog = '';
    this._updateReplicationLog = '';
    this._returnErrors = '';
    this._filter = null;
    this._pathMap = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_import.prototype.getFilename
// element get for filename
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for filename
// setter function is is SAWSOAP_import.prototype.setFilename
//
function SAWSOAP_import_getFilename() { return this._filename;}

SAWSOAP_import.prototype.getFilename = SAWSOAP_import_getFilename;

function SAWSOAP_import_setFilename(value) { this._filename = value;}

SAWSOAP_import.prototype.setFilename = SAWSOAP_import_setFilename;
//
// accessor is SAWSOAP_import.prototype.getFlag
// element get for flag
// - element type is {urn://oracle.bi.webservices/v6}ImportFlags
// - required element
//
// element set for flag
// setter function is is SAWSOAP_import.prototype.setFlag
//
function SAWSOAP_import_getFlag() { return this._flag;}

SAWSOAP_import.prototype.getFlag = SAWSOAP_import_getFlag;

function SAWSOAP_import_setFlag(value) { this._flag = value;}

SAWSOAP_import.prototype.setFlag = SAWSOAP_import_setFlag;
//
// accessor is SAWSOAP_import.prototype.getLastPurgedLog
// element get for lastPurgedLog
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for lastPurgedLog
// setter function is is SAWSOAP_import.prototype.setLastPurgedLog
//
function SAWSOAP_import_getLastPurgedLog() { return this._lastPurgedLog;}

SAWSOAP_import.prototype.getLastPurgedLog = SAWSOAP_import_getLastPurgedLog;

function SAWSOAP_import_setLastPurgedLog(value) { this._lastPurgedLog = value;}

SAWSOAP_import.prototype.setLastPurgedLog = SAWSOAP_import_setLastPurgedLog;
//
// accessor is SAWSOAP_import.prototype.getUpdateReplicationLog
// element get for updateReplicationLog
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for updateReplicationLog
// setter function is is SAWSOAP_import.prototype.setUpdateReplicationLog
//
function SAWSOAP_import_getUpdateReplicationLog() { return this._updateReplicationLog;}

SAWSOAP_import.prototype.getUpdateReplicationLog = SAWSOAP_import_getUpdateReplicationLog;

function SAWSOAP_import_setUpdateReplicationLog(value) { this._updateReplicationLog = value;}

SAWSOAP_import.prototype.setUpdateReplicationLog = SAWSOAP_import_setUpdateReplicationLog;
//
// accessor is SAWSOAP_import.prototype.getReturnErrors
// element get for returnErrors
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for returnErrors
// setter function is is SAWSOAP_import.prototype.setReturnErrors
//
function SAWSOAP_import_getReturnErrors() { return this._returnErrors;}

SAWSOAP_import.prototype.getReturnErrors = SAWSOAP_import_getReturnErrors;

function SAWSOAP_import_setReturnErrors(value) { this._returnErrors = value;}

SAWSOAP_import.prototype.setReturnErrors = SAWSOAP_import_setReturnErrors;
//
// accessor is SAWSOAP_import.prototype.getFilter
// element get for filter
// - element type is {urn://oracle.bi.webservices/v6}CatalogItemsFilter
// - required element
// - nillable
//
// element set for filter
// setter function is is SAWSOAP_import.prototype.setFilter
//
function SAWSOAP_import_getFilter() { return this._filter;}

SAWSOAP_import.prototype.getFilter = SAWSOAP_import_getFilter;

function SAWSOAP_import_setFilter(value) { this._filter = value;}

SAWSOAP_import.prototype.setFilter = SAWSOAP_import_setFilter;
//
// accessor is SAWSOAP_import.prototype.getPathMap
// element get for pathMap
// - element type is {urn://oracle.bi.webservices/v6}PathMap
// - required element
// - nillable
//
// element set for pathMap
// setter function is is SAWSOAP_import.prototype.setPathMap
//
function SAWSOAP_import_getPathMap() { return this._pathMap;}

SAWSOAP_import.prototype.getPathMap = SAWSOAP_import_getPathMap;

function SAWSOAP_import_setPathMap(value) { this._pathMap = value;}

SAWSOAP_import.prototype.setPathMap = SAWSOAP_import_setPathMap;
//
// accessor is SAWSOAP_import.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_import.prototype.setSessionID
//
function SAWSOAP_import_getSessionID() { return this._sessionID;}

SAWSOAP_import.prototype.getSessionID = SAWSOAP_import_getSessionID;

function SAWSOAP_import_setSessionID(value) { this._sessionID = value;}

SAWSOAP_import.prototype.setSessionID = SAWSOAP_import_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}import
//
function SAWSOAP_import_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:filename>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filename);
     xml = xml + '</jns0:filename>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flag>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flag);
     xml = xml + '</jns0:flag>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:lastPurgedLog>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._lastPurgedLog);
     xml = xml + '</jns0:lastPurgedLog>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:updateReplicationLog>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._updateReplicationLog);
     xml = xml + '</jns0:updateReplicationLog>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:returnErrors>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._returnErrors);
     xml = xml + '</jns0:returnErrors>';
    }
    // block for local variables
    {
     if (this._filter == null) {
      xml = xml + '<jns0:filter xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._filter.serialize(cxfjsutils, 'jns0:filter', null);
     }
    }
    // block for local variables
    {
     if (this._pathMap == null) {
      xml = xml + '<jns0:pathMap xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._pathMap.serialize(cxfjsutils, 'jns0:pathMap', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_import.prototype.serialize = SAWSOAP_import_serialize;

function SAWSOAP_import_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_import();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filename');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFilename(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flag');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFlag(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing lastPurgedLog');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLastPurgedLog(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing updateReplicationLog');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setUpdateReplicationLog(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing returnErrors');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setReturnErrors(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_CatalogItemsFilter_deserialize(cxfjsutils, curElement);
    }
    newobject.setFilter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathMap');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_PathMap_deserialize(cxfjsutils, curElement);
    }
    newobject.setPathMap(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getJobInfo
//
function SAWSOAP_getJobInfo () {
    this.typeMarker = 'SAWSOAP_getJobInfo';
    this._jobID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getJobInfo.prototype.getJobID
// element get for jobID
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for jobID
// setter function is is SAWSOAP_getJobInfo.prototype.setJobID
//
function SAWSOAP_getJobInfo_getJobID() { return this._jobID;}

SAWSOAP_getJobInfo.prototype.getJobID = SAWSOAP_getJobInfo_getJobID;

function SAWSOAP_getJobInfo_setJobID(value) { this._jobID = value;}

SAWSOAP_getJobInfo.prototype.setJobID = SAWSOAP_getJobInfo_setJobID;
//
// accessor is SAWSOAP_getJobInfo.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_getJobInfo.prototype.setSessionID
//
function SAWSOAP_getJobInfo_getSessionID() { return this._sessionID;}

SAWSOAP_getJobInfo.prototype.getSessionID = SAWSOAP_getJobInfo_getSessionID;

function SAWSOAP_getJobInfo_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getJobInfo.prototype.setSessionID = SAWSOAP_getJobInfo_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getJobInfo
//
function SAWSOAP_getJobInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobID);
     xml = xml + '</jns0:jobID>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getJobInfo.prototype.serialize = SAWSOAP_getJobInfo_serialize;

function SAWSOAP_getJobInfo_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getJobInfo();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}leaveGroups
//
function SAWSOAP_leaveGroups () {
    this.typeMarker = 'SAWSOAP_leaveGroups';
    this._group = [];
    this._member = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_leaveGroups.prototype.getGroup
// element get for group
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for group
// setter function is is SAWSOAP_leaveGroups.prototype.setGroup
//
function SAWSOAP_leaveGroups_getGroup() { return this._group;}

SAWSOAP_leaveGroups.prototype.getGroup = SAWSOAP_leaveGroups_getGroup;

function SAWSOAP_leaveGroups_setGroup(value) { this._group = value;}

SAWSOAP_leaveGroups.prototype.setGroup = SAWSOAP_leaveGroups_setGroup;
//
// accessor is SAWSOAP_leaveGroups.prototype.getMember
// element get for member
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for member
// setter function is is SAWSOAP_leaveGroups.prototype.setMember
//
function SAWSOAP_leaveGroups_getMember() { return this._member;}

SAWSOAP_leaveGroups.prototype.getMember = SAWSOAP_leaveGroups_getMember;

function SAWSOAP_leaveGroups_setMember(value) { this._member = value;}

SAWSOAP_leaveGroups.prototype.setMember = SAWSOAP_leaveGroups_setMember;
//
// accessor is SAWSOAP_leaveGroups.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_leaveGroups.prototype.setSessionID
//
function SAWSOAP_leaveGroups_getSessionID() { return this._sessionID;}

SAWSOAP_leaveGroups.prototype.getSessionID = SAWSOAP_leaveGroups_getSessionID;

function SAWSOAP_leaveGroups_setSessionID(value) { this._sessionID = value;}

SAWSOAP_leaveGroups.prototype.setSessionID = SAWSOAP_leaveGroups_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}leaveGroups
//
function SAWSOAP_leaveGroups_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._group != null) {
      for (var ax = 0;ax < this._group.length;ax ++) {
       if (this._group[ax] == null) {
        xml = xml + '<jns0:group/>';
       } else {
        xml = xml + this._group[ax].serialize(cxfjsutils, 'jns0:group', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._member != null) {
      for (var ax = 0;ax < this._member.length;ax ++) {
       if (this._member[ax] == null) {
        xml = xml + '<jns0:member/>';
       } else {
        xml = xml + this._member[ax].serialize(cxfjsutils, 'jns0:member', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_leaveGroups.prototype.serialize = SAWSOAP_leaveGroups_serialize;

function SAWSOAP_leaveGroups_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_leaveGroups();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group'));
     newobject.setGroup(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing member');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member'));
     newobject.setMember(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}moveIBot
//
function SAWSOAP_moveIBot () {
    this.typeMarker = 'SAWSOAP_moveIBot';
    this._fromPath = '';
    this._toPath = '';
    this._resolveLinks = '';
    this._allowOverwrite = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_moveIBot.prototype.getFromPath
// element get for fromPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for fromPath
// setter function is is SAWSOAP_moveIBot.prototype.setFromPath
//
function SAWSOAP_moveIBot_getFromPath() { return this._fromPath;}

SAWSOAP_moveIBot.prototype.getFromPath = SAWSOAP_moveIBot_getFromPath;

function SAWSOAP_moveIBot_setFromPath(value) { this._fromPath = value;}

SAWSOAP_moveIBot.prototype.setFromPath = SAWSOAP_moveIBot_setFromPath;
//
// accessor is SAWSOAP_moveIBot.prototype.getToPath
// element get for toPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for toPath
// setter function is is SAWSOAP_moveIBot.prototype.setToPath
//
function SAWSOAP_moveIBot_getToPath() { return this._toPath;}

SAWSOAP_moveIBot.prototype.getToPath = SAWSOAP_moveIBot_getToPath;

function SAWSOAP_moveIBot_setToPath(value) { this._toPath = value;}

SAWSOAP_moveIBot.prototype.setToPath = SAWSOAP_moveIBot_setToPath;
//
// accessor is SAWSOAP_moveIBot.prototype.getResolveLinks
// element get for resolveLinks
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for resolveLinks
// setter function is is SAWSOAP_moveIBot.prototype.setResolveLinks
//
function SAWSOAP_moveIBot_getResolveLinks() { return this._resolveLinks;}

SAWSOAP_moveIBot.prototype.getResolveLinks = SAWSOAP_moveIBot_getResolveLinks;

function SAWSOAP_moveIBot_setResolveLinks(value) { this._resolveLinks = value;}

SAWSOAP_moveIBot.prototype.setResolveLinks = SAWSOAP_moveIBot_setResolveLinks;
//
// accessor is SAWSOAP_moveIBot.prototype.getAllowOverwrite
// element get for allowOverwrite
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for allowOverwrite
// setter function is is SAWSOAP_moveIBot.prototype.setAllowOverwrite
//
function SAWSOAP_moveIBot_getAllowOverwrite() { return this._allowOverwrite;}

SAWSOAP_moveIBot.prototype.getAllowOverwrite = SAWSOAP_moveIBot_getAllowOverwrite;

function SAWSOAP_moveIBot_setAllowOverwrite(value) { this._allowOverwrite = value;}

SAWSOAP_moveIBot.prototype.setAllowOverwrite = SAWSOAP_moveIBot_setAllowOverwrite;
//
// accessor is SAWSOAP_moveIBot.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_moveIBot.prototype.setSessionID
//
function SAWSOAP_moveIBot_getSessionID() { return this._sessionID;}

SAWSOAP_moveIBot.prototype.getSessionID = SAWSOAP_moveIBot_getSessionID;

function SAWSOAP_moveIBot_setSessionID(value) { this._sessionID = value;}

SAWSOAP_moveIBot.prototype.setSessionID = SAWSOAP_moveIBot_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}moveIBot
//
function SAWSOAP_moveIBot_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:fromPath>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._fromPath);
     xml = xml + '</jns0:fromPath>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:toPath>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._toPath);
     xml = xml + '</jns0:toPath>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:resolveLinks>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._resolveLinks);
     xml = xml + '</jns0:resolveLinks>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:allowOverwrite>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._allowOverwrite);
     xml = xml + '</jns0:allowOverwrite>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_moveIBot.prototype.serialize = SAWSOAP_moveIBot_serialize;

function SAWSOAP_moveIBot_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_moveIBot();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing fromPath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFromPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing toPath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setToPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resolveLinks');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResolveLinks(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing allowOverwrite');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAllowOverwrite(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteIBot
//
function SAWSOAP_deleteIBot () {
    this.typeMarker = 'SAWSOAP_deleteIBot';
    this._path = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_deleteIBot.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_deleteIBot.prototype.setPath
//
function SAWSOAP_deleteIBot_getPath() { return this._path;}

SAWSOAP_deleteIBot.prototype.getPath = SAWSOAP_deleteIBot_getPath;

function SAWSOAP_deleteIBot_setPath(value) { this._path = value;}

SAWSOAP_deleteIBot.prototype.setPath = SAWSOAP_deleteIBot_setPath;
//
// accessor is SAWSOAP_deleteIBot.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_deleteIBot.prototype.setSessionID
//
function SAWSOAP_deleteIBot_getSessionID() { return this._sessionID;}

SAWSOAP_deleteIBot.prototype.getSessionID = SAWSOAP_deleteIBot_getSessionID;

function SAWSOAP_deleteIBot_setSessionID(value) { this._sessionID = value;}

SAWSOAP_deleteIBot.prototype.setSessionID = SAWSOAP_deleteIBot_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}deleteIBot
//
function SAWSOAP_deleteIBot_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteIBot.prototype.serialize = SAWSOAP_deleteIBot_serialize;

function SAWSOAP_deleteIBot_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteIBot();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}pasteItem2
//
function SAWSOAP_pasteItem2 () {
    this.typeMarker = 'SAWSOAP_pasteItem2';
    this._archive = '';
    this._replacePath = '';
    this._flagACL = 0;
    this._flagOverwrite = 0;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_pasteItem2.prototype.getArchive
// element get for archive
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - required element
//
// element set for archive
// setter function is is SAWSOAP_pasteItem2.prototype.setArchive
//
function SAWSOAP_pasteItem2_getArchive() { return this._archive;}

SAWSOAP_pasteItem2.prototype.getArchive = SAWSOAP_pasteItem2_getArchive;

function SAWSOAP_pasteItem2_setArchive(value) { this._archive = value;}

SAWSOAP_pasteItem2.prototype.setArchive = SAWSOAP_pasteItem2_setArchive;
//
// accessor is SAWSOAP_pasteItem2.prototype.getReplacePath
// element get for replacePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for replacePath
// setter function is is SAWSOAP_pasteItem2.prototype.setReplacePath
//
function SAWSOAP_pasteItem2_getReplacePath() { return this._replacePath;}

SAWSOAP_pasteItem2.prototype.getReplacePath = SAWSOAP_pasteItem2_getReplacePath;

function SAWSOAP_pasteItem2_setReplacePath(value) { this._replacePath = value;}

SAWSOAP_pasteItem2.prototype.setReplacePath = SAWSOAP_pasteItem2_setReplacePath;
//
// accessor is SAWSOAP_pasteItem2.prototype.getFlagACL
// element get for flagACL
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for flagACL
// setter function is is SAWSOAP_pasteItem2.prototype.setFlagACL
//
function SAWSOAP_pasteItem2_getFlagACL() { return this._flagACL;}

SAWSOAP_pasteItem2.prototype.getFlagACL = SAWSOAP_pasteItem2_getFlagACL;

function SAWSOAP_pasteItem2_setFlagACL(value) { this._flagACL = value;}

SAWSOAP_pasteItem2.prototype.setFlagACL = SAWSOAP_pasteItem2_setFlagACL;
//
// accessor is SAWSOAP_pasteItem2.prototype.getFlagOverwrite
// element get for flagOverwrite
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for flagOverwrite
// setter function is is SAWSOAP_pasteItem2.prototype.setFlagOverwrite
//
function SAWSOAP_pasteItem2_getFlagOverwrite() { return this._flagOverwrite;}

SAWSOAP_pasteItem2.prototype.getFlagOverwrite = SAWSOAP_pasteItem2_getFlagOverwrite;

function SAWSOAP_pasteItem2_setFlagOverwrite(value) { this._flagOverwrite = value;}

SAWSOAP_pasteItem2.prototype.setFlagOverwrite = SAWSOAP_pasteItem2_setFlagOverwrite;
//
// accessor is SAWSOAP_pasteItem2.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_pasteItem2.prototype.setSessionID
//
function SAWSOAP_pasteItem2_getSessionID() { return this._sessionID;}

SAWSOAP_pasteItem2.prototype.getSessionID = SAWSOAP_pasteItem2_getSessionID;

function SAWSOAP_pasteItem2_setSessionID(value) { this._sessionID = value;}

SAWSOAP_pasteItem2.prototype.setSessionID = SAWSOAP_pasteItem2_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}pasteItem2
//
function SAWSOAP_pasteItem2_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:archive>';
     xml = xml + cxfjsutils.packageMtom(this._archive);
     xml = xml + '</jns0:archive>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:replacePath>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._replacePath);
     xml = xml + '</jns0:replacePath>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flagACL>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flagACL);
     xml = xml + '</jns0:flagACL>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:flagOverwrite>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flagOverwrite);
     xml = xml + '</jns0:flagOverwrite>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_pasteItem2.prototype.serialize = SAWSOAP_pasteItem2_serialize;

function SAWSOAP_pasteItem2_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_pasteItem2();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing archive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = cxfjsutils.deserializeBase64orMom(curElement);
    }
    newobject.setArchive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing replacePath');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReplacePath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flagACL');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFlagACL(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flagOverwrite');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFlagOverwrite(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteResultSet
//
function SAWSOAP_deleteResultSet () {
    this.typeMarker = 'SAWSOAP_deleteResultSet';
    this._targetLevel = '';
    this._GUIDs = null;
    this._segmentPath = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_deleteResultSet.prototype.getTargetLevel
// element get for targetLevel
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for targetLevel
// setter function is is SAWSOAP_deleteResultSet.prototype.setTargetLevel
//
function SAWSOAP_deleteResultSet_getTargetLevel() { return this._targetLevel;}

SAWSOAP_deleteResultSet.prototype.getTargetLevel = SAWSOAP_deleteResultSet_getTargetLevel;

function SAWSOAP_deleteResultSet_setTargetLevel(value) { this._targetLevel = value;}

SAWSOAP_deleteResultSet.prototype.setTargetLevel = SAWSOAP_deleteResultSet_setTargetLevel;
//
// accessor is SAWSOAP_deleteResultSet.prototype.getGUIDs
// element get for GUIDs
// - element type is {urn://oracle.bi.webservices/v6}arrayOfGUIDs
// - required element
//
// element set for GUIDs
// setter function is is SAWSOAP_deleteResultSet.prototype.setGUIDs
//
function SAWSOAP_deleteResultSet_getGUIDs() { return this._GUIDs;}

SAWSOAP_deleteResultSet.prototype.getGUIDs = SAWSOAP_deleteResultSet_getGUIDs;

function SAWSOAP_deleteResultSet_setGUIDs(value) { this._GUIDs = value;}

SAWSOAP_deleteResultSet.prototype.setGUIDs = SAWSOAP_deleteResultSet_setGUIDs;
//
// accessor is SAWSOAP_deleteResultSet.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_deleteResultSet.prototype.setSegmentPath
//
function SAWSOAP_deleteResultSet_getSegmentPath() { return this._segmentPath;}

SAWSOAP_deleteResultSet.prototype.getSegmentPath = SAWSOAP_deleteResultSet_getSegmentPath;

function SAWSOAP_deleteResultSet_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_deleteResultSet.prototype.setSegmentPath = SAWSOAP_deleteResultSet_setSegmentPath;
//
// accessor is SAWSOAP_deleteResultSet.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_deleteResultSet.prototype.setSessionID
//
function SAWSOAP_deleteResultSet_getSessionID() { return this._sessionID;}

SAWSOAP_deleteResultSet.prototype.getSessionID = SAWSOAP_deleteResultSet_getSessionID;

function SAWSOAP_deleteResultSet_setSessionID(value) { this._sessionID = value;}

SAWSOAP_deleteResultSet.prototype.setSessionID = SAWSOAP_deleteResultSet_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}deleteResultSet
//
function SAWSOAP_deleteResultSet_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:targetLevel>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._targetLevel);
     xml = xml + '</jns0:targetLevel>';
    }
    // block for local variables
    {
     xml = xml + this._GUIDs.serialize(cxfjsutils, 'jns0:GUIDs', null);
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteResultSet.prototype.serialize = SAWSOAP_deleteResultSet_serialize;

function SAWSOAP_deleteResultSet_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteResultSet();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing targetLevel');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTargetLevel(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing GUIDs');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_arrayOfGUIDs_deserialize(cxfjsutils, curElement);
    }
    newobject.setGUIDs(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}cancelJobResult
//
function SAWSOAP_cancelJobResult () {
    this.typeMarker = 'SAWSOAP_cancelJobResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_cancelJobResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_cancelJobResult.prototype.setJobInfo
//
function SAWSOAP_cancelJobResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_cancelJobResult.prototype.getJobInfo = SAWSOAP_cancelJobResult_getJobInfo;

function SAWSOAP_cancelJobResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_cancelJobResult.prototype.setJobInfo = SAWSOAP_cancelJobResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}cancelJobResult
//
function SAWSOAP_cancelJobResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_cancelJobResult.prototype.serialize = SAWSOAP_cancelJobResult_serialize;

function SAWSOAP_cancelJobResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_cancelJobResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}markForReplication
//
function SAWSOAP_markForReplication () {
    this.typeMarker = 'SAWSOAP_markForReplication';
    this._item = '';
    this._replicate = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_markForReplication.prototype.getItem
// element get for item
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for item
// setter function is is SAWSOAP_markForReplication.prototype.setItem
//
function SAWSOAP_markForReplication_getItem() { return this._item;}

SAWSOAP_markForReplication.prototype.getItem = SAWSOAP_markForReplication_getItem;

function SAWSOAP_markForReplication_setItem(value) { this._item = value;}

SAWSOAP_markForReplication.prototype.setItem = SAWSOAP_markForReplication_setItem;
//
// accessor is SAWSOAP_markForReplication.prototype.getReplicate
// element get for replicate
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for replicate
// setter function is is SAWSOAP_markForReplication.prototype.setReplicate
//
function SAWSOAP_markForReplication_getReplicate() { return this._replicate;}

SAWSOAP_markForReplication.prototype.getReplicate = SAWSOAP_markForReplication_getReplicate;

function SAWSOAP_markForReplication_setReplicate(value) { this._replicate = value;}

SAWSOAP_markForReplication.prototype.setReplicate = SAWSOAP_markForReplication_setReplicate;
//
// accessor is SAWSOAP_markForReplication.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_markForReplication.prototype.setSessionID
//
function SAWSOAP_markForReplication_getSessionID() { return this._sessionID;}

SAWSOAP_markForReplication.prototype.getSessionID = SAWSOAP_markForReplication_getSessionID;

function SAWSOAP_markForReplication_setSessionID(value) { this._sessionID = value;}

SAWSOAP_markForReplication.prototype.setSessionID = SAWSOAP_markForReplication_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}markForReplication
//
function SAWSOAP_markForReplication_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:item>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._item);
     xml = xml + '</jns0:item>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:replicate>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._replicate);
     xml = xml + '</jns0:replicate>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_markForReplication.prototype.serialize = SAWSOAP_markForReplication_serialize;

function SAWSOAP_markForReplication_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_markForReplication();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing item');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setItem(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing replicate');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setReplicate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}removeFolder
//
function SAWSOAP_removeFolder () {
    this.typeMarker = 'SAWSOAP_removeFolder';
    this._path = '';
    this._recursive = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_removeFolder.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_removeFolder.prototype.setPath
//
function SAWSOAP_removeFolder_getPath() { return this._path;}

SAWSOAP_removeFolder.prototype.getPath = SAWSOAP_removeFolder_getPath;

function SAWSOAP_removeFolder_setPath(value) { this._path = value;}

SAWSOAP_removeFolder.prototype.setPath = SAWSOAP_removeFolder_setPath;
//
// accessor is SAWSOAP_removeFolder.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_removeFolder.prototype.setRecursive
//
function SAWSOAP_removeFolder_getRecursive() { return this._recursive;}

SAWSOAP_removeFolder.prototype.getRecursive = SAWSOAP_removeFolder_getRecursive;

function SAWSOAP_removeFolder_setRecursive(value) { this._recursive = value;}

SAWSOAP_removeFolder.prototype.setRecursive = SAWSOAP_removeFolder_setRecursive;
//
// accessor is SAWSOAP_removeFolder.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_removeFolder.prototype.setSessionID
//
function SAWSOAP_removeFolder_getSessionID() { return this._sessionID;}

SAWSOAP_removeFolder.prototype.getSessionID = SAWSOAP_removeFolder_getSessionID;

function SAWSOAP_removeFolder_setSessionID(value) { this._sessionID = value;}

SAWSOAP_removeFolder.prototype.setSessionID = SAWSOAP_removeFolder_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}removeFolder
//
function SAWSOAP_removeFolder_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_removeFolder.prototype.serialize = SAWSOAP_removeFolder_serialize;

function SAWSOAP_removeFolder_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_removeFolder();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}clearQueryCache
//
function SAWSOAP_clearQueryCache () {
    this.typeMarker = 'SAWSOAP_clearQueryCache';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_clearQueryCache.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_clearQueryCache.prototype.setSessionID
//
function SAWSOAP_clearQueryCache_getSessionID() { return this._sessionID;}

SAWSOAP_clearQueryCache.prototype.getSessionID = SAWSOAP_clearQueryCache_getSessionID;

function SAWSOAP_clearQueryCache_setSessionID(value) { this._sessionID = value;}

SAWSOAP_clearQueryCache.prototype.setSessionID = SAWSOAP_clearQueryCache_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}clearQueryCache
//
function SAWSOAP_clearQueryCache_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_clearQueryCache.prototype.serialize = SAWSOAP_clearQueryCache_serialize;

function SAWSOAP_clearQueryCache_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_clearQueryCache();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}updateCatalogItemACL
//
function SAWSOAP_updateCatalogItemACL () {
    this.typeMarker = 'SAWSOAP_updateCatalogItemACL';
    this._path = [];
    this._acl = null;
    this._options = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_updateCatalogItemACL.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for path
// setter function is is SAWSOAP_updateCatalogItemACL.prototype.setPath
//
function SAWSOAP_updateCatalogItemACL_getPath() { return this._path;}

SAWSOAP_updateCatalogItemACL.prototype.getPath = SAWSOAP_updateCatalogItemACL_getPath;

function SAWSOAP_updateCatalogItemACL_setPath(value) { this._path = value;}

SAWSOAP_updateCatalogItemACL.prototype.setPath = SAWSOAP_updateCatalogItemACL_setPath;
//
// accessor is SAWSOAP_updateCatalogItemACL.prototype.getAcl
// element get for acl
// - element type is {urn://oracle.bi.webservices/v6}ACL
// - required element
//
// element set for acl
// setter function is is SAWSOAP_updateCatalogItemACL.prototype.setAcl
//
function SAWSOAP_updateCatalogItemACL_getAcl() { return this._acl;}

SAWSOAP_updateCatalogItemACL.prototype.getAcl = SAWSOAP_updateCatalogItemACL_getAcl;

function SAWSOAP_updateCatalogItemACL_setAcl(value) { this._acl = value;}

SAWSOAP_updateCatalogItemACL.prototype.setAcl = SAWSOAP_updateCatalogItemACL_setAcl;
//
// accessor is SAWSOAP_updateCatalogItemACL.prototype.getOptions
// element get for options
// - element type is {urn://oracle.bi.webservices/v6}UpdateCatalogItemACLParams
// - required element
//
// element set for options
// setter function is is SAWSOAP_updateCatalogItemACL.prototype.setOptions
//
function SAWSOAP_updateCatalogItemACL_getOptions() { return this._options;}

SAWSOAP_updateCatalogItemACL.prototype.getOptions = SAWSOAP_updateCatalogItemACL_getOptions;

function SAWSOAP_updateCatalogItemACL_setOptions(value) { this._options = value;}

SAWSOAP_updateCatalogItemACL.prototype.setOptions = SAWSOAP_updateCatalogItemACL_setOptions;
//
// accessor is SAWSOAP_updateCatalogItemACL.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_updateCatalogItemACL.prototype.setSessionID
//
function SAWSOAP_updateCatalogItemACL_getSessionID() { return this._sessionID;}

SAWSOAP_updateCatalogItemACL.prototype.getSessionID = SAWSOAP_updateCatalogItemACL_getSessionID;

function SAWSOAP_updateCatalogItemACL_setSessionID(value) { this._sessionID = value;}

SAWSOAP_updateCatalogItemACL.prototype.setSessionID = SAWSOAP_updateCatalogItemACL_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}updateCatalogItemACL
//
function SAWSOAP_updateCatalogItemACL_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._path != null) {
      for (var ax = 0;ax < this._path.length;ax ++) {
       if (this._path[ax] == null) {
        xml = xml + '<jns0:path/>';
       } else {
        xml = xml + '<jns0:path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._path[ax]);
        xml = xml + '</jns0:path>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + this._acl.serialize(cxfjsutils, 'jns0:acl', null);
    }
    // block for local variables
    {
     xml = xml + this._options.serialize(cxfjsutils, 'jns0:options', null);
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_updateCatalogItemACL.prototype.serialize = SAWSOAP_updateCatalogItemACL_serialize;

function SAWSOAP_updateCatalogItemACL_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_updateCatalogItemACL();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path'));
     newobject.setPath(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing acl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ACL_deserialize(cxfjsutils, curElement);
    }
    newobject.setAcl(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing options');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_UpdateCatalogItemACLParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getMembers
//
function SAWSOAP_getMembers () {
    this.typeMarker = 'SAWSOAP_getMembers';
    this._group = [];
    this._expandGroups = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getMembers.prototype.getGroup
// element get for group
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for group
// setter function is is SAWSOAP_getMembers.prototype.setGroup
//
function SAWSOAP_getMembers_getGroup() { return this._group;}

SAWSOAP_getMembers.prototype.getGroup = SAWSOAP_getMembers_getGroup;

function SAWSOAP_getMembers_setGroup(value) { this._group = value;}

SAWSOAP_getMembers.prototype.setGroup = SAWSOAP_getMembers_setGroup;
//
// accessor is SAWSOAP_getMembers.prototype.getExpandGroups
// element get for expandGroups
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for expandGroups
// setter function is is SAWSOAP_getMembers.prototype.setExpandGroups
//
function SAWSOAP_getMembers_getExpandGroups() { return this._expandGroups;}

SAWSOAP_getMembers.prototype.getExpandGroups = SAWSOAP_getMembers_getExpandGroups;

function SAWSOAP_getMembers_setExpandGroups(value) { this._expandGroups = value;}

SAWSOAP_getMembers.prototype.setExpandGroups = SAWSOAP_getMembers_setExpandGroups;
//
// accessor is SAWSOAP_getMembers.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getMembers.prototype.setSessionID
//
function SAWSOAP_getMembers_getSessionID() { return this._sessionID;}

SAWSOAP_getMembers.prototype.getSessionID = SAWSOAP_getMembers_getSessionID;

function SAWSOAP_getMembers_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getMembers.prototype.setSessionID = SAWSOAP_getMembers_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getMembers
//
function SAWSOAP_getMembers_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._group != null) {
      for (var ax = 0;ax < this._group.length;ax ++) {
       if (this._group[ax] == null) {
        xml = xml + '<jns0:group/>';
       } else {
        xml = xml + this._group[ax].serialize(cxfjsutils, 'jns0:group', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._expandGroups != null) {
      xml = xml + '<jns0:expandGroups>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._expandGroups);
      xml = xml + '</jns0:expandGroups>';
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getMembers.prototype.serialize = SAWSOAP_getMembers_serialize;

function SAWSOAP_getMembers_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getMembers();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group'));
     newobject.setGroup(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing expandGroups');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'expandGroups')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setExpandGroups(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}deleteIBotResult
//
function SAWSOAP_deleteIBotResult () {
    this.typeMarker = 'SAWSOAP_deleteIBotResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}deleteIBotResult
//
function SAWSOAP_deleteIBotResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_deleteIBotResult.prototype.serialize = SAWSOAP_deleteIBotResult_serialize;

function SAWSOAP_deleteIBotResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_deleteIBotResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}isMemberResult
//
function SAWSOAP_isMemberResult () {
    this.typeMarker = 'SAWSOAP_isMemberResult';
    this._result = '';
}

//
// accessor is SAWSOAP_isMemberResult.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for result
// setter function is is SAWSOAP_isMemberResult.prototype.setResult
//
function SAWSOAP_isMemberResult_getResult() { return this._result;}

SAWSOAP_isMemberResult.prototype.getResult = SAWSOAP_isMemberResult_getResult;

function SAWSOAP_isMemberResult_setResult(value) { this._result = value;}

SAWSOAP_isMemberResult.prototype.setResult = SAWSOAP_isMemberResult_setResult;
//
// Serialize {urn://oracle.bi.webservices/v6}isMemberResult
//
function SAWSOAP_isMemberResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:result>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._result);
     xml = xml + '</jns0:result>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_isMemberResult.prototype.serialize = SAWSOAP_isMemberResult_serialize;

function SAWSOAP_isMemberResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_isMemberResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeListFiles
//
function SAWSOAP_writeListFiles () {
    this.typeMarker = 'SAWSOAP_writeListFiles';
    this._report = null;
    this._reportParams = null;
    this._segmentPath = null;
    this._treeNodePath = null;
    this._segmentationOptions = null;
    this._filesystem = '';
    this._timeout = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_writeListFiles.prototype.getReport
// element get for report
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - optional element
//
// element set for report
// setter function is is SAWSOAP_writeListFiles.prototype.setReport
//
function SAWSOAP_writeListFiles_getReport() { return this._report;}

SAWSOAP_writeListFiles.prototype.getReport = SAWSOAP_writeListFiles_getReport;

function SAWSOAP_writeListFiles_setReport(value) { this._report = value;}

SAWSOAP_writeListFiles.prototype.setReport = SAWSOAP_writeListFiles_setReport;
//
// accessor is SAWSOAP_writeListFiles.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - optional element
//
// element set for reportParams
// setter function is is SAWSOAP_writeListFiles.prototype.setReportParams
//
function SAWSOAP_writeListFiles_getReportParams() { return this._reportParams;}

SAWSOAP_writeListFiles.prototype.getReportParams = SAWSOAP_writeListFiles_getReportParams;

function SAWSOAP_writeListFiles_setReportParams(value) { this._reportParams = value;}

SAWSOAP_writeListFiles.prototype.setReportParams = SAWSOAP_writeListFiles_setReportParams;
//
// accessor is SAWSOAP_writeListFiles.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_writeListFiles.prototype.setSegmentPath
//
function SAWSOAP_writeListFiles_getSegmentPath() { return this._segmentPath;}

SAWSOAP_writeListFiles.prototype.getSegmentPath = SAWSOAP_writeListFiles_getSegmentPath;

function SAWSOAP_writeListFiles_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_writeListFiles.prototype.setSegmentPath = SAWSOAP_writeListFiles_setSegmentPath;
//
// accessor is SAWSOAP_writeListFiles.prototype.getTreeNodePath
// element get for treeNodePath
// - element type is {urn://oracle.bi.webservices/v6}TreeNodePath
// - optional element
//
// element set for treeNodePath
// setter function is is SAWSOAP_writeListFiles.prototype.setTreeNodePath
//
function SAWSOAP_writeListFiles_getTreeNodePath() { return this._treeNodePath;}

SAWSOAP_writeListFiles.prototype.getTreeNodePath = SAWSOAP_writeListFiles_getTreeNodePath;

function SAWSOAP_writeListFiles_setTreeNodePath(value) { this._treeNodePath = value;}

SAWSOAP_writeListFiles.prototype.setTreeNodePath = SAWSOAP_writeListFiles_setTreeNodePath;
//
// accessor is SAWSOAP_writeListFiles.prototype.getSegmentationOptions
// element get for segmentationOptions
// - element type is {urn://oracle.bi.webservices/v6}SegmentationOptions
// - optional element
//
// element set for segmentationOptions
// setter function is is SAWSOAP_writeListFiles.prototype.setSegmentationOptions
//
function SAWSOAP_writeListFiles_getSegmentationOptions() { return this._segmentationOptions;}

SAWSOAP_writeListFiles.prototype.getSegmentationOptions = SAWSOAP_writeListFiles_getSegmentationOptions;

function SAWSOAP_writeListFiles_setSegmentationOptions(value) { this._segmentationOptions = value;}

SAWSOAP_writeListFiles.prototype.setSegmentationOptions = SAWSOAP_writeListFiles_setSegmentationOptions;
//
// accessor is SAWSOAP_writeListFiles.prototype.getFilesystem
// element get for filesystem
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for filesystem
// setter function is is SAWSOAP_writeListFiles.prototype.setFilesystem
//
function SAWSOAP_writeListFiles_getFilesystem() { return this._filesystem;}

SAWSOAP_writeListFiles.prototype.getFilesystem = SAWSOAP_writeListFiles_getFilesystem;

function SAWSOAP_writeListFiles_setFilesystem(value) { this._filesystem = value;}

SAWSOAP_writeListFiles.prototype.setFilesystem = SAWSOAP_writeListFiles_setFilesystem;
//
// accessor is SAWSOAP_writeListFiles.prototype.getTimeout
// element get for timeout
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for timeout
// setter function is is SAWSOAP_writeListFiles.prototype.setTimeout
//
function SAWSOAP_writeListFiles_getTimeout() { return this._timeout;}

SAWSOAP_writeListFiles.prototype.getTimeout = SAWSOAP_writeListFiles_getTimeout;

function SAWSOAP_writeListFiles_setTimeout(value) { this._timeout = value;}

SAWSOAP_writeListFiles.prototype.setTimeout = SAWSOAP_writeListFiles_setTimeout;
//
// accessor is SAWSOAP_writeListFiles.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_writeListFiles.prototype.setSessionID
//
function SAWSOAP_writeListFiles_getSessionID() { return this._sessionID;}

SAWSOAP_writeListFiles.prototype.getSessionID = SAWSOAP_writeListFiles_getSessionID;

function SAWSOAP_writeListFiles_setSessionID(value) { this._sessionID = value;}

SAWSOAP_writeListFiles.prototype.setSessionID = SAWSOAP_writeListFiles_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}writeListFiles
//
function SAWSOAP_writeListFiles_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._report != null) {
      xml = xml + this._report.serialize(cxfjsutils, 'jns0:report', null);
     }
    }
    // block for local variables
    {
     if (this._reportParams != null) {
      xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
     }
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treeNodePath != null) {
      xml = xml + this._treeNodePath.serialize(cxfjsutils, 'jns0:treeNodePath', null);
     }
    }
    // block for local variables
    {
     if (this._segmentationOptions != null) {
      xml = xml + this._segmentationOptions.serialize(cxfjsutils, 'jns0:segmentationOptions', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:filesystem>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filesystem);
     xml = xml + '</jns0:filesystem>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:timeout>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._timeout);
     xml = xml + '</jns0:timeout>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeListFiles.prototype.serialize = SAWSOAP_writeListFiles_serialize;

function SAWSOAP_writeListFiles_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeListFiles();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing report');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'report')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
     }
     newobject.setReport(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'reportParams')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
     }
     newobject.setReportParams(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treeNodePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treeNodePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_TreeNodePath_deserialize(cxfjsutils, curElement);
     }
     newobject.setTreeNodePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentationOptions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentationOptions')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_SegmentationOptions_deserialize(cxfjsutils, curElement);
     }
     newobject.setSegmentationOptions(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filesystem');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFilesystem(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing timeout');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTimeout(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReport
//
function SAWSOAP_getHtmlForPageWithOneReport () {
    this.typeMarker = 'SAWSOAP_getHtmlForPageWithOneReport';
    this._reportID = '';
    this._report = null;
    this._reportViewName = null;
    this._reportParams = null;
    this._reportOptions = null;
    this._pageParams = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportID
// element get for reportID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for reportID
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportID
//
function SAWSOAP_getHtmlForPageWithOneReport_getReportID() { return this._reportID;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportID = SAWSOAP_getHtmlForPageWithOneReport_getReportID;

function SAWSOAP_getHtmlForPageWithOneReport_setReportID(value) { this._reportID = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportID = SAWSOAP_getHtmlForPageWithOneReport_setReportID;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getReport
// element get for report
// - element type is {urn://oracle.bi.webservices/v6}ReportRef
// - required element
//
// element set for report
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setReport
//
function SAWSOAP_getHtmlForPageWithOneReport_getReport() { return this._report;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getReport = SAWSOAP_getHtmlForPageWithOneReport_getReport;

function SAWSOAP_getHtmlForPageWithOneReport_setReport(value) { this._report = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setReport = SAWSOAP_getHtmlForPageWithOneReport_setReport;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportViewName
// element get for reportViewName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for reportViewName
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportViewName
//
function SAWSOAP_getHtmlForPageWithOneReport_getReportViewName() { return this._reportViewName;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportViewName = SAWSOAP_getHtmlForPageWithOneReport_getReportViewName;

function SAWSOAP_getHtmlForPageWithOneReport_setReportViewName(value) { this._reportViewName = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportViewName = SAWSOAP_getHtmlForPageWithOneReport_setReportViewName;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportParams
// element get for reportParams
// - element type is {urn://oracle.bi.webservices/v6}ReportParams
// - required element
// - nillable
//
// element set for reportParams
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportParams
//
function SAWSOAP_getHtmlForPageWithOneReport_getReportParams() { return this._reportParams;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportParams = SAWSOAP_getHtmlForPageWithOneReport_getReportParams;

function SAWSOAP_getHtmlForPageWithOneReport_setReportParams(value) { this._reportParams = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportParams = SAWSOAP_getHtmlForPageWithOneReport_setReportParams;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportOptions
// element get for reportOptions
// - element type is {urn://oracle.bi.webservices/v6}ReportHTMLOptions
// - required element
// - nillable
//
// element set for reportOptions
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportOptions
//
function SAWSOAP_getHtmlForPageWithOneReport_getReportOptions() { return this._reportOptions;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getReportOptions = SAWSOAP_getHtmlForPageWithOneReport_getReportOptions;

function SAWSOAP_getHtmlForPageWithOneReport_setReportOptions(value) { this._reportOptions = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setReportOptions = SAWSOAP_getHtmlForPageWithOneReport_setReportOptions;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getPageParams
// element get for pageParams
// - element type is {urn://oracle.bi.webservices/v6}StartPageParams
// - required element
// - nillable
//
// element set for pageParams
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setPageParams
//
function SAWSOAP_getHtmlForPageWithOneReport_getPageParams() { return this._pageParams;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getPageParams = SAWSOAP_getHtmlForPageWithOneReport_getPageParams;

function SAWSOAP_getHtmlForPageWithOneReport_setPageParams(value) { this._pageParams = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setPageParams = SAWSOAP_getHtmlForPageWithOneReport_setPageParams;
//
// accessor is SAWSOAP_getHtmlForPageWithOneReport.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getHtmlForPageWithOneReport.prototype.setSessionID
//
function SAWSOAP_getHtmlForPageWithOneReport_getSessionID() { return this._sessionID;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.getSessionID = SAWSOAP_getHtmlForPageWithOneReport_getSessionID;

function SAWSOAP_getHtmlForPageWithOneReport_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getHtmlForPageWithOneReport.prototype.setSessionID = SAWSOAP_getHtmlForPageWithOneReport_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReport
//
function SAWSOAP_getHtmlForPageWithOneReport_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:reportID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._reportID);
     xml = xml + '</jns0:reportID>';
    }
    // block for local variables
    {
     xml = xml + this._report.serialize(cxfjsutils, 'jns0:report', null);
    }
    // block for local variables
    {
     if (this._reportViewName == null) {
      xml = xml + '<jns0:reportViewName xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:reportViewName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._reportViewName);
      xml = xml + '</jns0:reportViewName>';
     }
    }
    // block for local variables
    {
     if (this._reportParams == null) {
      xml = xml + '<jns0:reportParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._reportParams.serialize(cxfjsutils, 'jns0:reportParams', null);
     }
    }
    // block for local variables
    {
     if (this._reportOptions == null) {
      xml = xml + '<jns0:reportOptions xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._reportOptions.serialize(cxfjsutils, 'jns0:reportOptions', null);
     }
    }
    // block for local variables
    {
     if (this._pageParams == null) {
      xml = xml + '<jns0:pageParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._pageParams.serialize(cxfjsutils, 'jns0:pageParams', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getHtmlForPageWithOneReport.prototype.serialize = SAWSOAP_getHtmlForPageWithOneReport_serialize;

function SAWSOAP_getHtmlForPageWithOneReport_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getHtmlForPageWithOneReport();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing report');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportRef_deserialize(cxfjsutils, curElement);
    }
    newobject.setReport(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportViewName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReportViewName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing reportOptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ReportHTMLOptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setReportOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_StartPageParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setPageParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGlobalPrivilegesResult
//
function SAWSOAP_getGlobalPrivilegesResult () {
    this.typeMarker = 'SAWSOAP_getGlobalPrivilegesResult';
    this._sawPrivileges = [];
}

//
// accessor is SAWSOAP_getGlobalPrivilegesResult.prototype.getSawPrivileges
// element get for sawPrivileges
// - element type is {urn://oracle.bi.webservices/v6}Privilege
// - required element
// - array
//
// element set for sawPrivileges
// setter function is is SAWSOAP_getGlobalPrivilegesResult.prototype.setSawPrivileges
//
function SAWSOAP_getGlobalPrivilegesResult_getSawPrivileges() { return this._sawPrivileges;}

SAWSOAP_getGlobalPrivilegesResult.prototype.getSawPrivileges = SAWSOAP_getGlobalPrivilegesResult_getSawPrivileges;

function SAWSOAP_getGlobalPrivilegesResult_setSawPrivileges(value) { this._sawPrivileges = value;}

SAWSOAP_getGlobalPrivilegesResult.prototype.setSawPrivileges = SAWSOAP_getGlobalPrivilegesResult_setSawPrivileges;
//
// Serialize {urn://oracle.bi.webservices/v6}getGlobalPrivilegesResult
//
function SAWSOAP_getGlobalPrivilegesResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._sawPrivileges != null) {
      for (var ax = 0;ax < this._sawPrivileges.length;ax ++) {
       if (this._sawPrivileges[ax] == null) {
        xml = xml + '<jns0:sawPrivileges/>';
       } else {
        xml = xml + this._sawPrivileges[ax].serialize(cxfjsutils, 'jns0:sawPrivileges', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGlobalPrivilegesResult.prototype.serialize = SAWSOAP_getGlobalPrivilegesResult_serialize;

function SAWSOAP_getGlobalPrivilegesResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGlobalPrivilegesResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sawPrivileges');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sawPrivileges')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Privilege_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sawPrivileges'));
     newobject.setSawPrivileges(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGlobalPrivilegeACL
//
function SAWSOAP_getGlobalPrivilegeACL () {
    this.typeMarker = 'SAWSOAP_getGlobalPrivilegeACL';
    this._privilegeName = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getGlobalPrivilegeACL.prototype.getPrivilegeName
// element get for privilegeName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for privilegeName
// setter function is is SAWSOAP_getGlobalPrivilegeACL.prototype.setPrivilegeName
//
function SAWSOAP_getGlobalPrivilegeACL_getPrivilegeName() { return this._privilegeName;}

SAWSOAP_getGlobalPrivilegeACL.prototype.getPrivilegeName = SAWSOAP_getGlobalPrivilegeACL_getPrivilegeName;

function SAWSOAP_getGlobalPrivilegeACL_setPrivilegeName(value) { this._privilegeName = value;}

SAWSOAP_getGlobalPrivilegeACL.prototype.setPrivilegeName = SAWSOAP_getGlobalPrivilegeACL_setPrivilegeName;
//
// accessor is SAWSOAP_getGlobalPrivilegeACL.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getGlobalPrivilegeACL.prototype.setSessionID
//
function SAWSOAP_getGlobalPrivilegeACL_getSessionID() { return this._sessionID;}

SAWSOAP_getGlobalPrivilegeACL.prototype.getSessionID = SAWSOAP_getGlobalPrivilegeACL_getSessionID;

function SAWSOAP_getGlobalPrivilegeACL_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getGlobalPrivilegeACL.prototype.setSessionID = SAWSOAP_getGlobalPrivilegeACL_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getGlobalPrivilegeACL
//
function SAWSOAP_getGlobalPrivilegeACL_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:privilegeName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._privilegeName);
     xml = xml + '</jns0:privilegeName>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGlobalPrivilegeACL.prototype.serialize = SAWSOAP_getGlobalPrivilegeACL_serialize;

function SAWSOAP_getGlobalPrivilegeACL_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGlobalPrivilegeACL();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing privilegeName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPrivilegeName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getCommonBodyHtml
//
function SAWSOAP_getCommonBodyHtml () {
    this.typeMarker = 'SAWSOAP_getCommonBodyHtml';
    this._pageID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getCommonBodyHtml.prototype.getPageID
// element get for pageID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pageID
// setter function is is SAWSOAP_getCommonBodyHtml.prototype.setPageID
//
function SAWSOAP_getCommonBodyHtml_getPageID() { return this._pageID;}

SAWSOAP_getCommonBodyHtml.prototype.getPageID = SAWSOAP_getCommonBodyHtml_getPageID;

function SAWSOAP_getCommonBodyHtml_setPageID(value) { this._pageID = value;}

SAWSOAP_getCommonBodyHtml.prototype.setPageID = SAWSOAP_getCommonBodyHtml_setPageID;
//
// accessor is SAWSOAP_getCommonBodyHtml.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getCommonBodyHtml.prototype.setSessionID
//
function SAWSOAP_getCommonBodyHtml_getSessionID() { return this._sessionID;}

SAWSOAP_getCommonBodyHtml.prototype.getSessionID = SAWSOAP_getCommonBodyHtml_getSessionID;

function SAWSOAP_getCommonBodyHtml_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getCommonBodyHtml.prototype.setSessionID = SAWSOAP_getCommonBodyHtml_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getCommonBodyHtml
//
function SAWSOAP_getCommonBodyHtml_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pageID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pageID);
     xml = xml + '</jns0:pageID>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getCommonBodyHtml.prototype.serialize = SAWSOAP_getCommonBodyHtml_serialize;

function SAWSOAP_getCommonBodyHtml_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getCommonBodyHtml();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pageID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPageID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}fetchNextResult
//
function SAWSOAP_fetchNextResult () {
    this.typeMarker = 'SAWSOAP_fetchNextResult';
    this._return = null;
}

//
// accessor is SAWSOAP_fetchNextResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}QueryResults
// - required element
//
// element set for return
// setter function is is SAWSOAP_fetchNextResult.prototype.setReturn
//
function SAWSOAP_fetchNextResult_getReturn() { return this._return;}

SAWSOAP_fetchNextResult.prototype.getReturn = SAWSOAP_fetchNextResult_getReturn;

function SAWSOAP_fetchNextResult_setReturn(value) { this._return = value;}

SAWSOAP_fetchNextResult.prototype.setReturn = SAWSOAP_fetchNextResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}fetchNextResult
//
function SAWSOAP_fetchNextResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_fetchNextResult.prototype.serialize = SAWSOAP_fetchNextResult_serialize;

function SAWSOAP_fetchNextResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_fetchNextResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_QueryResults_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}copyItem2Result
//
function SAWSOAP_copyItem2Result () {
    this.typeMarker = 'SAWSOAP_copyItem2Result';
    this._archive = '';
}

//
// accessor is SAWSOAP_copyItem2Result.prototype.getArchive
// element get for archive
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - required element
//
// element set for archive
// setter function is is SAWSOAP_copyItem2Result.prototype.setArchive
//
function SAWSOAP_copyItem2Result_getArchive() { return this._archive;}

SAWSOAP_copyItem2Result.prototype.getArchive = SAWSOAP_copyItem2Result_getArchive;

function SAWSOAP_copyItem2Result_setArchive(value) { this._archive = value;}

SAWSOAP_copyItem2Result.prototype.setArchive = SAWSOAP_copyItem2Result_setArchive;
//
// Serialize {urn://oracle.bi.webservices/v6}copyItem2Result
//
function SAWSOAP_copyItem2Result_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:archive>';
     xml = xml + cxfjsutils.packageMtom(this._archive);
     xml = xml + '</jns0:archive>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_copyItem2Result.prototype.serialize = SAWSOAP_copyItem2Result_serialize;

function SAWSOAP_copyItem2Result_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_copyItem2Result();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing archive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = cxfjsutils.deserializeBase64orMom(curElement);
    }
    newobject.setArchive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPromptedColumns
//
function SAWSOAP_getPromptedColumns () {
    this.typeMarker = 'SAWSOAP_getPromptedColumns';
    this._segmentPath = null;
    this._treePath = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getPromptedColumns.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_getPromptedColumns.prototype.setSegmentPath
//
function SAWSOAP_getPromptedColumns_getSegmentPath() { return this._segmentPath;}

SAWSOAP_getPromptedColumns.prototype.getSegmentPath = SAWSOAP_getPromptedColumns_getSegmentPath;

function SAWSOAP_getPromptedColumns_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_getPromptedColumns.prototype.setSegmentPath = SAWSOAP_getPromptedColumns_setSegmentPath;
//
// accessor is SAWSOAP_getPromptedColumns.prototype.getTreePath
// element get for treePath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for treePath
// setter function is is SAWSOAP_getPromptedColumns.prototype.setTreePath
//
function SAWSOAP_getPromptedColumns_getTreePath() { return this._treePath;}

SAWSOAP_getPromptedColumns.prototype.getTreePath = SAWSOAP_getPromptedColumns_getTreePath;

function SAWSOAP_getPromptedColumns_setTreePath(value) { this._treePath = value;}

SAWSOAP_getPromptedColumns.prototype.setTreePath = SAWSOAP_getPromptedColumns_setTreePath;
//
// accessor is SAWSOAP_getPromptedColumns.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_getPromptedColumns.prototype.setSessionID
//
function SAWSOAP_getPromptedColumns_getSessionID() { return this._sessionID;}

SAWSOAP_getPromptedColumns.prototype.getSessionID = SAWSOAP_getPromptedColumns_getSessionID;

function SAWSOAP_getPromptedColumns_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getPromptedColumns.prototype.setSessionID = SAWSOAP_getPromptedColumns_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getPromptedColumns
//
function SAWSOAP_getPromptedColumns_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treePath != null) {
      xml = xml + '<jns0:treePath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._treePath);
      xml = xml + '</jns0:treePath>';
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPromptedColumns.prototype.serialize = SAWSOAP_getPromptedColumns_serialize;

function SAWSOAP_getPromptedColumns_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPromptedColumns();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTreePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}exportResult
//
function SAWSOAP_exportResult () {
    this.typeMarker = 'SAWSOAP_exportResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}exportResult
//
function SAWSOAP_exportResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_exportResult.prototype.serialize = SAWSOAP_exportResult_serialize;

function SAWSOAP_exportResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_exportResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}keepAliveResult
//
function SAWSOAP_keepAliveResult () {
    this.typeMarker = 'SAWSOAP_keepAliveResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}keepAliveResult
//
function SAWSOAP_keepAliveResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_keepAliveResult.prototype.serialize = SAWSOAP_keepAliveResult_serialize;

function SAWSOAP_keepAliveResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_keepAliveResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}impersonate
//
function SAWSOAP_impersonate () {
    this.typeMarker = 'SAWSOAP_impersonate';
    this._name = null;
    this._password = null;
    this._impersonateID = null;
}

//
// accessor is SAWSOAP_impersonate.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for name
// setter function is is SAWSOAP_impersonate.prototype.setName
//
function SAWSOAP_impersonate_getName() { return this._name;}

SAWSOAP_impersonate.prototype.getName = SAWSOAP_impersonate_getName;

function SAWSOAP_impersonate_setName(value) { this._name = value;}

SAWSOAP_impersonate.prototype.setName = SAWSOAP_impersonate_setName;
//
// accessor is SAWSOAP_impersonate.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for password
// setter function is is SAWSOAP_impersonate.prototype.setPassword
//
function SAWSOAP_impersonate_getPassword() { return this._password;}

SAWSOAP_impersonate.prototype.getPassword = SAWSOAP_impersonate_getPassword;

function SAWSOAP_impersonate_setPassword(value) { this._password = value;}

SAWSOAP_impersonate.prototype.setPassword = SAWSOAP_impersonate_setPassword;
//
// accessor is SAWSOAP_impersonate.prototype.getImpersonateID
// element get for impersonateID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for impersonateID
// setter function is is SAWSOAP_impersonate.prototype.setImpersonateID
//
function SAWSOAP_impersonate_getImpersonateID() { return this._impersonateID;}

SAWSOAP_impersonate.prototype.getImpersonateID = SAWSOAP_impersonate_getImpersonateID;

function SAWSOAP_impersonate_setImpersonateID(value) { this._impersonateID = value;}

SAWSOAP_impersonate.prototype.setImpersonateID = SAWSOAP_impersonate_setImpersonateID;
//
// Serialize {urn://oracle.bi.webservices/v6}impersonate
//
function SAWSOAP_impersonate_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name == null) {
      xml = xml + '<jns0:name xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</jns0:name>';
     }
    }
    // block for local variables
    {
     if (this._password == null) {
      xml = xml + '<jns0:password xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:password>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._password);
      xml = xml + '</jns0:password>';
     }
    }
    // block for local variables
    {
     if (this._impersonateID == null) {
      xml = xml + '<jns0:impersonateID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:impersonateID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._impersonateID);
      xml = xml + '</jns0:impersonateID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_impersonate.prototype.serialize = SAWSOAP_impersonate_serialize;

function SAWSOAP_impersonate_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_impersonate();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing impersonateID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setImpersonateID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}impersonateexResult
//
function SAWSOAP_impersonateexResult () {
    this.typeMarker = 'SAWSOAP_impersonateexResult';
    this._return = null;
}

//
// accessor is SAWSOAP_impersonateexResult.prototype.getReturn
// element get for return
// - element type is {urn://oracle.bi.webservices/v6}AuthResult
// - required element
//
// element set for return
// setter function is is SAWSOAP_impersonateexResult.prototype.setReturn
//
function SAWSOAP_impersonateexResult_getReturn() { return this._return;}

SAWSOAP_impersonateexResult.prototype.getReturn = SAWSOAP_impersonateexResult_getReturn;

function SAWSOAP_impersonateexResult_setReturn(value) { this._return = value;}

SAWSOAP_impersonateexResult.prototype.setReturn = SAWSOAP_impersonateexResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}impersonateexResult
//
function SAWSOAP_impersonateexResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._return.serialize(cxfjsutils, 'jns0:return', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_impersonateexResult.prototype.serialize = SAWSOAP_impersonateexResult_serialize;

function SAWSOAP_impersonateexResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_impersonateexResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_AuthResult_deserialize(cxfjsutils, curElement);
    }
    newobject.setReturn(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}moveIBotResult
//
function SAWSOAP_moveIBotResult () {
    this.typeMarker = 'SAWSOAP_moveIBotResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}moveIBotResult
//
function SAWSOAP_moveIBotResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_moveIBotResult.prototype.serialize = SAWSOAP_moveIBotResult_serialize;

function SAWSOAP_moveIBotResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_moveIBotResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setItemAttributes
//
function SAWSOAP_setItemAttributes () {
    this.typeMarker = 'SAWSOAP_setItemAttributes';
    this._path = [];
    this._value = 0;
    this._valueOff = 0;
    this._recursive = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_setItemAttributes.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for path
// setter function is is SAWSOAP_setItemAttributes.prototype.setPath
//
function SAWSOAP_setItemAttributes_getPath() { return this._path;}

SAWSOAP_setItemAttributes.prototype.getPath = SAWSOAP_setItemAttributes_getPath;

function SAWSOAP_setItemAttributes_setPath(value) { this._path = value;}

SAWSOAP_setItemAttributes.prototype.setPath = SAWSOAP_setItemAttributes_setPath;
//
// accessor is SAWSOAP_setItemAttributes.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for value
// setter function is is SAWSOAP_setItemAttributes.prototype.setValue
//
function SAWSOAP_setItemAttributes_getValue() { return this._value;}

SAWSOAP_setItemAttributes.prototype.getValue = SAWSOAP_setItemAttributes_getValue;

function SAWSOAP_setItemAttributes_setValue(value) { this._value = value;}

SAWSOAP_setItemAttributes.prototype.setValue = SAWSOAP_setItemAttributes_setValue;
//
// accessor is SAWSOAP_setItemAttributes.prototype.getValueOff
// element get for valueOff
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for valueOff
// setter function is is SAWSOAP_setItemAttributes.prototype.setValueOff
//
function SAWSOAP_setItemAttributes_getValueOff() { return this._valueOff;}

SAWSOAP_setItemAttributes.prototype.getValueOff = SAWSOAP_setItemAttributes_getValueOff;

function SAWSOAP_setItemAttributes_setValueOff(value) { this._valueOff = value;}

SAWSOAP_setItemAttributes.prototype.setValueOff = SAWSOAP_setItemAttributes_setValueOff;
//
// accessor is SAWSOAP_setItemAttributes.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_setItemAttributes.prototype.setRecursive
//
function SAWSOAP_setItemAttributes_getRecursive() { return this._recursive;}

SAWSOAP_setItemAttributes.prototype.getRecursive = SAWSOAP_setItemAttributes_getRecursive;

function SAWSOAP_setItemAttributes_setRecursive(value) { this._recursive = value;}

SAWSOAP_setItemAttributes.prototype.setRecursive = SAWSOAP_setItemAttributes_setRecursive;
//
// accessor is SAWSOAP_setItemAttributes.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_setItemAttributes.prototype.setSessionID
//
function SAWSOAP_setItemAttributes_getSessionID() { return this._sessionID;}

SAWSOAP_setItemAttributes.prototype.getSessionID = SAWSOAP_setItemAttributes_getSessionID;

function SAWSOAP_setItemAttributes_setSessionID(value) { this._sessionID = value;}

SAWSOAP_setItemAttributes.prototype.setSessionID = SAWSOAP_setItemAttributes_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}setItemAttributes
//
function SAWSOAP_setItemAttributes_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._path != null) {
      for (var ax = 0;ax < this._path.length;ax ++) {
       if (this._path[ax] == null) {
        xml = xml + '<jns0:path/>';
       } else {
        xml = xml + '<jns0:path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._path[ax]);
        xml = xml + '</jns0:path>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</jns0:value>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:valueOff>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._valueOff);
     xml = xml + '</jns0:valueOff>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setItemAttributes.prototype.serialize = SAWSOAP_setItemAttributes_serialize;

function SAWSOAP_setItemAttributes_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setItemAttributes();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path'));
     newobject.setPath(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing valueOff');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setValueOff(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}describeTableResult
//
function SAWSOAP_describeTableResult () {
    this.typeMarker = 'SAWSOAP_describeTableResult';
    this._table = null;
}

//
// accessor is SAWSOAP_describeTableResult.prototype.getTable
// element get for table
// - element type is {urn://oracle.bi.webservices/v6}SATable
// - required element
//
// element set for table
// setter function is is SAWSOAP_describeTableResult.prototype.setTable
//
function SAWSOAP_describeTableResult_getTable() { return this._table;}

SAWSOAP_describeTableResult.prototype.getTable = SAWSOAP_describeTableResult_getTable;

function SAWSOAP_describeTableResult_setTable(value) { this._table = value;}

SAWSOAP_describeTableResult.prototype.setTable = SAWSOAP_describeTableResult_setTable;
//
// Serialize {urn://oracle.bi.webservices/v6}describeTableResult
//
function SAWSOAP_describeTableResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._table.serialize(cxfjsutils, 'jns0:table', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_describeTableResult.prototype.serialize = SAWSOAP_describeTableResult_serialize;

function SAWSOAP_describeTableResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_describeTableResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing table');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_SATable_deserialize(cxfjsutils, curElement);
    }
    newobject.setTable(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}setBridgeResult
//
function SAWSOAP_setBridgeResult () {
    this.typeMarker = 'SAWSOAP_setBridgeResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}setBridgeResult
//
function SAWSOAP_setBridgeResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_setBridgeResult.prototype.serialize = SAWSOAP_setBridgeResult_serialize;

function SAWSOAP_setBridgeResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_setBridgeResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getJobInfoResult
//
function SAWSOAP_getJobInfoResult () {
    this.typeMarker = 'SAWSOAP_getJobInfoResult';
    this._jobInfo = null;
}

//
// accessor is SAWSOAP_getJobInfoResult.prototype.getJobInfo
// element get for jobInfo
// - element type is {urn://oracle.bi.webservices/v6}JobInfo
// - required element
//
// element set for jobInfo
// setter function is is SAWSOAP_getJobInfoResult.prototype.setJobInfo
//
function SAWSOAP_getJobInfoResult_getJobInfo() { return this._jobInfo;}

SAWSOAP_getJobInfoResult.prototype.getJobInfo = SAWSOAP_getJobInfoResult_getJobInfo;

function SAWSOAP_getJobInfoResult_setJobInfo(value) { this._jobInfo = value;}

SAWSOAP_getJobInfoResult.prototype.setJobInfo = SAWSOAP_getJobInfoResult_setJobInfo;
//
// Serialize {urn://oracle.bi.webservices/v6}getJobInfoResult
//
function SAWSOAP_getJobInfoResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._jobInfo.serialize(cxfjsutils, 'jns0:jobInfo', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getJobInfoResult.prototype.serialize = SAWSOAP_getJobInfoResult_serialize;

function SAWSOAP_getJobInfoResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getJobInfoResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_JobInfo_deserialize(cxfjsutils, curElement);
    }
    newobject.setJobInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}endPageResult
//
function SAWSOAP_endPageResult () {
    this.typeMarker = 'SAWSOAP_endPageResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}endPageResult
//
function SAWSOAP_endPageResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_endPageResult.prototype.serialize = SAWSOAP_endPageResult_serialize;

function SAWSOAP_endPageResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_endPageResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}voidType
//
function SAWSOAP_voidType () {
    this.typeMarker = 'SAWSOAP_voidType';
}

//
// Serialize {urn://oracle.bi.webservices/v6}voidType
//
function SAWSOAP_voidType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_voidType.prototype.serialize = SAWSOAP_voidType_serialize;

function SAWSOAP_voidType_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_voidType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}createFolder
//
function SAWSOAP_createFolder () {
    this.typeMarker = 'SAWSOAP_createFolder';
    this._path = '';
    this._createIfNotExists = '';
    this._createIntermediateDirs = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_createFolder.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_createFolder.prototype.setPath
//
function SAWSOAP_createFolder_getPath() { return this._path;}

SAWSOAP_createFolder.prototype.getPath = SAWSOAP_createFolder_getPath;

function SAWSOAP_createFolder_setPath(value) { this._path = value;}

SAWSOAP_createFolder.prototype.setPath = SAWSOAP_createFolder_setPath;
//
// accessor is SAWSOAP_createFolder.prototype.getCreateIfNotExists
// element get for createIfNotExists
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for createIfNotExists
// setter function is is SAWSOAP_createFolder.prototype.setCreateIfNotExists
//
function SAWSOAP_createFolder_getCreateIfNotExists() { return this._createIfNotExists;}

SAWSOAP_createFolder.prototype.getCreateIfNotExists = SAWSOAP_createFolder_getCreateIfNotExists;

function SAWSOAP_createFolder_setCreateIfNotExists(value) { this._createIfNotExists = value;}

SAWSOAP_createFolder.prototype.setCreateIfNotExists = SAWSOAP_createFolder_setCreateIfNotExists;
//
// accessor is SAWSOAP_createFolder.prototype.getCreateIntermediateDirs
// element get for createIntermediateDirs
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for createIntermediateDirs
// setter function is is SAWSOAP_createFolder.prototype.setCreateIntermediateDirs
//
function SAWSOAP_createFolder_getCreateIntermediateDirs() { return this._createIntermediateDirs;}

SAWSOAP_createFolder.prototype.getCreateIntermediateDirs = SAWSOAP_createFolder_getCreateIntermediateDirs;

function SAWSOAP_createFolder_setCreateIntermediateDirs(value) { this._createIntermediateDirs = value;}

SAWSOAP_createFolder.prototype.setCreateIntermediateDirs = SAWSOAP_createFolder_setCreateIntermediateDirs;
//
// accessor is SAWSOAP_createFolder.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_createFolder.prototype.setSessionID
//
function SAWSOAP_createFolder_getSessionID() { return this._sessionID;}

SAWSOAP_createFolder.prototype.getSessionID = SAWSOAP_createFolder_getSessionID;

function SAWSOAP_createFolder_setSessionID(value) { this._sessionID = value;}

SAWSOAP_createFolder.prototype.setSessionID = SAWSOAP_createFolder_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}createFolder
//
function SAWSOAP_createFolder_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:createIfNotExists>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._createIfNotExists);
     xml = xml + '</jns0:createIfNotExists>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:createIntermediateDirs>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._createIntermediateDirs);
     xml = xml + '</jns0:createIntermediateDirs>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_createFolder.prototype.serialize = SAWSOAP_createFolder_serialize;

function SAWSOAP_createFolder_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_createFolder();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing createIfNotExists');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setCreateIfNotExists(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing createIntermediateDirs');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setCreateIntermediateDirs(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}export
//
function SAWSOAP_export () {
    this.typeMarker = 'SAWSOAP_export';
    this._filename = '';
    this._filter = null;
    this._flag = '';
    this._exportSecurity = 'true';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_export.prototype.getFilename
// element get for filename
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for filename
// setter function is is SAWSOAP_export.prototype.setFilename
//
function SAWSOAP_export_getFilename() { return this._filename;}

SAWSOAP_export.prototype.getFilename = SAWSOAP_export_getFilename;

function SAWSOAP_export_setFilename(value) { this._filename = value;}

SAWSOAP_export.prototype.setFilename = SAWSOAP_export_setFilename;
//
// accessor is SAWSOAP_export.prototype.getFilter
// element get for filter
// - element type is {urn://oracle.bi.webservices/v6}CatalogItemsFilter
// - required element
//
// element set for filter
// setter function is is SAWSOAP_export.prototype.setFilter
//
function SAWSOAP_export_getFilter() { return this._filter;}

SAWSOAP_export.prototype.getFilter = SAWSOAP_export_getFilter;

function SAWSOAP_export_setFilter(value) { this._filter = value;}

SAWSOAP_export.prototype.setFilter = SAWSOAP_export_setFilter;
//
// accessor is SAWSOAP_export.prototype.getFlag
// element get for flag
// - element type is {urn://oracle.bi.webservices/v6}ExportFlags
// - required element
//
// element set for flag
// setter function is is SAWSOAP_export.prototype.setFlag
//
function SAWSOAP_export_getFlag() { return this._flag;}

SAWSOAP_export.prototype.getFlag = SAWSOAP_export_getFlag;

function SAWSOAP_export_setFlag(value) { this._flag = value;}

SAWSOAP_export.prototype.setFlag = SAWSOAP_export_setFlag;
//
// accessor is SAWSOAP_export.prototype.getExportSecurity
// element get for exportSecurity
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for exportSecurity
// setter function is is SAWSOAP_export.prototype.setExportSecurity
//
function SAWSOAP_export_getExportSecurity() { return this._exportSecurity;}

SAWSOAP_export.prototype.getExportSecurity = SAWSOAP_export_getExportSecurity;

function SAWSOAP_export_setExportSecurity(value) { this._exportSecurity = value;}

SAWSOAP_export.prototype.setExportSecurity = SAWSOAP_export_setExportSecurity;
//
// accessor is SAWSOAP_export.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_export.prototype.setSessionID
//
function SAWSOAP_export_getSessionID() { return this._sessionID;}

SAWSOAP_export.prototype.getSessionID = SAWSOAP_export_getSessionID;

function SAWSOAP_export_setSessionID(value) { this._sessionID = value;}

SAWSOAP_export.prototype.setSessionID = SAWSOAP_export_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}export
//
function SAWSOAP_export_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:filename>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filename);
     xml = xml + '</jns0:filename>';
    }
    // block for local variables
    {
     xml = xml + this._filter.serialize(cxfjsutils, 'jns0:filter', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:flag>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._flag);
     xml = xml + '</jns0:flag>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:exportSecurity>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._exportSecurity);
     xml = xml + '</jns0:exportSecurity>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_export.prototype.serialize = SAWSOAP_export_serialize;

function SAWSOAP_export_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_export();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filename');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFilename(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_CatalogItemsFilter_deserialize(cxfjsutils, curElement);
    }
    newobject.setFilter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing flag');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFlag(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exportSecurity');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setExportSecurity(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}joinGroups
//
function SAWSOAP_joinGroups () {
    this.typeMarker = 'SAWSOAP_joinGroups';
    this._group = [];
    this._member = [];
    this._sessionID = null;
}

//
// accessor is SAWSOAP_joinGroups.prototype.getGroup
// element get for group
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for group
// setter function is is SAWSOAP_joinGroups.prototype.setGroup
//
function SAWSOAP_joinGroups_getGroup() { return this._group;}

SAWSOAP_joinGroups.prototype.getGroup = SAWSOAP_joinGroups_getGroup;

function SAWSOAP_joinGroups_setGroup(value) { this._group = value;}

SAWSOAP_joinGroups.prototype.setGroup = SAWSOAP_joinGroups_setGroup;
//
// accessor is SAWSOAP_joinGroups.prototype.getMember
// element get for member
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for member
// setter function is is SAWSOAP_joinGroups.prototype.setMember
//
function SAWSOAP_joinGroups_getMember() { return this._member;}

SAWSOAP_joinGroups.prototype.getMember = SAWSOAP_joinGroups_getMember;

function SAWSOAP_joinGroups_setMember(value) { this._member = value;}

SAWSOAP_joinGroups.prototype.setMember = SAWSOAP_joinGroups_setMember;
//
// accessor is SAWSOAP_joinGroups.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_joinGroups.prototype.setSessionID
//
function SAWSOAP_joinGroups_getSessionID() { return this._sessionID;}

SAWSOAP_joinGroups.prototype.getSessionID = SAWSOAP_joinGroups_getSessionID;

function SAWSOAP_joinGroups_setSessionID(value) { this._sessionID = value;}

SAWSOAP_joinGroups.prototype.setSessionID = SAWSOAP_joinGroups_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}joinGroups
//
function SAWSOAP_joinGroups_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._group != null) {
      for (var ax = 0;ax < this._group.length;ax ++) {
       if (this._group[ax] == null) {
        xml = xml + '<jns0:group/>';
       } else {
        xml = xml + this._group[ax].serialize(cxfjsutils, 'jns0:group', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._member != null) {
      for (var ax = 0;ax < this._member.length;ax ++) {
       if (this._member[ax] == null) {
        xml = xml + '<jns0:member/>';
       } else {
        xml = xml + this._member[ax].serialize(cxfjsutils, 'jns0:member', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_joinGroups.prototype.serialize = SAWSOAP_joinGroups_serialize;

function SAWSOAP_joinGroups_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_joinGroups();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group'));
     newobject.setGroup(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing member');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member'));
     newobject.setMember(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGroups
//
function SAWSOAP_getGroups () {
    this.typeMarker = 'SAWSOAP_getGroups';
    this._member = [];
    this._expandGroups = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_getGroups.prototype.getMember
// element get for member
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for member
// setter function is is SAWSOAP_getGroups.prototype.setMember
//
function SAWSOAP_getGroups_getMember() { return this._member;}

SAWSOAP_getGroups.prototype.getMember = SAWSOAP_getGroups_getMember;

function SAWSOAP_getGroups_setMember(value) { this._member = value;}

SAWSOAP_getGroups.prototype.setMember = SAWSOAP_getGroups_setMember;
//
// accessor is SAWSOAP_getGroups.prototype.getExpandGroups
// element get for expandGroups
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for expandGroups
// setter function is is SAWSOAP_getGroups.prototype.setExpandGroups
//
function SAWSOAP_getGroups_getExpandGroups() { return this._expandGroups;}

SAWSOAP_getGroups.prototype.getExpandGroups = SAWSOAP_getGroups_getExpandGroups;

function SAWSOAP_getGroups_setExpandGroups(value) { this._expandGroups = value;}

SAWSOAP_getGroups.prototype.setExpandGroups = SAWSOAP_getGroups_setExpandGroups;
//
// accessor is SAWSOAP_getGroups.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_getGroups.prototype.setSessionID
//
function SAWSOAP_getGroups_getSessionID() { return this._sessionID;}

SAWSOAP_getGroups.prototype.getSessionID = SAWSOAP_getGroups_getSessionID;

function SAWSOAP_getGroups_setSessionID(value) { this._sessionID = value;}

SAWSOAP_getGroups.prototype.setSessionID = SAWSOAP_getGroups_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}getGroups
//
function SAWSOAP_getGroups_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._member != null) {
      for (var ax = 0;ax < this._member.length;ax ++) {
       if (this._member[ax] == null) {
        xml = xml + '<jns0:member/>';
       } else {
        xml = xml + this._member[ax].serialize(cxfjsutils, 'jns0:member', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._expandGroups != null) {
      xml = xml + '<jns0:expandGroups>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._expandGroups);
      xml = xml + '</jns0:expandGroups>';
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGroups.prototype.serialize = SAWSOAP_getGroups_serialize;

function SAWSOAP_getGroups_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGroups();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing member');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member'));
     newobject.setMember(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing expandGroups');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'expandGroups')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setExpandGroups(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}readObjects
//
function SAWSOAP_readObjects () {
    this.typeMarker = 'SAWSOAP_readObjects';
    this._paths = [];
    this._resolveLinks = '';
    this._errorMode = '';
    this._returnOptions = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_readObjects.prototype.getPaths
// element get for paths
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for paths
// setter function is is SAWSOAP_readObjects.prototype.setPaths
//
function SAWSOAP_readObjects_getPaths() { return this._paths;}

SAWSOAP_readObjects.prototype.getPaths = SAWSOAP_readObjects_getPaths;

function SAWSOAP_readObjects_setPaths(value) { this._paths = value;}

SAWSOAP_readObjects.prototype.setPaths = SAWSOAP_readObjects_setPaths;
//
// accessor is SAWSOAP_readObjects.prototype.getResolveLinks
// element get for resolveLinks
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for resolveLinks
// setter function is is SAWSOAP_readObjects.prototype.setResolveLinks
//
function SAWSOAP_readObjects_getResolveLinks() { return this._resolveLinks;}

SAWSOAP_readObjects.prototype.getResolveLinks = SAWSOAP_readObjects_getResolveLinks;

function SAWSOAP_readObjects_setResolveLinks(value) { this._resolveLinks = value;}

SAWSOAP_readObjects.prototype.setResolveLinks = SAWSOAP_readObjects_setResolveLinks;
//
// accessor is SAWSOAP_readObjects.prototype.getErrorMode
// element get for errorMode
// - element type is {urn://oracle.bi.webservices/v6}ErrorDetailsLevel
// - required element
//
// element set for errorMode
// setter function is is SAWSOAP_readObjects.prototype.setErrorMode
//
function SAWSOAP_readObjects_getErrorMode() { return this._errorMode;}

SAWSOAP_readObjects.prototype.getErrorMode = SAWSOAP_readObjects_getErrorMode;

function SAWSOAP_readObjects_setErrorMode(value) { this._errorMode = value;}

SAWSOAP_readObjects.prototype.setErrorMode = SAWSOAP_readObjects_setErrorMode;
//
// accessor is SAWSOAP_readObjects.prototype.getReturnOptions
// element get for returnOptions
// - element type is {urn://oracle.bi.webservices/v6}ReadObjectsReturnOptions
// - required element
//
// element set for returnOptions
// setter function is is SAWSOAP_readObjects.prototype.setReturnOptions
//
function SAWSOAP_readObjects_getReturnOptions() { return this._returnOptions;}

SAWSOAP_readObjects.prototype.getReturnOptions = SAWSOAP_readObjects_getReturnOptions;

function SAWSOAP_readObjects_setReturnOptions(value) { this._returnOptions = value;}

SAWSOAP_readObjects.prototype.setReturnOptions = SAWSOAP_readObjects_setReturnOptions;
//
// accessor is SAWSOAP_readObjects.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_readObjects.prototype.setSessionID
//
function SAWSOAP_readObjects_getSessionID() { return this._sessionID;}

SAWSOAP_readObjects.prototype.getSessionID = SAWSOAP_readObjects_getSessionID;

function SAWSOAP_readObjects_setSessionID(value) { this._sessionID = value;}

SAWSOAP_readObjects.prototype.setSessionID = SAWSOAP_readObjects_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}readObjects
//
function SAWSOAP_readObjects_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._paths != null) {
      for (var ax = 0;ax < this._paths.length;ax ++) {
       if (this._paths[ax] == null) {
        xml = xml + '<jns0:paths/>';
       } else {
        xml = xml + '<jns0:paths>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._paths[ax]);
        xml = xml + '</jns0:paths>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:resolveLinks>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._resolveLinks);
     xml = xml + '</jns0:resolveLinks>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:errorMode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._errorMode);
     xml = xml + '</jns0:errorMode>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:returnOptions>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._returnOptions);
     xml = xml + '</jns0:returnOptions>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_readObjects.prototype.serialize = SAWSOAP_readObjects_serialize;

function SAWSOAP_readObjects_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_readObjects();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing paths');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'paths')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'paths'));
     newobject.setPaths(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resolveLinks');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setResolveLinks(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorMode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setErrorMode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing returnOptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setReturnOptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}copyItem2
//
function SAWSOAP_copyItem2 () {
    this.typeMarker = 'SAWSOAP_copyItem2';
    this._path = [];
    this._recursive = '';
    this._permissions = '';
    this._timestamps = '';
    this._useMtom = 'false';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_copyItem2.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for path
// setter function is is SAWSOAP_copyItem2.prototype.setPath
//
function SAWSOAP_copyItem2_getPath() { return this._path;}

SAWSOAP_copyItem2.prototype.getPath = SAWSOAP_copyItem2_getPath;

function SAWSOAP_copyItem2_setPath(value) { this._path = value;}

SAWSOAP_copyItem2.prototype.setPath = SAWSOAP_copyItem2_setPath;
//
// accessor is SAWSOAP_copyItem2.prototype.getRecursive
// element get for recursive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for recursive
// setter function is is SAWSOAP_copyItem2.prototype.setRecursive
//
function SAWSOAP_copyItem2_getRecursive() { return this._recursive;}

SAWSOAP_copyItem2.prototype.getRecursive = SAWSOAP_copyItem2_getRecursive;

function SAWSOAP_copyItem2_setRecursive(value) { this._recursive = value;}

SAWSOAP_copyItem2.prototype.setRecursive = SAWSOAP_copyItem2_setRecursive;
//
// accessor is SAWSOAP_copyItem2.prototype.getPermissions
// element get for permissions
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for permissions
// setter function is is SAWSOAP_copyItem2.prototype.setPermissions
//
function SAWSOAP_copyItem2_getPermissions() { return this._permissions;}

SAWSOAP_copyItem2.prototype.getPermissions = SAWSOAP_copyItem2_getPermissions;

function SAWSOAP_copyItem2_setPermissions(value) { this._permissions = value;}

SAWSOAP_copyItem2.prototype.setPermissions = SAWSOAP_copyItem2_setPermissions;
//
// accessor is SAWSOAP_copyItem2.prototype.getTimestamps
// element get for timestamps
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for timestamps
// setter function is is SAWSOAP_copyItem2.prototype.setTimestamps
//
function SAWSOAP_copyItem2_getTimestamps() { return this._timestamps;}

SAWSOAP_copyItem2.prototype.getTimestamps = SAWSOAP_copyItem2_getTimestamps;

function SAWSOAP_copyItem2_setTimestamps(value) { this._timestamps = value;}

SAWSOAP_copyItem2.prototype.setTimestamps = SAWSOAP_copyItem2_setTimestamps;
//
// accessor is SAWSOAP_copyItem2.prototype.getUseMtom
// element get for useMtom
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for useMtom
// setter function is is SAWSOAP_copyItem2.prototype.setUseMtom
//
function SAWSOAP_copyItem2_getUseMtom() { return this._useMtom;}

SAWSOAP_copyItem2.prototype.getUseMtom = SAWSOAP_copyItem2_getUseMtom;

function SAWSOAP_copyItem2_setUseMtom(value) { this._useMtom = value;}

SAWSOAP_copyItem2.prototype.setUseMtom = SAWSOAP_copyItem2_setUseMtom;
//
// accessor is SAWSOAP_copyItem2.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_copyItem2.prototype.setSessionID
//
function SAWSOAP_copyItem2_getSessionID() { return this._sessionID;}

SAWSOAP_copyItem2.prototype.getSessionID = SAWSOAP_copyItem2_getSessionID;

function SAWSOAP_copyItem2_setSessionID(value) { this._sessionID = value;}

SAWSOAP_copyItem2.prototype.setSessionID = SAWSOAP_copyItem2_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}copyItem2
//
function SAWSOAP_copyItem2_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._path != null) {
      for (var ax = 0;ax < this._path.length;ax ++) {
       if (this._path[ax] == null) {
        xml = xml + '<jns0:path/>';
       } else {
        xml = xml + '<jns0:path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._path[ax]);
        xml = xml + '</jns0:path>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:recursive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._recursive);
     xml = xml + '</jns0:recursive>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:permissions>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._permissions);
     xml = xml + '</jns0:permissions>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:timestamps>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._timestamps);
     xml = xml + '</jns0:timestamps>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:useMtom>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._useMtom);
     xml = xml + '</jns0:useMtom>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_copyItem2.prototype.serialize = SAWSOAP_copyItem2_serialize;

function SAWSOAP_copyItem2_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_copyItem2();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'path'));
     newobject.setPath(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recursive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRecursive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing permissions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setPermissions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing timestamps');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setTimestamps(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing useMtom');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setUseMtom(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getGroupsResult
//
function SAWSOAP_getGroupsResult () {
    this.typeMarker = 'SAWSOAP_getGroupsResult';
    this._account = [];
}

//
// accessor is SAWSOAP_getGroupsResult.prototype.getAccount
// element get for account
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for account
// setter function is is SAWSOAP_getGroupsResult.prototype.setAccount
//
function SAWSOAP_getGroupsResult_getAccount() { return this._account;}

SAWSOAP_getGroupsResult.prototype.getAccount = SAWSOAP_getGroupsResult_getAccount;

function SAWSOAP_getGroupsResult_setAccount(value) { this._account = value;}

SAWSOAP_getGroupsResult.prototype.setAccount = SAWSOAP_getGroupsResult_setAccount;
//
// Serialize {urn://oracle.bi.webservices/v6}getGroupsResult
//
function SAWSOAP_getGroupsResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._account != null) {
      for (var ax = 0;ax < this._account.length;ax ++) {
       if (this._account[ax] == null) {
        xml = xml + '<jns0:account/>';
       } else {
        xml = xml + this._account[ax].serialize(cxfjsutils, 'jns0:account', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getGroupsResult.prototype.serialize = SAWSOAP_getGroupsResult_serialize;

function SAWSOAP_getGroupsResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getGroupsResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing account');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'account'));
     newobject.setAccount(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}cancelJob
//
function SAWSOAP_cancelJob () {
    this.typeMarker = 'SAWSOAP_cancelJob';
    this._jobID = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_cancelJob.prototype.getJobID
// element get for jobID
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for jobID
// setter function is is SAWSOAP_cancelJob.prototype.setJobID
//
function SAWSOAP_cancelJob_getJobID() { return this._jobID;}

SAWSOAP_cancelJob.prototype.getJobID = SAWSOAP_cancelJob_getJobID;

function SAWSOAP_cancelJob_setJobID(value) { this._jobID = value;}

SAWSOAP_cancelJob.prototype.setJobID = SAWSOAP_cancelJob_setJobID;
//
// accessor is SAWSOAP_cancelJob.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_cancelJob.prototype.setSessionID
//
function SAWSOAP_cancelJob_getSessionID() { return this._sessionID;}

SAWSOAP_cancelJob.prototype.getSessionID = SAWSOAP_cancelJob_getSessionID;

function SAWSOAP_cancelJob_setSessionID(value) { this._sessionID = value;}

SAWSOAP_cancelJob.prototype.setSessionID = SAWSOAP_cancelJob_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}cancelJob
//
function SAWSOAP_cancelJob_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:jobID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._jobID);
     xml = xml + '</jns0:jobID>';
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_cancelJob.prototype.serialize = SAWSOAP_cancelJob_serialize;

function SAWSOAP_cancelJob_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_cancelJob();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing jobID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setJobID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}writeObjects
//
function SAWSOAP_writeObjects () {
    this.typeMarker = 'SAWSOAP_writeObjects';
    this._catalogObjects = [];
    this._allowOverwrite = '';
    this._createIntermediateDirs = '';
    this._errorMode = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_writeObjects.prototype.getCatalogObjects
// element get for catalogObjects
// - element type is {urn://oracle.bi.webservices/v6}CatalogObject
// - required element
// - array
//
// element set for catalogObjects
// setter function is is SAWSOAP_writeObjects.prototype.setCatalogObjects
//
function SAWSOAP_writeObjects_getCatalogObjects() { return this._catalogObjects;}

SAWSOAP_writeObjects.prototype.getCatalogObjects = SAWSOAP_writeObjects_getCatalogObjects;

function SAWSOAP_writeObjects_setCatalogObjects(value) { this._catalogObjects = value;}

SAWSOAP_writeObjects.prototype.setCatalogObjects = SAWSOAP_writeObjects_setCatalogObjects;
//
// accessor is SAWSOAP_writeObjects.prototype.getAllowOverwrite
// element get for allowOverwrite
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for allowOverwrite
// setter function is is SAWSOAP_writeObjects.prototype.setAllowOverwrite
//
function SAWSOAP_writeObjects_getAllowOverwrite() { return this._allowOverwrite;}

SAWSOAP_writeObjects.prototype.getAllowOverwrite = SAWSOAP_writeObjects_getAllowOverwrite;

function SAWSOAP_writeObjects_setAllowOverwrite(value) { this._allowOverwrite = value;}

SAWSOAP_writeObjects.prototype.setAllowOverwrite = SAWSOAP_writeObjects_setAllowOverwrite;
//
// accessor is SAWSOAP_writeObjects.prototype.getCreateIntermediateDirs
// element get for createIntermediateDirs
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for createIntermediateDirs
// setter function is is SAWSOAP_writeObjects.prototype.setCreateIntermediateDirs
//
function SAWSOAP_writeObjects_getCreateIntermediateDirs() { return this._createIntermediateDirs;}

SAWSOAP_writeObjects.prototype.getCreateIntermediateDirs = SAWSOAP_writeObjects_getCreateIntermediateDirs;

function SAWSOAP_writeObjects_setCreateIntermediateDirs(value) { this._createIntermediateDirs = value;}

SAWSOAP_writeObjects.prototype.setCreateIntermediateDirs = SAWSOAP_writeObjects_setCreateIntermediateDirs;
//
// accessor is SAWSOAP_writeObjects.prototype.getErrorMode
// element get for errorMode
// - element type is {urn://oracle.bi.webservices/v6}ErrorDetailsLevel
// - required element
//
// element set for errorMode
// setter function is is SAWSOAP_writeObjects.prototype.setErrorMode
//
function SAWSOAP_writeObjects_getErrorMode() { return this._errorMode;}

SAWSOAP_writeObjects.prototype.getErrorMode = SAWSOAP_writeObjects_getErrorMode;

function SAWSOAP_writeObjects_setErrorMode(value) { this._errorMode = value;}

SAWSOAP_writeObjects.prototype.setErrorMode = SAWSOAP_writeObjects_setErrorMode;
//
// accessor is SAWSOAP_writeObjects.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_writeObjects.prototype.setSessionID
//
function SAWSOAP_writeObjects_getSessionID() { return this._sessionID;}

SAWSOAP_writeObjects.prototype.getSessionID = SAWSOAP_writeObjects_getSessionID;

function SAWSOAP_writeObjects_setSessionID(value) { this._sessionID = value;}

SAWSOAP_writeObjects.prototype.setSessionID = SAWSOAP_writeObjects_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}writeObjects
//
function SAWSOAP_writeObjects_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._catalogObjects != null) {
      for (var ax = 0;ax < this._catalogObjects.length;ax ++) {
       if (this._catalogObjects[ax] == null) {
        xml = xml + '<jns0:catalogObjects/>';
       } else {
        xml = xml + this._catalogObjects[ax].serialize(cxfjsutils, 'jns0:catalogObjects', null);
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:allowOverwrite>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._allowOverwrite);
     xml = xml + '</jns0:allowOverwrite>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:createIntermediateDirs>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._createIntermediateDirs);
     xml = xml + '</jns0:createIntermediateDirs>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:errorMode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._errorMode);
     xml = xml + '</jns0:errorMode>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_writeObjects.prototype.serialize = SAWSOAP_writeObjects_serialize;

function SAWSOAP_writeObjects_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_writeObjects();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing catalogObjects');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObjects')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_CatalogObject_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'catalogObjects'));
     newobject.setCatalogObjects(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing allowOverwrite');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAllowOverwrite(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing createIntermediateDirs');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setCreateIntermediateDirs(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorMode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setErrorMode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}saveResultSet
//
function SAWSOAP_saveResultSet () {
    this.typeMarker = 'SAWSOAP_saveResultSet';
    this._segmentPath = null;
    this._treeNodePath = null;
    this._savedSegmentPath = null;
    this._segmentationOptions = null;
    this._SRCustomLabel = null;
    this._appendStaticSegment = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_saveResultSet.prototype.getSegmentPath
// element get for segmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for segmentPath
// setter function is is SAWSOAP_saveResultSet.prototype.setSegmentPath
//
function SAWSOAP_saveResultSet_getSegmentPath() { return this._segmentPath;}

SAWSOAP_saveResultSet.prototype.getSegmentPath = SAWSOAP_saveResultSet_getSegmentPath;

function SAWSOAP_saveResultSet_setSegmentPath(value) { this._segmentPath = value;}

SAWSOAP_saveResultSet.prototype.setSegmentPath = SAWSOAP_saveResultSet_setSegmentPath;
//
// accessor is SAWSOAP_saveResultSet.prototype.getTreeNodePath
// element get for treeNodePath
// - element type is {urn://oracle.bi.webservices/v6}TreeNodePath
// - optional element
//
// element set for treeNodePath
// setter function is is SAWSOAP_saveResultSet.prototype.setTreeNodePath
//
function SAWSOAP_saveResultSet_getTreeNodePath() { return this._treeNodePath;}

SAWSOAP_saveResultSet.prototype.getTreeNodePath = SAWSOAP_saveResultSet_getTreeNodePath;

function SAWSOAP_saveResultSet_setTreeNodePath(value) { this._treeNodePath = value;}

SAWSOAP_saveResultSet.prototype.setTreeNodePath = SAWSOAP_saveResultSet_setTreeNodePath;
//
// accessor is SAWSOAP_saveResultSet.prototype.getSavedSegmentPath
// element get for savedSegmentPath
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for savedSegmentPath
// setter function is is SAWSOAP_saveResultSet.prototype.setSavedSegmentPath
//
function SAWSOAP_saveResultSet_getSavedSegmentPath() { return this._savedSegmentPath;}

SAWSOAP_saveResultSet.prototype.getSavedSegmentPath = SAWSOAP_saveResultSet_getSavedSegmentPath;

function SAWSOAP_saveResultSet_setSavedSegmentPath(value) { this._savedSegmentPath = value;}

SAWSOAP_saveResultSet.prototype.setSavedSegmentPath = SAWSOAP_saveResultSet_setSavedSegmentPath;
//
// accessor is SAWSOAP_saveResultSet.prototype.getSegmentationOptions
// element get for segmentationOptions
// - element type is {urn://oracle.bi.webservices/v6}SegmentationOptions
// - optional element
//
// element set for segmentationOptions
// setter function is is SAWSOAP_saveResultSet.prototype.setSegmentationOptions
//
function SAWSOAP_saveResultSet_getSegmentationOptions() { return this._segmentationOptions;}

SAWSOAP_saveResultSet.prototype.getSegmentationOptions = SAWSOAP_saveResultSet_getSegmentationOptions;

function SAWSOAP_saveResultSet_setSegmentationOptions(value) { this._segmentationOptions = value;}

SAWSOAP_saveResultSet.prototype.setSegmentationOptions = SAWSOAP_saveResultSet_setSegmentationOptions;
//
// accessor is SAWSOAP_saveResultSet.prototype.getSRCustomLabel
// element get for SRCustomLabel
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for SRCustomLabel
// setter function is is SAWSOAP_saveResultSet.prototype.setSRCustomLabel
//
function SAWSOAP_saveResultSet_getSRCustomLabel() { return this._SRCustomLabel;}

SAWSOAP_saveResultSet.prototype.getSRCustomLabel = SAWSOAP_saveResultSet_getSRCustomLabel;

function SAWSOAP_saveResultSet_setSRCustomLabel(value) { this._SRCustomLabel = value;}

SAWSOAP_saveResultSet.prototype.setSRCustomLabel = SAWSOAP_saveResultSet_setSRCustomLabel;
//
// accessor is SAWSOAP_saveResultSet.prototype.getAppendStaticSegment
// element get for appendStaticSegment
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for appendStaticSegment
// setter function is is SAWSOAP_saveResultSet.prototype.setAppendStaticSegment
//
function SAWSOAP_saveResultSet_getAppendStaticSegment() { return this._appendStaticSegment;}

SAWSOAP_saveResultSet.prototype.getAppendStaticSegment = SAWSOAP_saveResultSet_getAppendStaticSegment;

function SAWSOAP_saveResultSet_setAppendStaticSegment(value) { this._appendStaticSegment = value;}

SAWSOAP_saveResultSet.prototype.setAppendStaticSegment = SAWSOAP_saveResultSet_setAppendStaticSegment;
//
// accessor is SAWSOAP_saveResultSet.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sessionID
// setter function is is SAWSOAP_saveResultSet.prototype.setSessionID
//
function SAWSOAP_saveResultSet_getSessionID() { return this._sessionID;}

SAWSOAP_saveResultSet.prototype.getSessionID = SAWSOAP_saveResultSet_getSessionID;

function SAWSOAP_saveResultSet_setSessionID(value) { this._sessionID = value;}

SAWSOAP_saveResultSet.prototype.setSessionID = SAWSOAP_saveResultSet_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}saveResultSet
//
function SAWSOAP_saveResultSet_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._segmentPath != null) {
      xml = xml + '<jns0:segmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._segmentPath);
      xml = xml + '</jns0:segmentPath>';
     }
    }
    // block for local variables
    {
     if (this._treeNodePath != null) {
      xml = xml + this._treeNodePath.serialize(cxfjsutils, 'jns0:treeNodePath', null);
     }
    }
    // block for local variables
    {
     if (this._savedSegmentPath != null) {
      xml = xml + '<jns0:savedSegmentPath>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._savedSegmentPath);
      xml = xml + '</jns0:savedSegmentPath>';
     }
    }
    // block for local variables
    {
     if (this._segmentationOptions != null) {
      xml = xml + this._segmentationOptions.serialize(cxfjsutils, 'jns0:segmentationOptions', null);
     }
    }
    // block for local variables
    {
     if (this._SRCustomLabel != null) {
      xml = xml + '<jns0:SRCustomLabel>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._SRCustomLabel);
      xml = xml + '</jns0:SRCustomLabel>';
     }
    }
    // block for local variables
    {
     if (this._appendStaticSegment != null) {
      xml = xml + '<jns0:appendStaticSegment>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._appendStaticSegment);
      xml = xml + '</jns0:appendStaticSegment>';
     }
    }
    // block for local variables
    {
     if (this._sessionID != null) {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_saveResultSet.prototype.serialize = SAWSOAP_saveResultSet_serialize;

function SAWSOAP_saveResultSet_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_saveResultSet();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treeNodePath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'treeNodePath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_TreeNodePath_deserialize(cxfjsutils, curElement);
     }
     newobject.setTreeNodePath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing savedSegmentPath');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'savedSegmentPath')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSavedSegmentPath(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing segmentationOptions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'segmentationOptions')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = SAWSOAP_SegmentationOptions_deserialize(cxfjsutils, curElement);
     }
     newobject.setSegmentationOptions(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SRCustomLabel');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'SRCustomLabel')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSRCustomLabel(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing appendStaticSegment');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'appendStaticSegment')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setAppendStaticSegment(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'sessionID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSessionID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}purgeLog
//
function SAWSOAP_purgeLog () {
    this.typeMarker = 'SAWSOAP_purgeLog';
    this._items = [];
    this._timestamp = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_purgeLog.prototype.getItems
// element get for items
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for items
// setter function is is SAWSOAP_purgeLog.prototype.setItems
//
function SAWSOAP_purgeLog_getItems() { return this._items;}

SAWSOAP_purgeLog.prototype.getItems = SAWSOAP_purgeLog_getItems;

function SAWSOAP_purgeLog_setItems(value) { this._items = value;}

SAWSOAP_purgeLog.prototype.setItems = SAWSOAP_purgeLog_setItems;
//
// accessor is SAWSOAP_purgeLog.prototype.getTimestamp
// element get for timestamp
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
//
// element set for timestamp
// setter function is is SAWSOAP_purgeLog.prototype.setTimestamp
//
function SAWSOAP_purgeLog_getTimestamp() { return this._timestamp;}

SAWSOAP_purgeLog.prototype.getTimestamp = SAWSOAP_purgeLog_getTimestamp;

function SAWSOAP_purgeLog_setTimestamp(value) { this._timestamp = value;}

SAWSOAP_purgeLog.prototype.setTimestamp = SAWSOAP_purgeLog_setTimestamp;
//
// accessor is SAWSOAP_purgeLog.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_purgeLog.prototype.setSessionID
//
function SAWSOAP_purgeLog_getSessionID() { return this._sessionID;}

SAWSOAP_purgeLog.prototype.getSessionID = SAWSOAP_purgeLog_getSessionID;

function SAWSOAP_purgeLog_setSessionID(value) { this._sessionID = value;}

SAWSOAP_purgeLog.prototype.setSessionID = SAWSOAP_purgeLog_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}purgeLog
//
function SAWSOAP_purgeLog_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._items != null) {
      for (var ax = 0;ax < this._items.length;ax ++) {
       if (this._items[ax] == null) {
        xml = xml + '<jns0:items/>';
       } else {
        xml = xml + '<jns0:items>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._items[ax]);
        xml = xml + '</jns0:items>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:timestamp>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._timestamp);
     xml = xml + '</jns0:timestamp>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_purgeLog.prototype.serialize = SAWSOAP_purgeLog_serialize;

function SAWSOAP_purgeLog_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_purgeLog();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing items');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'items')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'items'));
     newobject.setItems(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing timestamp');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTimestamp(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}getPrivilegesStatusResult
//
function SAWSOAP_getPrivilegesStatusResult () {
    this.typeMarker = 'SAWSOAP_getPrivilegesStatusResult';
    this._return = [];
}

//
// accessor is SAWSOAP_getPrivilegesStatusResult.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
// - array
//
// element set for return
// setter function is is SAWSOAP_getPrivilegesStatusResult.prototype.setReturn
//
function SAWSOAP_getPrivilegesStatusResult_getReturn() { return this._return;}

SAWSOAP_getPrivilegesStatusResult.prototype.getReturn = SAWSOAP_getPrivilegesStatusResult_getReturn;

function SAWSOAP_getPrivilegesStatusResult_setReturn(value) { this._return = value;}

SAWSOAP_getPrivilegesStatusResult.prototype.setReturn = SAWSOAP_getPrivilegesStatusResult_setReturn;
//
// Serialize {urn://oracle.bi.webservices/v6}getPrivilegesStatusResult
//
function SAWSOAP_getPrivilegesStatusResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<jns0:return/>';
       } else {
        xml = xml + '<jns0:return>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._return[ax]);
        xml = xml + '</jns0:return>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_getPrivilegesStatusResult.prototype.serialize = SAWSOAP_getPrivilegesStatusResult_serialize;

function SAWSOAP_getPrivilegesStatusResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_getPrivilegesStatusResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = (value == 'true');
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACL
//
function SAWSOAP_updateGlobalPrivilegeACL () {
    this.typeMarker = 'SAWSOAP_updateGlobalPrivilegeACL';
    this._privilegeName = '';
    this._acl = null;
    this._updateACLParams = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_updateGlobalPrivilegeACL.prototype.getPrivilegeName
// element get for privilegeName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for privilegeName
// setter function is is SAWSOAP_updateGlobalPrivilegeACL.prototype.setPrivilegeName
//
function SAWSOAP_updateGlobalPrivilegeACL_getPrivilegeName() { return this._privilegeName;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.getPrivilegeName = SAWSOAP_updateGlobalPrivilegeACL_getPrivilegeName;

function SAWSOAP_updateGlobalPrivilegeACL_setPrivilegeName(value) { this._privilegeName = value;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.setPrivilegeName = SAWSOAP_updateGlobalPrivilegeACL_setPrivilegeName;
//
// accessor is SAWSOAP_updateGlobalPrivilegeACL.prototype.getAcl
// element get for acl
// - element type is {urn://oracle.bi.webservices/v6}ACL
// - required element
//
// element set for acl
// setter function is is SAWSOAP_updateGlobalPrivilegeACL.prototype.setAcl
//
function SAWSOAP_updateGlobalPrivilegeACL_getAcl() { return this._acl;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.getAcl = SAWSOAP_updateGlobalPrivilegeACL_getAcl;

function SAWSOAP_updateGlobalPrivilegeACL_setAcl(value) { this._acl = value;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.setAcl = SAWSOAP_updateGlobalPrivilegeACL_setAcl;
//
// accessor is SAWSOAP_updateGlobalPrivilegeACL.prototype.getUpdateACLParams
// element get for updateACLParams
// - element type is {urn://oracle.bi.webservices/v6}UpdateACLParams
// - required element
// - nillable
//
// element set for updateACLParams
// setter function is is SAWSOAP_updateGlobalPrivilegeACL.prototype.setUpdateACLParams
//
function SAWSOAP_updateGlobalPrivilegeACL_getUpdateACLParams() { return this._updateACLParams;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.getUpdateACLParams = SAWSOAP_updateGlobalPrivilegeACL_getUpdateACLParams;

function SAWSOAP_updateGlobalPrivilegeACL_setUpdateACLParams(value) { this._updateACLParams = value;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.setUpdateACLParams = SAWSOAP_updateGlobalPrivilegeACL_setUpdateACLParams;
//
// accessor is SAWSOAP_updateGlobalPrivilegeACL.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_updateGlobalPrivilegeACL.prototype.setSessionID
//
function SAWSOAP_updateGlobalPrivilegeACL_getSessionID() { return this._sessionID;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.getSessionID = SAWSOAP_updateGlobalPrivilegeACL_getSessionID;

function SAWSOAP_updateGlobalPrivilegeACL_setSessionID(value) { this._sessionID = value;}

SAWSOAP_updateGlobalPrivilegeACL.prototype.setSessionID = SAWSOAP_updateGlobalPrivilegeACL_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACL
//
function SAWSOAP_updateGlobalPrivilegeACL_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:privilegeName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._privilegeName);
     xml = xml + '</jns0:privilegeName>';
    }
    // block for local variables
    {
     xml = xml + this._acl.serialize(cxfjsutils, 'jns0:acl', null);
    }
    // block for local variables
    {
     if (this._updateACLParams == null) {
      xml = xml + '<jns0:updateACLParams xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._updateACLParams.serialize(cxfjsutils, 'jns0:updateACLParams', null);
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_updateGlobalPrivilegeACL.prototype.serialize = SAWSOAP_updateGlobalPrivilegeACL_serialize;

function SAWSOAP_updateGlobalPrivilegeACL_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_updateGlobalPrivilegeACL();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing privilegeName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPrivilegeName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing acl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_ACL_deserialize(cxfjsutils, curElement);
    }
    newobject.setAcl(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing updateACLParams');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = SAWSOAP_UpdateACLParams_deserialize(cxfjsutils, curElement);
    }
    newobject.setUpdateACLParams(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}updateCatalogItemACLResult
//
function SAWSOAP_updateCatalogItemACLResult () {
    this.typeMarker = 'SAWSOAP_updateCatalogItemACLResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}updateCatalogItemACLResult
//
function SAWSOAP_updateCatalogItemACLResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_updateCatalogItemACLResult.prototype.serialize = SAWSOAP_updateCatalogItemACLResult_serialize;

function SAWSOAP_updateCatalogItemACLResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_updateCatalogItemACLResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}isMember
//
function SAWSOAP_isMember () {
    this.typeMarker = 'SAWSOAP_isMember';
    this._group = [];
    this._member = [];
    this._expandGroups = null;
    this._sessionID = null;
}

//
// accessor is SAWSOAP_isMember.prototype.getGroup
// element get for group
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for group
// setter function is is SAWSOAP_isMember.prototype.setGroup
//
function SAWSOAP_isMember_getGroup() { return this._group;}

SAWSOAP_isMember.prototype.getGroup = SAWSOAP_isMember_getGroup;

function SAWSOAP_isMember_setGroup(value) { this._group = value;}

SAWSOAP_isMember.prototype.setGroup = SAWSOAP_isMember_setGroup;
//
// accessor is SAWSOAP_isMember.prototype.getMember
// element get for member
// - element type is {urn://oracle.bi.webservices/v6}Account
// - required element
// - array
//
// element set for member
// setter function is is SAWSOAP_isMember.prototype.setMember
//
function SAWSOAP_isMember_getMember() { return this._member;}

SAWSOAP_isMember.prototype.getMember = SAWSOAP_isMember_getMember;

function SAWSOAP_isMember_setMember(value) { this._member = value;}

SAWSOAP_isMember.prototype.setMember = SAWSOAP_isMember_setMember;
//
// accessor is SAWSOAP_isMember.prototype.getExpandGroups
// element get for expandGroups
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
//
// element set for expandGroups
// setter function is is SAWSOAP_isMember.prototype.setExpandGroups
//
function SAWSOAP_isMember_getExpandGroups() { return this._expandGroups;}

SAWSOAP_isMember.prototype.getExpandGroups = SAWSOAP_isMember_getExpandGroups;

function SAWSOAP_isMember_setExpandGroups(value) { this._expandGroups = value;}

SAWSOAP_isMember.prototype.setExpandGroups = SAWSOAP_isMember_setExpandGroups;
//
// accessor is SAWSOAP_isMember.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_isMember.prototype.setSessionID
//
function SAWSOAP_isMember_getSessionID() { return this._sessionID;}

SAWSOAP_isMember.prototype.getSessionID = SAWSOAP_isMember_getSessionID;

function SAWSOAP_isMember_setSessionID(value) { this._sessionID = value;}

SAWSOAP_isMember.prototype.setSessionID = SAWSOAP_isMember_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}isMember
//
function SAWSOAP_isMember_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._group != null) {
      for (var ax = 0;ax < this._group.length;ax ++) {
       if (this._group[ax] == null) {
        xml = xml + '<jns0:group/>';
       } else {
        xml = xml + this._group[ax].serialize(cxfjsutils, 'jns0:group', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._member != null) {
      for (var ax = 0;ax < this._member.length;ax ++) {
       if (this._member[ax] == null) {
        xml = xml + '<jns0:member/>';
       } else {
        xml = xml + this._member[ax].serialize(cxfjsutils, 'jns0:member', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._expandGroups != null) {
      xml = xml + '<jns0:expandGroups>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._expandGroups);
      xml = xml + '</jns0:expandGroups>';
     }
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_isMember.prototype.serialize = SAWSOAP_isMember_serialize;

function SAWSOAP_isMember_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_isMember();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'group'));
     newobject.setGroup(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing member');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = SAWSOAP_Account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'member'));
     newobject.setMember(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing expandGroups');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'urn://oracle.bi.webservices/v6', 'expandGroups')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setExpandGroups(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}copyItemResult
//
function SAWSOAP_copyItemResult () {
    this.typeMarker = 'SAWSOAP_copyItemResult';
}

//
// Serialize {urn://oracle.bi.webservices/v6}copyItemResult
//
function SAWSOAP_copyItemResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_copyItemResult.prototype.serialize = SAWSOAP_copyItemResult_serialize;

function SAWSOAP_copyItemResult_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_copyItemResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}upgradeXML
//
function SAWSOAP_upgradeXML () {
    this.typeMarker = 'SAWSOAP_upgradeXML';
    this._xml = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_upgradeXML.prototype.getXml
// element get for xml
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for xml
// setter function is is SAWSOAP_upgradeXML.prototype.setXml
//
function SAWSOAP_upgradeXML_getXml() { return this._xml;}

SAWSOAP_upgradeXML.prototype.getXml = SAWSOAP_upgradeXML_getXml;

function SAWSOAP_upgradeXML_setXml(value) { this._xml = value;}

SAWSOAP_upgradeXML.prototype.setXml = SAWSOAP_upgradeXML_setXml;
//
// accessor is SAWSOAP_upgradeXML.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_upgradeXML.prototype.setSessionID
//
function SAWSOAP_upgradeXML_getSessionID() { return this._sessionID;}

SAWSOAP_upgradeXML.prototype.getSessionID = SAWSOAP_upgradeXML_getSessionID;

function SAWSOAP_upgradeXML_setSessionID(value) { this._sessionID = value;}

SAWSOAP_upgradeXML.prototype.setSessionID = SAWSOAP_upgradeXML_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}upgradeXML
//
function SAWSOAP_upgradeXML_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:xml>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._xml);
     xml = xml + '</jns0:xml>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_upgradeXML.prototype.serialize = SAWSOAP_upgradeXML_serialize;

function SAWSOAP_upgradeXML_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_upgradeXML();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing xml');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setXml(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn://oracle.bi.webservices/v6}createLink
//
function SAWSOAP_createLink () {
    this.typeMarker = 'SAWSOAP_createLink';
    this._path = '';
    this._pathTarget = '';
    this._overwriteIfExists = '';
    this._sessionID = null;
}

//
// accessor is SAWSOAP_createLink.prototype.getPath
// element get for path
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for path
// setter function is is SAWSOAP_createLink.prototype.setPath
//
function SAWSOAP_createLink_getPath() { return this._path;}

SAWSOAP_createLink.prototype.getPath = SAWSOAP_createLink_getPath;

function SAWSOAP_createLink_setPath(value) { this._path = value;}

SAWSOAP_createLink.prototype.setPath = SAWSOAP_createLink_setPath;
//
// accessor is SAWSOAP_createLink.prototype.getPathTarget
// element get for pathTarget
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for pathTarget
// setter function is is SAWSOAP_createLink.prototype.setPathTarget
//
function SAWSOAP_createLink_getPathTarget() { return this._pathTarget;}

SAWSOAP_createLink.prototype.getPathTarget = SAWSOAP_createLink_getPathTarget;

function SAWSOAP_createLink_setPathTarget(value) { this._pathTarget = value;}

SAWSOAP_createLink.prototype.setPathTarget = SAWSOAP_createLink_setPathTarget;
//
// accessor is SAWSOAP_createLink.prototype.getOverwriteIfExists
// element get for overwriteIfExists
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for overwriteIfExists
// setter function is is SAWSOAP_createLink.prototype.setOverwriteIfExists
//
function SAWSOAP_createLink_getOverwriteIfExists() { return this._overwriteIfExists;}

SAWSOAP_createLink.prototype.getOverwriteIfExists = SAWSOAP_createLink_getOverwriteIfExists;

function SAWSOAP_createLink_setOverwriteIfExists(value) { this._overwriteIfExists = value;}

SAWSOAP_createLink.prototype.setOverwriteIfExists = SAWSOAP_createLink_setOverwriteIfExists;
//
// accessor is SAWSOAP_createLink.prototype.getSessionID
// element get for sessionID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - nillable
//
// element set for sessionID
// setter function is is SAWSOAP_createLink.prototype.setSessionID
//
function SAWSOAP_createLink_getSessionID() { return this._sessionID;}

SAWSOAP_createLink.prototype.getSessionID = SAWSOAP_createLink_getSessionID;

function SAWSOAP_createLink_setSessionID(value) { this._sessionID = value;}

SAWSOAP_createLink.prototype.setSessionID = SAWSOAP_createLink_setSessionID;
//
// Serialize {urn://oracle.bi.webservices/v6}createLink
//
function SAWSOAP_createLink_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'urn://oracle.bi.webservices/v6\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:path>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._path);
     xml = xml + '</jns0:path>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:pathTarget>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._pathTarget);
     xml = xml + '</jns0:pathTarget>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:overwriteIfExists>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._overwriteIfExists);
     xml = xml + '</jns0:overwriteIfExists>';
    }
    // block for local variables
    {
     if (this._sessionID == null) {
      xml = xml + '<jns0:sessionID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:sessionID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sessionID);
      xml = xml + '</jns0:sessionID>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

SAWSOAP_createLink.prototype.serialize = SAWSOAP_createLink_serialize;

function SAWSOAP_createLink_deserialize (cxfjsutils, element) {
    var newobject = new SAWSOAP_createLink();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing path');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPath(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pathTarget');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPathTarget(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing overwriteIfExists');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setOverwriteIfExists(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sessionID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {urn://oracle.bi.webservices/v6}HtmlViewService
//

// Javascript for {urn://oracle.bi.webservices/v6}HtmlViewServiceSoap

function SAWSOAP_HtmlViewServiceSoap () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}upgradeXMLResult'] = SAWSOAP_upgradeXMLResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}upgradeXMLResult'] = SAWSOAP_upgradeXMLResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}importResult'] = SAWSOAP_importResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}importResult'] = SAWSOAP_importResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setBridge'] = SAWSOAP_setBridge_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setBridge'] = SAWSOAP_setBridge_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteItem'] = SAWSOAP_deleteItem_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteItem'] = SAWSOAP_deleteItem_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}cancelQueryResult'] = SAWSOAP_cancelQueryResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}cancelQueryResult'] = SAWSOAP_cancelQueryResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSubjectAreasResult'] = SAWSOAP_getSubjectAreasResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSubjectAreasResult'] = SAWSOAP_getSubjectAreasResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}renameAccountsResult'] = SAWSOAP_renameAccountsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}renameAccountsResult'] = SAWSOAP_renameAccountsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logonex'] = SAWSOAP_logonex_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logonex'] = SAWSOAP_logonex_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeXMLQueryResult'] = SAWSOAP_executeXMLQueryResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeXMLQueryResult'] = SAWSOAP_executeXMLQueryResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeIBotNowResult'] = SAWSOAP_executeIBotNowResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeIBotNowResult'] = SAWSOAP_executeIBotNowResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSessionVariables'] = SAWSOAP_getSessionVariables_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSessionVariables'] = SAWSOAP_getSessionVariables_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeListFilesResult'] = SAWSOAP_writeListFilesResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeListFilesResult'] = SAWSOAP_writeListFilesResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}keepAlive'] = SAWSOAP_keepAlive_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}keepAlive'] = SAWSOAP_keepAlive_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}evaluateInlineConditionResult'] = SAWSOAP_evaluateInlineConditionResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}evaluateInlineConditionResult'] = SAWSOAP_evaluateInlineConditionResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCounts'] = SAWSOAP_getCounts_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCounts'] = SAWSOAP_getCounts_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSubjectAreas'] = SAWSOAP_getSubjectAreas_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSubjectAreas'] = SAWSOAP_getSubjectAreas_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHtmlForReportResult'] = SAWSOAP_getHtmlForReportResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHtmlForReportResult'] = SAWSOAP_getHtmlForReportResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteResultSetResult'] = SAWSOAP_deleteResultSetResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteResultSetResult'] = SAWSOAP_deleteResultSetResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}removeFolderResult'] = SAWSOAP_removeFolderResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}removeFolderResult'] = SAWSOAP_removeFolderResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSubItems'] = SAWSOAP_getSubItems_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSubItems'] = SAWSOAP_getSubItems_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHeadersHtmlResult'] = SAWSOAP_getHeadersHtmlResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHeadersHtmlResult'] = SAWSOAP_getHeadersHtmlResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPromptedFilters'] = SAWSOAP_getPromptedFilters_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPromptedFilters'] = SAWSOAP_getPromptedFilters_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}sendMessage'] = SAWSOAP_sendMessage_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}sendMessage'] = SAWSOAP_sendMessage_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}forgetAccountsResult'] = SAWSOAP_forgetAccountsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}forgetAccountsResult'] = SAWSOAP_forgetAccountsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}renameAccounts'] = SAWSOAP_renameAccounts_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}renameAccounts'] = SAWSOAP_renameAccounts_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHeadersHtml'] = SAWSOAP_getHeadersHtml_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHeadersHtml'] = SAWSOAP_getHeadersHtml_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}unsubscribeResult'] = SAWSOAP_unsubscribeResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}unsubscribeResult'] = SAWSOAP_unsubscribeResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getConditionCustomizableReportElements'] = SAWSOAP_getConditionCustomizableReportElements_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getConditionCustomizableReportElements'] = SAWSOAP_getConditionCustomizableReportElements_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}sendMessageResult'] = SAWSOAP_sendMessageResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}sendMessageResult'] = SAWSOAP_sendMessageResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}impersonateResult'] = SAWSOAP_impersonateResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}impersonateResult'] = SAWSOAP_impersonateResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeIBotNow'] = SAWSOAP_executeIBotNow_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeIBotNow'] = SAWSOAP_executeIBotNow_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}generateReportSQL'] = SAWSOAP_generateReportSQL_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}generateReportSQL'] = SAWSOAP_generateReportSQL_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}createLinkResult'] = SAWSOAP_createLinkResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}createLinkResult'] = SAWSOAP_createLinkResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}purgeLogResult'] = SAWSOAP_purgeLogResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}purgeLogResult'] = SAWSOAP_purgeLogResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}evaluateCondition'] = SAWSOAP_evaluateCondition_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}evaluateCondition'] = SAWSOAP_evaluateCondition_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeObjectsResult'] = SAWSOAP_writeObjectsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeObjectsResult'] = SAWSOAP_writeObjectsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}moveItem'] = SAWSOAP_moveItem_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}moveItem'] = SAWSOAP_moveItem_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeTable'] = SAWSOAP_describeTable_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeTable'] = SAWSOAP_describeTable_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}maintenanceModeResult'] = SAWSOAP_maintenanceModeResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}maintenanceModeResult'] = SAWSOAP_maintenanceModeResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}purgeCacheResult'] = SAWSOAP_purgeCacheResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}purgeCacheResult'] = SAWSOAP_purgeCacheResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setItemPropertyResult'] = SAWSOAP_setItemPropertyResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setItemPropertyResult'] = SAWSOAP_setItemPropertyResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}leaveGroupsResult'] = SAWSOAP_leaveGroupsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}leaveGroupsResult'] = SAWSOAP_leaveGroupsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}generateReportSQLResult'] = SAWSOAP_generateReportSQLResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}generateReportSQLResult'] = SAWSOAP_generateReportSQLResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCurUserResult'] = SAWSOAP_getCurUserResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCurUserResult'] = SAWSOAP_getCurUserResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}forgetAccounts'] = SAWSOAP_forgetAccounts_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}forgetAccounts'] = SAWSOAP_forgetAccounts_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}prepareCache'] = SAWSOAP_prepareCache_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}prepareCache'] = SAWSOAP_prepareCache_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logoff'] = SAWSOAP_logoff_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logoff'] = SAWSOAP_logoff_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}applyReportDefaults'] = SAWSOAP_applyReportDefaults_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}applyReportDefaults'] = SAWSOAP_applyReportDefaults_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}createFolderResult'] = SAWSOAP_createFolderResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}createFolderResult'] = SAWSOAP_createFolderResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGlobalPrivileges'] = SAWSOAP_getGlobalPrivileges_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGlobalPrivileges'] = SAWSOAP_getGlobalPrivileges_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegeACLResult'] = SAWSOAP_getGlobalPrivilegeACLResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegeACLResult'] = SAWSOAP_getGlobalPrivilegeACLResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCommonBodyHtmlResult'] = SAWSOAP_getCommonBodyHtmlResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCommonBodyHtmlResult'] = SAWSOAP_getCommonBodyHtmlResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHtmlForReport'] = SAWSOAP_getHtmlForReport_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHtmlForReport'] = SAWSOAP_getHtmlForReport_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeXMLQuery'] = SAWSOAP_executeXMLQuery_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeXMLQuery'] = SAWSOAP_executeXMLQuery_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeIBot'] = SAWSOAP_writeIBot_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeIBot'] = SAWSOAP_writeIBot_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}maintenanceMode'] = SAWSOAP_maintenanceMode_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}maintenanceMode'] = SAWSOAP_maintenanceMode_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}endPage'] = SAWSOAP_endPage_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}endPage'] = SAWSOAP_endPage_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}addReportToPageResult'] = SAWSOAP_addReportToPageResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}addReportToPageResult'] = SAWSOAP_addReportToPageResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}clearQueryCacheResult'] = SAWSOAP_clearQueryCacheResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}clearQueryCacheResult'] = SAWSOAP_clearQueryCacheResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logonResult'] = SAWSOAP_logonResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logonResult'] = SAWSOAP_logonResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACLResult'] = SAWSOAP_updateGlobalPrivilegeACLResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACLResult'] = SAWSOAP_updateGlobalPrivilegeACLResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPermissionsResult'] = SAWSOAP_getPermissionsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPermissionsResult'] = SAWSOAP_getPermissionsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeSubjectArea'] = SAWSOAP_describeSubjectArea_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeSubjectArea'] = SAWSOAP_describeSubjectArea_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPermissions'] = SAWSOAP_getPermissions_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPermissions'] = SAWSOAP_getPermissions_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getItemInfoResult'] = SAWSOAP_getItemInfoResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getItemInfoResult'] = SAWSOAP_getItemInfoResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}addReportToPage'] = SAWSOAP_addReportToPage_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}addReportToPage'] = SAWSOAP_addReportToPage_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getAccounts'] = SAWSOAP_getAccounts_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getAccounts'] = SAWSOAP_getAccounts_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}applyReportParams'] = SAWSOAP_applyReportParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}applyReportParams'] = SAWSOAP_applyReportParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteItemResult'] = SAWSOAP_deleteItemResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteItemResult'] = SAWSOAP_deleteItemResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}purgeCache'] = SAWSOAP_purgeCache_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}purgeCache'] = SAWSOAP_purgeCache_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}unsubscribe'] = SAWSOAP_unsubscribe_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}unsubscribe'] = SAWSOAP_unsubscribe_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCountsResult'] = SAWSOAP_getCountsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCountsResult'] = SAWSOAP_getCountsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}prepareCacheResult'] = SAWSOAP_prepareCacheResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}prepareCacheResult'] = SAWSOAP_prepareCacheResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCurUser'] = SAWSOAP_getCurUser_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCurUser'] = SAWSOAP_getCurUser_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}moveItemResult'] = SAWSOAP_moveItemResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}moveItemResult'] = SAWSOAP_moveItemResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}applyReportDefaultsResult'] = SAWSOAP_applyReportDefaultsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}applyReportDefaultsResult'] = SAWSOAP_applyReportDefaultsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}startPage'] = SAWSOAP_startPage_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}startPage'] = SAWSOAP_startPage_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeColumn'] = SAWSOAP_describeColumn_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeColumn'] = SAWSOAP_describeColumn_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logon'] = SAWSOAP_logon_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logon'] = SAWSOAP_logon_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}saveResultSetResult'] = SAWSOAP_saveResultSetResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}saveResultSetResult'] = SAWSOAP_saveResultSetResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSubItemsResult'] = SAWSOAP_getSubItemsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSubItemsResult'] = SAWSOAP_getSubItemsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getConditionCustomizableReportElementsResult'] = SAWSOAP_getConditionCustomizableReportElementsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getConditionCustomizableReportElementsResult'] = SAWSOAP_getConditionCustomizableReportElementsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}applyReportParamsResult'] = SAWSOAP_applyReportParamsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}applyReportParamsResult'] = SAWSOAP_applyReportParamsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}joinGroupsResult'] = SAWSOAP_joinGroupsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}joinGroupsResult'] = SAWSOAP_joinGroupsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setOwnership'] = SAWSOAP_setOwnership_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setOwnership'] = SAWSOAP_setOwnership_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}fetchNext'] = SAWSOAP_fetchNext_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}fetchNext'] = SAWSOAP_fetchNext_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}impersonateex'] = SAWSOAP_impersonateex_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}impersonateex'] = SAWSOAP_impersonateex_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}evaluateConditionResult'] = SAWSOAP_evaluateConditionResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}evaluateConditionResult'] = SAWSOAP_evaluateConditionResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setItemProperty'] = SAWSOAP_setItemProperty_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setItemProperty'] = SAWSOAP_setItemProperty_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReportResult'] = SAWSOAP_getHtmlForPageWithOneReportResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReportResult'] = SAWSOAP_getHtmlForPageWithOneReportResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeSubjectAreaResult'] = SAWSOAP_describeSubjectAreaResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeSubjectAreaResult'] = SAWSOAP_describeSubjectAreaResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}copyItem'] = SAWSOAP_copyItem_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}copyItem'] = SAWSOAP_copyItem_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}pasteItem2Result'] = SAWSOAP_pasteItem2Result_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}pasteItem2Result'] = SAWSOAP_pasteItem2Result_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}startPageResult'] = SAWSOAP_startPageResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}startPageResult'] = SAWSOAP_startPageResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSessionEnvironment'] = SAWSOAP_getSessionEnvironment_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSessionEnvironment'] = SAWSOAP_getSessionEnvironment_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}cancelQuery'] = SAWSOAP_cancelQuery_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}cancelQuery'] = SAWSOAP_cancelQuery_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPromptedFiltersResult'] = SAWSOAP_getPromptedFiltersResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPromptedFiltersResult'] = SAWSOAP_getPromptedFiltersResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}subscribe'] = SAWSOAP_subscribe_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}subscribe'] = SAWSOAP_subscribe_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPrivilegesStatus'] = SAWSOAP_getPrivilegesStatus_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPrivilegesStatus'] = SAWSOAP_getPrivilegesStatus_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}readObjectsResult'] = SAWSOAP_readObjectsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}readObjectsResult'] = SAWSOAP_readObjectsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setOwnershipResult'] = SAWSOAP_setOwnershipResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setOwnershipResult'] = SAWSOAP_setOwnershipResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}markForReplicationResult'] = SAWSOAP_markForReplicationResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}markForReplicationResult'] = SAWSOAP_markForReplicationResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeIBotResult'] = SAWSOAP_writeIBotResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeIBotResult'] = SAWSOAP_writeIBotResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getAccountsResult'] = SAWSOAP_getAccountsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getAccountsResult'] = SAWSOAP_getAccountsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logoffResult'] = SAWSOAP_logoffResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logoffResult'] = SAWSOAP_logoffResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}subscribeResult'] = SAWSOAP_subscribeResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}subscribeResult'] = SAWSOAP_subscribeResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getItemInfo'] = SAWSOAP_getItemInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getItemInfo'] = SAWSOAP_getItemInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}logonexResult'] = SAWSOAP_logonexResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}logonexResult'] = SAWSOAP_logonexResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeSQLQueryResult'] = SAWSOAP_executeSQLQueryResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeSQLQueryResult'] = SAWSOAP_executeSQLQueryResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSessionEnvironmentResult'] = SAWSOAP_getSessionEnvironmentResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSessionEnvironmentResult'] = SAWSOAP_getSessionEnvironmentResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setItemAttributesResult'] = SAWSOAP_setItemAttributesResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setItemAttributesResult'] = SAWSOAP_setItemAttributesResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeColumnResult'] = SAWSOAP_describeColumnResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeColumnResult'] = SAWSOAP_describeColumnResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}evaluateInlineCondition'] = SAWSOAP_evaluateInlineCondition_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}evaluateInlineCondition'] = SAWSOAP_evaluateInlineCondition_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}executeSQLQuery'] = SAWSOAP_executeSQLQuery_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}executeSQLQuery'] = SAWSOAP_executeSQLQuery_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getMembersResult'] = SAWSOAP_getMembersResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getMembersResult'] = SAWSOAP_getMembersResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getSessionVariablesResult'] = SAWSOAP_getSessionVariablesResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getSessionVariablesResult'] = SAWSOAP_getSessionVariablesResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPromptedColumnsResult'] = SAWSOAP_getPromptedColumnsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPromptedColumnsResult'] = SAWSOAP_getPromptedColumnsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}import'] = SAWSOAP_import_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}import'] = SAWSOAP_import_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getJobInfo'] = SAWSOAP_getJobInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getJobInfo'] = SAWSOAP_getJobInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}leaveGroups'] = SAWSOAP_leaveGroups_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}leaveGroups'] = SAWSOAP_leaveGroups_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}moveIBot'] = SAWSOAP_moveIBot_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}moveIBot'] = SAWSOAP_moveIBot_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteIBot'] = SAWSOAP_deleteIBot_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteIBot'] = SAWSOAP_deleteIBot_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}pasteItem2'] = SAWSOAP_pasteItem2_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}pasteItem2'] = SAWSOAP_pasteItem2_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteResultSet'] = SAWSOAP_deleteResultSet_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteResultSet'] = SAWSOAP_deleteResultSet_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}cancelJobResult'] = SAWSOAP_cancelJobResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}cancelJobResult'] = SAWSOAP_cancelJobResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}markForReplication'] = SAWSOAP_markForReplication_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}markForReplication'] = SAWSOAP_markForReplication_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}removeFolder'] = SAWSOAP_removeFolder_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}removeFolder'] = SAWSOAP_removeFolder_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}clearQueryCache'] = SAWSOAP_clearQueryCache_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}clearQueryCache'] = SAWSOAP_clearQueryCache_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}updateCatalogItemACL'] = SAWSOAP_updateCatalogItemACL_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}updateCatalogItemACL'] = SAWSOAP_updateCatalogItemACL_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getMembers'] = SAWSOAP_getMembers_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getMembers'] = SAWSOAP_getMembers_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}deleteIBotResult'] = SAWSOAP_deleteIBotResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}deleteIBotResult'] = SAWSOAP_deleteIBotResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}isMemberResult'] = SAWSOAP_isMemberResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}isMemberResult'] = SAWSOAP_isMemberResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeListFiles'] = SAWSOAP_writeListFiles_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeListFiles'] = SAWSOAP_writeListFiles_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReport'] = SAWSOAP_getHtmlForPageWithOneReport_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReport'] = SAWSOAP_getHtmlForPageWithOneReport_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegesResult'] = SAWSOAP_getGlobalPrivilegesResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegesResult'] = SAWSOAP_getGlobalPrivilegesResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegeACL'] = SAWSOAP_getGlobalPrivilegeACL_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGlobalPrivilegeACL'] = SAWSOAP_getGlobalPrivilegeACL_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getCommonBodyHtml'] = SAWSOAP_getCommonBodyHtml_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getCommonBodyHtml'] = SAWSOAP_getCommonBodyHtml_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}fetchNextResult'] = SAWSOAP_fetchNextResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}fetchNextResult'] = SAWSOAP_fetchNextResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}copyItem2Result'] = SAWSOAP_copyItem2Result_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}copyItem2Result'] = SAWSOAP_copyItem2Result_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPromptedColumns'] = SAWSOAP_getPromptedColumns_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPromptedColumns'] = SAWSOAP_getPromptedColumns_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}exportResult'] = SAWSOAP_exportResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}exportResult'] = SAWSOAP_exportResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}keepAliveResult'] = SAWSOAP_keepAliveResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}keepAliveResult'] = SAWSOAP_keepAliveResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}impersonate'] = SAWSOAP_impersonate_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}impersonate'] = SAWSOAP_impersonate_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}impersonateexResult'] = SAWSOAP_impersonateexResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}impersonateexResult'] = SAWSOAP_impersonateexResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}moveIBotResult'] = SAWSOAP_moveIBotResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}moveIBotResult'] = SAWSOAP_moveIBotResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setItemAttributes'] = SAWSOAP_setItemAttributes_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setItemAttributes'] = SAWSOAP_setItemAttributes_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}describeTableResult'] = SAWSOAP_describeTableResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}describeTableResult'] = SAWSOAP_describeTableResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}setBridgeResult'] = SAWSOAP_setBridgeResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}setBridgeResult'] = SAWSOAP_setBridgeResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getJobInfoResult'] = SAWSOAP_getJobInfoResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getJobInfoResult'] = SAWSOAP_getJobInfoResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}endPageResult'] = SAWSOAP_endPageResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}endPageResult'] = SAWSOAP_endPageResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}voidType'] = SAWSOAP_voidType_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}voidType'] = SAWSOAP_voidType_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}createFolder'] = SAWSOAP_createFolder_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}createFolder'] = SAWSOAP_createFolder_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}export'] = SAWSOAP_export_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}export'] = SAWSOAP_export_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}joinGroups'] = SAWSOAP_joinGroups_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}joinGroups'] = SAWSOAP_joinGroups_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGroups'] = SAWSOAP_getGroups_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGroups'] = SAWSOAP_getGroups_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}readObjects'] = SAWSOAP_readObjects_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}readObjects'] = SAWSOAP_readObjects_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}copyItem2'] = SAWSOAP_copyItem2_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}copyItem2'] = SAWSOAP_copyItem2_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getGroupsResult'] = SAWSOAP_getGroupsResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getGroupsResult'] = SAWSOAP_getGroupsResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}cancelJob'] = SAWSOAP_cancelJob_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}cancelJob'] = SAWSOAP_cancelJob_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}writeObjects'] = SAWSOAP_writeObjects_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}writeObjects'] = SAWSOAP_writeObjects_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}saveResultSet'] = SAWSOAP_saveResultSet_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}saveResultSet'] = SAWSOAP_saveResultSet_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}purgeLog'] = SAWSOAP_purgeLog_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}purgeLog'] = SAWSOAP_purgeLog_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}getPrivilegesStatusResult'] = SAWSOAP_getPrivilegesStatusResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}getPrivilegesStatusResult'] = SAWSOAP_getPrivilegesStatusResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACL'] = SAWSOAP_updateGlobalPrivilegeACL_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}updateGlobalPrivilegeACL'] = SAWSOAP_updateGlobalPrivilegeACL_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}updateCatalogItemACLResult'] = SAWSOAP_updateCatalogItemACLResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}updateCatalogItemACLResult'] = SAWSOAP_updateCatalogItemACLResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}isMember'] = SAWSOAP_isMember_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}isMember'] = SAWSOAP_isMember_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}copyItemResult'] = SAWSOAP_copyItemResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}copyItemResult'] = SAWSOAP_copyItemResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}upgradeXML'] = SAWSOAP_upgradeXML_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}upgradeXML'] = SAWSOAP_upgradeXML_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}createLink'] = SAWSOAP_createLink_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}createLink'] = SAWSOAP_createLink_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}TemplateInfoInstance'] = SAWSOAP_TemplateInfoInstance_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}TemplateInfoInstance'] = SAWSOAP_TemplateInfoInstance_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}TemplateInfo'] = SAWSOAP_TemplateInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}TemplateInfo'] = SAWSOAP_TemplateInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SessionEnvironment'] = SAWSOAP_SessionEnvironment_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SessionEnvironment'] = SAWSOAP_SessionEnvironment_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}UpdateACLParams'] = SAWSOAP_UpdateACLParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}UpdateACLParams'] = SAWSOAP_UpdateACLParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}NameValueArrayPair'] = SAWSOAP_NameValueArrayPair_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}NameValueArrayPair'] = SAWSOAP_NameValueArrayPair_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}Privilege'] = SAWSOAP_Privilege_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}Privilege'] = SAWSOAP_Privilege_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ReportRef'] = SAWSOAP_ReportRef_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ReportRef'] = SAWSOAP_ReportRef_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SATable'] = SAWSOAP_SATable_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SATable'] = SAWSOAP_SATable_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}NameValuePair'] = SAWSOAP_NameValuePair_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}NameValuePair'] = SAWSOAP_NameValuePair_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}AccessControlToken'] = SAWSOAP_AccessControlToken_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}AccessControlToken'] = SAWSOAP_AccessControlToken_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions'] = SAWSOAP_XMLQueryExecutionOptions_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}XMLQueryExecutionOptions'] = SAWSOAP_XMLQueryExecutionOptions_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}GetSubItemsParams'] = SAWSOAP_GetSubItemsParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}GetSubItemsParams'] = SAWSOAP_GetSubItemsParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SAWException'] = SAWSOAP_SAWException_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SAWException'] = SAWSOAP_SAWException_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ACL'] = SAWSOAP_ACL_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ACL'] = SAWSOAP_ACL_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ReportParams'] = SAWSOAP_ReportParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ReportParams'] = SAWSOAP_ReportParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}QueryResults'] = SAWSOAP_QueryResults_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}QueryResults'] = SAWSOAP_QueryResults_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}JobStats'] = SAWSOAP_JobStats_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}JobStats'] = SAWSOAP_JobStats_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}GetSubItemsFilter'] = SAWSOAP_GetSubItemsFilter_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}GetSubItemsFilter'] = SAWSOAP_GetSubItemsFilter_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}PathMap'] = SAWSOAP_PathMap_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}PathMap'] = SAWSOAP_PathMap_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SAColumn'] = SAWSOAP_SAColumn_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SAColumn'] = SAWSOAP_SAColumn_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}TreeNodePath'] = SAWSOAP_TreeNodePath_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}TreeNodePath'] = SAWSOAP_TreeNodePath_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}Variable'] = SAWSOAP_Variable_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}Variable'] = SAWSOAP_Variable_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SegmentationOptions'] = SAWSOAP_SegmentationOptions_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SegmentationOptions'] = SAWSOAP_SegmentationOptions_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}CatalogItemsFilter'] = SAWSOAP_CatalogItemsFilter_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}CatalogItemsFilter'] = SAWSOAP_CatalogItemsFilter_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ImportError'] = SAWSOAP_ImportError_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ImportError'] = SAWSOAP_ImportError_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}UpdateCatalogItemACLParams'] = SAWSOAP_UpdateCatalogItemACLParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}UpdateCatalogItemACLParams'] = SAWSOAP_UpdateCatalogItemACLParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}StartPageParams'] = SAWSOAP_StartPageParams_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}StartPageParams'] = SAWSOAP_StartPageParams_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ErrorInfo'] = SAWSOAP_ErrorInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ErrorInfo'] = SAWSOAP_ErrorInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SASubjectArea'] = SAWSOAP_SASubjectArea_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SASubjectArea'] = SAWSOAP_SASubjectArea_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}AuthResult'] = SAWSOAP_AuthResult_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}AuthResult'] = SAWSOAP_AuthResult_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}LogonParameter'] = SAWSOAP_LogonParameter_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}LogonParameter'] = SAWSOAP_LogonParameter_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}PromptedColumnInfo'] = SAWSOAP_PromptedColumnInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}PromptedColumnInfo'] = SAWSOAP_PromptedColumnInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ReportHTMLOptions'] = SAWSOAP_ReportHTMLOptions_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ReportHTMLOptions'] = SAWSOAP_ReportHTMLOptions_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}FileInfo'] = SAWSOAP_FileInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}FileInfo'] = SAWSOAP_FileInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}JobInfo'] = SAWSOAP_JobInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}JobInfo'] = SAWSOAP_JobInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SAWLocale'] = SAWSOAP_SAWLocale_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SAWLocale'] = SAWSOAP_SAWLocale_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}arrayOfGUIDs'] = SAWSOAP_arrayOfGUIDs_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}arrayOfGUIDs'] = SAWSOAP_arrayOfGUIDs_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}Account'] = SAWSOAP_Account_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}Account'] = SAWSOAP_Account_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}SAWSessionParameters'] = SAWSOAP_SAWSessionParameters_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}SAWSessionParameters'] = SAWSOAP_SAWSessionParameters_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}ItemInfo'] = SAWSOAP_ItemInfo_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}ItemInfo'] = SAWSOAP_ItemInfo_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}PathMapEntry'] = SAWSOAP_PathMapEntry_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}PathMapEntry'] = SAWSOAP_PathMapEntry_deserialize;
    this.globalElementSerializers['{urn://oracle.bi.webservices/v6}CatalogObject'] = SAWSOAP_CatalogObject_serialize;
    this.globalElementDeserializers['{urn://oracle.bi.webservices/v6}CatalogObject'] = SAWSOAP_CatalogObject_deserialize;
}

function SAWSOAP_startPage_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_startPageOut_deserializeResponse');
     responseObject = SAWSOAP_startPageOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.startPage_onsuccess = SAWSOAP_startPage_op_onsuccess;

function SAWSOAP_startPage_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.startPage_onerror = SAWSOAP_startPage_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}startPage
// Wrapped operation.
// parameter options
// - Object constructor is SAWSOAP_StartPageParams
// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_startPage_op(successCallback, errorCallback, options, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = options;
    args[1] = sessionID;
    xml = this.startPageIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.startPage_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.startPage_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#startPage';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.startPage = SAWSOAP_startPage_op;

function SAWSOAP_startPageIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_startPage();
    wrapperObj.setOptions(args[0]);
    wrapperObj.setSessionID(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:startPage', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.startPageIn_serializeInput = SAWSOAP_startPageIn_serializeInput;

function SAWSOAP_startPageOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = SAWSOAP_startPageResult_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function SAWSOAP_setBridge_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_setBridgeOut_deserializeResponse');
     responseObject = SAWSOAP_setBridgeOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.setBridge_onsuccess = SAWSOAP_setBridge_op_onsuccess;

function SAWSOAP_setBridge_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.setBridge_onerror = SAWSOAP_setBridge_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}setBridge
// Wrapped operation.
// parameter bridge
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_setBridge_op(successCallback, errorCallback, bridge, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = bridge;
    args[1] = sessionID;
    xml = this.setBridgeIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setBridge_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setBridge_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#setBridge';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.setBridge = SAWSOAP_setBridge_op;

function SAWSOAP_setBridgeIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_setBridge();
    wrapperObj.setBridge(args[0]);
    wrapperObj.setSessionID(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setBridge', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.setBridgeIn_serializeInput = SAWSOAP_setBridgeIn_serializeInput;

function SAWSOAP_setBridgeOut_deserializeResponse(cxfjsutils, partElement) {
}
function SAWSOAP_getHtmlForPageWithOneReport_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_getHtmlForPageWithOneReportOut_deserializeResponse');
     responseObject = SAWSOAP_getHtmlForPageWithOneReportOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForPageWithOneReport_onsuccess = SAWSOAP_getHtmlForPageWithOneReport_op_onsuccess;

function SAWSOAP_getHtmlForPageWithOneReport_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForPageWithOneReport_onerror = SAWSOAP_getHtmlForPageWithOneReport_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}getHtmlForPageWithOneReport
// Wrapped operation.
// parameter reportID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter report
// - Object constructor is SAWSOAP_ReportRef
// parameter reportViewName
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter reportParams
// - Object constructor is SAWSOAP_ReportParams
// parameter reportOptions
// - Object constructor is SAWSOAP_ReportHTMLOptions
// parameter pageParams
// - Object constructor is SAWSOAP_StartPageParams
// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_getHtmlForPageWithOneReport_op(successCallback, errorCallback, reportID, report, reportViewName, reportParams, reportOptions, pageParams, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(7);
    args[0] = reportID;
    args[1] = report;
    args[2] = reportViewName;
    args[3] = reportParams;
    args[4] = reportOptions;
    args[5] = pageParams;
    args[6] = sessionID;
    xml = this.getHtmlForPageWithOneReportIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getHtmlForPageWithOneReport_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getHtmlForPageWithOneReport_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#getHtmlForPageWithOneReport';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForPageWithOneReport = SAWSOAP_getHtmlForPageWithOneReport_op;

function SAWSOAP_getHtmlForPageWithOneReportIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_getHtmlForPageWithOneReport();
    wrapperObj.setReportID(args[0]);
    wrapperObj.setReport(args[1]);
    wrapperObj.setReportViewName(args[2]);
    wrapperObj.setReportParams(args[3]);
    wrapperObj.setReportOptions(args[4]);
    wrapperObj.setPageParams(args[5]);
    wrapperObj.setSessionID(args[6]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getHtmlForPageWithOneReport', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForPageWithOneReportIn_serializeInput = SAWSOAP_getHtmlForPageWithOneReportIn_serializeInput;

function SAWSOAP_getHtmlForPageWithOneReportOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = SAWSOAP_getHtmlForPageWithOneReportResult_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function SAWSOAP_getHtmlForReport_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_getHtmlForReportOut_deserializeResponse');
     responseObject = SAWSOAP_getHtmlForReportOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForReport_onsuccess = SAWSOAP_getHtmlForReport_op_onsuccess;

function SAWSOAP_getHtmlForReport_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForReport_onerror = SAWSOAP_getHtmlForReport_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}getHtmlForReport
// Wrapped operation.
// parameter pageID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter pageReportID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_getHtmlForReport_op(successCallback, errorCallback, pageID, pageReportID, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = pageID;
    args[1] = pageReportID;
    args[2] = sessionID;
    xml = this.getHtmlForReportIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getHtmlForReport_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getHtmlForReport_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#getHtmlForReport';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForReport = SAWSOAP_getHtmlForReport_op;

function SAWSOAP_getHtmlForReportIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_getHtmlForReport();
    wrapperObj.setPageID(args[0]);
    wrapperObj.setPageReportID(args[1]);
    wrapperObj.setSessionID(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getHtmlForReport', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHtmlForReportIn_serializeInput = SAWSOAP_getHtmlForReportIn_serializeInput;

function SAWSOAP_getHtmlForReportOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = SAWSOAP_getHtmlForReportResult_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function SAWSOAP_addReportToPage_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_addReportToPageOut_deserializeResponse');
     responseObject = SAWSOAP_addReportToPageOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.addReportToPage_onsuccess = SAWSOAP_addReportToPage_op_onsuccess;

function SAWSOAP_addReportToPage_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.addReportToPage_onerror = SAWSOAP_addReportToPage_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}addReportToPage
// Wrapped operation.
// parameter pageID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter reportID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter report
// - Object constructor is SAWSOAP_ReportRef
// parameter reportViewName
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter reportParams
// - Object constructor is SAWSOAP_ReportParams
// parameter options
// - Object constructor is SAWSOAP_ReportHTMLOptions
// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_addReportToPage_op(successCallback, errorCallback, pageID, reportID, report, reportViewName, reportParams, options, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(7);
    args[0] = pageID;
    args[1] = reportID;
    args[2] = report;
    args[3] = reportViewName;
    args[4] = reportParams;
    args[5] = options;
    args[6] = sessionID;
    xml = this.addReportToPageIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addReportToPage_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addReportToPage_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#addReportToPage';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.addReportToPage = SAWSOAP_addReportToPage_op;

function SAWSOAP_addReportToPageIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_addReportToPage();
    wrapperObj.setPageID(args[0]);
    wrapperObj.setReportID(args[1]);
    wrapperObj.setReport(args[2]);
    wrapperObj.setReportViewName(args[3]);
    wrapperObj.setReportParams(args[4]);
    wrapperObj.setOptions(args[5]);
    wrapperObj.setSessionID(args[6]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addReportToPage', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.addReportToPageIn_serializeInput = SAWSOAP_addReportToPageIn_serializeInput;

function SAWSOAP_addReportToPageOut_deserializeResponse(cxfjsutils, partElement) {
}
function SAWSOAP_endPage_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_endPageOut_deserializeResponse');
     responseObject = SAWSOAP_endPageOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.endPage_onsuccess = SAWSOAP_endPage_op_onsuccess;

function SAWSOAP_endPage_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.endPage_onerror = SAWSOAP_endPage_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}endPage
// Wrapped operation.
// parameter pageID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_endPage_op(successCallback, errorCallback, pageID, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = pageID;
    args[1] = sessionID;
    xml = this.endPageIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.endPage_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.endPage_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#endPage';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.endPage = SAWSOAP_endPage_op;

function SAWSOAP_endPageIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_endPage();
    wrapperObj.setPageID(args[0]);
    wrapperObj.setSessionID(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:endPage', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.endPageIn_serializeInput = SAWSOAP_endPageIn_serializeInput;

function SAWSOAP_endPageOut_deserializeResponse(cxfjsutils, partElement) {
}
function SAWSOAP_getHeadersHtml_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_getHeadersHtmlOut_deserializeResponse');
     responseObject = SAWSOAP_getHeadersHtmlOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHeadersHtml_onsuccess = SAWSOAP_getHeadersHtml_op_onsuccess;

function SAWSOAP_getHeadersHtml_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHeadersHtml_onerror = SAWSOAP_getHeadersHtml_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}getHeadersHtml
// Wrapped operation.
// parameter pageID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_getHeadersHtml_op(successCallback, errorCallback, pageID, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = pageID;
    args[1] = sessionID;
    xml = this.getHeadersHtmlIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getHeadersHtml_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getHeadersHtml_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#getHeadersHtml';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHeadersHtml = SAWSOAP_getHeadersHtml_op;

function SAWSOAP_getHeadersHtmlIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_getHeadersHtml();
    wrapperObj.setPageID(args[0]);
    wrapperObj.setSessionID(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getHeadersHtml', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.getHeadersHtmlIn_serializeInput = SAWSOAP_getHeadersHtmlIn_serializeInput;

function SAWSOAP_getHeadersHtmlOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = SAWSOAP_getHeadersHtmlResult_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function SAWSOAP_getCommonBodyHtml_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling SAWSOAP_getCommonBodyHtmlOut_deserializeResponse');
     responseObject = SAWSOAP_getCommonBodyHtmlOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getCommonBodyHtml_onsuccess = SAWSOAP_getCommonBodyHtml_op_onsuccess;

function SAWSOAP_getCommonBodyHtml_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

SAWSOAP_HtmlViewServiceSoap.prototype.getCommonBodyHtml_onerror = SAWSOAP_getCommonBodyHtml_op_onerror;

//
// Operation {urn://oracle.bi.webservices/v6}getCommonBodyHtml
// Wrapped operation.
// parameter pageID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter sessionID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function SAWSOAP_getCommonBodyHtml_op(successCallback, errorCallback, pageID, sessionID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = pageID;
    args[1] = sessionID;
    xml = this.getCommonBodyHtmlIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getCommonBodyHtml_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getCommonBodyHtml_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '#getCommonBodyHtml';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

SAWSOAP_HtmlViewServiceSoap.prototype.getCommonBodyHtml = SAWSOAP_getCommonBodyHtml_op;

function SAWSOAP_getCommonBodyHtmlIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new SAWSOAP_getCommonBodyHtml();
    wrapperObj.setPageID(args[0]);
    wrapperObj.setSessionID(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn://oracle.bi.webservices/v6' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getCommonBodyHtml', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

SAWSOAP_HtmlViewServiceSoap.prototype.getCommonBodyHtmlIn_serializeInput = SAWSOAP_getCommonBodyHtmlIn_serializeInput;

function SAWSOAP_getCommonBodyHtmlOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = SAWSOAP_getCommonBodyHtmlResult_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function SAWSOAP_HtmlViewServiceSoap_SAWSOAP_HtmlViewService () {
  this.url = 'http://166.78.244.8:9522/analytics/saw.dll?SoapImpl=htmlViewService';
}
SAWSOAP_HtmlViewServiceSoap_SAWSOAP_HtmlViewService.prototype = new SAWSOAP_HtmlViewServiceSoap;
