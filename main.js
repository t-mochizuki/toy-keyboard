(function () {
  window.addEventListener("DOMContentLoaded", () => {
    const context = new window.AudioContext();

    class Key {
      constructor(frequency) {
        this.osc = null;
        this.frequency = frequency;
      }

      start() {
        // keyup event is lost when alt key is pressed.
        if (this.osc) {
          this.osc.stop();
        }
        this.osc = context.createOscillator();
        this.osc.frequency.setValueAtTime(this.frequency, context.currentTime);
        this.osc.connect(context.destination);
        this.osc.start();
      }

      stop() {
        this.osc.stop();
      }
    }

    // 0: 48
    const key48 = new Key(523.251);
    // 1: 49
    const key49 = new Key(440);

    const body = document.querySelector('body');

    body.addEventListener("keydown", event => {
      if (event.isComposing || event.repeat || event.keyCode === 229) {
        return;
      }

      keyCode = event.keyCode;
      if (48 === keyCode) {
        key48.start();
      } else if (49 === keyCode) {
        key49.start();
      }
    });

    body.addEventListener("keyup", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }

      keyCode = event.keyCode;
      if (48 === keyCode) {
        key48.stop();
      } else if (49 === keyCode) {
        key49.stop();
      }
    });
  });
})();
