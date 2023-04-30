{ options
, config
, lib
, pkgs
, ...
}:
with lib;
with lib.internal; let
  cfg = config.khanelinix.desktop.hyprland;
  term = config.khanelinix.desktop.addons.term;
  hyprBasePath = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.config/hypr/";
in
{
  options.khanelinix.desktop.hyprland = with types; {
    enable = mkBoolOpt false "Whether or not to enable Hyprland.";
    wallpaper = mkOpt (nullOr package) null "The wallpaper to display.";
    customConfigFiles = mkOpt attrs { } "Custom configuration files that can be used to override the default files.";
  };

  config = mkIf cfg.enable {
    # Desktop additions
    khanelinix.desktop.addons = {
      gtk = enabled;
      qt = enabled;
      kitty = enabled;
      rofi = enabled;
      swappy = enabled;
      kanshi = enabled;
      keyring = enabled;
      nautilus = enabled;
      electron-support = enabled;
      swaylock = enabled;
      swayidle = enabled;
      swaynotificationcenter = enabled;
      waybar = enabled;
      wlogout = enabled;
      wdisplays = enabled;
      xdg-portal = enabled;
    };

    khanelinix.home.configFile =
      {
        "hypr/assets/square.png".source = hyprBasePath + "assets/square.png";
        "hypr/assets/diamond.png".source = hyprBasePath + "assets/diamond.png";
        "hypr/apps.conf".source = hyprBasePath + "apps.conf";
        "hypr/binds.conf".source = hyprBasePath + "binds.conf";
        "hypr/displays.conf".source = hyprBasePath + "displays.conf";
        "hypr/environment.conf".source = hyprBasePath + "environment.conf";
        # "hypr/environment.conf".source = (pkgs.writeTextFile {
        #   name = "environment.conf";
        #   text = ''
        #   '';
        # });
        "hypr/hyprland.conf".source = hyprBasePath + "hyprland.conf";
        "hypr/hyprpaper.conf".source = hyprBasePath + "hyprpaper.conf";
        "hypr/polish.conf".source = (pkgs.writeTextFile {
          name = "polish.conf";
          text = ''
          '';
        });
        "hypr/variables.conf".source = hyprBasePath + "variables.conf";
        "hypr/windowrules.conf".source = hyprBasePath + "windowrules.conf";
        "mimeapps.list".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.config/mimeapps.list";
      }
      // cfg.customConfigFiles;

    khanelinix.home.file = {
      ".local/bin/xdg-desktop-portal.sh".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/xdg-desktop-portal.sh";
      ".local/bin/hyprland_setup_dual_monitors.sh".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/hyprland_setup_dual_monitors.sh";
      ".local/bin/hyprland_cleanup_after_startup.sh".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/hyprland_cleanup_after_startup.sh";
      ".local/bin/hyprland_handle_monitor_connect.sh".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/hyprland_handle_monitor_connect.sh";
      ".local/bin/record_screen".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/record_screen";
      ".local/bin/grimblast".source = pkgs.khanelinix.dotfiles.outPath + "/dots/linux/hyprland/home/.local/bin/grimblast";
    };

    programs.hyprland = {
      enable = true;
    };

    environment.systemPackages = with pkgs; [
      khanelinix.catppuccin-sddm
      sddm
      xwayland
      grim
      cliphist
      wl-clipboard
      wf-recorder
      libinput
      playerctl
      brightnessctl
      glib # for gsettings
      gtk3.out # for gtk-launch
      xdg-desktop-portal-hyprland
      hyprpaper
      hyprpicker
      swayimg
      blueman
      networkmanagerapplet
      polkit-kde-agent
    ];

    # environment.sessionVariables = {
    #   WLR_NO_HARDWARE_CURSORS = "1";
    #   WLR_RENDERER = "vulkan";
    #   XDG_SESSION_TYPE = "wayland";
    #   QT_QPA_PLATFORM = "wayland";
    #   QT_WAYLAND_DISABLE_WINDOWDECORATION = "1";
    #   MOZ_ENABLE_WAYLAND = "1";
    #   MOZ_USE_XINPUT2 = "1";
    #   SDL_VIDEODRIVER = "wayland";
    #   _JAVA_AWT_WM_NONEREPARENTING = "1";
    #   XDG_SESSION_DESKTOP = "Hyprland";
    #   XDG_CURRENT_DESKTOP = "Hyprland";
    #   HYPRLAND_LOG_WLR = "1";
    #   # ASAN_OPTIONS = log_path = ~/asan.log;
    # };

    services.xserver = {
      enable = true;

      libinput.enable = true;
      displayManager.sddm = {
        enable = true;
        theme = "catppuccin";
      };
    };

    # services.xserver.displayManager.defaultSession = "hyprland";
  };
}
