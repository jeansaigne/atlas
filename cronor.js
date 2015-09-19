
var globalCoord;
var globalCoordTmp;

var href = "";
var tableauDescription = [];
if(typeof document.location.href.split('?')[1] !== "undefined"){
    href = document.location.href.split('?')[1];
}

var tableauDescription = href.split('&');
var tbldescription = href.split('&')[1];
var i=0;
var phrase = "atlas/"+tableauDescription[0]+".nii.gz";


var mystruct;
var vol;
var hrefROIRT = href;
var tableauDescriptionROIRT = hrefROIRT.split('&');
var ROIRT1 = tableauDescriptionROIRT[0];
console.log(ROIRT1);
var canvasready = false;
var ROISelectedForTim=[];
var ROISelected=[
    {
        id: 0,
        nom: 'roi1',
        isSelected: false,
        tableau:[
            1, 2, 3, 4
        ]
    },
    {
        id: 1,
        nom: 'roi2',
        isSelected: false,
        tableau:[
            11, 12, 13, 14
        ]
    }
];

var papaya = papaya || {};
papaya.data = papaya.data || {};
papaya.data.Atlas = papaya.data.Atlas || {};

papaya.data.Atlas.labels = {
    atlas: {
        data: {
            label: [
                ": : : :",
                ": : : :",
                " : :Aire II:Gray Matter:Droite",
                " : :Aire II:Gray Matter:Gauche ",
                " : :Aire III:Gray Matter:Droite ",
                " : :Aire III:Gray Matter:Gauche ",
                " : :Aire IVa:Gray Matter:Droite ",
                " : :Aire IVa:Gray Matter:Gauche ",
                " : :Aire IVb:Gray Matter:Droite ",
                " : :Aire IVb:Gray Matter:Gauche ",
                " : :Aire Ia:Gray Matter:",
                " : :Aire Ib:Gray Matter:Droite",
                " : :Aire Ib:Gray Matter:Gauche",
                " : :Thyroide:Gray Matter:Lobe Droit",
                " : :Thyroide:Gray Matter:Lobe Gauche ",
                " : :Aire VIa:Gray Matter:",
                " : :Aire VIb:Gray Matter:",
                " : :Aire VIIa:Gray Matter:Droite",
                " : :Aire VIIa:Gray Matter:Gauche ",
                " : :Aire VIIb:Gray Matter:Droite",
                " : :Aire VIIb:Gray Matter:Gauche",
                " : :Aire VIII:Gray Matter:Droite",
                " : :Aire VII:Gray Matter:Gauche ",
                " : :Aire Vab:Gray Matter:Droite",
                " : :Aire Vab:Gray Matter:Gauche",
                " : :Aire Vc:Gray Matter:Droite",
                " : :Aire Vc:Gray Matter:Gauche",
                " : :Amygdale:Gray Matter:Droite",
                " : :Amygdale:Gray Matter:Gauche",
                " : :Arc Dentaire + gencive:Gray Matter:Droit",
                " : :Arc Dentaire + gencive:Gray Matter:Gauche",
                " : :Base langue:Gray Matter:Droit",
                " : :Base langue:Gray Matter:Gauche",
                " : :Cartilage thyroide:Gray Matter:",
                " : :Cavum:Gray Matter:Droit",
                " : :Cavum:Gray Matter:Gauche",
                " : :Corde Vocale+bv:Gray Matter:Gauche",
                " : :Corde vocale+bv:Gray Matter:Droit",
                " : :Epiglote:Gray Matter:",
                " : :Esp adipeux infratemp:Gray Matter:droit",
                " : :Esp adipeux infratemp:Gray Matter:Gauche ",
                " : :Esp adipeux buccal:Gray Matter:droit",
                " : :Esp adipeux buccal:Gray Matter:Gauche",
                " : :Esp carotidien:Gray Matter:Droit",
                " : :Esp carotidien:Gray Matter:Gauche",
                " : :Esp para pharyngé:Gray Matter:DGauche",
                " : :Esp para pharyngé:Gray Matter:Droit ",
                " : :Foramen oval:Gray Matter:Droit",
                " : :Foramen oval:Gray Matter:Gauche",
                " : :Fosse pterygo palatine:Gray Matter:Droite",
                " : :Fosse pterygo palatine:Gray Matter:Gauche",
                " : :Gencive inf: Gray Matter:Droite",
                " : :Gencive inf:Gray Matter:Gauche",
                " : :Ganglion Gasser:Gray Matter:Droit",
                " : :Ganglion Gasser:Gray Matter:Gauche",
                " : :Joue:Gray Matter:Droite ",
                " : :Joue:Gray Matter:Gauche",
                " : :Langue:Gray Matter:Droite",
                " : :Langue:Gray Matter:Gauche",
                " : :Loge HTE:Gray Matter:",
                " : :Luette:Gray Matter:",
                " : :Os hyoide:Gray Matter:",
                " : :Palais dur:Gray Matter:Gauche",
                " : :Palais dur:Gray Matter:Droit",
                " : :Paroi pharyngée post:Gray Matter:Droite",
                " : :Paroi pharyngée post:Gray Matter:Gauche",
                " : :Pilier ant:Gray Matter:Droit",
                " : :Pilier ant:Gray Matter:Gauche",
                " : :Pilier post:Gray Matter:Droit",
                " : :Pilier post:Gray Matter:Gauche",
                " : :Plancher:Gray Matter:Droit",
                " : :Plancher:Gray Matter:Gauche",
                " : :Repli ary epiglottique:Gray Matter:Gauche",
                " : :Repli ary epiglottique:Gray Matter:Droit",
                " : :SAG:Gray Matter:Droit",
                " : :SAG:Gray Matter:Gauche",
                " : :Sinus caverneux:Gray Matter:Droit",
                " : :Sinus caverneux:Gray Matter:Gauche",
                " : :Sinus piriforme:Gray Matter:Droit",
                " : :Sinus piriforme:Gray Matter:Gauche",
                " : :Sinus sphenoidal:Gray Matter:Gauche",
                " : :Sinus sphenoidal:Gray Matter:Droit",
                " : :Trigone retro molaire:Gray Matter:Droit",
                " : :Trigone retro molaire:Gray Matter:Gauche",
                " : :Trois replis:Gray Matter:Droit",
                " : :Trois replis:Gray Matter:Gauche",
                " : :Vallecule:Gray Matter:Droite",
                " : :Vallecule:Gray Matter:Gauche",
                " : :Voile:Gray Matter:Droit",
                " : :Voile:Gray Matter:Gauche",
                " : :BRH Mandibule:Gray Matter:Droite",
                " : :BRH Mandibule:Gray Matter:Gauche",
                " : :BRV Mandibule:Gray Matter:Droite",
                " : :BRV Mandibule:Gray Matter:Gauche",
                " : :Langue 2cm:Gray Matter:Gauche",
                " : :Langue 2cm:Gray Matter:Droite",
                " : :M pterygoidien medial:Gray Matter:Droite",
                " : :M pterygoidien medial:Gray Matter:Gauche",]

        },
        header: {
            //transform: "0.9357 0.0029 -0.0072 -1.0423 -0.0065 0.9396 -0.0726 -1.3940 0.0103 0.0752 0.8967 3.6475 0.0000 0.0000 0.0000 1.0000",
            name: "CRONOR ORL",
            images: {
                summaryimagefile: "CRONOR",
            },
            display: "*.*.*. .*",
            //transformedname: "MNI (Nearest Grey Matter)",
            type: "Label"
        },
        version: 1
    }
};

/*
 var papayaLoadableImages = [{
 name: "ATLAS",
 nicename: "ATLAS",
 url: "ATLAS.nii.gz"
 },
 {
 //  hide: true,
 name: "CRONOR",
 nicename: "CRONOR",
 url: "CRONOR.nii.gz"
 }];

*/


/*Parse une chaine de caractère représentant l'intégralité d'un FICHIER RTSTRUCT et renvoi un tableau des ROI(s) détectées, sous forme de chaine de caractères
 * @data : la chaine de caractère à parser
 * @return : un tableau contenant toutes les ROIs détectées
 */
function parseROIs(data) {
    var tableau = new Array();
    var fin = data.indexOf("0x30060080");
    var debut = data.indexOf("0x30060039");
    var string = data.slice(debut,fin);
    while (debut<string.length-5) {
        debut = string.indexOf(" >BEGIN ITEM");
        fin = string.indexOf(" >END ITEM")+13;
        tableau.push(string.slice(debut,fin));
        string = string.slice(fin);
        debut = 0;
    }
    return tableau;
}

/*Parse une chaine de caractère représentant un ROI et renvoi un tableau des coupes présentes dans ce ROI, sous forme de chaine de caractères.
 *@roidata : le roi à parser
 *@return :  un tableau contenant l'ensemble des coupes associées au ROI voulu, contenues dans @roidata
 */
function parseCUTs(roidata) {
    var tableau = new Array();
    var fin = 0,
        debut = 0;
    var string = roidata;
    while (debut<string.length-5) {
        debut = string.indexOf(" >>BEGIN ITEM");
        fin = string.indexOf(" >>END ITEM")+13;
        tableau.push(string.slice(debut,fin));
        string = string.slice(fin);
        debut = 0;
    }
    return tableau;
}


/*Parse une chaine de caractère représentant une COUPE et renvoi un tableau de triplets présentant l'ensemble des coordonnées des points trouvées au sein de la coupe en paramètre, sous forme de chaine de caractères.
 *@roidata : la coupe
 *@return :  un tableau contenant l'ensemble des coordonnées, contenues dans @cutdata
 */
function parsePOINTs(cutdata) {
    var debut = cutdata.indexOf("DS,")+3;
    var fin =  cutdata.indexOf("#",debut)-1;
    var string = cutdata.slice(debut,fin).trim();
    var split = string.split("\\");
    var tableau = new Array();
    var i;
    for (i=0;i<split.length-1;i+=3) {
        var coord = new Array(split[i],split[i+1],split[i+2]);
        tableau.push(coord);
    }
    return tableau;
}

/*Parse une chaine de caractère représentant l'intégralité d'un FICHIER RTSTRUCT et renvoi un tableau contenant tous les noms des ROIs trouvées
 *@data :  la chaine de caractère à parser
 *@return :  un tableau contenant l'ensemble des noms des ROIs trouvées
 */
function getRoiNames(data) {
    var pt=0;
    var roiNames = new Array();
    while (pt<(data.length-9)) {
        var index = data.indexOf("30060026", pt);
        if (index!=-1) {
            var roiName = data.slice(index+13,data.indexOf("#",index)-1).trim();
            roiNames.push(roiName);
            pt=index+1
        } else break;
    }
    return roiNames;
}



function sleep (ms){
    var start = new Date().getTime();
    while (new Date().getTime() < start+ms);
}

function checkChange (idROI){

    buildRTstruct("RTStruct.txt");
    DeleteDoublon("mystruct");
    //    var tab = buildRTMatrix("RTStruct.txt");
    //console.log("ready");
    globalCoordTmp=0;
    params["images"] = ["ATLAS.nii.gz", "CRONOR.nii.gz"];
    params["CRONOR.nii.gz"] = {"min": 1, "max": 106, "lut": "Spectrum", "alpha": 0.5};
    params["ATLAS.nii.gz"] = {"min": -100, "max": 300};

    console.log(ROISelected);

}


function test(){
    //console.log(event);
    $('#localisation').slideToggle(500);
}

/*Prend un fichier RTstruct au format ".txt" et affecte la variable globale mystruct avec notre structure fonctionnelle
 *@pathtotxtfile :  une chaine de caractère représentant le chemin absolu ou relatif vers le fichier en question
 *@return : VOID
 */
function buildRTstruct(pathtotxtfile) {
    var rois;
    $.get( pathtotxtfile, function(data) {
        //Segmenter les ROIs
        var i,j,k;
        rois = new Array();
        var roiNames = getRoiNames(data);
        var roiTable = parseROIs(data);

        for (i=0;i<roiNames.length;i++) {
//            console.log("traitement roi n°"+(i+1));

            var roicuts = new Array();
            var cuts = parseCUTs(roiTable[i]);

            for (j=0;j<cuts.length;j++) {
                var points = parsePOINTs(cuts[j]);

                for (k=0;k<points.length;k++) {

                    points[k][0] = Math.round(parseFloat(points[k][0])*(-1/0.512)+255.5);
                    points[k][1] = Math.round(parseFloat(points[k][1])*(1/0.512)+255.5);
                    points[k][2] = Math.round((parseFloat(points[k][2])*(-1)/2)+49);


                    if (typeof(roicuts[points[k][2]])=="object") {
                        roicuts[points[k][2]].push(new Array(points[k][0],points[k][1]));
                    } else {
                        roicuts[points[k][2]] = new Array(new Array(points[k][0],points[k][1]));
                    }
                }
            }
            rois[i]=roicuts;
        }
        mystruct = rois;
    }).complete(function() {
        console.log("Structure built");
    });

}


function getCoord(){
    console.log(globalCoord);
    //console.log(papaya);
}

function toggleroi(boutton){
    var idint;
    if ($("#check1")[0].checked) {
        idint = setInterval(drawPlan,100);
        $("#check1").attr("intervalID", idint);
    } else {
        clearInterval($("#check1").attr("intervalID"));
    }
}

function toggleroi2(boutton){
    var idint2;
    if ($("#check2")[0].checked) {
        idint2 = setInterval(drawPlan2,100);
        $("#check2").attr("intervalID", idint2);
    } else {
        clearInterval($("#check2").attr("intervalID"));
    }
}

function evenement(){
    setInterval(function(){
//		console.log(globalCoord);
        if(globalCoordTmp!=globalCoord){
            console.log("changé");
            globalCoordTmp=0;
            globalCoordTmp=globalCoord;
        }
        //console.log(globalCoord);
    }, 1000)
}

/*Dessine le contour de la ROI voulu, si il existe, dans le canvas papaya
 *@roi : un objet roi de notre structure
 *@x , @y, @z : coordonnées du contexte actuelle
 *@coeff : le coefficient permettant d'adapter la résolution initiale de notre structure (512*512)
 */
function drawRoi(roi,x,y,z,coeff) {
    //console.log("start drawing roi");
    //console.log(z);
    //console.log(roi[z]);
    if (typeof(roi[z])!="undefined") {
        console.log(roi[z]);
        //console.log("drawing roi");
        /*var tmp;*/
        for (i=0;i<roi[z].length-1;i++) {
            /*if (i==0) {
             tmp = new Array(roi[z][i][0],roi[z][i][1]);
             } else {*/
            //console.log("drawing line");
            jQuery('canvas').first().drawLine({
                strokeStyle: 'red',
                strokeWidth: 1.5,
                rounded: true,
                x1: coeff*roi[z][i][0], y1: coeff*roi[z][i][1],
                x2: coeff*roi[z][i+1][0], y2: coeff*roi[z][i+1][1]



            });

        }
    }
}



function drawRoi2(roi,x,y,z,coeff) {
    if (typeof(roi[z])!="undefined") {

        for (i=0;i<roi[x].length-1;i++) {
            /*if (i==0) {
             tmp = new Array(roi[z][i][0],roi[z][i][1]);
             } else {*/
            //console.log("drawing line");
            jQuery('canvas').first().drawLine({
                strokeStyle: 'red',
                strokeWidth: 1.5,
                rounded: true,
                x1: coeff*roi[z][i][0], y1: coeff*roi[z][i][1],
                x2: coeff*roi[z][i+1][0], y2: coeff*roi[z][i+1][1]



            });


        }
    }
}

/*Dessine les contour des ROIs connues et dessine selon le contexte actuelle
 *
 *
 */
function drawPlan() {
    var coeff = jQuery("canvas").first().height()/512;
    var x = globalCoord.x;
    var y = globalCoord.y;
    var z = globalCoord.z;
    var i =1;
    console.log("drawing plan");
    while (i<104) {
        drawRoi(mystruct[i],x,y,z,coeff);
        i=i+1;
    }
    //console.log("plan done");
}

function drawPlan2() {
    var coeff = $("canvas").first().height()/512;
    //var x = globalCoord.x;
    //var y = globalCoord.y;
    // var z = globalCoord.z;
    var i =1;

    drawRoi2(mystruct[1],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[3],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[5],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[7],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[9],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[11],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[13],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[15],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[17],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    drawRoi2(mystruct[19],globalCoord.x,globalCoord.y,globalCoord.z,coeff);
    //}
    //console.log("plan done");
}

function DeleteDoublon(mystruct){
    for (k=0;k<mystruct.length;k++)	{
        for (i=0;i<mystruct[k].length;i++){
            if (typeof(mystruct[k][i])=='object'){
                for (j=0;j<mystruct[k][i].length;j++){
                    while ( (j<mystruct[k][i].length-1) && (mystruct[k][i][j].join() == mystruct[k][i][j+1].join())){
                        mystruct[k][i].splice(j+1,1);
                    }
                }

            }
        }
    }
//params["images"] = ["C:/wamp/www/build/Nouveau dossier/ATLAS.nii.gz"];

}

function eteindreroi() {
    console.log(this);
//        var vol = papaya.viewer.ScreenVolume;
    window.setTimeout(function(){
        console.log(vol[1].volume.imageData)
//            vol[1].volume.imageData.data.forEach(function(currentData){
//               currentData=1;
//            });
        for(var i = 0; i<vol[1].volume.imageData.data.length; i++){
            if (vol[1].volume.imageData.data[i] != 5){
                vol[1].volume.imageData.data[i]=-100;
            }

        }
    }, 5000);
}



jQuery(document).ready(function() {

//Commandes de MC désactivés pour présentation
    //buildRTstruct("RTStruct.txt");
    //DeleteDoublon("mystruct");

    globalCoordTmp=0;
    params["images"] = ["ATLAS.nii.gz"];
    // //params["CRONOR.nii.gz"] = {"min": 1, "max": 106, "lut": "Spectrum", "alpha": 0.5};
    params["ATLAS.nii.gz"] = {"min": -100, "max": 300};
    params["radiological"] = true;
    params["showOrientation"] = true;
    //params["showControlBar"] = true;
    params["expandable"] = true;



    var ROIsSelected = [
        true,
        false
    ];

    var href = "";
    var tableauDescription = [];
    if(typeof document.location.href.split('?')[1] !== "undefined"){
        href = document.location.href.split('?')[1];
    }

    var tableauDescription = href.split('&');
    var tbldescription = href.split('&')[1];
    console.log(tableauDescription);
    var i=0;

    for(i = 0 ; i < tableauDescription.length - 1 ; i++){

        var phrase = "atlas/"+tableauDescription[i]+".nii.gz";
        var phrase2 = tableauDescription[i]+".nii.gz";
        params["images"].push(phrase);
        params[phrase2] = {"min": 1, "max": 105, "lut": "Spectrum", "alpha": 0.5};
    }

    //Test pour désactiver l'affichage d'une ROI individuellement sur la label map
//     if (ROIsSelected[0]){
//         params["images"].push("Amygdale-T1T2T3T4-N0-envPANT.nii");
//         params["Amygdale-T1T2T3T4-N0-envPANT.nii"] = {"min": 1, "max": 106, "lut": "Spectrum", "alpha": 0.5};
// //        params["ATLAS-4.nii"] = {"min": -100, "max": 300};
//     }
//     if (ROIsSelected[1]){
//         params["images"].push("ATLAS-radio.nii");
// //        params["ATLAS-radio.nii"] = {"min": -100, "max": 300};
//     }


});
