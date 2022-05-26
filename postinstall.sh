#!/bin/sh

DOTFILES_DIR=~/.dotfiles
RCFILE=~/.bashrc
mkdir -p $DOTFILES_DIR
touch $RCFILE

##  add symlinks so we have a nice well-know and clean entrypoint
ln -nfs $PWD $DOTFILES_DIR
#   add source command to .bashrc
sed -i '/^#.dotfiles/,/^$/d' $RCFILE
echo '#	dotfiles' >> $RCFILE
echo 'source ~/.dotfiles/bootstrap' >> $RCFILE
echo >> $RCFILE
