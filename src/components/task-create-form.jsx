import { useState } from "react";
import { useGlobalState } from "../context";

import { Box, TextField, Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function TaskCreateForm() {
    const { tasks } = useGlobalState();

    const [text, setText] = useState("");

    const add = () => {
        GlobalState.set({
            tasks: [...tasks, {
                id: Date.now().toString(),
                text,
                done: false
            }]
        })
        setText("")
    };

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: 1,
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                id="outlined"
                value={text}
                onChange={(e) => {
                    e.preventDefault();
                    setText(e.target.value);
                }}
            />
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" onClick={(e) => add()}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    );
}
