interface SnowFlake {
    /** The current x position. */
    x: number;
    /** The current y position. */
    y: number;
  }
  
  /** Helper functions to generate a random int inclusive of min and max. */
  function randomInt(min: number, max: number) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  // Create and attach our canvas.
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);
  
  // Generate some snow flakes.
  const flakes: SnowFlake[] = [];
  const numOfFlakes = randomInt(300, 600);
  for (var i = 0; i < numOfFlakes; i++) {
    flakes.push({
      x: randomInt(0, canvas.width),
      y: randomInt(0, canvas.height),
    });
  }
  
  // Setup and draw our flakes.
  const ctx = canvas.getContext('2d')!;
  export function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    flakes.forEach((flake) => {
      // Draw our flake at its current x/y
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, 2, 0, Math.PI * 2);
  
      // Update our flake's next x/y.
      flake.y += 1;
      flake.x += 0;
      // If our snowflake goes off the left, right or bottom,
      // move it to the opposite side.
      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      } else if (flake.y > canvas.height) {
        flake.x = randomInt(0, canvas.width);
        flake.y = -2;
      }
    });
    // Draw all the arc paths' we've just created...
    ctx.fill();
    // ...and schedule us to do it all over again.
    window.requestAnimationFrame(draw);
  }
  
//   // Kick it off.
// window.requestAnimationFrame(draw);