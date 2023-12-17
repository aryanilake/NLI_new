import React from 'react'
import Headers from '../../components/Headers'
import { Box } from '@mui/material'

export default function Events() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">

      <Headers title="Events" subtitle="Create an event for history" />
      </Box>
    </Box>
  )
}
