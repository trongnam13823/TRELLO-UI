import Box from '@mui/material/Box'

import AppBar from '~/components/AppBar/AppBar'
import Boardbar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/api/mock-data'

export default function Board() {
  return (
    <Box sx={{ height: '100vh' }}>
      <AppBar />
      <Boardbar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Box>
  )
}
