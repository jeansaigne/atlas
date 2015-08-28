/**
 * Created by lardtiste on 25/08/15.
 */

var choixApp = angular.module('choixApp', ['ngMaterial']);

choixApp.controller('ChoixCtrl', function ($scope, $rootScope) {
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
                                    ngIf : true,
                                },
                                //5eme valeur que pour amydale, pilier ant, pilier post, voile et que si N0 et T1
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire VI envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
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
                                    name : "Aire II envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire III envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire IV envahie",
                                    ngIf : true,
                                },
                                {
                                    isChecked : false,
                                    value : "false",
                                    name : "Aire V envahie",
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

    $scope.button = function(){
        document.getElementById("File")["click"]();
        document.getElementById("Open-"+"oropharynx_voile_G_T3T4_N_true_false_false_false_false"+"0")["click"]();
    };


    $rootScope.testValue = {};

    $scope.addDescription = function(){
        console.log($scope.tabZones);
        var result = "";
        $scope.tabZones.forEach(function(zone){
            if(zone.value == $scope.zoneValue){
                result = $scope.zoneValue+"_"+zone.childValue+"_";
                zone.localisations.forEach(function(loca){
                    if(loca.value == zone.childValue){
                        loca.details.forEach(function(detail){
                            result = result + detail.value;
                        });
                    }
                });
            }

        });
        //console.log($rootScope);
        //var result = $scope.zoneValue+"_"+$scope.locaValue+"_";
        //console.log(result);
        //$scope.selectionedDescriptions.push("Open-+"+result+"0");
    };
});