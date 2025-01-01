const Routes = {
    home: '/',
    about: '/about',
    blog: '/blog',
    blogPost: (blog:string)=>`/blog/${blog}`,
    projects: '/projects',
    contact: '/contact',
    resume: '/docs/resume.pdf'
}

export default Routes