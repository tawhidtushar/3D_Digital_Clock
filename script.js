function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                    'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Display time and date
    document.getElementById('time').innerHTML = `
        <span>${hours}</span>
        <span class="colon">:</span>
        <span>${minutes}</span>
        <span class="colon">:</span>
        <span>${seconds}</span>
    `;
    
    document.getElementById('date').textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random position, size, and animation attributes
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100 + 100}vh`;
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = `${Math.random() * 5 + 2}px`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;

        // Random RGB color
        particle.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.7)`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();
