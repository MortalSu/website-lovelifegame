const menuToggle = document.getElementById('menu-toggle');
const expandedNav = document.getElementById('expanded-nav');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('expanded-nav-close');
const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links
const characterCarousel = document.querySelector('.character-carousel');
const videoCarousel = document.querySelector('.video-carousel');
const imageCarousel = document.querySelector('.image-carousel');
const characterItems = document.querySelectorAll('.character-item');
const imageItems = document.querySelectorAll('.image-item');
const characterDetails = document.getElementById('character-details');
const characterDetailsGrid = document.getElementById('character-details-grid');
const imageDetails = document.getElementById('image-details');
const imageDetailsGrid = document.getElementById('image-details-grid');
const characterCloseBtn = document.getElementById('character-close-btn');
const imageCloseBtn = document.getElementById('image-close-btn');

const characterData = {
    Shiro: {
        name: "Shiro",
        description: "A gentle, childlike girl with endless curiosity. Softly observant and playful, she sees the world with innocent wonder.",
        image: "assets/character_shiro.webp"
    },
    Laila: {
        name: "Laila",
        description: "A seductive woman who seems to be married but known for her alluring charm.",
        image: "assets/character_laila.webp"
    },
    Miu: {
        name: "Miu",
        description: "A shy girl who hides her timid nature behind during private moments.",
        image: "assets/character_miu.webp"
    },
    Kei: {
        name: "Kei",
        description: "A boy who crossdresses, using charm and wit to attract customers for money. Playful and cunning, he carefully balances innocence and calculated intent.",
        image: "assets/character_kei.webp"
    },
    Yuta: {
        name: "Yuta",
        description: "A boy often targeted for his small, delicate frame and feminine looks. He admires strong, macho men and dreams of becoming like them someday.",
        image: "assets/character_yuta.webp"
    },
    Zero: {
        name: "Zero",
        description: "A being created by Lord Elux to oversee the Dungeon of Eternity.She administers the trials guarding the slumbering Elux.",
        image: "assets/character_zero.webp"
    },
    Others: {
        name: "Others",
        description: "Characters who are involved in the story and can be interacted with in the game.",
        image: "assets/character_others.webp"
    }
};

const imageData = {
    image1: { src: "assets/image_1.webp", alt: "Image_1" },
    image2: { src: "assets/image_2.webp", alt: "Image 2" },
    image3: { src: "assets/image_3.webp", alt: "Image 3" },
    image4: { src: "assets/image_4.webp", alt: "Image 4" },
    image5: { src: "assets/image_5.webp", alt: "Image 5" },
};

// Function to close the menu
function closeMenu() {
    expandedNav.classList.remove('show');
    overlay.classList.add('hidden');
}

// Toggle menu on hamburger click
menuToggle.addEventListener('click', () => {
    expandedNav.classList.toggle('show');
    overlay.classList.toggle('hidden');
});

// Close menu on close button click
closeButton.addEventListener('click', closeMenu);

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on overlay click
overlay.addEventListener('click', closeMenu);

// Character and image carousel event listeners
characterItems.forEach(item => {
    item.addEventListener('click', () => {
        const character = item.getAttribute('data-character');
        const data = characterData[character];
        characterDetailsGrid.innerHTML = `
        <div class="character-detail-card">
            <img src="${data.image}" alt="${data.name}">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        </div>
        `;
        characterDetails.classList.add('show');
        characterDetails.scrollIntoView({ behavior: 'smooth' });
    });
});

imageItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.getAttribute('data-image');
        const data = imageData[image];
        imageDetailsGrid.innerHTML = `
        <div class="image-detail-card">
            <img src="${data.src}" alt="${data.alt}">
            <a href="${data.src}" download="${data.alt}.jpg" class="download-btn">Download Image</a>
        </div>
        `;
        imageDetails.classList.add('show');
        imageDetails.scrollIntoView({ behavior: 'smooth' });
    });
});

characterCloseBtn.addEventListener('click', () => {
    characterDetails.classList.remove('show');
});

imageCloseBtn.addEventListener('click', () => {
    imageDetails.classList.remove('show');
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('#introduction, .pop-in-image-container, #character-preview, #images, #links, #contact').forEach(section => {
    observer.observe(section);
});