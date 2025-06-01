import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { PostsProvider } from './contexts/PostsContext'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </StrictMode>,
)