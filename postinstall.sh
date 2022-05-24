#!/bin/sh

DOTFILES_DIR=~/.dotfiles
RCFILE=~/.bashrc
mkdir -p $DOTFILES_DIR
touch $RCFILE

##  add relevant symlinks
ln -nfs $PWD/available $DOTFILES_DIR/available
ln -nfs $PWD/enabled $DOTFILES_DIR/enabled
ln -nfs $PWD/home $DOTFILES_DIR/home
ln -nfs $PWD/README.md $DOTFILES_DIR/README.md
ln -nfs $PWD/bootstrap $DOTFILES_DIR/bootstrap

#   add source command to .bashrc
sed -i '/^#.dotfiles/,/^$/d' $RCFILE
echo '#	dotfiles' >> $RCFILE
echo 'source ~/.dotfiles/bootstrap' >> $RCFILE
echo >> $RCFILE
