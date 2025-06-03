import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Stars background */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-bold tracking-widest mb-4">Zackary Wane Lowe</h1>
        <p className="text-xl md:text-2xl text-gray-400 tracking-wider mb-4">D1 pedoafile</p>
        <a href="https://youtu.be/YeX958VVudg" className="text-blue-400 hover:text-blue-300 underline text-lg" target="_blank" rel="noopener noreferrer">https://youtu.be/YeX958VVudg</a>
      </div>
    </div>
  );
}

export default App;
