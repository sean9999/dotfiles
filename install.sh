#!/bin/bash

#   allows us to run this script from a different dir

npm install

sudo npm link

#   @TODO: Make this idempotent
touch ~/.bash_profile
echo >> ~/.bash_profile
echo '#	dotfiles' >> ~/.bashrc
echo "source $INSTALL_DIR/bootstrap" >> ~/.bashrc
source $INSTALL_DIR/bootstrap
echo 'dotfiles is now installed!'
