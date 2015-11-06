/**
 * Created by lardtiste on 25/08/15.
 */

var choixApp = angular.module('choixApp', ['ngMaterial', 'md.data.table']);

choixApp.controller('buttonController', function($scope, $mdBottomSheet, $timeout, $rootScope, $mdDialog) {

    $rootScope.descriptions = [];

    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: ChoixCtrl,
            templateUrl: 'bottom-sheet-grid-template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
        })
            .then(function(descriptions) {
                $rootScope.descriptions = descriptions;
            }, function() {
            });
    };
});

function ChoixCtrl($scope, $timeout, $mdBottomSheet, $rootScope, $mdDialog){

    $scope.descriptions = $rootScope.descriptions;

    $scope.selectionedZoneValue = "";
    $scope.selectionedLocaValue = "";
    $scope.selectionedPositionValue = "";
    $scope.selectionedTValue = "";
    $scope.selectionedNValue = "";
    $scope.selectionedEnvaGaucheValue = "";
    $scope.selectionedEnvaDroitValue = "";

    $scope.showTabEnvGauche = false;
    $scope.showTabEnvDroit = false;
    $scope.showTabEnv = false;

    $scope.tabZones = [
        {
            value: "oropharynx",
            name: "Oropharynx"
        },{
            value : "cavite-buccale",
            name : "Cavité buccale"
        }
    ];
    $scope.tabLocalisationsOropharynx = [
        {
            value: "amygdale",
            name: "Amygdale",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "langue",
            name : "Base de la langue",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "pilierpost",
            name : "Pilier postérieur",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "pilierant",
            name : "Pilier antérieur",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "voile",
            name : "Voile",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "vallecule",
            name : "Vallécule",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "ppp",
            name : "Paroi pharyngée postérieur",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        },{
            value : "sillon",
            name : "Sillon amygdaloglosse",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "oropharynx"
            }
        }
    ];
    $scope.tabLocalisationsCavite = [
        {
            value : "langue-mobile",
            name : "Langue mobile",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "cavite-buccale"
            }
        },{
            value : "plancher-buccal",
            name : "Plancher buccal, gencive inférieure",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "cavite-buccale"
            }
        },{
            value : "face-int-joue",
            name : "Face interne de joue",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "cavite-buccale"
            }
        },{
            value : "gencive-sup",
            name : "Gencive supérieure",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "cavite-buccale"
            }
        },{
            value : "palais",
            name : "Palais dur",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedZoneValue.value == "cavite-buccale"
            }
        }
    ];

    $scope.tabPositions = [
        {
            value : "G",
            name : "Gauche",
        },{
            value : "B",
            name : "Bilatérale"
        },{
            value : "D",
            name : "Droit"
        }
    ];

    $scope.tabT = [
        {
            value : "T1",
            name : "T1"
        },{
            value : "T2",
            name : "T2"
        },{
            value : "T3T4",
            name : "T3"
        },{
            value : "T3T4",
            name : "T4"
        }
    ];

    $scope.tabN = [
        {
            value : "N0",
            name : "N0"
        },{
            value : "N",
            name : "N1"
        },{
            value : "N",
            name : "N2"
        },{
            value : "N3",
            name : "N3",
        }
    ];

    $scope.tabEnvGauche = [
        {
            isChecked : false,
            value : "false",
            name : "Aire II",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire III",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire IV",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire V",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        }
    ];

    $scope.tabEnv = [
        {
            isChecked : false,
            value : "false",
            name : "Pilier antérieur",
            ngIf : true,
            displayFunction: function(){
                return (($scope.selectionedNValue.value == "N0" && $scope.selectionedTValue.value == "T1" ) &&
                ($scope.selectionedLocaValue.value == "amygdale" ||
                    $scope.selectionedLocaValue.value == "pilierant" ||
                    $scope.selectionedLocaValue.value == "pilierpost" ||
                    $scope.selectionedLocaValue.value == "sillon" ||
                    $scope.selectionedLocaValue.value == "voile"
                ))
            }
        }
    ];

    $scope.tabEnvDroit = [
        {
            isChecked : false,
            value : "false",
            name : "Aire II",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire III",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire IV",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        },
        {
            isChecked : false,
            value : "false",
            name : "Aire V",
            ngIf : true,
            displayFunction: function(){
                return $scope.selectionedNValue.value != "N0"
            }
        }
    ];

    $scope.tabLocalisations = [];

    $scope.selectionedZoneValue = $scope.tabZones[0];



    $scope.$watch("selectionedZoneValue", function(){
        if($scope.selectionedZoneValue.value == "oropharynx"){
            $scope.tabLocalisations = $scope.tabLocalisationsOropharynx;
        }else{
            $scope.tabLocalisations = $scope.tabLocalisationsCavite;
        }
        $scope.selectionedLocaValue = {};

    });

    $scope.$watch("selectionedLocaValue", function(){
        $scope.checkNgIf();
    });
    $scope.$watch("selectionedNValue", function(){
        $scope.checkNgIf();
    });
    $scope.$watch("selectionedTValue", function(){
        $scope.checkNgIf();
    });

    $scope.checkNgIf = function(){

        $scope.tabEnvGauche.forEach(function(item){
            if(typeof item.displayFunction === 'function'){
                item.ngIf = item.displayFunction();
                if(item.displayFunction() == false){
                    item.isChecked = false;
                    $scope.showTabEnvGauche = false;
                }else{
                    $scope.showTabEnvGauche = true;
                }
            }
        });
        $scope.tabEnv.forEach(function(item){
            if(typeof item.displayFunction === 'function'){
                item.ngIf = item.displayFunction();
                if(item.displayFunction() == false){
                    item.isChecked = false;
                    $scope.showTabEnv = false;
                }else{
                    $scope.showTabEnv = true;
                }
            }
        });
        $scope.tabEnvDroit.forEach(function(item){
            if(typeof item.displayFunction === 'function'){
                item.ngIf = item.displayFunction();
                if(item.displayFunction() == false){
                    item.isChecked = false;
                    $scope.showTabEnvDroit = false;
                }else{
                    $scope.showTabEnvDroit = true;
                }
            }
        });

    };
    $scope.checkNgIf();

    $scope.addDescription = function(){



        var title =    $scope.selectionedZoneValue.value + "_" +
            $scope.selectionedLocaValue.value + "_" +
            $scope.selectionedPositionValue.value +"_" +
            $scope.selectionedTValue.value +"_" +
            $scope.selectionedNValue.value +"_";
        $scope.tabEnv.forEach(function(item){
            title = title + item.isChecked + "_";
        });
        $scope.tabEnvGauche.forEach(function(item, index){
            title = title + item.isChecked;
            if(index != $scope.tabEnvGauche.length-1){
                title = title + "_";
            }
        });
        var newDescription = {
            fileName : title,
            zone: angular.copy($scope.selectionedZoneValue),
            loca: angular.copy($scope.selectionedLocaValue),
            position: angular.copy($scope.selectionedPositionValue),
            stadeT: angular.copy($scope.selectionedTValue),
            stadeN: angular.copy($scope.selectionedNValue),
            envG: angular.copy($scope.tabEnvGauche),
            envD: angular.copy($scope.tabEnvDroit),
            env:  angular.copy($scope.tabEnv)
        };

        var isOk = true;
        console.log("forEach");
        $scope.descriptions.forEach(function(desc){
            if(desc.fileName == newDescription.fileName){
                alert("Cette description existe déjà.");
                isOk = false;
            }else{


            }
        });


        if(isOk){
            document.getElementById("File")["click"]();
            if(document.getElementById("Open-"+newDescription.fileName+"0") != null){
                document.getElementById("Open-"+newDescription.fileName+"0")["click"]();
                $scope.descriptions.push(newDescription);
            }else{
                document.getElementById("File")["click"]();
                alert("Nous sommes désolés mais la description demandée n'existe pas en base de données");
            }
        }

    };

    $scope.deleteDescription = function(desc, index){
        console.log(desc);
        console.log(index);
        var num = index + 1;
        if(document.getElementById("ImageButton"+num+"0") != null){
            document.getElementById("ImageButton"+num+"0")["click"]();
            if(document.getElementById("CloseOverlay-"+num+"0") != null){
                document.getElementById("CloseOverlay-"+num+"0")["click"]();
                $scope.descriptions.splice(index, 1);
            }
        }
    };

    $scope.answer = function() {
        $mdDialog.hide($scope.descriptions);
    };
}