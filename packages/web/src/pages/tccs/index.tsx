import React, { useCallback } from 'react'
import { NextPage } from 'next'
import { useFetch } from '../../hooks/useFetch'
import Link from 'next/link'
import api from '../../services/api'
import { mutate as mutateGlobal } from 'swr'

interface ITcc {
  id: string
  suggestion: string
  description: string
}

const Tccs: NextPage = () => {
  const { data, mutate } = useFetch<ITcc[]>('tccs')

  const handleChangeTccName = useCallback((id: string) => {
    api.put(`tccs/${id}`, { suggestion: 'TCC FULEIRA', description: 'DESCRIÇÃO DE TCC' })

    const updatedTccs = data.map(tcc => {
      if (tcc.id === id) {
        return { ...tcc, suggestion: 'TCC FULEIRA', description: 'DESCRIÇÃO DE TCC' }
      }
      return tcc
    })

    mutate(updatedTccs, false)
    mutateGlobal(`tccs/${id}`, { id, suggestion: 'TCC FULEIRA APÓS MUDANÇA 2', description: 'DESCRIÇÃO DE TCC FULEIRA APÓS MUDANÇA 2' })
  }, [data, mutate])

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data.map(tcc => (
        <li key={tcc.id}>
          <Link href={`/tccs/${tcc.id}`}>{tcc.suggestion}</Link>
          <button type="button" onClick={() => handleChangeTccName(tcc.id)}>
            Alterar para TCC FULEIRA
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tccs
