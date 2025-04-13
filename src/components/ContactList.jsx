import React from 'react'
import { List, ListItem, ListItemText, IconButton, TextField,Typography, Box,
    Paper, } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
    const {
        filteredContacts,
        deleteContact,
        setSearchQuery,
        searchQuery,
        selectedGroup,
      } = usePhoneBookStore();

    const contacts = filteredContacts();

  return (
    <Box sx={{ width: '100%' }}>
      {/* 제목 */}
      <Typography variant="h6" gutterBottom fontWeight="bold">
        {selectedGroup} 연락처 목록
      </Typography>

      {/* 검색창 */}
      <TextField
        fullWidth
        size="small"
        placeholder="이름으로 검색"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* 연락처 목록 */}
      <List sx={{ width: '100%' }}>
        {contacts.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            연락처가 없습니다.
          </Typography>
        ) : (
          contacts.map((item) => (
            <Paper
              key={item.id}
              sx={{
                mb: 2,
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                '&:hover': {
                  boxShadow: 3,
                  borderColor: 'primary.main',
                },
              }}
            >
              <ListItem
                disableGutters
                secondaryAction={
                  <IconButton edge="end" onClick={() => deleteContact(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={item.name}
                  secondary={`${item.phoneNumber} (${item.group})`}
                />
              </ListItem>
            </Paper>
          ))
        )}
      </List>
    </Box>
  )
}

export default ContactList