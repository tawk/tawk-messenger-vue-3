# Single Page Application
Here are the basic of how to use callbacks and expose functions from the plugin.

<br/>

## Inject function
To access the provided functions from the plugin, use the `inject()` function

```html
// Composition API
<script setup>
    import { inject } from 'vue';

    const toggle = inject('toggle');

    toggle();
</script>
```

```html
// Options API
<script>
    export default {
        inject : ['toggle'],

        mounted() {
            this.toggle();
        }
    }
</script>
```

<br/>

## Event handling
You can listen on events emitted by the plugin by Injecting the function using `inject()`,
It must be exactly match the name used to listen to that event, you can see the list of
[events](api-reference.md) here.

```html
// Composition API
<script setup>
    import { inject } from 'vue';

    const onLoad = inject('onLoad');

    onLoad(() => {
        // place your function here
    });
</script>
```

```html
// Options API
<script>
    export default {
        inject : ['onLoad'],

        mounted() {
            this.onLoad(() => {
                // place your function here
            });
        }
    }
</script>
```

<br/><br/>
You can see the list of APIs in [API reference](api-reference.md).
