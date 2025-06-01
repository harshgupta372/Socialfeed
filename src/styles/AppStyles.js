import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-primary-dark)' : 'var(--bg-primary-light)'};
  color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
`

export const MainContent = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  gap: var(--space-4);
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 var(--space-2);
    gap: var(--space-2);
  }
`