// DYNAMIC SPEAKERS CARD

const speakers = [
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/0.webp",
  },
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/1.webp",
  },
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/2.webp",
  },
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/3.webp",
  },
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/4.webp",
  },
  {
    name: "Yohitiro Kumimura",
    role: "Dean of Architecture and Urban Planning",
    about:
      "The head of an academic department that oversees the teaching and research of architecture and urban planning, responsible for developing curriculum, managing faculty, and promoting the programs reputation.",
    img: "style/speakers/5.webp",
  },
];

console.log(speakers);

const container = document.querySelector("#speakersCont");

speakers.forEach((p, i) => {
  const newCard = document.createElement("div");
  newCard.classList.add("speakers");
  newCard.innerHTML = `
    <div class="speakersCard">
    <div class="speakersImgCont"><div class="speakersImg"></div></div>
    <div class="speakersInfo">
      <h2 class="name">${p.name}</h2>
      <p class="role">${p.role}</p>
      <p class="about">${p.about}</p>
    </div>
  </div>
    `;
  newCard.querySelector(".speakersImg").style.backgroundImage = `url(${p.img})`;
  container.appendChild(newCard);
});

// DYNAMIC SPEAKERS CARD