const inputField = document.getElementById("input-search");
const songList = document.getElementById("song-list");
const loader = document.getElementsByClassName("loader")[0];

inputField.addEventListener("input", () => {
  const searchTerm = inputField.value;

  if (searchTerm.length === 0) {
    loader.style.display = "";
  } else {
    loader.style.display = "none";
  }

  fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song&country=hr`
  )
    .then((response) => response.json())
    .then(function (data) {
      const songs = data.results;
      songList.innerHTML = "";

      songs.forEach((song) => {
        const li = document.createElement("li");
        li.innerHTML = song.trackName;
        songList.appendChild(li);
      });
    });
});
