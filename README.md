# DEPRECATED
- This version was already deprecated.
- Wew updates will be do just on https://github.com/RenanZanelato/WebScrapper-Olx-Node-MongoDb-TypeScript :)

# WebScrapper OLX

This is a simple WebScrapper that use Node and MongoDb 
Just working on the olx brasil website. (https://www.olx.com.br)

## How to Use

- First, create the file config.json on src/configs/ (or copy the example-config.json and change to config.json)
- DiscordWebook need to be configured (Discord Documentation https://discordjs.guide/popular-topics/webhooks.html#editing-webhooks)

## Installation
```sh
git clone {thisRepositoryLink}
cd {thisRepositoryFolder}
npm install
```

## Scrapping just first Page
```sh
node . 
```
or

```sh
node index 
```

## Scrapping Per Page
```sh
node perPage
```
Total pages will be configured on the file **config.json** in the JsonProperty: **pagesToSearchData**

## Flow
- First will find all data on the page
- Will format the data and populate the model **OLXModel**
- If it's the first time that data was scrapped, will send a message on Discord and save the OlxID on MongoDb
- If already exist, will skip for the next.
