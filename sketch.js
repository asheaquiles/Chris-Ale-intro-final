let inputText = ""; // Variable to store the text input by the user

function setup() {
  createCanvas(1500, 800);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text("Type something and press Enter:", width / 2, height / 2 - 20);
  text(inputText, width / 2, height / 2 + 20);
}

function keyPressed() {
  if (keyCode === ENTER) {
    generateSoundSequence(inputText);
    inputText = "";
  } else if (keyCode === BACKSPACE) {
    // Remove the last letter from the input text when backspace is pressed
    inputText = inputText.slice(0, -1);
  } else {
    // Add the pressed key to the input text
    inputText += key.toLowerCase(); // Convert all characters to lowercase for consistency
  }
}
//sound part
function generateSoundSequence(text) {
  let duration = 100; // Duration of each sound in milliseconds
  let minFrequency = 50; // Minimum frequency 
  let maxFrequency = 1000; // Maximum frequency

  // Loop through each character in the input text
  for (let i = 0; i < text.length; i++) {
    let character = text.charAt(i);
    // Generate a random frequency and volume for each character
    let frequency = random(minFrequency, maxFrequency); // Random frequency between minFrequency and maxFrequency Hz
    let volume = random(0.1, 0.5); // Random volume between 0.1 and 0.5
    // Generate a random waveform type
    let waveforms = ['sine', 'triangle', 'sawtooth', 'square'];
    let waveform = random(waveforms);

    // Play the sound after a delay
    setTimeout(function() {
      playSynthSound(frequency, volume, duration, waveform);
    }, i * duration); // Delay each sound based on its position in the text
  }
}

function playSynthSound(frequency, volume, duration, waveform) {
  let synth = new p5.Oscillator(); // Create a new oscillator object
  synth.setType(waveform); // Set oscillator waveform type
  synth.freq(frequency); // Set frequency
  synth.amp(volume); // Set volume
  synth.start(); // Start the oscillator
  setTimeout(function () {
    synth.stop(); // Stop the oscillator after the specified duration
  }, duration); // Stop the oscillator after the duration
}


