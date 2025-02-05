'use client'

import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import Image from "next/image"

function transformConfigToURL(config: { [key: string]: string | number }): string {
  return Object.entries(config).map(([key, value]) => {
    const firstLetter = key.charAt(0)
    return `${firstLetter}_${value}`
  }).join(",")
}

interface Photo {
  src: string
  version?: string
  caption?: string
  orientation?: string
  alt?: string
}

const photoSelections: Photo[] = [
  { src: 'RexMaternity98.jpg', caption: 'Joined hands on beach', version: 'v1738555916' },
  { src: 'RexMaternity82.jpg', caption: 'Joseph feels the baby by the rocks' },
  { src: 'RexMaternity37.jpg', caption: 'Holding mom and baby by the trees' },
  { src: 'RexMaternity101.jpg', caption: 'Looking at each other like: Are we ready for this?' },
  { src: 'RexMaternity91.jpg', caption: "Smiling because we've got this!", orientation: 'portrait' },
  { src: 'RexMaternity26.jpg', caption: 'Full picture by the trees' },
  { src: 'RexMaternity30.jpg', caption: 'Amanda looking heavenly gorgeous by the tree' },
  { src: 'RexMaternity133.jpg', caption: 'This could be an album cover for a new single Amanda drops', orientation: 'portrait' },
  { src: 'RexMaternity134.jpg', caption: 'Now turn that pretty face towards the camera', orientation: 'portrait' },
  { src: 'RexMaternity78.jpg', caption: 'Holding the baby for extra support', orientation: 'portrait' },
  { src: 'RexMaternity111.jpg', caption: "Mom's eyes on the lake while dad's eyes is on her", orientation: 'portrait' },
  { src: 'RexMaternity46.jpg', caption: 'Serenity for a brief moment before Amanda runs to warm up from the cold', orientation: 'portrait' },
  { src: 'RexMaternity144.jpg', caption: 'Glitch gets in on the baby photos' },
  { src: 'RexMaternity142.jpg', caption: 'Glitch curious about the camera in front of him' },
  { src: 'RexMaternity141.jpg', caption: 'Glitch saying I do not trust this thing. Put me down!' },
  { src: 'RexMaternity143.jpg', caption: 'Glitch accepting to do just one more photo with us' },
  { src: 'RexMaternity148.jpg', caption: "Glitch yelling that's enough photos for today", orientation: 'portrait' },
  { src: 'RexMaternity151.jpg', caption: "Glitch is gone, now it's just mom and dad" },
  { src: 'RexMaternity27.jpg', caption: "Both so happy about bringing this baby to life" },
  { src: 'RexMaternity21.jpg', caption: "Looking happy that we really are about to add an amazing human to earth" },
  { src: 'RexMaternity24.jpg', caption: "We have always made each other laugh and now we have someone to laugh at us" },
  { src: 'RexMaternity19.jpg', caption: "The world is beautiful and great when we have each other" },
  { src: 'RexMaternity13.jpg', caption: "Reassuring that we will love each other and love this baby always", orientation: 'portrait' },
  { src: 'RexMaternity57.jpg', caption: "Leaning for the kiss", orientation: 'portrait' },
  { src: 'RexMaternity69.jpg', caption: "How far can we get from the camera?" },
  { src: 'RexMaternity68.jpg', caption: "Farther? oh you mean Father? Like Joseph is about to become?" },
  { src: 'RexMaternity125.jpg', caption: "Much farther!" },
  { src: 'RexMaternity124.jpg', caption: "A little more." },
  { src: 'RexMaternity123.jpg', caption: "Now we're far enough to see y'all friends and family and say we love you for the support" },
  { src: 'RexMaternity63.jpg', caption: "Raising a child with good people around feels like a warm embrace before it gets uncomfortable" },
  { src: 'RexMaternity70.jpg', caption: "Imagine 'So this is Love' by Ilene Woods playing in the background" },
  { src: 'RexMaternity71.jpg', caption: "This is the miracle that we've been dreaming of" },
  { src: 'RexMaternity53.jpg', caption: "The hero of this pregnancy journey carrying this baby for us" },
  { src: 'RexMaternity54.jpg', caption: "All hands on deck" },
  { src: 'RexMaternity76.jpg', caption: "Amanda's beauty captured from behind the rock", orientation: 'portrait' },
  { src: 'RexMaternity56.jpg', caption: "Kissing gently before it leads to another baby too quickly", orientation: 'portrait' },
]

function imageURL(image: Photo, { thumbnail }: { thumbnail: boolean } = { thumbnail: false }): string {
  const folder = "maternity"
  const cloudinaryURL = "https://res.cloudinary.com/strich/image/upload"
  const thumbnailTransformations = { crop: "fill", width: 400, height: 266 }
  const cloudinaryTransformations = thumbnail ? transformConfigToURL(thumbnailTransformations) : ""
  const transformationPath = cloudinaryTransformations ? `${cloudinaryTransformations}/` : ""
  const folderPath = folder ? `${folder}/` : ""
  const versionPath = image.version ? `${image.version}/` : ""
  return `${cloudinaryURL}/${transformationPath}${versionPath}${folderPath}${image.src}`
}

export default function PhotoGallery() {
  const isPortrait = (photo: Photo) => photo.orientation === "portrait"
  return (
    <div className="grid mt-4 md:mt-12 mb-16 gap-4 w-full h-auto p-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" id="js-grid">
      <Gallery withCaption withDownloadButton>
        {photoSelections.map((photo) => (
          <Item
            key={photo.src}
            original={imageURL(photo)}
            thumbnail={imageURL(photo, { thumbnail: true })}
            width={isPortrait(photo) ? 920 : 1600}
            height={isPortrait(photo) ? 1380 : 1065}
            caption={photo.caption}
          >
            {({ ref, open }) => (
              <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
                <Image src={imageURL(photo, { thumbnail: true })} alt={photo.alt || photo.caption || ""} width="200" height="133" onClick={open} ref={ref} className="js-img object-cover object-center cursor-pointer transform-gpu backface-hidden w-full h-full will-change-transform rounded" />
              </figure>
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  )
}