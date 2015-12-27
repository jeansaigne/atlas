<?php
/*Ouverture du fichier en lecture seule*/
$handle = fopen('combiEnvha.txt', 'r');
/*Si on a réussi à ouvrir le fichier*/
if ($handle)
{
	/*Tant que l'on est pas à la fin du fichier*/
	while (!feof($handle))
	{
		/*On lit la ligne courante*/
		$line = fgets($handle);
		$table = explode("_",$line);
		/*On l'affiche*/
		if (count($table)==8) system("sh script.sh ".implode(" ",$table));
	}

	/*On ferme le fichier*/
	fclose($handle);
	//system('./var/www/html/atlas/Slicer3-3.6.3-2011-03-04-linux-x86_64/Slicer3 --launch ./var/www/html/atlas/Slicer3-3.6.3-2011-03-04-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/output1.nii.gz /var/www/html/atlas/data/Scene0/output2.nii.gz /var/www/html/atlas/datagen/0-output3.nii.gz');

}
?>
