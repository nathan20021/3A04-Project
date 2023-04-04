const { promptList } = require('../constants/constants');

const generateRandomIndex = () => {
    return Math.floor(Math.random() * promptList.length);
}
const getPrompt = () => {
    return promptList[generateRandomIndex()]
}

module.exports = {
    getPrompt
}