// Declare test suite
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../components/App";
import userEvent from '@testing-library/user-event';

describe('App Component', () => {
    let container
    beforeEach(() => {
        container = render(<App />).container
    })
    it('renders the home component', () => {
     
        
       expect(container.querySelector('h3')).toHaveTextContent('Journal Entries')

    });

    it('renders categories selection when create entry menu item is clicked', async () => {
        

        await userEvent.click(screen.getByText('Create Entry'))

        expect(container.querySelector('h3')).not.toBeNull()
        expect(container.querySelector('h3')).toHaveTextContent('Please select a category:')
    })
})