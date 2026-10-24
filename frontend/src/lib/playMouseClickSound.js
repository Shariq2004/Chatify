export const playMouseClickSound = () => {
  const sound = new Audio("/sounds/mouse-click.mp3");

  sound.currentTime = 0;

  sound
    .play()
    .catch((error) => console.log("Audio play failed:", error));
};