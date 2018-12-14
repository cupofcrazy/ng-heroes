export const formatUrl = (url) => {
    const splitUrl = [...url];
    let finalUrl = ""
    for (let i = 0; i < splitUrl.length; i++) {
        finalUrl += `${splitUrl[i]}-`
        
    }
    return finalUrl;
}