#!/bin/bash

function get_rand() {
	RANGE=256
	number=$RANDOM
	let "number %= $RANGE" 
	#echo -en "\e[38;5;${number}m ${number}\t\e[0m"
	#printf "%s" "\e[38;5;${number}m ${number}\t\e[0m"
	printf "%b\n" "\e[38;5;${number}m"
}



echo -n "PROMPT_COLOUR_USER: " && get_rand
echo -n "PROMPT_COLOUR_CHAR: " && get_rand
echo -n "PROMPT_COLOUR_HOST: " && get_rand
echo -n "PROMPT_COLOUR_DIR: " && get_rand
echo -n "PROMPT_COLOUR_BRANCH: " && get_rand
echo -n "PROMPT_COLOUR_RESET: " && echo -e "\e[0m"

echo "and now i'm normal text"