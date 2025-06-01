import { FaInstagram, FaTwitter, FaMedium } from 'react-icons/fa'

export const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'instagram':
      return FaInstagram
    case 'twitter':
      return FaTwitter
    case 'medium':
      return FaMedium
    default:
      return null
  }
}

export const getPlatformColor = (platform) => {
  switch (platform) {
    case 'instagram':
      return 'var(--instagram)'
    case 'twitter':
      return 'var(--twitter)'
    case 'medium':
      return 'var(--medium)'
    default:
      return null
  }
}