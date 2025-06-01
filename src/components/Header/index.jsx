import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'
import { 
  HeaderContainer, 
  Logo, 
  SearchContainer, 
  SearchInput, 
  SearchButton,
  ThemeToggle,
  MobileMenu,
  MobileMenuButton
} from './styles'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality here
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <HeaderContainer $theme={theme}>
      <Logo to="/">
        FeedFusion
      </Logo>

      <SearchContainer onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          $theme={theme}
        />
        <SearchButton type="submit" $theme={theme}>
          <FaSearch />
        </SearchButton>
      </SearchContainer>

      <ThemeToggle onClick={toggleTheme} $theme={theme}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </ThemeToggle>

      <MobileMenuButton onClick={toggleMobileMenu} $theme={theme}>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      {isMobileMenuOpen && (
        <MobileMenu $theme={theme}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/bookmarks" onClick={() => setIsMobileMenuOpen(false)}>Bookmarks</Link>
          <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>Settings</Link>
        </MobileMenu>
      )}
    </HeaderContainer>
  )
}

export default Header