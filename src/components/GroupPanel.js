import React, { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import { Box, Typography, List, ListItemButton, ListItemText, Button, TextField } from '@mui/material';

const GroupPanel = () => {
  const { groups, addGroup, setSelectedGroup, selectedGroup } = usePhoneBookStore();
  const [showInput, setShowInput] = useState(false);
  const [newGroup, setNewGroup] = useState('');

  const handleAdd = () => {
    if (!newGroup.trim()) return;
    addGroup(newGroup);
    setNewGroup('');
    setShowInput(false);
  };

  return (
    <Box
      sx={{
        borderRight: '1px solid #ddd',
        padding: 2,
        bgcolor: '#fefefe',
        height: '100%',
        minHeight: '40vh',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        그룹 목록
      </Typography>

      <List dense>
        {groups.map((group, i) => (
          <ListItemButton
            key={i}
            selected={group === selectedGroup}
            onClick={() => setSelectedGroup(group)}
            sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: '#e0f7fa',
                  fontWeight: 'bold',
                },
            }}
          >
            <ListItemText primary={group} />
          </ListItemButton>
        ))}
      </List>

      {showInput ? (
        <Box mt={2} display="flex" flexDirection="column" gap={1}>
          <TextField
            size="small"
            label="새 그룹명"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <Box display="flex" gap={1}>
            <Button variant="contained" size="small" onClick={handleAdd}>
              추가
            </Button>
            <Button variant="outlined" size="small" onClick={() => setShowInput(false)}>
              취소
            </Button>
          </Box>
        </Box>
      ) : (
        <Button variant="outlined" size="small" onClick={() => setShowInput(true)} sx={{ mt: 2 }}>
          + 그룹 추가
        </Button>
      )}
    </Box>
  );
};

export default GroupPanel;
