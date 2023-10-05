import React, { useState } from 'react';
import styles from "./microfono.module.css"; 
import SearchIcon from '@mui/icons-material/Search';
import { searchProducts } from '../../Redux/Features/productSlice';
import { useDispatch } from 'react-redux';

const Microfono = ({ onSpeechRecognition }) => {
  const [listening, setListening] = useState(false);
  const [transcription, setTranscription] = useState(''); 
  const [search, setSearch] = useState(''); 
  const dispatch = useDispatch();
  const [isTranscriptionActive, setIsTranscriptionActive] = useState(true);

  const handleSpeechRecognition = (transcript) => {
    if (isTranscriptionActive) {
      setTranscription(transcript);
      dispatch(searchProducts(transcript));
    }
  };

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
    dispatch(searchProducts(value));
  };

  const handleCopy = () => {
    setIsTranscriptionActive(false);
    setTimeout(() => {
      setIsTranscriptionActive(true);
    }, 100);
  };

  const startListening = () => {
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSpeechRecognition(transcript);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className={styles.microfonoContainer}>
      <button type='button' onClick={startListening}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8rruvJnk4we43iHU6GwJFwdpaV09ISOOcw&usqp=CAU' alt='Micrófono' />
      </button>

      <input
        className={styles.input}
        placeholder='BUSCAR PRODUCTOS...'
        type='text'
        value={search}
        onChange={searchHandler}
        onCopy={handleCopy}
      />

      {isTranscriptionActive && (
        <div className={styles.transcript}>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default Microfono;