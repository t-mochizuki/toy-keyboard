(function () {
  // 0: 48
  let osc48 = null;
  // 1: 49
  let osc49 = null;
  window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');

    body.addEventListener("keydown", event => {
      if (event.isComposing || event.repeat || event.keyCode === 229) {
        return;
      }

      keyCode = event.keyCode;
      if (48 === keyCode) {
        let context = new AudioContext();
        // keyup event is lost when alt key is pressed.
        if (osc48) {
          osc48.stop();
        }
        osc48 = new OscillatorNode(context);
        // C: 523.251
        osc48.frequency.setValueAtTime(523.251, context.currentTime);
        osc48.connect(context.destination);
        osc48.start();
      } else if (49 === keyCode) {
        let context = new AudioContext();
        // keyup event is lost when alt key is pressed.
        if (osc49) {
          osc49.stop();
        }
        osc49 = new OscillatorNode(context);
        // A: 440
        osc49.frequency.setValueAtTime(440, context.currentTime);
        osc49.connect(context.destination);
        osc49.start();
      }
    });

    body.addEventListener("keyup", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }

      keyCode = event.keyCode;
      if (48 === keyCode) {
        osc48.stop();
      } else if (49 === keyCode) {
        osc49.stop();
      }
    });
  });
})();
