/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ryanhellfacts.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/private']
      },
    ],
  },
  
  exclude: ['/admin/*', '/api/*', '/private/*'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  
  transform: async (config, path) => {
    let priority = config.priority
    let changefreq = config.changefreq

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/blog/')) {
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}