#!/usr/bin/env bash

export DOTFILES_ROOT=$HOME/.dotfiles;

node --harmony $DOTFILES_ROOT/cli/main.js $@ && $DOTFILES_ROOT/bootstrap;
