function numb(bnm) {
    if (bnm < 10 && bnm > 0) {
        return `0` + bnm
    }
    return bnm
}


function modal_finish_work(input1, input2) {
    let nameInput = document.querySelector(input1);
    let phoneInput = document.querySelector(input2);

    let infor2h = document.querySelector(`.modal_finish h2`)
    let infor4h = document.querySelector(`.modal_finish h4`)

    infor2h.innerHTML = nameInput.value
    infor4h.innerHTML = phoneInput.value

    let modal_finish = document.querySelector(`.modal_finish`)
    let modal_finish_content = document.querySelector(`.modal__dialog .top`)

    modal_finish.classList.remove(`hide`)

    modal_finish.classList.add(`fade`, `show`)
    document.body.classList.add(`bnm_body`)
    modal_finish_content.classList.add(`fade2`)

    let finish_line = document.querySelector(`[data-line]`)

    finish_line.onclick = () => {
        modal_finish.classList.remove(`show`)
        modal_finish.classList.add(`hide`)
        document.body.classList.remove(`bnm_body`)

    }

    nameInput.value = '';
    phoneInput.value = '';
}

// ******************************************************************

// ************************************************modalka

let header__right_block = document.querySelectorAll(`[data-modal]`)
let modal = document.querySelector(`.modal`)
let modal__close = document.querySelector(`.modal__close`)

header__right_block.forEach(mod_btn => {
    mod_btn.onclick = () => {
        modal.classList.add(`show`, `fade`)
        document.body.classList.add(`bnm_body`)
    }
})
modal__close.onclick = () => {
    modal.classList.remove(`show`, `fade`)
    document.body.classList.remove(`bnm_body`)
}
// *****************************регистр


let otpravka = document.querySelector('[data-us]');
otpravka.onclick = () => {

    modal_finish_work('#name', '#phone')

    modal.classList.remove(`show`)
};

// ***********

let otpravka_fic = document.querySelector('[data-fics]');
otpravka_fic.onclick = () => {
    let Input1 = document.querySelector(`#names`);
    let Input2 = document.querySelector(`#phones`);

    if (Input1.value != ``, Input2.value != ``) {
        modal_finish_work('#names', '#phones')
    }
};

// ************************************ скрол фулл

let nmi = true
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && nmi) {
        modal.classList.toggle(`show`)
        modal.classList.add(`fade`)
        document.body.classList.toggle(`bnm_body`)

        nmi = false
    }
});

// ******************************************************************************

let tabcontent = document.querySelectorAll(`.tabcontent`)
let tabheader__item = document.querySelectorAll(`.tabheader__item`)

hide(tabcontent)

function hide(arr) {
    arr.forEach(tabc => tabc.classList.add(`hide`))
    arr[0].classList.remove(`hide`)
}

tabheader__item.forEach((tabc, indx) => {

    tabc.onclick = () => {
        tabheader__item.forEach(tabc => tabc.classList.remove(`tabheader__item_active`))
        tabc.classList.add(`tabheader__item_active`)
        tabcontent.forEach(tab => tab.classList.add(`hide`, `fade`))
        tabcontent[indx].classList.remove(`hide`)

    }
})

// ***************************************************************************************************

let offer__slider_prev = document.querySelector('.offer__slider-prev')
let offer__slider_next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')

let total = document.querySelector(`#total`)
let current = document.querySelector(`#current`)

let slideIndex = 0
total.innerHTML = numb(slides.length)
current.innerHTML = numb(slideIndex + 1)

showSlides(slideIndex)

function showSlides(n) {

    if (n > slides.length - 1) {
        slideIndex = 0
    }
    else if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
}

offer__slider_next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
    current.innerHTML = numb(slideIndex + 1)
}
offer__slider_prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
    current.innerHTML = numb(slideIndex + 1)
}

// *************************************************** канкулятор

let gender = document.querySelectorAll("#gender .calculating__choose-item");
let constitution = document.querySelectorAll(".calculating__choose_medium .calculating__choose-item")
let activity = document.querySelectorAll(".calculating__choose_big .calculating__choose-item")
let result = document.querySelector(".calculating__result span")

let userData = {
    gender: "woman"
}

gender.forEach(bnm1 => {
    bnm1.onclick = () => {
        let key = bnm1.getAttribute("data-gen")
        userData.gender = key

        gender.forEach(item => {
            item.classList.remove("calculating__choose-item_active")
        })

        bnm1.classList.add("calculating__choose-item_active")
    }
})

constitution.forEach(bnm2 => {
    let key = bnm2.getAttribute("id")
    bnm2.onkeyup = () => {
        userData[key] = bnm2.value
        bnm2.style.background = `#fff`
    }
})


activity.forEach(bnm3 => {
    let key = +bnm3.getAttribute("data-activity")

    activity.forEach(item => {
        item.classList.remove("calculating__choose-item_active")
    })

    bnm3.onclick = () => {

        activity.forEach(item => {
            item.classList.remove("calculating__choose-item_active")
        })

        bnm3.classList.add("calculating__choose-item_active")

        let err = false
        constitution.forEach(bnm2 => {
            if (bnm2.value == ``) {
                bnm2.style.background = (`#d30b0b4a`)
                err = true
            }
        })

        if (err) {
            return
        }

        const { gender, height, weight, age } = userData
        let itog = 0

        if (gender === "woman") {
            itog = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)
        } else {
            itog = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
        }
        result.innerHTML = Math.floor(itog * key)
    }
})


// *****************************таймер

let stop_sale = document.querySelector(`.promotion__timer .title`)
let deadline = "2023-05-22 20:00"

function getRemainingTime(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds,
    }
}

function setTime(endTime, selector) {
    let t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTime, 1000);

    function updateTime() {
        let t = getRemainingTime(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(interval)
            stop_sale.innerHTML = (`Акция закончилась`)
        }
    }
}
setTime(deadline, '.timer')
