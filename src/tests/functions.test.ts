import { describe, it, expect, afterEach } from 'vitest'
import { addTodo } from '../functions'
import { Todo } from '../types/Todo'


let todos: Todo[] = []

describe('add a Todo', () => {
    afterEach(() => {
        todos = []
    })

    it('should add a todo to array Todo', () => {
        const title = "say hello to everyone"
        const result = addTodo(title, todos)

        expect(todos.length).toBeGreaterThanOrEqual(1)
        expect(result.success).toBe(true)
        expect(title).toBe(todos[0].title)
    })

    it('should not add a todo with empty title', () => {
        const title = ""
        const result = addTodo(title, todos)

        expect(title).toBe("")
        expect(result.success).toBe(false)
        expect(result.error).toContain('Title cannot be empty')
    })

    it('should not add a todo with title shorter than 3 characters', () => {
        const title = "IG"
        const result = addTodo(title, todos)

        expect(title.length).toBeLessThanOrEqual(3)
        expect(result.success).toBe(false)
        expect(result.error).toContain('Title must be at least 3 characters long')
    })

})


//describe('toggle todo', () => {
    //should toggle a todo x 2 tests
    //should not toggle a todo that does not exist x 2 tests

//})

//describe('delete todo', () => {
    //should delete a todo x 2 tests
    //should not delete a todo that does not exist x 2 tests
//})