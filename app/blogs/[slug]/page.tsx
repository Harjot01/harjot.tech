import Container from '@/components/Container'
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { client, urlFor } from '@/app/sanity';
import { RichTextComponents } from '@/components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  }
}

const fetchSingleBlog = async (slug: string) => {
  const query = `*[_type == "blogs" && slug.current == '${slug}'][0]`;
  const blogData = await client.fetch(query);
  return blogData
}

export const revalidate = 30;

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = params

  const blog = await fetchSingleBlog(slug);

  return {
    title: blog.title,
    description: blog.metadesc
  }

}

const Blog = async ({ params }: any) => {
  const { slug } = params

  const blog = await fetchSingleBlog(slug);
  const date = new Date(blog.createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Container className="mt-12">
        <div className="mx-auto max-w-[768px] ">
          <div className="flex justify-center">
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {blog?.title}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link href="">
                  <Image
                    src="/assets/images/My Image.jpg"
                    alt="no image"
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />

                </Link>
              </div>
              <div>
                <p className="text-black dark:text-textLight">
                  Harjot Singh
                </p>
                <div className="flex text-black dark:text-textLight items-center gap-2 text-sm">

                  {formattedDate}
                  <span className=''>· {blog.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>


      <div className="relative z-0 mx-auto aspect-video max-w-[1024px] overflow-hidden lg:rounded-lg">

        <Image
          src={urlFor(blog.image).url()}
          alt=""
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover"
        />

      </div>


      <Container>
        <article className="mx-auto max-w-[768px] ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {<PortableText value={blog?.content} components={RichTextComponents} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
          </div>
        </article>
      </Container>
    </>
  )
}

export default Blog
