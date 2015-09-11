//https://github.com/Sector43/SPSearchParser
/// <reference path="SearchResult.ts"/>
var S43;
(function (S43) {
    "use strict";

    var SearchResultParser = (function () {
        function SearchResultParser() {
        }
        SearchResultParser.prototype.parseResults = function (rawResults) {
            var retVal = [];
            var searchResults = rawResults.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
            var sr = new S43.SearchResult();
            var targetPropNames = sr.getFields();
            var sourcePropNames = [];
            var oneResult;
            var sourcePropName;
            var sourcePropValue;
            var propIdx;
            var targetPropName;
            var oneProp;

            for (var j = 0; j < targetPropNames.length; j++) {
                sourcePropNames.push(this.upperCaseFirstLetter(targetPropNames[j]));
            }

            for (var i = 0; i < searchResults.length; i++) {
                oneResult = searchResults[i];

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
        };

        SearchResultParser.prototype.upperCaseFirstLetter = function (str) {
            if (str && str.length >= 1) {
                var firstChar = str.charAt(0);
                var remainingStr = str.slice(1);
                return firstChar.toUpperCase() + remainingStr;
            }
            return str;
        };

        SearchResultParser.prototype.lowerCaseFirstLetter = function (str) {
            if (str && str.length >= 1) {
                var firstChar = str.charAt(0);
                var remainingStr = str.slice(1);
                return firstChar.toLowerCase() + remainingStr;
            }
            return str;
        };
        return SearchResultParser;
    })();
    S43.SearchResultParser = SearchResultParser;
})(S43 || (S43 = {}));
