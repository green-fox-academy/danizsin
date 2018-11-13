'use strict'
import { BlogPost } from "./blogposttask";

class Blog {
  listOfBlogPosts: BlogPost[] = [];

  addBlogPost(newBlogPost: BlogPost): void {
    this.listOfBlogPosts.push(newBlogPost);
  }

  deleteBlogPost(deleteThis: number) {
    if (deleteThis <= this.listOfBlogPosts.length && deleteThis >= 1) {
      this.listOfBlogPosts.splice(deleteThis - 1, 1);
      return this.listOfBlogPosts;
    } else {
      return `${deleteThis}. blogpost cannot be deleted because it doesnt exist`;
    }
  }

  updateBlogPost(updateThis: number, updatedBlogPost: BlogPost) {
    if (updateThis <= this.listOfBlogPosts.length && updateThis >= 1) {
      this.listOfBlogPosts.splice(updateThis - 1, 1, updatedBlogPost);
      return this.listOfBlogPosts;
    } else {
      return `${updateThis}. blogpost cannot be updated because it doesnt exist`;
    }
  }
}

let blog1 = new Blog();
blog1.addBlogPost(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
blog1.addBlogPost(new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'));
blog1.addBlogPost(new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.'));

console.log(blog1.deleteBlogPost(2));
console.log(blog1.deleteBlogPost(4));
console.log(blog1.updateBlogPost(1, new BlogPost('Dani Zsin', 'My life in nutshell', 'Pokemon theme song: \'I wanna be the very best like noone ever was, to catch them is my real test!\'', '2002.05.23')));
