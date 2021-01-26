const handlerErrors = ( errorMessage, errorResponse ) => {
    
    let stringError = ''
    const responseStatus =  errorResponse.status || false 
    const responseStatusText = errorResponse.statusText || false 
    const responseStatusDataDetail = errorResponse.data.detail || false 

    stringError += '<strong>Error message:</strong> ' + errorMessage + '<br>'

    if( responseStatus ){
        stringError += '<strong>Error code:</strong> ' +responseStatus +'<br>'
    }

    if( responseStatusText ){
        stringError += '<strong>Status text:</strong> ' +responseStatusText +'<br>'
    }

    if( responseStatusDataDetail ){
        stringError += '<strong>Detail:</strong> ' +responseStatusDataDetail +'<br>'
    }

    return stringError
}


export { handlerErrors }