import Box from '@mui/material/Box'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable'
export default function ListCards({ cards, columnId }) {
  const { attributes, listeners, setNodeRef } = useSortable({ id: `placeholder${columnId}` })

  return (
    <SortableContext items={cards.map((card) => card._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          mx: '5px',
          px: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          height: 'fit-content',
          maxHeight: (t) => `calc(100vh - ${t.appBarHeight} - ${t.boardBarHeight} - ${t.spacing(5)} - ${t.columnHeaderHeight} - ${t.columnFooterHeight})`,
          overflow: 'hidden auto'
        }}
      >
        {
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
            />
          ))
        }

        {
          cards.length === 0 && (
            <div ref={setNodeRef} {...attributes} {...listeners} />
          )
        }


      </Box>
    </SortableContext>

  )
}
