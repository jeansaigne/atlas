#!/bin/sh

#sh /var/www/html/atlas/Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./../../../Programmes/Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /home/lardtiste/Programmes/Slicer3-3.6.1-2010-08-23-linux-x86_64/output1.nii.gz /home/lardtiste/Programmes/Slicer3-3.6.1-2010-08-23-linux-x86_64/output2.nii.gz ./../../../Programmes/Slicer3-3.6.1-2010-08-23-linux-x86_64/0-output3.nii.gz
echo $1 $2 $3 $4 $5 $6 $7 $8
if $1
then
	echo "true"
fi