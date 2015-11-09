dotfiles
========

these are my dotfiles, and also a way to manage them. You should fork it. It's nice to have your dotfiles wherever you go. Don't you think?

## Overview

Most developers, and engineers, these days routinely access many different servers. Often they'll pick up little tricks here and there to make their shell environmentes more pleasant and productive. When that happens, it's just as likely you'll be on Server A, as on Desktop B, or Laptop X. Moving your dotfiles from one location to another is not a priority, because you're in the middle of building something awesome. So your shell environment's greatness is spread thinly across all your machines, some of which are ephemeral and will disapear when you no longer need it.

Dotfiles wants to solve this problem by making it easy to track, propagate, and revert changes. It's not magic, it's just a collection of convenience functions around git, and Ansible. `~/.dotfiles` is where your repo lives.

In the documentation we use the word *dotfiles* to refer to both this utility and to a file that the system uses to set up your shell with preferences, shortcuts, configuration settings, etc. to make things easier, moving forward, dotfiles (the files) will not be formatted specially, whereas **dotfiles** (the utility) will be formatted **like this**. Common examples of dotfiles are `.vimrc`, `.gitconfig`, and `.bash_aliases`. While the focus is on configuration files, you can track anything you want with **dotfiles**.

## requirements
- curl (if you want to use quick install)
- git (your dotfiles are managed in a git repo)
- node (the command line utility is powered by node. Version 0.12.7 recommended)
- You must be willing to install this application in ~/.dotfiles. It assumes that location.

## quick install (requires curl)
> curl https://raw.githubusercontent.com/sean9999/dotfiles/master/install.sh | bash

## not-so-quick install

### clone the repo

> git clone https://github.com/sean9999/dotfiles.git ~/.dotfiles && cd ~/.dotfiles

### set up an executable that runs a modern version of node with the --harmony flag

> chmod +x ~/.dotfiles/cli.sh

### install the command line utility

> npm install
> npm link # (you may need to run this as sudo)

### add bootstrapping code to your .bash_profile

> echo >> ~/.bash_profile
> echo '#	dotfiles' >> ~/.bash_profile
> echo "source ~/.dotfiles/bootstrap; " >> ~/.bash_profile

### activate

> source ~/.dotfiles/bootstrap # (or just start a new terminal session)

## Commands

dotfiles allows you to use commands to manage your dotfiles. They are:

### dotfiles ls

List all files managed by **dotfiles**. The ones under the *Enabled* heading are enabled. They are simply symlinks that point to scripts listed under the *Availabe* heading. Enabled dotfiles are loaded when the shell starts. That's what `~/.bootstrap` does

### dotfiles enable

Enable a dotfile that is listed under _Available_

### dotfiles disable

Do the reverse

### dotfiles cat <<dotfile>>

read the text of a dotfile. The file must be in `~/.dotfiles/available` or `~/.dotfiles/home`.

### dotfiles edit <<dotfile>>

Open the default editor and edit the specified file. The file must be in `~/.dotfiles/available` or `~/.dotfiles/home`.

### dotfiles git

simply wraps git, but sets the current working directory to `~/.dotfiles`.

### dotfiles push

If you've made any changes to dotfiles, here's where you get to push them. Under the hood, this makes a git commit, so you must add a commit message.

### dotfiles update

updates the system. This allows you to get any changes you may have pushed from different machines. Under the hood, this does a git pull, so if your working directory is not clean, you have resolve the issue using normal git-foo.




