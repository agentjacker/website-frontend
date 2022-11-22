import {
  Button,
  Card, Footer, Header, Typography
} from "@originprotocol/origin-storybook";
import News from "components/News";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { assetRootPath } from "utils/image";
import { fetchAPI } from "../lib/api";
import Seo from "../src/components/strapi/seo";
import formatSeo from "../src/utils/seo";
import transformLinks from "../src/utils/transformLinks";

export default function Blog({
  locale,
  onLocale,
  articles,
  meta,
  categories,
  seo,
  navLinks,
}) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Seo seo={seo} />
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <section className="intro grey pt-10 pb-24">
        <div className="container-fluid max-w-screen-xl mx-auto px-6 mb-6">
          <Typography.H2 className='font-bold'>Latest news</Typography.H2>
        </div>
      </section>
      {!articles?.length ? null : <News articles={articles} meta={meta} categories={categories} />}
      <section className="articles grey">
        <div className="container-fluid max-w-screen-xl mx-auto pt-10 md:pb-32 px-6">
          <Typography.H3 as='h3' className='font-bold md:mt-28'>As seen in</Typography.H3>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-24 py-24">
            <Image
              src={assetRootPath("/images/logos/company-coindesk.svg")}
              className="company"
              alt="Coindesk"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-wsj.svg")}
              className="company"
              alt="Wall Street Journal"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-nasdaq.svg")}
              className="company"
              alt="Nasdaq"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-tnw.svg")}
              className="company"
              alt="TNW"
              width="140px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-fastcompany.svg")}
              className="company"
              alt="Fast Company"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-vice.svg")}
              className="company"
              alt="Vice"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-cointelegraph.svg")}
              className="company"
              alt="Coin Telegraph"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-inc.svg")}
              className="company"
              alt="inc"
              width="200px"
              height="40px"
            />
            <Image
              src={assetRootPath("/images/logos/company-techcrunch.svg")}
              className="company"
              alt="Techcrunch"
              width="200px"
              height="50px"
            />
          </div>
        </div>
      </section>
      <section className="press light">
        <div className="container-fluid max-w-screen-xl mx-auto py-20 md:py-36 px-6">
          <Typography.H3 as='h3' className='font-bold'>Press kit</Typography.H3>
          <div className="container mt-10">
            <Card
              webProperty={"press"}
              title={"Origin Logo"}
              img={<Image src={assetRootPath("/images/logos/origin-press.svg")} alt="Origin Logo" width="420px" height="210px" objectFit='cover' />}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/logo-origin.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/logo-origin.png")}
            />
            <Card
              webProperty={"press"}
              title={"Origin Dollar Logo"}
              img={<Image src={assetRootPath("/images/logos/press-origin-dollar.svg")} alt="Origin Dollar Logo" width="420px" height="210px" objectFit='cover' />}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/logo-origin-dollar.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/logo-origin-dollar.png")}
            />
            <Card
              webProperty={"press"}
              title={"Origin Story"}
              img={<Image src={assetRootPath("/images/logos/press-origin-story.svg")} alt="Origin Story Logo" width="420px" height="210px" objectFit='cover' />}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/logo-origin-story.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/logo-origin-story.png")}
            />
            <Card
              webProperty={"press"}
              title={"OGN Symbol"}
              img={<Image src={assetRootPath("/images/logos/ogn-press.svg")} alt="OGN Symbol" width="420px" height="210px" objectFit='cover' />}
              imgAlt={"OGN Symbol"}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/symbol-ogn.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/symbol-ogn.png")}
            />
            <Card
              webProperty={"press"}
              title={"OUSD Symbol"}
              img={<Image src={assetRootPath("/images/logos/ousd-press.svg")} alt="OUSD Symbol" width="420px" height="210px" objectFit='cover' />}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/symbol-ousd.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/symbol-ousd.png")}
            />
            <Card
              webProperty={"press"}
              title={"OGV Symbol"}
              img={<Image src={assetRootPath("/images/logos/ogv-press.svg")} alt="OGV Symbol" width="420px" height="210px" objectFit='cover' />}
              body={""}
              linkText={"Download SVG"}
              linkHref={assetRootPath("/images/logos/symbol-ogv.svg")}
              linkText2={"Download PNG"}
              linkHref2={assetRootPath("/images/logos/symbol-ogv.png")}
            />
          </div>
        </div>
      </section>
      <section className="inquiries grey">
        <div className="container-fluid max-w-screen-xl mx-auto py-20 md:py-32 px-6">
          <div className="content text-center m-auto space-y-6">
            <Typography.H3 className='font-bold'>Press inquiries</Typography.H3>
            <div className="mt-2 mb-4 pb-6 font-light">
              Origin Story powers NFT ecosystems, providing creators with
              branded storefronts and secondary marketplaces.
            </div>
            <Button
              href={process.env.NEXT_PUBLIC_DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section.inquiries {
          background-image: url(/images/graphics/splines25.png);
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: 40vw;
        }

        .press .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2.5vw;
        }

        .inquiries .content {
          width: 50%;
        }

        .companies {
          justify-content: space-around;
          margin: 50px 0;
        }

        @media (max-width: 1199px) {
        }

        @media (max-width: 799px) {
          .press .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5vw;
          }

          .inquiries .content {
            width: 100%;
          }

          .company {
            width: 15vw;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/website/blog/en", {
    populate: ["cover", "category"],
  });

  const categories = {};
  articlesRes?.data?.forEach((article) => {
    if (article && article.category) {
      categories[article.category.slug] = article.category;
    }
  });

  const seoRes = await fetchAPI("/website/page/en/%2Fblog");
  const navRes = await fetchAPI("/website-nav-links", {
    populate: {
      links: {
        populate: "*",
      },
    }
  });

  const navLinks = transformLinks(navRes.data);

  return {
    props: {
      articles: articlesRes?.data || null,
      meta: articlesRes?.meta || null,
      categories: Object.values(categories),
      seo: formatSeo(seoRes.data),
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  };
}