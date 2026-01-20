# Dev Portfolio 2026

A modern, high-performance developer portfolio built with the latest web technologies. This project showcases my skills, experience, and projects, featuring an interactive AI Playground powered by Google Gemini.

## 🚀 Features

- **Interactive AI Playground**: A conversational interface powered by Google Gemini that allows visitors to ask questions about my experience and skills.
- **Dynamic Hero Section**: Engaging landing area to grab attention immediately.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI/UX**: Built with a focus on aesthetics, usability, and performance using Tailwind CSS and Framer Motion.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 20.0.0 or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/richard0000/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Google Gemini API key:
   ```env
   GOOGLE_API_KEY=your_api_key_here
   ```
   > You can get an API key from [Google AI Studio](https://aistudio.google.com/).

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add the `GOOGLE_API_KEY` environment variable in the Vercel project settings.
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
