import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { HTMLAttributes } from "react"
import Card from '../Card';

type Props = {
  alt: string
  src: string
  id: number
} & HTMLAttributes<HTMLDivElement>

const SortableCard = ({ alt, src, id, ...props }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
  })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <Card
      alt={alt}
      src={src}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default SortableCard
