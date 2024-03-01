import { useEffect, useState } from 'react';

function FollowMouse() {
  
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x:0, y:0 });
  const [points, setPoints] = useState(0);

  function updatePoints(newPoints) {
    setPoints(newPoints);
  }
  
  useEffect( () => {
    console.log('Efecto');
    
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })
    }
    
    if(enabled) {
      window.addEventListener('pointermove', handleMove);
    }
  
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled] );

  useEffect( () => {

    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor', enabled);
    }
  } )
  
  
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 35,
        height: 35,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <p className='points'>You have <span>{points}</span>!</p>
      <button onClick={() => setEnabled(!enabled) } >
        { enabled ? 'Desactivar' : 'Activar' } seguir puntero
      </button>
      <button onClick={
         () => {
          setEnabled(false) 
          setPoints(0)
        } 
      }>
        Reset
      </button>
      <Point updatePoints={updatePoints} enable={enabled} points={points} />
    </>
  )
}

function Point({ updatePoints, enable, points }) {

  const [pointPos, setPointPos] = useState({ x:300, y:300 });
  
  function handleMouseEnter() {

    if(enable) {
      const positionX = Math.floor(Math.random() * window.innerWidth);
      const positionY = Math.floor(Math.random() * window.innerHeight);
      
      const newPoints = points + 1;
      
      setPointPos({ x:positionX, y:positionY });
      updatePoints(newPoints);
    }
  }

  return (
    <div style={{position:'absolute', top: '0', left: '0' }}>
      <div className="point" onMouseEnter={handleMouseEnter} style={{transform: `translate(${pointPos.x}px, ${pointPos.y}px)`}} ></div>
    </div>
  )
}

function App() {

  return (
    <main>
      <FollowMouse/>
    </main>
  )
  
}

export default App
