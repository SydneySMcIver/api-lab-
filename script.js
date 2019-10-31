fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    let mainEl = document.querySelector("#content");
    for (const post of data.data.children) {
      let contentEl = document.createElement("div");
      contentEl.classList.add("posts");
      mainEl.appendChild(contentEl);

      let titleEl = document.createElement("h3");
      titleEl.innerText = post.data.title;
      contentEl.appendChild(titleEl);

      let linkEl = document.createElement("a");
      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${post.data.permalink}`
      );
      linkEl.innerText = "Find out More";
      contentEl.appendChild(linkEl);

      let picEl = document.createElement("img");
      picEl.setAttribute("src", post.data.thumbnail);
      mainEl.appendChild(picEl);
    }
  });
