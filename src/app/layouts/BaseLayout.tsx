import { Layout } from '../../shared/UI/layout/Layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
   return <Layout headerSlot={<div>Header</div>} bottomSlot={<div>Footer</div>} />
}
