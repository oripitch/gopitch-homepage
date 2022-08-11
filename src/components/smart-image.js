import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Render inline SVG with fallback non-svg images
export default function Image({ svg, file, alt, image }) {
  if (file.contentType === "image/svg+xml") {
    if (svg && svg.content) {
      // Inlined SVGs
      return <div dangerouslySetInnerHTML={{ __html: svg.content }} />
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />
  }

  // Non SVG images
  return <GatsbyImage image={getImage(image)} alt={alt} />
}
