using module ConfigMap

# Variables
$objShell = New-Object -ComObject Shell.Application
$timestamp = Get-Date -Format o | ForEach-Object { $_ -replace ":", "." }
$ConfigMap = Get-ConfigMap

# Loop through provided input directories
foreach ( $config in $ConfigMap )
{   
    $backupFolderPath = "${env:USERPROFILE}\.config\dotfiles-backup\$timestamp"
    $destinationExists = Test-Path -Path $config.Destination

    if ($destinationExists -eq $true)
    {
        if ((get-item $config.Destination).Attributes.ToString() -match "ReparsePoint") {
            write-host $config.Destination "is already a symbolic link. Skipping..."
            write-host "If you'd like to replace this location... delete your existing link and run again."
            continue
        } 

        $backupRelativeFolderPath = $config.Destination.Replace("${env:USERPROFILE}","")
        $backupFolderPath = $backupFolderPath + $backupRelativeFolderPath
        $backupFolderPath = Split-Path -parent $backupFolderPath
        New-Item $backupFolderPath -ItemType Directory -Force
        $backupFolder = $objShell.Namespace($backupFolderPath)

        write-host "    " $config.Destination "already exists. Backing up existing files..."
        $backupFolder.CopyHere($config.Destination, 0x14)
        
        if ($config.ReplaceExisting)
        {
            if ($config.CreateSymbolicLink -eq $true) 
            {
                write-host "    Deleting " $config.Destination
                Remove-Item -Path $config.Destination -Recurse -Force
            }
        } else
        {
            write-host "    Config already exists. Skipping..."
            continue
        }

    } 
    
    if ($config.CreateSymbolicLink -eq $true)
    {
        write-host "    Creating link to " $config.Source "at" $config.Destination
        sudo New-Item -ItemType SymbolicLink -Path $config.Destination -Target $config.Source
    } else
    {
        #TODO: Fix copy not working for some reason
        write-host "    Copying files to" $config.Destination
        $destinationFolderPath = Split-Path -parent $config.Destination
        # $destinationFolderPath
        New-Item $destinationFolderPath -ItemType Directory -Force
        $destinationFolder = $objShell.Namespace($destinationFolderPath)
        # $destinationFolder

        $destinationFolder.CopyHere($config.Source, 0x14)
    }
}
