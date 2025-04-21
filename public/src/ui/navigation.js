/**
 * Navigation UI functionality
 */

import { simulateLoading } from './loading.js'

/**
 * Set up navigation button event listeners
 */
function setupNavigation() {
    // Level 1 navigation
    document.getElementById('prev-l1-button').addEventListener('click', () => {
        console.log('Navigate to previous Level 1')
        simulateLoading()
    })

    document.getElementById('next-l1-button').addEventListener('click', () => {
        console.log('Navigate to next Level 1')
        simulateLoading()
    })

    // Level 2 navigation
    document.getElementById('prev-l2-button').addEventListener('click', () => {
        console.log('Navigate to previous Level 2')
        simulateLoading()
    })

    document.getElementById('next-l2-button').addEventListener('click', () => {
        console.log('Navigate to next Level 2')
        simulateLoading()
    })
}

// Export navigation functionality
export { setupNavigation }