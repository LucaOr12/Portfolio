window.lottieInstance = null;

window.loadLottieAnimation = (theme) => {
    const container = document.getElementById('lottie-animation');
    if (!container) return;

    // Destroy the previous animation if it exists
    if (window.lottieInstance) {
        window.lottieInstance.destroy();
        window.lottieInstance = null;
    }

    const path = theme === "dark"
        ? "data/lottie-contacts-dark.json"
        : "data/lottie-contacts.json";

    window.lottieInstance = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    });
};