#!/bin/sh

DOTFILES_DIR=~/.eotfiles

mkdir -p $DOTFILES_DIR

ln -fs $PWD/available $DOTFILES_DIR/available
ln -fs $PWD/enabled $DOTFILES_DIR/enabled
ln -fs $PWD/README.md $DOTFILES_DIR/README.md
