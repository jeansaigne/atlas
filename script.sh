#!/bin/sh


first=true
name="$1_$2_$3_$4_$5_$6_$7_$8.nii.gz"



if $1
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IIG_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/IIG_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IIG_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IbG_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/VII\ b\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi

if $2
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/III\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IIG_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	

fi

if $3
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vc\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVb\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi

if $4
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vc\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVb\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi

if $5
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IID_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/IID_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IID_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IbD_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/VII\ b\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi


if $6
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/III\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IID_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	

fi

if $7
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/IVa\ G_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/III\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVa\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vc\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVb\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi




if $8
then
	if $first
	then								
		./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz
		first=false
	fi

	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vab\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/Vc\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz
	./Slicer3-3.6.1-2010-08-23-linux-x86_64/Slicer3 --launch ./Slicer3-3.6.1-2010-08-23-linux-x86_64/lib/Slicer3/Plugins/ImageLabelCombine /var/www/html/atlas/data/Scene0/IVb\ D_Contour_IndexedLabelmap.nii.gz /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/output.nii.gz

fi


cp -a /var/www/html/atlas/datagen/output.nii.gz /var/www/html/atlas/datagen/env/$name
rm /var/www/html/atlas/datagen/output.nii.gz