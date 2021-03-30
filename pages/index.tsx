import { Layout } from '@components/common'
import { Grid, Marquee, Hero, Container } from '@components/ui'
import { RightArrow } from '@components/icons'
import { ProductCard } from '@components/product'
import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import Image from 'next/image'
import { filter } from 'lodash'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        <div className="bg-black">
          <Container>
            <div className="py-10">
              <h2 className="text-4xl leading-10 font-semibold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                Introducing the
              </h2>
              <h1 className="text-7xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-9xl">
                Corginator
              </h1>
              <div className="flex flex-col justify-between">
                <p className="mt-5 text-xl leading-7 text-accent-2 text-white">
                  A unique design with the same core functionality of a Arduino
                  that you've grown to love. You can use it to do anything from
                  power an LED to flying to the moon!
                </p>
                <Link href="/product/corginator-9000-development-board">
                  <a className="text-white pt-3 font-bold hover:underline flex flex-row cursor-pointer w-max-content">
                    Get one now
                    <RightArrow width="20" heigh="20" className="ml-1" />
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-black">
          <div
            style={{ height: '100%', width: '100%', position: 'relative' }}
            className="nextimagefit"
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0021/6095/1385/products/ScreenShot2021-01-02at7.58.44PM_1080x.png?v=1609637099"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
        {products.slice(0, 0).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 540 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {filter(
          products,
          (product) =>
            !product.name.includes('Corgi') &&
            !product.name.includes('Soldering')
        ).map((product, i) =>
          product.name.includes('Corgi') === false ? (
            product.name.includes('Soldering') === false ? (
              <ProductCard
                key={product.id}
                product={product}
                variant="slim"
                imgProps={{
                  width: 320,
                  height: 320,
                }}
              />
            ) : (
              ''
            )
          ) : (
            ''
          )
        )}
      </Marquee>
      <HomeAllProductsGrid
        showcategories={false}
        products={products}
        categories={categories}
        brands={brands}
      />
    </>
  )
}

Home.Layout = Layout
