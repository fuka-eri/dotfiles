return {
	"nvim-neo-tree/neo-tree.nvim",
	opts = function(_, opts)
		opts.filesystem = {
			-- bind_to_cwd = false,
			filtered_items = {
				visible = true, -- This is what you want: If you set this to `true`, all "hide" just mean "dimmed out"
				hide_dotfiles = false,
				hide_gitignored = true,
			},
		}
		return opts
	end,
}
