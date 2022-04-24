# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one
of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [onLoad](#onload)
- [onStatusChange](#onstatuschange)
- [onBeforeLoad](#onbeforeload)
- [onChatMaximized](#onchatmaximized)
- [onChatMinimized](#onchatminimized)
- [onChatHidden](#onchathidden)
- [onChatStarted](#onchatstarted)
- [onChatEnded](#onchatended)
- [onPrechatSubmit](#onprechatsubmit)
- [onOfflineSubmit](#onofflinesubmit)
- [onChatMessageVisitor](#onchatmessagevisitor)
- [onChatMessageAgent](#onchatmessageagent)
- [onChatMessageSystem](#onchatmessagesystem)
- [onAgentJoinChat](#onagentjoinchat)
- [onAgentLeaveChat](#onagentleavechat)
- [onChatSatisfaction](#onchatsatisfaction)
- [onVisitorNameChanged](#onvisitornamechanged)
- [onFileUpload](#onfileupload)
- [onTagsUpdated](#ontagsupdated)
- [onUnreadCountChanged](#onunreadcountchanged)
- [visitor](#visitor)
- [maximize](#maximize)
- [minimize](#minimize)
- [toggle](#toggle)
- [popup](#popup)
- [getWindowType](#getwindowtype)
- [showWidget](#showwidget)
- [hideWidget](#hidewidget)
- [toggleVisibility](#togglevisibility)
- [getStatus](#getstatus)
- [isChatMaximized](#ischatmaximized)
- [isChatMinimized](#ischatminimized)
- [isChatHidden](#ischathidden)
- [isChatOngoing](#ischatongoing)
- [isVisitorEngaged](#isvisitorengaged)
- [onLoaded](#onloaded)
- [onBeforeLoaded](#onbeforeloaded)
- [widgetPosition](#widgetposition)
- [endChat](#endchat)
- [setAttributes](#setattributes)
- [addEvent](#addevent)
- [addTags](#addtags)
- [removeTags](#removetags)
- [secureMode](#securemode)
- [customStyle](#customstyle)

<br/>

## onLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

`Composition API`
```html
<script setup>
    const onLoad = inject('onLoad');

    onload(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onLoad'],

    created() {
        this.onLoad(() => {
            // place your code here
        });
    }
}
```

<br/>

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onStatusChange = inject('onStatusChange');

    onStatusChange((status) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onStatusChange'],

    created() {
        this.onStatusChange((status) => {
            // place your code here
        });
    }
}
```

<br/>

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onBeforeLoad = inject('onBeforeLoad');

    onBeforeLoad(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onBeforeLoad'],

    created() {
        this.onBeforeLoad(() => {
            // place your code here
        });
    }
}
```

<br/>

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatMaximized = inject('onChatMaximized');

    onChatMaximized(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatMaximized'],

    created() {
        this.onChatMaximized(() => {
            // place your code here
        });
    }
}
```

<br/>

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatMinimized = inject('onChatMinimized');

    onChatMinimized(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatMinimized'],

    created() {
        this.onChatMinimized(() => {
            // place your code here
        });
    }
}
```

<br/>

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatHidden = inject('onChatHidden');

    onChatHidden(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatHidden'],

    created() {
        this.onChatHidden(() => {
            // place your code here
        });
    }
}
```

<br/>

## onChatStarted
Callback function invoked when the widget is started.

`Composition API`
```html
<script setup>
    const onChatStarted = inject('onChatStarted');

    onChatStarted(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatStarted'],

    created() {
        this.onChatStarted(() => {
            // place your code here
        });
    }
}
```

<br/>

## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatEnded = inject('onChatEnded');

    onChatEnded(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatEnded'],

    created() {
        this.onChatEnded(() => {
            // place your code here
        });
    }
}
```

<br/>

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onPrechatSubmit = inject('onPrechatSubmit');

    onPrechatSubmit((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onPrechatSubmit'],

    created() {
        this.onPrechatSubmit((data) => {
            // place your code here
        });
    }
}
```

<br/>

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onOfflineSubmit = inject('onOfflineSubmit');

    onOfflineSubmit((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onOfflineSubmit'],

    created() {
        this.onOfflineSubmit((data => {
            // place your code here
        });
    }
}
```

<br/>

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatMessageVisitor = inject('onChatMessageVisitor');

    onChatMessageVisitor((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatMessageVisitor'],

    created() {
        this.onChatMessageVisitor((message) => {
            // place your code here
        });
    }
}
```

<br/>

## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatMessageeAgent = inject('onChatMessageeAgent');

    onChatMessageeAgent((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatMessageeAgent'],

    created() {
        this.onChatMessageeAgent((message) => {
            // place your code here
        });
    }
}
```

<br/>

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatMessageSystem = inject('onChatMessageSystem');

    onChatMessageSystem((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatMessageSystem'],

    created() {
        this.onChatMessageSystem((message) => {
            // place your code here
        });
    }
}
```

<br/>

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onAgentJoinChat = inject('onAgentJoinChat');

    onAgentJoinChat((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onAgentJoinChat'],

    created() {
        this.onAgentJoinChat((data) => {
            // place your code here
        });
    }
}
```

<br/>

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onAgentLeaveChat = inject('onAgentLeaveChat');

    onAgentLeaveChat((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onAgentLeaveChat'],

    created() {
        this.onAgentLeaveChat((data) => {
            // place your code here
        });
    }
}
```

<br/>

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onChatSatisfaction = inject('onChatSatisfaction');

    onChatSatisfaction((satisfaction) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatSatisfaction'],

    created() {
        this.onChatSatisfaction((satisfaction) => {
            // place your code here
        });
    }
}
```

<br/>

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onVisitorNameChanged = inject('onVisitorNameChanged');

    onVisitorNameChanged((visitorName) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onVisitorNameChanged'],

    created() {
        this.onVisitorNameChanged((visitorName) => {
            // place your code here
        });
    }
}
```

<br/>

## fileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onFIleUpload = inject('onFIleUpload');

    onFIleUpload((link) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onFIleUpload'],

    created() {
        this.onFIleUpload((link) => {
            // place your code here
        });
    }
}
```

<br/>

## onTagsUpdated
Callback function invoked when a tag is updated.

`Composition API`
```html
<script setup>
    const onTagsUpdated = inject('onTagsUpdated');

    onTagsUpdated((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onTagsUpdated'],

    created() {
        this.onTagsUpdated((data) => {
            // place your code here
        });
    }
}
```

<br/>

## onUnreadCountChanged
Callback function returns count of unread messages.

`Composition API`
```html
<script setup>
    const onUnreadCountChanged = inject('onUnreadCountChanged');

    onUnreadCountChanged((count) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onUnreadCountChanged'],

    created() {
        this.onUnreadCountChanged((count) => {
            // place your code here
        });
    }
}
```

<br/>

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

`Composition API`
```html
<script setup>
    const visitor = inject('visitor');

    visitor({
        name : 'Name',
        email : 'email@email.com'
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onChatHidden'],

    created() {
        this.onChatHidden({
            name : 'Name',
            email : 'email@email.com'
        });
    }
}
```

<br/>

## maximize
Maximizes the chat widget.

`Composition API`
```html
<script setup>
    const maximize = inject('maximize');
    const onLoad = inject('onLoad');

    onLoad(() => {
        maximize();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['maximize', 'onLoad'],

    created() {
        this.onLoad(() => {
            this.maximize();
        });
    }
}
```

<br/>

## minimize
Minimizes the chat widget.

`Composition API`
```html
<script setup>
    const minimize = inject('minimize');
    const onLoad = inject('onLoad');

    onLoad(() => {
        minimize();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['minimize', 'onLoad'],

    created() {
        this.onLoad(() => {
            this.minimize();
        });
    }
}
```

<br/>

## toggle
Minimizes or Maximizes the chat widget based on the current state.

`Composition API`
```html
<script setup>
    const toggle = inject('toggle');
    const onLoad = inject('onLoad');

    onLoad(() => {
        toggle();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['toggle', 'onLoad'],

    created() {
        this.onLoad(() => {
            this.toggle();
        });
    }
}
```

<br/>

## popup
Opens the chat widget as a pop out.

`Composition API`
```html
<script setup>
    const popup = inject('popup');
    const onLoad = inject('onLoad');

    onLoad(() => {
        popup();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['popup', 'onLoad'],

    created() {
        this.onLoad(() => {
            this.popup();
        });
    }
}
```

<br/>

## getWindowType
Returns the current widget type whether it’s inline or embed.

`Composition API`
```html
<script setup>
    const getWindowType = inject('getWindowType');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (getWindowType() === 'inline') {
            // do something if it's inline
        } else {
            // do something if it's embed
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['getWindowType', 'onLoad'],

    created() {
        this.onLoad(() => {
            if (this.getWindowType() === 'inline') {
                // do something if it's inline
            } else {
                // do something if it's embed
            }
        });
    }
}
```

<br/>

## showWidget
Shows the chat widget.

```js
this.$tawkMessenger.showWidget();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.showWidget();
});
```

<br/>

## hideWidget
Hide the chat widget.

```js
this.$tawkMessenger.hideWidget();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.hideWidget();
});
```

<br/>

## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
this.$tawkMessenger.toggleVisibility();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.toggleVisibility();
});
```

<br/>

## getStatus
Returns the current page status (online, away or offline).

```js
this.$tawkMessenger.getStatus();

// Example

this.$tawkMessenger.$on('load', () => {
    const pageStatus = this.$tawkMessenger.getStatus();

    if (pageStatus === 'online') {
        // do something for online
    } else if (pageStatus === 'away') {
        // do something for away
    } else {
        // do something for offline
    }
});
```

<br/>

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.$tawkMessenger.isChatMaximized();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatMaximized()) {
        // do something it it's maximized
    }
});
```

<br/>

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.$tawkMessenger.isChatMinimized();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatMinimized()) {
        // do something if it's minimized
    }
});
```

<br/>

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.$tawkMessenger.isChatHidden();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatHidden()) {
        // do something if chat widget is hidden
    }
});
```

<br/>

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.$tawkMessenger.isChatOngoing();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatOngoing()) {
        // do something if there's ongoing chat
    }
});
```

<br/>

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.$tawkMessenger.isVisitorEngaged();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
});
```

<br/>

## onLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

```js
this.$tawkMessenger.onLoaded();

// Example
if (this.$tawkMessenger.onLoaded()) {
    // do something when widget is ready
}
```

## onBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialize.

```js
this.$tawkMessenger.onBeforeLoaded();

// Example
if (this.$tawkMessenger.onBeforeLoaded()) {
    // do something before onload
}
```

## widgetPosition
Returns a string for current position of the widget.

```js
this.$tawkMessenger.widgetPosition();

// Example
this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.widgetPosition() === 'br') {
        // do something if the widget is at bottom right
    }
});
```

<br/>

## endChat
Ends the current ongoing chat.

```js
this.$tawkMessenger.endChat();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.endChat();
});
```

<br/>

## setAttributes
Set custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor name and email. However, you will need to enable the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason it needs to be in [secure mode](#securemode) is to ensure data integrity — to ensure the value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
this.$tawkMessenger.setAttributes(attributes, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.setAttributes({
            id : 'A1234',
            store : 'Midvalley'
        }, function(error) {
            // do something if error
        });
});

// Example for setting name and email

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.setAttributes({
            name : 'Name',
            email : 'email@email.com',
            hash : 'hash value'
        }, function(error) {
            // do something if error
        });
});
```

<br/>

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.$tawkMessenger.addEvent(eventName, metaData, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.addEvent(
        'requested-quotation',
        function(error) {
            // do something if error
        }
    );

    this.$tawkMessenger.addEvent(
        'product-add-to-cart',
        {
            sku : 'A0012',
            name : 'Jeans',
            price : '50'
        },
        function(error) {
            // do something if error
        }
    );
});
```

<br/>

## addTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.addTags(tags, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.addTags(
        [
            'hello',
            'world'
        ],
        function(error) {
            // do something if error
        }
    );
});
```

<br/>

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.removeTags(tags, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.removeTags(
        [
            'hello',
            'world'
        ],
        function (error) {
            // do something if error
        }
    );
});
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
this.$tawkMessenger.visitor({
    name : 'Name',
    email : 'email@email.com',
    hash : '<calculate-hash>'
})
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.

### zIndex
```js
// ZIndex
Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : Integer | String
    }
});

// Example

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : 1000
    }
});

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000'
    }
});

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000 !important'
    }
});
```

<br/>

### Visibility
```js
// ZIndex
Vue.use(TawkMessengerVue, {
    customStyle : {
        visibility : {
            dekstop : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            },

            mobile : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            }
        }
    }
});

// Example

Vue.use(TawkMessengerVue, {
    customStyle : {
        visibility : {
            dekstop : {
                xOffset : '15',
                yOffset : '15',
                position : 'cr'
            },

            mobile : {
                xOffset : 15,
                yOffset : 15,
                position : 'bl'
            }
        }
    }
});
```
