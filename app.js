// MPRV STUDIO - Main JavaScript
// Sample Product Data
const sampleProducts = [
    {
        id: 1,
        name: "Minimalist Watch",
        price: 249,
        category: "watches",
        badge: "Weekly",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Watch",
        affiliateLink: "#"
    },
    {
        id: 2,
        name: "Premium Safety Razor",
        price: 89,
        category: "grooming",
        badge: "Essential",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Razor",
        affiliateLink: "#"
    },
    {
        id: 3,
        name: "Wireless Earbuds Pro",
        price: 199,
        category: "tech",
        badge: "Weekly",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Earbuds",
        affiliateLink: "#"
    },
    {
        id: 4,
        name: "Yoga Mat Premium",
        price: 79,
        category: "fitness",
        badge: "Essential",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Yoga+Mat",
        affiliateLink: "#"
    },
    {
        id: 5,
        name: "Ceramic Coffee Dripper",
        price: 45,
        category: "food",
        badge: "Weekly",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Coffee",
        affiliateLink: "#"
    },
    {
        id: 6,
        name: "Minimalist Desk Lamp",
        price: 129,
        category: "home",
        badge: "Essential",
        image: "https://via.placeholder.com/300x200/081630/FDFEFE?text=Lamp",
        affiliateLink: "#"
    }
];

const samplePacks = [
    {
        id: 1,
        name: "Morning Routine",
        description: "Everything for your perfect morning",
        price: 299,
        items: 5,
        image: "https://via.placeholder.com/400x250/081630/FDFEFE?text=Morning+Pack"
    },
    {
        id: 2,
        name: "Home Office Setup",
        description: "Complete workspace essentials",
        price: 599,
        items: 8,
        image: "https://via.placeholder.com/400x250/081630/FDFEFE?text=Office+Pack"
    },
    {
        id: 3,
        name: "Fitness Starter",
        description: "Begin your fitness journey",
        price: 199,
        items: 6,
        image: "https://via.placeholder.com/400x250/081630/FDFEFE?text=Fitness+Pack"
    }
];

// Render Product Card
function renderProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span class="product-badge">${product.badge}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <a href="${product.affiliateLink}" class="btn btn-primary" onclick="trackOutbound('${product.id}', '${product.name}')">Where to Buy</a>
            </div>
        </div>
    `;
}

// Render Pack Card
function renderPackCard(pack) {
    return `
        <div class="product-card" data-pack-id="${pack.id}">
            <img src="${pack.image}" alt="${pack.name}">
            <div class="product-info">
                <span class="product-badge">Pack</span>
                <h3 class="product-name">${pack.name}</h3>
                <p>${pack.description}</p>
                <p class="product-price">$${pack.price}</p>
                <p style="font-size: 14px; opacity: 0.7;">${pack.items} items</p>
                <a href="#" class="btn btn-primary">Buy Complete Pack</a>
            </div>
        </div>
    `;
}

// Load Weekly Products
function loadWeeklyProducts() {
    const weeklyGrid = document.getElementById('weekly-grid');
    if (!weeklyGrid) return;
    
    const weeklyProducts = sampleProducts.filter(p => p.badge === 'Weekly');
    weeklyGrid.innerHTML = weeklyProducts.map(renderProductCard).join('');
}

// Load Pack Preview
function loadPacksPreview() {
    const packsGrid = document.getElementById('packs-preview');
    if (!packsGrid) return;
    
    packsGrid.innerHTML = samplePacks.map(renderPackCard).join('');
}

// Track Outbound Click (for analytics)
function trackOutbound(productId, productName) {
    console.log(`Outbound click: ${productName} (${productId})`);
    // Analytics tracking would go here
    if (window.posthog) {
        window.posthog.capture('outbound_click', {
            product_id: productId,
            product_name: productName
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadWeeklyProducts();
    loadPacksPreview();
    
    // Track page view
    if (window.posthog) {
        window.posthog.capture('pageview');
    }
});

// Export for other pages
window.MPRVStudio = {
    products: sampleProducts,
    packs: samplePacks,
    renderProductCard,
    renderPackCard,
    trackOutbound
};
