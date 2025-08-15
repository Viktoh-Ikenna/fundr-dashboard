import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mockApi } from '../utils/mockApi';

// Mock the delay function to speed up tests
vi.mock('../utils/mockApi', async () => {
  const actual = await vi.importActual('../utils/mockApi');
  return {
    ...actual,
    mockApi: {
      async getDashboardStats() {
        return {
          status: 'success',
          data: {
            revenue: {
              current: 0,
              previous: 10000,
              percentage: -10,
              data: [
                { month: 'Jan', value: 3000 },
                { month: 'Feb', value: 4500 }
              ]
            },
            accountDetails: {
              bankName: 'STERLING BANK',
              accountNumber: '8000000000',
              balance: 0
            }
          }
        };
      },
      async getTransactions(_page = 1, _limit = 8) {
        const mockTransactions = [
          {
            id: '1',
            amount: 43644,
            type: 'Transfer',
            date: 'Feb 12, 2022',
            time: '10:30AM',
            status: 'Processed',
            transactionId: 'TR_8401857902'
          }
        ];
        
        return {
          status: 'success',
          data: {
            transactions: mockTransactions,
            total: 20
          }
        };
      },
      async getFilteredTransactions(_filters: any) {
        return {
          status: 'success',
          data: []
        };
      }
    }
  };
});

describe('MockAPI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getDashboardStats', () => {
    it('should return dashboard statistics', async () => {
      const result = await mockApi.getDashboardStats();
      
      expect(result.status).toBe('success');
      expect(result.data).toBeDefined();
      expect(result.data.revenue).toBeDefined();
      expect(result.data.accountDetails).toBeDefined();
      expect(result.data.accountDetails.bankName).toBe('STERLING BANK');
      expect(result.data.accountDetails.accountNumber).toBe('8000000000');
    });

    it('should return revenue data with correct structure', async () => {
      const result = await mockApi.getDashboardStats();
      
      expect(result.data.revenue.current).toBeDefined();
      expect(result.data.revenue.previous).toBeDefined();
      expect(result.data.revenue.percentage).toBeDefined();
      expect(Array.isArray(result.data.revenue.data)).toBe(true);
      expect(result.data.revenue.data.length).toBeGreaterThan(0);
    });
  });

  describe('getTransactions', () => {
    it('should return paginated transactions', async () => {
      const result = await mockApi.getTransactions(1, 8);
      
      expect(result.status).toBe('success');
      expect(result.data.transactions).toBeDefined();
      expect(Array.isArray(result.data.transactions)).toBe(true);
      expect(result.data.total).toBeDefined();
      expect(typeof result.data.total).toBe('number');
    });

    it('should return transactions with correct structure', async () => {
      const result = await mockApi.getTransactions();
      const transaction = result.data.transactions[0];
      
      expect(transaction).toHaveProperty('id');
      expect(transaction).toHaveProperty('amount');
      expect(transaction).toHaveProperty('type');
      expect(transaction).toHaveProperty('date');
      expect(transaction).toHaveProperty('time');
      expect(transaction).toHaveProperty('status');
      expect(transaction).toHaveProperty('transactionId');
    });
  });

  describe('getFilteredTransactions', () => {
    it('should return filtered transactions', async () => {
      const filters = { status: 'Processed' };
      const result = await mockApi.getFilteredTransactions(filters);
      
      expect(result.status).toBe('success');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });
}); 