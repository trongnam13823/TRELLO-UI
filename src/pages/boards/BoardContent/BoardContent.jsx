import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import mapOrder from '~/utils/mapOrder'
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects, closestCorners } from '@dnd-kit/core'
import { arraySwap } from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import _ from 'lodash'
export default function BoardContent({ board }) {
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, distance: 500 } })
  const sensors = useSensors(mouseSensor, touchSensor)

  const [columns, setColumns] = useState([])
  const [draggingItem, setDraggingItem] = useState(null)

  useEffect(() => {
    setColumns(mapOrder(board.columns, board.columnOrderIds, '_id'))
  }, [board])

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
  }

  function findColumnByCardId(cardId) {
    return columns.find(column => column.cards.some(card => card._id === cardId))
  }

  function moveColumn(active, over) {
    const isActiveColumn = Boolean(active?.cards)
    const isOverColumn = Boolean(over?.cards)

    if (isActiveColumn && isOverColumn && active._id !== over._id) {
      const activeIndex = columns.findIndex(column => column._id === active._id)
      const overIndex = columns.findIndex(column => column._id === over._id)

      const newColumns = arraySwap(columns, activeIndex, overIndex)

      setColumns(newColumns)
    }
  }

  function moveCard(active, over) {
    const isActiveCard = Boolean(active?.columnId)
    const isOverCard = Boolean(over?.columnId)

    if (isActiveCard && isOverCard && active._id !== over._id) {
      const activeColumn = findColumnByCardId(active._id)
      const overColumn = findColumnByCardId(over._id)

      const overIndex = overColumn.cardOrderIds.findIndex(cardId => cardId === over._id)

      const newColumns = _.cloneDeep(columns)

      newColumns.map(column => {
        if (column._id === activeColumn._id) {
          column.cardOrderIds = column.cardOrderIds.filter(cardId => cardId !== active._id)
          column.cards = column.cards.filter(card => card._id !== active._id)
        }

        if (column._id === overColumn._id) {
          column.cardOrderIds.splice(overIndex, 0, active._id)
          column.cards.push(active)
          active.columnId = over.columnId
        }

        return column
      })

      setColumns(newColumns)
    }
  }

  function moveCardToColumnEmpty(active, over) {
    const isActiveCard = Boolean(active?.columnId)
    const isOverPlaceholder = Boolean(over?.id?.startsWith('placeholder'))

    if (isActiveCard && isOverPlaceholder) {
      const overColumnId = over.id.replace('placeholder', '')
      const newColumns = _.cloneDeep(columns)

      newColumns.map(column => {
        if (column._id === overColumnId) {
          column.cardOrderIds.push(active._id)
          column.cards.push(active)
        }

        if (column._id === findColumnByCardId(active._id)._id) {
          column.cardOrderIds = column.cardOrderIds.filter(cardId => cardId !== active._id)
          column.cards = column.cards.filter(card => card._id !== active._id)
        }

        return column
      })

      setColumns(newColumns)
    }
  }

  function handleDragOver(event) {
    const activeCurrent = event?.active?.data?.current
    const overCurrent = event?.over?.data?.current

    moveColumn(activeCurrent, overCurrent)
    moveCard(activeCurrent, overCurrent)
    moveCardToColumnEmpty(activeCurrent, event.over)
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragOver={handleDragOver}
      onDragStart={(e) => setDraggingItem(e.active.data.current)}
      onDragEnd={() => setDraggingItem(null)}
    >
      <Box sx={{
        height: (t) => `calc(100vh - ${t.appBarHeight} - ${t.boardBarHeight})`,
        bgcolor: (t) => t.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        px: 2,
        py: 1.5
      }}>
        <ListColumns columns={columns} />
      </Box >

      <DragOverlay dropAnimation={dropAnimation}>
        {draggingItem && (draggingItem.columnId ? <Card card={draggingItem} /> : <Column column={draggingItem} />)}
      </DragOverlay>

    </DndContext >
  )
}
