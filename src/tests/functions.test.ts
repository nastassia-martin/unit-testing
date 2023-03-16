import { describe, it, expect } from 'vitest'
import { addTodo } from '../functions'
import { Todo } from '../types/Todo'
// import { Result } from '../types/Result'


// beforeEach test, empty todo array
const todo: Todo = {
    id: 1,
    title: 'say hello to everyone',
    completed: false,
}


describe('adds a Todo', () => {
    const result = addTodo(todo.title, [todo])
    it.todo('should add a todo to array Todo', () => {

    })
    // x 3 tests

    // 1 - need to make sure that the id doesn't already exist & create new id
    // 2 - success must be true
    // 3 - completed must be false?
    // 4 - must have title


    it('should not add a todo with empty title', () => {
        expect(todo.title.length).not.toBe(0)
        expect(result.success).toBe(true)
        expect(result.error).toBeUndefined()
    })

    it('should not add a todo with title shorter than 3 characters', () => {
        expect(todo.title.length).toBeGreaterThanOrEqual(3)
        expect(result.success).toBe(true)
        expect(result.error).toBeUndefined()
    })

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