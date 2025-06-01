import { useEffect } from 'react'
import { usePosts } from '../../contexts/PostsContext'
import { useTheme } from '../../contexts/ThemeContext'
import PostCard from '../PostCard'
import { 
  FeedContainer, 
  EmptyState, 
  LoadingState, 
  ErrorState,
  RefreshButton,
  PostsList
} from './styles'

function FeedLayout({ title, getPosts, emptyMessage }) {
  const { isLoading, error, refreshPosts } = usePosts()
  const { theme } = useTheme()
  const posts = getPosts()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < -50) {
        refreshPosts()
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [refreshPosts])
  
  if (isLoading) {
    return (
      <LoadingState $theme={theme}>
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </LoadingState>
    )
  }
  
  if (error) {
    return (
      <ErrorState $theme={theme}>
        <p>{error}</p>
        <RefreshButton onClick={refreshPosts} $theme={theme}>
          Try Again
        </RefreshButton>
      </ErrorState>
    )
  }
  
  if (posts.length === 0) {
    return (
      <EmptyState $theme={theme}>
        <p>{emptyMessage}</p>
        <RefreshButton onClick={refreshPosts} $theme={theme}>
          Refresh
        </RefreshButton>
      </EmptyState>
    )
  }
  
  return (
    <FeedContainer $theme={theme}>
      <h2>{title}</h2>
      <PostsList>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsList>
    </FeedContainer>
  )
}

export default FeedLayout