import { mockPosts } from './mockData'

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Fetch mock posts with artificial delay to simulate API call
export const fetchMockPosts = async () => {
  await delay(800)
  return mockPosts
}