import './App.css';
import { Grid2, Button, Dialog, DialogTitle, DialogContent, Box, Typography } from '@mui/material'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import GroupPanel from './components/GroupPanel';
import { useState } from 'react';

//1. 연락처에는 분류가 있다 ALL, 각그룹명(생성/수정/삭제)
//2. 연락처는 이름/번호로 이루어져 있다
//3. 연락처는 이름으로 검색할 수 있다.

function App() {
  const [open, setOpen] = useState(false);

  return (
    
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 4,
        paddingX: 2,
      }}
    >
      {/* 앱 카드 박스 */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '960px',
          bgcolor: '#fff',
          boxShadow: 3,
          borderRadius: 2,
          padding: 2,
          minHeight: '90vh',
        }}
      >
        {/* 제목 */}
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Zustand PhoneBook
        </Typography>

        {/* 좌우 2단 레이아웃 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            width: '100%',
          }}
        >
          {/* 왼쪽: 그룹 패널 */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 30%' },
              minWidth: 200,
            }}
          >
            <GroupPanel />
          </Box>

          {/* 오른쪽: 연락처 리스트 */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 70%' },
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="contained" size="small" sx={{ textTransform: 'none', boxShadow: 1 }} onClick={() => setOpen(true)}>
                + 연락처 추가
              </Button>
            </Box>

            <ContactList />

            {/* 모달 */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
              <DialogTitle>연락처 추가</DialogTitle>
              <DialogContent>
                <ContactForm onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </Box>
    
  );
}

export default App;
