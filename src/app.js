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

        showItemDetailModal(item) {
            // show the modal based on item details
            // you can use a modal library or handle the modal visibility directly in Alpine.js
            // for simplicity, you can add a class to make it visible
            const modalIndex = this.items.indexOf(item);
            const modal = document.getElementById(`item-detail-modal-${modalIndex}`);

            // update modal content based on the selected item
            // example: update the modal content with item details
            modal.querySelector(".product-content h3").textContent = item.name;
            modal.querySelector(".product-content p").textContent = `Price: ${rupiah(item.price)}`;

        //show the modal 
        modal.classList.add("visible");
        }
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari satu
            if(cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barangnya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

// konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
}).format(number);
};