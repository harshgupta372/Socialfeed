# FeedFusion 🚀

A unified social media feed aggregator that brings together your favorite content from Instagram, Medium, and Twitter in one seamless experience.

## ✨ Features

- Multi-Platform Integration: Browse posts from Instagram, Medium, and Twitter in a single, unified feed
- Dark Mode Support: Toggle between light and dark themes for comfortable viewing at any time
- Infinite Scroll: Smoothly scroll through endless content without pagination interruptions
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Real-time Updates: Stay up-to-date with the latest posts from your connected platforms
- Clean Interface: Minimalist design that puts your content first

## 🛠️ Built With

- React.js - Frontend framework for building the user interface
- JavaScript (ES6+) - Core programming language
- CSS3 - Styling and responsive design
- Social Media APIs - Integration with Instagram, Medium, and Twitter APIs

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/feedfusion.git
cd feedfusion
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Add your API keys to the `.env` file:
```env
REACT_APP_INSTAGRAM_API_KEY=your_instagram_api_key
REACT_APP_MEDIUM_API_KEY=your_medium_api_key
REACT_APP_TWITTER_API_KEY=your_twitter_api_key
```

5. Start the development server
```bash
npm start
# or
yarn start
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📱 Usage

1. Connect Your Accounts: Link your Instagram, Medium, and Twitter accounts through the settings panel
2. Browse Your Feed: Scroll through your unified feed to see posts from all connected platforms
3. Toggle Dark Mode: Click the theme toggle button to switch between light and dark modes
4. Interact with Posts: Like, share, and engage with content directly from the aggregated feed

## 🔧 Configuration

### API Setup

To use FeedFusion, you'll need to obtain API keys from:

- Instagram Basic Display API: For accessing Instagram posts
- Medium API: For fetching Medium articles
- Twitter API v2: For retrieving Twitter posts

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_INSTAGRAM_API_KEY=your_key_here
REACT_APP_MEDIUM_API_KEY=your_key_here
REACT_APP_TWITTER_API_KEY=your_key_here
REACT_APP_API_BASE_URL=http://localhost:3000
```

## 📂 Project Structure

```
feedfusion/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Feed/
│   │   ├── Post/
│   │   ├── Header/
│   │   └── ThemeToggle/
│   ├── services/
│   │   ├── instagramAPI.js
│   │   ├── mediumAPI.js
│   │   └── twitterAPI.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── themes.css
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Themes

FeedFusion supports custom themes. You can modify the theme colors in `src/styles/themes.css`:

```css
:root {
  --primary-color: #your-color;
  --background-color: #your-background;
  --text-color: #your-text-color;
}
```

### Adding New Platforms

To add support for additional social media platforms:

1. Create a new API service file in `src/services/`
2. Implement the platform's API integration
3. Add the new platform to the feed aggregation logic
4. Update the UI to include the new platform option

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the React.js community for the amazing framework
- Instagram, Medium, and Twitter for providing robust APIs
- All contributors who help make FeedFusion better

## 📞 Support

If you have any questions or run into issues, please:
- Check the [Issues](https://github.com/yourusername/feedfusion/issues) page
- Create a new issue if your problem isn't already listed
- Reach out on [Twitter](https://twitter.com/yourusername) for quick questions

---

⭐ If you found FeedFusion helpful, please give it a star on GitHub!
