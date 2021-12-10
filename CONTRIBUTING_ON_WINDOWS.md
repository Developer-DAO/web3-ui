# Contributing on Windows

If you are developing on a Windows machine, you may need to make modifications to your setup to avoid some issues.

## Install WSL2

Installing and running a Linux distribution on Windows allows you to setup your project within a Linux environment and avoid some issues that come up using Windows.

### Helpful Resources
Here are some helpful resources to install and setup WSL2 on Windows
* Step by step tutorial for installing WSL2 on Windows
	* Written Version - https://www.ceos3c.com/wsl-2/install-wsl2-with-windows-terminal/
	* YouTube Version - https://www.youtube.com/watch?v=VMZH9Pj2dXw
* The same author has a helpful tutorial on terminal customization that might be helpful
	* https://www.youtube.com/watch?v=qiLJhG0O51M

## Setup your working directory

It can be a bit confusing to setup your working directory. You want to be sure that you are storing your project files (and working with them) in your WSL2 file system and not in your Windows file system.

You can quickly see what Linux distributions you have installed by opening up your file explorer and typing the following in the address bar: `wsl\\$`

Select a distribution and navigate into that directory. Continue navigating to `home/[yourUserName]/`. You can create a 'projects' directory here and begin storing your projects in here.

Below are some helpful resources.
* Windows Subsystem for Linux Documentation - https://docs.microsoft.com/en-us/windows/wsl/
* File Storage - https://docs.microsoft.com/en-us/windows/wsl/setup/environment#file-storage
* Setting up VS Code - https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode

## Setup your web3-ui project

* Follow the the instructions found in the [CONTRIBUTING](/CONTRIBUTING.md) readme.
* If you run into 'EACCESS' permissions issues:
	* double check your directory permissions with `ls -la` 
	* If the owner is root, you may have problems when running `yarn install`.  You can modify the permissions with the following command `sudo chown -R [yourUsername] [yourProjectDir]`. The `-R` is to recurse into each of the files and directories.