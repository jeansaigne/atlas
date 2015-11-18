var $scope = {};

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

$scope.tabEnvBidon = [
    {
        value : "false"
    },{
        value : "true"
    }
]

$scope.tabZones.forEach(function(zone){
    if(zone.value === 'oropharynx'){
        $scope.tabLocalisationsOropharynx.forEach(function(loca){
            $scope.tabPositions.forEach(function(pos){
                $scope.tabT.forEach(function(t){
                    $scope.tabN.forEach(function(n){
                        if(t.value === 'T1' && n.value === 'N0' && (loca.value === 'amygdale' || loca.value === 'pilierpost' || loca.value === 'pilierant' || loca.value === 'voile' || loca.value === 'sillon')){

                            console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_true_false_false_false_false_false_false_false_false" );
                            console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_false_false_false" );
                        }else{

                            $scope.tabEnvBidon.forEach(function(env1){
                                $scope.tabEnvBidon.forEach(function(env2){
                                    $scope.tabEnvBidon.forEach(function(env3){
                                        $scope.tabEnvBidon.forEach(function(env4){
                                            $scope.tabEnvBidon.forEach(function(env5){
                                                $scope.tabEnvBidon.forEach(function(env6){
                                                    $scope.tabEnvBidon.forEach(function(env7){
                                                        $scope.tabEnvBidon.forEach(function(env8){
                                                            console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_" + env1.value + "_"+ env2.value + "_"+ env3.value + "_"+ env4.value + "_"+ env5.value + "_"+ env6.value + "_"+ env7.value + "_"+ env8.value);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });

                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_false_false_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_false_false_true" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_false_true_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_false_true_true" );
                            //
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_true_false_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_true_false_true" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_true_true_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_false_true_true_true" );
                            //
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_false_false_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_false_false_true" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_false_true_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_false_true_true" );
                            //
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_true_false_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_true_false_true" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_true_true_false" );
                            //console.log(zone.value + "_" + loca.value + "_" + t.value + "_" + n.value + "_false_false_false_false_false_true_true_true_true" );
                        }

                    });
                });
            });
        });
    }else if(zone.value === 'cavite-buccale'){

    }
});