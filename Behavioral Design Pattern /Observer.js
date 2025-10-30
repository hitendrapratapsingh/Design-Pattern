const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on('userRegistered', (user) => {
  console.log(`Welcome ${user.name}!`);
});

emitter.emit('userRegistered', { name: 'Hitendra' });
