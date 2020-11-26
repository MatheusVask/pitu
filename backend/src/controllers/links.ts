import {Request, Response} from 'express'
import {Link} from '../models/link'


const links: Link[] = []
let proxId = 1;

function genCode(){
    let text = ''
    const possible = 'ABCDEFGHIJKLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    for(let i=0; i<5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postLink(request: Request, response: Response){
    const link = request.body as Link;
    link.id = proxId++
    link.code = genCode()
    link.hits = 0
    links.push(link)
    return response.status(201).json(link)
}



function getLink(request: Request, response: Response){
    const code = request.params.code as string;
    const link = links.find(item => item.code === code);
    if(!link){
        return response.status(404).json({error: 'URL not found'})
    }
    return response.status(200).json(link)
}



function hitLink(request: Request, response: Response){
    const code = request.params.code as string;
    const indexLinks = links.findIndex(item => item.code === code)

    if(indexLinks < 0){
        return response.sendStatus(404)
    }
    links[indexLinks].hits!++;

    return response.status(200).json(links[indexLinks])
}



export default {postLink, getLink, hitLink}