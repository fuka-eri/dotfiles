#!/usr/bin/env sh
queuedList="$HOME/.config/sketchybar/plugins/dynamic-island/scripts/data/queued"
override="$HOME/.config/sketchybar/plugins/dynamic-island/scripts/data/override"

# $1 - identifier
# $2 - duration
# $3 - command
# $4 - exit command
# $5 - exit duration
# given with separated using ';'
entry=$*

validEntry=$(head -n 1 $queuedList)
if [ -n "$validEntry" ]
then
	IFS=';'
	read -ra strarr <<< "$validEntry"
	unset IFS

	thisId=${entry%% *}

	if [[ ${strarr[0]} == "${thisId//;}" ]]
	then
		# add to queuedList
		ex -sc "1i|$entry" -cx "$queuedList"

		# override
		overrideVal=$(cat $override)
		priority="$((overrideVal + 1))"
		printf $priority > "$override"
		bash "$HOME/.config/sketchybar/plugins/dynamic-island/scripts/draw.sh" $priority
		exit 0
	fi
fi


echo $entry >> $queuedList
bash "$HOME/.config/sketchybar/plugins/dynamic-island/scripts/draw.sh" 0
