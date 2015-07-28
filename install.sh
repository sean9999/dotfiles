#!/bin/bash

INSTALL_DIR=~/0dotfilesXX
cd ~
echo "installing into $INSTALL_DIR"
mkdir -p $INSTALL_DIR
echo "cloning"
git clone --recursive https://github.com/sean9999/dotfiles.git $INSTALL_DIR
git status
cd $INSTALL_DIR
npm install
echo 'done.'
