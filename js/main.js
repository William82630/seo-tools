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

// Common utility functions

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Handle file upload
function handleFileUpload(file, callback) {
    if (!file || !file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => callback(img, e.target.result);
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Initialize drop zone
function initDropZone(dropZone, fileInput, onFileSelect) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = '#e9ecef';
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.style.background = '#f8f9fa';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = '#f8f9fa';
        const file = e.dataTransfer.files[0];
        if (file) {
            onFileSelect(file);
        }
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file);
        }
    });
}

// Create download link
function createDownloadLink(dataUrl, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
}

// Show loading indicator
function showLoading(element) {
    element.style.display = 'block';
}

// Hide loading indicator
function hideLoading(element) {
    element.style.display = 'none';
}

// Update slider value display
function updateSliderValue(slider, valueDisplay) {
    slider.addEventListener('input', () => {
        valueDisplay.textContent = slider.value + '%';
    });
}

// Reset form
function resetForm(resetBtn, callback) {
    resetBtn.addEventListener('click', () => {
        callback();
    });
}

// Initialize tool
function initTool(config) {
    const {
        dropZone,
        fileInput,
        preview,
        editContainer,
        onFileSelect,
        onReset
    } = config;

    // Initialize drop zone
    initDropZone(dropZone, fileInput, onFileSelect);

    // Initialize reset button if provided
    if (onReset) {
        resetForm(resetBtn, onReset);
    }

    return {
        showPreview: (src) => {
            preview.src = src;
            editContainer.style.display = 'block';
        },
        hidePreview: () => {
            editContainer.style.display = 'none';
        }
    };
}

// Export functions for use in other files
window.ToolUtils = {
    formatFileSize,
    handleFileUpload,
    initDropZone,
    createDownloadLink,
    showLoading,
    hideLoading,
    updateSliderValue,
    resetForm,
    initTool
}; 