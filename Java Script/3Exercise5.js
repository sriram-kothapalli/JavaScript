//Constructor Function

//to create post object
//imagine building a blog engine the user is drafting a post they are not published yet
function Post(title,body,author,){
 this.title=title;
 this.author=author;
 this.body= body;
 this.views=0;
 this.comments=[];//empty array 
 this.isLive =false; 
}
let post = new Post('a','b','c')//passed the values of title,body ,author
console.log(Post)