import controlScreen from '../components/control-pages';

const proxyquire = require('proxyquire');

function createPages() {

}
proxyquire('./components/check-widthScreen.js', {
    createPages,
});

describe(('checkWidthScreen'), () => {
    it('call new createPages', () => {
        controlScreen([{ a: 1 }, { b: 2 }]);
    });
});
