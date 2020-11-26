import {Request, Response} from 'express'

function postLink(request: Request, response: Response){
    return response.send('postLink')
}

function getLink(request: Request, response: Response){
    return response.send('getLink')
}

function hitLink(request: Request, response: Response){
    return response.send('hitLink')
}



export default {postLink, getLink, hitLink}