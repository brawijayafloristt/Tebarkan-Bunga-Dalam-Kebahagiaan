document.addEventListener("alpine:init", () => {
    Alpine.data("products", () => ({
        items: [
            { id: 1, name: "Daisy Delightful Bouquet", img: "a.jpg", price: 285000 },
            { id: 2, name: "Golden Sunflower Symphony", img: "b.jpg", price: 348000 },
            { id: 3, name: "Whimsical Wildflowers Selection", img: "c.jpg", price: 599000 },
            { id: 4, name: "Graceful Garden Roses Ensemble", img: "d.jpg", price: 1250000 },
            { id: 5, name: "Lavender Dreams Bouquet", img: "e3.jpg", price: 180000 },
            { id: 6, name: "Timeless Tulip Symphony", img: "k.jpg", price: 1599000 },
            { id: 7, name: "Blissful Blossoms Collection", img: "h.jpg", price: 879000 },
            { id: 8, name: "Cascading Carnation Bliss", img: "f.jpg", price: 299000 },
            { id: 9, name: "Starlit Peonies Perfection", img: "i.jpg", price: 1450000 },
            { id: 10, name: "Sapphire Blue Iris Serenade", img: "j.jpg", price: 849000 },
            { id: 11, name: "Tropical Paradise Bouquets", img: "k2.jpg", price: 940000 },
            { id: 12, name: "Enchanting Roses Ensemble", img: "ee.jpg", price: 999000 },
        ],
    }));
});