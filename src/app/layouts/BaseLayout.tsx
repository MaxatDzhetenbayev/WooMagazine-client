import { Layout } from '../../shared/UI/layout/Layout'
import { Header } from '../../widgets/header/Header'

export const BaseLayout = () => {
   return <Layout headerSlot={<Header />} bottomSlot={<div>Footer</div>} />
}
