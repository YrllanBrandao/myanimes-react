import Connection from "../database/database";

interface interfaceAnime{
    name: string,
    numberEpisode: number,
    coverUrl: string,
    synopsis: string,
    coverPageUrl: string
}

class Anime{
    _animeVerify = (name:string) =>{
        const result: any = Connection("animes").select().where({name});

        if(result[0] !== undefined)
        {
            return true;
        }
        return false;
    }
    registerAnime = async(req:any, res:any)=>{
        
        try{
            const anime:interfaceAnime = req.body;

            const existAnime:boolean = this._animeVerify(anime.name);
    
    
            if(!existAnime)
            {
                  await Connection("animes").insert({
                    name: anime.name,
                    coverPageUrl: anime.coverPageUrl,
                    coverUrl: anime.coverUrl,
                    synopsis: anime.synopsis,
                    numberEpisode: anime.numberEpisode
                });
    
                res.status(201).send("Created successfully!");
            }
        
        }
        catch(error:any)
        {
            res.status(400).send(error.sqlMessage);
        }

    }
}


export default Anime;