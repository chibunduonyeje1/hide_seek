const projectData = [
  {
    id: 0,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box-background.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',

    },
  },

  {
    id: 1,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: '../assets/images/box25.png',
    popupData: {
      title: 'Keeping track of hundreds',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 2,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box36.png',
    popupData: {
      title: 'Keeping track of hundreds',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 3,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box-background.png',
    popupData: {
      title: 'Keeping track of hundreds',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },
  {
    id: 4,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box25.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 5,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box36.png',
    popupData: {
      title: 'Keeping track of hundreds',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './assets/images/Snapshoot Portfolio.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },
];

const windowpop = () => {
  for (let i = 0; i < projectData.length; i += 1) {
    let techData = '';

    for (let j = 0; j < projectData[i].technologies.length; j += 1) {
      techData += `<li>${projectData[i].technologies[j]}</li>`;
    }

    const workSection = document.querySelector('.worktwo');
    const card = document.createElement('div');
    card.classList.add('card');
    workSection.append(card);
    card.innerHTML = `<img src="${projectData[i].image}" alt="">
      <div class="cardComponent">
          <h2>${projectData[i].title}</h2>
          <p>${projectData[i].description}</p>
          <ul class="stacktwo">${techData}</ul>
          <button type="" class="worktwo-button" id="worktwo-button-${i}">See Project</button>
      </div>`;
  }

  const modalbox = document.querySelector('.popup-window');
  for (let k = 0; k < projectData.length; k += 1) {
    document.querySelectorAll(`[id=worktwo-button-${k}]`).forEach((e) => {
      e.addEventListener('click', () => {
        modalbox.style.display = 'flex';
      });
    });

    modalbox.innerHTML = `
    <div class="popup-content-wrapper">
      <div class="popup-head-container">
        <h2>${projectData[k].popupData.title}</h2>
        <span class="close-popup"> &#10006;</span>
      </div>
      <ul>
        <li>${projectData[k].popupData.technologies[0]}</li>
        <li>${projectData[k].popupData.technologies[1]}</li>
        <li>${projectData[k].popupData.technologies[2]}</li>
      </ul>
      <div class="popup-message-container">
        <img src="${projectData[k].popupData.popImage}" alt="">
        <div class="popup-msg-btn">
            <p>${projectData[k].popupData.description}</p>
            <div class="button-container">
                <a class="popup-linkbtn" href="${projectData[k].popupData.liveDemo}">See Live <img src="./assets/images/Icon-see live.svg" alt="" height="15px" width="auto"></a>
                <a class="popup-linkbtn" href="${projectData[k].popupData.source}">See Source <img src="./assets/images/icon githb.svg" alt="" height="15px" width="auto"></a>
            </div>
        </div>
      </div>
    </div>`;
  }

  const closeModal = document.querySelector('.close-popup');
  closeModal.addEventListener('click', () => {
    modalbox.style.display = 'none';
  });
};
windowpop();