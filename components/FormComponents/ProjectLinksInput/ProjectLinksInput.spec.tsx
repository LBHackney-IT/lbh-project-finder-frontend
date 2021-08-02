import { render, fireEvent, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import ProjectLinksInput from './ProjectLinksInput';

describe('ProjectLinksInput component', () => {
    const props = {
        name: "test",
        label: "foo",


    }
    it('renders no grouped inputs correctly', () => {
        const Component = () => {
            const methods = useForm();
            return (
                <FormProvider {...methods}><ProjectLinksInput {...props} /> </FormProvider>)
        }
        render(<Component />)

        expect(screen.queryByRole("textbox")).toBeNull();
        expect(screen.getByText("Add Link"));
        expect(screen.getByText("foo"));
    });

    it('allows an input group to be added', () => {
        const Component = () => {
            const methods = useForm();
            return (
                <FormProvider {...methods}><ProjectLinksInput {...props} /> </FormProvider>)
        }
        render(<Component />)

        fireEvent.click(screen.getByText("Add Link"))
        expect(screen.queryAllByRole("textbox").length).toBe(2);
    })

    it('allows an input group to be removed', () => {
        const Component = () => {
            const methods = useForm();
            return (
                <FormProvider {...methods}><ProjectLinksInput {...props} /> </FormProvider>)
        }
        render(<Component />)

        fireEvent.click(screen.getByText("Add Link"))
        expect(screen.queryAllByRole("textbox").length).toBe(2);

        fireEvent.click(screen.getByText("Remove"))
        expect(screen.queryAllByRole("textbox").length).toBe(0);
    })
});