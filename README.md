<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ClubRecruit AI

An AI-powered recruitment assistant application built with React, TypeScript, and Google's Gemini AI. This application helps streamline the club recruitment process through intelligent conversation and department matching.

## Features

- 🤖 AI-powered chat interface using Gemini API
- 🏢 Department information display and management
- 💬 Interactive recruitment assistance
- ⚡ Fast development with Vite
- 🎨 Modern UI with responsive design

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API
- **Styling**: CSS/CSS Modules

## Project Structure

```
clubrecruit-ai/
├── components/
│   ├── AiChat.tsx          # AI chat interface component
│   └── DepartmentCard.tsx  # Department display component
├── services/
│   └── geminiService.ts    # Gemini API integration
├── App.tsx                 # Main application component
├── constants.ts            # Application constants
├── types.ts                # TypeScript type definitions
├── metadata.json           # Application metadata
└── .env.local              # Environment variables
```

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Gemini API Key** from [Google AI Studio](https://ai.google.dev/)

## Installation

1. **Clone the repository** (or download the project):

   ```bash
   git clone <repository-url>
   cd clubrecruit-ai
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create or update [.env.local](.env.local)
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

## Running the Application

**Development mode**:

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is in use).

**Build for production**:

```bash
npm run build
```

**Preview production build**:

```bash
npm run preview
```

## Configuration

- **API Settings**: Configure Gemini API settings in [services/geminiService.ts](services/geminiService.ts)
- **App Constants**: Modify application constants in [constants.ts](constants.ts)
- **Type Definitions**: Update types in [types.ts](types.ts)
- **Metadata**: Update app metadata in [metadata.json](metadata.json)

## AI Studio

View and manage your app in AI Studio:  
🔗 [https://ai.studio/apps/drive/15EE4Q3RNu-20TsdsbwfNzvHR_LgjCTOd](https://ai.studio/apps/drive/15EE4Q3RNu-20TsdsbwfNzvHR_LgjCTOd)

## Development

- The main application logic is in [App.tsx](App.tsx)
- Chat functionality is implemented in [components/AiChat.tsx](components/AiChat.tsx)
- Department display uses [components/DepartmentCard.tsx](components/DepartmentCard.tsx)
- Gemini AI integration is handled in [services/geminiService.ts](services/geminiService.ts)

## Troubleshooting

**API Key Issues**:

- Ensure your `GEMINI_API_KEY` is set correctly in [.env.local](.env.local)
- Verify your API key is active at [Google AI Studio](https://ai.google.dev/)

**Build Errors**:

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript configuration in [tsconfig.json](tsconfig.json)

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]

## Support

For issues and questions, please [create an issue](https://github.com/your-repo/issues) or contact the development team.

```

```
