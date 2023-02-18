import React from 'react'
import { FullScreen } from '../components/FullScreen'
import { Spinner } from '../components/Spinner'

export const useLoader = loadingState => {
  return {
    Loader: () => loadingState ? <FullScreen><Spinner /></FullScreen> : null,
  }
}
