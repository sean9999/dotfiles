#!/bin/bash

echo 'downloading...'
wget -qq https://github.com/sean9999/dotfiles/archive/master.zip
echo 'unpacking...'
unzip -qq master
cd dotfiles-master/home
echo 'copying...'
for f in dot.*
do
	echo ${f//dot\./.}
	mv $f ~/weird/${f//dot\./.}
done
source ~/.bash_profile
echo 'done.'
