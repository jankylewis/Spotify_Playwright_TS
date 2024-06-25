import { test } from "@playwright/test"
import { HomePage } from "../spotify-ui-test-services/businesses/HomePage"
import { LeftBar } from "../spotify-ui-test-services/businesses/shared/LeftBar";
import { SearchPage } from "../spotify-ui-test-services/businesses/search/SearchPage";
import { SearchTabs } from "../spotify-ui-test-services/models/tabs/SearchTabs"
import { PodcastsAndShowsTab } from "../spotify-ui-test-services/businesses/search/PodcastsAndShowsTab"
import { AlbumsTab } from "../spotify-ui-test-services/businesses/search/AlbumsTab"
import { AllTab } from "../spotify-ui-test-services/businesses/search/AllTab";
import { SongsTab } from "../spotify-ui-test-services/businesses/search/SongsTab";
import { PlaylistsTab } from "../spotify-ui-test-services/businesses/search/PlaylistsTab";

test.describe("Search tests", (): void => {

    //region Introduce variables

    let homePage: HomePage
    let leftBar: LeftBar
    let searchPage: SearchPage

    let searchKey: string

    //endregion Introduce variables

    test("Search successfully at Podcasts & Shows Tab", async ({page}): Promise<void> => {

        searchKey = "anything goes with emma chamberlain"

        await leftBar.clickOnSearchButton();
        await searchPage.doSearching(searchKey)
        await searchPage.landOnTab(SearchTabs.PodcastsAndShows.toString())
        await new PodcastsAndShowsTab(page).verifyResultsContainedSearchKey(searchKey)
    })

    test("Search successfully at Albums Tab", async ({page}): Promise<void> => {

        searchKey = "gonna love me"

        await leftBar.clickOnSearchButton();
        await searchPage.doSearching(searchKey)
        await searchPage.landOnTab(SearchTabs.Albums.toString())
        await new AlbumsTab(page).verifyResultsContainedSearchKey(searchKey)
    })

    test("Search successfully at All Tab", async ({page}): Promise<void> => {

        searchKey = "bible"

        await leftBar.clickOnSearchButton();
        await searchPage.doSearching(searchKey)
        await searchPage.landOnTab(SearchTabs.All.toString())
        await new AllTab(page).verifyTopResultListedSearchKey(searchKey)
    })

    test("Search successfully at Songs Tab", async ({page}): Promise<void> => {

        searchKey = "watch how i move"

        await leftBar.clickOnSearchButton();
        await searchPage.doSearching(searchKey)
        await searchPage.landOnTab(SearchTabs.Songs.toString())
        await new SongsTab(page).verifyTrackListContainedSearchKey(searchKey)
    })

    test("Search successfully at Playlists Tab", async ({page}): Promise<void> => {

        searchKey = "hurrykng"
        await leftBar.clickOnSearchButton();
        await searchPage.doSearching(searchKey)
        await searchPage.landOnTab(SearchTabs.Playlists.toString())
        await new PlaylistsTab(page).verifyResultsContainedSearchKey(searchKey)
    })

    test.beforeEach(async ({page}): Promise<void> => {

        homePage = new HomePage(page)
        leftBar = new LeftBar(page)
        searchPage = new SearchPage(page)

        await homePage.visitSpotifyHomePage()
    })
})