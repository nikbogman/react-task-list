import TaskCreateForm from "../components/task-create-form";
import TaskList from "../components/task-list";

export default function Tasks() {
    return <>
        <TaskCreateForm />
        <TaskList />
    </>
}