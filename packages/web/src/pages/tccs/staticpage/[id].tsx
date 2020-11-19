import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import api from '../../../services/api'

interface TccProps {
  id: string
  suggestion: string
  description: string
}

interface PageProps {
  tcc: TccProps
}

export default function IncrementalStaticProps({ tcc }: PageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <p>{tcc.id}</p>
      <p>{tcc.suggestion}</p>
      <p>{tcc.description}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('tccs')
  const tccs = response.data

  const paths = tccs.map(tcc => {
    return {
      params: { id: tcc.id }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async context => {
  const { id } = context.params

  const response = await api.get(`tccs/${id}`)
  const tcc = response.data

  return {
    props: { tcc },
    revalidate: 30
  }
}
