export default class NotificationMessage {
  static lastNotificationMessage;

  constructor(message, { duration, type }={}) {
    this.message = message;
    this.duration = duration || 1e3;
    this.type = type || 'error';
    this.element = this.createElement(this.createTemplates());
  }


  createElement(template) {
    const element = document.createElement("div");
    element.innerHTML = template;
    return element.firstElementChild;
  }

  createTemplates() {
    return `
    <div class="notification ${this.type}" style="--value:${this.duration}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
      ${this.message}
      </div>
    </div>
    `;
  }

  show(container = document.body) {
    if (NotificationMessage.lastNotificationMessage) {
      NotificationMessage.lastNotificationMessage.destroy();
    }
    NotificationMessage.lastNotificationMessage = this;

    container.append(this.element); //appendChild
    this.timeoutId = setTimeout(() => {
      this.remove();
    }, this.duration);

  }
  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}
