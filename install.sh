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

#	node --harmony
sudo -Hn mv nodeES6 /usr/local/bin/
sudo -Hn chmod +x /usr/local/bin/nodeES6
sudo -Hn npm install --global n
sudo -Hn n 0.12.7

#	install CLI
npm install
npm link 2> /dev/null || sudo -Hn npm link

echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bash_profile
echo "if [ -f $INSTALL_DIR/bootstrap ]; then source $INSTALL_DIR/bootstrap; fi" >> ~/.bash_profile
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
sleep 1 && dotfiles success && dotfiles help credits