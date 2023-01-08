#!/usr/bin/env sh
sketchybar -m --add item    battery right 																		                \
              --set battery update_freq=10 																		                \
                            script="$PLUGIN_DIR/battery.sh" 	                                \
              --subscribe  battery          mouse.entered                                     \
                                            mouse.exited                                      \
                                            mouse.exited.global                               \
                                                                                              \
              --add       item              battery.template popup.battery                    \
              --set                         battery.template drawing=off                      \
                                            background.corner_radius=12                       \
                                            background.padding_left=7                         \
                                            background.padding_right=7                        \
                                            icon.background.height=2                          \
                                            icon.background.y_offset=-12
