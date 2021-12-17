const question = {
    "Компьютерная архитектура": [
        {
            id: 1, 
            question: 'Самый основной компонет любого компьютера?', 
            answers: [
                {id: 1, answer: 'Материнская плата', correct: false},
                {id: 2, answer: 'Блок питания', correct: false},
                {id: 3, answer: 'Процессор', correct: true},
                {id: 4, answer: 'Оперативная память', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Кому удалось изложить новые принципы в построения и функционирования ЭВМ?', 
            answers: [
                {id: 5, answer: 'фон Нейман', correct: true},
                {id: 6, answer: 'Рупрехт', correct: false},
                {id: 7, answer: 'Максимилиан', correct: false},
                {id: 8, answer: 'Герберт', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'Укажите какой из шин не существует.', 
            answers: [
                {id: 9, answer: 'Адресная шина', correct: false},
                {id: 10, answer: 'Связующая шина', correct: true},
                {id: 11, answer: 'Шина данных', correct: false},
                {id: 12, answer: 'Шина таймера', correct: false}
            ],
        },
        {
            id: 4, 
            question: 'Какого мост в современных ПК интегрирован в CPU?', 
            answers: [
                {id: 13, answer: 'Южный', correct: false},
                {id: 14, answer: 'Северный', correct: true},
                {id: 15, answer: 'Никакой', correct: false},
                {id: 16, answer: 'Западный', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Какое название не относится к материнской плате?', 
            answers: [
                {id: 17, answer: 'Чипсет', correct: false},
                {id: 18, answer: 'Печатная плата', correct: false},
                {id: 19, answer: 'Системная плата', correct: false},
                {id: 29, answer: 'Плата расширений', correct: true}
            ],
        },
        {
            id: 6, 
            question: 'У какого устройства ПК есть кэш-память', 
            answers: [
                {id: 21, answer: 'Жесткий диск', correct: false},
                {id: 22, answer: 'Видеокарта', correct: false},
                {id: 23, answer: 'Процессор', correct: false},
                {id: 24, answer: 'Все', correct: true}
            ],
        },
        {
            id: 7, 
            question: 'У каого устройства ПК обязательно должен быть свой кулер?', 
            answers: [
                {id: 25, answer: 'Оперативная память', correct: false},
                {id: 26, answer: 'Видеокарта', correct: false},
                {id: 27, answer: 'Процессор', correct: true},
                {id: 28, answer: 'Жесткий диск', correct: false}
            ],
        },
        {
            id: 8, 
            question: 'Что рекомендуется устанавливать на SSD диск?', 
            answers: [
                {id: 29, answer: 'Игры и музыку', correct: false},
                {id: 30, answer: 'ОС и программы', correct: true},
                {id: 31, answer: 'Фильмы и музыку', correct: false},
                {id: 32, answer: 'Игры и фильмы', correct: false}
            ],
        },
        {
            id: 9, 
            question: 'Наиболее уязвимая устройство ПК', 
            answers: [
                {id: 33, answer: 'Процессор', correct: false},
                {id: 34, answer: 'Шина', correct: false},
                {id: 35, answer: 'Жесткий диск', correct: true},
                {id: 36, answer: 'Видеокарта', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'Какого типа оперативной памяти не существует?', 
            answers: [
                {id: 37, answer: 'KIMM', correct: true},
                {id: 38, answer: 'SIMM', correct: false},
                {id: 39, answer: 'RIMM', correct: false},
                {id: 40, answer: 'DIMM', correct: false}
            ],
        },
    ],

    "Операционные системы": [
        {
            id: 1, 
            question: 'Какая команда запускает командную строку?', 
            answers: [
                {id: 1, answer: 'command', correct: false},
                {id: 2, answer: 'cmd', correct: true},
                {id: 3, answer: 'cmdline', correct: false},
                {id: 4, answer: 'command line', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Что произойдет при нажатие ctrl + shift + Esc?', 
            answers: [
                {id: 5, answer: 'Запуститься диспетчер задач', correct: true},
                {id: 6, answer: 'Запуститься диспетчер устройств', correct: false},
                {id: 7, answer: 'Запуститься командная строка', correct: false},
                {id: 8, answer: 'Ничего не произойдет', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'Когда вышла самая первая версия Windows?', 
            answers: [
                {id: 9, answer: '1992', correct: false},
                {id: 10, answer: '1958', correct: false},
                {id: 11, answer: '1985', correct: true},
                {id: 12, answer: '1979', correct: false}
            ],
        },
        {
            id: 4, 
            question: 'Что НЕ подразумевется по системными ресурсами ПК?', 
            answers: [
                {id: 13, answer: 'Жесткий диск', correct: true},
                {id: 14, answer: 'DMA', correct: false},
                {id: 15, answer: 'IRQ', correct: false},
                {id: 16, answer: 'Каналы портов ввода/ввывода', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Язык гипертекстовой разметки', 
            answers: [
                {id: 17, answer: 'MTLD', correct: false},
                {id: 18, answer: 'HONO', correct: false},
                {id: 19, answer: 'HTNL', correct: false},
                {id: 20, answer: 'HTML', correct: true}
            ],
        },
        {
            id: 6, 
            question: 'Какая команда запускает панель управления?', 
            answers: [
                {id: 21, answer: 'Panel', correct: false},
                {id: 22, answer: 'manage', correct: false},
                {id: 23, answer: 'control', correct: true},
                {id: 24, answer: 'panel', correct: false}
            ],
        },
        {
            id: 7, 
            question: 'Что не является стандартной программой Windows?', 
            answers: [
                {id: 25, answer: 'Блокнот', correct: false},
                {id: 26, answer: 'Photoshop', correct: true},
                {id: 27, answer: 'Монитор ресурсов', correct: false},
                {id: 28, answer: 'Выполнить', correct: false}
            ],
        },
        {
            id: 8, 
            question: 'По каким признакам НЕ классифицируются ОС?', 
            answers: [
                {id: 29, answer: 'Одноразрядные, многоразрядные', correct: true},
                {id: 30, answer: 'Однопроцессорные, многопроцессорные', correct: false},
                {id: 31, answer: 'Одноядерные, многоядерные', correct: false},
                {id: 32, answer: 'Однозадачные, многозадачные', correct: false}
            ],
        },
        {
            id: 9, 
            question: 'Какие бывают прерывания?', 
            answers: [
                {id: 33, answer: 'Внешние, внутренние и системные', correct: true},
                {id: 34, answer: 'Внешние, внутренныие и программные', correct: false},
                {id: 35, answer: 'Системные и внешние', correct: false},
                {id: 36, answer: 'Внешние и внутренние', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'Какое расширение для файла НЕ существует?', 
            answers: [
                {id: 37, answer: '.bmp', correct: false},
                {id: 38, answer: '.wav', correct: false},
                {id: 39, answer: '.png', correct: false},
                {id: 40, answer: '.mp5', correct: true}
            ],
        },
    ],

    "Английский": [
        {
            id: 1, 
            question: 'Ilgar ... football yesterday in this time.', 
            answers: [
                {id: 1, answer: 'is playing', correct: false},
                {id: 2, answer: 'was playing', correct: true},
                {id: 3, answer: 'played', correct: false},
                {id: 4, answer: 'plays', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Какое время глагола употреблено в следующем предложение: Ruslan and Samir have been reading the book for 3 hours.', 
            answers: [
                {id: 5, answer: 'Present simple', correct: false},
                {id: 6, answer: 'Present continuous', correct: false},
                {id: 7, answer: 'Present perfect continuous', correct: true},
                {id: 8, answer: 'Present perfect', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'Abdul cat\'s name is Catrina - что означает " ...\'s " в данном предложение?', 
            answers: [
                {id: 9, answer: 'Короткую форму is', correct: false},
                {id: 10, answer: 'Притяжательный падеж', correct: true},
                {id: 11, answer: 'Короткую форму has', correct: false},
                {id: 12, answer: 'Она тут по ошибке', correct: false}
            ],
        },
        {
            id: 4, 
            question: 'Как будет "break" в past simple и в past participle?', 
            answers: [
                {id: 13, answer: 'broke - broken', correct: true},
                {id: 14, answer: 'break - broke', correct: false},
                {id: 15, answer: 'broke - broke', correct: false},
                {id: 16, answer: 'broken - broken', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Dmitriy is friend of ...', 
            answers: [
                {id: 17, answer: 'mine', correct: true},
                {id: 18, answer: 'my', correct: false},
                {id: 19, answer: 'me', correct: false},
                {id: 20, answer: 'I', correct: false}
            ],
        },
        {
            id: 6, 
            question: 'Zaur, Ferid and Emin ... 4 control work in this month.', 
            answers: [
                {id: 21, answer: 'write', correct: false},
                {id: 22, answer: 'wrote', correct: false},
                {id: 23, answer: 'have written', correct: true},
                {id: 24, answer: 'has wrote', correct: false}
            ],
        },
        {
            id: 7, 
            question: '... 3 beautiful girls in our group: Nigar, Sevinch and Aysel.', 
            answers: [
                {id: 25, answer: 'There is', correct: false},
                {id: 26, answer: 'Have', correct: false},
                {id: 27, answer: 'There are', correct: true},
                {id: 28, answer: '-', correct: false}
            ],
        },
        {
            id: 8, 
            question: 'Kenan ... to London in this year.', 
            answers: [
                {id: 29, answer: 'was', correct: false},
                {id: 30, answer: 'has been', correct: true},
                {id: 31, answer: 'is', correct: false},
                {id: 32, answer: 'went', correct: false}
            ],
        },
        {
            id: 9, 
            question: 'Murad can ... read in English.', 
            answers: [
                {id: 33, answer: 'to', correct: false},
                {id: 34, answer: '-', correct: true},
                {id: 35, answer: 'the', correct: false},
                {id: 36, answer: 'for', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'Said and Adil is looking ... them pen.', 
            answers: [
                {id: 37, answer: '-', correct: false},
                {id: 38, answer: 'out', correct: false},
                {id: 39, answer: 'in', correct: false},
                {id: 40, answer: 'for', correct: true}
            ],
        },
    ],

    "История": [
        {
            id: 1, 
            question: 'Когда началась Вторая Мировая Война?', 
            answers: [
                {id: 1, answer: '1 августа 1939', correct: false},
                {id: 2, answer: '22 юиня 1941', correct: false},
                {id: 3, answer: '1 сентября 1939', correct: true},
                {id: 4, answer: '26 января 1940', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Что произошло в 1941 году?', 
            answers: [
                {id: 5, answer: 'Началась Вторая Мировая Война', correct: false},
                {id: 6, answer: 'Началась Отечественная война', correct: true},
                {id: 7, answer: 'Был подписан Туркменчайский договор', correct: false},
                {id: 8, answer: 'Был разработал план "Барбаросса"', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'Между кем шла Столетняя война?', 
            answers: [
                {id: 9, answer: 'Англия и Франция', correct: true},
                {id: 10, answer: 'Германия и Англия', correct: false},
                {id: 11, answer: 'Китай и Россия', correct: false},
                {id: 12, answer: 'Франция и Германия', correct: false}
            ],
        },
        {
            id: 4, 
            question: 'Что было захвачено в ночь с 2-го на 3-е января 1804 года?', 
            answers: [
                {id: 13, answer: 'Шамахинское ханство', correct: false},
                {id: 14, answer: 'Гянджа', correct: true},
                {id: 15, answer: 'Гарабахское ханство', correct: false},
                {id: 16, answer: 'Бакинское ханство', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Какое гос-ва возникло раньше остальных?', 
            answers: [
                {id: 17, answer: 'Атабеки', correct: false},
                {id: 18, answer: 'Албания', correct: false},
                {id: 19, answer: 'Атропанена', correct: false},
                {id: 20, answer: 'Манна', correct: true}
            ],
        },
        {
            id: 6, 
            question: 'Какое гос-ва просуществовало дольше остальных?', 
            answers: [
                {id: 21, answer: 'Шеддадиды', correct: false},
                {id: 22, answer: 'Раввадиды', correct: false},
                {id: 23, answer: 'Ширваншахи', correct: true},
                {id: 24, answer: 'Саджиды', correct: false}
            ],
        },
        {
            id: 7, 
            question: 'Правителем какого гос-ва был Джаваншир?', 
            answers: [
                {id: 25, answer: 'Албании', correct: true},
                {id: 26, answer: 'Атропатены', correct: false},
                {id: 27, answer: 'Сасанидского', correct: false},
                {id: 28, answer: 'Арабского халифата', correct: false}
            ],
        },
        {
            id: 8, 
            question: 'Укажите государственное образование, которого не существовало.', 
            answers: [
                {id: 29, answer: 'Турруки', correct: false},
                {id: 30, answer: 'Луллуби', correct: false},
                {id: 31, answer: 'Кути', correct: false},
                {id: 32, answer: 'Киттуби', correct: true}
            ],
        },
        {
            id: 9, 
            question: 'Что было раньше?', 
            answers: [
                {id: 33, answer: 'Неолит', correct: true},
                {id: 34, answer: 'Энеолит', correct: false},
                {id: 35, answer: 'Мезолит', correct: false},
                {id: 36, answer: 'Бронзовый век', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'Когда появился "Человек разумный"?', 
            answers: [
                {id: 37, answer: 'Верхний палеолит', correct: true},
                {id: 38, answer: 'Средний палеолит', correct: false},
                {id: 39, answer: 'Нижний палеолит', correct: false},
                {id: 40, answer: 'Мезолит', correct: false}
            ],
        },
    ],

    "Математика": [
        {
            id: 1, 
            question: 'Пример непозиционной системы счисления.', 
            answers: [
                {id: 1, answer: 'Римская', correct: true},
                {id: 2, answer: 'Десятичная', correct: false},
                {id: 3, answer: 'Двоичная', correct: false},
                {id: 4, answer: 'Шестадцатеричная', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Где записывается основание системы счисления?', 
            answers: [
                {id: 5, answer: 'В левом нижнем углу', correct: false},
                {id: 6, answer: 'В правом нижнем углу', correct: true},
                {id: 7, answer: 'В левом верхнем углу', correct: false},
                {id: 8, answer: 'В правом верхнем углу', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'Общее уравнение прямой.', 
            answers: [
                {id: 9, answer: 'Ax+By+C=0 ', correct: true},
                {id: 10, answer: 'Ax+C=0 ', correct: false},
                {id: 11, answer: 'By+C=0 ', correct: false},
                {id: 12, answer: 'Ax-By-C=0 ', correct: false}
            ],
        },
        {
            id: 4, 
            question: 'Что такое единичная матрица?', 
            answers: [
                {id: 13, answer: 'Матрица, все элементы которой, равны единице', correct: true},
                {id: 14, answer: 'Диагональная матрица, все элементы которой, равны единице', correct: false},
                {id: 15, answer: 'Квадратная матрица, все элементы которой, равны единице', correct: false},
                {id: 16, answer: 'Матрица, состоящая из одного элемента, который равен единице.', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Для чего используется формула Крамера?', 
            answers: [
                {id: 17, answer: 'Для операций над векторами', correct: false},
                {id: 18, answer: 'Для решение системных уравнений', correct: true},
                {id: 19, answer: 'Для решение уравнений', correct: false},
                {id: 20, answer: 'Для решение матриц', correct: false}
            ],
        },
        {
            id: 6, 
            question: 'Переведите число 100 в двоичную систему счисления', 
            answers: [
                {id: 21, answer: '1010001', correct: false},
                {id: 22, answer: '100110110', correct: false},
                {id: 23, answer: '100', correct: false},
                {id: 24, answer: '1100100', correct: true}
            ],
        },
        {
            id: 7, 
            question: '64ABC - число дано в шестадцатеричной системе. Переведите в двоичную', 
            answers: [
                {id: 25, answer: '1010101010111', correct: false},
                {id: 26, answer: '1100100101010111100', correct: true},
                {id: 27, answer: '110100000101100101001', correct: false},
                {id: 28, answer: '1110000101010100101', correct: false}
            ],
        },
        {
            id: 8, 
            question: '3x + 26 = -10x - найдите "х"', 
            answers: [
                {id: 29, answer: '2', correct: false},
                {id: 30, answer: '-1', correct: false},
                {id: 31, answer: '0', correct: false},
                {id: 32, answer: '-2', correct: true}
            ],
        },
        {
            id: 9, 
            question: 'Что нельзя делать с матрицами?', 
            answers: [
                {id: 33, answer: 'Делить', correct: true},
                {id: 34, answer: 'Умножать', correct: false},
                {id: 35, answer: 'Возводить в квадрат', correct: false},
                {id: 36, answer: 'Вычитать', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'A={1, 2, 3, 4} и B={2, 3, 4, 7, 8} - найдите объединение множеств', 
            answers: [
                {id: 37, answer: 'C={1, 2, 3, 4}', correct: false},
                {id: 38, answer: 'C={7, 8}', correct: false},
                {id: 39, answer: 'C={1, 2, 3, 4, 7, 8}', correct: true},
                {id: 40, answer: 'C={2, 3, 4}', correct: false}
            ],
        },
    ],

    "Интернет концепции": [
        {
            id: 1, 
            question: 'Протокол, который используется для отправки почты', 
            answers: [
                {id: 1, answer: 'SMTP', correct: true},
                {id: 2, answer: 'POP3', correct: false},
                {id: 3, answer: 'TCP', correct: false},
                {id: 4, answer: 'HTTP', correct: false}
            ],
        },
        {
            id: 2, 
            question: 'Набор правил и соглашений для обмена данными', 
            answers: [
                {id: 5, answer: 'Протокол', correct: true},
                {id: 6, answer: 'Домен', correct: false},
                {id: 7, answer: 'Wi-Fi', correct: false},
                {id: 8, answer: 'DNS', correct: false}
            ],
        },
        {
            id: 3, 
            question: 'На каком уровне находится Ethernet в модели OSI?', 
            answers: [
                {id: 9, answer: 'На первом', correct: false},
                {id: 10, answer: 'На втором', correct: false},
                {id: 11, answer: 'На третьем и пятом', correct: false},
                {id: 12, answer: 'На первом и втором', correct: true}
            ],
        },
        {
            id: 4, 
            question: 'При поиск информации в "Google", что означается оператор минус (-)?', 
            answers: [
                {id: 13, answer: 'Он ничего не делает', correct: false},
                {id: 14, answer: 'Делает так, чтоб слово стоящее после него не изменялось по падежам', correct: false},
                {id: 15, answer: 'Исключает результаты с определенными словами', correct: true},
                {id: 16, answer: 'Ищет прямое совпадение слов', correct: false}
            ],
        },
        {
            id: 5, 
            question: 'Для чего нужна "@" при указание почты? (somebody@mail.ru)', 
            answers: [
                {id: 17, answer: 'Резделяет имя пользователя и имя домена', correct: true},
                {id: 18, answer: 'Для того, чтобы мы знали, что это именно почта', correct: false},
                {id: 19, answer: 'Потому, что это уже является правилом', correct: false},
                {id: 20, answer: 'Необязатлеьно использовать именно ее, можно выбрать и другой знак', correct: false}
            ],
        },
        {
            id: 6, 
            question: 'Межсетевой уровень стека протоколов TCP/IP', 
            answers: [
                {id: 21, answer: 'Первый', correct: false},
                {id: 22, answer: 'Второй', correct: false},
                {id: 23, answer: 'Третий', correct: true},
                {id: 24, answer: 'Четвертый', correct: false}
            ],
        },
        {
            id: 7, 
            question: 'Что такое браузер?', 
            answers: [
                {id: 25, answer: 'Служба', correct: false},
                {id: 26, answer: 'Программа', correct: true},
                {id: 27, answer: 'Соц. сеть', correct: false},
                {id: 28, answer: 'Скрипт', correct: false}
            ],
        },
        {
            id: 8, 
            question: 'К какому виду сети можно отнест Интернет?', 
            answers: [
                {id: 29, answer: 'Интернет это не сеть', correct: false},
                {id: 30, answer: 'Глобальной', correct: true},
                {id: 31, answer: 'Локальной', correct: false},
                {id: 32, answer: 'Региональной', correct: false}
            ],
        },
        {
            id: 9, 
            question: 'Что не является поисковой системой?', 
            answers: [
                {id: 33, answer: 'Амазон', correct: true},
                {id: 34, answer: 'Yahoo', correct: false},
                {id: 35, answer: 'Яндекс', correct: false},
                {id: 36, answer: 'Rambler', correct: false}
            ],
        },
        {
            id: 10, 
            question: 'Структура электронного письма', 
            answers: [
                {id: 37, answer: 'Заголовок, тело', correct: false},
                {id: 38, answer: 'Конверт, тело', correct: false},
                {id: 39, answer: 'Конверт, заголовок, тело', correct: true},
                {id: 40, answer: 'Тело', correct: false}
            ],
        },
    ]
}

module.exports = question