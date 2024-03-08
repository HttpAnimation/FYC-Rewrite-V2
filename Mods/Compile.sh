#!/bin/bash
echo "Moving up one dir"
cd ../
mods_html="Mods.html"
insert_position=$(grep -n '<a href="index.html" class="movie-button">Home</a>' $mods_html | cut -d: -f1)
sed -i '/<a href="Mods\//d' $mods_html
for mod_folder in Mods/*; do
    if [ -d "$mod_folder" ]; then
        # Check if the subdirectory contains index.html
        if [ -e "$mod_folder/index.html" ]; then
            # Get the mod name from the folder name
            mod_name=$(basename "$mod_folder")
            sed -i "${insert_position}a \ \ \ \ <a href=\"${mod_folder}/index.html\" class=\"movie-button\">${mod_name}</a></b>" $mods_html
        else
            sed -i "/<b><a href=\"Mods\/${mod_name}\/index.html\"/d" $mods_html
        fi
    fi
done

echo "Script executed successfully!"
