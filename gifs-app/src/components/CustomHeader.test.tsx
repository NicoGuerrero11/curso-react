import { describe, test, expect } from 'vitest';
import { CustomHeader } from './CustomHeader';
import { screen, render} from '@testing-library/react';

describe('CustomHeader', () => {
    const title = 'Test Title';
    const description = 'this is for test'
    test('Should render the title when provided', () => {
        render(<CustomHeader title={title} description={description} />)
        expect(screen.getByText(title)).toBeDefined();
    })

    test('Should render the description when provided', () => {
        render(<CustomHeader title={title} description={description} />)
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);


    })
    test('Should not render the description when  not provided', () => {
        const {container} = render(<CustomHeader title={title} />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1')

        expect(h1?.innerHTML).toBe(title)

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();


    })
})
