import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.nav`
  width: 240px;
  padding: var(--space-3);
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-primary-dark)' : 'var(--bg-primary-light)'};
  border-right: 1px solid ${props => props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${props => props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
    padding: var(--space-2);
    flex-direction: row;
    overflow-x: auto;
    align-items: center;
  }
`

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  color: ${props => props.$active 
    ? 'var(--accent-light)'
    : props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'
  };
  font-weight: ${props => props.$active ? '600' : '400'};
  background-color: ${props => props.$active 
    ? props.$theme === 'dark' ? 'rgba(10, 132, 255, 0.1)' : 'rgba(10, 132, 255, 0.05)'
    : 'transparent'
  };
  
  &:hover {
    background-color: ${props => props.$theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    padding: var(--space-1) var(--space-2);
    flex-shrink: 0;
  }
`

export const PlatformFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-3);
  
  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    margin-left: var(--space-2);
    align-items: center;
  }
`

export const FilterLabel = styled.div`
  font-size: var(--fs-sm);
  font-weight: 600;
  color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
  margin-bottom: var(--space-1);
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const PlatformFilter = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-md);
  font-weight: ${props => props.$active ? '600' : '400'};
  color: ${props => {
    if (props.$active) {
      return `var(--${props.$platform})`
    }
    return 'var(--text-secondary-light)'
  }};
  background-color: ${props => props.$active 
    ? `rgba(var(--${props.$platform}-rgb), 0.1)`
    : 'transparent'
  };
  
  &:hover {
    background-color: ${props => `rgba(var(--${props.$platform}-rgb), 0.05)`};
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    flex-shrink: 0;
  }
`