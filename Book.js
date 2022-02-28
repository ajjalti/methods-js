class Book {
    constructor(title,author,description,pages){
      this.title=title;
      this.author=author;
      this.description=description;
      this.pages=pages;
      this.currentPage=1;
      this.read=false;
    }
    readBook(page){
      if(page<1 || page>this.pages){
        return 0;
      }else if(page>=1 && page<this.pages){
      this.currentPage=page;
      return 1;
    }
    if(page==this.pages){
      this.currentPage=page;
      this.read=true;
      return 1;
    }
  }
  }
  var BOOK1  = new Book("titre1","author1","description1",20);
  var BOOK2  = new Book("titre2","author2","description2",30);
  var BOOK3  = new Book("titre3","author3","description3",40);
  BOOK1.readBook(10);
  BOOK2.readBook(0);
  BOOK3.readBook(40);