(function () {
  // 0: 48
  var osc48 = null;

  window.addEventListener("keydown", event => {
    if (event.isComposing || event.repeat || event.keyCode === 229) {
      return;
    }

    keycode = event.keyCode;
    if (48 === keycode) {
      var context = new AudioContext();
      osc48 = new OscillatorNode(context);
      // C: 523.251
      osc48.frequency.setValueAtTime(523.251, context.currentTime);
      osc48.connect(context.destination);
      osc48.start();
    }
  });

  window.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    keycode = event.keyCode;
    if (48 === keycode) {
      osc48.stop();
    }
  });
})();
