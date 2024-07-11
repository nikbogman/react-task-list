import Box from "@mui/material/Box";
import {
    Paper,
    Stack,
    styled,
} from "@mui/material";
import { useGlobalState } from "../context";

import Task from "./task";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function TaskList() {
    const { tasks } = useGlobalState()


    return (
        <Box>
            <Stack spacing={2}>
                {tasks.map((task) => (
                    <Item key={task.id}>
                        <Task {...task} />
                    </Item>
                ))}
            </Stack>
        </Box>
    );
}
