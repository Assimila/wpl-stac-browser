module.exports = {
    catalogUrl: "https://s3.waw3-2.cloudferro.com/swift/v1/wpl-stac/stac/catalog.json",
    catalogTitle: "WorldPeatland STAC Browser",
    allowExternalAccess: false, // Must be true if catalogUrl is not given
    allowedDomains: [],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
//      "de-CH",
        "es",
        "en",
//      "en-GB",
//      "en-US",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro",
        "ja",
        "pt",
//      "pt-BR"
    ],
    apiCatalogPriority: null,
    // false => always use server side rendering
    // because v3.3.3 of stac-browser still depends on "stac-layer": "^0.15.0" which is 3 years old!
    // can't handle nans in COG properly :-(
    // in the near future stac-browser will be updated to use open layers and ol-stac
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?resample=nearest&url=" + encodeURIComponent(href),
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "hash", // must be hash for GitHub Pages
    cardViewMode: "cards",
    cardViewSort: "asc",
    showKeywordsInItemCards: false,
    showKeywordsInCatalogCards: false,
    showThumbnailsAsAssets: false,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    socialSharing: ['email', 'bsky', 'mastodon', 'x'],
    preprocessSTAC: null,
    authConfig: null
};
