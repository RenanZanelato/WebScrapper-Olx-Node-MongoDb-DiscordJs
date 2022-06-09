class OlxModel {
    constructor(id, createdDate) {
        this.id = id;
        this.createdDate = createdDate;
        this.title;
        this.imgLink;
        this.link;
        this.price;
        this.locale;
    }
    
    setTitle(title){
        this.title = title;
        return this;
    }
    setImgLink(imgLink){
        const defaultImageLink = 'https://static.olx.com.br/cd/listing/notFound.png';
        this.imgLink = typeof imgLink == 'undefined' ? defaultImageLink : imgLink;
        return this;
    }
    setLink(link){
        this.link = link;
        return this;
    }
    setLocale(locale){
        this.locale = locale;
        return this;
    }
    setPrice(price){
        this.price = price;
        return this;
    }
}

module.exports = OlxModel;