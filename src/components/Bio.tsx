import React from 'react'

import profilePic from './profile-pic.svg'
import '../scss/bio.scss'

export const Bio = ({ author }) => (
  <p className="bio">
    <img className="bio__img" src={profilePic} alt={`author ${author.name}`} />
    Written by <strong>{author.name}</strong> who lives in Germany and likes to
    code a lot.&nbsp;
    <a
      href="https://github.com/Algram"
      target="_blank"
      rel="noopener noreferrer"
    >
      You should check out his GitHub
    </a>
    &nbsp; or write him an &nbsp;
    <a href={`mailto:${author.email}`}>Email</a>.
  </p>
)
