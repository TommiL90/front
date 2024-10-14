# Task Management React Web Application

This repository contains a web application built with React and TypeScript, featuring credential authentication. The project uses pnpm as the package manager and Vite as the build tool.

## Prerequisites

Before setting up this project, make sure you have the following installed:
- Node.js (LTS version recommended)
- pnpm (You can install it globally using `npm install -g pnpm`)
- Git

## Backend Setup

This application requires a backend server to function properly. Please follow these steps to set up the backend:

1. Clone the backend repository:
   ```
   git clone https://github.com/TommiL90/java_todo.git
   ```

2. Follow the instructions in the backend repository's README to set up and run the backend server.

3. Make sure the backend server is running before proceeding with the frontend setup.

## Frontend Setup

After setting up the backend, follow these steps to set up and run the frontend application:

1. Clone this repository:
   ```
   git clone <your-frontend-repo-url>
   ```

2. Navigate to the project directory:
   ```
   cd <your-frontend-repo-name>
   ```

3. Install dependencies using pnpm:
   ```
   pnpm install
   ```

4. Start the development server:
   ```
   pnpm dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production to the `dist` folder.
- `pnpm lint`: Runs the linter to check for code style issues.
- `pnpm preview`: Locally preview the production build.

## Project Structure

- `src/`: Contains the source code for the application
  - `components/`: React components
  - `App.tsx`: Main application component
  - `main.tsx`: Entry point of the application
- `public/`: Static assets
- `index.html`: HTML template
- `vite.config.ts`: Vite configuration file
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Biome
- pnpm
