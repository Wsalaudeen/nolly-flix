const nollyEl = document.getElementById("nolly-list");

function handleLike(event) {
  if (event.target.classList.contains("btn")) {
    const nollyItem = event.target.closest("li");
    const priceElement = nollyItem.querySelector(".nolly-price");
    const countElement = nollyItem.querySelector(".count");
    let priceTag = parseInt(nollyItem.getAttribute("flix-price"));
    let likeButton = parseInt(countElement.textContent);
    //modify in place
    // increment like count and price
    likeButton++;
    priceTag += 5;

    //update nollyItem
    //update the dom and attributes
    countElement.textContent = likeButton;
    priceElement.textContent = `$${priceTag}`;
    nollyItem.setAttribute("flix-likes", likeButton);
    nollyItem.setAttribute("flix-price", priceTag);

    //sort the list items
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

nollyEl.addEventListener("click", handleLike);
