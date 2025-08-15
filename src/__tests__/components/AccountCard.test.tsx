import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccountCard } from '../../components/AccountCard';
import { AccountDetails } from '../../types';

const mockAccountDetails: AccountDetails = {
  bankName: 'STERLING BANK',
  accountNumber: '8000000000',
  balance: 0
};

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

describe('AccountCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state correctly', () => {
    render(<AccountCard accountDetails={null} loading={true} />);
    
    // Should render skeleton loader
    expect(document.querySelector('.skeleton')).toBeInTheDocument();
  });

  it('renders account details correctly', () => {
    render(<AccountCard accountDetails={mockAccountDetails} loading={false} />);
    
    expect(screen.getByText('ACCOUNT DETAILS')).toBeInTheDocument();
    expect(screen.getByText('STERLING BANK')).toBeInTheDocument();
    expect(screen.getByText('8000000000')).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('handles copy functionality correctly', async () => {
    render(<AccountCard accountDetails={mockAccountDetails} loading={false} />);
    
    const copyButton = screen.getByText('Copy');
    fireEvent.click(copyButton);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('8000000000');
    
    // Should show "Copied" text temporarily
    await waitFor(() => {
      expect(screen.getByText('Copied')).toBeInTheDocument();
    });
  });

  it('shows balance when provided', () => {
    const accountDetailsWithBalance = {
      ...mockAccountDetails,
      balance: 50000
    };
    
    render(<AccountCard accountDetails={accountDetailsWithBalance} loading={false} />);
    
    // Since we removed the balance display, just check that the component renders
    expect(screen.getByText('ACCOUNT DETAILS')).toBeInTheDocument();
    expect(screen.getByText('STERLING BANK')).toBeInTheDocument();
  });

  it('renders nothing when no account details and not loading', () => {
    const { container } = render(<AccountCard accountDetails={null} loading={false} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('handles copy error gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.mocked(navigator.clipboard.writeText).mockRejectedValueOnce(new Error('Copy failed'));
    
    render(<AccountCard accountDetails={mockAccountDetails} loading={false} />);
    
    const copyButton = screen.getByText('Copy');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Failed to copy: ', expect.any(Error));
    });
    
    consoleSpy.mockRestore();
  });
}); 