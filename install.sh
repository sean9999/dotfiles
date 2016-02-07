#!/usr/bin/env bash

INSTALL_DIR="$HOME/.dotfiles"

cd $INSTALL_DIR

#	install node.js dependencies
npm install
npm link 2> /dev/null || sudo -H npm link

#   @TODO: Make this idempotent
echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bash_profile
echo "source $INSTALL_DIR/bootstrap" >> ~/.bash_profile
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
