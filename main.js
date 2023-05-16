window.addEventListener("load", () => {
  (() => {
    const body = document.querySelector("body");

    body.addEventListener("click", () => {
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
          if (this.osc) {
            this.osc.stop();
          }
        }
      }

      let keys = new Map([
        ["d", new Key(391.995)], // G4
        ["r", new Key(415.305)], // G#4
        ["f", new Key(440.000)], // A4
        ["t", new Key(466.164)], // A#4
        ["g", new Key(493.883)], // B4
        ["h", new Key(523.251)], // C5
        ["u", new Key(554.365)], // C#5
        ["j", new Key(587.330)], // D5
        ["i", new Key(622.254)], // D#5
        ["k", new Key(659.255)], // E5
        ["l", new Key(698.456)], // F5
        ["p", new Key(739.989)], // F#5
      ]);

      body.addEventListener("keydown", event => {
        if (event.isComposing || event.repeat || event.keyCode === 229) {
          return;
        }

        const key = event.key;
        if (keys.has(key)) {
          keys.get(key).start();
        }
      });

      body.addEventListener("keyup", event => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }

        const key = event.key;
        if (keys.has(key)) {
          keys.get(key).stop();
        }
      });
    });
  })();
});
