#!/bin/bash

#	clone the repo
INSTALL_DIR=~/.dotfiles
cd ~
echo "installing into $INSTALL_DIR"
mkdir -p $INSTALL_DIR
rm $INSTALL_DIR/*
rm -rvf $INSTALL_DIR/.git 2> /dev/null
echo "cloning..."
git clone https://github.com/sean9999/dotfiles.git $INSTALL_DIR
cd $INSTALL_DIR
mkdir $INSTALL_DIR/enabled

#	install node.js dependencies
npm install
npm link 2> /dev/null || sudo -H npm link

#   @TODO: Make this idempotent
echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bash_profile
echo "source $INSTALL_DIR/bootstrap" >> ~/.bash_profile
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
