import { useGlobalState } from "./global-state";

export function useTasks() {
    const { tasks } = useGlobalState();

    const add = (text) => {
        GlobalState.set({
            tasks: [...tasks, {
                id: Date.now().toString(),
                text,
                done: false
            }]
        })
    }

    const remove = (id) => {
        GlobalState.set({
            tasks: [...tasks.filter(t => t.id !== id)]
        })
    }

    const update = (id, data = {}) => {
        const index = tasks.findIndex(t => t.id === id)
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], ...data }

        GlobalState.set({
            tasks: updatedTasks
        })
    }

    return { tasks, add, remove, update }
}