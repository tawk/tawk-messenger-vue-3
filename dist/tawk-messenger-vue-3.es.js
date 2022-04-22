function loadScript({ propertyId = "", widgetId = "", embedId = "", basePath = "tawk.to" }) {
  if (embedId.length) {
    if (!document.getElementById(embedId)) {
      const element = document.createElement("div");
      element.id = embedId;
      document.body.appendChild(element);
    }
    window.Tawk_API.embedded = embedId;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
}
function isValidString(value) {
  if (!value || value.length === 0) {
    return false;
  }
  return value !== null && value !== void 0 && typeof value === "string";
}
class TawkMessenger {
  constructor(app, options) {
    if (!isValidString(options.propertyId)) {
      return;
    }
    if (!isValidString(options.widgetId)) {
      return;
    }
    this.app = app;
    this.propertyId = options.propertyId;
    this.widgetId = options.widgetId;
    this.embedId = options.embedId;
    this.customStyle = options.customStyle;
    this.basePath = options.basePath;
    this.load();
  }
  load() {
    if (!window || !document) {
      return;
    }
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    loadScript({
      propertyId: this.propertyId,
      widgetId: this.widgetId,
      embedId: this.embedId,
      basePath: this.basePath
    });
    this.init();
  }
  init() {
    if (this.customStyle && typeof this.customStyle === "object") {
      window.Tawk_API.customStyle = this.customStyle;
    }
    if (typeof this.app !== "object") {
      return;
    }
    this.provideActions();
    this.provideGetters();
    this.provideListeners();
    this.provideSetters();
  }
  provideActions() {
    this.app.provide("maximize", () => {
      window.Tawk_API.maximize();
    });
    this.app.provide("minimize", () => {
      window.Tawk_API.minimize();
    });
    this.app.provide("toggle", () => {
      window.Tawk_API.toggle();
    });
    this.app.provide("popup", () => {
      window.Tawk_API.popup();
    });
    this.app.provide("showWidget", () => {
      window.Tawk_API.showWidget();
    });
    this.app.provide("hideWidget", () => {
      window.Tawk_API.hideWidget();
    });
    this.app.provide("toggleVisibility", () => {
      window.Tawk_API.toggleVisibility();
    });
    this.app.provide("endChat", () => {
      window.Tawk_API.endChat();
    });
  }
  provideGetters() {
    this.app.provide("getWindowType", () => {
      window.Tawk_API.getWindowType();
    });
    this.app.provide("getStatus", () => {
      window.Tawk_API.getStatus();
    });
    this.app.provide("isChatMaximized", () => {
      window.Tawk_API.isChatMaximized();
    });
    this.app.provide("isChatMinimized", () => {
      window.Tawk_API.isChatMinimized();
    });
    this.app.provide("isChatHidden", () => {
      window.Tawk_API.isCHatHidden();
    });
    this.app.provide("isChatOngoing", () => {
      window.Tawk_API.isChatOngoing();
    });
    this.app.provide("isVisitorEngaged", () => {
      window.Tawk_API.isVisitorEngaged();
    });
    this.app.provide("onLoaded", () => {
      window.Tawk_API.onLoaded;
    });
    this.app.provide("onBeforeLoaded", () => {
      window.Tawk_API.onBeforeLoaded;
    });
    this.app.provide("widgetPosition", () => {
      window.Tawk_API.widgetPosition();
    });
  }
  provideListeners() {
    this.app.provide("onLoad", (event) => {
      window.addEventListener("tawkLoad", () => {
        event();
      });
    });
    this.app.provide("onStatusChange", (event) => {
      window.addEventListener("tawkStatusChange", (status) => {
        event(status.detail);
      });
    });
    this.app.provide("onBeforeLoad", (event) => {
      window.addEventListener("tawkBeforeLoad", () => {
        event();
      });
    });
    this.app.provide("onChatMaximized", (event) => {
      window.addEventListener("tawkChatMaximized", () => {
        event();
      });
    });
    this.app.provide("onChatMinimized", (event) => {
      window.addEventListener("tawkChatMinimized", () => {
        event();
      });
    });
    this.app.provide("onChatHidden", (event) => {
      window.addEventListener("tawkChatHidden", () => {
        event();
      });
    });
    this.app.provide("onChatStarted", (event) => {
      window.addEventListener("tawkChatStarted", () => {
        event();
      });
    });
    this.app.provide("onChatEnded", (event) => {
      window.addEventListener("tawkChatEnded", () => {
        event();
      });
    });
    this.app.provide("onPrechatSubmit", (event) => {
      window.addEventListener("tawkPrechatSubmit", (data) => {
        event(data.detail);
      });
    });
    this.app.provide("onOfflineSubmit", (event) => {
      window.addEventListener("tawkOfflineSubmit", (data) => {
        event(data.detail);
      });
    });
    this.app.provide("onChatMessageVisitor", (event) => {
      window.addEventListener("tawkChatMessageVisitor", (message) => {
        event(message.detail);
      });
    });
    this.app.provide("onChatMessageAgent", (event) => {
      window.addEventListener("tawkChatMessageAgent", (message) => {
        event(message.detail);
      });
    });
    this.app.provide("onChatMessageSystem", (event) => {
      window.addEventListener("tawkChatMessageSystem", (message) => {
        event(message.detail);
      });
    });
    this.app.provide("onAgentJoinChat", (event) => {
      window.addEventListener("tawkAgentJoinChat", (data) => {
        event(data.detail);
      });
    });
    this.app.provide("onAgentLeaveChat", (event) => {
      window.addEventListener("tawkAgentLeaveChat", (data) => {
        event(data.detail);
      });
    });
    this.app.provide("onChatSatisfaction", (event) => {
      window.addEventListener("tawkChatSatisfaction", (satisfaction) => {
        event(satisfaction.detail);
      });
    });
    this.app.provide("onVisitorNameChanged", (event) => {
      window.addEventListener("tawkVisitorNameChanged", (visitorName) => {
        event(visitorName.detail);
      });
    });
    this.app.provide("onFileUpload", (event) => {
      window.addEventListener("tawkFileUpload", (link) => {
        event(link.detail);
      });
    });
    this.app.provide("onTagsUpdated", (event) => {
      window.addEventListener("tawkTagsUpdated", (data) => {
        event(data.detail);
      });
    });
    this.app.provide("onUnreadCountChanged", (event) => {
      window.addEventListener("tawkUnreadCountChanged", (data) => {
        event(data.detail);
      });
    });
  }
  provideSetters() {
    this.app.provide("visitor", (data) => {
      window.Tawk_API.visitor(data);
    });
    this.app.provide("setAttributes", (attribute, callback) => {
      window.Tawk_API.setAttributes(attribute, callback);
    });
    this.app.provide("addEvent", (event, metadata, callback) => {
      window.Tawk_API.addEvent(event, metadata, callback);
    });
    this.app.provide("addTags", (tags, callback) => {
      window.Tawk_API.addTags(tags, callback);
    });
    this.app.provide("removeTags", (tags, callback) => {
      window.Tawk_API.removeTags(tags, callback);
    });
  }
}
var index = {
  install: (app, options = {}) => {
    if (!isValidString(options.propertyId)) {
      console.error("[Tawk-messenger-vue warn]: You didn't specified 'propertyId' property in the plugin.");
      return;
    }
    if (!isValidString(options.widgetId)) {
      console.error("[Tawk-messenger-vue warn]: You didn't specified 'widgetId' property in the plugin.");
      return;
    }
    new TawkMessenger(app, options);
  }
};
export { index as default };
