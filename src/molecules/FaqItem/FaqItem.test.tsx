import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaqItem } from './FaqItem';

describe('FaqItem', () => {
  it('toggles aria-expanded when clicked', async () => {
    render(<FaqItem question="How long does it take?" answer="About 7 days." />);
    const button = screen.getByRole('button', { name: 'How long does it take?' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('can start open', () => {
    render(<FaqItem defaultOpen question="Q" answer="A" />);
    expect(screen.getByRole('button', { name: 'Q' })).toHaveAttribute('aria-expanded', 'true');
  });
});
