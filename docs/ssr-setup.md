# Server Side Rendering
The plugin is fully compatible in Nuxt 3, but we need to setup few things.

<br/>

## Setup
Create a file **tawk-messenger.client.js** in **plugins/** directory in your project, and add the
code below.

```js
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TawkMessengerVue, {
        propertyId : 'property_id',
        widgetId : 'widget_id'
    });
});
```

<br/>

## Instance property
To access the API functions, call the **$tawkMessenger** anywhere in your components.

`Options API`
```js
export default {
    inject ['tawkOnLoad', 'tawkToggle'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkToggle();
        });
    }
};
```

<br/>

## Event handling
You can listen on events emitted by the plugin, It must be exactly match the name used to listen
to that event.

`Options API`
```js
export default {
    inject ['tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            // place your code here
        });
    }
};
```

<br/>

You can see the list of APIs in [API reference](api-reference.md).
