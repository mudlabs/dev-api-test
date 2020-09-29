const unirest = require("unirest");
const fetch = require("node-fetch");

(async function(){
  try {
   const post = await fetch(
     "https://dev.to/api/articles",
     {
       method: "post",
       headers: { 
         'Content-Type': "application/json",
         'api-key': process.env.token
       },
       body: JSON.stringify({
          "title": "Hello, World!",
          "published": false,
          "body_markdown": "Hello DEV, this is my first post",
          "tags": ["discuss", "help"],
          "series": "Hello series"
       })
     }
   );
   
//    const post = await unirest
//      .post("https://dev.to/api/articles")
//       .headers({
//        'Content-Type': "application/json",
//        'api-key': process.env.token
//        })
//       .send(JSON.stringify({
//         "title": "Hello, World!",
//         "published": false,
//         "body_markdown": "Hello DEV, this is my first post",
//         "tags": ["discuss", "help"],
//         "series": "Hello series"
//        }));
     console.log(post.body);
   } catch(error) {
     console.log(error);
   }
 })();
