import { Box } from "@mui/material";
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
import { useTasks } from "../hooks/tasks";

export default function Task({ id, text, done }) {
    const { update, remove } = useTasks();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const RemoveButton = () => (
        <IconButton color="error" onClick={() => remove(id)}>
            <DeleteIcon />
        </IconButton>
    )

    const EditButton = () => (
        <IconButton color="secondary" onClick={() => setIsEditing(true)}>
            <EditIcon />
        </IconButton>
    )

    const CancelButton = () => (
        <IconButton color="error" onClick={() => setIsEditing(false)}>
            <CancelIcon />
        </IconButton>
    )

    const SaveButton = () => (
        <IconButton color="success" onClick={() => {
            update(id, { text: editedText })
            setEditedText(editedText)
            setIsEditing(false)
        }}>
            <SaveIcon />
        </IconButton>
    )


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
            onChange={(e) => update(id, { done: e.target.checked })}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />

        {isEditing ? <TextField
            label={text}
            size="small"
            value={editedText}
            onChange={(e) => {
                e.preventDefault();
                setEditedText(e.target.value);
            }}
            variant="filled"
        /> : <p>{text}</p>}


        <Box
            sx={{
                display: "flex",
                gap: 1,
            }}
        >
            {isEditing ?
                <>
                    <SaveButton />
                    <CancelButton />
                </> : <>
                    <EditButton />
                    <RemoveButton />
                </>}

        </Box>

    </Box>
}
