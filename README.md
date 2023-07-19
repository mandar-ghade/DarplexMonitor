Darplex Monitor
============
[![GitHub Stars](https://img.shields.io/github/stars/GX2H912/DarplexMonitor.svg)](https://github.com/GX2H912/DarplexMonitor/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/GX2H912/DarplexMonitor.svg)](https://github.com/GX2H912/DarplexMonitor/issues) [![Current Version](https://img.shields.io/badge/version-1.0-green.svg)](https://github.com/GX2H912/DarplexMonitor) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://GX2H912.com/chat) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/GX2H912/DarplexMonitor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Join our discord server by pressing this image:

[![](https://cdn.discordapp.com/attachments/1117248898495434857/1117253725531156531/Darplex.png)](https://discord.gg/XPvYEHamSZ)


This is a node.js chat application powered by sequelize and Fastify that provides the main functions you'd expect from a Mineplex-based webserver, such as chatfilter, booster handling, pets and logins.

<!-- ![DarplexMonitor Preview](http://i.imgur.com/lgRe8z4.png) -->

<!-- --- -->
<!-- ## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/GX2H912" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

--- -->

## Features
- PlayerAccount Routes
- Dominate Route
- Chat Filter Route
- Booster Route
- Pet route.




## Setup
Install node.js.

Clone this repository to your desktop using 
`git clone https://github.com/GX2H912/DarplexMonitor.git`. Next, change directory to DarplexMonitor using `cd DarplexMonitor`, then use `npm install` to install all the dependencies.

You might want to look into `config/dbConfig.js` to make change the port under the variable `WEBSERVER_PORT` (default is 1000), as well as changing the credentials to your SQL database.

Additionally, you can change the dialect to your preferred `SQL` in the `dialect`.

Change the web-server url in your `config.yml` and `api-config.dat` files, or internally if necessary.

---

## Usage
After you clone this repo to your desktop, do `cd DarplexMonitor` and run `npm install` to install its dependencies.

Once the dependencies are installed, `START UP YOUR MYSQL SERVER`, then you can run  `node server.js` to start the webserver. You will then be able to access it at `http://127.0.0.1:(YOUR PORT HERE)/...`

`Boosters`, `Pets`, `AccountPunishments`, `ShadowMutes`, `CustomBuilds`, and `CustomBuildSlots` tables get setup automatically. Whenever issues persist with any of these modules, feel free to delete them in your database as they will be autogenerated once you restart your webserver.

If you experience issues with Punishments, **delete your existing table in MySQL**  and **restart** the program. The program automatically regenerates this table with foreign keys pre-setup.




# Webserver routes:
`WEBSERVER_PORT` stands for whatever port you configured the webserver to in `config/dbConfig.js` 
- PlayerAccount Route:
    - Registers at `http://127.0.0.1:WEBSERVER_PORT/PlayerAccount/...`
    - PurchaseKnownSalesPackage excluded (EnjinTranslator feature).
    - CustomBuilds may be buggy at points (open an issue if errors persist).
---
- Dominate Route:
    - Dominate solely registers GetSkills.
    - Registers at `http://127.0.0.1:WEBSERVER_PORT/Dominate/GetSkills`
    ---
- Booster Route:
    - Registers at `http://127.0.0.1:WEBSERVER_PORT/booster/...`
---
- Pet Route:
    - Registers at `http://127.0.0.1:WEBSERVER_PORT/Pets/...`
---
- Antispam:
    - Registers at `http://127.0.0.1:WEBSERVER_PORT/chat/PLUGIN_NAME`
---
- ChatFilter:
    - Only works when configured in source code.
    - Customizable (you can add filtered words to `config/filteredWords.json`)
    - To setup in source code:
        - In `_plex.Core`, locate `src/_plex/core/chat/Chat.java`.
        - Replace cleanspeak URL with `http://127.0.0.1:WEBSERVER_PORT/content/item/moderate`
        - Since it is an HTTP connection, replace the existing HTTPs import (from `javax.net.ssl.HttpsURLConnection`) to `sun.net.www.protocol.http.HttpURLConnection` instead.
        - Then replace every reference to `HttpsURLConnection` with `HttpURLConnection`, and comment out lines 501-507:
            - HttpURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());<br />HostnameVerifier allHostsValid = (hostname, session) -> true;<br />
            // Install the all-trusting host verifier
            HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);"
## TODO
- Logging support.
- Multi-part YouTube series for Plex setup from scratch (unlikely).
- Upload MySQL database file for portable installation.
- Upload Redis scripts for easy ServerMonitor and ServerGroup installation.
- Upload ServerMonitor scripts for Windows.

## Support
- Contact us on discord by first pressing the Darplex image at the top of the `README.md` file, then messaging me through the server.


## License
>You can check out the full license [here](https://github.com/GX2H912/DarplexMonitor/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
