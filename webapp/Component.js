sap.ui.define(
    ["sap/fe/core/AppComponent",    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "/model/models"],
    

    function (Component) {
        "use strict";

        return Component.extend("travellist.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                
            }
        });
    }
);