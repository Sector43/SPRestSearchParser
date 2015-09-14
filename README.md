# SPSearchParser
A JavaScript utility to parse SharePoint 2013 search results into meaningful JSON objects.  Information available here: <a href='http://blog.mannsoftware.com/?p=2031'>http://blog.mannsoftware.com/?p=2031</a>

Basically, it works like this:

Make your REST call to get search results from SharePoint
Create an instance of the S43.SearchResultParser object

Take the parameter returned from SharePoint and pass it to the parseResults method in the SPRESTSearchParser object

The return value from that method call is a JSON object which contains an array of SearchResult objects.  Each SearchResult object is simply a representation of a single result from SharePoint that is easier to work with than the raw results.  

Each property from the result set is available directly on the SearchResult object within the array by name – much easier than remembering the position of each property in the result set.
Right now the following properties are available from the PrimaryQueryResult.RelevantResults collection:
<ul>
<li>rank</li>
<li>docId</li>
<li>title</li>
<li>author</li>
<li>size</li>
<li>url</li>
<li>description</li>
<li>created</li>
<li>collapsingStatus</li>
<li>hitHighlightedSummary</li>
<li>contentclass</li>
<li>fileExtension</li>
<li>contentTypeId</li>
<li>parentLink</li>
<li>isDocument</li>
<li>lastModified</li>
<li>fileType</li>
<li>isContainer</li>

Adding new properties is simply as easy as adding them as new properties to the SearchResult object definition in SearchResult.ts (yes, this is written in TypeScript).  One important thing to realize is that the property names on the SearchResult object must follow the typical JavaScript coding convention and start with a lowercase letter.

In the future, I’d like to clean this up and expand it to make use of additional result sets and other search capabilities.  Feel free to fork the code and adapt to meet your needs.  If you do something interesting, please submit a pull request to allow others to take advantage of it as well.
