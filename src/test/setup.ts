import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver
(globalThis as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
(globalThis as any).ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

// Mock window.URL.createObjectURL
(globalThis as any).URL.createObjectURL = vi.fn(() => 'mocked-url');
(globalThis as any).URL.revokeObjectURL = vi.fn(); 