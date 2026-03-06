const comicsDB = {
    concordia: {
        title: "Конкордия на двоих",
        desc: "Празднование в честь провозглашения республики может обернуться трагедией. Опытный дознаватель с ... особыми силами объединяется с таинственной девушкой, чтобы узнать, кто планирует терракт и что стоит на кону.",
        color: "#ffb6c1",
        hasChoices: false,
        format: "webtoon", // Указываем формат
        episodes: [
            { id: "c_ep1", title: "Пролог", num: 1 }
        ],
        panels: 3
    },
    renpet: {
        title: "Ренпет",
        desc: "Время египетских богов давно прошло, но Ренпет, богиня времени, все еще наблюдает за миром. Когда она видит, что человечество стоит на грани саморазрушения, она возвращается в мир людей, чтобы показать, что мир в обоих его значениях - очень хрупкая штука.",
        color: "#87cefa",
        hasChoices: true,
        format: "webtoon", // Указываем формат
        episodes: [
            { id: "r_ep1", title: "Эпизод 1: Зов", num: 1 }
        ],
        panels: 4
    },
    // НОВЫЙ КОМИКС ИЗ 10 СТРАНИЦ
    static_comic: {
        title: "Случай из жизни",
        desc: "Все мы наверное боялись, что во время онлайн-конференций в самый... неудобный момент случится так, что микрофон, да еще и камера окажутся включенными? Главному герою этого комикса удалось испытать это на себе...",
        color: "#fdda0d",
        hasChoices: false,
        format: "paged", // ВАЖНО: Указываем новый формат
        episodes: [
            { id: "s_ep1", title: "Сингл", num: 1, pagesCount: 10 } // Указываем, сколько страниц
        ]
    }
};

let currentComicId = null;
let currentEpisodeId = null;
let loadedImagesCache = {};

// Переменные для постраничного режима
let currentPage = 1;
let totalPages = 0;


// Переменная для хранения таймера, чтобы мы могли его сбросить при необходимости
let uiTimeout;

// --- 2. НАВИГАЦИЯ И ТАЙМЕР ---
function navigateTo(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);

    const isReader = viewId === 'reader-view';
    document.getElementById('main-header').style.display = isReader ? 'none' : 'flex';
    document.getElementById('main-footer').style.display = isReader ? 'none' : 'block';
    
    // Логика для экрана читалки
    if (isReader) {
        const readerView = document.getElementById('reader-view');
        
        // 1. Показываем панели при входе
        readerView.classList.add('reader-ui-active');
        
        // 2. Очищаем старый таймер (если вдруг быстро перешли туда-сюда)
        clearTimeout(uiTimeout);
        
        // 3. Прячем через 1 секунду (1000 миллисекунд)
        uiTimeout = setTimeout(() => {
            readerView.classList.remove('reader-ui-active');
        }, 1000);
    }
}

// Тап по экрану (для мобильных и клика мышкой по самому комиксу)
function toggleReaderUI() {
    document.getElementById('reader-view').classList.toggle('reader-ui-active');
}

// Защита: чтобы клик по самим кнопкам тулбара не вызывал скрытие панелей
document.querySelectorAll('.reader-toolbar').forEach(toolbar => {
    toolbar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// --- ДОБАВЛЕНИЕ: ОТСЛЕЖИВАНИЕ МЫШИ (ДЛЯ ПК) ---
document.addEventListener('mousemove', (e) => {
    const readerView = document.getElementById('reader-view');
    
    // Проверяем, что мы сейчас находимся в читалке
    if (readerView.classList.contains('active')) {
        
        // Если мышь в верхних 100 пикселях экрана
        if (e.clientY < 100) {
            readerView.classList.add('reader-ui-hover-top');
        } else {
            readerView.classList.remove('reader-ui-hover-top');
        }
        
        // Если мышь в нижних 100 пикселях экрана
        if (e.clientY > window.innerHeight - 100) {
            readerView.classList.add('reader-ui-hover-bottom');
        } else {
            readerView.classList.remove('reader-ui-hover-bottom');
        }
    }
});

// --- ЛОГИКА КАРУСЕЛИ (СТРЕЛКИ И СКРОЛЛ) ---
function scrollCarousel(direction) {
    const track = document.getElementById('comic-track');
    // Скроллим ровно на ширину видимой области контейнера
    const scrollAmount = track.clientWidth; 
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function updateCarouselArrows() {
    const track = document.getElementById('comic-track');
    const btnLeft = document.getElementById('btn-scroll-left');
    const btnRight = document.getElementById('btn-scroll-right');

    if (!btnLeft || !btnRight) return;

    // Если проскроллили вправо хотя бы на 10 пикселей — показываем левую стрелку
    if (track.scrollLeft > 10) {
        btnLeft.style.opacity = '1';
        btnLeft.style.pointerEvents = 'auto';
    } else {
        btnLeft.style.opacity = '0';
        btnLeft.style.pointerEvents = 'none';
    }

    // Если дошли до самого конца (с небольшой погрешностью в 5px) — прячем правую стрелку
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        btnRight.style.opacity = '0';
        btnRight.style.pointerEvents = 'none';
    } else {
        btnRight.style.opacity = '1';
        btnRight.style.pointerEvents = 'auto';
    }
}

// Запускаем проверку при загрузке страницы, чтобы скрыть правую стрелку, 
// если у нас всего 2 комикса и скроллить некуда.
window.addEventListener('DOMContentLoaded', updateCarouselArrows);

// --- 3. ГЕНЕРАЦИЯ СТРАНИЦЫ ОПИСАНИЯ ---
function openComic(comicId) {
    currentComicId = comicId;
    const comic = comicsDB[comicId];

    // Заполняем информацию
    document.getElementById('detail-title').innerText = comic.title;
    document.getElementById('detail-desc').innerText = comic.desc;
    document.getElementById('detail-banner').style.background = comic.color;

    // Генерируем список эпизодов
    const epContainer = document.getElementById('episodes-container');
    epContainer.innerHTML = ''; // Очищаем старые

    comic.episodes.forEach(ep => {
        const row = document.createElement('div');
        row.className = 'episode-row';
        row.onclick = () => openReader(ep.id, ep.title, comic.title);
        
        row.innerHTML = `
            <div class="ep-thumb" style="background: ${comic.color}"></div>
            <span class="ep-title">${ep.title}</span>
            <span class="ep-number">#${ep.num}</span>
        `;
        epContainer.appendChild(row);
    });

    navigateTo('detail-view');
}

// --- 4. ИНИЦИАЛИЗАЦИЯ РИДЕРА ---
function openReader(epId, epTitle, comicTitle) {
    currentEpisodeId = epId; 
    const comic = comicsDB[currentComicId];
    const episode = comic.episodes.find(ep => ep.id === epId);
    
    document.getElementById('reader-title').innerText = `${comicTitle} - ${epTitle}`;
    
    // Показываем/скрываем блок выборов (только для вебтунов)
    const choiceUI = document.getElementById('choice-ui');
    choiceUI.style.display = comic.hasChoices ? 'block' : 'none';

    // Получаем наши два контейнера и счетчик
    const canvasContainer = document.getElementById('canvas-container');
    const pagedContainer = document.getElementById('paged-container');
    const pageCounter = document.getElementById('page-counter');

    // ПРОВЕРЯЕМ ФОРМАТ КОМИКСА
    if (comic.format === 'webtoon') {
        // Режим скролла
        canvasContainer.style.display = 'block';
        pagedContainer.style.display = 'none';
        pageCounter.style.display = 'none'; // Прячем счетчик
        initCanvasPanels(comic);
    } else if (comic.format === 'paged') {
        // Режим страниц
        canvasContainer.style.display = 'none';
        pagedContainer.style.display = 'flex';
        pageCounter.style.display = 'block'; // Показываем счетчик
        
        // Инициализируем страницы
        currentPage = 1;
        totalPages = episode.pagesCount;
        renderCurrentPage();
    }

    updateNavigationButtons(); 
    navigateTo('reader-view');
}

// Функция для поиска текущего индекса эпизода в массиве
function getEpisodeIndex() {
    const comic = comicsDB[currentComicId];
    return comic.episodes.findIndex(ep => ep.id === currentEpisodeId);
}


// Переход к следующему эпизоду
// --- УМНАЯ НАВИГАЦИЯ (Эпизоды + Страницы) ---

function goToNextEpisode(event) {
    if (event) event.stopPropagation(); // Чтобы меню не пряталось
    
    const comic = comicsDB[currentComicId];
    
    // Если это постраничный комикс и мы не на последней странице — листаем страницу
    if (comic.format === 'paged' && currentPage < totalPages) {
        turnPage(1, event);
        return; 
    }
    
    // Иначе (это вебтун или страницы кончились) — переключаем эпизод
    const currentIndex = getEpisodeIndex();
    if (currentIndex > 0) {
        const nextEp = comic.episodes[currentIndex - 1]; 
        openReader(nextEp.id, nextEp.title, comic.title);
    }
}

function goToPrevEpisode(event) {
    if (event) event.stopPropagation();
    
    const comic = comicsDB[currentComicId];
    
    // Если это постраничный комикс и мы не на первой странице — листаем назад
    if (comic.format === 'paged' && currentPage > 1) {
        turnPage(-1, event);
        return;
    }
    
    // Иначе — переключаем на предыдущий эпизод
    const currentIndex = getEpisodeIndex();
    if (currentIndex < comic.episodes.length - 1) {
        const prevEp = comic.episodes[currentIndex + 1]; 
        openReader(prevEp.id, prevEp.title, comic.title);
    }
}

// Обновляем текст и прозрачность кнопок
function updateNavigationButtons() {
    const comic = comicsDB[currentComicId];
    const currentIndex = getEpisodeIndex();
    const btnPrev = document.getElementById('btn-prev-ep');
    const btnNext = document.getElementById('btn-next-ep');
    
    if (comic.format === 'paged') {
        // МЕНЯЕМ ТЕКСТ КНОПОК ДЛЯ СТРАНИЦ
        btnPrev.innerText = currentPage > 1 ? '< Пред. стр.' : '< Пред. эпизод';
        btnNext.innerText = currentPage < totalPages ? 'След. стр. >' : 'След. эпизод >';
        
        // Отключаем кнопку "Пред", если это самая первая страница самого первого эпизода
        btnPrev.disabled = (currentPage === 1 && currentIndex >= comic.episodes.length - 1);
        btnPrev.style.opacity = btnPrev.disabled ? '0.5' : '1';
        
        // Отключаем кнопку "След", если это последняя страница самого нового эпизода
        btnNext.disabled = (currentPage === totalPages && currentIndex <= 0);
        btnNext.style.opacity = btnNext.disabled ? '0.5' : '1';
        
    } else {
        // МЕНЯЕМ ТЕКСТ КНОПОК ДЛЯ ВЕБТУНОВ
        btnPrev.innerText = '< Пред.';
        btnNext.innerText = 'След. >';
        
        btnPrev.disabled = (currentIndex >= comic.episodes.length - 1);
        btnPrev.style.opacity = btnPrev.disabled ? '0.5' : '1';
        
        btnNext.disabled = (currentIndex <= 0);
        btnNext.style.opacity = btnNext.disabled ? '0.5' : '1';
    }
}

// --- 5. ЛЕНИВАЯ ЗАГРУЗКА И АНИМАЦИИ (Оптимизировано) ---
let currentObserver = null;

function initCanvasPanels(comic) {
    const container = document.getElementById('canvas-container');
    container.innerHTML = ''; // Очищаем прошлый комикс
    loadedImagesCache = {}; // Сбрасываем кэш

    if (currentObserver) currentObserver.disconnect();

    const options = { root: null, threshold: [0.1, 0.7] };
    currentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const panelId = entry.target.dataset.id;
            if (entry.intersectionRatio >= 0.1 && !loadedImagesCache[panelId]) {
                preloadMockImages(panelId, comic);
            }
            if (entry.intersectionRatio >= 0.7) {
                playAnimation(entry.target, panelId);
            }
        });
    }, options);

    // Создаем панели
    for (let i = 1; i <= comic.panels; i++) {
        const canvas = document.createElement('canvas');
        canvas.className = 'comic-canvas';
        canvas.dataset.id = `panel_${i}`;
        canvas.width = 600;
        canvas.height = 800;
        container.appendChild(canvas);
        currentObserver.observe(canvas);
    }
}

// Генератор кадров (В реальном проекте здесь будет загрузка картинок с сервера/папки)
function preloadMockImages(panelId, comic) {
    loadedImagesCache[panelId] = [];
    const framesCount = 10;
    
    for (let i = 1; i <= framesCount; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 600; canvas.height = 800;
        const ctx = canvas.getContext('2d');
        
        // Рисуем фон цвета комикса
        ctx.fillStyle = comic.color;
        ctx.fillRect(0, 0, 600, 800);
        
        // Рисуем текст, чтобы было видно анимацию
        ctx.fillStyle = '#000';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${comic.title}`, 300, 300);
        ctx.fillText(`Панель ${panelId.split('_')[1]}`, 300, 400);
        ctx.fillText(`Анимация кадра: ${i}`, 300, 500 + (i * 10)); // Текст двигается

        const img = new Image();
        img.src = canvas.toDataURL();
        img.onload = () => {
            if (i === 1) {
                const targetCanvas = document.querySelector(`canvas[data-id="${panelId}"]`);
                if (targetCanvas) targetCanvas.getContext('2d').drawImage(img, 0, 0);
            }
        };
        loadedImagesCache[panelId].push(img);
    }
}

function playAnimation(canvas, panelId) {
    const images = loadedImagesCache[panelId];
    if (!images || images.length === 0 || !images[0].complete) return; 

    const ctx = canvas.getContext('2d');
    let currentFrame = 0;
    const interval = 1000 / 10; // 10 FPS
    let lastTime = Date.now();

    if (canvas.dataset.animating === "true") return;
    canvas.dataset.animating = "true";

    function animate() {
        const now = Date.now();
        const delta = now - lastTime;

        if (delta > interval) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height);
            currentFrame++;
            lastTime = now - (delta % interval);
        }

        if (currentFrame < images.length) {
            requestAnimationFrame(animate);
        } else {
            canvas.dataset.animating = "false";
        }
    }
    requestAnimationFrame(animate);
}

// Логика кнопок выбора для Ренпет
function makeChoice(choiceNum) {
    alert(`Вы выбрали вариант ${choiceNum}!`);
}

// --- ЛОГИКА ЖИВОГО ПОИСКА ---
const searchInput = document.getElementById('search-input');
const noResultsMsg = document.getElementById('no-results');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        // Получаем текст из поиска, переводим в нижний регистр и убираем пробелы по краям
        const query = this.value.toLowerCase().trim();
        
        // Находим все карточки комиксов на главной странице
        const comicCards = document.querySelectorAll('.comic-card');
        let hasResults = false;

        comicCards.forEach(card => {
            // Находим название внутри карточки
            const titleElement = card.querySelector('.comic-title');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                
                // Если название содержит текст из поиска, показываем карточку
                if (title.includes(query)) {
                    card.style.display = ''; // Возвращаем отображение по умолчанию
                    hasResults = true;
                } else {
                    card.style.display = 'none'; // Скрываем, если не совпадает
                }
            }
        });

        // Если ничего не найдено, показываем сообщение
        if (noResultsMsg) {
            noResultsMsg.style.display = hasResults ? 'none' : 'block';
        }
    });
}

// --- ЛОГИКА ПОСТРАНИЧНОГО ЧТЕНИЯ ---

function turnPage(direction, event) {
    // Останавливаем всплытие клика, чтобы тулбары не выезжали при перелистывании
    event.stopPropagation(); 
    
    const newPage = currentPage + direction;
    
    // Проверяем, не вышли ли мы за пределы страниц
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderCurrentPage();
    } else if (newPage > totalPages) {
        // Если долистали до конца и кликнули "вперед" - можно предложить след. эпизод или вернуться
        toggleReaderUI(); // Показываем меню, чтобы человек мог выйти
    }
}

function renderCurrentPage() {
    const pageCounter = document.getElementById('page-counter');
    const imageElement = document.getElementById('paged-image');
    
    // 1. Обновляем текст в верхней панели
    pageCounter.innerText = `Страница ${currentPage} / ${totalPages}`;
    
    // 2. Подгружаем реальную картинку (обрати внимание на обратные кавычки!)
    imageElement.src = `images/static_comic/${currentPage}.png`;

    // 3. ДОБАВЛЯЕМ ЭТУ СТРОКУ: Обновляем состояние кнопок снизу
    updateNavigationButtons();
}

// Генератор фейковой страницы (удалишь эту функцию, когда подключишь реальные картинки)
function generateMockPage(color, pageNum) {
    const canvas = document.createElement('canvas');
    canvas.width = 1000; canvas.height = 1500;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 100px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`СТРАНИЦА ${pageNum}`, 500, 750);
    
    return canvas.toDataURL();
}