function nextSection(sectionNumber) {
    // Hide all sections
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show the target section
    document.getElementById(`section-${sectionNumber}`).style.display = 'block';
    
    // Update progress bar
    const totalSections = document.querySelectorAll('.container').length;
    const progress = (sectionNumber / totalSections) * 100;
    document.getElementById('global-progress').style.width = `${progress}%`;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateWeight() {
    const weightInput = document.getElementById('weight-input').value;
    const errorMessage = document.getElementById('error-message');
    
    if (weightInput < 40 || weightInput > 200 || isNaN(weightInput)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        nextSection(3);
    }
}

function updatePesoValue(value) {
    document.getElementById('pesoValue').textContent = value;
}

function selectSingleCard(card) {
    // Remove 'selected' class from all cards in the same grid
    card.parentElement.querySelectorAll('.card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked card
    card.classList.add('selected');
}

function toggleCardSelection(card) {
    // Toggle 'selected' class on the clicked card
    card.classList.toggle('selected');
}