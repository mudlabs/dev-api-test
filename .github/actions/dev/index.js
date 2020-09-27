const unirest = require("unirest");

(async function(){
  try {

    const post = await unirest
      .post("https://dev.to/api/articles")
      .headers({
        'Content-Type': "application/json",
        'api-key': process.env.token
      })
      .send({
        title: "Test Title",
        published: false,
        body_markdown: "Some test body text",
        tags: ["test", "api"],
        series: "Test API"
      });
    console.log(post);
  } catch(error) {
    console.log(error);
  }
})();
