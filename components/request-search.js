/* global gapi */
import newArrayResponse from './create-responseArray';
import requestViews from './request-viewsCount';
import checkWidthScreen from './check-widthScreen';
import {
    controlScreen, addMultipleListeners, swipeStart, swipeMove, swipeEnd,
} from './control-pages';
import getVariables from './variables';

export default function search() {
    if (document.querySelector('main')) {
        document.querySelector('main').remove();
    }
    const main = document.createElement('main');
    main.innerHTML = `<div class="answer-block" id="answer"></div>
    <div class="paging" id="pagination"></div>`;
    document.querySelector('body').appendChild(main);
    document.querySelector('#pagination').innerHTML = '';
    let {
        arrayResponse,
    } = getVariables();

    function requestSearch() {
        const wordRequest = document.querySelector('input').value;
        gapi.client.init({
            'apiKey': 'AIzaSyCVrwwoyqYxMZ4xXDIQnZVaGFkyLlJO2AM',
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        }).then(() => {
            return gapi.client.youtube.search.list({
                maxResults: '15',
                q: wordRequest,
                part: 'snippet',
                type: 'video',
                fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode',
            });
        }).then((response) => {
            arrayResponse = response.result;
            const arrayObjectsResponse = newArrayResponse(arrayResponse);
            const length = arrayObjectsResponse.length;
            for (let i = 0; i < length; i += 1) {
                requestViews(arrayObjectsResponse, i);
            }
            setTimeout(() => {
                const targetElement = document.querySelector('#answer');
                checkWidthScreen(arrayObjectsResponse);
                window.addEventListener('resize', controlScreen.bind(null, arrayObjectsResponse));
                addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
                addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
                addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd.bind(null, arrayObjectsResponse));
            }, 1000);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', requestSearch);
}
