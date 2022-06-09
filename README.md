# WebScrapper OLX

This is a simple webScrapper that use Node and MongoDb 
Just working on the olx brasil site. (https://www.olx.com.br/)
## How to Use

- First, create the file config.json on src/configs/ (or copy the example-config.json and change to config.json)

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

## Scrapping just per Page
```sh
node perPage
```
Total pages will be configure on config.json on the JsonProperty: **pagesToSearchData**
