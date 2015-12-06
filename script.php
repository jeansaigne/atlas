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
}
?>
