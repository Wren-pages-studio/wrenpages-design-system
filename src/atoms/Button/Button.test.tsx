import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LinkProvider, type LinkComponentProps } from '../../utils/link-context';
import { Button } from './Button';

describe('Button', () => {
  it('renders a native button with type="button" by default', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Send</Button>);
    const btn = screen.getByRole('button', { name: 'Send' });
    expect(btn).toHaveAttribute('type', 'button');
    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders a link when href is set', () => {
    render(<Button href="/audit">Get a free audit</Button>);
    expect(screen.getByRole('link', { name: 'Get a free audit' })).toHaveAttribute('href', '/audit');
  });

  it('routes internal links through the LinkProvider adapter', () => {
    const Adapter = ({ href, children, ...rest }: LinkComponentProps) => (
      <a data-router="yes" href={href} {...rest}>
        {children}
      </a>
    );
    render(
      <LinkProvider component={Adapter}>
        <Button href="/pricing">Pricing</Button>
        <Button href="mailto:hi@example.com">Email</Button>
      </LinkProvider>,
    );
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('data-router', 'yes');
    expect(screen.getByRole('link', { name: 'Email' })).not.toHaveAttribute('data-router');
  });

  it('applies variant and size classes', () => {
    render(
      <Button variant="secondary" size="lg">
        Go
      </Button>,
    );
    const cls = screen.getByRole('button').className;
    expect(cls).toContain('secondary');
    expect(cls).toContain('lg');
  });
});
