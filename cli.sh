#!/usr/bin/env bash

source vars.sh

node --trace-warnings cli/main.js $@
