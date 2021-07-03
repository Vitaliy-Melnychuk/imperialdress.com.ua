const categories = {
    wedding: [
        {name: 's2021_001', data: 'id="s2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2021'},
        {name: 's2020_001', data: 'id="s2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_001', data: 'id="s2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2020'},
    ],
    evening: [
        {name: 'v2021_001', data: 'id="v2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
    ],
    children: [
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    accessories: [
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    about: [
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    shares: [
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', descriptionDate: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', descriptionDate: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    s2021: [
        {name: 's2021_001', data: 'id="s2021_001"', description: '150$', folder: 's2021'},
        {name: 's2021_002', data: 'id="s2021_002"', description: '160$', folder: 's2021'},
        {name: 's2021_003', data: 'id="s2021_003"', description: '170$', folder: 's2021'},
        {name: 's2021_004', data: 'id="s2021_004"', description: '180$', folder: 's2021'},
        {name: 's2021_005', data: 'id="s2021_005"', description: '180$', folder: 's2021'},
    ],
    v2021: [
        {name: 'v2021_001', data: 'id="v2021_001"', description: '150$', folder: 'v2021'},
        {name: 'v2021_002', data: 'id="v2021_002"', description: '160$', folder: 'v2021'},
        {name: 'v2021_003', data: 'id="v2021_003"', description: '170$', folder: 'v2021'},
        {name: 'v2021_004', data: 'id="v2021_004"', description: '180$', folder: 'v2021'},
        {name: 'v2021_005', data: 'id="v2021_005"', description: '180$', folder: 'v2021'},
    ],
    s2020: [
        {name: 's2020_001', data: 'id="s2020_001"', description: '150$', folder: 's2020'},
        {name: 's2020_002', data: 'id="s2020_002"', description: '160$', folder: 's2020'},
        {name: 's2020_003', data: 'id="s2020_003"', description: '170$', folder: 's2020'},
        {name: 's2020_004', data: 'id="s2020_004"', description: '180$', folder: 's2020'},
        {name: 's2020_005', data: 'id="s2020_005"', description: '180$', folder: 's2020'},
    ],
    v2020: [
        {name: 'v2020_001', data: 'id="v2020_001"', description: '150$', folder: 'v2020'},
        {name: 'v2020_002', data: 'id="v2020_002"', description: '160$', folder: 'v2020'},
        {name: 'v2020_003', data: 'id="v2020_003"', description: '170$', folder: 'v2020'},
        {name: 'v2020_004', data: 'id="v2020_004"', description: '180$', folder: 'v2020'},
        {name: 'v2020_005', data: 'id="v2020_005"', description: '180$', folder: 'v2020'},
    ],
};

const bodyEl = document.querySelector('body');
const catalogEl = document.querySelector('.catalog__list');
bodyEl.addEventListener('click', directoryActivation);

function directoryActivation (evt) {
    const isCollectionEl = evt.target.classList.contains('active-element');
    if (!isCollectionEl) {
        return;
    }
    let nameArray = evt.target.dataset.id;
    for (const category in categories) {
        if (category === nameArray) {
            createDirectory(categories[category]);
        }
    }
}
function createDirectory (models) {
    const liEl = models.map( models => {
        return `
                <li class="catalog__item">
                    <div class="catalog__wrapper-img">
                        <a class="catalog__link">
                            <img 
                            class="catalog__img active-element" 
                            src="./images/${models.folder}/${models.name}.jpg" 
                            alt="photo"
                            data-${models.data}
                            />
                        </a>
                    </div>
                    <div class="catalog__description-wrapper">
                        <p>${models.descriptionDate}</p>
                        <div class="catalog__description-border">
                            <div class="catalog__description catalog__active">
                                ${models.descriptionStyle}
                            </div>
                        </div>
                    </div>
                </li>
              `;
    }).join('');
    catalogEl.innerHTML = liEl;
    checkActivityBackdropMenu();
}

const burgerMenuEl = document.querySelector('.header__wrapper-menu');
const closeMenuEl = document.querySelector('.backdrop-menu__wrapper');
const backdropMenuEl = document.querySelector('.backdrop-menu');
burgerMenuEl.addEventListener('click', isActiveMenu);
closeMenuEl.addEventListener('click', isActiveMenu);

function isActiveMenu () {
    backdropMenuEl.classList.toggle('is-active');
}

function checkActivityBackdropMenu () {
    backdropMenuEl.classList.remove('is-active');
}