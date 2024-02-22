 window.onload = () => {
            // Prompt the user for their name
            const userName = prompt("Masukkan namamu:");

            // Display the user's name in the "Name" span
            const nameElement = document.querySelector('.Name');
            if (nameElement) {
                nameElement.textContent = userName || 'Tamu';
            }

      const audio = new Audio("./Music/Main.mp3");
      audio.play();
    };
