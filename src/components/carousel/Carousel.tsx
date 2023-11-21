import React from "react"

export type CarouselProps = {
  imgUrls: string[]
}

export type CarouselComponent = React.FC<CarouselProps>

export const Carousel: CarouselComponent = ({ imgUrls }) => {
  const [currentImgIdx, setCurrentImgIdx] = React.useState(0)
  return <div className="relative w-full aspect-square">
    {
      imgUrls.length ? (
        <>
          <img className="h-full w-full object-contain object-center bg-white" src={imgUrls[currentImgIdx]} />
          <div className="absolute inset-y-0 left-0 w-1/2" onClick={() => setCurrentImgIdx(i => Math.max(i - 1, 0))} />
          <div className="absolute inset-y-0 right-0 w-1/2" onClick={() => setCurrentImgIdx(i => Math.min(i + 1, imgUrls.length - 1))} />
          <span className="absolute rounded-full right-3 bottom-3 py-1 px-2 bg-black/30 text-white">{currentImgIdx + 1}/{imgUrls.length}</span>
        </>
      ) : null
    }
  </div >
}