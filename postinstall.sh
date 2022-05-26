#!/bin/sh

DOTFILES_DIR=~/.dotfiles
RCFILE=~/.bashrc
touch $RCFILE

##  ~/.dotfiles is our nice clean well-known entrypoint
ln -bTfs $PWD $DOTFILES_DIR

#   source dotfiles in .bashrc
sed -i '/^#.dotfiles/,/^$/d' $RCFILE
echo '#	dotfiles' >> $RCFILE
echo 'source ~/.dotfiles/bootstrap' >> $RCFILE
echo >> $RCFILE
