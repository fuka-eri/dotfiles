#!/usr/bin/env sh

case "$SENDER" in
  "front_app_switched")
	  appId="$INFO"
	  bash "$HOME/.config/sketchybar/plugins/dynamic-island/scripts/queue_island.sh" "appswitch;" "1;$HOME/.config/sketchybar/plugins/dynamic-island/scripts/islands/appswitch/appswitch_island.sh $appId|;$HOME/.config/sketchybar/plugins/dynamic-island/scripts/islands/appswitch/reset.sh;0.6"
  ;;
esac
