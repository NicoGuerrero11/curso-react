import { describe, test, expect } from 'vitest';
import { useGifs } from './useGifs';
import { renderHook} from '@testing-library/react';

describe('useGifs', () => {
    test()
})

const {result } = renderHook(() => useCounter());

act(() => {
    result.current.handdlerSubstract()

})

expect(result.current.counter).toBe(9)

