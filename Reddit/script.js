document.addEventListener("DOMContentLoaded", function () {
  const fetchButton = document.getElementById("fetchButton");
  const subredditNameInput = document.getElementById("subredditName");
  const postContainer = document.getElementById("postContainer");

  fetchButton.addEventListener("click", function () {
    const subredditName = subredditNameInput.value;

    fetch(`https://www.reddit.com/r/${subredditName}/.json`)
      .then((response) => response.json())
      .then((data) => {
        postContainer.innerHTML = "";

        const posts = data.data.children.slice(0, 10);

        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");

          const titleElement = document.createElement("h2");
          titleElement.textContent = post.data.title;

          const imageElement = document.createElement("img");
          imageElement.src = post.data.thumbnail;

          const linkElement = document.createElement("a");
          linkElement.href = `https://www.reddit.com${post.data.permalink}`;
          linkElement.textContent = "Read More";

          postElement.appendChild(titleElement);
          postElement.appendChild(imageElement);
          postElement.appendChild(linkElement);

          postContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        postContainer.innerHTML = "Failed to fetch data. Please try again.";
      });
  });
});
