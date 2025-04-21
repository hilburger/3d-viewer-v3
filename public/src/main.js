/**
 * Main application entry point
 */

// import { simulateLoading } from './ui/loading.js'
import { setupNavigation } from './ui/navigation.js'

// Initialize the application
function initApp() {
    // Set up navigation controls
    setupNavigation()
    
    // Show initial loading animation
    // simulateLoading()
}

// Initialize when the page loads
window.addEventListener('load', initApp)