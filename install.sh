#!/bin/bash

INSTALL_DIR=~/.dotfiles
cd ~
echo "installing into $INSTALL_DIR"
mkdir -p $INSTALL_DIR
rm $INSTALL_DIR/*
rm -rvf $INSTALL_DIR/.git 2> /dev/null
echo "cloning..."
git clone https://github.com/sean9999/dotfiles.git $INSTALL_DIR
cd $INSTALL_DIR
git status
npm install
if [ "$(which node)" == "" ] && [ "$(which nodejs)" != "" ]; then
	sudo -H ln -s "$(which nodejs)"  `dirname $(which nodejs)`/node
	sudo -H npm link
else
	npm link
fi
echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bash_profile
echo "if [ -f $INSTALL_DIR/bootstrap ]; then source $INSTALL_DIR/bootstrap; fi" >> ~/.bash_profile
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
dotfiles