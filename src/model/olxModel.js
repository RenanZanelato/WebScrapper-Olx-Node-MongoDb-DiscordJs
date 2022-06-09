class OlxModel {
    constructor() {
        this.id;
        this.createdDate;
        this.title;
        this.imgLink;
        this.link;
        this.price;
        this.locale;
    }
    setId(id){
        let intNumber =  Math.floor(Math.random() * 999999999999999999 )+1;
        this.id = this.defaultValidate(id, intNumber.toString());
        return this;
    }
    setCreatedDate(createdDate){
        this.createdDate = this.defaultValidate(createdDate);
        return this;
    }
    setTitle(title){
        this.title = this.defaultValidate(title);
        return this;
    }
    setImgLink(imgLink){
        let defaultImageLink = 'https://static.olx.com.br/cd/listing/notFound.png';
        this.imgLink = this.defaultValidate(imgLink, defaultImageLink);
        return this;
    }
    setLink(link){
        this.link = link;
        return this;
    }
    setLocale(locale){
        this.locale = this.defaultValidate(locale);
        return this;
    }
    setPrice(price){
        this.price = this.defaultValidate(price);
        return this;
    }
    defaultValidate(modelData, defaultFormat = '???')
    {
        return typeof modelData == 'undefined' || modelData.length == 0 ? defaultFormat : modelData;
    }
}

module.exports = OlxModel;