sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"./model/models",
	"./localService/mockServer",
	"sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, Device, models,mockServer,ODataModel) {
	"use strict";

	return UIComponent.extend("testZPRS_MOCKSERVER.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		// init: function() {
		// 	// call the base component's init function
		// 	UIComponent.prototype.init.apply(this, arguments);

		// 	// set the device model
		// 	this.setModel(models.createDeviceModel(), "device");
		// }
			init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			var sODataServiceUrl = "/";

			// init our mock server
			mockServer.init(sODataServiceUrl);

			// set model on component
			this.setModel(
				new ODataModel(sODataServiceUrl, {
					json: true,
					useBatch: true
				})
			);
			// enable routing
			// this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});