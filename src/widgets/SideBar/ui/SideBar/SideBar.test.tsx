import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('to be on the screen', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        render(<SideBar />);
        const toggleButton = screen.getByTestId('toggle-btn');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('toggled');
    });
});
