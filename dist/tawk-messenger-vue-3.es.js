function s({
  propertyId: i = "",
  widgetId: t = "",
  embedId: e = "",
  basePath: w = "tawk.to",
  autoStart: n = !0
}) {
  if (e.length) {
    if (!document.getElementById(e)) {
      const r = document.createElement("div");
      r.id = e, document.body.appendChild(r);
    }
    window.Tawk_API.embedded = e;
  }
  n || (window.Tawk_API.autoStart = n);
  const a = document.createElement("script");
  a.async = !0, a.src = `https://embed.${w}/${i}/${t}`, a.charset = "UTF-8", a.setAttribute("crossorigin", "*");
  const o = document.getElementsByTagName("script")[0];
  o.parentNode.insertBefore(a, o);
}
function d(i) {
  return !(!i || typeof i != "string" || i.length === 0);
}
class p {
  app;
  propertyId;
  widgetId;
  embedId;
  autoStart;
  customStyle;
  basePath;
  constructor(t, e) {
    d(e.propertyId) && d(e.widgetId) && (this.app = t, this.propertyId = e.propertyId, this.widgetId = e.widgetId, this.embedId = e.embedId, this.autoStart = e.autoStart, this.customStyle = e.customStyle, this.basePath = e.basePath, this.load());
  }
  load() {
    !window || !document || (window.Tawk_API = window.Tawk_API || {}, window.Tawk_LoadStart = /* @__PURE__ */ new Date(), s({
      propertyId: this.propertyId,
      widgetId: this.widgetId,
      embedId: this.embedId,
      basePath: this.basePath,
      autoStart: this.autoStart
    }), this.init());
  }
  init() {
    this.customStyle && typeof this.customStyle == "object" && (window.Tawk_API.customStyle = this.customStyle), typeof this.app == "object" && (this.provideActions(), this.provideGetters(), this.provideListeners(), this.provideSetters());
  }
  /**
   * API for calling an action on the widget
   */
  provideActions() {
    this.app.provide("tawkStart", () => {
      window.Tawk_API.start();
    }), this.app.provide("tawkShutdown", () => {
      window.Tawk_API.shutdown();
    }), this.app.provide("tawkMaximize", () => {
      window.Tawk_API.maximize();
    }), this.app.provide("tawkMinimize", () => {
      window.Tawk_API.minimize();
    }), this.app.provide("tawkToggle", () => {
      window.Tawk_API.toggle();
    }), this.app.provide("tawkPopup", () => {
      window.Tawk_API.popup();
    }), this.app.provide("tawkShowWidget", () => {
      window.Tawk_API.showWidget();
    }), this.app.provide("tawkHideWidget", () => {
      window.Tawk_API.hideWidget();
    }), this.app.provide("tawkToggleVisibility", () => {
      window.Tawk_API.toggleVisibility();
    }), this.app.provide("tawkEndChat", () => {
      window.Tawk_API.endChat();
    });
  }
  /**
   * API for returning a data
   */
  provideGetters() {
    this.app.provide("tawkGetWindowType", () => window.Tawk_API.getWindowType()), this.app.provide("tawkGetStatus", () => window.Tawk_API.getStatus()), this.app.provide("tawkIsChatMaximized", () => window.Tawk_API.isChatMaximized()), this.app.provide("tawkIsChatMinimized", () => window.Tawk_API.isChatMinimized()), this.app.provide("tawkIsChatHidden", () => window.Tawk_API.isChatHidden()), this.app.provide("tawkIsChatOngoing", () => window.Tawk_API.isChatOngoing()), this.app.provide("tawkIsVisitorEngaged", () => window.Tawk_API.isVisitorEngaged()), this.app.provide("tawkOnLoaded", () => window.Tawk_API.onLoaded), this.app.provide("tawkOnBeforeLoaded", () => window.Tawk_API.onBeforeLoaded), this.app.provide("tawkWidgetPosition", () => window.Tawk_API.widgetPosition());
  }
  /**
   * API for listening to events emitted inside the widget
   */
  provideListeners() {
    this.app.provide("tawkOnLoad", (t) => {
      window.addEventListener("tawkLoad", () => {
        t();
      });
    }), this.app.provide("tawkOnStatusChange", (t) => {
      window.addEventListener("tawkStatusChange", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnBeforeLoad", (t) => {
      window.addEventListener("tawkBeforeLoad", () => {
        t();
      });
    }), this.app.provide("tawkOnChatMaximized", (t) => {
      window.addEventListener("tawkChatMaximized", () => {
        t();
      });
    }), this.app.provide("tawkOnChatMinimized", (t) => {
      window.addEventListener("tawkChatMinimized", () => {
        t();
      });
    }), this.app.provide("tawkOnChatHidden", (t) => {
      window.addEventListener("tawkChatHidden", () => {
        t();
      });
    }), this.app.provide("tawkOnChatStarted", (t) => {
      window.addEventListener("tawkChatStarted", () => {
        t();
      });
    }), this.app.provide("tawkOnChatEnded", (t) => {
      window.addEventListener("tawkChatEnded", () => {
        t();
      });
    }), this.app.provide("tawkOnPrechatSubmit", (t) => {
      window.addEventListener("tawkPrechatSubmit", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnOfflineSubmit", (t) => {
      window.addEventListener("tawkOfflineSubmit", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnChatMessageVisitor", (t) => {
      window.addEventListener("tawkChatMessageVisitor", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnChatMessageAgent", (t) => {
      window.addEventListener("tawkChatMessageAgent", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnChatMessageSystem", (t) => {
      window.addEventListener("tawkChatMessageSystem", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnAgentJoinChat", (t) => {
      window.addEventListener("tawkAgentJoinChat", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnAgentLeaveChat", (t) => {
      window.addEventListener("tawkAgentLeaveChat", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnChatSatisfaction", (t) => {
      window.addEventListener("tawkChatSatisfaction", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnVisitorNameChanged", (t) => {
      window.addEventListener("tawkVisitorNameChanged", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnFileUpload", (t) => {
      window.addEventListener("tawkFileUpload", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnTagsUpdated", (t) => {
      window.addEventListener("tawkTagsUpdated", (e) => {
        t(e.detail);
      });
    }), this.app.provide("tawkOnUnreadCountChanged", (t) => {
      window.addEventListener("tawkUnreadCountChanged", (e) => {
        t(e.detail);
      });
    });
  }
  /**
   * API for setting data on the widget
   */
  provideSetters() {
    this.app.provide("tawkVisitor", (t) => {
      window.Tawk_API.visitor = t;
    }), this.app.provide("tawkSetAttributes", (t, e) => {
      window.Tawk_API.setAttributes(t, e);
    }), this.app.provide("tawkAddEvent", (t, e, w) => {
      window.Tawk_API.addEvent(t, e, w);
    }), this.app.provide("tawkAddTags", (t, e) => {
      window.Tawk_API.addTags(t, e);
    }), this.app.provide("tawkRemoveTags", (t, e) => {
      window.Tawk_API.removeTags(t, e);
    }), this.app.provide("tawkSwitchWidget", (t, e) => {
      window.Tawk_API.switchWidget(t, e);
    });
  }
}
const h = {
  install(i, t = {}) {
    if (!d(t.propertyId)) {
      console.error("[Tawk-messenger-vue warn]: You didn't specified 'propertyId' property in the plugin.");
      return;
    }
    if (!d(t.widgetId)) {
      console.error("[Tawk-messenger-vue warn]: You didn't specified 'widgetId' property in the plugin.");
      return;
    }
    new p(i, t);
  }
};
export {
  h as default
};
