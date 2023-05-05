{
  description = "KhaneliNix";

  inputs = {
    # NixPkgs (nixos-unstable) 
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    # Nix User Repository (master)
    nur.url = "github:nix-community/NUR";

    # Home Manager (master)
    home-manager.url = "github:nix-community/home-manager";
    home-manager.inputs.nixpkgs.follows = "nixpkgs";

    # macOS Support (master)
    darwin.url = "github:lnl7/nix-darwin";
    darwin.inputs.nixpkgs.follows = "nixpkgs";

    # Hardware Configuration
    nixos-hardware.url = "github:nixos/nixos-hardware";

    # Generate System Images
    nixos-generators.url = "github:nix-community/nixos-generators";
    nixos-generators.inputs.nixpkgs.follows = "nixpkgs";

    # Snowfall Lib
    snowfall-lib.url = "github:snowfallorg/lib/dev";
    snowfall-lib.inputs.nixpkgs.follows = "nixpkgs";

    # Snowfall Flake
    flake.url = "github:snowfallorg/flake";
    flake.inputs.nixpkgs.follows = "nixpkgs";
    # flake.inputs.snowfall-lib.follows = "snowfall-lib";

    # Comma
    comma.url = "github:nix-community/comma";
    comma.inputs.nixpkgs.follows = "nixpkgs";

    # System Deployment
    deploy-rs.url = "github:serokell/deploy-rs";
    deploy-rs.inputs.nixpkgs.follows = "nixpkgs";

    # Run unpatched dynamically compiled binaries
    nix-ld.url = "github:Mic92/nix-ld";
    nix-ld.inputs.nixpkgs.follows = "nixpkgs";

    # Discord Replugged
    replugged.url = "github:LunNova/replugged-nix-flake";
    replugged.inputs.nixpkgs.follows = "nixpkgs";

    # Discord Replugged plugins / themes
    discord-tweaks = {
      url = "github:NurMarvin/discord-tweaks";
      flake = false;
    };
    discord-nord-theme = {
      url = "github:DapperCore/NordCord";
      flake = false;
    };

    # Cows!
    cowsay = {
      url = "github:snowfallorg/cowsay";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.unstable.follows = "nixpkgs";
    };

    # Backup management
    icehouse = {
      url = "github:snowfallorg/icehouse";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.unstable.follows = "nixpkgs";
    };

    # Yubikey Guide
    yubikey-guide = {
      url = "github:drduh/YubiKey-Guide";
      flake = false;
    };

    # GPG default configuration
    gpg-base-conf = {
      url = "github:drduh/config";
      flake = false;
    };

    # Catppuccin cursors
    catppuccin-cursors = {
      url = "github:catppuccin/cursors";
      flake = false;
    };

    # hyprland
    hyprland.url = "github:hyprwm/Hyprland";

    # Hyprland user contributions flake
    hyprland-contrib = {
      url = "github:hyprwm/contrib";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # Neovim
    # neovim-nightly.url = "github:nix-community/neovim-nightly-overlay";

    # rust overlay
    rustup-overlay.url = "github:oxalica/rust-overlay";

    sops-nix.url = "github:Mic92/sops-nix";

    devshell.url = "github:numtide/devshell";
    # flake-utils.url = "github:numtide/flake-utils";

    # Astronvim repo
    astronvim = {
      url = "github:AstroNvim/AstroNvim/nightly";
      flake = false;
    };

    # Personal astronvim configuration
    astronvim-user = {
      url = "github:khaneliman/astronvim";
      flake = false;
    };

    # Personal dotfiles configuration
    dotfiles = {
      url = "github:khaneliman/dotfiles";
      flake = false;
    };
  };

  outputs = inputs:
    let
      lib = inputs.snowfall-lib.mkLib {
        inherit inputs;
        src = ./.;
      };
    in
    lib.mkFlake {
      package-namespace = "khanelinix";

      channels-config.allowUnfree = true;
      # TODO: cleanup when available
      channels-config.permittedInsecurePackages = [
        "imagemagick-6.9.12-68"
      ];

      # devShells = {
      #   default = inputs.nixpkgs.mkShell {
      #     packages = [ inputs.nixpkgs.bashInteractive ];
      #   };
      # };

      # overlays from inputs
      overlays = with inputs; [
        flake.overlay
        cowsay.overlay
        icehouse.overlay
        nur.overlay
        # neovim-nightly.overlay
        rustup-overlay.overlays.default
        hyprland.overlays.default
        devshell.overlays.default
      ];

      # modules from inputs
      systems.modules = with inputs; [
        home-manager.nixosModules.home-manager
        nix-ld.nixosModules.nix-ld
        hyprland.nixosModules.default
        sops-nix.nixosModules.sops
      ];

      deploy = lib.mkDeploy { inherit (inputs) self; };

      checks =
        builtins.mapAttrs
          (system: deploy-lib:
            deploy-lib.deployChecks inputs.self.deploy)
          inputs.deploy-rs.lib;
    };
}
