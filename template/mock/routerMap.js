const path2Regexp = require('path-to-regexp')
const MOCK_DATA_DIR = './data'

const initMockRouterReg = function(map) {
    let regMap = new Map()
    for (let pathReg in map) {
        if(map.hasOwnProperty(pathReg)){
            let keyArr = map[pathReg].split(/\s/)
            let pathInfo = {}, urlReg
            if (keyArr.length > 1) {
                urlReg = keyArr[1]
                pathInfo.method = keyArr[0].toLowerCase()
            } else {
                urlReg = keyArr[0]
            }
            pathInfo.mockFile = MOCK_DATA_DIR + map[pathReg]
            regMap.set(path2Regexp(urlReg), pathInfo)
        }
    }
    return regMap
}

const routeMap = {
    'get /greet': '/greet'
}

const pathRegMap = initMockRouterReg(routeMap)

module.exports = {
    getFilePath(requestPath, method, isXhr) {
        let filePath = false
        pathRegMap.forEach((pathInfo, urlReg) => {
            let limitMethod = pathInfo.method
            if (urlReg.test(requestPath)) {
                filePath = pathInfo.mockFile
                if (limitMethod && limitMethod !== method && isXhr) {
                    filePath = false
                }
            }
        })
        return filePath
    }
}
