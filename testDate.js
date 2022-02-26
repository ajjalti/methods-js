function testDate(j,m,a){
    if(j>=1 && j<=31 && m>=1 && m<=12 && a>=1){
        let m1 = [1,3,5,7,8,10,12];
        let m2 = [4,6,9,11];
        let test = false;
        if(m in m1){
            if(j<=31){
                test=true;
            }
        }
        if(m in m2){
            if(j<=30){
                test=true;
            }
        }
        if(m==2){
            if(!a%4 && j<=29){
                test=true;
            }
            if(a%4 && j<=28){
                test=true;
            }
        }
        return test;
    }
    return false;
}

// class book :
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
  