const categories = {
    mainGallery: [
        {name: 's2021_001', data: 'id="s2021_001"', description: '150$', descriptionStyle: 's2021_001', folder: 's2021'},
        {name: 's2021_002', data: 'id="s2021_002"', description: '160$', descriptionStyle: 's2021_002', folder: 's2021'},
        {name: 's2021_007', data: 'id="s2021_007"', description: '170$', descriptionStyle: 's2021_007', folder: 's2021'},
        {name: 's2021_004', data: 'id="s2021_004"', description: '180$', descriptionStyle: 's2021_004', folder: 's2021'},
        {name: 's2021_005', data: 'id="s2021_005"', description: '180$', descriptionStyle: 's2021_005', folder: 's2021'},
        {name: 's2021_006', data: 'id="s2021_006"', description: '180$', descriptionStyle: 's2021_006', folder: 's2021'},
        {name: 'v2021_001', data: 'id="v2021_001"', description: '150$', descriptionStyle: 'v2021_001', folder: 'v2021'},
        {name: 'v2021_002', data: 'id="v2021_002"', description: '160$', descriptionStyle: 'v2021_002', folder: 'v2021'},
        {name: 'v2021_007', data: 'id="v2021_007"', description: '170$', descriptionStyle: 'v2021_007', folder: 'v2021'},
        {name: 'v2021_004', data: 'id="v2021_004"', description: '180$', descriptionStyle: 'v2021_004', folder: 'v2021'},
        {name: 'v2021_005', data: 'id="v2021_005"', description: '180$', descriptionStyle: 'v2021_005', folder: 'v2021'},
        {name: 'v2021_006', data: 'id="v2021_006"', description: '180$', descriptionStyle: 'v2021_006', folder: 'v2021'},
    ],
    wedding: [
        {name: 's2021_001', data: 'id="s2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2021'},
        {name: 's2020_001', data: 'id="s2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_001', data: 'id="s2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2020'},
    ],
    evening: [
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
    ],
    children: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    accessories: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    about: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    shares: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    s2021: [
        {name: 's2021_001', data: 'id="s2021_001"', description: '150$', descriptionStyle: 's2021_001', folder: 's2021'},
        {name: 's2021_002', data: 'id="s2021_002"', description: '160$', descriptionStyle: 's2021_002', folder: 's2021'},
        {name: 's2021_003', data: 'id="s2021_003"', description: '170$', descriptionStyle: 's2021_003', folder: 's2021'},
        {name: 's2021_004', data: 'id="s2021_004"', description: '180$', descriptionStyle: 's2021_004', folder: 's2021'},
        {name: 's2021_005', data: 'id="s2021_005"', description: '180$', descriptionStyle: 's2021_005', folder: 's2021'},
        {name: 's2021_006', data: 'id="s2021_006"', description: '180$', descriptionStyle: 's2021_006', folder: 's2021'},
    ],
    v2021: [
        {name: 'v2021_001', data: 'id="v2021_001"', description: '150$', descriptionStyle: 'v2021_001', folder: 'v2021'},
        {name: 'v2021_002', data: 'id="v2021_002"', description: '160$', descriptionStyle: 'v2021_002', folder: 'v2021'},
        {name: 'v2021_007', data: 'id="v2021_007"', description: '170$', descriptionStyle: 'v2021_007', folder: 'v2021'},
        {name: 'v2021_004', data: 'id="v2021_004"', description: '180$', descriptionStyle: 'v2021_004', folder: 'v2021'},
        {name: 'v2021_005', data: 'id="v2021_005"', description: '180$', descriptionStyle: 'v2021_005', folder: 'v2021'},
        {name: 'v2021_006', data: 'id="v2021_006"', description: '180$', descriptionStyle: 'v2021_006', folder: 'v2021'},
    ],
    s2020: [
        {name: 's2020_001', data: 'id="s2020_001"', description: '150$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_002', data: 'id="s2020_002"', description: '160$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_003', data: 'id="s2020_003"', description: '170$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_004', data: 'id="s2020_004"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_005', data: 'id="s2020_005"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
    ],
    v2020: [
        {name: 'v2020_001', data: 'id="v2020_001"', description: '150$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_002', data: 'id="v2020_002"', description: '160$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_003', data: 'id="v2020_003"', description: '170$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_004', data: 'id="v2020_004"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_005', data: 'id="v2020_005"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
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
                        <p>${models.description}</p>
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
function createMainGallery () {
    const liEl = categories.mainGallery.map(objectGallery => {
        return `
            <li class="main-gallery__item">
                <div class="main-gallery__wrapper-img">
                    <a class="main-gallery__link">
                        <img 
                            class="main-gallery__img active-element" 
                            src="./images/${objectGallery.folder}/${objectGallery.name}.jpg" 
                            alt="photo"
                            data-${objectGallery.data}
                        />
                    </a>
                </div>
            </li>
        `;
    }).join('');
    catalogEl.innerHTML = liEl;
    setMainGalleryEl();
}
let iq = 0;
let ia = 0;
function setMainGalleryEl () {
    if ( iq >= 1) {ia = iq;}
    iq++;
    const mainGalleryEl = document.querySelectorAll('.main-gallery__item');
    const arrayMainGalleryEl = [...mainGalleryEl];
    const lengthEl = arrayMainGalleryEl.length;
    checkLengthEl(ia, arrayMainGalleryEl, lengthEl);
}
function checkLengthEl (is, arrayCheckEl, lengthEl) {
    if (is < lengthEl) {
        arrayCheckEl.map(arrayEl => arrayEl.classList.remove('absolute-opacity'));
        arrayCheckEl[is].classList.add('absolute-opacity');
        setTimeout(setMainGalleryEl, 2000);
    } else {
        arrayCheckEl[is-1].classList.add('absolute-opacity');
    }
}

createMainGallery();

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

const searchEl = document.querySelector('.header__wrapper-loupe');
searchEl.addEventListener('click', createSearch);
function createSearch () {
    catalogEl.innerHTML = `
        <div class="search">
            <div class="search__wrapper">
                <input class="search__input" type="text" autofocus placeholder="Введите код модели"/>
                <button class="search__btn">Найти</button>
            </div>
            <div>
                <ul class="search__result"></ul>
            </div>
        </div>
    `;
}

catalogEl.addEventListener('click', getPhotoNumber);
function getPhotoNumber (evt) {
    const isEl = evt.target.classList.contains('search__btn');
    if (!isEl) {
        return;
    }
    const searchResultEl = document.querySelector('.search__result');
    const inputValueEl = document.querySelector('.search__input');
    const inpValue = inputValueEl.value;
    let categoryArray = inpValue[0]+inpValue[1]+inpValue[2]+inpValue[3]+inpValue[4];
    for (let category in categories) {
        if (category === categoryArray) {
            let categoryArray = categories[category];
            createPhotoDescription(categoryArray, inpValue);
        }
    }
}
function createPhotoDescription (categoryArray, inpValue) {
    const searchResultEl = document.querySelector('.search__result');
    const resultEl = categoryArray.map(createElement => {
        if (createElement.name === inpValue) {
            return `
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <a class="catalog__link">
                            <img 
                            class="catalog__img" 
                            src="./images/${createElement.folder}/${createElement.name}.jpg" 
                            alt="photo"
                            data-${createElement.data}
                            />
                        </a>
                    </div>
                </li>
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <p class="full-description__text">Номер модели - ${createElement.name}</p>
                        <p class="full-description__text">Из колекции - ${createElement.folder}</p>
                        <p class="full-description__text">Цена - ${createElement.description}</p> 
                    </div>
                </li>
            `;
        }
    }).join(''); 
    searchResultEl.innerHTML = resultEl;
}