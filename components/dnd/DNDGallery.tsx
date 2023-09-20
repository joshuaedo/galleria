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
import { Command, CommandInput } from "@/components/ui/Command"

import { PhotoItem } from "../../types/photos"
import Card from "../Card"
import SortableCard from "./SortableCard"

interface DNDGalleryProps {
  photos: PhotoItem[]
}

const DNDGallery: FC<DNDGalleryProps> = ({ photos }) => {
  const defaultItems = photos
  const [items, setItems] = useState<PhotoItem[]>(defaultItems)
  const [activeItem, setActiveItem] = useState<PhotoItem | undefined>(undefined)
  const [filteredItems, setFilteredItems] = useState<PhotoItem[]>(defaultItems)

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

  const [input, setInput] = useState<string>("")

  useEffect(() => {
    // Filter items based on the input color
    const filtered = items.filter((item) =>
      item.color.toLowerCase().includes(input.toLowerCase())
    )
    setFilteredItems(filtered)
  }, [items, input])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <Command>
        <CommandInput
          onValueChange={(text) => {
            setInput(text)
          }}
          value={input}
          className="focus border-none bg-transparent outline-none ring-0 focus:border-none focus:outline-none"
          placeholder="try searching for purple"
        />
      </Command>
      <SortableContext items={filteredItems} strategy={rectSortingStrategy}>
        <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <SortableCard
              key={item.id}
              src={item.src.large}
              alt={item.alt}
              color={item.color}
              // @ts-expect-error
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
