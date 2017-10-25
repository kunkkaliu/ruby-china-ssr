export function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function';
    }
    return false;
}

export function getCookie(name) {
    const value = `;  ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    const partsLength = 2;
    if (parts.length === partsLength) return parts.pop().split(';').shift();
    return null;
}

function pluralize(time, label) {
    return time + label;
}

const Format = {};
Format.date = (time) => {
    const newTime = new Date(time);
    const between = (Date.now() - Number(newTime)) / 1000;
    if (between < 3600) {
        return pluralize((between / 60).toFixed(0), ' 分钟前');
    } else if (between < 86400) {
        return pluralize((between / 3600).toFixed(0), ' 小时前');
    }
    return pluralize((between / 86400).toFixed(0), ' 天前');
};
export { Format };
