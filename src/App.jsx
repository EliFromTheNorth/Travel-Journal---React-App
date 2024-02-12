import React from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Card from './components/Card.jsx'
import data from './data'

function App() {

  const oneCard = data.map(card => {
    return (
      <Card
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    )
   }
  )

  return (
      <div>
        <NavBar />
        <div className="main-content">
          {oneCard}
        </div>
      </div>

  )
}

export default App
