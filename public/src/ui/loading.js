/**
 * Loading UI functionality - DEBUG VERSION
 */

// Get DOM elements
const loadingBar = document.getElementById('loading-bar');
const loadingScreen = document.getElementById('loading-screen');
const statusText = document.querySelector('.status-bar-content span:first-child');

/**
 * Simulate loading process with direct animation and class toggling
 */
function simulateLoading() {
    console.log('[Loading] simulateLoading called'); // DEBUG

    // Check if elements exist
    if (!loadingBar) {
        console.error('[Loading] Error: #loading-bar element not found!');
        return; // Stop if element is missing
    }
    if (!loadingScreen) {
        console.error('[Loading] Error: #loading-screen element not found!');
        return; // Stop if element is missing
    }
     if (!statusText) {
        console.error('[Loading] Error: Status text element not found!');
        // Don't return here, maybe the status text is not critical
    }

    console.log('[Loading] Elements found:', { loadingBar, loadingScreen, statusText }); // DEBUG

    // --- Vorbereitung ---
    // CSS handles initial state (opacity 0, width 0), just ensure classes are removed
    loadingBar.classList.remove('active');
    loadingScreen.classList.remove('visible');
    // Reset width explicitly, just in case
    loadingBar.style.width = '0%';
    console.log('[Loading] Preparation complete. Initial state set.'); // DEBUG

    // --- Start der Animation ---
    if (statusText) {
        statusText.textContent = 'Status: Loading...';
    } else {
        console.warn('[Loading] Status text element not found, cannot update text.'); // DEBUG
    }
    console.log('[Loading] Starting animation process...'); // DEBUG

    // Directly add classes to trigger CSS transitions/animations
    // Removed requestAnimationFrame for simplicity during debugging
    loadingBar.classList.add('active');     // Should set opacity: 1 via CSS
    loadingScreen.classList.add('visible'); // Should set opacity: 1 via CSS
    console.log('[Loading] Classes "active" and "visible" added.'); // DEBUG

    // Check if classes were actually added (inspect in browser dev tools Elements tab)

    // Animate width manually with JavaScript
    let width = 0;
    const intervalTime = 20; // ms
    const totalTime = 2000; // ms
    const increment = 100 / (totalTime / intervalTime);

    console.log(`[Loading] Starting interval: totalTime=${totalTime}ms, intervalTime=${intervalTime}ms, increment=${increment}%`); // DEBUG

    const interval = setInterval(() => {
        width += increment;
        // console.log('[Loading] Interval tick - Width:', width); // DEBUG - Uncomment for very detailed logs

        if (width >= 100) {
            width = 100; // Cap at 100%
            loadingBar.style.width = width + '%'; // Final width update
            clearInterval(interval);
            console.log('[Loading] Interval cleared, width capped at 100%'); // DEBUG

            // --- Ende der Animation ---
            console.log('[Loading] Starting hide timeout (150ms delay)...'); // DEBUG
            setTimeout(() => {
                console.log('[Loading] Executing hide timeout: Removing classes'); // DEBUG
                // Verberge Ladebalken und Ladeschirm via CSS transitions
                loadingBar.classList.remove('active');
                loadingScreen.classList.remove('visible');

                // Update status text
                if (statusText) {
                    statusText.textContent = 'Status: Ready';
                     console.log('[Loading] Status set to Ready'); // DEBUG
                }

                // Optional: Reset width after transition ends (0.3s = 300ms)
                // setTimeout(() => {
                //     console.log('[Loading] Resetting width to 0% after transition.'); // DEBUG
                //     loadingBar.style.width = '0%';
                // }, 300);

            }, 150); // Pause bei 100%

        } else {
             loadingBar.style.width = width + '%'; // Update width during animation
        }

    }, intervalTime);
}

// Export loading functionality
export { simulateLoading };