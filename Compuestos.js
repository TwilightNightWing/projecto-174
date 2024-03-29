AFRAME.registerComponent("atoms", {
    init: async function(){

        var compounds = await this.getCompounds()
        var barcodes = Object.keys(compounds)
        barcodes.map(barcode => {
            var element = compounds[barcode]
            this.createAtoms(element)
    })
    },

    getCompounds: function(){
        return fetch("js/compoundList.json")
        .then(res => (res.json()))
        .then(data => (data))
    
    },
    getElementColor: function(){
        return fetch("js/elementColors.json")
        .then(res => (res.json()))
        .then(data => (data))
    },
    createAtoms: async function (element){
        var elementName = element.element_name;
        var barcodeValue = element.element_name;
        var numberOfElectron = element.element_name;

        var colors = await this.elementColor;
        var scene = document.querySelector("#main_scene");
        var marker = document.createElement("a-marker")
        marker.setAttribute("id", `marker-${barcodeValue}`),
        marker.setAttribute("type", "barcode"),
        marker.setAttribute("element_name", elementName),
        marker.setAttribute("value", barcodeValue),
        scence.appendChild(marker);
        
    }
    }
);
