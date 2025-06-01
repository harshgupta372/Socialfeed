import styled, { css } from 'styled-components'
import { FaCheck } from 'react-icons/fa'

export const PostContainer = styled.article`
  padding: var(--space-3) 0;
  border-bottom: 1px solid ${props => props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
  animation: fadeIn 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex: 1;
`

export const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
`

export const Username = styled.span`
  font-weight: 600;
  color: var(--${props => props.$platform});
  display: flex;
  align-items: center;
  gap: 4px;
`

export const VerifiedBadge = styled(FaCheck)`
  color: white;
  background-color: var(--${props => props.$platform});
  border-radius: 50%;
  font-size: 10px;
  padding: 2px;
`

export const Timestamp = styled.span`
  font-size: var(--fs-sm);
  color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
`

export const PlatformBadge = styled.div`
  color: var(--${props => props.$platform});
  font-size: var(--fs-lg);
`

export const PostContent = styled.div`
  margin-bottom: var(--space-3);
`

export const PostTitle = styled.h3`
  font-weight: 700;
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
  color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
`

export const PostText = styled.p`
  font-size: var(--fs-md);
  line-height: 1.6;
  margin-bottom: var(--space-3);
  color: ${props => props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
`

export const PostImage = styled.img`
  width: 100%;
  border-radius: var(--radius-md);
  margin-top: var(--space-2);
`

export const MediumMeta = styled.div`
  font-size: var(--fs-sm);
  color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
  margin-top: var(--space-2);
`

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-3);
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.$active ? 'var(--accent-secondary-light)' : props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-md);
  
  &:hover {
    color: ${props => props.$active ? 'var(--accent-secondary-light)' : 'var(--accent-light)'};
    background-color: ${props => props.$theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  transition: all 0.2s ease;
`

export const ActionCount = styled.span`
  font-size: var(--fs-sm);
`