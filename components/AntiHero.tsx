import { FC } from "react"

interface AntiHeroProps {}

export const AntiHero: FC<AntiHeroProps> = ({}) => {
  return (
    <section className="grid items-center gap-6">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          Discover More with Galleria.
        </h2>
        <p className="max-w-[700px] text-lg font-normal text-muted-foreground">
          Try our Gsearch to find the perfect images for your
          needs. You can also easily organize the gallery by dragging and
          dropping images.
        </p>
      </div>
    </section>
  )
}
