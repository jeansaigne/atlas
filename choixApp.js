/**
 * Created by lardtiste on 25/08/15.
 */

var choixApp = angular.module('choixApp', ['ngMaterial']);

choixApp.controller('ChoixCtrl', function ($scope, $timeout, $mdBottomSheet) {
    console.log("ChoixCtrl");

    $scope.tabZones = [
        {
            value : "oropharynx",
            name : "Oropharynx",
            localisations : [
                {
                    value : "amygdale",
                    name : "Amygdale",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI",
                                    ngIf : false,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "langue",
                    name : "Base de la langue",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "pilierpost",
                    name : "Pilier postérieur",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI",
                                    ngIf : false,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "pilierant",
                    name : "Pilier antérieur",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI",
                                    ngIf : false,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "voile",
                    name : "Voile",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI",
                                    ngIf : false,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "vallecule",
                    name : "Vallécule",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                },
                {
                    value : "ppp",
                    name : "Paroi pharyngée postérieur",
                    details : [
                        {
                            items : [
                                {
                                    value : "G",
                                    name : "Gauche",
                                },
                                {
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    value : "D",
                                    name : "Droit"
                                }
                            ],
                            name: 'Position',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ],
                            name: 'T',
                            value:'',
                            isRadioButton: true,
                        },
                        {
                            items : [
                                {
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    value : "N3",
                                    name : "N3",
                                }
                            ],
                            name: 'N',
                            value: '',
                            isRadioButton: true,
                        },
                        {
                            //QUATRIEME SOUS FAMILLE 4 CHECKBOX
                            items : [
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire II",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V",
                                    ngIf : true,
                                }
                            ],
                            name: 'Envahissement',
                            value: '',
                            isRadioButton: false,
                        }
                    ]
                }

            ]
        },
        {
            value : "cavite-buccale",
            name : "Cavité buccale",
            localisations : []
        },
        {
            value : "Sein",
            name : "Sein",
            localisations : []
        }
    ];

    $scope.selectionedDescriptions = [];

    $scope.isOkToAddDescription = true;
    $scope.isOkToGoPapaya = true;

    $scope.controlAffichage = function(){
        $scope.tabZones[0].localisations[0].details[3].items[4].ngIf = ($scope.tabZones[0].localisations[0].details[2].items[0].value == $scope.tabZones[0].localisations[0].details[2].value) && ($scope.tabZones[0].localisations[0].details[1].items[0].value == $scope.tabZones[0].localisations[0].details[1].value);
        $scope.tabZones[0].localisations[2].details[3].items[4].ngIf = ($scope.tabZones[0].localisations[2].details[2].items[0].value == $scope.tabZones[0].localisations[2].details[2].value) && ($scope.tabZones[0].localisations[0].details[1].items[0].value == $scope.tabZones[0].localisations[0].details[1].value);
        $scope.tabZones[0].localisations[3].details[3].items[4].ngIf = ($scope.tabZones[0].localisations[3].details[2].items[0].value == $scope.tabZones[0].localisations[3].details[2].value) && ($scope.tabZones[0].localisations[0].details[1].items[0].value == $scope.tabZones[0].localisations[0].details[1].value);
        $scope.tabZones[0].localisations[4].details[3].items[4].ngIf = ($scope.tabZones[0].localisations[4].details[2].items[0].value == $scope.tabZones[0].localisations[4].details[2].value) && ($scope.tabZones[0].localisations[0].details[1].items[0].value == $scope.tabZones[0].localisations[0].details[1].value);
    };
    $scope.tabZones[0].localisations[0].details[3].items[4].ngIf = $scope.tabZones[0].localisations[0].details[2].items[0].value == $scope.tabZones[0].localisations[0].details[2].value;

    $scope.goToPapaya = function(){
        $scope.tabResults.forEach(function(description, index){
            document.getElementById("File")["click"]();
            if(document.getElementById("Open-"+description.resultString+"0") != null){

                console.log("Open-"+description.resultString+"0");
                console.log(document.getElementById("Open-"+description.resultString+"0"));
                document.getElementById("Open-"+description.resultString+"0")["click"]();
            }else{
                document.getElementById("File")["click"]();
                alert("La description n°"+index+" n'existe pas");
            }

        });
        $scope.cancelChoice();
    };

//  Open-oropharynx_amygdale_G_T1_N0__true_false_false_false_false0
    $scope.tabResults = [];
    $scope.tabResultDetails = [];
    $scope.tabResultPosition = [];
    $scope.tabResultT = [];
    $scope.tabResultN = [];


    $scope.addDescription = function(){
        //console.log($scope.tabZones);
        var result = "";
        var resultObject = {};
        $scope.tabZones.forEach(function(zone){
            if(zone.value == $scope.zoneValue){
                result = $scope.zoneValue+"_"+zone.childValue+"_";
                zone.localisations.forEach(function(loca){
                    if(loca.value == zone.childValue){
                        loca.details.forEach(function(detail, $index){

                            if($index == 3){
                                result = result + detail.items[0].isChecked+"_"+detail.items[1].isChecked+"_"+detail.items[2].isChecked+"_"+detail.items[3].isChecked+"_";
                                if((detail.items.length>4) && (detail.items[4].ngIf)){
                                    result = result + detail.items[4].isChecked;
                                }else{
                                    result = result + "false";
                                }
                                resultObject = {
                                    resultString : result,
                                    zone : zone.name,
                                    loca : loca.name,
                                };
                                $scope.tabResults.push(resultObject);
                                console.log($scope.tabResults);

                                $scope.tabResultDetails.push(
                                    {
                                        name : loca.details[0].name,
                                        value : loca.details[0].value
                                    },
                                    {
                                        name : loca.details[1].name,
                                        value : loca.details[1].value
                                    },
                                    {
                                        name : loca.details[2].name,
                                        value : loca.details[2].value
                                    },
                                    {
                                        name : loca.details[3].name,
                                        value : loca.details[3].items[0].isChecked+" "+loca.details[3].items[1].isChecked+" "+loca.details[3].items[2].isChecked+" "+loca.details[3].items[3].isChecked+" "
                                    }
                                );

                            }else{
                                result = result + detail.value+"_";
                            }
                        });
                    }
                });
            }

        });
        //console.log($rootScope);
        //var result = $scope.zoneValue+"_"+$scope.locaValue+"_";
        console.log(result);
        //$scope.selectionedDescriptions.push("Open-+"+result+"0");
    };

    $scope.deleteDescription = function(det, index){
        console.log(det);
        var realIndex = ((index)/4).toFixed(0) -1;
        console.log(realIndex);
        $scope.tabResults.splice(realIndex, 1);
        $scope.tabResultDetails.splice(index-3, 4);
    };

    $scope.cancelChoice = function() {
        $mdBottomSheet.hide();
    };

}).controller('buttonController', function($scope, $mdBottomSheet, $timeout) {

    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.html',
            targetEvent: $event
        }).then(function(clickedItem) {
            //$scope.alert = clickedItem.name + ' clicked!';
        });
    };
});