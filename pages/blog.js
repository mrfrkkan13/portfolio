import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import blogData from '@/data/blogData';
import formatDate from '@/lib/utils/formatDate';
import Image from '@/components/Image';

export default function Blog() {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Technical articles about software development, DevOps, and cloud technologies
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-6">
            {blogData.map((post, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 md:flex-row"
              >
                <div className="relative h-48 w-full flex-shrink-0 md:h-[200px] md:w-[300px]">
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    layout="fill"
                    objectFit="contain"
                    className="absolute inset-0 bg-white p-2 dark:bg-gray-800"
                  />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex h-full flex-col">
                    <div className="flex-grow">
                      <div className="mb-3 flex items-center space-x-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(post.date)}
                        </p>
                        <div className="flex flex-wrap">
                          {post.tags.map((tag) => (
                            <span key={tag} className="mr-3 text-sm font-medium text-primary-500">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={post.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                      >
                        {post.title}
                      </a>
                      <p className="line-clamp-2 prose mb-4 max-w-none text-gray-500 dark:text-gray-400">
                        {post.summary}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={post.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-base font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Read on Medium
                        <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
