var S43;
(function (S43) {
    "use strict";
    var SearchResult = (function () {
        function SearchResult() {
            this.rank = -1;
            this.docId = -1;
            this.title = "";
            this.author = "";
            this.size = -1;
            this.url = "";
            this.description = "";
            this.created = "";
            this.collapsingStatus = "";
            this.hitHighlightedSummary = "";
            this.contentclass = "";
            this.fileExtension = "";
            this.contentTypeId = "";
            this.parentLink = "";
            this.isDocument = false;
            this.lastModified = "";
            this.fileType = "";
            this.isContainer = false;
        }
        SearchResult.prototype.getFields = function () {
            var retVal = [];
            for (var oneProp in this) {
                if (this.hasOwnProperty(oneProp)) {
                    retVal.push(oneProp);
                }
            }
            return retVal;
        };
        return SearchResult;
    })();
    S43.SearchResult = SearchResult;
})(S43 || (S43 = {}));
