document.addEventListener('DOMContentLoaded', function() 
{
    const colorPalette = document.getElementById('color-palette');
    const colorForm = document.getElementById('color-form');
    const savedColors = JSON.parse(localStorage.getItem('colors')) || [];
    function renderColors() 
    {
        colorPalette.innerHTML = '';
        savedColors.forEach(color => 
        {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = color;
            colorPalette.appendChild(colorBox);
        });
    }
    renderColors();
    colorForm.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        const colorInput = document.getElementById('color-input');
        const newColor = colorInput.value;
        savedColors.push(newColor);
        localStorage.setItem('colors', JSON.stringify(savedColors));
        renderColors();
        colorForm.reset();
    });
});