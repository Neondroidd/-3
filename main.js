window.onload = () => {
      document.body.classList.remove("container");

      // Prompt the user for their name
      const userName = prompt("What's your name?");

      // Display the user's name in the "name" class
      const nameElement = document.querySelector('.name');
      if (nameElement) {
        nameElement.textContent = `Hello, ${userName || 'Guest'}!`;
      }

      const audio = new Audio("./Music/Main.mp3");
      audio.play();
    };
