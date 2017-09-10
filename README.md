# Illuminism Platform

# Getting Started:

#### Step 1: Install Docker
- Mac: https://www.docker.com/docker-mac
- Windows: https://www.docker.com/docker-windows
- linux: https://docs.docker.com/engine/installation/

##### Make sure docker is installed and updated
Make sure this icon is in your [system OS tray](https://www.dropbox.com/help/desktop-web/system-tray-menu-bar):

![Docker logo](https://imgur.com/Bkz9zHh)

##### Install Yarn and NodeJS:
- windows

    - If you **do not** have NodeJS I highly recommend installing [http://scoop.sh/](http://scoop.sh/)
    - Install Yarn:
        - with scoop
            - `scoop install yarn`
            - Node isn't needed but recommended:
                - `scoop install nvm`
                - `nvm install latest`
                
        - **or** with [install node](https://nodejs.org/en/download/):
            - `npm install -g yarn`
- mac:
    - with node:
        - [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
        - `nvm install latest`
        - `nvm install yarn -g`
    - **or** without node and with homebrew and yarn:
        - install [homebrew](https://brew.sh/)
        - `brew install yarn --without-node`
    - **or** if you have a completely fresh computer:
        - [https://github.com/alrra/dotfiles](https://github.com/alrra/dotfiles)
- linux:
    - [https://github.com/alrra/dotfiles](https://github.com/alrra/dotfiles)

##### Go into every project and install dependencies:
- From cmd or terminal:
    - `cd server` => `yarn`
    - `cd client` => `yarn`
    - `cd admin` => `yarn`

##### Finally:

- in root directory(`plaform/`) run:
    - `docker-compose up`
    
    
    
    
    
    
    
    
    
    

