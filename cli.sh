#!/bin/bash

export DOTFILES_ROOT=$HOME/.dotfiles;

node --harmony $DOTFILES_ROOT/cli/main.js $@;
