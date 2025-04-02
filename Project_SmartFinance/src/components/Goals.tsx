import { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Goals = () => {
  const [goals, setGoals] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addGoal = () => {
    if (input.trim()) {
      setGoals([...goals, input]);
      setInput("");
    }
  };

  const deleteGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Financial Goals
        </Typography>
        <TextField
          label="Add a Goal"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={addGoal}
        >
          Add Goal
        </Button>
        <List>
          {goals.map((goal, index) => (
            <ListItem 
              key={index}
              secondaryAction={
                <IconButton edge="end" color="error" onClick={() => deleteGoal(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={goal} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Goals;

