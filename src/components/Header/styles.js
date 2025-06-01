import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 var(--space-3);
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-secondary-light)'};
  box-shadow: 0 1px 3px ${props => props.$theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
  position: sticky;
  top: 0;
  z-index: 100;
`

export const Logo = styled(Link)`
  font-size: var(--fs-xl);
  font-weight: 700;
  color: var(--accent-light);
  margin-right: var(--space-3);
  
  &:hover {
    opacity: 0.9;
  }
`

export const SearchContainer = styled.form`
  display: flex;
  flex: 1;
  max-width: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: var(--space-1) var(--space-2);
  padding-right: 40px;
  border-radius: var(--radius-full);
  border: 1px solid ${props => props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-primary-dark)' : 'var(--bg-primary-light)'};
  color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
  font-size: var(--fs-sm);
  
  &:focus {
    outline: none;
    border-color: var(--accent-light);
  }
`

export const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
  
  &:hover {
    color: var(--accent-light);
  }
`

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: var(--space-2);
  color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
  
  &:hover {
    background-color: ${props => props.$theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  margin-left: var(--space-2);
  
  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-secondary-light)'};
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  box-shadow: 0 4px 6px ${props => props.$theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
  
  a {
    padding: var(--space-2);
    color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
    font-weight: 500;
    
    &:hover {
      background-color: ${props => props.$theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
      border-radius: var(--radius-md);
    }
  }
`