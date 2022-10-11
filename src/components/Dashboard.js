import withIsMobile from 'hoc/withIsMobile'
import { useStoreState } from 'pullstate'
import useCirculatingSupplyQuery from 'queries/useCirculatingSupplyQuery'
import usePriceQuery from 'queries/usePriceQuery'
import useTotalSupplyQuery from 'queries/useTotalSupplyQuery'
import React, { useEffect } from 'react'
import StatStore from 'stores/StatStore'
import { assetRootPath } from 'utils/image'
import { formatCurrency } from 'utils/math'

const Dashboard = ({ogn, isMobile}) => {
  const symbol = ogn ? 'OGN' : 'OGV'
  const coin = symbol.toLowerCase()
  const link = ogn ? 'origin-protocol' : 'origin-dollar-governance'
  const buy = ogn ? 'app.uniswap.org/#/swap?outputCurrency=0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26&chain=mainnet' : 'ousd.com'
  const description = ogn ? 'Origin Token (OGN) stakers earn their share of Story’s platform fees. ' : 'Origin Governance Token (OGV) stakers earn fees from OUSD’s growth. '

  const price = useStoreState(StatStore, (s) => {
    return s.price || 0
  })

  const circulatingSupply = useStoreState(StatStore, (s) => {
    return s.circulatingSupply || 0
  })

  const totalSupply = useStoreState(StatStore, (s) => {
    return s.totalSupply || 0
  })

  const priceQuery = usePriceQuery({
    onSuccess: (price) => {
      StatStore.update((s) => {
        s.price.ogn = price['origin-protocol'].usd,
        s.price.ogv = price['origin-dollar-governance'].usd
      })
    },
  })

  const circulatingSupplyQuery = useCirculatingSupplyQuery({
    onSuccess: (circulatingSupply) => {
      StatStore.update((s) => {
        s.circulatingSupply.ogn = circulatingSupply[0],
        s.circulatingSupply.ogv = circulatingSupply[1]
      })
    },
  })

  const totalSupplyQuery = useTotalSupplyQuery({
    onSuccess: (totalSupply) => {
      StatStore.update((s) => {
        s.totalSupply.ogn = totalSupply[0],
        s.totalSupply.ogv = totalSupply[1]
      })
    },
  })

  useEffect(() => {
    priceQuery.refetch()
    circulatingSupplyQuery.refetch()
    totalSupplyQuery.refetch()
  }, [])

  return (
    <>
      <div className='token-dashboard gradient2 flex flex-col md:rounded-2xl py-12 pl-6 pr-6 md:py-12 md:px-20'>
        <div className='flex flex-row'>
          <div className='text-container'>
            <div className='flex flex-row items-center'>
              <img
                src={assetRootPath(`/images/logos/${coin}-logo.svg`)}
                className={`logo`}
                alt="Logo"
              />
              <span className='text mt-1'>{symbol} token</span>
            </div>
            <div className='lighter mt-2 mb-4'>
              {`${description} View on `}
              <a
                href={`https://coinmarketcap.com/currencies/${link}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bold'
              >
                  CoinMarketCap
              </a>
              {' or '}
              <a
                href={`https://www.coingecko.com/en/coins/${link}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bold'
              >
                  CoinGecko
              </a>
            </div>
          </div>
          <a
            href={`https://${buy}`}
            target='_blank'
            rel='noopener noreferrer'
            className={`button white b1`}
          >
            Buy {symbol}
          </a>
        </div>
        <div className='value-container'>
          <div className='value'>
            <div>{`${symbol} PRICE`}</div>
            <div className='number'>{`$${formatCurrency(price[coin], 4)}`}</div>
          </div>
          <div className='value'>
            <div>MARKET CAP</div>
            <div className='number'>{`$${formatCurrency(circulatingSupply[coin] * price[coin], 0)}`}</div>
          </div>
          <div className='value'>
            <div>CIRCULATING SUPPLY</div>
            <div className='number'>{formatCurrency(circulatingSupply[coin], 0)}</div>
          </div>
          <div className='value'>
            <div>TOTAL SUPPLY</div>
            <div className='number'>{formatCurrency(totalSupply[coin], 0)}</div>
          </div>
        </div>
        <a
          href={`https://${buy}`}
          target='_blank'
          rel='noopener noreferrer'
          className={`button white b2`}
        >
          Buy {symbol}
        </a>
      </div>
      <style jsx>{`
        .token-dashboard {
          color: white;
          align-content: flex-start;
        }

        .button {
          align-self: flex-start;
          margin-left: auto;
        }

        .logo {
          width: 7%;
          margin-right: 2%;
        }

        .text {
          display: inline;
          font-family: 'Poppins';
          font-size: 2rem;
        }

        .value-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 1vw;
        }

        .number {
          font-family: 'Poppins';
          font-size: 2.25rem;
          font-weight: 700;
        }

        .b2 {
          display: none;
        }

        @media (max-width: 1199px) {
          .number {
            font-family: 'Poppins';
            font-size: 1.5rem;
            font-weight: 700;
          }
        }

        @media (max-width: 767px) {
          .logo {
            width: 10%;
            margin-right: 6%;
          }

          .text {
            font-size: 1.4rem;
            font-weight: 500;
          }

          .value-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2vw;
          }

          .number {
            font-family: 'Poppins';
            font-size: 1.25rem;
            font-weight: 700;
          }

          .button {
            align-self: auto;
            margin: 25px auto 0 auto;
            width: 100%;
            text-align: center;
          }

          .b1 {
            display: none;
          }

          .b2 {
            display: inline;
          }
        }
      `}</style>
    </>
  )
}

export default withIsMobile(Dashboard)