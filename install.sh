#!/bin/bash

curl https://github.com/sean9999/dotfiles/archive/master.zip > smac_dotfiles_master
unzip smac_dotfiles_master
cd dotfiles-master/home
for f in dot.*
do
	echo $f
done
