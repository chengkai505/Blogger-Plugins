# Related Article in Blogger

This plugin can **ONLY** be used in single post.

To use it, require the XML structure below, which must be written in template.

```XML
<div id='related-article' expr:data-label='data:post.labels.first.name' expr:data-url='data:post.url.canonical'>
	<script src='//chengkai505.github.io/Blogger-Plugins/Related-Article/main.js'></script>
</div>
```
- The value of `data-label` aims to gather information of the posts with same label name through Blogger api.
- The value of `data-url` aims to prevent current post showing in the list of related posts.
