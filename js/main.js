document.addEventListener('DOMContentLoaded', function() {
    // Initialize tool cards
    renderTools();
    
    // Initialize search functionality
    const searchInput = document.getElementById('searchTools');
    searchInput.addEventListener('input', handleSearch);
});

function renderTools() {
    // Render each category of tools
    renderToolCategory('imageTools', document.getElementById('imageTools'));
    renderToolCategory('seoTools', document.getElementById('seoTools'));
    renderToolCategory('textTools', document.getElementById('textTools'));
    renderToolCategory('socialTools', document.getElementById('socialTools'));
}

function renderToolCategory(category, container) {
    const tools = toolsData[category];
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        container.appendChild(toolCard);
    });
}

function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    
    const card = document.createElement('div');
    card.className = 'card tool-card h-100';
    card.setAttribute('data-tool-id', tool.id);
    card.setAttribute('data-tool-title', tool.title.toLowerCase());
    card.setAttribute('data-tool-description', tool.description.toLowerCase());
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';
    
    const icon = document.createElement('i');
    icon.className = `fas ${tool.icon} tool-icon`;
    
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = tool.title;
    
    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = tool.description;
    
    const button = document.createElement('a');
    button.href = tool.path;
    button.className = 'btn btn-primary mt-auto';
    button.textContent = 'Use Tool';
    
    cardBody.appendChild(icon);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(button);
    card.appendChild(cardBody);
    col.appendChild(card);
    
    return col;
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const allTools = document.querySelectorAll('.tool-card');
    
    allTools.forEach(tool => {
        const title = tool.getAttribute('data-tool-title');
        const description = tool.getAttribute('data-tool-description');
        const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
        
        tool.closest('.col-12').style.display = isMatch ? 'block' : 'none';
    });
    
    // Show/hide category titles based on visible tools
    document.querySelectorAll('.category-title').forEach(title => {
        const categoryContainer = title.nextElementSibling;
        const visibleTools = categoryContainer.querySelectorAll('.col-12[style="display: block"]');
        title.style.display = visibleTools.length > 0 ? 'block' : 'none';
    });
}

// Function to initialize Google AdSense
function initializeAds() {
    // Add your Google AdSense code here
    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-CLIENT-ID';
    adScript.crossOrigin = 'anonymous';
    document.head.appendChild(adScript);
}

// Initialize ads when the page loads
window.addEventListener('load', initializeAds); 