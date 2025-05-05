# Zomato Clone

A modern food delivery platform clone built with React, TypeScript, Redux Toolkit, and TailwindCSS.


## Features

- 🔍 Restaurant search and filtering
- 🍽️ Restaurant details with menu items
- 🛒 Shopping cart functionality
- 📍 Location selection
- 🎨 Responsive design
- ✨ Smooth animations with Framer Motion
- 🌙 Dark/Light mode adaptability
- 💾 Local storage persistence for cart

## Tech Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Getting Started

1. Clone the repository:
```sh
git clone https://github.com/yourusername/zomato-clone.git
cd zomato-clone
````

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Project Structure

```
project/
├── src/
│   ├── app/              # Redux store configuration
│   ├── components/       # Reusable UI components
│   │   ├── cart/        # Cart related components
│   │   ├── home/        # Homepage components
│   │   ├── layout/      # Layout components
│   │   ├── restaurant/  # Restaurant related components
│   │   ├── search/      # Search components
│   │   └── ui/          # Common UI components
│   ├── features/        # Redux slices and features
│   │   ├── cart/       # Cart state management
│   │   └── filter/     # Filter state management
│   ├── pages/          # Route pages
│   ├── types/          # TypeScript interfaces
│   └── utils/          # Helper functions
```

## Key Features Implementation

### Cart Management
- Uses Redux Toolkit for state management
- Persists cart data in localStorage
- Supports add, remove, and quantity updates

### Restaurant Search & Filtering
- Filter by cuisine, price range, and categories
- Sort by rating and delivery time
- Real-time filter updates

### UI/UX Features
- Responsive header with dynamic background
- Smooth page transitions
- Interactive menu items
- Loading animations
