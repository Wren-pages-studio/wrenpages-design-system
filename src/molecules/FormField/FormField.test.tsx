import { render, screen } from '@testing-library/react';
import { Input } from '../../atoms/Input';
import { FormField } from './FormField';

describe('FormField', () => {
  it('ties label, help and error to the control', () => {
    render(
      <FormField label="Email" help="We'll send your audit here." error="Please enter a valid email.">
        <Input id="email" />
      </FormField>,
    );
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription(/Please enter a valid email\./);
  });

  it('is valid without an error', () => {
    render(
      <FormField label="Name" help="So we know who to reply to.">
        <Input />
      </FormField>,
    );
    expect(screen.getByLabelText('Name')).not.toHaveAttribute('aria-invalid');
  });
});
