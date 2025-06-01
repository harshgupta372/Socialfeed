import { usePosts } from '../contexts/PostsContext'
import FeedLayout from '../components/FeedLayout'

function Bookmarks() {
  const { bookmarkedPosts } = usePosts()
  
  return (
    <FeedLayout 
      title="Your Bookmarks"
      getPosts={() => bookmarkedPosts}
      emptyMessage="You haven't bookmarked any posts yet. Start by saving posts you like!"
    />
  )
}

export default Bookmarks