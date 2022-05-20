(function () {
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    let btt = select('.back-to-top')
    if (btt) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                btt.classList.add('active')
            } else {
                btt.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }
})()