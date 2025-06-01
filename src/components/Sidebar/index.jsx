import { Link, useLocation } from 'react-router-dom'
import { 
  FaHome, 
  FaBookmark, 
  FaCog, 
  FaInstagram, 
  FaTwitter, 
  FaMedium 
} from 'react-icons/fa'
import { usePosts } from '../../contexts/PostsContext'
import { useTheme } from '../../contexts/ThemeContext'
import { 
  SidebarContainer, 
  NavItem, 
  PlatformFilters, 
  FilterLabel, 
  PlatformFilter 
} from './styles'

function Sidebar() {
  const location = useLocation()
  const { activeFilters, toggleFilter } = usePosts()
  const { theme } = useTheme()
  
  return (
    <SidebarContainer $theme={theme}>
      <NavItem 
        to="/" 
        $active={location.pathname === '/'} 
        $theme={theme}
      >
        <FaHome />
        <span>Home</span>
      </NavItem>
      
      <NavItem 
        to="/bookmarks" 
        $active={location.pathname === '/bookmarks'} 
        $theme={theme}
      >
        <FaBookmark />
        <span>Bookmarks</span>
      </NavItem>
      
      <NavItem 
        to="/settings" 
        $active={location.pathname === '/settings'} 
        $theme={theme}
      >
        <FaCog />
        <span>Settings</span>
      </NavItem>
      
      <PlatformFilters>
        <FilterLabel $theme={theme}>Platforms</FilterLabel>
        
        <PlatformFilter 
          $active={activeFilters.instagram} 
          $platform="instagram"
          onClick={() => toggleFilter('instagram')}
        >
          <FaInstagram />
          <span>Instagram</span>
        </PlatformFilter>
        
        <PlatformFilter 
          $active={activeFilters.twitter} 
          $platform="twitter"
          onClick={() => toggleFilter('twitter')}
        >
          <FaTwitter />
          <span>Twitter</span>
        </PlatformFilter>
        
        <PlatformFilter 
          $active={activeFilters.medium} 
          $platform="medium"
          onClick={() => toggleFilter('medium')}
        >
          <FaMedium />
          <span>Medium</span>
        </PlatformFilter>
      </PlatformFilters>
    </SidebarContainer>
  )
}

export default Sidebar