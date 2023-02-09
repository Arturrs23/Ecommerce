// Import the `createStore` method from the `vuex` library
import { createStore } from "vuex";

// Create a Vuex store instance and store it in the `store` constant
const store = createStore(
    // Define the store's state, getters, actions, and mutations
    {
       state:{
        user: {
            token: '1234',
            data: {}
        }
       },
        getters: {
            // Add getters here if needed
        },
        actions: {
            // Add actions here if needed
        },
        mutations: {
            // Add mutations here if needed
        },
    }
)

// Export the store instance so it can be used in other parts of the application
export default store
