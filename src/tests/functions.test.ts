import { describe, it, expect, beforeEach } from 'vitest'
import { addTodo, deleteTodo, toggleTodo } from '../functions'
import { Todo } from '../types/Todo'


let todos: Todo[] = []

describe('add a Todo', () => {
    beforeEach(() => {
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
        expect(todos.length).toBe(0)
    })

    it('should not add a todo with title shorter than 3 characters', () => {
        const title = "IG"
        const result = addTodo(title, todos)

        expect(title.length).toBeLessThanOrEqual(3)
        expect(result.success).toBe(false)
        expect(result.error).toContain('Title must be at least 3 characters long')
        expect(todos.length).toBe(0)
    })
})


describe('toggle todo', () => {
    beforeEach(() => {
        todos = []
    })

    it('should toggle a todo', () => {

        todos = [
            { id: 1, title: "understand testing", completed: false },
            { id: 2, title: "make friends with ts", completed: false },
        ]
        const id = todos[0].id
        const result = toggleTodo(id, todos)

        expect(result.success).toBe(true)
        expect(todos[0].completed).toBe(true)

    })

    it('should not toggle a todo that does not exist', () => {

        todos = [
            { id: 1, title: "understand testing", completed: false },
        ]

        const id = 2
        const result = toggleTodo(id, todos)

        expect(result.success).toBe(false)
        expect(result.error).toContain('Todo not found')
    })
})

describe('delete todo', () => {

    beforeEach(() => {
        todos = []
    })

    it('should delete a todo', () => {
        todos = [
            { id: 1, title: "understand testing", completed: false },
            { id: 2, title: "make friends with ts", completed: false },
        ]
        const id = todos[0].id
        const result = deleteTodo(id, todos)

        expect(result.success).toBe(true)
        expect(todos.length).toBe(1)
    })

    it('should not delete a todo that does not exist', () => {
        todos = [
            { id: 1, title: "understand testing", completed: false }
        ]

        const id = 2
        const result = deleteTodo(id, todos)

        expect(result.error).toContain('Todo not found')
        expect(result.success).toBe(false)
        expect(todos.length).toBe(1)
    })
})