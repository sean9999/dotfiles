#!/bin/bash

echo 'downloading...'
wget -q https://github.com/sean9999/dotfiles/archive/master.zip
echo 'unpacking...'
unzip -q master
cd dotfiles-master/home
echo 'copying...'
for f in dot.*
do
	echo $f
	echo ${f//dot/DOTTTT}
done
