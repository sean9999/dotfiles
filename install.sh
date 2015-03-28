#!/bin/bash

wget https://github.com/sean9999/dotfiles/archive/master.zip
unzip master
cd dotfiles-master/home
for f in dot.*
do
	echo $f
done
