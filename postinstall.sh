#!/bin/sh

DOTFILES_DIR=~/.dotfiles
RCFILE=~/.bashrc
mkdir -p $DOTFILES_DIR
touch $RCFILE

##  add relevant symlinks
ln -fs $PWD/available $DOTFILES_DIR/available
ln -fs $PWD/enabled $DOTFILES_DIR/enabled
ln -fs $PWD/README.md $DOTFILES_DIR/README.md
ln -fs $PWD/bootstrap $DOTFILES_DIR/bootstrap

#   add source command to .bashrc
sed -i '/^#.dotfiles/,/^$/d' $RCFILE
echo '#	dotfiles' >> $RCFILE
echo 'source ~/.dotfiles/bootstrap' >> $RCFILE
echo >> $RCFILE
