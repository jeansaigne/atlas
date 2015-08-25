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
            localisations : [
                {
                    isChecked : true,
                    value : "amygdale",
                    details : [
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "G",
                                },
                                {
                                    isChecked : false,
                                    value : "B",
                                },
                                {
                                    isChecked : false,
                                    value : "D",
                                }
                            ]
                        },
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "T1",
                                },
                                {
                                    isChecked : false,
                                    value : "T2",
                                },
                                {
                                    isChecked : false,
                                    value : "T3T4",
                                },
                                {
                                    isChecked : false,
                                    value : "T3T4",
                                }
                            ]
                        },
                        {
                            items : [
                                {
                                    isChecked : true,
                                    value : "N0",
                                },
                                {
                                    isChecked : false,
                                    value : "N",
                                },
                                {
                                    isChecked : false,
                                    value : "N",
                                },
                                {
                                    isChecked : false,
                                    value : "N3",
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
            value : "cavite-buccale",
            localisations : []
        }
    ];
});