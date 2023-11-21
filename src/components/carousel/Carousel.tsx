import React from "react"

export type CarouselProps = {
  imgUrls: string[]
}

export type CarouselComponent = React.FC<CarouselProps>

export const Carousel: CarouselComponent = ({ imgUrls }) => {
  const [currentImgIdx] = React.useState(0)
  return <div className="relative w-full overflow-hidden aspect-square">
    {
      imgUrls.length ? (
        <>
          {imgUrls.map((img) => {
            return <img className="h-full w-full object-cover object-center" key={img} src={img} />
          })}
          <span className="absolute right-3 bottom-3 py-1 px-2 bg-black/30 text-white">{currentImgIdx + 1}/{imgUrls.length}</span>
        </>
      ) : null
    }
  </div >
}