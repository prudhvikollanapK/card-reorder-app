import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Oval } from 'react-loader-spinner';
import Modal from 'react-modal';
import documents from './data.json';
import './App.css';

const Card = ({ document, index, moveCard }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [, ref] = useDrag({
    type: 'CARD',
    item: { index },
  });
  
  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div className="card" ref={(node) => ref(drop(node))}>
      {isLoading && !imageLoaded ? (
        <Oval color="#00BFFF" height={50} width={50} />
      ) : null}
      <img
        src={`/images/${document.type}.jpg`}
        alt={document.title}
        onLoad={() => {
          setImageLoaded(true);
          setIsLoading(false);
        }}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      <h4>{document.title}</h4>
    </div>
  );
};

const App = () => {
  const [cards, setCards] = useState(documents);
  const [selectedImage, setSelectedImage] = useState(null);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1576494162981093";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="main-container">
        <h1 className="heading">Portfolio Hub</h1>
        <div className="cards-container">
          {cards.map((doc, index) => (
            <div key={doc.type} onClick={() => openModal(doc.type)}>
              <Card document={doc} index={index} moveCard={moveCard} />
            </div>
          ))}
        </div>
        {selectedImage && (
          <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          className="image-modal"
          overlayClassName="image-modal-overlay"
        >
          {selectedImage && (
            <a
              href={cards.find((doc) => doc.type === selectedImage)?.url}
              target="_blank"
              rel="noopener noreferrer"
              data-title={cards.find((doc) => doc.type === selectedImage)?.title} // Tooltip content
              style={{ textDecoration: 'none' }}
            >
              <img
                src={`/images/${selectedImage}.jpg`}
                alt={selectedImage}
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '80%',
                  marginBottom: '15px',
                  borderRadius: '10px',
                }}
              />
              <span style={{ color: '#fff', fontWeight: '600' }}>
              <u>Visit {cards.find((doc) => doc.type === selectedImage)?.title}</u> 
              </span>
            </a>
          )}
        </Modal>
        )}
      </div>
    </DndProvider>
  );
  
};

export default App;
