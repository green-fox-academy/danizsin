'use strict';

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
  constructor(authNm: string, titl: string, txt: string, publDate: string) {
    this.authorName = authNm;
    this.title = titl;
    this.text = txt;
    this.publicationDate = publDate;
  }
}

export { BlogPost };
