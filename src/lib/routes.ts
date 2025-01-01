const Routes = {
    home: '/',
    about: '/about',
    blog: '/blog',
    blogPost: (blog:string)=>`/blog/${blog}`,
    projects: '/projects',
    contact: '/contact',
    resume: '/docs/Resume.pdf'
}

export default Routes