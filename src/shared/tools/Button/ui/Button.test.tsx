import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('to be in the document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST').parentElement).toBeInTheDocument();
    });

    test('to have content', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('content');
    });

    test('to have a theme', () => {
        render(<Button theme={ButtonTheme.MINECRAFT}>TEST</Button>);
        expect(screen.getByText('TEST').parentElement).toHaveClass('minecraft');
    });
});
