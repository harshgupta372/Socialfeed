import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

export const FeedContainer = styled.div`
  flex: 1;
  max-width: 680px;
  margin: 0 auto;
  padding: var(--space-3);
  
  > h2 {
    font-size: var(--fs-2xl);
    font-weight: 700;
    margin-bottom: var(--space-4);
    color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
  }
`

export const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: var(--space-4);
  
  p {
    color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
    margin-bottom: var(--space-3);
    font-size: var(--fs-lg);
  }
`

export const LoadingState = styled(EmptyState)`
  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid transparent;
    border-top-color: var(--accent-light);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: var(--space-3);
  }
`

export const ErrorState = styled(EmptyState)`
  p {
    color: ${props => props.$theme === 'dark' ? 'var(--accent-secondary-dark)' : 'var(--accent-secondary-light)'};
  }
`

export const RefreshButton = styled.button`
  background-color: var(--accent-light);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-weight: 500;
  font-size: var(--fs-md);
  
  &:hover {
    background-color: ${props => props.$theme === 'dark' ? '#1a94ff' : '#0070e0'};
  }
  
  transition: background-color 0.2s ease;
`