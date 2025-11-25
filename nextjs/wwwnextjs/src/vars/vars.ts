const vars ={

    const:{
        pagetype:{
            page:'page',
            post:'post'
        },
        slug:{
            home:'home',
        },
        revalidateTime: 10,
        defaultLocale: 'en',
        cookieName: 'site-lang',
    },
    protectedPaths: [
    '/forex',
    '/dashboard',
    '/api' // API też tu pasuje
    ],
    technicalPaths: [
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml'
    ],

}










export default vars;
