import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import portfolioFavicon from './assets/Portfolio_Logo.png'

function setContainFavicon(imageSrc) {
  const favicon =
    document.querySelector("link[rel='icon']") ?? document.createElement('link')

  favicon.rel = 'icon'
  favicon.type = 'image/png'

  const image = new Image()
  image.onload = () => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')

    context.fillStyle = '#03070f'
    context.fillRect(0, 0, size, size)

    const scale = Math.min(size / image.width, size / image.height)
    const width = image.width * scale
    const height = image.height * scale
    const offsetX = (size - width) / 2
    const offsetY = (size - height) / 2

    context.drawImage(image, offsetX, offsetY, width, height)
    favicon.href = canvas.toDataURL('image/png')
    document.head.appendChild(favicon)
  }

  image.src = imageSrc
}

setContainFavicon(portfolioFavicon)

document.title = 'Pavani Gamage | Portfolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
