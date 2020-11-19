import React from 'react'
import { GetStaticProps } from 'next'
import api from '../services/api'

interface TccProps {
  id: string
  suggestion: string
  description: string
}

interface PageProps {
  tccs: TccProps[]
}

export default function StaticProps({ tccs }: PageProps) {
  return (
    <ul>
      {tccs.map(tcc => (
        <li key={tcc.id}>{tcc.suggestion} - {tcc.description}</li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const response = await api.get('tccs')
  const tccs = response.data

  return {
    props: { tccs },
    revalidate: 30
  }
}
