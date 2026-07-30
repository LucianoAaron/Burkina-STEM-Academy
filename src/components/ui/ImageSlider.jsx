import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageSlider = ({ images, height = 'h-80', overlay = false }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={`relative ${height} rounded-2xl overflow-hidden`}>
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`slide ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay optionnel */}
      {overlay && (
        <div className="absolute inset-0 bg-[#0E4288]/40" />
      )}

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2
        flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300
              ${i === current ? 'bg-gold w-8' : 'bg-white/60 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider