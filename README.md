dotfiles
========

dotfiles is a dotfiles manager. It allows you to organize, modify, and selectively load your dotfiles for maximum developer happiness.


## Overview

This is a humble app with a small scope. It's just a place to put your dotfiles, and some convenience functions to help make managing them easy.

Everything related to dotfiles lives in `~/.dotfiles`. The dotfiles themselves all live in `available/` sub-folder, and those you wish to load will be represented as symlinks in `enabled/`. `~/.dotfiles/bootstrap` is your entrypoint, and is  sourced from `.bashrc`. Dotfiles has not been tested on shells other than bash.

I have a bunch of dotfiles already in the `available/` folder. They are left as simple suggestions and are not garaunteed to run on your machine. You should not blindly enable dotfiles you haven't personally reviewed. You may wish to delete them all and start fresh.

Dotfiles is a git repository. It is meant to be forked and made private and personal, because everyone's dotfiles are different. Future versions of this app may offer a better upgrade experience, the ability to share dotfiles with others, the ability to see your changes without reloading the shell, and sub-commands to make version control easier. Suggestions, bug-reports, and PRs are welcomed.

## Getting Started

Install **dotfiles**
```
$ npm install --global @code_monk/dotfiles
```

Verify installation
```
$ dotfiles ls # or
$ dotfiles help # or
$ dotfiles enable prompt # enable a fancy prompt
$ bash # reload shell to see the effect
```

## Commands

### dotfiles ls

List all files managed by **dotfiles**.
```
$ dotfiles ls # roughly the same as:
$ tree ~/.dotfiles/enabled ~/.dotfiles/available
```

### dotfiles enable {dotfile}

Enable a dotfile. It creates a symlink in `enable/` to it's corresponding sibling in `available/`. Example:
```
$ dotfiles enable prompt # same as:
$ ln - ~/.dotfiles/available/prompt ~/.dotfiles/enabled/prompt
```

### dotfiles disable {dotfile}

Does the reverse

### dotfiles cat {dotfile}

read the text of a dotfile. 
```
$ dotfiles cat prompt # same as:
$ cat ~/.dotfiles/available/prompt
```

### dotfiles edit {dotfile}

Open the default editor and edit the specified file.
```
$ dotfiles edit prompt # roughly the same as:
$ vim ~/.dotfiles/available/prompt
```
