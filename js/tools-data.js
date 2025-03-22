const toolsData = {
    imageTools: [
        {
            id: 'png-converter',
            title: 'Image to PNG Converter',
            description: 'Convert your images to PNG format while maintaining quality',
            icon: 'fa-image',
            path: 'tools/image/png-converter.html'
        },
        {
            id: 'jpg-converter',
            title: 'Image to JPG Converter',
            description: 'Convert images to JPG format with optimized compression',
            icon: 'fa-file-image',
            path: 'tools/image/jpg-converter.html'
        },
        {
            id: 'image-resizer',
            title: 'Image Resizer',
            description: 'Resize your images to any dimension while preserving quality',
            icon: 'fa-expand',
            path: 'tools/image/image-resizer.html'
        },
        {
            id: 'image-compressor',
            title: 'Image Compressor',
            description: 'Compress images without significant quality loss',
            icon: 'fa-compress',
            path: 'tools/image/image-compressor.html'
        },
        {
            id: 'image-cropper',
            title: 'Image Cropper',
            description: 'Crop your images with precision and ease',
            icon: 'fa-crop',
            path: 'tools/image/image-cropper.html'
        },
        {
            id: 'base64-converter',
            title: 'Image to Base64',
            description: 'Convert images to Base64 format for web use',
            icon: 'fa-code',
            path: 'tools/image/base64-converter.html'
        },
        {
            id: 'webp-converter',
            title: 'WebP to PNG Converter',
            description: 'Convert WebP images to PNG format',
            icon: 'fa-exchange-alt',
            path: 'tools/image/webp-converter.html'
        },
        {
            id: 'gif-maker',
            title: 'GIF Maker',
            description: 'Create animated GIFs from images or video',
            icon: 'fa-film',
            path: 'tools/image/gif-maker.html'
        },
        {
            id: 'qr-generator',
            title: 'QR Code Generator',
            description: 'Generate QR codes for any text or URL',
            icon: 'fa-qrcode',
            path: 'tools/image/qr-generator.html'
        },
        {
            id: 'screenshot-pdf',
            title: 'Screenshot to PDF',
            description: 'Convert screenshots to PDF format',
            icon: 'fa-file-pdf',
            path: 'tools/image/screenshot-pdf.html'
        }
    ],
    seoTools: [
        {
            id: 'meta-generator',
            title: 'Meta Tag Generator',
            description: 'Generate optimized meta tags for better SEO',
            icon: 'fa-tags',
            path: 'tools/seo/meta-generator.html'
        },
        {
            id: 'keyword-density',
            title: 'Keyword Density Checker',
            description: 'Analyze keyword density in your content',
            icon: 'fa-percentage',
            path: 'tools/seo/keyword-density.html'
        },
        {
            id: 'sitemap-generator',
            title: 'Sitemap Generator',
            description: 'Generate XML sitemaps for your website',
            icon: 'fa-sitemap',
            path: 'tools/seo/sitemap-generator.html'
        },
        {
            id: 'robots-generator',
            title: 'Robots.txt Generator',
            description: 'Create robots.txt files for search engines',
            icon: 'fa-robot',
            path: 'tools/seo/robots-generator.html'
        },
        {
            id: 'index-checker',
            title: 'Google Index Checker',
            description: 'Check if your pages are indexed by Google',
            icon: 'fa-search',
            path: 'tools/seo/index-checker.html'
        },
        {
            id: 'domain-authority',
            title: 'Domain Authority Checker',
            description: 'Check domain authority and page authority',
            icon: 'fa-chart-line',
            path: 'tools/seo/domain-authority.html'
        },
        {
            id: 'backlink-checker',
            title: 'Backlink Checker',
            description: 'Analyze backlinks pointing to your website',
            icon: 'fa-link',
            path: 'tools/seo/backlink-checker.html'
        },
        {
            id: 'speed-checker',
            title: 'Page Speed Checker',
            description: 'Test your website loading speed',
            icon: 'fa-tachometer-alt',
            path: 'tools/seo/speed-checker.html'
        },
        {
            id: 'sitemap-validator',
            title: 'XML Sitemap Validator',
            description: 'Validate your XML sitemap',
            icon: 'fa-check-circle',
            path: 'tools/seo/sitemap-validator.html'
        },
        {
            id: 'mobile-friendly',
            title: 'Mobile-Friendly Test',
            description: 'Check if your website is mobile-friendly',
            icon: 'fa-mobile-alt',
            path: 'tools/seo/mobile-friendly.html'
        }
    ],
    textTools: [
        {
            id: 'word-counter',
            title: 'Word Counter',
            description: 'Count words, characters, and paragraphs',
            icon: 'fa-calculator',
            path: 'tools/text/word-counter.html'
        },
        {
            id: 'char-counter',
            title: 'Character Counter',
            description: 'Count characters with and without spaces',
            icon: 'fa-text-width',
            path: 'tools/text/char-counter.html'
        },
        {
            id: 'case-converter',
            title: 'Case Converter',
            description: 'Convert text case (upper, lower, title)',
            icon: 'fa-font',
            path: 'tools/text/case-converter.html'
        },
        {
            id: 'plagiarism-checker',
            title: 'Plagiarism Checker',
            description: 'Check content for plagiarism',
            icon: 'fa-copy',
            path: 'tools/text/plagiarism-checker.html'
        },
        {
            id: 'grammar-checker',
            title: 'Grammar Checker',
            description: 'Check text for grammar and spelling errors',
            icon: 'fa-spell-check',
            path: 'tools/text/grammar-checker.html'
        }
    ],
    socialTools: [
        {
            id: 'youtube-thumbnail',
            title: 'YouTube Thumbnail Downloader',
            description: 'Download YouTube video thumbnails',
            icon: 'fa-youtube',
            path: 'tools/social/youtube-thumbnail.html'
        },
        {
            id: 'instagram-downloader',
            title: 'Instagram Photo Downloader',
            description: 'Download Instagram photos and videos',
            icon: 'fa-instagram',
            path: 'tools/social/instagram-downloader.html'
        },
        {
            id: 'twitter-downloader',
            title: 'Twitter Video Downloader',
            description: 'Download Twitter videos and GIFs',
            icon: 'fa-twitter',
            path: 'tools/social/twitter-downloader.html'
        },
        {
            id: 'facebook-downloader',
            title: 'Facebook Video Downloader',
            description: 'Download Facebook videos',
            icon: 'fa-facebook',
            path: 'tools/social/facebook-downloader.html'
        },
        {
            id: 'tiktok-downloader',
            title: 'TikTok Video Downloader',
            description: 'Download TikTok videos without watermark',
            icon: 'fa-music',
            path: 'tools/social/tiktok-downloader.html'
        },
        {
            id: 'youtube-tags',
            title: 'YouTube Tags Extractor',
            description: 'Extract tags from YouTube videos',
            icon: 'fa-tags',
            path: 'tools/social/youtube-tags.html'
        },
        {
            id: 'hashtag-generator',
            title: 'Hashtag Generator',
            description: 'Generate relevant hashtags for social media',
            icon: 'fa-hashtag',
            path: 'tools/social/hashtag-generator.html'
        },
        {
            id: 'social-post',
            title: 'Social Media Post Generator',
            description: 'Generate engaging social media posts',
            icon: 'fa-share-alt',
            path: 'tools/social/post-generator.html'
        },
        {
            id: 'emoji-keyboard',
            title: 'Emoji Keyboard',
            description: 'Find and copy emojis easily',
            icon: 'fa-smile',
            path: 'tools/social/emoji-keyboard.html'
        },
        {
            id: 'twitter-counter',
            title: 'Twitter Character Counter',
            description: 'Count characters for Twitter posts',
            icon: 'fa-twitter',
            path: 'tools/social/twitter-counter.html'
        }
    ]
}; 