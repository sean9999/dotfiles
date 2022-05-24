#!/bin/bash

source vars.sh

#   we delete and regenrate the dotfiles block
#	to allow for future improvements

##  delete
sed -i '/^#.dotfiles/,/^$/d' $RCFILE

##  regenerate
echo '#	dotfiles' >> $RCFILE
echo 'source ~/.dotfiles/bootstrap' >> $RCFILE
echo >> $RCFILE
