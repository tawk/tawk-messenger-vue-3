<p align="center">
    <img width="250"
        src="./images/tawk-vue-logo.png"
        alt="Tawk Vue logo">
</p>

## Features
- Compatible on Vue 3 and Nuxt
- Documented and self-explaining methods
- Small size without any external libraries
- All Javascript API methods are avaiable
- Maintained by the [tawk.to](https://www.tawk.to]) team

<br/>

## Installation
The plugins are available from the node and yarn package managers.
```bash
# Node
npm install @tawk.to/tawk-messenger-vue-3

# Yarn
yarn add @tawk.to/tawk-messenger-vue-3
```

<br/>

## Quickstart
Import the **tawk-messenger-vue** in your main JavaScript file in **src/** folder. The **propertyId** and **widgetId** will
be found on your tawk Dashboard.

Log in to your account and go to **Administration > Channels > Chat Widget**.

```js
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

app.use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id'
});
```

<br/>

## Server Side Rendering
If you will use the plugin with Nuxt JS follow this [guide for setup](docs/ssr-setup.md).

<br/>

## Documentation

This project includes a `docs` folder with more details on the following:
1.  [SPA setup](docs/spa-setup.md)
1.  [SSR setup](docs/ssr-setup.md)
1.  [API Reference](docs/api-reference.md)

<br/>

## Other JS frameworks we support
- [Vue 2](https://github.com/tawk/tawk-messenger-vue-2)
- [React Js](https://github.com/tawk/tawk-messenger-react)
- [Angular Js](https://github.com/tawk/tawk-messenger-angular)
- [Ember Js](https://github.com/tawk/tawk-messenger-ember)

<br/>

## Frequently Asked Questions

**Do you have a knowledge base or article to support implementation?**

Here is our guide for the [Vue.js integration](https://help.tawk.to/article/vue-js )

**Where can I find more information and support?**

Visit our [help center](https://help.tawk.to) or reach out in the chat on our [website](https://tawk.to). Our agents are available to assist you 24/7.

**Where can I submit a suggestion or report a bug?**

Check to see if the issue already exists. If not, open a new issue in the [Issues tab](https://github.com/tawk/tawk-messenger-vue-3/issues)
