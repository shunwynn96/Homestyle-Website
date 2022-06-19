import React from 'react'
import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_KEY
})