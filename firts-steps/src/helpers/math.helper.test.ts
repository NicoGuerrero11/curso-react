
import { expect, test } from 'vitest'
import { add } from './math.helper'

test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
})


