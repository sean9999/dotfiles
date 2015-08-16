dotfiles
========

these are my dotfiles, and also a way to manage them. You should fork it. It's nice to have your dotfiles wherever you go. Don't you think?

## requirements
- curl (if you want to use quick install)
- git (your dotfiles are managed in a git repo)
- node (the command line utility is powered by node. Version 0.12.7 recommended)
- You must be willing to install this application in ~/.dotfiles. It assumes that location.

## quick install (requires curl)
> curl https://raw.githubusercontent.com/sean9999/dotfiles/master/install.sh | bash

## not so quick install

### clone the repo
> git clone https://github.com/sean9999/dotfiles.git ~/.dotfiles
> cd ~/.dotfiles

### set up an executable that runs a modern version of node with the --harmony flag

> sudo -H cp nodeES6 /usr/local/bin/
> sudo -H chmod +x /usr/local/bin/nodeES6
> sudo -H npm install --global n
> sudo -H n 0.12.7

### install the command line utility
> npm install
> npm link 2> /dev/null || sudo -H npm link

### add bootstrapping code to your .bash_profile

> echo >> ~/.bash_profile
> echo '#	dotfiles' >> ~/.bash_profile
> echo "if [ -f ~/.dotfiles/bootstrap ]; then source ~/.dotfiles/bootstrap; fi" >> ~/.bash_profile

### activate

> source ~/.dotfiles/bootstrap

