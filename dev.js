import { createApp } from 'vue'
import TawkMessengerVue from './src/index.js'

// Create a simple Vue app for development
const app = createApp({
    template: `
        <div>
            <h2>Vue App with Tawk Messenger</h2>
            <p>The Tawk Messenger plugin is loaded and ready.</p>
            <p><strong>Note:</strong> You'll need to configure propertyId and widgetId to see the actual chat widget.</p>
        </div>
    `
})

// Use the Tawk Messenger plugin with example IDs
// Replace these with actual IDs from your tawk.to dashboard for testing
app.use(TawkMessengerVue, {
    propertyId: 'your-property-id', // Replace with actual property ID
    widgetId: 'your-widget-id'      // Replace with actual widget ID
})

// Mount the app
app.mount('#app')

console.log('Tawk Messenger Vue 3 plugin loaded successfully!')