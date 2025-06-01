import { createContext, useContext, useState, useEffect } from 'react'
import { fetchMockPosts } from '../services/api'

const PostsContext = createContext()

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilters, setActiveFilters] = useState({
    instagram: true,
    twitter: true,
    medium: true
  })
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks')
    return saved ? JSON.parse(saved) : []
  })

  const loadPosts = async () => {
    try {
      setIsLoading(true)
      const data = await fetchMockPosts()
      setPosts(data)
      setError(null)
    } catch (err) {
      setError('Failed to load posts. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])
  
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleFilter = (platform) => {
    setActiveFilters(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }))
  }

  const toggleBookmark = (postId) => {
    setBookmarks(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId)
      } else {
        return [...prev, postId]
      }
    })
  }

  const getFilteredPosts = () => {
    return posts.filter(post => activeFilters[post.platform])
  }

  const getBookmarkedPosts = () => {
    return posts.filter(post => bookmarks.includes(post.id))
  }

  return (
    <PostsContext.Provider value={{
      posts: getFilteredPosts(),
      bookmarkedPosts: getBookmarkedPosts(),
      isLoading,
      error,
      activeFilters,
      toggleFilter,
      toggleBookmark,
      isBookmarked: (postId) => bookmarks.includes(postId),
      refreshPosts: loadPosts
    }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)