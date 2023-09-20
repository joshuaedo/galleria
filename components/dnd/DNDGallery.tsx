"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/Button"

import Card from "../Card"
import SortableCard from "./SortableCard"

interface DNDGalleryProps {
  photos: PhotoItem[]
}

interface PhotoItem {
  alt: string
  src: {
    large: string
  }
  id: number
}

const DNDGallery: FC<DNDGalleryProps> = ({ photos }) => {
  const defaultItems = photos
  const [items, setItems] = useState<PhotoItem[]>(defaultItems)
  const [activeItem, setActiveItem] = useState<PhotoItem | undefined>(undefined)

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    setActiveItem(items.find((item) => item.id === active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const activeItem = items.find((item) => item.id === active.id)
    const overItem = items.find((item) => item.id === over.id)

    if (!activeItem || !overItem) {
      return
    }

    const activeIndex = items.findIndex((item) => item.id === active.id)
    const overIndex = items.findIndex((item) => item.id === over.id)

    if (activeIndex !== overIndex) {
      setItems((prev) => arrayMove<PhotoItem>(prev, activeIndex, overIndex))
    }
    setActiveItem(undefined)
  }

  const handleDragCancel = () => {
    setActiveItem(undefined)
  }

  const handleButtonClick = () => {
    const itemIds = items.map((item) => item.id)
    toast({
      description: `Items saved: ...${itemIds}`,
    })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            //@ts-expect-error
            <SortableCard
              key={item.id}
              src={item.src.large}
              alt={item.alt}
              id={item.id}
            />
          ))}
        </main>
        <Button variant="outline" onClick={handleButtonClick}>
          Save this order
        </Button>
      </SortableContext>
    </DndContext>
  )
}

export default DNDGallery
