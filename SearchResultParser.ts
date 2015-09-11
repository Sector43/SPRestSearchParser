//https://github.com/Sector43/SPSearchParser

/// <reference path="SearchResult.ts"/>

module S43 {

    "use strict";

    export class SearchResultParser {

        

        parseResults(rawResults: any): SearchResult[]{
            var retVal: any[] = [];
            var searchResults = rawResults.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
            var sr: S43.SearchResult = new S43.SearchResult();
            var targetPropNames: string[] = sr.getFields();
            var sourcePropNames: string[] = [];
            var oneResult: any;
            var sourcePropName: string;
            var sourcePropValue: any;
            var propIdx: number;
            var targetPropName: string; 
            var oneProp: any;

            //get source property names (targetPropertyName with initial capital letter)
            for (var j = 0; j < targetPropNames.length; j++) {
                sourcePropNames.push(this.upperCaseFirstLetter(targetPropNames[j]));
            }

            //iterate through all returned results
            for (var i = 0; i < searchResults.length; i++) {
                oneResult = searchResults[i];
                
                //iterate result properties
                for (var j = 0; j < oneResult.Cells.results.length; j++) {
                    oneProp = oneResult.Cells.results[j];
                    sourcePropName = oneProp.Key;
                    sourcePropValue = oneProp.Value;
                    

                    switch (sourcePropName) {
                        case "Write":
                            targetPropName = "created";
                            break;
                        case "LastModifiedTime":
                            targetPropName = "lastModified";
                            break;
                        case "Path":
                            targetPropName = "url";
                            break;
                        default:
                            targetPropName = this.lowerCaseFirstLetter(sourcePropName);
                    }

                    propIdx = targetPropNames.indexOf(targetPropName);

                    

                    if (propIdx > -1) {
                        
                        sr[targetPropName] = sourcePropValue;
                    }
                }
                retVal.push(sr);


                sr = new S43.SearchResult();
            }
            return retVal;
        }

        upperCaseFirstLetter(str : string) {
            if (str && str.length >= 1) {
                var firstChar = str.charAt(0);
                var remainingStr = str.slice(1);
                return firstChar.toUpperCase() + remainingStr;
            }
            return str;
        }

        lowerCaseFirstLetter(str: string) {
            if (str && str.length >= 1) {
                var firstChar = str.charAt(0);
                var remainingStr = str.slice(1);
                return firstChar.toLowerCase() + remainingStr;
            }
            return str;
        }

       
       
    }

}

