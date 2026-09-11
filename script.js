// Base de dados simulada para renderização dinâmica
const menuData = [
    {
        id: 1,
        title: "Pão Na Chapa com Requeijão",
        category: "padaria",
        price: "R$ 12,00",
        desc: "Pão francês quentinho, selado na chapa com generosa camada de requeijão artesanal.",
        image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Croissant de Chocolate",
        category: "doces",
        price: "R$ 16,50",
        desc: "Massa folhada francesa bem amanteigada, recheada com ganache de chocolate meio amargo.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Cappuccino Especial",
        category: "bebidas",
        price: "R$ 14,00",
        desc: "Café espresso, leite vaporizado, cacau em pó e um toque suave de canela.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Coxinha de Frango com Catupiry",
        category: "padaria",
        price: "R$ 10,50",
        desc: "Massa leve de batata, frango desfiado temperado e recheio cremoso original.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Torta Holandesa",
        category: "doces",
        price: "R$ 18,00",
        desc: "Creme aveludado, cobertura de ganache de chocolate e biscoitos cobertos.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Buffet Executivo de Almoço",
        category: "buffet",
        price: "R$ 49,90",
        desc: "Variedade de saladas, carnes nobres e pratos quentes. Servido diariamente das 11h30 às 15h.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
    }
];

// Inicialização da Aplicação
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems(menuData);
    initFilterEvents();
    checkBusinessHours();
});

// Renderização dos Itens do Cardápio
function renderMenuItems(items) {
    const grid = document.getElementById("menu-grid");
    grid.innerHTML = items.map(item => `
        <article class="menu-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="menu-item-info">
                <div class="menu-item-title">
                    <span>${item.title}</span>
                    <span>${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
            </div>
        </article>
    `).join("");
}

// Lógica de Filtro
function initFilterEvents() {
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.dataset.category;
            
            if (category === "todos") {
                renderMenuItems(menuData);
            } else {
                const filtered = menuData.filter(item => item.category === category);
                renderMenuItems(filtered);
            }
        });
    });
}

// Checagem de Horário de Funcionamento em Tempo Real
function checkBusinessHours() {
    const indicator = document.getElementById("status-indicator");
    const text = document.getElementById("status-text");

    const now = new Date();
    const currentHour = now.getHours();

    const openHour = 6;
    const closeHour = 23;

    if (currentHour >= openHour && currentHour < closeHour) {
        indicator.style.backgroundColor = "var(--success)";
        text.textContent = "Estamos Abertos agora! Venha nos visitar.";
        text.style.color = "var(--success)";
    } else {
        indicator.style.backgroundColor = "var(--accent)";
        text.textContent = "Fechado no momento. Abriremos às 06h00.";
        text.style.color = "var(--accent)";
    }
}