function query(queryString){
    let query = {}
    queryString = queryString.replace('?', '')
    if(!queryString){
        return query
    }
    queryString = queryString.split('&')
    for(let el of queryString){
        query[el.split('=')[0]] = el.split('=')[1]
    }
    return query
}

export default query;