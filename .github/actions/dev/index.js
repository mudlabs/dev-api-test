
(async function(){
  try {
    const post = await fetch({
      url: "https://dev.to/api/articles",
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'api-key': process.env.token
      },
      body: JSON.stringify({
        article: {
          title: "Testing API,
          published: false,
          body_markdown: "This is a test pots to dev from github action,
          tags: [""github", "test", "api"],
          series: "Api Test"
        }
      })
    });
    console.log(post);
  } catch(error) {
    console.log(error);
  }
})();
