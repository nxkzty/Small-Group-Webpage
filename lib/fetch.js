async function fetchVerseOfTheDay() {
    try {
        const response = await fetch('https://bible-api.com/?random=verse');
        const data = await response.json();
        return data.verse;
    } catch (error) {
        console.error('Fehler beim Abrufen des Verses:', error);
        return 'Ein Fehler ist aufgetreten';
    }
}
