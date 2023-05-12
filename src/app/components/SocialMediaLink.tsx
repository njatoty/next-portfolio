import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMediaLink = () => {
  return (
    <div className="flex items-center gap-3 w-fit">
      <Link href="#" className="social-media-item">
        <FaLinkedin className="social-media-icon" />
      </Link>
      <Link href="#" className="social-media-item">
        <FaFacebook className="social-media-icon" />
      </Link>
      <Link href="#" className="social-media-item">
        <FaGithub className="social-media-icon" />
      </Link>
      <Link href="#" className="social-media-item">
        <FaEnvelope className="social-media-icon" />
      </Link>
    </div>
  )
}

export default SocialMediaLink