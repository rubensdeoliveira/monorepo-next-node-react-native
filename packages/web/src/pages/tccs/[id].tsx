import React from 'react'
import { NextPage } from 'next'
import { useFetch } from '../../hooks/useFetch'
import { useRouter } from 'next/router'

const Tcc: NextPage = () => {
  const { query } = useRouter()

  const { data } = useFetch(`tccs/${query.id}`)

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <p>{data.id}</p>
      <p>{data.suggestion}</p>
      <p>{data.description}</p>
    </>
  )
}

export default Tcc
