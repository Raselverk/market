

const data = {
     phones: [
        {
            id:1,
            name: 'Xiaomi Redmi 6A 2/16GB',
            price: '2 499 грн',
            model: ' Black ',
            description:'Экран (5.45", IPS, 1440x720)/ MediaTek Helio A22 (2.0 ГГц)/ основная камера: 13 Мп, фронтальная камера: 5 Мп/ RAM 2 ГБ/ 16 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo) / 3000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/7351126/xiaomi_redmi_6a_2_16gb_black_eu_images_7351126146.jpg'
        },
        {
            id:2,
            name: 'Huawei P30 Lite 4/128GB',
            price: '8 999 грн',
            model: ' Peacock Blue',
            description:'Экран (6.15", LTPS, 2312x1080)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 48 Мп + 8 Мп + 2 Мп, фронтальная камера: 24 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (EMUI 9.0.1)/ 3340 мА*ч',
            img: 'https://i1.rozetka.ua/goods/12177867/huawei_p30_lite_4_128gb_iris_purple_images_12177867610.jpg'
        },
        {
            id:3,
            name: 'Xiaomi Mi 8 Lite 4/64GB',
            price: '5 999 грн',
            model: ' Aurora Blue',
            description:'Экран (6.26", 2280x1080)/ Qualcomm Snapdragon 660 (4x2.2 ГГц + 4x1.8 ГГц)/ двойная основная камера: 12 Мп + 5 Мп, фронтальная камера: 24 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo) / 3350 мА*ч',
            img: 'https://i1.rozetka.ua/goods/8089121/xiaomi_mi8_lite_6_64gb_dream_blue_images_8089121223.jpg'
        },
        {
            id:4,
            name: 'Huawei P smart+Black',
            price: '6 999 грн',
            model: ' +',
            description:'Экран (6.3", IPS, 2340x1080)/ HiSilicon Kirin 710 (2.2 ГГц + 1.7 ГГц)/ двойная основная камера: 16 Мп + 2 Мп, двойная фронтальная камера: 24 Мп + 2 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ A-GPS/ ГЛОНАСС/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo)/ 3340 мА*ч',
            img: 'https://i2.rozetka.ua/goods/7926541/huawei_p_smart_plus_black_images_7926541605.jpg'
        },
        {
            id:5,
            name: 'Doogee Y7 Phantom',
            price: '2 999 грн',
            model: 'Purple',
            description:'Экран (5.84", IPS, 1080х2280)/ Spreadtrum SC9863A (1.6 ГГц + 1.2 ГГц)/ основная двойная камера: 16 Мп + 13 Мп, фронтальная камера: 16 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD (до 64 ГБ)/ 3G/ LTE/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo)/ 3360 мА*ч',
            img: 'https://i1.rozetka.ua/goods/10682753/doogee_y7_phantom_purple_images_10682753420.jpg'
        },
        {
            id:6,
            name: 'Samsung Galaxy A10',
            price: '3 999 грн',
            model: '2/32GB Black',
            description:'Экран (6.2", TFT, 1520x720)/ Samsung Exynos 7884 (2x1.6 ГГц + 6x1.35 ГГц)/ основная камера: 13 Мп, фронтальная камера: 5 Мп/ RAM 2 ГБ/ 32 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 3400 мА*ч',
            img: 'https://i1.rozetka.ua/goods/11194577/samsung_galaxy_a10_2_32gb_black_images_11194577739.jpg'
        },
        {
            id:7,
            name: 'ZTE Nubia V18 4/64GB',
            price: '3 999 грн',
            model: ' Black ',
            description:'Экран (6.01" IPS, 2160x1080)/ Qualcomm Snapdragon 625 (2.0 ГГц)/ основная камера: 13 Мп, фронтальная камера: 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD/SDHC (до 128 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 7.1 (Nubia UI 5.1)/ 4000 мА*ч',
            img: 'https://i1.rozetka.ua/goods/10274381/zte_nubia_v18_464_black_images_10274381145.jpg'
        },
        {
            id:8,
            name: 'Samsung Galaxy J2 ',
            price: '2 699 грн',
            model: 'Core SM-J260 Black',
            description:'Экран (5", TFT, 960x540)/ Samsung Exynos 7570 (1.4 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 1 ГБ/ 8 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo Go Edition)/ 2600 мА*ч',
            img: 'https://i1.rozetka.ua/goods/7502941/samsung_sm_j260fzkdsek_images_7502941638.jpg'
        },
        {
            id:9,
            name: 'Samsung Galaxy S8',
            price: '5 999 грн',
            model: '64GB Midnight Black',
            description:'Экран (5.8", Super AMOLED, 2960х1440)/ Samsung Exynos 8895 (4 x 2.3 ГГц + 4 x 1.7 ГГц)/ основная камера 12 Мп + фронтальная 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 7.0 (Nougat) / 3000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/1894533/samsung_galaxy_s8_64gb_black_images_1894533392.jpg'
        },
        {
            id:10,
            name: 'Asus ZenFone Max',
            price: '7 999 грн',
            model: 'Pro (M2) 6/64GB ',
            description:'Экран (6.3", IPS, 2280x1080)/ Qualcomm Snapdragon 660 (4 x 2.2 ГГц + 4 x 1.8 ГГц)/ двойная основная камера: 12 Мп + 5 Мп, фронтальная камера: 13 Мп/ RAM 6 ГБ/ 64 ГБ встроенной памяти + microSD (до 2 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo) / 5000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/10039815/asus_90ax01b2_m00760_images_10039815029.jpg'
        },
        {
            id:11,
            name: 'Huawei P20 Pro 6/128GB',
            price: '19 999 грн',
            model: ' Black',
            description:'Экран (6.1", OLED, 2240x1080)/ HiSilicon Kirin 970 (4 ядра 2.36 ГГц + 4 ядра 1.8 ГГц)/ три основные камеры: 40 Мп + 20 Мп + 8 Мп, фронтальная камера: 24 Мп/ RAM 6 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ GLONASS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo)/ 4000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/4627071/huawei_p20_pro_6_128gb_black_images_4627071384.jpg'
        },
        {
            id:12,
            name: 'Prestigio Wize YA3',
            price: '1 099 грн',
            model: 'Black',
            description:'Экран (4", TN, 800x480)/ Spreadtrum SC7731E (1.3 ГГц)/ основная камера: 2 Мп, фронтальная камера: 2 Мп/ RAM 1 ГБ/ 8 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ GPS/ поддержка 2х SIM-карт/ Android 8.1 Oreo (Go edition)/ 1400 мА*ч',
            img: 'https://i1.rozetka.ua/goods/11376239/prestigio_wize_ya3_black_images_11376239634.jpg'
        },
        {
            id:13,
            name: 'Sigma mobile X-treme',
            price: '4 899 грн',
            model: 'PQ53 Black-Orange',
            description:'Экран (5.7", IPS, 1440x720)/ MediaTek MT6739 (1.5 ГГц)/ основная камера: 8 Мп, фронтальная камера: 8 Мп/ RAM 2 ГБ/ 16 ГБ встроенной памяти + microSD (до 128 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM) / Android 8.1 (Oreo)/ 5000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/7928657/sigma_mobile_4827798636725_images_7928657451.jpg'
        },
        {
            id:14,
            name: 'Huawei Y6 2019 Brown',
            price: '3 999 грн',
            model: ' Faux Leather',
            description:'Экран (6.09", LTPS, 1560x720)/ MediaTek MT6761 (2.0 ГГц)/ основная камера: 13 Мп, фронтальная камера: 8 Мп/ RAM 2 ГБ/ 32 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 3020 мА*ч',
            img: 'https://i1.rozetka.ua/goods/11573607/huawei_y6_2019_brown_faux_leather_images_11573607260.jpg'
        },
        {
            id:15,
            name: 'ZTE Blade V10 Vita ',
            price: '3 499 грн',
            model: '2/32GB Black',
            description:'Экран (6.26", IPS, 1520x720)/ Spreadtrum SC9863A (4 x 1.6 ГГц + 4 x 1.2 ГГц)/ двойная основная камера: 13 Мп + 2 Мп, фронтальная камера: 8 Мп/ RAM 2 ГБ/ 32 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 3200 мА*ч',
            img: 'https://i1.rozetka.ua/goods/12313084/zte_blade_v10_vita_2_32gb_black_images_12313084238.jpg'
        },
        {
            id:16,
            name: 'iPhone 7 Plus Rose Gold',
            price: '15 900 грн',
            model: '128Gb',
            description:'Стандарт связи	3G (WCDMA/UMTS)2G (EDGE)4G (LTE)Диагональ экрана	5.5Разрешение дисплея	FullHD (1920x1080) Тип матрицы	IPS Размеры СИМ-карты	Nano-SIM Операционная система	iOSКоличество мегапикселей фронтальной камеры	7 МпНазвание	Apple A10 Материал корпуса	Алюминий + стеклоGPS	Есть',
            img: 'https://i2.rozetka.ua/goods/12119386/84769602_images_12119386240.jpg'
        },
        {
            id:17,
            name: 'Apple iPhone Xs Max ',
            price: '33 099 грн',
            model: '256GB Space Gray',
            description:'Экран (6.5", OLED (Super Retina HD), 2688x1242)/ Apple A12 Bionic/ основная камера: двойная 12 Мп, фронтальная камера: 7 Мп/ RAM 4 ГБ/ 256 ГБ встроенной памяти/ 3G/ LTE/ GPS/ Nano-SIM/ iOS 12',
            img: 'https://i1.rozetka.ua/goods/7375183/apple_iphone_xs_max_256_gb_space_gray_images_7375183704.jpg'
        },
        {
            id:18,
            name: 'Sony Xperia 10 Plus',
            price: '11 499 грн',
            model: 'Dual Black',
            description:'Экран (6.5", IPS, 2520x1080)/ Qualcomm Snapdragon 636 (1.8 ГГц)/ основная двойная камера: 12 Мп + 8 Мп, фронтальная камера: 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 3000 мА*ч',
            img: 'https://i2.rozetka.ua/goods/11321939/sony_xperia_10_plus_dual_black_images_11321939550.jpg'
        }
    ],
     tv: [
        {
            id:19,
            name: 'Телевизор Philips FHD',
            price: '6 399 грн',
            model: '32PFS4132/12',
            description:'Диагональ экрана: 32"Разрешение: 1920x1080 Smart-платформа: Нет Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 Частота развертки панели: 50 Гц Страна регистрации бренда: Нидерланды',
            img: 'https://i2.rozetka.ua/goods/10929514/philips_32pfs4132_12_images_10929514797.jpg'
        },
        {
            id:20,
            name: 'Телевизор LG 24MT49S-PZ',
            price: '5 999 грн',
            model: 'Smart-tv',
            description:'Диагональ экрана: 24" Разрешение: 1366x768 Smart-платформа: WebOS 3.5 Диапазоны цифрового тюнера: DVB-C, DVB-S2, DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Корея',
            img: 'https://i1.rozetka.ua/goods/10762672/lg_24mt49s_pz_images_10762672690.jpg'
        },
        {
            id:21,
            name: 'Телевизор  EU32DT200',
            price: '3 399 грн',
            model: 'Aiwa 32", HD, T2',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: Нет Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Китай',
            img: 'https://i1.rozetka.ua/goods/12186017/aiwa_eu32dt200_images_12186017667.jpg'
        },
        {
            id:22,
            name: 'Телевизор LG 32LK615BPLB',
            price: '8 499 грн',
            model: '2 ТВ-тюнера ',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: WebOS 4.0 Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 Частота развертки панели: 100 Гц Страна регистрации бренда: Корея',
            img: 'https://i2.rozetka.ua/goods/9025349/lg_32lk615bplb_images_9025349324.jpg'
        },
        {
            id:23,
            name: 'Телевизор Hisense ',
            price: '7 999 грн',
            model: 'H43A6100 4K, 43"',
            description:'Диагональ экрана: 43" Разрешение: 3840x2160 Smart-платформа: VIDAA U2.5 Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Китай',
            img: 'https://i1.rozetka.ua/goods/4700740/hisense_h43a6100__images_4700740672.jpg'
        },
        {
            id:24,
            name: 'Телевизор Akai UA43EK1100US',
            price: '7 499 грн',
            model: '4K smart',
            description:'Диагональ экрана: 43" Разрешение: 3840x2160 Smart-платформа: Android Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Китай',
            img: 'https://i2.rozetka.ua/goods/9161512/akai_ua43ek1100us_images_9161512855.jpg'
        },
        {
            id:25,
            name: 'Телевизор Kivi 32HB50GU',
            price: '4 444 грн',
            model: 'GR Gray',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: Нет Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-T2 Частота обновления: 60 Гц (MEMC) Частота развертки панели: 60 Гц Страна регистрации бренда: Украина',
            img: 'https://i2.rozetka.ua/goods/7243484/kivi_32hb50gu_images_7243484256.jpg'
        },
        {
            id:26,
            name: 'Телевизор Sony KD-55XE7096',
            price: '18 999 грн',
            model: 'Black',
            description:'Диагональ экрана: 55" Разрешение: 3840x2160 Smart-платформа: Sony Smart TV Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 Частота обновления: 400 Гц (MotionFlow) Частота развертки панели: 50 Гц Страна регистрации бренда: Япония',
            img: 'https://i2.rozetka.ua/goods/10319717/sony_kd55xe7096br2_images_10319717535.jpg'
        },
        {
            id:27,
            name: 'Телевизор Hisense ',
            price: '4 444 грн',
            model: '32N2170HW Smart tv',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: VIDAA Lite 2.0 Диапазоны цифрового тюнера: DVB-T, DVB-S2, DVB-T2 Частота развертки панели: 50 Гц Страна регистрации бренда: Китай',
            img: 'https://i1.rozetka.ua/goods/10339677/hisense_32n2170hw_images_10339677080.jpg'
        },
        {
            id:28,
            name: 'Телевизор Samsung ',
            price: '40 499 грн',
            model: 'QE55Q6FNAUXUA',
            description:'Диагональ экрана: 55" Разрешение: 3840x2160 Smart-платформа: Tizen Диапазоны цифрового тюнера: DVB-C, DVB-S2, DVB-T2 Частота обновления: 2800 Гц (PQI) Страна регистрации бренда: Корея',
            img: 'https://i1.rozetka.ua/goods/8934379/samsung_qe55q6fnauxua_images_8934379711.jpg'
        },
        {
            id:29,
            name: 'Телевизор Philips ',
            price: '12 999 грн',
            model: '43PUS6703',
            description:'Диагональ экрана 43" Поддержка Smart TV Есть Разрешение 3840x2160 Wi-Fi Да Smart-платформа Philips Smart TV Страна-производитель Польша ТВ-тюнер 2 ТВ-тюнера (аналоговый + цифровой) Диапазоны цифрового тюнера DVB-T DVB-C DVB-S DVB-S2 DVB-T2 Цвет Grey HDR Есть Частота обновления 1100 Гц (PPI) Процессор изображения Pixel Precise UHD Частота развертки панели 50 Гц Аудиосистема Выходная мощность (среднеквадр.): 20 Вт Incredible Surround Clear Sound Авторегулировка громкости Функция Smart Sound Страна регистрации бренда Нидерланды',
            img: 'https://i2.rozetka.ua/goods/10929505/philips_43pus6703_12_images_10929505521.jpg'
        },
        {
            id:30,
            name: 'Телевизор Samsung ',
            price: '12 599 грн',
            model: 'UE32M5500',
            description:'Диагональ экрана: 32" Разрешение: 1920x1080 Smart-платформа: Tizen Диапазоны цифрового тюнера: DVB-C, DVB-S2, DVB-T2 Частота обновления: 500 Гц (PQI) Частота развертки панели: 50 Гц Страна регистрации бренда: Корея',
            img: 'https://i2.rozetka.ua/goods/8089440/samsung_ue32m5500auxua_images_8089440309.jpg'
        },
        {
            id:31,
            name: 'Телевизор LG 55SK8100',
            price: '29 599 грн',
            model: 'PLA',
            description:'Диагональ экрана: 55" Разрешение: 3840x2160 Smart-платформа: WebOS 4.0 Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 Частота развертки панели: 200 Гц Страна регистрации бренда: Корея',
            img: 'https://i2.rozetka.ua/goods/10320696/lg_55sk8100pla_images_10320696489.jpg'
        },
        {
            id:32,
            name: 'Телевизор Akai UA32DM1100S',
            price: '3 959 грн',
            model: 'SMART, T2',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: Android Диапазоны цифрового тюнера: DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Китай',
            img: 'https://i2.rozetka.ua/goods/10320993/akai_ua32dm1100s_images_10320993645.jpg'
        },
        {
            id:33,
            name: 'Телевизор Mirta ',
            price: '3 899 грн',
            model: '32" LD-32T2HDS',
            description:'Диагональ экрана: 32" Разрешение: 1366x768 Smart-платформа: Android 7.1 Диапазоны цифрового тюнера: DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Украина',
            img: 'https://i1.rozetka.ua/goods/11557615/mirta_ld32t2hds_images_11557615184.jpg'
        },
        {
            id:34,
            name: 'Телевизор Ergo 50DU5502',
            price: '9 999 грн',
            model: 'Smart tv',
            description:'Диагональ экрана: 50" Разрешение: 3840x2160 Smart-платформа: Android 7.1 Диапазоны цифрового тюнера: DVB-C, DVB-S, DVB-S2, DVB-T2 Частота развертки панели: 60 Гц Страна регистрации бренда: Украина',
            img: 'https://i2.rozetka.ua/goods/11244665/ergo_50du5502_images_11244665538.jpg'
        },
        {
            id:35,
            name: 'Телевизор Panasonic',
            price: '35 880 грн',
            model: ' TX-65FXR600',
            description:'Диагональ экрана: 65" Разрешение: 3840x2160 Smart-платформа: My Home Screen 3.0 Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S2, DVB-T2 Частота обновления: 1300 Гц (BMR) Частота развертки панели: 60 Гц Страна регистрации бренда: Япония',
            img: 'https://i2.rozetka.ua/goods/4736748/panasonic_tx_65fxr600_images_4736748704.jpg'
        },
        {
            id:36,
            name: 'Телевизор Kivi 55UC50GU ',
            price: '19 999 грн',
            model: 'Gray',
            description:'Диагональ экрана: 55" Разрешение: 3840x2160 Smart-платформа: Android 7.0 Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-T2 Частота обновления: 800 Гц (MEMC) Страна регистрации бренда: Украина',
            img: 'https://i2.rozetka.ua/goods/10340867/kivi_55uc50gu_images_10340867762.jpg'
        }
    ],
     pad: [
        {
            id:37,
            name: 'Планшет Prestigio Wize ',
            price: '2 199 грн',
            model: '3G 16GB Black',
            description:'Экран 10.1" IPS (1280x800) MultiTouch / MediaTek MT8321 (1.2 ГГц) / RAM 1 ГБ / 16 ГБ встроенной памяти + поддержка карт памяти microSD (до 64 ГБ) / 3G / Wi-Fi / Bluetooth / основная камера 2 Мп, фронтальная - 0.3 Мп / GPS / Android 8.1 (Oreo) / 500 г / черный',
            img: 'https://i1.rozetka.ua/goods/10659854/prestigio_pmt3771_3g_d_images_10659854714.jpg'
        },
        {
            id:38,
            name: 'Планшет Pixus 4G ',
            price: '3 999 грн',
            model: '3/32GB',
            description:'Экран 10.1" IPS (1920x1200) MultiTouch / MediaTek MT6753 (1.3 ГГц) / RAM 3 ГБ / 32 ГБ встроенной памяти + microSD / 3G / LTE / Wi-Fi / Bluetooth 4.0 / основная камера 5 Мп, фронтальная - 2 Мп / GPS / A-GPS / поддержка 2-х СИМ-карт / Android 7.0 (Nougat) / 450 г / черный',
            img: 'https://i1.rozetka.ua/goods/3855973/pixus_vision_10_1_3g_3_32g_images_3855973544.jpg'
        },
        {
            id:39,
            name: 'Планшет Huawei',
            price: '4 999 грн',
            model: 'MediaPad T3 8"',
            description:'Экран 8.0" IPS (1280x800) MultiTouch / Qualcomm Snapdragon 425 (1.4 ГГц) / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD / 3G / LTE / Wi-Fi / Bluetooth / основная камера 5 Мп, фронтальная 2 Мп / GPS / Android 7.0 (Nougat) / 350 г / золотистый',
            img: 'https://i2.rozetka.ua/goods/10318874/huawei_mediapad_t3_8_lte_gold_images_10318874475.jpg'
        },
        {
            id:40,
            name: 'Планшет Samsung',
            price: '7 999 грн',
            model: 'Galaxy Tab A 10.1 ',
            description:'Экран 10.1" (1920x1080) емкостный MultiTouch / Samsung Exynos 7904 (2x1.8 ГГц + 6x1.6 ГГц) / RAM 2 ГБ / 32 ГБ встроенной памяти + microSD / 3G / LTE / Wi-Fi / Bluetooth 5.0 / основная камера 8 Мп, фронтальная - 5 Мп / GPS / ГЛОНАСС / Android 9.0 (Pie) / 470 г / черный',
            img: 'https://i1.rozetka.ua/goods/12161534/samsung_sm_t515nzkdsek_images_12161534788.jpg'
        },
        {
            id:41,
            name: 'Планшет Lenovo',
            price: '3 399 грн',
            model: 'Tab 7 Essential',
            description:'Экран 7" IPS (1024х600), MultiTouch / MediaTek MT8167D (1.3 ГГц) / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD / Wi-Fi / 3G / Bluetooth 4.0 / основная камера 2 Мп + фронтальная - 2 Мп / A-GPS / Android 7.0 (Nougat) / 254 г / черный',
            img: 'https://i1.rozetka.ua/goods/2694275/copy_lenovo_tab4_za310064ua_5a6ae71913ad2_images_2694275743.jpg'
        },
        {
            id:42,
            name: 'Планшет Huawei',
            price: '3 499 грн',
            model: 'MediaPad T3 7"',
            description:'Экран 7.0" IPS (1024x600) MultiTouch / Spreadtrum SC7731G (1.3 ГГц) / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD / 3G / Wi-Fi / Bluetooth / основная камера 2 Мп, фронтальная 2 Мп / GPS / Android 7.0 (Nougat) / 275 г / золотистый',
            img: 'https://i2.rozetka.ua/goods/10466535/huawei_bg2_u01_2_16_gold_images_10466535704.jpg'
        },
        {
            id:43,
            name: 'Планшет Asus 8.0',
            price: '2 999 грн',
            model: 'ZenPad ',
            description:'Экран 8" IPS (1280x800) емкостный MultiTouch / MediaTek MT8163 (1.3 ГГц) / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD / Wi-Fi 802.11 a/b/g/n / Bluetooth 4.0 / основная камера 5 Мп, фронтальная - 2 Мп / GPS / ОС Android 6.0 / 350 г / розово-золотистый',
            img: 'https://i1.rozetka.ua/goods/1741174/asus_z380m_6l027a_images_1741174390.jpg'
        },
        {
            id:44,
            name: 'Apple iPad New 128Gb',
            price: '10 675 грн',
            model: ' Space Grey ',
            description:'Страна-производитель товара Китай Вид экрана Емкостный Диагональ экрана 9.7" Оперативная память 2 ГБ Беспроводные возможности Wi-Fi Bluetooth Операционная система iOS Встроенная память 128 ГБ Разрешение экрана 2048x1536 Количество ядер 4 Навигационная система Нет Тип матрицы IPS Процессор Apple A10 Fusion Тыловая камера 8 Мп Фронтальная камера 1.2 Мп',
            img: 'https://i1.rozetka.ua/goods/4743465/42607704_images_4743465880.jpg'
        },
        {
            id:45,
            name: 'Asus ZenPad Dark Gray',
            price: '2 425 грн',
            model: '10',
            description:'Вид экрана Емкостный Диагональ экрана 10.1" Оперативная память 2 ГБ Беспроводные возможности Wi-Fi Bluetooth Операционная система Android 6.0 Встроенная память 16 ГБ Разрешение экрана 1280x800 Количество ядер 4 Навигационная система GPS Тип матрицы IPS Процессор MediaTek MT8163 (1.3 ГГц) Тыловая камера 5 Мп',
            img: 'https://i2.rozetka.ua/goods/8691842/61470001_images_8691842157.jpg'
        },
        {
            id:46,
            name: 'Планшет Hoozo Silver',
            price: '3 199 грн',
            model: 'MT232 ',
            description:'Страна-производитель товара Китай Вид экрана Емкостный Диагональ экрана 10.1" Оперативная память 2 ГБ Беспроводные возможности Wi-Fi Операционная система Android 6.0 Встроенная память 32 ГБ Разрешение экрана 1280x800 Количество ядер 4 Навигационная система GPS Тип матрицы IPS Процессор MediaTek MT6580 (1.3 ГГц) Тыловая камера 5 Мп',
            img: 'https://i1.rozetka.ua/goods/12003158/63439108_images_12003158010.jpg'
        },
        {
            id:47,
            name: 'Планшет Apple iPad',
            price: '47 519 грн',
            model: '1TB Silver 2018 ',
            description:'Экран 12.9" IPS (2732x2048) емкостный MultiTouch / Apple A12X Bionic / RAM 6 ГБ / 1 ТБ встроенной памяти / Wi-Fi / Bluetooth 5.0 / основная камера 12 Мп, фронтальная - 7 Мп / iOS 12 / 631 г / серебристый',
            img: 'https://i2.rozetka.ua/goods/9372712/apple_mtft2_images_9372712398.jpg'
        },
        {
            id:48,
            name: 'Планшет Lenovo Tab',
            price: '4 999 грн',
            model: '16GB Slate Black',
            description:'Экран 8" (1280х800) IPS, емкостный MultiTouch / Qualcomm Snapdragon 425 (1.4 ГГц) / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth 4.0 / 3G / LTE/ основная камера 5 Мп + фронтальная 2 Мп / GPS/ Android 7.0 (Nougat)/ 310 г / черный',
            img: 'https://i2.rozetka.ua/goods/2103625/lenovo_tab4_zad0030ua_images_2103625965.jpg'
        },
        {
            id:49,
            name: 'Планшет Lenovo',
            price: '9 499 грн',
            model: 'IdeaPad Miix 320',
            description:'Экран 10.1" IPS (1920x1200) MultiTouch / Intel Atom X5-Z8350 (1.44 - 1.92 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth 4.2 / основная камера 5 Мп, фронтальная камера 2 Мп / Windows 10 Home / 550 г / серебристый / клавиатура',
            img: 'https://i2.rozetka.ua/goods/2025045/lenovo_80xf0076ra_images_2025045683.jpg'
        },
        {
            id:50,
            name: 'Планшет CONTIXO',
            price: '4 099 грн',
            model: 'K109 4G 10.1"',
            description:'Вид экрана Емкостный Диагональ экрана 10.1" Оперативная память 3 ГБ Беспроводные возможности Wi-Fi Bluetooth 3G (UMTS)3G (UMTS) 4G (LTE) Операционная система Android 7.0 Встроенная память 32 ГБ Разрешение экрана 1920х1200 Количество ядер 4 Навигационная система GPS Тип матрицы IPS Процессор Mediatek MT6753 (1.5 ГГц) Тыловая камера 8 Мп',
            img: 'https://i2.rozetka.ua/goods/11679752/81153243_images_11679752151.jpg'
        },
        {
            id:51,
            name: 'Планшет Lesko Black',
            price: '1 599 грн',
            model: '16 GB ',
            description:'Вид экрана Емкостный Диагональ экрана 7" Оперативная память 1 ГБ Беспроводные возможности 3G (UMTS)3G (UMTS) Операционная система Android 6.0 Встроенная память 16 ГБ Разрешение экрана 1024x600 Количество ядер 4 Навигационная система GPS Тип матрицы IPS Процессор MediaTek MT6580 (1.2 ГГц) Тыловая камера 0.3 Мп Фронтальная камера 2 Мп',
            img: 'https://i1.rozetka.ua/goods/10205658/67881017_images_10205658303.jpg'
        },
        {
            id:52,
            name: 'Hoozo X1001 32Gb',
            price: '3 899 грн',
            model: 'Full HD ',
            description:'Страна-производитель товара Китай Вид экрана Емкостный Диагональ экрана 10.1" Оперативная память 2 ГБ Беспроводные возможности Wi-Fi Операционная система Android 7.0 Встроенная память 32 ГБ Разрешение экрана 1920х1200 Количество ядер 8 Навигационная система GPS Тип матрицы IPS Процессор Mediatek MT6753 (1.5 ГГц) Тыловая камера 8 Мп',
            img: 'https://i1.rozetka.ua/goods/12003164/81383691_images_12003164196.jpg'
        },
        {
            id:53,
            name: 'Планшет Mystery',
            price: '1 349 грн',
            model: 'MID-703G',
            description:'Экран 7" (800х480) емкостный, MultiTouch / Mediatek MT8312 (1.3 ГГц) / RAM 512 МБ / 4 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth / основная камера 2 Мп, фронтальная 0.3 Мп / 3G / GPS / Android 4.2 (Jelly Bean)',
            img: 'https://i1.rozetka.ua/goods/186932/mystery_mid-703g_images_186932057.jpg'
        },
        {
            id:54,
            name: 'Планшет Samsung',
            price: '18 999 грн',
            model: 'Galaxy Tab S5e 10.5',
            description:'Экран 10.5" Super AMOLED (2560x1600) емкостный MultiTouch / Qualcomm Snapdragon 670 (2x2.0 ГГц + 6x1.7 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / 3G / 4G / Wi-Fi / Bluetooth 5.0 / основная камера 13 Мп, фронтальная - 8 Мп / GPS / ГЛОНАСС / Android 9.0 (Pie) / 400 г / черный',
            img: 'https://i2.rozetka.ua/goods/11943355/samsung_sm_t725nzkasek_images_11943355500.jpg'
        }
    ],
     photo: [
        {
            id:55,
            name: 'Canon EOS 800D ',
            price: '16 815 грн',
            model: '18-55mm IS STM',
            description:'Запись видео Full HD (1920x1080) Матрица фотоаппарата 22.3 x 14.9 мм CMOS Эффективные пиксели: Прибл. 24.2 мегапикселя Общее количество пикселей: Прибл. 25.8 мегапикселя Соотношение сторон: 3:2 Светочувствительность Авто (100-25600), 100-25600 (при шаге 1/3 ступени или целая ступень) Доступно расширение ISO до H: 51200 Во время съемки видео: Авто (100–12800), 100–12800 (при шаге 1/3 ступени или целая ступень) чувствительность ISO может быть расширена до H: 25600 Объектив Совместимость со всеми объективами EF, EF-S',
            img: 'https://i1.rozetka.ua/goods/1981385/canon_eos_1895c019_images_1981385066.jpg'
        },
        {
            id:56,
            name: 'Canon EOS 77D Black',
            price: '19 669 грн',
            model: '18-140mm ',
            description:'Матрица CMOS 22.3 x 14.9 мм, 24.2 Мп / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3" / Full HD-видео / Wi-Fi / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 540 г (с объективом)',
            img: 'https://i1.rozetka.ua/goods/2350438/canon_1892c020aa_images_2350438097.jpg'
        },
        {
            id:57,
            name: 'Nikon D5600 AF-S',
            price: '29 999 грн',
            model: '18-140mm f/3.5-5.6G',
            description:'Матрица 23.5 x 15.6 мм, 24.2 Мп / объектив 18-140mm f/3.5-5.6G VR / Зум: 0.82х / поддержка карт памяти SD/SDHC/SDXC / ЖК-дисплей 3.2" / Full HD-видео / питание от литий-ионного аккумулятора / 124 x 97 x 167 мм, 955 г / черный',
            img: 'https://i2.rozetka.ua/goods/1990028/copy_nikon_vba500k001_58f9f1f7002b6_images_1990028030.jpg'
        },
        {
            id:58,
            name: 'Canon EOS 200D',
            price: '17 999 грн',
            model: 'Kit 18-55 DC III',
            description:'Матрица 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-55mm f/3.5-5.6 DC III / Зум: 3.1х (оптический) / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3" / Full HD-видео / питание от литий-ионного аккумулятора / 122.4 x 92.6 x 138.3 мм, 653 г / черный',
            img: 'https://i2.rozetka.ua/goods/2304813/canon_2250c014_images_2304813361.jpg'
        },
        {
            id:59,
            name: 'Nikon D5600 AF-P',
            price: '24 499 грн',
            model: '3.5-5.6G VR Black',
            description:'Матрица 23.5 x 15.6 мм, 24.2 Мп / объектив 18-55mm f/3.5-5.6G VR / Зум: 0.82х / поддержка карт памяти SD/SDHC/SDXC / ЖК-дисплей 3.2" / Full HD-видео / питание от литий-ионного аккумулятора / 124 x 97 x 133 мм, 660 г / черный',
            img: 'https://i2.rozetka.ua/goods/1989478/copy_nikon_vba490k002_58f9df8d7314b_images_1989478166.jpg'
        },
        {
            id:60,
            name: 'Canon EOS 800D',
            price: '18 530 грн',
            model: 'Black (1895C017)',
            description:'Матрица 22.3 x 14.9 мм, 24.2 Мп / поддержка карт памяти SD/SDHC/SDXC / Сенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 532 г',
            img: 'https://i1.rozetka.ua/goods/1987103/copy_canon_1895c019_58f98fc1a8715_images_1987103336.jpg'
        },
        {
            id:61,
            name: 'Nikon D7200 18-140mm',
            price: '34 999 грн',
            model: 'VR Kit ',
            description:'Матрица 23.5 х 15.6 мм, 24.2 Мп / AF-S DX Nikkor 18-140mm VR / Зум: 7.8х / поддержка карт памяти SD/SDHC/SDXC / ЖК-дисплей 3.2" / FullHD-видео / Wi-Fi / NFC / питание от литий-ионного аккумулятора / 135.5 x 106.5 x 173 мм, 1165 г',
            img: 'https://i2.rozetka.ua/goods/925176/nikon_d7200_18_140mm_vr_images_925176222.jpg'
        },
        {
            id:62,
            name: 'Canon EOS 5D Mark',
            price: '89 999 грн',
            model: 'IV 24-105',
            description:'Матрица 36 x 24 мм, 30.4 Мп / объектив 24-105 L IS II USM / поддержка карт памяти CompactFlash Type I, SD, SDHC, SDXC (UHS-I) / LCD-дисплей 3.2" / 4K-видео / питание от литий-ионного аккумулятора / 150.7 x 116.4 x 193.9 мм, 1595 г (с объективом) / черный',
            img: 'https://i1.rozetka.ua/goods/2030524/canon_1483c030_images_2030524794.jpg'
        },
        {
            id:63,
            name: 'Canon EOS 800D',
            price: '14 999 грн',
            model: 'Kit 18-55 mm',
            description:'Матрица 22.3 x 14.9 мм, 24.2 Мп / объектив EF-S 18-55mm f/3.5-5.6 IS STM / поддержка карт памяти SD/SDHC/SDXC / Сенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 151.4 x 99.9 мм, 737 г',
            img: 'https://i1.rozetka.ua/goods/11953934/canon_eos_800d_kit_18_55_rebel_t7i_images_11953934646.jpg'
        },
        {
            id:64,
            name: 'Sony Alpha ILCA-68',
            price: '20 999 грн',
            model: '18-55mm Kit ',
            description:'Матрица 23.2 x 15.4 мм, 20.1 Мп / объектив Sony 18-55 мм / Зум: 3.05х (оптический), 4х (цифровой) / поддержка карт памяти MS PRO Duo/MS PRO-HG Duo/MS XC-HG Duo/SD/SDHC/SDXC / поворотный LCD-дисплей 2.7" / FullHD-видео / питание от литий-ионного аккумулятора / 128.6 x 95.5 x 146.7 мм, 785 г',
            img: 'https://i2.rozetka.ua/goods/1538383/sony_ilca68k_cec_images_1538383792.jpg'
        },
        {
            id:65,
            name: 'Canon EOS 200D Kit',
            price: '22 999 грн',
            model: '18-55 IS STM',
            description:'Матрица 22.3 x 14.9 мм, 24.2 Мп / Объектив 18-55mm IS STM / Зум: 0.87х (оптический) / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3" / Full HD-видео / питание от литий-ионного аккумулятора / 122.4 x 92.6 x 69.8 мм, 456 г / белый',
            img: 'https://i1.rozetka.ua/goods/2177940/canon_2253c007_images_2177940150.jpg'
        },
        {
            id:66,
            name: 'Canon EOS 700D',
            price: '18 121 грн',
            model: '18-55mm STM',
            description:'Матрица 23.5 x 15.6 мм, 24.2 Мп / объектив 18-55mm f/3.5-5.6G VR + AF-P DX Nikkor 70-300mm f/4.5-6.3G ED VR / Зум: 0.82х / поддержка карт памяти SD/SDHC/SDXC / ЖК-дисплей 3.2" / Full HD-видео / питание от литий-ионного аккумулятора / 124 x 97 x 133 мм, 660 г / черный',
            img: 'https://i2.rozetka.ua/goods/1587217/copy_cnn_eoz80d_buddy_57342fbbe8423_images_1587217657.jpg'
        },
        {
            id:67,
            name: 'Panasonic DMC-G9',
            price: '5 321 грн',
            model: 'CF Black',
            description:'Запись видео UHD 4K (3840x2160) Питание Работа от аккумулятора Вес (грамм) 579 г (без батареи и карты памяти) 658 г (с SD-картой и батареей) Гарантия 36 месяцев',
            img: 'https://i1.rozetka.ua/goods/7335193/53759226_images_7335193476.jpg'
        },
        {
            id:68,
            name: 'Canon EOS 4000D',
            price: '9 999 грн',
            model: 'BK 18-55',
            description:'Матрица 22.3 x 14.9 мм, 18 Мп / объектив 18-55 мм III / Зум: 3х (оптический) / поддержка карт памяти SD/SDHC/SDXC / 2.7" ЖК-экран / Full HD-видео / Wi-Fi / питание от литиево-ионного аккумулятора / 129 x 101.6 x 77.1 мм, 436 г (только корпус) / черный',
            img: 'https://i2.rozetka.ua/goods/4379061/canon_3011c004aa_images_4379061912.jpg'
        },
        {
            id:69,
            name: 'Canon EOS 5D Kit Black',
            price: '12 997 грн',
            model: '3.5-5.6G ',
            description:'Матрица 36 x 24 мм, 30.4 Мп / поддержка карт памяти CompactFlash Type I, SD, SDHC, SDXC (UHS-I) / LCD-дисплей 3.2" / 4K-видео / питание от литий-ионного аккумулятора / 150.7 x 116.4 x 75.9 мм, 800 г (только корпус) / черный',
            img: 'https://i1.rozetka.ua/goods/2030550/canon_1483c027_images_2030550294.jpg'
        },
        {
            id:70,
            name: 'Nikon D5300 +AF-P',
            price: '16 999 грн',
            model: ' 18-55mm',
            description:'Матрица 23.5 x 15.6 мм, 24.2 Мп / объектив Nikon AF-P DX Nikkor 18-55mm f/3.5-5.6G VR / Зум: 3х (оптический) / поддержка карт памяти SD/SDHC/SDXC / поворотный LCD-дисплей 3" / FullHD-видео / питание от литий-ионного аккумулятора / 125 х 155.5 х 98 мм, 740 г',
            img: 'https://i1.rozetka.ua/goods/1540123/copy_nikon_d5300_18-55mm_vr_ii_kit_570fb44ca9882_images_1540123677.jpg'
        },
        {
            id:71,
            name: 'Canon EOS 77D EF-S',
            price: '21 999 грн',
            model: '18-55mm',
            description:'Матрица CMOS 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-55mm IS STM / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3" / Full HD-видео / Wi-Fi / питание от литий-ионного аккумулятора / 131 x 138 x 99.9 мм, 755 г (с объективом)',
            img: 'https://i1.rozetka.ua/goods/2350364/canon_1892c022aa_images_2350364545.jpg'
        },
        {
            id:72,
            name: 'Canon EOS 77D EF-S ',
            price: '24 399 грн',
            model: '18-135mm',
            description:'Матрица CMOS 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-135mm IS USM / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3" / Full HD-видео / Wi-Fi / питание от литий-ионного аккумулятора / 131 x 172.2 x 99.9 мм, 1055 г (с объективом)',
            img: 'https://i2.rozetka.ua/goods/1980508/canon_1892c024_images_1980508892.jpg'
        }
    ],
     laptop: [
        {
            id:73,
            name: 'Ноутбук Asus Black',
            price: '18 999 грн',
            model: 'X560UD-EJ443 ',
            description:'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i5-8250U (1.6 - 3.4 ГГц) / RAM 6 ГБ / 1 ТБ + 8 ГБ SSHD / nVidia GeForce GTX 1050, 2 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / Endless OS / 1.97 кг / черный',
            img: 'https://i2.rozetka.ua/goods/12300520/asus_90nb0ip1_m07110_images_12300520718.jpg'
        },
        {
            id:74,
            name: 'Ноутбук HP 250 G6',
            price: '11 399 грн',
            model: 'Dark Ash',
            description:'Экран 15.6” SVA (1920x1080) Full HD, матовый / Intel Core i3-7020U (2.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ / Intel HD Graphics 620 / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.86 кг / черный',
            img: 'https://i1.rozetka.ua/goods/10175861/hp_5pp08ea_images_10175861440.jpg'
        },
        {
            id:75,
            name: 'Ноутбук Lenovo IdeaPad',
            price: '6 999 грн',
            model: '330-15IGM',
            description:'Экран 15.6" (1366x768) WXGA HD, матовый / Intel Celeron N4000 (1.1 - 2.6 ГГц) / RAM 4 ГБ / SSD 128 ГБ / Intel UHD Graphics 600 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.2 кг / черный',
            img: 'https://i1.rozetka.ua/goods/5654663/copy_lenovo_81d100hgra_5b44b6a1e8417_images_5654663576.jpg'
        },
        {
            id:76,
            name: 'Ноутбук HP Notebook',
            price: '6 199 грн',
            model: '15-rb028ur',
            description:'Экран 15.6” SVA (1366x768) HD, матовый / AMD A4-9120 (2.2 - 2.5 ГГц) / RAM 4 ГБ / HDD 500 ГБ / AMD Radeon R3 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.1 кг / черный',
            img: 'https://i2.rozetka.ua/goods/12186305/copy_hp_2hq87ea_5cd9245c99901_images_12186305181.jpg'
        },
        {
            id:77,
            name: 'Ноутбук Dell Inspiron',
            price: '9 499 грн',
            model: '15 3567 ',
            description:'Экран 15.6" (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i3-7020U (2.3 ГГц) / RAM 4 ГБ / HDD 1 ТБ / Intel HD Graphics 620 / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / Linux / 2.3 кг / черный',
            img: 'https://i2.rozetka.ua/goods/6999326/copy_dell_inspiron_3567_i315f54h10dil_7bk_5b85a3d6db769_images_6999326520.jpg'
        },
        {
            id:78,
            name: 'Ноутбук Acer Aspire',
            price: '10 399 грн',
            model: 'E 15 E5-576',
            description:'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i3-7020U (2.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ / Intel HD Graphics 620 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Linux / 2.4 кг / черный',
            img: 'https://i1.rozetka.ua/goods/10622230/copy_acer_nx_gvbeu_066_5c503a62265bc_images_10622230292.jpg'
        },
        {
            id:79,
            name: 'Ноутбук Dell Inspiron',
            price: '26 499 грн',
            model: 'G3 17 3779',
            description:'Экран 17.3" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i5-8300H (2.3 - 4.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Linux / 3.27 кг / черный',
            img: 'https://i1.rozetka.ua/goods/8345836/copy_dell_37g3i58s1h1g15_lbk_5bd843a4d4cc8_images_8345836030.jpg'
        },
        {
            id:80,
            name: 'Ноутбук Lenovo Legion',
            price: '25 499 грн',
            model: 'Y530-15ICH ',
            description:'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-8300H (2.3 - 4.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.3 кг / черный',
            img: 'https://i1.rozetka.ua/goods/7040380/copy_lenovo_legion_y530_15ich_81fv00lsra_5b87bb7a75b9d_images_7040380764.jpg'
        },
        {
            id:81,
            name: 'Ноутбук ASUS VivoBook',
            price: '17 299 грн',
            model: '15 X542UF-DM273',
            description:'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i3-8130U (2.2 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX130, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Endless OS / 2.3 кг / темно-серый',
            img: 'https://i2.rozetka.ua/goods/4731912/copy_asus_x542uf_dm272_5b1527aed83a6_images_4731912648.jpg'
        },
        {
            id:82,
            name: 'Ноутбук Asus TUF',
            price: '26 999 грн',
            model: 'FX705GE-EW118',
            description:'Экран 17.3" IPS (1920x1080) Full HD, матовый / Intel Core i5-8300H (2.3 - 4.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.7 кг / черный',
            img: 'https://i1.rozetka.ua/goods/11197099/copy_asus_90nr0112_m01520_5c792465d92e3_images_11197099545.jpg'
        },
        {
            id:83,
            name: 'Ноутбук HP 250 G6',
            price: '7 199 грн',
            model: 'Dark Ash',
            description:'Экран 15.6” (1920x1080) Full HD, матовый / Intel Celeron N4000 (1.1 - 2.6 ГГц) / RAM 4 ГБ / SSD 128 ГБ / Intel UHD Graphics 600 / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.86 кг / темно-серый',
            img: 'https://i2.rozetka.ua/goods/9578761/hp_4wu91es_images_9578761633.jpg'
        },
        {
            id:84,
            name: 'Ноутбук ASUS TUF Gaming',
            price: '31 999 грн',
            model: 'FX504GM-E4237',
            description:'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 8 ГБ / 1 ТБ + 8 ГБ SSHD / nVidia GeForce GTX 1060, 6 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / черный',
            img: 'https://i1.rozetka.ua/goods/11197658/asus_90nr00q1_m04760_images_11197658661.jpg'
        },
        {
            id:85,
            name: 'Ноутбук Dell Vostro ',
            price: '19 499 грн',
            model: '15 5581',
            description:'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 620 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Linux / 1.9 кг / серый',
            img: 'https://i1.rozetka.ua/goods/11599845/copy_dell_vostro_15_5581_n3021vn5581_ubu_5ca5bdc39ada2_images_11599845159.jpg'
        },
        {
            id:86,
            name: 'Ноутбук Dell Precision',
            price: '100 100 грн',
            model: '5530 ',
            description:'Экран 15.6" IPS (3840x2160) Ultra HD 4K 100% Adobe RGB, Multi-touch, матовый / Intel Core i7-8850H (2.6 - 4.3 ГГц) / RAM 32 ГБ / SSD 1 ТБ / nVidia Quadro P2000, 4 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit / 1.78 кг / серебристый',
            img: 'https://i1.rozetka.ua/goods/10842889/dell_210_aoir_i7_02_images_10842889425.jpg'
        },
        {
            id:87,
            name: 'Ноутбук ASUS VivoBook',
            price: '36 999 грн',
            model: 'Pro 15 ',
            description:'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 256 ГБ / nVidia GeForce GTX 1050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Endless OS / 1.99 кг / серый металлик',
            img: 'https://i1.rozetka.ua/goods/11423490/copy_asus_n580gd_e4012_5c94f993740ce_images_11423490894.jpg'
        },
        {
            id:88,
            name: 'Apple MacBook Pro 15"',
            price: '59 125 грн',
            model: 'Space Gray ',
            description:'Экран 15.4" (2880x1800), IPS / глянцевый / Intel Core i7-8750H (2.2-4.1 ГГц) / RAM 16 ГБ / SSD 256 ГБ / AMD Radeon Pro 555X, 4 ГБ / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 5.0 / Веб-камера HD-камера FaceTime 720p 1.3 Мп / Mac OS High Sierra / 349.3x240.7x15.5 мм, 1.83 кг / серый',
            img: 'https://i2.rozetka.ua/goods/9277551/47879518_images_9277551297.jpg'
        },
        {
            id:89,
            name: 'Ноутбук HP Pavilion ',
            price: '19 999 грн',
            model: 'Gaming 15-cx0048 ',
            description:'Экран 15.6" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i5-8250U (1.6 - 3.4 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.4 кг / черный',
            img: 'https://i1.rozetka.ua/goods/11833585/hp_4rn89ea_images_11833585539.jpg'
        },
        {
            id:90,
            name: 'Ноутбук Asus TUF',
            price: '32 799 грн',
            model: 'FX505DU-AL052',
            description:'Экран 15.6" IPS (1920x1080) Full HD 120 Гц, глянцевый с антибликовым покрытием / AMD Ryzen 7 3750H (2.3 - 4.0 ГГц) / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1660 Ti, 6 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.2 кг / черный',
            img: 'https://i2.rozetka.ua/goods/12399581/asus_90nr0272_m02300_images_12399581042.jpg'
        }

    ],
     audio: [
        {
            id:91,
            name: 'DALI Oberon 1 Ash',
            price: '10 800 грн',
            model: 'Black ',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 50 - 200 Вт Страна регистрации бренда: Дания',
            img: 'https://i2.rozetka.ua/goods/10343346/dali_235543_images_10343346452.jpg'
        },
        {
            id:92,
            name: 'Активная Yamaha NS',
            price: '4 149 грн',
            model: 'SW050 Black',
            description:'Количество акустических каналов: 1.0 Вид: Активная Тип: Сабвуфер',
            img: 'https://i1.rozetka.ua/goods/8658046/61232113_images_8658046493.jpg'
        },
        {
            id:93,
            name: 'DALI Zensor 1 AX',
            price: '16 281 грн',
            model: 'Light Walnut',
            description:'Количество акустических каналов: 2.0 Вид: Активная Тип: Акустическая система Общая мощность звука: 100 Вт',
            img: 'https://i1.rozetka.ua/goods/1324579/dali_zensor_1_ax_light_walnut_images_1324579808.jpg'
        },
        {
            id:94,
            name: 'DALI Oberon 3 Oak',
            price: '16 200 грн',
            model: 'Light ',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 50 - 300 Вт Страна регистрации бренда: Дания',
            img: 'https://i1.rozetka.ua/goods/10344390/dali_235540_images_10344390734.jpg'
        },
        {
            id:95,
            name: 'Пассивная Yamaha NS',
            price: '6 670 грн',
            model: '333 Piano',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система',
            img: 'https://i2.rozetka.ua/goods/11426649/77760072_images_11426649414.jpg'
        },
        {
            id:96,
            name: 'DALI Spektor Walnut',
            price: '18 765 грн',
            model: '6hw',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Страна регистрации бренда: Дания',
            img: 'https://i2.rozetka.ua/goods/3790429/dali_233189_images_3790429320.jpg'
        },
        {
            id:97,
            name: 'DALI SUB E-12 F Ash',
            price: '16 875 грн',
            model: 'Black ',
            description:'Количество акустических каналов: 1.0 Вид: Активная Тип: Сабвуфер Общая мощность звука: 170 Вт',
            img: 'https://i1.rozetka.ua/goods/893896/dali_sub_e12_black_images_893896101.jpg'
        },
        {
            id:98,
            name: 'DALI Spektor VOKAL',
            price: '6 750 грн',
            model: 'Black Ash',
            description:'Количество акустических каналов: 1.0 Вид: Пассивная Тип: Акустическая система Страна регистрации бренда: Дания',
            img: 'https://i2.rozetka.ua/goods/3790528/dali_233190_images_3790528560.jpg'
        },
        {
            id:99,
            name: 'Беспроводной сабвуфер',
            price: '16 714 грн',
            model: 'Yamaha NSW100 ',
            description:'Вид: Активная Тип: Сабвуфер',
            img: 'https://i1.rozetka.ua/goods/12271250/89757020_images_12271250432.jpg'
        },
        {
            id:100,
            name: 'DALI Oberon Vokal',
            price: '9 450 грн',
            model: 'Black Ash ',
            description:'Количество акустических каналов: 1.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 25 - 150 Вт Страна регистрации бренда: Дания',
            img: 'https://i2.rozetka.ua/goods/10344451/dali_235551_images_10344451148.jpg'
        },
        {
            id:101,
            name: 'Monitor Audio Monitor',
            price: '4 845 грн',
            model: '50 Black ',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 70 Вт Страна регистрации бренда: Англия',
            img: 'https://i1.rozetka.ua/goods/4086697/copy_monitor_audio_sm100b_5ad08757bdd29_images_4086697952.jpg'
        },
        {
            id:102,
            name: 'Tannoy MERCURY 7.2',
            price: '8 100 грн',
            model: 'BLACK OAK',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная',
            img: 'https://i2.rozetka.ua/goods/10623342/70494056_images_10623342932.jpg'
        },
        {
            id:103,
            name: 'Monitor Audio Silver',
            price: '57 000 грн',
            model: 'Series 300 ',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная',
            img: 'https://i1.rozetka.ua/goods/10623344/70494116_images_10623344150.jpg'
        },
        {
            id:104,
            name: 'Monitor Audio Monitor',
            price: '17 100 грн',
            model: '300 White',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 150 Вт Страна регистрации бренда: Англия',
            img: 'https://i1.rozetka.ua/goods/4086677/monitor_audio_sm300w_images_4086677504.jpg'
        },
        {
            id:105,
            name: 'MONITOR AUDIO Monitor',
            price: '11 115 грн',
            model: 'MRW10 White',
            description:'Мощный сабвуфер Monitor MRW-10 оснащён 10-дюймовым длинноходным динамиком MMP II, выдающим громоподобный бас ниже 30 Гц. Корпус с задним расположением фазоинвертора обеспечивает оптимальную отдачу 100-ваттного усилителя класса D',
            img: 'https://i2.rozetka.ua/goods/9364687/64721979_images_9364687283.jpg'
        },
        {
            id:106,
            name: 'Monitor Audio Silver',
            price: '24 225 грн',
            model: 'Series FX ',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная',
            img: 'https://i1.rozetka.ua/goods/10623346/70494500_images_10623346454.jpg'
        },
        {
            id:107,
            name: 'Акустика Magnat ',
            price: '2 843 грн',
            model: 'Supreme 102',
            description:'Количество акустических каналов: 2.0 Вид: Пассивная Тип: Акустическая система Общая мощность звука: 120 Вт',
            img: 'https://i2.rozetka.ua/goods/3905463/37169584_images_3905463352.jpg'
        },
        {
            id:108,
            name: 'Активная Klipsch',
            price: '14 823 грн',
            model: 'R-51PM',
            description:'Количество акустических каналов: 2.0 Вид: Активная Тип: Комплект акустики',
            img: 'https://i2.rozetka.ua/goods/9611240/65665621_images_9611240625.jpg'
        }
    ]
}

export default data;