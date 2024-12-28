'use client'

import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"

export default function PhotoGallery() {
  return (
    <div className="grid mt-12 mb-16 gap-4 w-full h-auto p-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" id="js-grid">
      <Gallery withCaption>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="First image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Second image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Third image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Fourth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Fifth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Sixth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Seventh image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Eighth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Ninth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Tenth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Eleventh image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
        <Item
          original="/img/placeholder.jpg"
          thumbnail="/img/placeholder.jpg"
          width="1024"
          height="768"
          caption="Twelvth image"
        >
          {({ ref, open }) => (
            <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
              <button onClick={open} ref={ref} className="js-img transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(/img/placeholder.jpg)" }}></button>
            </figure>
          )}
        </Item>
      </Gallery>
    </div>
  )
}