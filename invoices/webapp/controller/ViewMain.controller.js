sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.ViewMain", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("../model/selectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },
            onFilter: function (oEvent){

            },
            onClearFilter: function (oEvent){
                const oModelselectionScreen = this.getView().getModel("selectionScreen");
                oModelselectionScreen.setProperty("/ShipName", "");
                oModelselectionScreen.setProperty("/CountryKey", "");

            }
        });
    });
