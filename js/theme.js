

window.triggerThemeWave = function(x, y, isDark) {
    // Create the wave element
    const wave = document.createElement('div');
    wave.className = 'theme-wave';

    const nextColor = getComputedStyle(document.documentElement).getPropertyValue('--wave-next-color');
    wave.style.backgroundColor = nextColor.trim();
    // Set wave starting position at button center
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;

    // Add wave to body
    document.body.appendChild(wave);

    // Trigger animation by adding 'active' class in next frame
    requestAnimationFrame(() => {
        wave.classList.add('active');
    });
    
    

    // After animation, toggle theme attribute and remove wave
    wave.addEventListener('transitionend', () => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (window.loadLottieAnimation) {
            window.loadLottieAnimation(isDark ? 'dark' : 'light');
        }
        
        wave.remove();
    });
};