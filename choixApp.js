/**
 * Created by lardtiste on 25/08/15.
 */

var choixApp = angular.module('choixApp', ['ngMaterial']);

choixApp.controller('ChoixCtrl', function ($scope) {
    console.log("ChoixCtrl");

    $scope.tabZones = [
        {
            isChecked : true,
            value : "oropharynx",
            name : "Oropharynx",
            localisations : [
                {
                    isChecked : true,
                    value : "amygdale",
                    name : "Amygdale",
                    details : [
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "G",
                                    name : "Gauche"
                                },
                                {
                                    isChecked : false,
                                    value : "B",
                                    name : "Bilatérale"
                                },
                                {
                                    isChecked : false,
                                    value : "D",
                                    name : "Droit"
                                }
                            ]
                        },
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "T1",
                                    name : "T1"
                                },
                                {
                                    isChecked : false,
                                    value : "T2",
                                    name : "T2"
                                },
                                {
                                    isChecked : false,
                                    value : "T3T4",
                                    name : "T3"
                                },
                                {
                                    isChecked : false,
                                    value : "T3T4",
                                    name : "T4"
                                }
                            ]
                        },
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "N0",
                                    name : "N0"
                                },
                                {
                                    isChecked : false,
                                    value : "N",
                                    name : "N1"
                                },
                                {
                                    isChecked : false,
                                    value : "N",
                                    name : "N2"
                                },
                                {
                                    isChecked : false,
                                    value : "N3",
                                    name : "N3",
                                }
                            ]
                        },
                        {
                            items : [],
                        },
                        {
                            items : [],
                        },


                    ]
                }
            ]
        },
        {
            isChecked : false,
            value : "cavite-buccale",
            localisations : []
        },
        {
            isChecked : false,
            value : "Sein",
            localisations : []
        }
    ];
});