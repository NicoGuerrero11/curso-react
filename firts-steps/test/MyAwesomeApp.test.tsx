import {describe, test, expect} from 'vitest' 
import MyAwesomeApp from '../src/components/MyAwesomeApp';
import {render, screen} from '@testing-library/react'

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const {container} = render(<MyAwesomeApp />);
        // screen.debug()

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1 ?.innerHTML).toContain('Nicolas')
        expect(h3 ?.innerHTML).toContain('Guerrero')
    })

    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />)
        screen.debug()

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Nicolas')
    })

    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    })
})