export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the post",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown just below the post title",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "thumb_image",
            "title": "Image (blog feed)",
            "description": "The image shown in the blog feed",
            "validation": null
        },
        {
            "type": "string",
            "name": "thumb_image_alt",
            "title": "Image alt text (blog feed)",
            "description": "The alt text of the blog feed image",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Background Image (single post)",
            "description": "The image shown in the background of the single post header",
            "validation": null
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the post displayed in the blog feed",
            "validation": null
        },
        {
            "type": "stackbit_page_meta",
            "name": "seo",
            "title": "Seo",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "post"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}