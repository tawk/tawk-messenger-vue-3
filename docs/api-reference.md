# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one
of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [tawkOnLoad](#tawkonload)
  - [tawkOnStatusChange](#tawkonstatuschange)
  - [tawkOnBeforeLoad](#tawkonbeforeload)
  - [tawkOnChatMaximized](#tawkonchatmaximized)
  - [tawkOnChatMinimized](#tawkonchatminimized)
  - [tawkOnChatHidden](#tawkonchathidden)
  - [tawkOnChatStarted](#tawkonchatstarted)
  - [tawkOnChatEnded](#tawkonchatended)
  - [tawkOnPrechatSubmit](#tawkonprechatsubmit)
  - [tawkOnOfflineSubmit](#tawkonofflinesubmit)
  - [tawkOnChatMessageVisitor](#tawkonchatmessagevisitor)
  - [tawkOnChatMessageAgent](#tawkonchatmessageagent)
  - [tawkOnChatMessageSystem](#tawkonchatmessagesystem)
  - [tawkOnAgentJoinChat](#tawkonagentjoinchat)
  - [tawkOnAgentLeaveChat](#tawkonagentleavechat)
  - [tawkOnChatSatisfaction](#tawkonchatsatisfaction)
  - [tawkOnVisitorNameChanged](#tawkonvisitornamechanged)
  - [tawkOnFileUpload](#tawkonfileupload)
  - [tawkOnTagsUpdated](#tawkontagsupdated)
  - [tawkOnUnreadCountChanged](#tawkonunreadcountchanged)
  - [tawkVisitor](#tawkvisitor)
  - [autoStart](#autostart)
  - [start](#start)
  - [tawkShutdown](#tawkshutdown)
  - [tawkMaximize](#tawkmaximize)
  - [tawkMinimize](#tawkminimize)
  - [tawkToggle](#tawktoggle)
  - [tawkPopup](#tawkpopup)
  - [tawkGetWindowType](#tawkgetwindowtype)
  - [tawkShowWidget](#tawkshowwidget)
  - [tawkHideWidget](#tawkhidewidget)
  - [tawkToggleVisibility](#tawktogglevisibility)
  - [tawkGetStatus](#tawkgetstatus)
  - [tawkIsChatMaximized](#tawkischatmaximized)
  - [tawkIsChatMinimized](#tawkischatminimized)
  - [tawkIsChatHidden](#tawkischathidden)
  - [tawkIsChatOngoing](#tawkischatongoing)
  - [tawkIsVisitorEngaged](#tawkisvisitorengaged)
  - [tawkOnLoaded](#tawkonloaded)
  - [tawkOnBeforeLoaded](#tawkonbeforeloaded)
  - [tawkWidgetPosition](#tawkwidgetposition)
  - [tawkEndChat](#tawkendchat)
  - [tawkSetAttributes](#tawksetattributes)
  - [tawkAddEvent](#tawkaddevent)
  - [tawkAddTags](#tawkaddtags)
  - [tawkRemoveTags](#tawkremovetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)
  - [tawkSwitchWidget](#tawkswitchwidget)

<br/>

## tawkOnLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnload(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnStatusChange
Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnStatusChange = inject('tawkOnStatusChange');

    tawkOnStatusChange((status) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnStatusChange'],

    mounted() {
        this.tawkOnStatusChange((status) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnBeforeLoad = inject('tawkOnBeforeLoad');

    tawkOnBeforeLoad(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnBeforeLoad'],

    mounted() {
        this.tawkOnBeforeLoad(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatMaximized = inject('tawkOnChatMaximized');

    tawkOnChatMaximized(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatMaximized'],

    mounted() {
        this.tawkOnChatMaximized(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatMinimized = inject('tawkOnChatMinimized');

    tawkOnChatMinimized(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatMinimized'],

    mounted() {
        this.tawkOnChatMinimized(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatHidden = inject('tawkOnChatHidden');

    tawkOnChatHidden(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatHidden'],

    mounted() {
        this.tawkOnChatHidden(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatStarted
Callback function invoked when the widget is started.

`Composition API`
```html
<script setup>
    const tawkOnChatStarted = inject('tawkOnChatStarted');

    tawkOnChatStarted(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatStarted'],

    mounted() {
        this.tawkOnChatStarted(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatEnded = inject('tawkOnChatEnded');

    tawkOnChatEnded(() => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatEnded'],

    mounted() {
        this.tawkOnChatEnded(() => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnPrechatSubmit = inject('tawkOnPrechatSubmit');

    tawkOnPrechatSubmit((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnPrechatSubmit'],

    mounted() {
        this.tawkOnPrechatSubmit((data) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnOfflineSubmit = inject('tawkOnOfflineSubmit');

    tawkOnOfflineSubmit((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnOfflineSubmit'],

    mounted() {
        this.tawkOnOfflineSubmit((data => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatMessageVisitor = inject('tawkOnChatMessageVisitor');

    tawkOnChatMessageVisitor((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatMessageVisitor'],

    mounted() {
        this.tawkOnChatMessageVisitor((message) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatMessageAgent = inject('tawkOnChatMessageAgent');

    tawkOnChatMessageAgent((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatMessageAgent'],

    mounted() {
        this.tawkOnChatMessageAgent((message) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatMessageSystem = inject('tawkOnChatMessageSystem');

    tawkOnChatMessageSystem((message) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatMessageSystem'],

    mounted() {
        this.tawkOnChatMessageSystem((message) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnAgentJoinChat = inject('tawkOnAgentJoinChat');

    tawkOnAgentJoinChat((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnAgentJoinChat'],

    mounted() {
        this.tawkOnAgentJoinChat((data) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnAgentLeaveChat = inject('tawkOnAgentLeaveChat');

    tawkOnAgentLeaveChat((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnAgentLeaveChat'],

    mounted() {
        this.tawkOnAgentLeaveChat((data) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnChatSatisfaction = inject('tawkOnChatSatisfaction');

    tawkOnChatSatisfaction((satisfaction) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnChatSatisfaction'],

    mounted() {
        this.tawkOnChatSatisfaction((satisfaction) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnVisitorNameChanged = inject('tawkOnVisitorNameChanged');

    tawkOnVisitorNameChanged((visitorName) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnVisitorNameChanged'],

    mounted() {
        this.tawkOnVisitorNameChanged((visitorName) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the function. This callback is not supported in pop out chat window.

`Composition API`
```html
<script setup>
    const tawkOnFileUpload = inject('tawkOnFileUpload');

    tawkOnFileUpload((link) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnFileUpload'],

    mounted() {
        this.tawkOnFileUpload((link) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnTagsUpdated
Callback function invoked when a tag is updated.

`Composition API`
```html
<script setup>
    const tawkOnTagsUpdated = inject('tawkOnTagsUpdated');

    tawkOnTagsUpdated((data) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnTagsUpdated'],

    mounted() {
        this.tawkOnTagsUpdated((data) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkOnUnreadCountChanged
Callback function returns count of unread messages.

`Composition API`
```html
<script setup>
    const tawkOnUnreadCountChanged = inject('tawkOnUnreadCountChanged');

    tawkOnUnreadCountChanged((count) => {
        // place your code here
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnUnreadCountChanged'],

    mounted() {
        this.tawkOnUnreadCountChanged((count) => {
            // place your code here
        });
    }
}
```

<br/>

## tawkVisitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

`Composition API`
```html
<script setup>
    const tawkVisitor = inject('tawkVisitor');

    tawkVisitor({
        name : 'Name',
        email : 'email@email.com'
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkVisitor'],

    mounted() {
        this.tawkVisitor({
            name : 'Name',
            email : 'email@email.com'
        });
    }
}
```

<br/>

## autoStart
If set to true, it will auto-start the Tawk socket connection for chat services. If set to false,
you will need to manually call the start API. It will not register and connect to the dashboard
if this is set to false.

```js
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

app.use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id',
    autoStart : false
});
```

<br/>

## start
Start the tawk socket connection.

`Composition API`
```html
<script setup>
    const tawkStart = inject('tawkStart');

    start();
</script>
```

`Options API`
```js
export default {
    inject : ['tawkStart'],

    mounted() {
        this.tawkStart();
    }
}
```

<br/>

## tawkShutdown
End the tawk socket connection.

`Composition API`
```html
<script setup>
    const tawkShutdown = inject('tawkShutdown');

    tawkShutdown();
</script>
```

`Options API`
```js
export default {
    inject : ['tawkShutdown'],

    mounted() {
        this.tawkShutdown();
    }
}
```

<br/>

## tawkMaximize
Maximizes the chat widget.

`Composition API`
```html
<script setup>
    const tawkMaximize = inject('tawkMaximize');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkMaximize();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkMaximize', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkMaximize();
        });
    }
}
```

<br/>

## tawkMinimize
Minimizes the chat widget.

`Composition API`
```html
<script setup>
    const tawkMinimize = inject('tawkMinimize');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkMinimize();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkMinimize', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkMinimize();
        });
    }
}
```

<br/>

## tawkToggle
Minimizes or Maximizes the chat widget based on the current state.

`Composition API`
```html
<script setup>
    const tawkToggle = inject('tawkToggle');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkToggle();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkToggle', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkToggle();
        });
    }
}
```

<br/>

## tawkPopup
Opens the chat widget as a pop out.

`Composition API`
```html
<script setup>
    const tawkPopup = inject('tawkPopup');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkPopup();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkPopup', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkPopup();
        });
    }
}
```

<br/>

## tawkGetWindowType
Returns the current widget type whether it’s inline or embed.

`Composition API`
```html
<script setup>
    const tawkGetWindowType = inject('tawkGetWindowType');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkGetWindowType() === 'inline') {
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
    inject : ['tawkGetWindowType', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if (this.tawkGetWindowType() === 'inline') {
                // do something if it's inline
            } else {
                // do something if it's embed
            }
        });
    }
}
```

<br/>

## tawkShowWidget
Shows the chat widget.

`Composition API`
```html
<script setup>
    const tawkShowWidget = inject('tawkShowWidget');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkShowWidget();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkShowWidget', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkShowWidget();
        });
    }
}
```

<br/>

## tawkHideWidget
Hide the chat widget.

`Composition API`
```html
<script setup>
    const tawkHideWidget = inject('tawkHideWidget');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkHideWidget();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkHideWidget', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkHideWidget();
        });
    }
}
```

<br/>

## tawkToggleVisibility
Hides or Shows the chat widget based on the current visibility state.

`Composition API`
```html
<script setup>
    const tawkToggleVisibility = inject('tawkToggleVisibility');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkToggleVisibility();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkToggleVisibility', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkToggleVisibility();
        });
    }
}
```

<br/>

## tawkGetStatus
Returns the current page status (online, away or offline).

`Composition API`
```html
<script setup>
    const tawkGetStatus = inject('tawkGetStatus');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkGetStatus() === 'online') {
            // do something for online
        } else if (tawkGetStatus() === 'away') {
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
    inject : ['tawkGetStatus', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if (this.tawkGetStatus() === 'online') {
                // do something for online
            } else if (this.tawkGetStatus() === 'away') {
                // do something for away
            } else {
                // do something for offline
            }
        });
    }
}
```

<br/>

## tawkIsChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

`Composition API`
```html
<script setup>
    const tawkIsChatMaximized = inject('tawkIsChatMaximized');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkIsChatMaximized()) {
            // do something if it's maximized
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkIsChatMaximized', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if (this.tawkIsChatMaximized()) {
                // do something if it's maximized
            }
        });
    }
}
```

<br/>

## tawkIsChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

`Composition API`
```html
<script setup>
    const tawkIsChatMinimized = inject('tawkIsChatMinimized');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkIsChatMinimized()) {
            // do something if it's minimized
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkIsChatMinimized', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if(this.tawkIsChatMinimized()) {
                // do something if it's minimized
            }
        });
    }
}
```

<br/>

## tawkIsChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

`Composition API`
```html
<script setup>
    const tawkIsChatHidden = inject('tawkIsChatHidden');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkIsChatHidden()) {
            // do something if chat widget is hidden
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkIsChatHidden', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if(this.tawkIsChatHidden()) {
                // do something if chat widget is hidden
            }
        });
    }
}
```

<br/>

## tawkIsChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

`Composition API`
```html
<script setup>
    const tawkIsChatOngoing = inject('tawkIsChatOngoing');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkIsChatOngoing()) {
            // do something if there's ongoing chat
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkIsChatOngoing', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if(this.tawkIsChatOngoing()) {
                // do something if there's ongoing chat
            }
        });
    }
}
```

<br/>

## tawkIsVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

`Composition API`
```html
<script setup>
    const tawkIsVisitorEngaged = inject('tawkIsVisitorEngaged');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkIsVisitorEngaged()) {
            // do something if visitor engaged in chat
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkIsVisitorEngaged', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if(this.tawkIsVisitorEngaged()) {
                // do something if visitor engaged in chat
            }
        });
    }
}
```

<br/>

## tawkOnLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

`Composition API`
```html
<script setup>
    const tawkOnLoaded = inject('tawkOnLoaded');

    if (tawkOnLoaded()) {
        // do something when widget is loaded
    }
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnLoaded'],

    mounted() {
        if(this.tawkOnLoaded()) {
            // do something when widget is loaded
        }
    }
}
```

## tawkOnBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialize.

`Composition API`
```html
<script setup>
    const tawkOnBeforeLoaded = inject('tawkOnBeforeLoaded');

    if (tawkOnBeforeLoaded()) {
        // do something before onload
    }
</script>
```

`Options API`
```js
export default {
    inject : ['tawkOnBeforeLoaded'],

    mounted() {
        if(this.tawkOnBeforeLoaded()) {
            // do something before onload
        }
    }
}
```

## tawkWidgetPosition
Returns a string for current position of the widget.

`Composition API`
```html
<script setup>
    const tawkWidgetPosition = inject('tawkWidgetPosition');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        if (tawkWidgetPosition() === 'br') {
            // do something if the widget is at bottom right
        }
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkWidgetPosition', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            if(this.tawkWidgetPosition() === 'br') {
                // do something if the widget is at bottom right
            }
        });
    }
}
```

<br/>

## tawkEndChat
Ends the current ongoing chat.

`Composition API`
```html
<script setup>
    const tawkEndChat = inject('tawkEndChat');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkEndChat();
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkEndChat', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkEndChat();
        });
    }
}
```


<br/>

## tawkSetAttributes
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
    const tawkSetAttributes = inject('tawkSetAttributes');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkSetAttributes({
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
    inject : ['tawkSetAttributes', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkSetAttributes({
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

## tawkAddEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

`Composition API`
```html
<script setup>
    const tawkAddEvent = inject('tawkAddEvent');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkAddEvent(
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
    inject : ['tawkAddEvent', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkAddEvent(
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

## tawkAddTags
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
    const tawkAddTags = inject('tawkAddTags');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkAddTags([
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
    inject : ['tawkAddTags', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkAddTags([
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

## tawkRemoveTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

`Composition API`
```html
<script setup>
    const tawkRemoveTags = inject('tawkRemoveTags');
    const tawkOnLoad = inject('tawkOnLoad');

    tawkOnLoad(() => {
        tawkRemoveTags([
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
    inject : ['tawkRemoveTags', 'tawkOnLoad'],

    mounted() {
        this.tawkOnLoad(() => {
            this.tawkRemoveTags([
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
    const tawkVisitor = inject('tawkVisitor');

    tawkVisitor({
        name : 'Name',
        email : 'email@email.com',
        hash : '<calculate-hash>'
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkVisitor'],

    mounted() {
        this.tawkVisitor({
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
            desktop : {
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
            desktop : {
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

<br/>

## tawkSwitchWidget
Disconnect the current widget connection, logout if it has existing user login and switch to
another widget.

`Composition API`
```html
<script setup>
    const tawkSwitchWidget = inject('tawkSwitchWidget');

    tawkSwitchWidget({
        propertyId : 'your-property-id',
        widgetId : 'your-widget-id'
    }, function () {
        // do something
    });
</script>
```

`Options API`
```js
export default {
    inject : ['tawkSwitchWidget'],

    mounted() {
        this.tawkSwitchWidget({
            propertyId : 'your-property-id',
            widgetId : 'your-widget-id'
        }, function() {
            // do something
        });
    }
}
```
