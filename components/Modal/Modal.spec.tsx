import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe('Modal component', () => {
    it('renders correctly when opened', () => {
        render(
            <Modal isOpen={true} onDismiss={jest.fn()} title="Some Title">
                Test
            </Modal>);
        expect(screen.getByText("Some Title"));
        expect(screen.getByText("Test"));
    })

    it('calls the correct callback when the modal is closed', () => {
        const closeFunction = jest.fn()
        render(
            <Modal isOpen={true} onDismiss={closeFunction} title="Some Title">
                Test
            </Modal>);

        fireEvent.click(screen.getByText("Close"));
        expect(closeFunction).toBeCalled();
    })
})