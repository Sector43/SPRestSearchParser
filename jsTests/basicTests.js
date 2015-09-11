
describe("Basic Tests:", function() {
    var oneResult;
    var multResults;

    beforeAll(function() {
        var parser = new S43.SearchResultParser();
        oneResult = parser.parseResults(oneSample);
        multResults = parser.parseResults(allSamples);
    });


    it("Should have one result", function() {


        expect(oneResult.length).toBe(1);

    });

    it("Title value set properly", function() {
       expect(oneResult[0].title).toBe("JavaScript IntelliSense");

    });

    it("Should have five results", function () {


        expect(multResults.length).toBe(5);

    });
});

//#region Sample Data

//#region oneSample
oneSample = {
    "d": {
        "query": {
            "PrimaryQueryResult": {
                "RelevantResults": {
                    "RowCount": 5,
                    "Table": {
                        "Rows": {
                            "results": [
                                {
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "12.8286476135254",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "534",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "534",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "JavaScript IntelliSense",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "David Mann;administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "49401",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/From MSDN.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T13:08:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "with client script in the <c0>JavaScript</c0> editor, IntelliSense lists the objects, functions <ddd/> IntelliSense with XML documentation comments and <c0>JavaScript</c0> IntelliSense extensibility <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_ListItem_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": "0x01010085893949A78E3242A1A829D67CAA7F81",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "true",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T13:08:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/From MSDN.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                }]
                        }
                    }



                }
            }
        }
    }
}
//#endregion oneSample
//#region allSamples
allSamples = {
    "d": {
        "query": {
            "PrimaryQueryResult": {
                "RelevantResults": {
                    "RowCount": 5,
                    "Table": {
                        "Rows": {
                            "results": [
                                {
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "12.8286476135254",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "534",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "534",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "JavaScript IntelliSense",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "David Mann;administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "49401",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/From MSDN.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T13:08:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "with client script in the <c0>JavaScript</c0> editor, IntelliSense lists the objects, functions <ddd/> IntelliSense with XML documentation comments and <c0>JavaScript</c0> IntelliSense extensibility <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_ListItem_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": "0x01010085893949A78E3242A1A829D67CAA7F81",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "true",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T13:08:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/From MSDN.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "__metadata": {
                                        "type": "SP.SimpleDataRow"
                                    },
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "12.7599143981934",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "537",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "537",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "Asynchronous Programming in JavaScript with “Promises”",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "David Mann;administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "19535",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/MSDN2.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T13:09:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "They can be challenging to work with in <c0>JavaScript</c0> <ddd/> asynchronous (or async) patterns easier, <c0>JavaScript</c0> libraries (like jQuery and Dojo) have <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_ListItem_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": "0x01010085893949A78E3242A1A829D67CAA7F81",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "true",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T13:09:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/MSDN2.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "__metadata": {
                                        "type": "SP.SimpleDataRow"
                                    },
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "12.4335117340088",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "535",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "535",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "From Wikipedia",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "David Mann;administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "20269",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/From Wikipedia.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T13:07:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "Newer and faster <c0>JavaScript</c0> virtual machines (VMs) and platforms built upon them have also increased the popularity of <c0>JavaScript</c0> for server-side web applications <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_ListItem_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": "0x01010085893949A78E3242A1A829D67CAA7F81",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "true",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T13:07:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/From Wikipedia.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "__metadata": {
                                        "type": "SP.SimpleDataRow"
                                    },
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "12.213418006897",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "486",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "486",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "Wingtip Intranet - __Docs",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T17:09:57.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "9 \r\n<c0>JavaScript</c0> \r\n  \r\n8/21/2015 1:09 PM administrator <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_List_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T17:09:57.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "html",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "__metadata": {
                                        "type": "SP.SimpleDataRow"
                                    },
                                    "Cells": {
                                        "results": [
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Rank",
                                                "Value": "11.6707191467285",
                                                "ValueType": "Edm.Double"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "DocId",
                                                "Value": "536",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WorkId",
                                                "Value": "536",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Title",
                                                "Value": "JavaScript",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Author",
                                                "Value": "David Mann;administrator",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Size",
                                                "Value": "19077",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Path",
                                                "Value": "http://intranet.wingtip.com/Docs/JavaScript.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Description",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "Write",
                                                "Value": "2015-08-21T13:07:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "CollapsingStatus",
                                                "Value": "0",
                                                "ValueType": "Edm.Int64"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedSummary",
                                                "Value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit <ddd/> Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna <ddd/> ",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "HitHighlightedProperties",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "contentclass",
                                                "Value": "STS_ListItem_DocumentLibrary",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PictureThumbnailURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedEmbedURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ServerRedirectedPreviewURL",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ContentTypeId",
                                                "Value": "0x01010085893949A78E3242A1A829D67CAA7F81",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ParentLink",
                                                "Value": "http://intranet.wingtip.com/Docs/Forms/AllItems.aspx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsLifeTime",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "ViewsRecent",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionNames",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SectionIndexes",
                                                "Value": "",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteLogo",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteDescription",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "deeplinks",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "importance",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SiteName",
                                                "Value": "http://intranet.wingtip.com",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsDocument",
                                                "Value": "true",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "LastModifiedTime",
                                                "Value": "2015-08-21T13:07:00.0000000Z",
                                                "ValueType": "Edm.DateTime"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "FileType",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "IsContainer",
                                                "Value": "false",
                                                "ValueType": "Edm.Boolean"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "WebTemplate",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "SecondaryFileExtension",
                                                "Value": "docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "docaclmeta",
                                                "Value": null,
                                                "ValueType": "Null"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "OriginalPath",
                                                "Value": "http://intranet.wingtip.com/Docs/JavaScript.docx",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "PartitionId",
                                                "Value": "0c37852b-34d0-418e-91c6-2ac25af4be5b",
                                                "ValueType": "Edm.Guid"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "UrlZone",
                                                "Value": "0",
                                                "ValueType": "Edm.Int32"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "AAMEnabledManagedProperties",
                                                "Value": "AttachmentURI;deeplinks;DefaultEncodingURL;ExternalMediaURL;HierarchyUrl;OrgParentUrls;OrgUrls;OriginalPath;ParentLink;Path;PictureThumbnailURL;PictureURL;PublishingImage;recommendedfor;ServerRedirectedEmbedURL;ServerRedirectedPreviewURL;ServerRedirectedURL;SiteLogo;SitePath;SPSiteURL;UserEncodingURL",
                                                "ValueType": "Edm.String"
                                            },
                                            {
                                                "__metadata": {
                                                    "type": "SP.KeyValue"
                                                },
                                                "Key": "RenderTemplateId",
                                                "Value": "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js",
                                                "ValueType": "Edm.String"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
}
//#endregion allSamples

//#endregion Sample Data
