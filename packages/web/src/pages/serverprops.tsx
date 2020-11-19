import React from 'react'
import { GetServerSideProps } from 'next'
import api from '../services/api'

interface TccProps {
  id: string
  suggestion: string
  description: string
}

interface PageProps {
  tccs: TccProps[]
}

export default function ServerProps({ tccs }: PageProps) {
  return (
    <ul>
      {tccs.map(tcc => (
        <li key={tcc.id}>{tcc.suggestion} - {tcc.description}</li>
      ))}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const response = await api.get('tccs')
  const tccs = response.data

  return {
    props: { tccs }
  }
}
