const nollyEl = document.getElementById("nolly-list");

function handlelike(event) {
  if (event.target.classList.contains("btn")) {
    const nollyItem = event.target.closest("li");
    const priceElement = nollyItem.querySelector(".nolly-price");
    const countElement = nollyItem.querySelector(".count");
    let priceTag = parseInt(nollyItem.getAttribute("flix-price"));
    let likeButton = parseInt(countElement.textContent);
    //increment in place
    likeButton++;
    priceTag += 5;
    countElement.textContent = likeButton;
    priceElement.textContent = `$${priceTag}`;
    nollyItem.setAttribute("flix-likes", likeButton);
    nollyItem.setAttribute("flix-price", priceTag);
    flixSort();
  }
}

function flixSort() {
  const movies = Array.from(nollyEl.children);
  movies.sort((a, b) => {
    const likesA = parseInt(a.getAttribute("flix-likes"));
    const likesB = parseInt(b.getAttribute("flix-likes"));
    return likesB - likesA;
  });

  movies.forEach((movie) => nollyEl.appendChild(movie));
}

nollyEl.addEventListener("click", handlelike);
