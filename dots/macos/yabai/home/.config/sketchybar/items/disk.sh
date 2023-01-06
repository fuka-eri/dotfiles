#!/usr/bin/env bash

source "$HOME/.config/sketchybar/colors.sh"

sketchybar --add item        disk right                       \
           --set disk        label.font="$FONT:Heavy:12"      \
                             label.color="$WHITE"             \
                             icon="$DISK"                     \
                             icon.color="$MAGENTA"            \
                             update_freq=2                    \
                             script="$PLUGIN_DIR/disk.sh"
