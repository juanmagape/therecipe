document.getElementById('selectLang').addEventListener('change', () => {
    const selectedLang = document.getElementById('selectLang').value;

    if (selectedLang === 'eng') {
        window.location.href = 'engpage.html';
    } else if (selectedLang === 'esp') {
        window.location.href = 'index.html';
    }
})

