import { render, screen } from '@testing-library/react';
import { BaseLink } from './link-context';

describe('BaseLink', () => {
  it('opens absolute web URLs in a new tab', () => {
    render(<BaseLink href="https://www.instagram.com/wrenpages/">Instagram</BaseLink>);
    const link = screen.getByRole('link', { name: 'Instagram' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('keeps mailto and internal links in the same tab', () => {
    render(
      <>
        <BaseLink href="mailto:hi@example.com">Email</BaseLink>
        <BaseLink href="/pricing">Pricing</BaseLink>
      </>,
    );
    expect(screen.getByRole('link', { name: 'Email' })).not.toHaveAttribute('target');
    expect(screen.getByRole('link', { name: 'Pricing' })).not.toHaveAttribute('target');
  });
});
