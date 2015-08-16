#!/bin/bash

cd $HOME/.dotfiles

git add --all . \
    && git commit \
    && git pull \
    && git push;
