import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

export default function ListColumns({ columns }) {

  return (
    <SortableContext items={columns.map((column) => column._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        display: 'flex',
        gap: 2
      }}>

        {
          columns.map((column) => (
            <Column
              key={column._id}
              column={column}
            />
          ))
        }

        <Button
          sx={{
            height: 'fit-content',
            textTransform: 'none',
            color: 'white',
            minWidth: 'fit-content'
          }}
          variant="text"
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </SortableContext>
  )
}
