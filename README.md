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
        - Install Scoop
            - Open powershell as admin and run:
                - `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`
                    - Note: if you get an error you might need to change the execution policy (i.e. enable Powershell) with `Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
                - close and re-open powershell
    - Install Yarn:
        - with scoop
            - `scoop install yarn`
            - Node isn't needed but recommended:
                - `scoop install nvm`
                - `nvm install latest`
                
        - **or** [install node](https://nodejs.org/en/download/):
            - then `npm install -g yarn`
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
    


##### Use database
Get into docker instance:
    - `docker exec -it mongo bash`
    - `mongo`
    - `db // test`
    - `db.col.insert({"a": 4})`
    - `db.col.find().pretty()`
    
##### Useful docker commands:

- Get into box:
  -`docker exec -it platform_admin_1 /bin/sh`

    
    
    
    
    
    
    
    
    
    

