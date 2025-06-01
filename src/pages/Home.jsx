import { usePosts } from '../contexts/PostsContext'
import FeedLayout from '../components/FeedLayout'

function Home() {
  const { posts } = usePosts()
  
  return (
    <FeedLayout 
      title="Your Feed"
      getPosts={() => posts}
      emptyMessage="No posts to display. Try adjusting your filters or check back later."
    />
  )
}

export default Home