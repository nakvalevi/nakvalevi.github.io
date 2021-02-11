// menu
const menuBtn = document.querySelector('.logo-menu-colored')
const navbar = document.querySelector('.navbar')
const article = document.querySelector('.article')


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('logo-menu-colored-close')
    navbar.classList.toggle('navbar-show')
    if (window.pageYOffset == 0 && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
    else {
        article.classList.remove('article-show')
    }
})

window.addEventListener('scroll', function () {
    if (window.pageYOffset && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
})

// search
const searchItems = [
    {
        name: "იაკობ ცურტაველი",
        link: "/author/iakob-tsurtaveli/"
    },
    {
        name: "შუშანიკის წამება - იაკობ ცურტაველი",
        link: "/author/iakob-tsurtaveli/shushanikis-wameba/"
    },
    {
        name: "იოანე საბანისძე",
        link: "/author/ioane-sabanisdze/"
    },
    {
        name: "აბო თბილელის წამება - იოანე საბანისძე",
        link: "/author/ioane-sabanisdze/abo-tbilelis-wameba/"
    },
    {
        name: "გიორგი მერჩულე",
        link: "/author/giorgi-merchule/"
    },
    {
        name: "გრიგოლ ხანძთელის ცხოვრება - გიორგი მერჩულე",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "შოთა რუსთაველი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "ვეფხისტყაოსანი - შოთა რუსთაველი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "სულხან-საბა ორბელიანი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "სიბრძნე სიცრუისა - სულხან-საბა ორბელიანი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "დავით გურამიშვილი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "დავითიანი - დავით გურამიშვილი",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
]

const search = document.querySelector('.search')
const searchBtn = document.querySelector('.logo-search')
const searchBtnCol = document.querySelector('.logo-search-colored')
const searchInput = document.querySelector('.search-bar-input')
const searchItemsSection = document.querySelector('.search-section')

searchBtn.addEventListener('click', function () {
    searchShow()
})
searchBtnCol.addEventListener('click', function () {
    searchShow()
})

function searchShow() {
    if (window.pageYOffset < 65 && window.innerWidth > 480) {
        document.documentElement.scrollTo({
            top: 65,
            behavior: "smooth"
        })
    }

    search.classList.toggle('search-show')

    if (window.innerWidth < 480) {
        search.style.top = '60px'
        search.style.height = `${window.innerHeight - 60}px`
    } else {
        search.style.top = '45px'
        search.style.height = `${window.innerHeight - 45}px`
    }
}

searchInput.addEventListener('input', function () {
    let text = this.value.trim();
    diplaySearchItems();
    let output = document.querySelectorAll('.search-item')
    if (text != '') {
        output.forEach(function (elem) {
            if (elem.innerText.search(text) == -1) {
                elem.style.display = 'none'
            }
        })
    } else {
        output.forEach(function (elem) {
            elem.style.display = 'none'
        })
    }
})

function diplaySearchItems() {
    let displaySearchItems = searchItems.map(function (item) {

        return `<a href="${item.link}">
                    <p class="search-item">${item.name}</p>
                </a>`
    })
    displaySearchItems = displaySearchItems.join('')
    searchItemsSection.innerHTML = displaySearchItems
}

// back-to-top button
const backToTopBtn = document.querySelector('.back-to-top')

document.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = window.pageYOffset
    if (scrollTop > clientHeight * 0.4) {
        backToTopBtn.classList.add("show-btn")
    } else {
        backToTopBtn.classList.remove("show-btn")
    }
})

backToTopBtn.addEventListener('click', function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})