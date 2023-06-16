import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dropdown from './components/Dropdown/Dropdown';

describe('Dropdown', () => {
  it('renders the dropdown with placeholder when closed', () => {
    render(<Dropdown url="http://127.0.0.1:8888/api/fruits.json" />);

    const placeholderText = screen.getByText('Select an item');
    expect(placeholderText).toBeInTheDocument();

    const dropdownIcon = screen.getByRole('img');
    expect(dropdownIcon).toHaveAttribute('src', 'chevron_down.png');
  });

  it('renders the dropdown with search input when opened', () => {
    render(<Dropdown url="http://127.0.0.1:8888/api/fruits.json" />);

    const dropdownHeader = screen.getByText('Select an item');

    fireEvent.click(dropdownHeader);

    const searchInput = screen.getByPlaceholderText('This is a input search');

    expect(searchInput).toBeInTheDocument();

    const dropdownIcon = screen.getByRole('img');
    expect(dropdownIcon).toHaveAttribute('src', 'chevron_up.png');
  });

  it('renders the filtered fruit list correctly', async () => {
    render(<Dropdown url="http://127.0.0.1:8888/api/fruits.json" />);

    const dropdownHeader = screen.getByText('Select an item');

    fireEvent.click(dropdownHeader);

    const searchInput = screen.getByPlaceholderText('This is a input search');

    fireEvent.change(searchInput, { target: { value: 'apple' } });

    await waitFor(() => {
      const filteredFruitOption = screen.getByText('apple');
      expect(filteredFruitOption).toBeInTheDocument();
    });
  });

  it('renders "No items were found." when no matching fruits', async () => {
    render(<Dropdown url="http://127.0.0.1:8888/api/fruits.json" />);

    const dropdownHeader = screen.getByText('Select an item');

    fireEvent.click(dropdownHeader);

    const searchInput = screen.getByPlaceholderText('This is a input search');

    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    await waitFor(() => {
      const noItemsText = screen.getByText('No items were found.');
      expect(noItemsText).toBeInTheDocument();
    });
  });

  it('selects a fruit on click', async () => {
    render(<Dropdown url="http://127.0.0.1:8888/api/fruits.json" />);
  
    const dropdownHeader = screen.getByText('Select an item');
  
    fireEvent.click(dropdownHeader);
    await waitFor(() => {
      const fruitOption = screen.getByText('apple');
      fireEvent.click(fruitOption);
    });
  
    const updatedDropdownHeader = screen.getByDisplayValue('apple');
    expect(updatedDropdownHeader).toBeInTheDocument();
  });
});
