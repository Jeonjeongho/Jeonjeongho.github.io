import URLSearchParams from 'url-search-params';

import common from './web/common';


const appMethods = {
};

const appInit = () => {
    /*
    const appName = $('body').attr('id').replace(/\w+-/, '');
    const appCommon = appName.split('-')[0];
    const appMethod = appName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const params = new URLSearchParams(location.search);

    [appCommon, appMethod].forEach(method => appMethods[method] && appMethods[method](params));
    */
};

document.addEventListener('DOMContentLoaded', () => {
    appInit();
    common();
    
});
