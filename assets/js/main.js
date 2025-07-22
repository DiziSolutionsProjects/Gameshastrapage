
   // Animated Counter
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.spec-value');
  
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const suffix = counter.textContent.includes('mph') ? 's' : '';
      const duration = 2000;
      const step = target / (duration / 16);
      
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = suffix 
            ? current.toFixed(1) + suffix 
            : Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = suffix 
            ? target.toFixed(1) + suffix 
            : target;
        }
      };
      updateCounter();
    });
  };
  
  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelector('.specs-grid').querySelectorAll('.spec-item').forEach(item => {
    observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Game project data
    const projects = [
        { 
            image: 'assets/images/footer/e1.png',
            title: 'Epic Adventure',
            category: 'RPG Game'
        },
        { 
            image: 'assets/images/footer/e2.png',
            title: 'Space Warriors',
            category: 'Action Shooter'
        },
        { 
            image: 'assets/images/footer/a3.png',
            title: 'Puzzle Master',
            category: 'Brain Teaser'
        },
        { 
            image: 'assets/images/footer/a4.png',
            title: 'Racing Legends',
            category: 'Sports Game'
        },
        { 
            image: 'assets/images/footer/a5.png',
            title: 'Zombie Apocalypse',
            category: 'Survival Horror'
        },
        { 
            image: 'assets/images/footer/a6.png',
            title: 'Fantasy Kingdom',
            category: 'Strategy Game'
        },
        { 
            image: 'assets/images/footer/a7.png',
            title: 'Sports Champions',
            category: 'Sports Simulation'
        },
        { 
            image: 'assets/images/footer/a8.png',
            title: 'Cyberpunk City',
            category: 'Open World'
        }
    ];
    
    // Carousel elements
    const track = document.querySelector('.game-carousel-track');
    const prevBtn = document.querySelector('.game-carousel-prev');
    const nextBtn = document.querySelector('.game-carousel-next');
    
    // Create slides
    projects.forEach((project) => {
        const slide = document.createElement('div');
        slide.className = 'game-carousel-slide';
        slide.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="game-carousel-slide-caption">
                <h3>${project.title}</h3>
                <p>${project.category}</p>
            </div>
        `;
        track.appendChild(slide);
    });
    
    const slides = document.querySelectorAll('.game-carousel-slide');
    let currentIndex = 0;
    let autoScrollInterval;
    const scrollDelay = 4000; // 4 seconds
    
    function getSlidesToShow() {
        if (window.innerWidth >= 1200) return 4;
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 576) return 2;
        return 1;
    }
    
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth + 30; // width + margin
        const offset = -currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
        
        // Disable buttons when at ends
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= slides.length - getSlidesToShow();
    }
    
    function nextSlide() {
        if (currentIndex < slides.length - getSlidesToShow()) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - getSlidesToShow(); // Loop to end
        }
        updateCarousel();
    }
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, scrollDelay);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        nextSlide();
        startAutoScroll();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        prevSlide();
        startAutoScroll();
    });
    
    // Pause auto-scroll on hover
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });
    
    // Initialize
    updateCarousel();
    startAutoScroll();
});












