<?php

$dir          = ".";
$return_array = array();
echo "jQuery(document).ready(function() {";
if(is_dir($dir)){

    if($dh = opendir($dir)){
        while(($file = readdir($dh)) != false){

            if($file == "." or $file == ".."){

            } else {
                //$return_array[] = $file; // Add the file to the array
                echo "params['".$file."'] = {'min': 1, 'max': 105, 'lut': 'Spectrum', 'alpha': 0.5};";
            }
        }
    }
}
echo "});";
?>
