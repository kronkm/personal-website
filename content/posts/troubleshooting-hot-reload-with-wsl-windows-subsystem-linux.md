---
path: troubleshooting-wsl-hot-reload
date: 2021-12-14T01:11:22.174Z
title: Troubleshooting Hot Reload with WSL (Windows Subsystem Linux)
description: Getting your new front end application configured properly in a WSL
  environment.
---
Are you new to WSL (<a href="https://docs.microsoft.com/en-us/windows/wsl/about" target="_blank" rel="noopener noreferrer">Windows Subsystem Linux</a>) and trying to setup a front end application with <a href="https://webpack.js.org/concepts/hot-module-replacement/" target="_blank" rel="noopener noreferrer">hot reload</a> functionality in development mode, such as a <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> or <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> app?

I struggled with this at first. I could get an app running, but hot reload wasn't working for either framework.

Here are two quick troubleshooting steps to ensure that you've got your environment setup properly.

### Validate Your WSL Install

First, you should validate whether you have WSL installed properly in the first place.

Open a powershell and check your install:

1. Press `Windows + R` to open the Run dialog box
2. Type "powershell" in the "Open" prompt
3. Run `wsl -l -v` in the powershell

The output should look similar to below, which indicates that WSL exists on your system and that it's running v2.

`PS C:\Users\mkron> wsl -l -v`

`  NAME      STATE           VERSION`

`* Ubuntu    Running         2`

### Create Your Project in the WSL Home Directory

Second, create your project in the GNU/Linux environment that Windows has created via WSL.

Open your WSL terminal:

1. Press `Windows + R` to open the Run dialog box
2. Type "wsl" in the "Open" prompt
3. Press `Enter`

Your WSL terminal will have access to your mounted drives, such as your C drive at `/mnt/c`, but do NOT put your project there! The permissions for webpack won't be setup properly, and hot reload won't work.

Do NOT put your project in the `/mnt/wsl` directory either. While it might seem intuitive to do this, this is a temporarily mounted drive which is memory only. After a system restart, your files won't be there!

Your project needs to be within the WSL home directory for hot reload to work properly.

You can navigate to this directory in the WSL terminal in two ways:

* `cd ~`

Or

* `cd /home/$YOUR_USERNAME`

\
Within this directory, you can create your project and hot reload should work properly.

### Further Troubleshooting Steps

If you're still seeing issues with hot reload, verify that your front end app is setup properly with both global and local dependencies.

Do you have Node installed in your WSL environment, ideally with the <a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm" target="__blank" rel="noopener noreferrer">nvm version manager</a>?

Did you run `npm install` or `yarn` in your project root? If your answers are yes to the above, then there may be a problem present that doesn't have to do with WSL.

If you can run the app, I'd check the development or production build output in the WSL terminal first to see if there's any hints.

If using a framework, it might also help to rebuild the app in the WSL environment from scratch with the framework documentation handy.