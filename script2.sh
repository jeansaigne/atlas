#!/bin/bash

 file="combiEnvha.txt"
             while IFS= read -r line
             do
                     # display $line or do somthing with $line
               #echo "$line"

               IFS='_' read -r -a array <<< "$line"

               #echo "${array[0]}" "${array[1]}" "${array[2]}" "${array[3]}" "${array[4]}" "${array[5]}" "${array[6]}" "${array[7]}"
                var1=${array[0]}
                var2=${array[1]}
                var3=${array[2]}
                var4=${array[3]}
                var5=${array[4]}
                var6=${array[5]}
                var7=${array[6]}
                var8=${array[7]}

                #echo "$var1" "$var2" "$var3" "$var4" "$var5" "$var6" "$var7" "$var8"
				first=true
				name="$line.nii.gz"

				if $var1
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

				if $var2
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

				if $var3
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

				if $var4
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

				if $var5
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


				if $var6
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

				if $var7
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




				if $var8
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

done <"$file"