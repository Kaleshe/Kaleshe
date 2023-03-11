const fetch = require("node-fetch");

async function getAllBlogposts() {

    function parseMarkdown(markdownText) {
        const htmlText = markdownText
            .replace(/^### (.*$)/gim, '<h3>$1</h3><p>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2><p>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
            .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
            .replace(/\n$/gim, '</p><p>')
    
        return '<p>' + htmlText.trim()
    }

    const response = await
    fetch('http://localhost:1337/articles');
    
    const data = await response.json();

    // format blogposts objects
    const blogpostsFormatted = data.map((item) => {
        let parsedContent = parseMarkdown(item.Content);
        return {
            id: item.id,
            title: item.Title,
            slug: item.Slug,
            body: parsedContent,
            cover: item.Cover.url,
            date: item.published_at
        };
    });

    // return formatted blogposts
    return blogpostsFormatted;        
}


// export for 11ty
// module.exports = getAllBlogposts