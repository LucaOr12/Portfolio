window.loadLottieAnimation = () => {
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/data/lottie-contacts.json'
    });
};