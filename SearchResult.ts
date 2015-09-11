//https://github.com/Sector43/SPSearchParser

module S43 {

    "use strict";  

    export class SearchResult {
        rank: number = -1;
        docId: number = -1;        
        title: string = "";
        author: string = "";
        size: number = -1;
        url: string = "";
        description: string = "";
        created: string = "";
        collapsingStatus : string = "";
        hitHighlightedSummary: string = "";
        contentclass: string = "";
        fileExtension: string = "";
        contentTypeId: string = "";
        parentLink: string = "";
        isDocument: boolean = false;
        lastModified: string = "";
        fileType: string = "";
        isContainer: boolean = false;

        getFields() {
            var retVal:string[] = [];
            for (var oneProp in this) {
                if (this.hasOwnProperty(oneProp)) {

                    retVal.push(oneProp);
                }
            }
            return retVal;
        }
    }
}

 