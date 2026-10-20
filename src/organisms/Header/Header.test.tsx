import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

const items = [
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing', active: true },
];

describe('Header', () => {
  it('marks the active page', () => {
    render(<Header items={items} cta={{ label: 'Get a free audit', href: '/audit' }} />);
    const main = screen.getByRole('navigation', { name: 'Main' });
    expect(main.querySelector('[aria-current="page"]')).toHaveTextContent('Pricing');
  });

  it('opens and closes the mobile menu (button + Escape)', async () => {
    render(<Header items={items} cta={{ label: 'Get a free audit', href: '/audit' }} />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  });
});
