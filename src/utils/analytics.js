import { GA4React } from "ga-4-react";
import { constants } from '../constants';



const ga4react = new GA4React("G-MN91EPS3KT").initialize();


const trackPathForAnalytics = (data) => {
    if (constants.testing) return;
    const { path, search, title } = data;
    ga4react
        .then((ga) => {
            console.log(ga);
            ga.pageview(path, search, title);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};

const trackEventForEvent = (data) => {
    if (constants.testing) return;
    const { category, action, label, value } = data;
    ga4react
        .then((ga) => {
            ga.event(category, action, label, value);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};



export { trackPathForAnalytics, trackEventForEvent };