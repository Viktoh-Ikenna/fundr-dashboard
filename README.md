# FundR Dashboard

A modern, responsive financial dashboard built with React, TypeScript, and Vite. This project was created as a technical assessment for Squareme Technologies Nigeria Limited.

![FundR Dashboard](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-cyan)

## 🚀 Features

- **Modern UI/UX**: Responsive design with smooth animations using Framer Motion
- **State Management**: Redux Toolkit for efficient state management
- **Mock API**: Realistic API simulation with loading states and error handling
- **Interactive Charts**: Revenue visualization using Recharts
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Testing**: Comprehensive test suite with Vitest and React Testing Library
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Redux Toolkit with RTK Query patterns
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions
- **Testing**: Vitest, React Testing Library, jsdom
- **Build Tool**: Vite for fast development and building

## 📱 Pages & Features

### Dashboard (Online Payments)
- Revenue chart with time period filters
- Account details with copy-to-clipboard functionality
- Animated loading states with skeleton loaders
- Responsive layout (mobile and desktop)

### Transactions
- Comprehensive transaction table with pagination
- Advanced filtering by account type and date range
- Export functionality (CSV download)
- Mobile-optimized card view
- Status badges with color coding

### Navigation
- Animated sidebar with responsive behavior
- Active state indicators
- Mobile hamburger menu with overlay

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fundr-dashboard
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧪 Testing

Run the test suite:
```bash
yarn test
```

For UI testing:
```bash
yarn test:ui
```

## 🏗️ Building for Production

Build the application:
```bash
yarn build
```

Preview the production build:
```bash
yarn preview
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**: 
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `yarn build`
   - Publish directory: `dist`

3. **Environment Variables** (if needed):
   - No environment variables required for this demo

### Fly.io Deployment

1. **Install Fly CLI**:
```bash
curl -L https://fly.io/install.sh | sh
```

2. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

3. **Deploy**:
```bash
fly launch
fly deploy
```

### Manual Deployment Steps

1. Build the project: `yarn build`
2. The `dist` folder contains all static files
3. Upload the `dist` folder contents to your hosting provider
4. Configure the server to serve `index.html` for all routes (SPA routing)

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AccountCard.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── RevenueChart.tsx
│   ├── Sidebar.tsx
│   ├── SkeletonLoader.tsx
│   └── TransactionTable.tsx
├── hooks/              # Custom React hooks
│   └── redux.ts
├── pages/              # Page components
│   ├── Dashboard.tsx
│   └── Transactions.tsx
├── store/              # Redux store and slices
│   ├── dashboardSlice.ts
│   ├── transactionsSlice.ts
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── mockApi.ts
├── test/               # Test configuration
│   └── setup.ts
└── __tests__/          # Test files
    ├── mockApi.test.ts
    └── components/
        └── AccountCard.test.tsx
```

## 🎨 Design Implementation

The application faithfully implements the provided Figma designs with:

- **Color Scheme**: Blue primary colors, green success states, red error states
- **Typography**: Inter font family with proper weights
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Animations**: Smooth transitions for state changes and user interactions
- **Mobile Responsiveness**: Optimized layouts for both mobile and desktop viewports

## 🔧 Key Implementation Details

### State Management
- **Redux Toolkit** for centralized state management
- **Async Thunks** for API calls with loading and error states
- **Type-safe** selectors and dispatchers

### Mock API
- Realistic API simulation with configurable delays
- Error handling and loading states
- Pagination and filtering support

### Testing Strategy
- **Unit Tests**: Component rendering and functionality
- **Integration Tests**: API functions and Redux slices
- **Mock Setup**: Comprehensive mocking for external dependencies

### Performance Optimizations
- **Lazy Loading**: Code splitting for better initial load times
- **Memoization**: Proper use of React.memo and useMemo
- **Skeleton Loaders**: Improved perceived performance

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run test suite
- `yarn test:ui` - Run tests with UI
- `yarn lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is created for technical assessment purposes.

## 👨‍💻 Author

Created as a technical assessment for Squareme Technologies Nigeria Limited.

---

**Live Demo**: [Deploy URL will be available after deployment]

**Assessment Requirements Completed**:
- ✅ Next.js/React with TypeScript implementation
- ✅ Mock API calls with Redux Toolkit
- ✅ Comprehensive testing suite
- ✅ Responsive design matching Figma specifications
- ✅ Deployment-ready configuration
