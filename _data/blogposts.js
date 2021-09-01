const fetch = require("node-fetch");

// function to get blogposts
async function getAllBlogposts() {
    // max number of records to fetch per query
    // const recordsPerQuery = 100;

    // // number of records to skip (start at 0)
    // let recordsToSkip = 0;

    // let makeNewQuery = true;

    // let blogposts = [];

    // // make queries until makeNewQuery is set to false
    // while (makeNewQuery) {
    //     try {
    //         // initiate fetch
    //         const data = await fetch("http://localhost:1337/articles", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             },
    //             body: JSON.stringify({
    //                 query: `{
    //                     articles {
    //                     id
    //                     Title
    //                     Content
    //                     published_at
    //                     Cover
    //                     Slug
    //                     }
    //                 }`,
    //             }),
    //         });

    //         console.log(data);

    //         // store the JSON response when promise resolves
    //         const response = await data.json();

    //         // handle CMS errors
    //         if (response.errors) {
    //             let errors = response.errors;
    //             errors.map((error) => {
    //                 console.log(error.message);
    //             });
    //             throw new Error("Houston... We have a CMS problem");
    //         }

    //         // update blogpost array with the data from the JSON response
    //         blogposts = blogposts.concat(response.data.articles);

    //         // prepare for next query
    //         recordsToSkip += recordsPerQuery;

    //         // stop querying if we are getting back less than the records we fetch per query
    //         if (response.data.articles.length < recordsPerQuery) {
    //             makeNewQuery = false;
    //         }
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // }

    // // format blogposts objects
    // const blogpostsFormatted = blogposts.map((item) => {
    //     return {
    //         id: item.id,
    //         title: item.Title,
    //         slug: item.Slug,
    //         body: item.Content,
    //         cover: item.Cover,
    //         date: item.published_at
    //     };
    // });

    // // return formatted blogposts
    // return blogpostsFormatted;

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
module.exports = getAllBlogposts