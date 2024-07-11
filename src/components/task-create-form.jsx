import { useState } from "react";

import { Box, TextField, Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useTasks } from "../hooks/tasks";

export default function TaskCreateForm() {
    const { add } = useTasks();
    const [text, setText] = useState("");

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
                <Fab color="primary" onClick={(e) => {
                    add(text)
                    setText("")
                }}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    );
}
