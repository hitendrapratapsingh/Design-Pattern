class EmailNotification {
  send(msg) { console.log(`Email: ${msg}`); }
}

class SMSNotification {
  send(msg) { console.log(`SMS: ${msg}`); }
}

class PushNotification {
  send(msg) { console.log(`Push: ${msg}`); }
}

class NotificationFactory {
  static create(type) {
    switch (type) {
      case "email": return new EmailNotification();
      case "sms": return new SMSNotification();
      case "push": return new PushNotification();
      default: throw new Error("Invalid notification type");
    }
  }
}

// Usage
const notify = NotificationFactory.create("sms");
notify.send("Hello User!");
