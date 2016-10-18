jQuery.sap.declare("shine.democontent.epm.usercrud.Component");

sap.ui.core.UIComponent.extend("shine.democontent.epm.usercrud.Component",{
   metadata : {
       name : "SHINE - User CRUD",
       version : "10",
       includes : ["css/style.css","js/tileDialog.js"],
       dependencies : {
           libs : ["sap.ui.commons", "sap.ui.table","sap.ui.unified"],
           components : []
       },
       
       rootView : "shine.democontent.epm.usercrud.view.usercrud",
       
       config : {
           resourceBundle : "i18n/messagebundle.hdbtextbundle",
           serviceConfig : {
               name : "User xsodata",
               //TODO: change the url of the service..
               //"/java/odata/v4/" + namespace + "._." + context
               //serviceUrl : "/java/odata/v4/sap.hana.democontent.epm.data._.UserData/"
               serviceUrl : "/java/odata/v4/UserData/"
           }
       }
   },
   
   init : function(){
       
       sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
       
       var mConfig = this.getMetadata().getConfig();
       
       var oRootPath = jQuery.sap.getModulePath("shine.democontent.epm.usercrud");
       
       var i18nModel = new sap.ui.model.resource.ResourceModel({
           bundleUrl : [oRootPath, mConfig.resourceBundle].join("/")
       });
       this.setModel(i18nModel, "i18n");
	   
	   var sServiceUrl = mConfig.serviceConfig.serviceUrl;
	   // Create and set domain model to the component
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false);
		this.setModel(oModel);
		oModel.setDefaultBindingMode("TwoWay");
		
   }
});