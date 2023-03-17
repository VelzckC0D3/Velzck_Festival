// DYNAMIC SPEAKERS CARD

const speakers = [
  {
    name: 'Rahul Sharma',
    role: 'Dean of Architecture and Urban Planning',
    about:
      'Leadership position in academia responsible for overseeing programs in architecture and urban planning, managing faculty and staff, and setting policies for the school or department.',
    img: 'style/speakers/0.webp',
  },
  {
    name: 'Ibrahim Unigwe',
    role: 'Director of Architecture and Planning',
    about:
      'Oversees the design and completion of architectural projects. They manage project timelines, budgets, and collaborate with architects, engineers, and other stakeholders to ensure project success.',
    img: 'style/speakers/1.webp',
  },
  {
    name: 'Oliver Turner',
    role: 'Chair of Architecture and Urban Design',
    about:
      'Responsible managing the architecture and urban design programs. They oversee curriculum development, and play a key role in setting policies and strategic direction for the department or school.',
    img: 'style/speakers/2.webp',
  },
  {
    name: 'Saeed Ahmed',
    role: 'Chief Sustainability Officer',
    about:
      'Develops and implements sustainable policies and initiatives, collaborating with clients to promote eco-friendly urban planning devnote: if you are reading this, thanks for be here.',
    img: 'style/speakers/3.webp',
  },
  {
    name: 'Elizabeth Thomas',
    role: 'Chief Design Officer and Textile Design',
    about:
      'Responsible for overseeing all aspects of design, with a focus on textile design. They lead design teams, development of design concepts, and work to ensure the vision and values.',
    img: 'style/speakers/4.webp',
  },
  {
    name: 'William Green',
    role: 'Director of Product Design and Development',
    about:
      'Leads development of new products, from concept to launch. They lead design teams, collaborate with cross-functional teams, and ensure products meet design, quality, and performance standards.',
    img: 'style/speakers/5.webp',
  },
];

console.log(speakers);

const container = document.querySelector('#speakersGrid');
let moreSpeakers = null;

speakers.forEach((p, i) => {
  const newCard = document.createElement('div');
  newCard.classList.add('speakers');
  newCard.innerHTML = `
    <div class='speakersCard' tabindex='0'>
    <div class='speakersImgCont'><div class='speakersImg'></div></div>
    <div class='speakersInfo'>
      <h2 class='name'>${p.name}</h2>
      <p class='role'>${p.role}</p>
      <p class='about'>${p.about}</p>
    </div>
  </div>
    `;
  newCard.querySelector('.speakersImg').style.backgroundImage = `url(${p.img})`;

  if (i < 2) {
    container.appendChild(newCard);
  } else {
    if (!moreSpeakers) {
      moreSpeakers = document.createElement('div');
      moreSpeakers.classList.add('moreSpeakers');
      container.appendChild(moreSpeakers);
    }
    moreSpeakers.appendChild(newCard);
  }
});

// DYNAMIC SPEAKERS CARD

// MORE BUTTON ACTION
