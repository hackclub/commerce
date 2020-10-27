import type { GetStaticPropsContext } from 'next'
import getAllPages from '@lib/bigcommerce/api/operations/get-all-pages'
import { Layout } from '@components/core'
import { Container, Text } from '@components/ui'
import { Bag } from '@components/icons'

export async function getStaticProps({ preview }: GetStaticPropsContext) {
  const { pages } = await getAllPages({ preview })
  return {
    props: { pages },
  }
}

export default function Orders() {
  return (
    <Container>
      <Text variant="pageHeading">My Orders</Text>
      <div className="flex-1 p-24 flex flex-col justify-center items-center ">
        <span className="border border-dashed border-secondary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-primary text-primary">
          <Bag className="absolute" />
        </span>
        <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
          No orders found
        </h2>
        <p className="text-accents-6 px-10 text-center pt-2">
          Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
        </p>
      </div>
    </Container>
  )
}

Orders.Layout = Layout