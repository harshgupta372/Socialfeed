import { FaHeart, FaRegHeart, FaComment, FaRetweet, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
import { usePosts } from '../../contexts/PostsContext'
import { useTheme } from '../../contexts/ThemeContext'
import { getPlatformIcon } from '../../utils/platformUtils'
import { 
  PostContainer,
  PostHeader,
  UserInfo,
  UserImage,
  UserMeta,
  Username,
  Timestamp,
  PlatformBadge,
  PostContent,
  PostTitle,
  PostText,
  PostImage,
  PostFooter,
  ActionButton,
  ActionCount,
  MediumMeta,
  VerifiedBadge
} from './styles'

function PostCard({ post }) {
  const { toggleBookmark, isBookmarked } = usePosts()
  const { theme } = useTheme()
  const PlatformIcon = getPlatformIcon(post.platform)
  const bookmarked = isBookmarked(post.id)
  
  const formatTimestamp = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
  }
  
  return (
    <PostContainer $theme={theme}>
      <PostHeader>
        <UserInfo>
          <UserImage src={post.userImage} alt={post.username} />
          <UserMeta>
            <Username $platform={post.platform}>
              {post.username}
              {post.verified && <VerifiedBadge $platform={post.platform} />}
            </Username>
            <Timestamp $theme={theme}>{formatTimestamp(post.timestamp)}</Timestamp>
          </UserMeta>
        </UserInfo>
        <PlatformBadge $platform={post.platform}>
          <PlatformIcon />
        </PlatformBadge>
      </PostHeader>
      
      <PostContent>
        {post.platform === 'medium' && post.title && (
          <PostTitle $theme={theme}>{post.title}</PostTitle>
        )}
        
        <PostText $theme={theme}>{post.content}</PostText>
        
        {post.image && (
          <PostImage src={post.image} alt="Post content" />
        )}
        
        {post.platform === 'medium' && (
          <MediumMeta $theme={theme}>
            {post.readTime} • {post.topics && post.topics.join(', ')}
          </MediumMeta>
        )}
      </PostContent>
      
      <PostFooter>
        <ActionButton $theme={theme}>
          {post.platform === 'medium' ? <FaHeart /> : <FaRegHeart />}
          <ActionCount>{post.likes}</ActionCount>
        </ActionButton>
        
        {(post.platform === 'instagram' || post.platform === 'twitter') && (
          <ActionButton $theme={theme}>
            <FaComment />
            <ActionCount>{post.comments}</ActionCount>
          </ActionButton>
        )}
        
        {post.platform === 'twitter' && (
          <ActionButton $theme={theme}>
            <FaRetweet />
            <ActionCount>{post.retweets}</ActionCount>
          </ActionButton>
        )}
        
        <ActionButton 
          onClick={() => toggleBookmark(post.id)}
          $active={bookmarked}
          $theme={theme}
        >
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </ActionButton>
      </PostFooter>
    </PostContainer>
  )
}

export default PostCard