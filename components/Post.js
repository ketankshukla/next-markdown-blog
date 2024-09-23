import Link from 'next/link'

export default function Post({post}) {
    return (
        <Link href={`/blog/${post.slug}`} className='btn'>
            <div className='card'>

                <img src={post.frontmatter.cover_image} alt={post.frontmatter.title}/>

                <div className='post-date'>{post.frontmatter.date}</div>

                <h3>{post.frontmatter.title}</h3>
                <p>
                    {
                        // truncate the post excerpt to 70 characters
                        post.frontmatter.excerpt.substring(0, 500)
                    }
                </p>
            </div>
        </Link>
    )
}
