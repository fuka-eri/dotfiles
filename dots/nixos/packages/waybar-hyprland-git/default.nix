{ lib
, stdenv
, fetchFromGitHub
, meson
, pkg-config
, ninja
, wrapGAppsHook
, wayland
, wlroots
, gtkmm3
, libsigcxx
, jsoncpp
, scdoc
, spdlog
, gtk-layer-shell
, howard-hinnant-date
, libinotify-kqueue
, libxkbcommon
, evdevSupport ? true
, libevdev
, inputSupport ? true
, libinput
, jackSupport ? true
, libjack2
, mpdSupport ? true
, libmpdclient
, mprisSupport ? stdenv.isLinux
, playerctl ? false
, nlSupport ? true
, libnl
, pulseSupport ? true
, libpulseaudio
, rfkillSupport ? true
, runTests ? true
, catch2_3
, sndioSupport ? true
, sndio
, swaySupport ? true
, sway
, traySupport ? true
, libdbusmenu-gtk3
, udevSupport ? true
, udev
, upowerSupport ? true
, upower
, wireplumberSupport ? true
, wireplumber
, withMediaPlayer ? mprisSupport && false
, glib
, gobject-introspection
, python3
, fmt
, cava
}:

stdenv.mkDerivation rec {
  pname = "waybar-hyprland-git";
  version = "757f20fc04d735985f5dd8b20e8852f9cb163401";

  src = fetchFromGitHub {
    owner = "Alexays";
    repo = "Waybar";
    rev = version;
    hash = "sha256-cv81WUDNGeVbm8F6fHtfH/DRDIh1dq5AFlnkQz1KpX8=";
  };

  nativeBuildInputs = [
    meson
    ninja
    pkg-config
    scdoc
    wrapGAppsHook
  ] ++ lib.optional withMediaPlayer gobject-introspection;

  propagatedBuildInputs = lib.optionals withMediaPlayer [
    glib
    playerctl
    python3.pkgs.pygobject3
  ];

  strictDeps = false;

  buildInputs = with lib;
    [ cava fmt wayland wlroots gtkmm3 libsigcxx jsoncpp spdlog gtk-layer-shell howard-hinnant-date libxkbcommon ]
    ++ optional (!stdenv.isLinux) libinotify-kqueue
    ++ optional evdevSupport libevdev
    ++ optional inputSupport libinput
    ++ optional jackSupport libjack2
    ++ optional mpdSupport libmpdclient
    ++ optional mprisSupport playerctl
    ++ optional nlSupport libnl
    ++ optional pulseSupport libpulseaudio
    ++ optional sndioSupport sndio
    ++ optional swaySupport sway
    ++ optional traySupport libdbusmenu-gtk3
    ++ optional udevSupport udev
    ++ optional upowerSupport upower
    ++ optional wireplumberSupport wireplumber;

  nativeCheckInputs = [ catch2_3 ];
  doCheck = runTests;

  mesonFlags = (lib.mapAttrsToList
    (option: enable: "-D${option}=${if enable then "enabled" else "disabled"}")
    {
      dbusmenu-gtk = traySupport;
      jack = jackSupport;
      libinput = inputSupport;
      libnl = nlSupport;
      libudev = udevSupport;
      mpd = mpdSupport;
      mpris = mprisSupport;
      pulseaudio = pulseSupport;
      rfkill = rfkillSupport;
      sndio = sndioSupport;
      tests = runTests;
      upower_glib = upowerSupport;
      wireplumber = wireplumberSupport;
    }
  ) ++ [
    "-Dsystemd=disabled"
    "-Dgtk-layer-shell=enabled"
    "-Dman-pages=enabled"
    "-Dexperimental=true"
  ];

  preFixup = lib.optionalString withMediaPlayer ''
    cp $src/resources/custom_modules/mediaplayer.py $out/bin/waybar-mediaplayer.py

    wrapProgram $out/bin/waybar-mediaplayer.py \
      --prefix PYTHONPATH : "$PYTHONPATH:$out/${python3.sitePackages}"
  '';

  postPatch = ''
    # use hyprctl to switch workspaces
    sed -i 's/zext_workspace_handle_v1_activate(workspace_handle_);/const std::string command = "hyprctl dispatch workspace " + name_;\n\tsystem(command.c_str());/g' src/modules/wlr/workspace_manager.cpp
  '';


  meta = with lib; {
    changelog = "https://github.com/alexays/waybar/releases/tag/${version}";
    description = "Highly customizable Wayland bar for Sway and Wlroots based compositors";
    license = licenses.mit;
    maintainers = with maintainers; [ FlorianFranzen minijackson synthetica lovesegfault rodrgz khaneliman ];
    platforms = platforms.unix;
    homepage = "https://github.com/alexays/waybar";
  };
}
