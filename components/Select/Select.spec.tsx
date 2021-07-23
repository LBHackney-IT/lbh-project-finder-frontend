import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select Component', () => {
    const props = {
        name: "test_select",
        label: "Test Select",
        options: [{ text: "one", value: "one" }],
        register: jest.fn(),

    };

    it('renders correctly', () => {
        render(<Select {...props} />);

        expect(screen.getByLabelText("Test Select"));
        expect(screen.getByRole('option', { name: "one" }));
    });

    it('renders errors', () => {
        const testError = {
            type: 'required',
            message: 'test error'
        };

        render(<Select {...props} error={testError} />);

        expect(screen.getByText('test error'));
    });

});