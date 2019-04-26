const elementsToHide = [
    'info',
    'pla-shelf',
    'meta',
    'ticket-shelf',
    'merch-shelf',
    'related',
    'comments',
    'panels',
    'container',
    'page-manager'
]
const show = (elements) => elements.forEach(e => document.getElementById(e).classList.remove('ytp-no-scrool-for-more-hide'));
const hide = (elements) => elements.forEach(e => document.getElementById(e).classList.add('ytp-no-scrool-for-more-hide'));
const wheelScrollListener = { handleEvent: (e) => e.preventDefault() };

document.onfullscreenchange = () => {
    if (document.fullscreen) {
        hide(elementsToHide);
        document.addEventListener('wheel', wheelScrollListener, { passive: false })
    } else {
        show(elementsToHide);
        document.removeEventListener('wheel', wheelScrollListener, { passive: false })
    }
}