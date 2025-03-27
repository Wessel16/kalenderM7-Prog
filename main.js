fetch('data.json')
    .then(response => response.json())
    .then(posts => {
        const postContainer = document.getElementById("post-container");
        posts.forEach(post => {
            postContainer.appendChild(createPost(post));
        });
    });

function createPost(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post-container");
    postElement.innerHTML = `
        <div class="post-header">
            <img src="https://freelogopng.com/images/all_img/1658834095reddit-logo-png.png" alt="Reddit Logo">
            <span>${post.subreddit} • ${post.time}</span>
        </div>
        <div class="post-title">${post.title}</div>
        <img class="post-image" src="${post.image}" alt="Reddit Post Image">
        <div class="post-footer">
            <span>👍 ${post.likes}</span>
            <span>💬 ${post.comments}</span>
            <span>🏆 ${post.awards}</span>
            <span>🔗 Delen</span>
        </div>
    `;
    return postElement;
}

function fetchMorePosts() {
    fetch('data.json')
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById("post-container");
            posts.forEach(post => {
                postContainer.appendChild(createPost(post));
            });
        });
}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchMorePosts();
    }
});

