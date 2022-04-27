# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one
of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
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
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
        this.onVisitorNameChanged((visitorName) => {
            // place your code here
        });
    }
}
```

<br/>

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const onFileUpload = inject('onFileUpload');

    onFileUpload((link) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['onFileUpload'],

    mounted() {
        this.onFileUpload((link) => {
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

    mounted() {
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

    mounted() {
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
    inject : ['visitor'],

    mounted() {
        this.visitor({
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

    mounted() {
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

`Composition API`
```html
<script setup>
    const showWidget = inject('showWidget');
    const onLoad = inject('onLoad');

    onLoad(() => {
        showWidget();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['showWidget', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.showWidget();
        });
    }
}
```

<br/>

## hideWidget
Hide the chat widget.

`Composition API`
```html
<script setup>
    const hideWidget = inject('hideWidget');
    const onLoad = inject('onLoad');

    onLoad(() => {
        hideWidget();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['hideWidget', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.hideWidget();
        });
    }
}
```

<br/>

## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

`Composition API`
```html
<script setup>
    const toggleVisibility = inject('toggleVisibility');
    const onLoad = inject('onLoad');

    onLoad(() => {
        toggleVisibility();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['toggleVisibility', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.toggleVisibility();
        });
    }
}
```

<br/>

## getStatus
Returns the current page status (online, away or offline).

`Composition API`
```html
<script setup>
    const getStatus = inject('getStatus');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (getStatus() === 'online') {
            // do something for online
        } else if (getStatus() === 'away') {
            // do something for away
        } else {
            // do something for offline
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['getStatus', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if (this.getStatus() === 'online') {
                // do something for online
            } else if (this.getStatus() === 'away') {
                // do something for away
            } else {
                // do something for offline
            }
        });
    }
}
```

<br/>

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

`Composition API`
```html
<script setup>
    const isChatMaximized = inject('isChatMaximized');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (isChatMaximized()) {
            // do something if it's maximized
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['isChatMaximized', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if (this.isChatMaximized()) {
                // do something if it's maximized
            }
        });
    }
}
```

<br/>

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

`Composition API`
```html
<script setup>
    const isChatMinimized = inject('isChatMinimized');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (isChatMinimized()) {
            // do something if it's minimized
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['isChatMinimized', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if(this.isChatMinimized()) {
                // do something if it's minimized
            }
        });
    }
}
```

<br/>

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

`Composition API`
```html
<script setup>
    const isChatHidden = inject('isChatHidden');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (isChatHidden()) {
            // do something if chat widget is hidden
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['isChatHidden', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if(this.isChatHidden()) {
                // do something if chat widget is hidden
            }
        });
    }
}
```

<br/>

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

`Composition API`
```html
<script setup>
    const isChatOngoing = inject('isChatOngoing');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (isChatOngoing()) {
            // do something if there's ongoing chat
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['isChatOngoing', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if(this.isChatOngoing()) {
                // do something if there's ongoing chat
            }
        });
    }
}
```

<br/>

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

`Composition API`
```html
<script setup>
    const isVisitorEngaged = inject('isVisitorEngaged');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (isVisitorEngaged()) {
            // do something if visitor engaged in chat
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['isVisitorEngaged', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if(this.isVisitorEngaged()) {
                // do something if visitor engaged in chat
            }
        });
    }
}
```

<br/>

## onLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

`Composition API`
```html
<script setup>
    const onLoaded = inject('onLoaded');

    if (onLoaded()) {
        // do something when widget is loaded
    }
</script>
```

`Options API`
```js
export default {
    inject : ['onLoaded'],

    mounted() {
        if(this.onLoaded()) {
            // do something when widget is loaded
        }
    }
}
```

## onBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialize.

`Composition API`
```html
<script setup>
    const onBeforeLoaded = inject('onBeforeLoaded');

    if (onBeforeLoaded()) {
        // do something before onload
    }
</script>
```

`Options API`
```js
export default {
    inject : ['onBeforeLoaded'],

    mounted() {
        if(this.onBeforeLoaded()) {
            // do something before onload
        }
    }
}
```

## widgetPosition
Returns a string for current position of the widget.

`Composition API`
```html
<script setup>
    const widgetPosition = inject('widgetPosition');
    const onLoad = inject('onLoad');

    onLoad(() => {
        if (widgetPosition() === 'br') {
            // do something if the widget is at bottom right
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['widgetPosition', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            if(this.widgetPosition() === 'br') {
                // do something if the widget is at bottom right
            }
        });
    }
}
```

<br/>

## endChat
Ends the current ongoing chat.

`Composition API`
```html
<script setup>
    const endChat = inject('endChat');
    const onLoad = inject('onLoad');

    onLoad(() => {
        endChat();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['endChat', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.endChat();
        });
    }
}
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

`Composition API`
```html
<script setup>
    const setAttributes = inject('setAttributes');
    const onLoad = inject('onLoad');

    onLoad(() => {
        setAttributes({
            id : 'A1234',
            store : 'Midvalley',
            hash : 'hash value' // Optional
        }, function(error) {
            // do something if error
        });
    });
</script>
```

`Options API`
```js
export default {
    inject : ['setAttributes', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.setAttributes({
                id : 'A1234',
                store : 'Midvalley',
                hash : 'hash value' // Optional
            }, function(error) {
                // do something if error
            });
        });
    }
}
```

<br/>

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

`Composition API`
```html
<script setup>
    const addEvent = inject('addEvent');
    const onLoad = inject('onLoad');

    onLoad(() => {
        addEvent(
            'requested-quotation',
            {
                skU : 'A0012',
                name : 'Jeans',
                price : '50'
            },
            function(error) {
                // do something if error
            }
        );
    });
</script>
```

`Options API`
```js
export default {
    inject : ['addEvent', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.addEvent(
                'requested-quotation',
                {
                    skU : 'A0012',
                    name : 'Jeans',
                    price : '50'
                },
                function(error) {
                    // do something if error
                }
            );
        });
    }
}
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

`Composition API`
```html
<script setup>
    const addTags = inject('addTags');
    const onLoad = inject('onLoad');

    onLoad(() => {
        addTags([
            'hello',
            'world'
        ], function(error) {
            // do something if error
        });
    });
</script>
```

`Options API`
```js
export default {
    inject : ['addTags', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.addTags([
                'hello',
                'world'
            ], function(error) {
                // do something if error
            });
        });
    }
}
```

<br/>

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

`Composition API`
```html
<script setup>
    const removeTags = inject('removeTags');
    const onLoad = inject('onLoad');

    onLoad(() => {
        removeTags([
            'hello',
            'world'
        ], function(error) {
            // do something if error
        });
    });
</script>
```

`Options API`
```js
export default {
    inject : ['removeTags', 'onLoad'],

    mounted() {
        this.onLoad(() => {
            this.removeTags([
                'hello',
                'world'
            ], function(error) {
                // do something if error
            });
        });
    }
}
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

`Composition API`
```html
<script setup>
    const visitor = inject('visitor');

    visitor({
        name : 'Name',
        email : 'email@email.com',
        hash : '<calculate-hash>'
    });
</script>
```

`Options API`
```js
export default {
    inject : ['visitor'],

    mounted() {
        this.visitor({
            name : 'Name',
            email : 'email@email.com',
            hash : '<calculate-hash>'
        });
    }
}
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.

### zIndex
```js
// ZIndex
app.use(TawkMessengerVue, {
    customStyle : {
        zIndex : Integer | String
    }
});

// Example

app.use(TawkMessengerVue, {
    customStyle : {
        zIndex : 1000
    }
});

app.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000'
    }
});

app.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000 !important'
    }
});
```

<br/>

### Visibility
```js
// ZIndex
app.use(TawkMessengerVue, {
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

app.use(TawkMessengerVue, {
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
