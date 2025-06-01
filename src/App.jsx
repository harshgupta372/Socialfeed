import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './contexts/ThemeContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Bookmarks from './pages/Bookmarks'
import Settings from './pages/Settings'
import { AppContainer, MainContent } from './styles/AppStyles'

function App() {
  const { theme } = useTheme()

  return (
    <Router>
      <AppContainer $theme={theme}>
        <Header />
        <MainContent>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  )
}

export default App