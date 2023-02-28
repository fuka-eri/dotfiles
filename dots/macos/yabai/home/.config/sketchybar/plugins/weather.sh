#!/usr/bin/env bash

source "$HOME/.config/sketchybar/colors.sh"

weather_icon_map() {
	case $@ in
	"false Mostly Cloudy" | "false Cloudy" | "false Partly Cloudy")
		icon_result=""
		;;
	"false Rain")
		icon_result=""
		;;
	"false Slight Chance Rain Showers")
		icon_result=""
		;;
	"false Slight Chance Light Snow")
		icon_result=""
		;;
	"true Rain Showers Likely" | "true Rain Showers" | "true Chance Rain Showers")
		icon_result=""
		;;
	"false Patchy Fog" | "false Areas Of Fog" | "false Widespread Fog")
		icon_result=""
		;;
	"true Mostly Sunny" | "true Sunny")
		icon_result=""
		;;
	"false Clear" | "false Mostly Clear")
		icon_result=""
		;;
	*)
		icon_result=":default:"
		;;
		esac
	echo $icon_result
}

render_bar() {
	args+=(--set weather.icon icon="$icon")
	args+=(--set weather.temp label="$temp""°")
}

render_popup() {
	args+=(--remove '/weather.details.\.*/')

	args+=( --clone weather.details.0 weather.details
					--set weather.details.0 icon="$icon"
																	# icon.font="$NERD_FONT:Bold:16.0"
																	label="$temp""° $forecast"
																	icon.color="$YELLOW"
																	click_script="sketchybar --set $NAME popup.drawing=off"
																	position=popup.weather.temp
																	drawing=on)
			
# 	COUNTER=0
# 	
# 	if [ "$COUNT" -lt "$PREV_COUNT" ]; then
# 		sketchybar -m --remove '/weather.details.\.*/'
# 	fi
#
# 	while IFS= read -r line; do
#   printf '%s\n' "$line"
# done < output.txt
#
# 	while IFS= read -r line; do
#
# 		if [ "$COUNT" -gt "$PREV_COUNT" ]; then
# 			sketchybar -m --add item weather.details."$COUNTER" popup."$NAME"
# 		fi
#
# 		sketchybar -m --set weather.details."$COUNTER"     \
# 			                  label="$(printf '%s\n' "$line")"  \
# 			                  label.align=right           \
# 			                  label.padding_left=20       \
# 			                  icon="$COUNT : $PREV_COUNT" \
# 			                  icon.drawing=off            \
# 			                  click_script="sketchybar --set $NAME popup.drawing=off"
# 		COUNTER=$((COUNTER + 1))
#
# 	done <<<"$(printf '%s' "$WEATHER")"
}

update() {
	# WEATHER=$(wego --aat-monochrome)
	# COUNT="$(echo "$WEATHER" | wc -l | tr -d ' ')"
	# PREV_COUNT="$(sketchybar --query weather.temp | jq -r .popup.items | grep ".details.*" -c)"

	args=()
	url=$(awk  '/https/{print $0}' ~/weather_url)
	weather=$(curl -s "$url")
	temp=$(echo "$weather" | jq -r '.properties.periods[0].temperature')
	forecast=$(echo "$weather" | jq -r '.properties.periods[0].shortForecast')
	time=$(echo "$weather" | jq -r '.properties.periods[0].isDaytime')
	icon=$(weather_icon_map "$time" "$forecast")

	render_bar
	render_popup
		
	sketchybar -m "${args[@]}" >/dev/null

	if [ "$COUNT" -ne "$PREV_COUNT" ] 2>/dev/null || [ "$SENDER" = "forced" ]; then
		sketchybar --animate tanh 15 --set "$NAME" label.y_offset=5 label.y_offset=0
	fi
}

popup() {
	sketchybar --set "$NAME" popup.drawing="$1"
}

case "$SENDER" in
"routine" | "forced")
	update
	;;
"mouse.entered")
	popup on
	;;
"mouse.exited" | "mouse.exited.global")
	popup off
	;;
"mouse.clicked")
	popup toggle
	;;
esac
