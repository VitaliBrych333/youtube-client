/* global gapi */
export default function requestViews(arrayObjectsResponse, i) {
    function setViewCount(responseViewCount) {
        arrayObjectsResponse[i].views = responseViewCount;
    }

    function viewsCount() {
        gapi.client.init({
            'apiKey': 'AIzaSyCVrwwoyqYxMZ4xXDIQnZVaGFkyLlJO2AM',
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        }).then(() => {
            return gapi.client.youtube.videos.list({
                id: arrayObjectsResponse[i].id,
                part: 'statistics',
                fields: 'items/statistics/viewCount',
            });
        }).then((response) => {
            const responseViewCount = response.result.items[0].statistics.viewCount;
            setViewCount(responseViewCount, i);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', viewsCount);
}
