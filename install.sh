#!/usr/bin/env bash

#   allows us to run this script from a different dir
INSTALL_DIR="$HOME/.dotfiles"
cd $INSTALL_DIR

#	install node.js dependencies
npm install
npm link 2> /dev/null || sudo -E npm link

#   @TODO: Make this idempotent
touch ~/.bash_profile
echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bashrc
echo "source $INSTALL_DIR/bootstrap" >> ~/.bashrc
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
