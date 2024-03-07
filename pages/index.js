import React, { useState, useEffect } from 'react';
import Gallerie from '../components/Gallerie';

function IndexPage() {
    const [searchFilter, setSearchFilter] = useState(1);
    const [verseOfTheDay, setVerseOfTheDay] = useState('');
    const [currentScripture, setCurrentScripture] = useState({
        book_name: "John",
        chapter: 3,
        verse: 16,
        text: "Auf einen Freund kannst du dich immer verlassen; wenn es dir schlecht geht, ist er für dich wie ein Bruder."
    });

    const [bible] = useState([
        { book: "Genesis", chapters: 50 },
        { book: "Exodus", chapters: 40 },
        { book: "Leviticus", chapters: 27 },
        { book: "Numbers", chapters: 36 },
        { book: "Deuteronomy", chapters: 34 },
        { book: "Joshua", chapters: 24 },
        { book: "Judges", chapters: 21 },
        { book: "Ruth", chapters: 4 },
        { book: "1 Samuel", chapters: 31 },
        { book: "2 Samuel", chapters: 24 },
        { book: "1 Kings", chapters: 22 },
        { book: "2 Kings", chapters: 25 },
        { book: "1 Chronicles", chapters: 29 },
        { book: "2 Chronicles", chapters: 36 },
        { book: "Ezra", chapters: 10 },
        { book: "Nehemiah", chapters: 13 },
        { book: "Esther", chapters: 10 },
        { book: "Job", chapters: 42 },
        { book: "Psalms", chapters: 150 },
        { book: "Proverbs", chapters: 31 },
        { book: "Ecclesiastes", chapters: 12 },
        { book: "Song of Solomon", chapters: 8 },
        { book: "Isaiah", chapters: 66 },
        { book: "Jeremiah", chapters: 52 },
        { book: "Lamentations", chapters: 5 },
        { book: "Ezekiel", chapters: 48 },
        { book: "Daniel", chapters: 12 },
        { book: "Hosea", chapters: 14 },
        { book: "Joel", chapters: 3 },
        { book: "Amos", chapters: 9 },
        { book: "Obadiah", chapters: 1 },
        { book: "Jonah", chapters: 4 },
        { book: "Micah", chapters: 7 },
        { book: "Nahum", chapters: 3 },
        { book: "Habakkuk", chapters: 3 },
        { book: "Zephaniah", chapters: 3 },
        { book: "Haggai", chapters: 2 },
        { book: "Zechariah", chapters: 14 },
        { book: "Malachi", chapters: 4 },
        { book: "Matthew", chapters: 28 },
        { book: "Mark", chapters: 16 },
        { book: "Luke", chapters: 24 },
        { book: "John", chapters: 21 },
        { book: "Acts", chapters: 28 },
        { book: "Romans", chapters: 16 },
        { book: "1 Corinthians", chapters: 16 },
        { book: "2 Corinthians", chapters: 13 },
        { book: "Galatians", chapters: 6 },
        { book: "Ephesians", chapters: 6 },
        { book: "Philippians", chapters: 4 },
        { book: "Colossians", chapters: 4 },
        { book: "1 Thessalonians", chapters: 5 },
        { book: "2 Thessalonians", chapters: 3 },
        { book: "1 Timothy", chapters: 6 },
        { book: "2 Timothy", chapters: 4 },
        { book: "Titus", chapters: 3 },
        { book: "Philemon", chapters: 1 },
        { book: "Hebrews", chapters: 13 },
        { book: "James", chapters: 5 },
        { book: "1 Peter", chapters: 5 },
        { book: "2 Peter", chapters: 3 },
        { book: "1 John", chapters: 5 },
        { book: "2 John", chapters: 1 },
        { book: "3 John", chapters: 1 },
        { book: "Jude", chapters: 1 },
        { book: "Revelation", chapters: 22 },
      ]);
      
      const generateScripture = async (e) => {
        e.preventDefault();

        setCurrentScripture({
            book_name: "",
            chapter: 1,
            verse: 1,
            text: "..."
        });

        let i = 0;

        if (searchFilter === 1) i = Math.floor(Math.random() * 65 + 1);
        if (searchFilter === 2) i = Math.floor(Math.random() * 38 + 1);
        if (searchFilter === 3) i = Math.floor(Math.random() * 26 + 38);

        var book = bible[i].book;
        var chapter = Math.floor(Math.random() * bible[i].chapters + 1);
        var verse = (chapter === 117 ? 2 : Math.floor(Math.random() * 8 + 1));

        const res = await fetch(`https://bible-api.com/${book}${chapter}:${verse}?translation=kjv`);
        const data = await res.json();

        setCurrentScripture({
            book_name: data.verses[0].book_name,
            chapter: data.verses[0].chapter,
            verse: data.verses[0].verse,
            text: data.verses[0].text
        });
    };

    return (
        <>
            <Gallerie />
            <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
                <blockquote style={{ borderLeft: '5px solid #007bff', padding: '10px' }}>
                    <p>{currentScripture.text}</p>
                </blockquote>

                <form style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex' }}>
                        <select
                            style={{ marginRight: '2px' }}
                            value={searchFilter}
                            onChange={(e) => setSearchFilter(e.target.value)}
                        >
                            <option value={1}>All Books</option>
                            <option value={2}>New Testament</option>
                            <option value={3}>Old Testament</option>
                        </select>
                        <button
                            style={{ cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}
                            onClick={(e) => generateScripture(e)}
                        >
                            Generate Scripture
                        </button>
                    </div>
                </form>

                <h1 style={{ marginTop: '20px' }}>
                    {currentScripture.book_name} {currentScripture.chapter}:
                    {currentScripture.verse}
                </h1>
            </div>
        </>
    );
}

export default IndexPage;