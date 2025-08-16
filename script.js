let currentTab = 'resumos';
let editingIndex = -1;
let data = {
    resumos: [],
    pi400: [],
    pi400Voepass: [],
    pi100: []
};

// Função para carregar dados dos arquivos JSON
async function loadDataFromJSON() {
    try {
        console.log('Iniciando carregamento dos dados...');
        
        const [resumosResponse, pi400Response, pi400VoepassResponse, pi100Response] = await Promise.all([
            fetch('data/resumos.json'),
            fetch('data/pi400.json'),
            fetch('data/pi400Voepass.json'),
            fetch('data/pi100.json')
        ]);

        // Verificar se todas as respostas são válidas
        if (!resumosResponse.ok) throw new Error(`Erro ao carregar resumos.json: ${resumosResponse.status}`);
        if (!pi400Response.ok) throw new Error(`Erro ao carregar pi400.json: ${pi400Response.status}`);
        if (!pi400VoepassResponse.ok) throw new Error(`Erro ao carregar pi400Voepass.json: ${pi400VoepassResponse.status}`);
        if (!pi100Response.ok) throw new Error(`Erro ao carregar pi100.json: ${pi100Response.status}`);

        data.resumos = await resumosResponse.json();
        data.pi400 = await pi400Response.json();
        data.pi400Voepass = await pi400VoepassResponse.json();
        data.pi100 = await pi100Response.json();

        console.log('Dados carregados com sucesso!', {
            resumos: data.resumos.length,
            pi400: data.pi400.length,
            pi400Voepass: data.pi400Voepass.length,
            pi100: data.pi100.length
        });
        
        renderItems();
    } catch (error) {
        console.error('Erro detalhado ao carregar dados JSON:', error);
        showToast(`Erro ao carregar dados: ${error.message}`, 'error');
        
        // Fallback: tentar carregar do localStorage se existir
        loadDataFromLocalStorage();
    }
}

// Função fallback para carregar do localStorage
function loadDataFromLocalStorage() {
    try {
        const saved = localStorage?.getItem?.('copyPasteData');
        if (saved) {
            data = JSON.parse(saved);
            console.log('Dados carregados do localStorage como fallback');
            renderItems();
        } else {
            showToast('Nenhum dado encontrado. Verifique se os arquivos JSON estão no local correto.', 'error');
        }
    } catch (e) {
        console.error('Erro ao carregar do localStorage:', e);
        showToast('Erro ao carregar dados de backup', 'error');
    }
}

// Salvar dados no localStorage (mantido para funcionalidade de adição)
function saveData() {
    try {
        localStorage?.setItem?.('copyPasteData', JSON.stringify(data));
    } catch (e) {
        console.error('Erro ao salvar dados:', e);
    }
}

// Alternar entre abas
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        switchTab(tabName);
    });
});

function switchTab(tabName) {
    // Atualizar botões das abas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Atualizar conteúdo
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;
}

//renderiza os itens
function renderItems() {
    const resumosList = document.getElementById('resumos-list');
    const pi400List = document.getElementById('pi400-list');
    const pi400VoepassList = document.getElementById('pi400Voepass-list');
    const pi100List = document.getElementById('pi100-list');

    resumosList.innerHTML = data.resumos.map((item, index) => createItemHTML(item, index, 'resumos')).join('');
    pi400List.innerHTML = data.pi400.map((item, index) => createItemHTML(item, index, 'pi400')).join('');
    pi400VoepassList.innerHTML = data.pi400Voepass.map((item, index) => createItemHTML(item, index, 'pi400Voepass')).join('');
    pi100List.innerHTML = data.pi100.map((item, index) => createItemHTML(item, index, 'pi100')).join('');
    
    // Criar navegação rápida
    createQuickNav();
}

function createQuickNav() {
    const resumosNav = document.getElementById('resumos-nav');
    const pi400Nav = document.getElementById('pi400-nav');
    const pi400VoepassNav = document.getElementById('pi400Voepass-nav');
    const pi100Nav = document.getElementById('pi100-nav');
    
    // Para resumos
    const resumosButtons = data.resumos.slice(0, 8).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 8);
        return `<button class="quick-nav-btn" onclick="scrollToItem('resumos', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 400
    const pi400Buttons = data.pi400.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi400', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 400 - VOEPASS
    const pi400VoepassButtons = data.pi400Voepass.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi400Voepass', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 100
    const pi100Buttons = data.pi100.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi100', ${index})">${shortTitle}</button>`;
    }).join('');
    
    resumosNav.innerHTML = resumosButtons;
    pi400Nav.innerHTML = pi400Buttons;
    pi400VoepassNav.innerHTML = pi400VoepassButtons;
    pi100Nav.innerHTML = pi100Buttons;
}

// Scroll para item específico
function scrollToItem(type, index) {
    const container = document.getElementById(`${type}-list`);
    const items = container.querySelectorAll('.item-group');
    if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        items[index].style.background = 'rgba(79, 172, 254, 0.1)';
        setTimeout(() => {
            items[index].style.background = '';
        }, 2000);
    }
}

// Filtrar itens
function filterItems(type) {
    const searchTerm = event.target.value.toLowerCase();
    const container = document.getElementById(`${type}-list`);
    const items = container.querySelectorAll('.item-group');
    
    items.forEach(item => {
        const title = item.dataset.title;
        const content = item.dataset.content;
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleCollapse(button) {
    const group = button.closest('.item-group');
    const content = group.querySelector('.item-content');

    // Alterna apenas o item clicado
    content.classList.toggle('collapsed');

    // Mantém o mesmo ícone, mas você pode mudar se quiser abrir/fechar diferente
    button.textContent = content.classList.contains('collapsed') ? '👁️' : '👁️';
}

function toggleCompact(button, type) {
    const container = document.getElementById(`${type}-list`);
    if (!container) return;

    container.classList.toggle('compact-mode');

    if (container.classList.contains('compact-mode')) {
        button.textContent = '📖 Modo Expandido';
        button.style.background = 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)';

        // No modo compacto, todos começam fechados
        container.querySelectorAll('.item-content').forEach(c => c.classList.add('collapsed'));

    } else {
        button.textContent = '📋 Modo Compacto';
        button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';

        // No modo expandido, todos ficam abertos
        container.querySelectorAll('.item-content').forEach(c => c.classList.remove('collapsed'));
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar/esconder botão de scroll
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});

// 1. Modificar a função createItemHTML:
function createItemHTML(item, index, type) {
    const hasDependentField = type !== 'resumos';
    
    return `
        <div class="item-group" data-title="${item.title.toLowerCase()}" data-content="${item.content.toLowerCase()}">
            <div class="item-header">
                <div class="title-container">
                    <span class="item-title">${item.title}</span>
                    ${hasDependentField && item.dependent ? 
                        `<span class="item-dependent"><img src="assets/images/arrow.png" alt="Seta" style="width:24px; height:18px; vertical-align:middle; margin-right:4px;"> ${item.dependent}</span>` : ''
                    }
                </div>
                <div class="item-buttons">
                    <button class="copy-btn" onclick="copyToClipboard('${type}', ${index})">📋 Copiar</button>
                    <button class="collapse-toggle" onclick="toggleCollapse(this)" title="Expandir/Colapsar">👁️</button>
                </div>
            </div>
            <div class="item-content">
                <div class="item-text">${item.content}</div>
            </div>
        </div>
    `;
}

// Copiar para clipboard
async function copyToClipboard(type, index) {
    const item = data[type][index];
    const button = event.target;
    
    try {
        await navigator.clipboard.writeText(item.content);
        
        // Feedback visual
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copiado!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);

        showToast('Conteúdo copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar:', err);
        showToast('Erro ao copiar conteúdo', 'error');
    }
}

// Mostrar toast
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === 'error' ? '#dc3545' : '#28a745';
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Modal
function openModal(type) {
    currentTab = type;
    editingIndex = -1;
    document.getElementById('modal-title').textContent = `Adicionar ${type === 'resumos' ? 'Resumo' : 'Questionamento'}`;
    document.getElementById('item-title').value = '';
    document.getElementById('item-content').value = '';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveItem() {
    const title = document.getElementById('item-title').value.trim();
    const content = document.getElementById('item-content').value.trim();

    if (!title || !content) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }

    const item = { title, content };

    if (editingIndex >= 0) {
        data[currentTab][editingIndex] = item;
    } else {
        data[currentTab].push(item);
    }

    saveData();
    renderItems();
    closeModal();
    showToast(`${currentTab === 'resumos' ? 'Resumo' : 'Questionamento'} salvo com sucesso!`);
}

// Fechar modal clicando fora
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Inicializar - MODIFICADO para carregar dados dos JSONs
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromJSON();
});