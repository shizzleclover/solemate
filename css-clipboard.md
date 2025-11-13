### CSS CLIPBOARD ####
## GLOBALS.CSS ##
/* css/global.css */

/* css/global.css */

/* --- 1. CSS VARIABLES (Colors & Fonts) --- */


:root {
    --font-primary: 'Satoshi', sans-serif;
    
    /* --- THIS LINE IS UPDATED --- */
    --font-display: 'Montserrat', sans-serif; /* Was 'Integral CF' */
    
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-light-gray: #F0F0F0;
    --color-text-gray: #333333;
    --color-text-light: #555555;
}

/* --- 2. CSS VARIABLES (Colors & Fonts) --- */
:root {
    --font-primary: 'Satoshi', sans-serif;
    --font-display: 'Integral CF', sans-serif;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-light-gray: #F0F0F0;
    --color-text-gray: #333333;
    --color-text-light: #555555;
}

/* --- 3. GLOBAL RESET & BASE STYLES --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    color: var(--color-text-gray);
    background-color: var(--color-white);
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
    font-family: inherit;
}

/* --- 4. SHARED UTILITY CLASSES --- */
.container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Button Styles */
.btn {
    display: inline-block;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    transition: all 0.3s ease;
}

.btn-dark {
    background-color: var(--color-black);
    color: var(--color-white);
    border: 2px solid var(--color-black);
}

.btn-dark:hover {
    background-color: var(--color-white);
    color: var(--color-black);
}

/* --- 5. SHARED COMPONENT STYLES (Promo Bar & Header) --- */
/* Since the header and promo bar will be on (almost) every page,
   they belong in global.css */

.promo-bar {
    background-color: var(--color-black);
    color: var(--color-white);
    font-size: 14px;
    font-weight: 500;
}
.promo-bar .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
}
.promo-bar a {
    font-weight: 700;
    text-decoration: underline;
    margin-left: 8px;
}
.close-promo {
    background: none;
    border: none;
    color: var(--color-white);
    font-size: 24px;
    position: absolute;
    right: 20px;
    line-height: 1;
}

/* Main Header */
.main-header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-light-gray);
}
.logo {
    font-size: 28px;
    font-weight: 800;
    color: var(--color-black);
}
.main-nav ul {
    display: flex;
    gap: 30px;
}
.main-nav a {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-text-gray);
    position: relative;
    padding: 5px 0;
}
.main-nav a:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
}
.search-bar {
    display: flex;
    align-items: center;
    background-color: var(--color-light-gray);
    padding: 8px 15px;
    border-radius: 30px;
    width: 300px;
}
.search-bar input {
    border: none;
    background: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    font-family: var(--font-primary);
    padding-left: 10px;
}
.search-bar::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('../images/icon-search.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.header-icons {
    display: flex;
    gap: 20px;
}
.icon-cart,
.icon-user {
    display: block;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.icon-cart {
    background-image: url('../images/icon-cart.svg');
}
.icon-user {
    background-image: url('../images/icon-user.svg');
}


## HOMEPAGE.CSS ##
/* css/homepage.css */
/* Styles specific to index.html */

/* --- 1. HERO SECTION --- */
.hero {
    padding: 60px 0;
}

.hero .container {
    display: flex;
    align-items: center;
    gap: 40px;
}

.hero-content {
    flex: 1;
}

.hero-image-container {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-title {
    font-family: var(--font-display); /* Uses variable from global.css */
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    color: var(--color-black);
    margin-bottom: 20px;
}

.hero-description {
    font-size: 16px;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 500px;
}

/* Hero Stats */
.hero-stats {
    display: flex;
    gap: 30px;
    margin-top: 50px;
}
.hero-stats li {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    border-right: 1px solid var(--color-light-gray);
}
.hero-stats li:last-child {
    border-right: none;
}
.hero-stats strong {
    font-size: 32px;
    font-weight: 700;
    color: var(--color-black);
}
.hero-stats span {
    font-size: 14px;
    color: var(--color-text-light);
}

/* Hero Image & Stars */
.hero-models {
    max-width: 100%;
    display: block;
    position: relative;
    z-index: 2;
}
.hero-star {
    position: absolute;
    z-index: 1;
    width: 60px; /* Example size */
}
.star-1 {
    top: 20px;
    right: 40px;
}
.star-2 {
    bottom: 20px;
    left: 40px;
}

/* --- 2. BRANDS BAR --- */
.brands-bar {
    background-color: var(--color-black);
    padding: 40px 0;
}
.brands-bar ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.brands-bar img {
    max-height: 35px;
    object-fit: contain;
    filter: brightness(0) invert(1);
}
.brands-bar img[src*="brand-prada"] {
    filter: none;
    max-height: 25px;
}




## globals.css update ##
/* css/global.css */

/* ... (all your previous styles) ... */

/* --- 6. SHARED SECTION STYLES --- */

.section-title {
    font-family: var(--font-display);
    font-weight: 800; /* Use the bold weight */
    font-size: 40px;
    text-align: center;
    color: var(--color-black);
    margin-bottom: 40px;
    text-transform: uppercase;
}

/* --- 7. NEW BUTTON STYLES --- */

.btn-light {
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-light-gray);
}

.btn-light:hover {
    background-color: var(--color-light-gray);
}

## home page updates##
/* css/homepage.css */

/* ... (hero and brands styles) ... */

/* --- 3. NEW ARRIVALS SECTION --- */

.new-arrivals {
    padding: 60px 0;
}

.product-grid {
    display: grid;
    /* Create 4 equal columns */
    grid-template-columns: repeat(4, 1fr);
    gap: 20px; /* Space between cards */
}

.product-card {
    border-radius: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.card-image-container {
    background-color: var(--color-light-gray);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 15px;
}

.card-image-container img {
    width: 100%;
    height: 250px; /* Give images a consistent height */
    object-fit: cover; /* Was 'contain', 'cover' looks more like the design */
    display: block;
    border-radius: 10px; /* In case the image itself isn't rounded */
}

.card-content {
    padding: 0 10px;
}

.card-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-black);
    margin-bottom: 8px;
    /* Prevents title from wrapping to 3 lines */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #FFC107; /* Gold/Yellow for stars */
}

.card-rating .star-empty {
    color: var(--color-light-gray); /* Empty stars */
}

.card-rating .rating-text {
    font-size: 12px;
    color: var(--color-text-light);
    margin-left: 5px;
}

.card-price {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-black);
}

.card-price .price-original {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-text-light);
    text-decoration: line-through;
}

.card-price .sale-badge {
    font-size: 12px;
    font-weight: 600;
    color: #FF0000; /* Red */
    background-color: #FFE5E5; /* Light red */
    padding: 4px 8px;
    border-radius: 30px;
}

.view-all-container {
    text-align: center;
    margin-top: 50px;
}