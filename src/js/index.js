import {zodiacSigns} from './zodiacSigns.js';
import {aztroApiYesterday, aztroApiToday, aztroApiTomorrow} from './apiAztro.js';

$(document).ready(function () {

    // GENERATE SIGN FUNCTION
    $("#generateSign").click(function() {

        // VALIDATE INPUT
        if ($('input')[0].checkValidity()) {

            let enterDate = $("#enterDate");

            // OCULTAR
            $('.signBackgroundSun').hide();
            $('footer').hide();

            // OBTENER FECHA INPUT
            let inputDay = $("#day").val();
            let inputMonth = $("#month").val();


            // ENCONTRAR SIGNO
            let foundSign = zodiacSigns.find(function(object) {
                return inputMonth == object.month1 && inputDay >= object.day1 || inputMonth == object.month2 && inputDay <= object.day2;
            })

            // OBTENER HOROSCOPO API AZTRO
            aztroApiYesterday;
            Object.assign(aztroApiYesterday, {"url": API_HOST + foundSign.aztroYesterday});
            $.ajax(aztroApiYesterday).done(function (response) {
                console.log(response);
                $('#yesterdaysHoroscope').append(response.description);
                $('#yesterdaysDate').append(response.current_date);
                $('#yesterdaysCompatibility').append(response.compatibility);
                $('#yesterdaysLuckyNumber').append(response.lucky_number);
            });
            aztroApiToday;
            Object.assign(aztroApiToday, {"url": API_HOST + foundSign.aztroToday});
            $.ajax(aztroApiToday).done(function (response) {
                console.log(response);
                $('#todaysHoroscope').append(response.description);
                $('#todaysDate').append(response.current_date);
                $('#todaysCompatibility').append(response.compatibility);
                $('#todaysLuckyNumber').append(response.lucky_number);
            });
            aztroApiTomorrow;
            Object.assign(aztroApiTomorrow, {"url": API_HOST + foundSign.aztroTomorrow});
            $.ajax(aztroApiTomorrow).done(function (response) {
                console.log(response);
                $('#tomorrowsHoroscope').append(response.description);
                $('#tomorrowsDate').append(response.current_date);
                $('#tomorrowsCompatibility').append(response.compatibility);
                $('#tomorrowsLuckyNumber').append(response.lucky_number);
            });


            // COMPONENTES
            let signImg =    $(`                        <img src="${foundSign.signImg}" class="signsImg" data-aos="fade-up" data-aos-duration="2000" />`);
            let signDiv =    $(`                        <div class="justify-content-center" id="revealSigno" data-aos="fade-up" data-aos-duration="2500">
                                                            <section class="swiper-pages">
                                                                <div class="swiper-container swiper-container-horizontal" id="swiper-page">
                                                                    <div class="swiper-wrapper">
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>`);
            let swiperSlideYesterdaysHoroscope = $(`    <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <span class="swiper-horoscope-dates" id="yesterdaysDate"></span>
                                                                <p class="swiper-card-title font-1">Yesterday's horoscope</p>
                                                                <p class="swiper-text" id="yesterdaysHoroscope"></p>
                                                                <div class="row swiper-border-top">
                                                                    <div class="col-lg-6 col-md-6 col-sm-12 swiper-border-right">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Compatibility:<br><span class="font-2-Thin" id="yesterdaysCompatibility"></span></p>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Lucky number:<br><span class="font-2-Thin" id="yesterdaysLuckyNumber"></span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlideTodaysHoroscope = $(`        <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <span class="swiper-horoscope-dates" id="todaysDate"></span>
                                                                <p class="swiper-card-title font-1">Today's horoscope</p>
                                                                <p class="swiper-text" id="todaysHoroscope"></p>
                                                                <div class="row swiper-border-top">
                                                                    <div class="col-lg-6 col-md-6 col-sm-12 swiper-border-right">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Compatibility:<br><span class="font-2-Thin" id="todaysCompatibility"></span></p>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Lucky number:<br><span class="font-2-Thin" id="todaysLuckyNumber"></span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlideTomorrowsHoroscope = $(`     <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <span class="swiper-horoscope-dates" id="tomorrowsDate"></span>
                                                                <p class="swiper-card-title font-1">Tomorrow's horoscope</p>
                                                                <p class="swiper-text" id="tomorrowsHoroscope"></p>
                                                                <div class="row swiper-border-top">
                                                                    <div class="col-lg-6 col-md-6 col-sm-12 swiper-border-right">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Compatibility:<br><span class="font-2-Thin" id="tomorrowsCompatibility"></span></p>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                                                        <p class="swiper-text-small font-2-Bold mt-3">
                                                                        Lucky number:<br><span class="font-2-Thin" id="tomorrowsLuckyNumber"></span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlideAboutYourSign = $(`          <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <p class="swiper-card-title font-1">About ${foundSign.signName}</p>
                                                                <p class="swiper-text-small">${foundSign.signDate}</p>
                                                                <p class="swiper-text">${foundSign.signDescription}</p>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlidePlanet = $(`                 <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <p class="swiper-card-title font-1">Planet: ${foundSign.planetName}</p>
                                                                <p class="swiper-text-small">${foundSign.planetSymbol}</p>
                                                                <p class="swiper-text">${foundSign.planetDescription}</p>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlideElement = $(`                <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                            <i class="swiper-arrow"></i>
                                                            <div class="swiper-content">
                                                                <p class="swiper-card-title font-1">Element: ${foundSign.elementName}</p>
                                                                <p class="swiper-text-small">${foundSign.elementSymbol}</p>
                                                                <p class="swiper-text">${foundSign.elementDescription}</p>
                                                            </div>
                                                            </a>
                                                        </div>`);
            let swiperSlideGem = $(`                    <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                                <i class="swiper-arrow"></i>
                                                                <div class="swiper-content">
                                                                    <p class="swiper-card-title font-1">Gem: ${foundSign.gemName}</p>
                                                                    <p class="swiper-text-small">⸺</p>
                                                                    <p class="swiper-text">${foundSign.gemDescription}</p>
                                                                </div>
                                                            </a>
                                                        </div>`);
            let swiperTryAnotherDate = $(`              <div class="swiper-slide">
                                                            <a class="swiper-card" href="#">
                                                                    <button class="swiper-btn-tryAnotherDate m-auto" type="button" onclick="tryAnotherDate()">Try another date</button>
                                                            </a>
                                                        </div>`);
            let swiperPagination = $(`                  <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>`);

            // AÑADIR INFO
            enterDate.empty().append(signImg);
            enterDate.append(signDiv);
            $(".signBox").css("background-image", "url('./img/bg/bg-1.svg')").css("background-position", "center");
            $('.swiper-wrapper').append(swiperSlideYesterdaysHoroscope, swiperSlideTodaysHoroscope, swiperSlideTomorrowsHoroscope, swiperSlideAboutYourSign, swiperSlidePlanet, swiperSlideElement, swiperSlideGem, swiperTryAnotherDate);
            $('.swiper-container').append(swiperPagination);


            // SWIPER
            var swiperBanner = new Swiper('#swiper-page', {
                calculateHeight:true,
                pagination: {
                    el: '#swiper-page .swiper-pagination',
                    clickable: true,
                    type: 'bullets' 
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        spaceBetween: 20,
                    } 
                },
                slidesPerView: 3,
                loop: false,
                centeredSlides: true,
                slideToClickedSlide: true
            });
            swiperBanner.slideTo(1, false,false);
        }

        else {
            let enterValidDate = '* Please enter a valid date';
            $('.enterValidDate').text(enterValidDate);
        }

    })

})