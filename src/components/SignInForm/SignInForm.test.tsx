import { render, fireEvent, screen, getByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import SignInForm from '.';

const setup = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>
    </Provider>
  );

  const nameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    'Password'
  ) as HTMLInputElement;
  const button = screen.getByRole('button', {
    name: /Sign in/i,
  });

  return {
    nameInput,
    passwordInput,
    button,
  };
};

test('Ability to submit form', () => {
  const { nameInput, passwordInput, button } = setup();

  fireEvent.change(nameInput, { target: { value: 'qwe' } });
  fireEvent.change(passwordInput, { target: { value: '123' } });

  expect(nameInput.value).toBe('qwe');
  expect(passwordInput.value).toBe('123');

  expect(button).not.toHaveAttribute('disabled');
});

test('Empty form can not be submited', () => {
  const { button } = setup();

  expect(button).toHaveAttribute('disabled');
});
