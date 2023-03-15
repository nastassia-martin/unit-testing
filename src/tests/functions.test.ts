import { describe, it, expect } from 'vitest'
import { addTodo } from '../functions'


// beforeEach test, empty todo array

describe('adds a Todo', () => {



    //should add a todo to array Todo x 3 tests

    // 1 - id to not exist/ be unique
    // 2 - id + 1?
    // 3 - 


    //should not add a todo with empty title x 3 tests

    // 1 - expect(title.length).not.toHaveLength(0)
    // 2 - expect (success).toBe(true)
    // 3 - expect (error).toHaveLength(0)


    //should not add a todo with title shorter than 3 characters x 3 tests

    // 1 - expect(title.length)tobeGreaterThan(3)
    // 2 - expect(success).toBe(true)
    // 3 - expect(error).toHaveLength(0)
})

// describe('toggle todo', () => {
//     //should toggle a todo x 2 tests
//     //should not toggle a todo that does not exist x 2 tests
// 1 - expect (COMPLETED).toHaveReturned() - true
// })

// describe('delete todo', () => {
//     //should delete a todo x 2 tests
//     //should not delete a todo that does not exist x 2 tests
// })