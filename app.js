const comicsDB = {
    concordia: {
        title: "Конкордия на двоих",
        desc: "Празднование в честь провозглашения республики может обернуться трагедией. Опытный дознаватель с ... особыми силами объединяется с таинственной девушкой, чтобы узнать, кто планирует терракт и что стоит на кону.",
        color: "#ffb6c1",
        banner: "assets/concordia_banner.png",
        hasChoices: false,
        genre: "Романтика",
        format: "webtoon", 
        episodes: [
            { id: "concordia_ep1", 
                title: "Пролог", 
                num: 1, 
                thumb: "assets/concordia/thumbs/ep1_thumb.png",
                content: [
                    { type: "images", start: 1, end: 4 },
                    { type: "scroll-anim", folder: "assets/concordia/concordia_ep1/scroll_scene_1", frames: 18 },
                    { type: "images", start: 5, end: 5 },
                    { type: "scroll-anim", folder: "assets/concordia/concordia_ep1/scroll_scene_2", frames: 16 },
                    { type: "images", start: 6, end: 6 },
                    { type: "scroll-anim", folder: "assets/concordia/concordia_ep1/scroll_scene_3", frames: 22 },
                    { type: "images", start: 7, end: 7 },
                    
                ],
            },
        ],
        panels: 3
    },
    lifecase: {
        title: "Случай из жизни",
        desc: "Все мы наверное боялись, что во время онлайн-конференций в самый... неудобный момент случится так, что микрофон, да еще и камера окажутся включенными? Главному герою этого комикса удалось испытать это на себе...",
        color: "#fdda0d",
        banner: "assets/lifecase_banner.png",
        hasChoices: false,
        genre: "Повседневность, Комедия",
        format: "paged", 
        narrativeTheme: "theme-yellow",
        episodes: [
            { id: "lifecase_ep1", 
                title: "Сингл", 
                num: 1, 
                pagesCount: 11 ,
                    thumb: "assets/lifecase/thumbs/ep1_thumb.png"
            } 
        ] 

    },

    mecha_souls: {
        title: "Механизмы души",
        desc: "В нашем мире, где каждая душа функционирует как часть сложного механизма, существует мастерская, полная чудес и тайн. Здесь работает Часовщик— мудрый творец, который создает и настраивает душу каждого человека, как уникальный часовой механизм. 'Механизмы души' — это история о важности каждой жизни в сложной симфонии существования.",
        color: "#0e263dff",
        banner: "assets/mecha_souls_banner.png",
        hasChoices: false,
        genre: "Философия",
        format: "paged", 
        episodes: [
            { id: "mecha_souls_ep1", title: "Сингл", num: 1, pagesCount: 7, thumb: "assets/mecha_souls/thumbs/ep1_thumb.png" } // Указываем, сколько страниц
        ]
    },

    nightmares: {
        title: "Ночной кошмар",
        desc: "Каждую ночь ты просыпаешься от одного и того же кошмара. Надежда на избавление - в странной брошюре и собрании, на которое ты решаешься пойти. Загадочный ведущий и четыре леденящих душу кошмара. Сможешь ли ты продержаться до конца?",
        color: "#62171cff",
        banner: "assets/nightmares_banner.png",
        hasChoices: false,
        genre: "Ужасы",
        format: "paged", 
        narrativeTheme: "theme-dark",
        episodes: [
        { 
            id: "nightmares_ep1", 
            title: "Глава 1: Приход", 
            num: 1, 
            pagesCount: 10,
            thumb: "assets/nightmares/thumbs/ep1_thumb.png",
            narratives: {
                2: [
                    { text: "После переезда я каждую ночь <br>просыпаюсь в холодном поту", top: "20%", left: "15%", theme: "narrative-text",},
                    { text: "Видеть один и тот же кошмар", top: "75%", left: "55%", theme: "narrative-text",},
                    { text: "НЕВЫНОСИМО", top: "85%", left: "70%", effect: "jitter" }
                ],
                3: [
                    { text: "В одну из таких ночей", top: "10%", left: "15%", theme: "narrative-text",},
                    { text: "Мне просунули брошюру по дверь", top: "55%", left: "35%", theme: "narrative-text"},
                    { text: "Похоже кому-то надоели мои вопли по ночам", top: "65%", left: "40%", theme: "narrative-text" },
                ],
                4: [
                    { text: "Звучит как откровенный бред", top: "55%", left: "60%", theme: "narrative-text", },
                    
                ],
                5: [
                    { text: "Но за неимением других вариантов, <br>я решился на встречу", top: "25%", left: "55%", theme: "narrative-text", },
                ],
                
                6: [
                    { text: "Без лишних объяснений я сел на свободный стул", top: "70%", left: "20%", theme: "narrative-text", },
                    { text: "Я знал, что пришел именно туда", top: "80%", left: "38%", theme: "narrative-text", },
                    { text: "Присаживайся. Мы уже начинаем", top: "15%", left: "40%", theme: "bubble-text-left" },
                ],

                7: [
                    { text: "Меня зовут Бату и я знаю,<br> как вам помочь", top: "40%", left: "50%", theme: "bubble-text-right" },
                    { text: "Раз вы пришли сюда, вы нуждаетесь <br>в человеке, который послушал бы вас", top: "55%", left: "35%", theme: "bubble-middle-right" }
                ],

                8: [
                    { text: "Я помогу вам с трактовкой сна <br>и дам совет", theme: "bubble-text-right", top: "40%", left: "50%", effect: "static" },
                    { text: "Кто начнет?", top: "60%", left: "55%", theme: "bubble-middle-right", effect: "static" },
                ],

                9: [
                    { text: "Можно я?", top: "25%", left: "15%", theme: "bubble-text-left" },
                ],
                10: [
                    { text: "И так начинается рассказ Авы...", top: "84%", left: "65%", theme: "narrative-text", effect: "jitter" },  
                    { text: "Меня зовут Ава и мой кошмар<br> беспокоит меня каждый день...", top: "15%", left: "35%", theme: "bubble-text-left" },
                ]
            },
            videoPages: {
                2: { loop: true }, 
                3: { loop: false },  
                5: { loop: false }, 
                
            },
            sounds: {
                3: { url: "/assets/nightmares/sounds/paper.mp3", loop: false },
                

            }
        },
        {
            id: "nightmares_ep2", 
            title: "Глава 2: Сон Авы", 
            num: 2, 
            pagesCount: 13,
            thumb: "assets/nightmares/thumbs/ep2_thumb.png",
            narratives: {
            2: [
                { text: "Это был подъезд нашего старого дома", top: "15%", left: "15%", effect: "static"}, 
                { text: "Я шла домой ", top: "75%", left: "65%", effect: "static" } 
            ],

            3: [
                { text: "Но в какой-то момент я поняла, <br> что иду и не вверх, и не вниз ", top: "25%", left: "55%", effect: "static" }
            ],
            4: [
                { text: "Лестница была зациклена. <br> Это не передать словами", top: "15%", left: "10%", effect: "jitter" }
            ],
            5: [
                { text: "Я бежала вверх и вниз  <br> и оставалась на месте. ", top: "18%", left: "10%", effect: "jitter" },
            ],

            6: [
                { text: "Меня охватило отчаяние", top: "45%", left: "50%", effect: "jitter" }
            ],

            7: [
                { text: "И тут я увидела перед собой щель между лестницами ", top: "40%", left: "20%", effect: "jitter" }
            ],

            8: [
                { text: "И ШАГНУЛА", top: "40%", left: "40%", effect: "jitter" }
            ],

            9: [
                { text: "И я падала вниз", top: "10%", left: "15%", effect: "static" },
                { text: "БЕСКОНЕЧНО", top: "80%", left: "75%", effect: "jitter" }
            ],
            10: [
                { text: "Ава закрыла лицо руками. Казалось, никакие слова поддержки не помогут", top: "15%", left: "45%", theme: "narrative-text", effect: "static" },  
                { text: "Но вдруг заговорил Бату", top: "80%", left: "65%", theme: "narrative-text", effect: "jitter" },
            ],
            11: [  
                { text: "Ава, тебе не стоит держаться за прошлое. <br>Прежнюю себя уже не вернуть", top: "40%", left: "35%", theme: "bubble-middle-right" },
                { text: "Прими свое взросление", top: "55%", left: "45%", theme: "bubble-middle-right" },
                
            ],
            12: [  
                { text: "Я ... поняла", top: "25%", left: "30%", theme: "bubble-middle-left" },
                { text: "Я клянусь, что увидел у нее в глазах проблеск надежды. <br>Может это она и хотела услышать", top: "75%", left: "40%", theme: "narrative-text", effect: "static" },
            ],
            13: [  
                { text: "Никто не против, если я буду следующей?", top: "35%", left: "40%", theme: "bubble-top-middle" },
                { text: "Я Аня. Мне 23. И я хотела бы рассказать свой кошмар", top: "48%", left: "35%", theme: "bubble-top-middle", effect: "static" },
                { text: "И так начинается рассказ Ани...", top: "84%", left: "65%", theme: "narrative-text", effect: "jitter" }, 
            ]
            },
        videoPages: {
            2: { loop: true },
        9: { loop: true }  },
        

        sounds: {
           2: { url: "/assets/nightmares/sounds/childhood.mp3", loop: false },
           6: { url: "/assets/nightmares/sounds/tense.mp3", loop: false },
        
        }
        
    },
    {
        id: "nightmares_ep3", 
        title: "Глава 3: Сон Ани", 
        num: 3, 
        pagesCount: 17,
        thumb: "assets/nightmares/thumbs/ep3_thumb.png",
        narratives: {
            2: [
                { text: "У меня есть младший брат Роб", top: "15%", left: "15%", effect: "static"}, 
                { text: "В моем сне он и я были младше", top: "65%", left: "45%", effect: "static"}, 
            ],

            3: [
                { text: "Мы стояли у входа в пещеру", top: "25%", left: "15%", effect: "static"}, 
                { text: "Нам нужно было внутрь", top: "75%", left: "55%", effect: "static"}, 
            ],

            4: [
                { text: "Мы вошли в пещеру. Я не отпускала<br> руку брата ни на секунду", top: "15%", left: "3%", effect: "static"}, 
                { text: "Внутри было очень красиво", top: "65%", left: "65%", effect: "static"}, 
            ],

            5: [
                { text: "Я ходила по первому залу пещеры", top: "15%", left: "15%", effect: "static"}, 
                { text: "Пока не поняла, что брата рядом не было", top: "65%", left: "55%", effect: "static"}, 
                { text: "Роб убежал", top: "80%", left: "75%", effect: "static"}, 
            ],

            6: [
                { text: "Я увидела его убегающим куда-то в темный угол пещеры", top: "15%", left: "15%", effect: "static"}, 
                { text: "ВОТ ЗАРАЗА! Я ВСЕ МАМЕ РАССКАЖУ!", top: "70%", left: "45%", effect: "static",  theme: "bubble-bottom-middle"}, 
            ],

            7: [
                { text: "Я побежала за ним по извилистым коридорам пещеры", top: "10%", left: "15%", effect: "static"}, 
                { text: "Пока не поняла, что бежать в такой узкой пещере уже не могу", top: "75%", left: "35%", effect: "static"}, 
            ],

            8: [
                { text: "Дальше я поползла на четвереньках", top: "25%", left: "5%", effect: "static"}, 
                { text: "Я кричала брату вслед и тут увидела его впереди", top: "65%", left: "25%", effect: "static"}, 
            ],

            9: [
                { text: "Я увидела его скорчившееся от злобы лицо, когда он сказал мне", top: "15%", left: "15%", effect: "static"}, 
                { text: "Проваливай, Аня", top: "65%", left: "15%", effect: "static", theme: "bubble-middle-right"}, 
            ],

            10: [
                { text: "Я опешила. Мне стало так больно. Почему он мне так сказал?", top: "10%", left: "10%", effect: "static"}, 
                { text: "Но поняла я только одно. Что я наглухо застряла в лазу", top: "65%", left: "35%", effect: "static"}, 
            ],

            11: [
                { text: "Я звала брата на помощь", top: "15%", left: "45%", effect: "static"}, 
                { text: "Но все было тщетно", top: "65%", left: "65%", effect: "static"}, 
            ],

            12: [
                { text: "И сон заканчивается всегда одинаково", top: "10%", left: "15%", effect: "static"}, 
                { text: "Стены начинают сжиматься", top: "35%", left: "55%", effect: "jitter"}, 
                { text: "Пока от меня не остается НИЧЕГО", top: "60%", left: "50%", effect: "jitter"}, 
            ],

            13: [
                { text: "Аня, твой брат уже не ребенок. <br>И опекать его как прежде бесмысленно", top: "40%", left: "40%", theme: "bubble-middle-right" },
                { text: "Тебе стоит поговорить с ним по душам", top: "55%", left: "40%", theme: "bubble-middle-right" },
            ],

            14: [  
                { text: "Где-то подсознательно я понимала это<br>Тяжело осознать что-то, не проговорив вслух", top: "35%", left: "40%", theme: "bubble-top-middle" },
                { text: "Спасибо вам", top: "50%", left: "52%", theme: "bubble-top-middle" },
            ],

            15: [  
                { text: "Не будешь ли ты против, <br>если я расскажу следующим?", top: "35%", left: "15%", theme: "bubble-top-middle" },
            
                ],

            16: [  
                { text: "Нет, рассказывай. Все в порядке", top: "60%", left: "35%", theme: "bubble-bottom-middle" },
            
            ],
            17: [  
                { text: "Спасибо. Меня зовут Алекс и я расскажу вам свой...", top: "35%", left: "10%", theme: "bubble-top-middle" },
                { text: "технически не совсем кошмар", top: "45%", left: "20%", theme: "bubble-top-middle" },
                { text: "И так начинается рассказ Алекса...", top: "84%", left: "55%", theme: "narrative-text", effect: "jitter" },
            ]

        },
        
        videoPages: {
            4: { loop: true },
            9: { loop: false },
            12: { loop: false },
            14: { loop: false },  
        
        },
        

        sounds: {
           4: { url: "/assets/nightmares/sounds/drop.mp3", loop: true },
           6: { url: "/assets/nightmares/sounds/giggle.mp3", loop: false },
              9: { url: "/assets/nightmares/sounds/reveal.mp3", loop: false },
        
    },},
    {
            id: "nightmares_ep4", 
            title: "Глава 4: Сон Алекса", 
            num: 4, 
            pagesCount: 9,
            mainPathEnd: 8,
            thumb: "assets/nightmares/thumbs/ep4_thumb.png",
            narratives: {
            2: [
                { text: "Во сне я", top: "15%", left: "15%", effect: "static"}, 
                { text: "камень", top: "75%", left: "70%", effect: "static" } 
            ],

            3: [
                { text: "Как и сотни других камней я качусь по склону", top: "15%", left: "15%", effect: "static"}, 
                { text: "Кто-то быстрее, <br>кто-то медленнее", top: "75%", left: "70%", effect: "static" }
            ],

            4: [
                { text: "Все камни знают, что в конце <br>пути наступит блаженный покой", top: "10%", left: "3%", effect: "static"}, 
                { text: "И вот...", top: "75%", left: "65%", effect: "static"}, 
            ],

            5: [
                { text: "Дверь, ведущая в  <br>манящую неизвестность", top: "10%", left: "4%", effect: "static"}, 
                { text: "Но сколько бы я не пытался, <br>допрыгнуть до нее я не могу", top: "75%", left: "65%", effect: "static"}, 
            ],



            6: [
                { text: "Интересно", top: "30%", left: "70%", theme: "bubble-text-right"}, 
                { text: "А если бы ты был больше, то смог бы допрыгнуть?", top: "45%", left: "30%", theme: "bubble-middle-right"}, 
                { text: "Наверное да", top: "60%", left: "25%", theme: "bubble-top-middle" }, 
            ],

            7: [
                { text: "Тогда я могу посоветовать тебе расти в личном плане", top: "45%", left: "30%", theme: "bubble-middle-right"}, 
                { text: "Или отдохнуть от работы", top: "55%", left: "55%", theme: "bubble-middle-right"},
            ],

            8: [
                { text: "Ну что, твой черед?", top: "45%", left: "60%", theme: "bubble-middle-right"}, 
                { text: "Ээээ. Пожалуй нет", top: "65%", left: "25%", effect: "jitter", isChoice: true, action: "ending_coward" },
                { text: "Хорошо", top: "65%", left: "65%", effect: "jitter", isChoice: true, action: "unlock_ep5" }
            ],

            9: [
                { text: "Побег от ответов", top: "15%", left: "15%", effect: "static"}, 
            ],
       }, 

        videoPages: {
            2: { loop: false },
            5: { loop: false },
        },
        

        sounds: {}

        
    },

    {
            id: "nightmares_ep5", 
            title: "Глава 5: Твой сон", 
            num: 5, 
            pagesCount: 20,
            thumb: "assets/nightmares/thumbs/ep5_thumb.png",
            locked: true,
            mainPathEnd: 2,
            narratives: {
            2: [
                { text: "Во сне передо мной развилка", top: "15%", left: "32%", effect: "static"},
                { text: "Родительский дом", top: "55%", left: "15%", effect: "jitter", isChoice: true, action: "ep5_branch_A" },
                { text: "И невероятный дом будущего", top: "55%", left: "55%", effect: "jitter", isChoice: true, action: "ep5_branch_B" }             
            ],

            3: [
                { text: "Дома все застыло во времени", top: "15%", left: "15%", effect: "static"},
                { text: "Но меня интересует", top: "25%", left: "25%", effect: "static"}, 
                { text: "Кладовая", top: "45%", left: "50%", effect: "jitter", isChoice: true, action: "ending_1" },
                { text: "Где родные", top: "65%", left: "15%", effect: "jitter", isChoice: true, action: "ending_2" },
            ],

            4: [
                { text: "В кладовой стояли клетки", top: "20%", left: "15%", effect: "jitter"},
                { text: "В которых сидели мои игрушки", top: "75%", left: "45%", effect: "static"},
            ],

            5: [
                { text: "Я освобождаю их из клеток", top: "32%", left: "35%", effect: "static"},
                
            ],

            6: [
                { text: "Их так много, что <br>они сбиваются в большую кучу", top: "5%", left: "5%", effect: "static"},
                { text: "И формируют нечто", top: "75%", left: "70%", effect: "jitter"},
            ],
            
            7: [
                { text: "Теперь меня запирают в клетке", top: "15%", left: "15%", effect: "static"},
                { text: "И бесформенная масса игрушек закрывает за собой дверь", top: "70%", left: "55%", effect: "static"},
            ],

            8: [
                { text: "Твои детские мечты заперты далеко в прошлом", top: "35%", left: "28%", theme: "bubble-middle-right"},
                { text: "Но именно они давали надежду на будущее", top: "45%", left: "30%", theme: "bubble-middle-right"},
                { text: "Не заточай своего внутреннего ребенка", top: "55%", left: "32%", theme: "bubble-middle-right"},
                { text: "Хорошо", top: "80%", left: "45%", effect: "jitter", isChoice: true, action: "open_epilogue" }
            ],

            9: [
                { text: "Я захожу в спальню", top: "15%", left: "2%", effect: "static"},
                { text: "Родители сидят молча на разделенных кроватях", top: "45%", left: "15%", effect: "jitter"},
                { text: "Из ванной доносится плеск воды", top: "70%", left: "60%", effect: "static" }, 
            ],

            10: [
                { text: "В наполненной ванне сидит дедушка", top: "5%", left: "5%", effect: "static"},
                { text: "Он словно ударился в детство и играет с паровозиком", top: "75%", left: "65%", effect: "jitter"}, 
            ],

            11: [
                { text: "Мимо пробегают сестра с братом <br>и выкрикивают гадкие слова", top: "5%", left: "5%", effect: "static"},
                { text: "Все мои страхи насчет близких стали реальностью", top: "75%", left: "35%", effect: "jitter"},
            ],

            12: [
                { text: "Наши страхи не есть реальность", top: "45%", left: "40%", theme: "bubble-middle-right"},
                { text: "Прими их и чаще навещай родных", top: "55%", left: "40%", theme: "bubble-middle-right"},
                { text: "Хорошо", top: "80%", left: "45%", effect: "jitter", isChoice: true, action: "open_epilogue" }
            ],

            13: [
                { text: "В доме будущего все было стерильно и идеально", top: "15%", left: "5%", effect: "static"},
                { text: "Мой интерес привлекает", top: "25%", left: "8%", effect: "static"}, 
                { text: "Вид из окна", top: "45%", left: "3%", effect: "jitter", isChoice: true, action: "ending_3" },
                { text: "Кто-то за столом", top: "45%", left: "65%", effect: "jitter", isChoice: true, action: "ending_4" },
            ],

            14: [
                { text: "За окном я вижу бескрайнюю пустошь", top: "10%", left: "5%", effect: "static"},
                { text: "Никаких признаков жизни вокруг", top: "65%", left: "65%", effect: "static"},
            ],

            15: [
                { text: "И чувство одиночества разрывает меня изнутри", top: "75%", left: "25%", effect: "jitter"},
            ],

            16: [
                { text: "На пути достижения цели мы иногда забываем о том,", top: "35%", left: "25%", theme: "bubble-middle-right"},
                { text: "Что не следует ограждать себя от окружающего мира", top: "45%", left: "25%", theme: "bubble-middle-right"},
                { text: "Хорошо", top: "80%", left: "45%", effect: "jitter", isChoice: true, action: "open_epilogue" }
            ],

            17: [
                { text: "На стене висели дипломы, а на столе -<br> доказательства завершенных проектов ", top: "5%", left: "15%", effect: "static"},
                { text: "Тот, кто сидел на стуле - был очень успешен", top: "75%", left: "65%", effect: "static"},
            ],
            
            18: [
                { text: "Стул развернулся и передо мной сидел робот", top: "5%", left: "5%", effect: "static"},
                { text: "Он был заменой мне, моя лучшая версия", top: "15%", left: "65%", effect: "static"},
                { text: "А значит мне здесь не было места", top: "75%", left: "65%", effect: "jitter"},
            ],

            19: [
                
                { text: "Тело стало легким и прозрачным", top: "10%", left: "5%", effect: "static"},
                { text: "Я становлюсь ничем", top: "75%", left: "65%", effect: "jitter"},
            ],

            20: [
                { text: "Твой результат не есть ты", top: "35%", left: "45%", theme: "bubble-middle-right"},
                { text: "Именно ошибки и твой опыт на них делают тебя человеком", top: "45%", left: "25%", theme: "bubble-middle-right"},
                { text: "Позволь себе ошибаться", top: "55%", left: "50%", theme: "bubble-middle-right"},
                { text: "Хорошо", top: "80%", left: "45%", effect: "jitter", isChoice: true, action: "open_epilogue" }
            ],
        },
        videoPages: {
        15: { loop: false },
    },
        

        sounds: {
            11: { url: "/assets/nightmares/sounds/laughter.mp3", loop: false },
            18: { url: "/assets/nightmares/sounds/robot.mp3", loop: false },
            15: { url: "/assets/nightmares/sounds/tearing.mp3", loop: false },
            7: { url: "/assets/nightmares/sounds/stomps.mp3", loop: false },

},
        
    },

    {
            id: "nightmares_ep6", 
            title: "Эпилог", 
            num: 6, 
            pagesCount: 6,
            thumb: "assets/nightmares/thumbs/ep6_thumb.png",
            locked: true,
            narratives: {
            2: [
                { text: "После этого мне перестал сниться этот кошмар", top: "15%", left: "15%", effect: "static"},  
            ],

            3: [
                { text: "Я часто вижу Аню и Алекса", top: "15%", left: "15%", effect: "static"}, 
            ],

            4: [
                { text: "И Аву", top: "10%", left: "10%", effect: "static"}, 
            ],

            5: [
                { text: "Бату я видел всего раз", top: "10%", left: "55%", effect: "static"}, 
                { text: "Не знаю, кто он и какие у него силы", top: "20%", left: "50%", effect: "static"}, 
                { text: "Да впрочем это и неважно...", top: "80%", left: "65%", effect: "static"}, 
                 
            ],

        },
        videoPages: {
        },
        

        sounds: {
            },
        
    },
    
]
    
}}

let currentComicId = null;
let currentEpisodeId = null;
let loadedImagesCache = {};
let isChoiceRequired = false;

let currentPage = 1;
let totalPages = 0;
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const audioCache = {}; 
let activeAudioNode = null;

function loadProgress() {
    for (let comicKey in comicsDB) {
        comicsDB[comicKey].episodes.forEach(ep => {
            const isUnlocked = localStorage.getItem(ep.id + '_unlocked');
            if (isUnlocked === 'true') {
                ep.locked = false;
            }
        });
    }
}

function saveProgress(episodeId) {
    localStorage.setItem(episodeId + '_unlocked', 'true');
}

async function loadAudioToRAM(url) {
    if (audioCache[url]) return; 
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const decodedBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        audioCache[url] = decodedBuffer;
    } catch (e) {
        console.error("Ошибка загрузки звука:", e);
    }
}

function playSoundEffect(url, isLoop = false) {
    if (audioCtx.state === 'suspended') audioCtx.resume(); 
    stopAudio(); 

    if (audioCache[url]) {
        const source = audioCtx.createBufferSource();
        source.buffer = audioCache[url];
        source.connect(audioCtx.destination);
        source.loop = isLoop; 
        source.start(0); 
        activeAudioNode = source;
    } else {
        loadAudioToRAM(url).then(() => {
            if (audioCache[url]) playSoundEffect(url, isLoop); 
        });
    }
}

function stopAudio() {
    if (activeAudioNode) {
        activeAudioNode.stop();
        activeAudioNode.disconnect();
        activeAudioNode = null;
    }
}
let uiTimeout;


function navigateTo(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);

    const isReader = viewId === 'reader-view';
    document.getElementById('main-header').style.display = isReader ? 'none' : 'flex';
    document.getElementById('main-footer').style.display = isReader ? 'none' : 'block';
    
    const searchContainer = document.querySelector('.nav-controls');
    if (searchContainer) {
        searchContainer.style.visibility = viewId === 'home-view' ? 'visible' : 'hidden';
    }

    if (!isReader) {
        stopAudio();
    }

    if (isReader) {
        const readerView = document.getElementById('reader-view');
        readerView.classList.add('reader-ui-active');
        clearTimeout(uiTimeout);
        uiTimeout = setTimeout(() => {
            readerView.classList.remove('reader-ui-active');
        }, 1500); 
    }
}

function toggleReaderUI(event) {
    if (event && event.target && event.target.closest('.choice-clickable')) {
        return; 
    }
    document.getElementById('reader-view').classList.toggle('reader-ui-active');
}

document.querySelectorAll('.reader-toolbar').forEach(toolbar => {
    toolbar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

document.addEventListener('mousemove', (e) => {
    const readerView = document.getElementById('reader-view');
    if (readerView.classList.contains('active')) {
        if (e.clientY < 100) {
            readerView.classList.add('reader-ui-hover-top');
        } else {
            readerView.classList.remove('reader-ui-hover-top');
        }
        if (e.clientY > window.innerHeight - 100) {
            readerView.classList.add('reader-ui-hover-bottom');
        } else {
            readerView.classList.remove('reader-ui-hover-bottom');
        }
    }
});

function openComic(comicId) {
    currentComicId = comicId;
    const comic = comicsDB[comicId];

    document.getElementById('detail-title').innerText = comic.title;
    document.getElementById('detail-desc').innerText = comic.desc;
    const bannerEl = document.getElementById('detail-banner');
    
    if (comic.banner) {
        bannerEl.style.backgroundImage = `url('${comic.banner}')`;
        bannerEl.style.backgroundSize = 'cover'; 
        bannerEl.style.backgroundPosition = 'center 20%'; 
    } else {
        bannerEl.style.background = comic.color;
        bannerEl.style.backgroundImage = 'none'; 
    }
    const formatText = comic.format === 'webtoon' ? 'Вебтун' : 'Постраничный';
    document.getElementById('detail-meta').innerHTML = `<b>${comic.genre}</b> &nbsp;•&nbsp; ${formatText}`;

const epContainer = document.getElementById('episodes-container');
epContainer.innerHTML = ''; 
const sortedEpisodes = [...comic.episodes].sort((a, b) => a.num - b.num);

sortedEpisodes.forEach(ep => {
    const epCard = document.createElement('div');
    epCard.className = 'episode-card';
    const thumbWrapper = document.createElement('div');
    thumbWrapper.className = 'episode-thumb-wrapper';
    if (ep.thumb) {
        const thumbImg = document.createElement('img');
        thumbImg.src = ep.thumb;
        thumbImg.alt = `Превью ${ep.title}`;
        thumbImg.className = 'episode-thumb-img';
        
        thumbWrapper.appendChild(thumbImg);
    } else {
        thumbWrapper.innerText = ep.num;
        thumbWrapper.classList.add('flex-center'); 
    }
    const epInfo = document.createElement('div');
    epInfo.className = 'episode-info';
    
    const epTitle = document.createElement('h4');
    const epMeta = document.createElement('p');
    epMeta.className = 'ep-meta-text';
    if (ep.locked) {
        epCard.classList.add('locked-episode'); 
        epTitle.innerText = `🔒 ${ep.title}`; 
        epCard.onclick = () => {
            console.log("Этот эпизод пока недоступен"); 
        };
    } else {
        epTitle.innerText = ep.title; 
        epCard.onclick = () => openReader(ep.id, ep.title, comic.title);
    }

    epInfo.appendChild(epTitle);
    epInfo.appendChild(epMeta);
    epCard.appendChild(thumbWrapper); 
    epCard.appendChild(epInfo);      
    epContainer.appendChild(epCard);
});

navigateTo('detail-view');
}

function openReader(epId, epTitle, comicTitle) {
    currentEpisodeId = epId; 
    const comic = comicsDB[currentComicId];
    const episode = comic.episodes.find(ep => ep.id === epId);
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer) canvasContainer.style.display = 'none'; 
    
    document.getElementById('paged-container').style.display = 'none';
    document.getElementById('webtoon-container').style.display = 'none';
    
    document.getElementById('reader-title').innerText = `${comicTitle} - ${epTitle}`;
    document.getElementById('choice-ui').style.display = comic.hasChoices ? 'block' : 'none';

    if (comic.format === 'webtoon') {
        document.getElementById('webtoon-container').style.display = 'block'; 
        
        renderWebtoonEpisode();
    } else if (comic.format === 'paged') {
        document.getElementById('paged-container').style.display = 'flex';        currentPage = 1;
        totalPages = episode.pagesCount || 1; 
        renderCurrentPage();
    }

    updateNavigationButtons(); 

    const scrollOnboard = document.getElementById('onboarding-scroll');
    const tapOnboard = document.getElementById('onboarding-tap');

    scrollOnboard.style.display = 'none';
    tapOnboard.style.display = 'none';
    scrollOnboard.classList.remove('show');
    tapOnboard.classList.remove('show');

    const isFirstEpisode = episode.num === 1;
    const isWebtoon = comic.format === 'webtoon';
    const storageKey = isWebtoon ? 'hasSeenWebtoonOnboard' : 'hasSeenPagedOnboard';
    const hasSeenOnboard = localStorage.getItem(storageKey) === 'true';

    if (isFirstEpisode && !hasSeenOnboard) {
        const activeOnboard = isWebtoon ? scrollOnboard : tapOnboard;
        activeOnboard.style.display = 'flex';
        
        setTimeout(() => activeOnboard.classList.add('show'), 50);

        setTimeout(() => {
            activeOnboard.classList.remove('show');
            setTimeout(() => activeOnboard.style.display = 'none', 500);
        }, 2500);

        localStorage.setItem(storageKey, 'true');
    }

    navigateTo('reader-view');
}
function getEpisodeIndex() {
    const comic = comicsDB[currentComicId];
    return comic.episodes.findIndex(ep => ep.id === currentEpisodeId);
}

function goToNextEpisode(event) {
    if (isChoiceRequired) {
        if (event) event.stopPropagation();
        showToast("Сделайте выбор на экране, чтобы продолжить");
        return; 
    }
    if (event) event.stopPropagation(); 
    
    const comic = comicsDB[currentComicId];
    
    if (comic.format === 'paged' && currentPage < totalPages) {
        turnPage(1, event);
        return; 
    }
    
    const currentIndex = getEpisodeIndex();
    
    if (currentIndex < comic.episodes.length - 1) {
        const nextEp = comic.episodes[currentIndex + 1]; 
        if (nextEp.locked) {
            showToast("Этот эпизод пока заблокирован!"); 
            return; 
        }
        openReader(nextEp.id, nextEp.title, comic.title);
    }
}

function goToPrevEpisode(event) {
    if (event) event.stopPropagation();
    const comic = comicsDB[currentComicId];
    if (comic.format === 'paged' && currentPage > 1) {
        turnPage(-1, event);
        return;
    }
    
    const currentIndex = getEpisodeIndex();
    
    if (currentIndex > 0) {
        const prevEp = comic.episodes[currentIndex - 1]; 
        
        if (prevEp.locked) {
            showToast("Этот эпизод пока заблокирован!"); 
            return;
        }
        
        openReader(prevEp.id, prevEp.title, comic.title);
    }
}
function updateNavigationButtons() {
    const comic = comicsDB[currentComicId];
    const currentIndex = getEpisodeIndex();
    const btnPrev = document.getElementById('btn-prev-ep');
    const btnNext = document.getElementById('btn-next-ep');
    const btnMenu = document.getElementById('btn-ep-menu');
    if (comic.episodes.length === 1) {
        btnMenu.innerText = 'К описанию';
        btnMenu.onclick = (e) => {
            if (e) e.stopPropagation();
            navigateTo('detail-view');
        };
    } else {
        btnMenu.innerText = 'Эпизоды';
        btnMenu.onclick = toggleEpisodeMenu;
    }
    
    if (comic.format === 'paged') {
        btnPrev.innerText = currentPage > 1 ? 'Пред. стр.' : 'Пред. эпизод';
        btnNext.innerText = currentPage < totalPages ? 'След. стр.' : 'След. эпизод';
        
        btnPrev.disabled = (currentPage === 1 && currentIndex <= 0);
        btnPrev.style.opacity = btnPrev.disabled ? '0.3' : '1'; 
        
        btnNext.disabled = (currentPage === totalPages && currentIndex >= comic.episodes.length - 1);
        btnNext.style.opacity = btnNext.disabled ? '0.3' : '1';
        
    } else { 
        btnPrev.innerText = 'Предыдущий';
        btnNext.innerText = 'Следующий';
        
        btnPrev.disabled = (currentIndex <= 0);
        btnPrev.style.opacity = btnPrev.disabled ? '0.3' : '1';
        btnNext.disabled = (currentIndex >= comic.episodes.length - 1);
        btnNext.style.opacity = btnNext.disabled ? '0.3' : '1';
    }
}


let currentObserver = null;

function initCanvasPanels(comic) {
    const container = document.getElementById('canvas-container');
    container.innerHTML = ''; 
    loadedImagesCache = {}; 

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

function preloadMockImages(panelId, comic) {
    loadedImagesCache[panelId] = [];
    const framesCount = 10;
    
    for (let i = 1; i <= framesCount; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 600; canvas.height = 800;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = comic.color;
        ctx.fillRect(0, 0, 600, 800);
        
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
    const interval = 1000 / 10; 
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


const searchInput = document.getElementById('search-input');
const noResultsMsg = document.getElementById('no-results');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const comicCards = document.querySelectorAll('.comic-card');
        let hasResults = false;

        comicCards.forEach(card => {
            const titleElement = card.querySelector('.comic-title');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                if (title.includes(query)) {
                    card.style.display = ''; 
                    hasResults = true;
                } else {
                    card.style.display = 'none'; 
                }
            }
        });
        if (noResultsMsg) {
            noResultsMsg.style.display = hasResults ? 'none' : 'block';
        }
    });
}

function turnPage(direction, event) {
    if (event) event.stopPropagation(); 
    
    const newPage = currentPage + direction;
    const comic = comicsDB[currentComicId];
    const currentIndex = getEpisodeIndex();
    const episode = comic.episodes[currentIndex]; 

    if (direction === 1) {
        const pageItems = episode.narratives && episode.narratives[currentPage];
        const hasChoices = pageItems && pageItems.some(item => item.isChoice);
        if (hasChoices) {
            showToast("Сделайте выбор на экране, чтобы продолжить");
            return; 
        }
        if (episode.currentPathEnd && currentPage === episode.currentPathEnd) {
            showToast("Конец ветки. Нажмите на кнопку или выйдите в меню.");
            return;
        }
    }
    
    if (direction === -1) {
        console.log("Пытаемся пойти назад!");
        console.log("Где мы сейчас (currentPage):", currentPage);
        console.log("Где стоит стена (episode.currentPathStart):", episode.currentPathStart);
        if (episode.currentPathStart && currentPage == episode.currentPathStart) {
            showToast("Решение принято. Пути назад нет.");
            return; 
        }
    }
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderCurrentPage();
    } 
    else if (newPage > totalPages) {
        if (episode.mainPathEnd && currentPage > episode.mainPathEnd) {
            showToast("Конец истории. Вернитесь в меню или измените выбор.");
            toggleReaderUI(); 
            return; 
        }
        if (currentIndex < comic.episodes.length - 1) {
            const nextEp = comic.episodes[currentIndex + 1]; 
            
            if (nextEp.locked) {
                showToast("Следующий эпизод пока заблокирован!");
                toggleReaderUI();
                return;
            }
            
            openReader(nextEp.id, nextEp.title, comic.title);
        } else {
            toggleReaderUI(); 
        }
    } 
    else if (newPage < 1) {
        if (currentIndex > 0) {
            const prevEp = comic.episodes[currentIndex - 1]; 
            
            if (prevEp.locked) {
                showToast("Этот эпизод заблокирован!");
                toggleReaderUI();
                return;
            }
            openReader(prevEp.id, prevEp.title, comic.title);
        } else {
            toggleReaderUI();
        }
    }
}
function renderCurrentPage() {
    const pageCounter = document.getElementById('page-counter');
    const imageElement = document.getElementById('paged-image');
    const videoElement = document.getElementById('paged-video');
    const pageWrapper = document.getElementById('page-wrapper'); 
    const replayBtn = document.getElementById('paged-replay-btn');
    
    const comic = comicsDB[currentComicId];
    const episode = comic.episodes.find(ep => ep.id === currentEpisodeId);
    const basePath = `assets/${currentComicId}/${currentEpisodeId}`;
    
    const videoConfig = episode.videoPages ? episode.videoPages[String(currentPage)] : null;
    const isVideoPage = !!videoConfig; 

    if (episode.sounds && episode.sounds[currentPage]) {
        loadAudioToRAM(episode.sounds[currentPage].url); 
    }
    if (episode.sounds && episode.sounds[currentPage + 1]) {
        loadAudioToRAM(episode.sounds[currentPage + 1].url);
    }

    const applyNewPage = (mediaSrc, isVideo) => {
        const oldNarratives = pageWrapper.querySelectorAll('.narrative-overlay');
        oldNarratives.forEach(plate => plate.remove());
        stopAudio(); 

        if (isVideo) {
            imageElement.style.display = 'none';
            videoElement.style.display = 'block';
            videoElement.src = mediaSrc;
            videoElement.muted = true; 
            if (replayBtn) replayBtn.style.display = 'none'; 

            const shouldLoop = videoConfig.loop === true;
            videoElement.loop = shouldLoop;

            videoElement.play().catch(error => console.log("Блокировка видео:", error));

            if (shouldLoop) {
                videoElement.onended = null;
            } else {
                videoElement.onended = () => { if (replayBtn) replayBtn.style.display = 'flex'; };
                if (replayBtn) {
                    replayBtn.onclick = (e) => {
                        e.stopPropagation();
                        replayBtn.style.display = 'none';
                        
                        videoElement.pause();
                        videoElement.currentTime = 0;
                        videoElement.play();

                        if (episode.sounds && episode.sounds[currentPage]) {
                            const soundData = episode.sounds[currentPage];
                            playSoundEffect(soundData.url, soundData.loop);
                        }
                    };
                }
            }
        } else {
            videoElement.style.display = 'none';
            imageElement.style.display = 'block';
            imageElement.src = mediaSrc;
            videoElement.pause();
            videoElement.src = ""; 
            if (replayBtn) replayBtn.style.display = 'none';
        }

        document.querySelectorAll('.comic-wrapper, .comic-text-base, .narrative-overlay').forEach(el => el.remove());

        if (episode.narratives && episode.narratives[currentPage]) {
            episode.narratives[currentPage].forEach(item => {
                
                const wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'comic-wrapper';
                wrapperDiv.style.top = item.top;
                wrapperDiv.style.left = item.left;

                const currentTheme = item.theme || comic.narrativeTheme || 'narrative-text';
                const bgDiv = document.createElement('div');
                bgDiv.className = `comic-bg ${currentTheme}`;

                const textEffectClass = item.effect || '';
                const textDiv = document.createElement('div');
                textDiv.className = `comic-text ${textEffectClass}`;
                textDiv.innerHTML = item.text;

                if (item.isChoice) { 
                    textDiv.classList.add('choice-clickable'); 
                    
                    textDiv.onclick = (e) => {
                        e.stopPropagation(); 
                        makeChoice(item.action); 
                    };
                }

                wrapperDiv.appendChild(bgDiv);
                wrapperDiv.appendChild(textDiv);
                pageWrapper.appendChild(wrapperDiv);
            });
        }

        if (episode.sounds && episode.sounds[currentPage]) {
            const soundData = episode.sounds[currentPage];
            playSoundEffect(soundData.url, soundData.loop);
        }
        
        if (pageCounter) {
            if (comic.format === 'paged') {
                pageCounter.style.display = 'block';
                pageCounter.innerText = `Страница ${currentPage} / ${totalPages}`;
            } else {
                pageCounter.style.display = 'none';
            }
        }
        updateNavigationButtons();
    };

    if (isVideoPage) {
        const tempVideo = document.createElement('video');
        tempVideo.src = `${basePath}/${currentPage}.mp4`;
        tempVideo.onloadeddata = () => applyNewPage(tempVideo.src, true);
        tempVideo.onerror = () => applyNewPage(tempVideo.src, true); 
    } else {
        const tempImg = new Image();
        tempImg.src = `${basePath}/${currentPage}.png`;
        if ('decode' in tempImg) {
            tempImg.decode()
                .then(() => applyNewPage(tempImg.src, false))
                .catch(() => applyNewPage(tempImg.src, false)); 
        } else {
            tempImg.onload = () => applyNewPage(tempImg.src, false);
            tempImg.onerror = () => applyNewPage(tempImg.src, false);
        }
    }

}
function renderWebtoonEpisode() {
    const container = document.getElementById('webtoon-container');
    container.innerHTML = ''; 
    
    const comic = comicsDB[currentComicId];
    const episode = comic.episodes.find(ep => ep.id === currentEpisodeId);
    
    let animCounter = 0; 

    const episodeBasePath = `assets/${currentComicId}/${currentEpisodeId}`;

    episode.content.forEach((block) => {
        const blockFolder = block.folder || episodeBasePath;

        if (block.type === 'images') {
            for (let i = block.start; i <= block.end; i++) {
                const img = document.createElement('img');
                img.src = `${blockFolder}/${i}.png`; 
                img.className = 'webtoon-panel';
                img.loading = 'lazy'; 
                container.appendChild(img);
            }
        } 
        else if (block.type === 'video') {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.style.width = '100%';
            wrapper.style.display = 'flex';
            wrapper.style.justifyContent = 'center';

            const video = document.createElement('video');
            video.src = block.file || `${blockFolder}/video.mp4`;
            video.className = 'webtoon-panel'; 
            video.autoplay = true;
            video.muted = true;
            video.playsInline = true; 
            
            const shouldLoop = block.loop === true;
            video.loop = shouldLoop;
            
            const replayBtn = document.createElement('div');
            replayBtn.className = 'replay-overlay';
            replayBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                </svg>
            `;

            if (!shouldLoop) {
                video.onended = () => {
                    replayBtn.style.display = 'flex';
                };

                replayBtn.onclick = (e) => {
                    e.stopPropagation();
                    replayBtn.style.display = 'none';
                    
                    video.currentTime = 0;
                    video.play();

                    if (currentAudio) {
                        currentAudio.currentTime = 0;
                        currentAudio.play().catch(error => console.log("Блокировка звука:", error));
                    }
                };
            }

            wrapper.appendChild(video);
            
            if (!shouldLoop) {
                wrapper.appendChild(replayBtn);
            }
            
            container.appendChild(wrapper);
        }
        else if (block.type === 'scroll-anim') {
    animCounter++;
    const containerId = `anim-container-${animCounter}`;
    const canvasId = `magic-canvas-${animCounter}`;

    const animDiv = document.createElement('div');
    animDiv.className = 'scroll-magic-container';
    animDiv.id = containerId;

    const scrollSpeed = block.speed || 100; 
    const scrollDistance = block.frames * scrollSpeed; 
    animDiv.style.height = `${scrollDistance + window.innerHeight}px`;

    const stickyWrapper = document.createElement('div');
    stickyWrapper.className = 'sticky-wrapper';

    const canvas = document.createElement('canvas');
    canvas.id = canvasId;

    stickyWrapper.appendChild(canvas);
    animDiv.appendChild(stickyWrapper);
    container.appendChild(animDiv);

    initDynamicScrollAnimation(canvasId, containerId, blockFolder, block.frames);
}
    });

    updateNavigationButtons();
    window.scrollTo(0, 0); 
}
function toggleEpisodeMenu(event) {
    if (event) event.stopPropagation(); 
    
    const overlay = document.getElementById('episode-list-overlay');
    
    if (overlay.style.display === 'none' || !overlay.style.display) {
        populateOverlayList(); 
        overlay.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
    }
}

function populateOverlayList() {
    const listContainer = document.getElementById('overlay-episodes-list');
    if (!listContainer) return; 
    
    listContainer.innerHTML = ''; 
    const comic = comicsDB[currentComicId];

    comic.episodes.forEach(ep => {
        const epDiv = document.createElement('div');
        let className = 'overlay-ep-item';
        if (ep.id === currentEpisodeId) {
            className += ' active';
        }

        if (ep.locked) {
            className += ' locked-episode';
            epDiv.innerHTML = `<span>🔒 ${ep.title}</span>`;
            epDiv.onclick = (e) => {
                if (e) e.stopPropagation();
                console.log("Эпизод заблокирован");
            };
        } else {
            epDiv.innerText = ep.title;
            
            epDiv.onclick = (e) => {
                if (e) e.stopPropagation();
                toggleEpisodeMenu(); 
                openReader(ep.id, ep.title, comic.title); 
            };
        }

        epDiv.className = className;
        listContainer.appendChild(epDiv);
    });
}

function initDynamicScrollAnimation(canvasId, containerId, path, totalFrames) {
    const canvas = document.getElementById(canvasId);
    const container = document.getElementById(containerId);
    const ctx = canvas.getContext('2d');

    if (!canvas || !ctx || !container) return;

    const images = [];
    
    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `${path}/${i}.png`;
        img.onload = () => {
            if (i === 1) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                
                console.log(`Размер кадра: ${img.naturalWidth}x${img.naturalHeight}`);
                
                renderFrame(0);
            }
        };
        img.onerror = () => console.error(`Не удалось загрузить кадр: ${img.src}`);
        images.push(img);
    }

    function renderFrame(frameIndex) {
        if (images[frameIndex] && images[frameIndex].complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
        }
    }

    window.addEventListener('scroll', () => {
        const rect = container.getBoundingClientRect();
        const totalScrollable = rect.height - window.innerHeight;

        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
            const distanceFromTop = -rect.top;
            let scrollFraction = distanceFromTop / totalScrollable;
            
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(scrollFraction * totalFrames)
            );

            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    }, true); 
}
document.addEventListener('keydown', (e) => {
    const readerView = document.getElementById('reader-view');
    if (!readerView || !readerView.classList.contains('active')) return;

    const comic = comicsDB[currentComicId];
    if (!comic) return;
    if (comic.format === 'paged') {
        if (e.key === 'ArrowRight') {
            turnPage(1, e); 
        } else if (e.key === 'ArrowLeft') {
            turnPage(-1, e);
        }
    }
    
    else if (comic.format === 'webtoon') {
        const scrollAmount = window.innerHeight * 0.7; 
        
        if (e.key === 'ArrowDown') {
            e.preventDefault(); 
            window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault(); 
            window.scrollBy({ top: -scrollAmount, left: 0, behavior: 'smooth' });
        }
    }
});

let toastTimeout; 

function showToast(message) {
    let toast = document.getElementById('choice-toast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'choice-toast';
        toast.style.cssText = "position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.8); color:#fff; padding:10px 20px; border-radius:8px; z-index:999999; transition: opacity 0.3s; pointer-events: none;";
        document.body.appendChild(toast);
    }
    
    toast.innerText = message;
    toast.style.opacity = '1';
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        if (toast) toast.style.opacity = '0';
    }, 2000);
}

function makeChoice(action) {
    isChoiceRequired = false; 
    const ep5 = comicsDB['nightmares'].episodes.find(ep => ep.id === 'nightmares_ep5');

    switch(action) {
        
        case 'ending_coward':
            currentPage = 9; 
            renderCurrentPage(); 
            break;
            
        case 'unlock_ep5':
            if (ep5) {
                ep5.locked = false;
                saveProgress(ep5.id);
            }
            openComic('nightmares'); 
            openReader('nightmares_ep5', 'Глава 5: Твой сон', 'Ночной кошмар');
            break;

        case 'ep5_branch_A':
            currentPage = 3;    
            if (ep5) {
                ep5.currentPathStart = 3; 
            }
            renderCurrentPage();
            break;

        case 'ep5_branch_B':
            currentPage = 13;    
            if (ep5) {
                ep5.currentPathStart = 13; 
            }
            renderCurrentPage();
            break;

        case 'ending_1':
            currentPage = 4;
            if (ep5) {
                ep5.currentPathStart = 4; 
                ep5.currentPathEnd = 8;   
            }
            renderCurrentPage();
            break;

        case 'ending_2':
            currentPage = 9;
            if (ep5) {
                ep5.currentPathStart = 9; 
                ep5.currentPathEnd = 12; 
            }
            renderCurrentPage();
            break;

        case 'ending_3':
            currentPage = 14; 
            if (ep5) {
                ep5.currentPathStart = 14; 
                ep5.currentPathEnd = 16;   
            }
            renderCurrentPage();
            break;

        case 'ending_4':
            currentPage = 17;
            if (ep5) {
                ep5.currentPathStart = 17; 
                ep5.currentPathEnd = 20;  
            }
            renderCurrentPage();
            break;

        case 'open_epilogue':
            const ep6 = comicsDB['nightmares'].episodes.find(ep => ep.id === 'nightmares_ep6');
            if (ep6) {
                ep6.locked = false;
                saveProgress(ep6.id); 
            }
            
            openComic('nightmares');
            openReader('nightmares_ep6', 'Эпилог: Рассвет', 'Ночной кошмар');
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProgress(); 
});