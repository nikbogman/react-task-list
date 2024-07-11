import { Box } from "@mui/material";
import { useGlobalState } from "../context";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    Checkbox,
    IconButton,
    TextField,
} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

import { useState } from "react";

export default function Task({ id, text, done }) {
    const { tasks } = useGlobalState();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const remove = () => {
        GlobalState.set({
            tasks: [...tasks.filter(t => t.id !== id)]
        })
    }

    const changeDone = (e) => {
        const idx = tasks.findIndex(t => t.id === id)
        const updatedTasks = [...tasks];
        updatedTasks[idx] = { id, text, done: e.target.checked }

        GlobalState.set({
            tasks: updatedTasks
        })

    }

    const update = () => {
        const idx = tasks.findIndex(t => t.id === id)
        const updatedTasks = [...tasks];
        updatedTasks[idx] = { id, text: editedText, done }

        GlobalState.set({
            tasks: updatedTasks
        })

        setEditedText(editedText)
        setIsEditing(false)
    }

    return <Box
        sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >

        <Checkbox
            disabled={isEditing}
            checked={done}
            onChange={changeDone}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />

        {isEditing ? <>
            <TextField
                label={text}
                size="small"
                value={editedText}
                onChange={(e) => {
                    e.preventDefault();
                    setEditedText(e.target.value);
                }}
                variant="filled"
            />

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <IconButton color="success" onClick={update}>
                    <SaveIcon />
                </IconButton>
                <IconButton color="error" onClick={() => setIsEditing(false)}>
                    <CancelIcon />
                </IconButton>
            </Box>
        </> : <>
            {text}

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <IconButton color="secondary" onClick={() => setIsEditing(true)}>
                    <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={remove}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </>
        }
    </Box>
}