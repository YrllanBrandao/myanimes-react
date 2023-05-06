import { wait } from "@testing-library/user-event/dist/utils";
import Connection from "../database/database";

interface interfaceAnime{
    name: string,
    numberEpisode: number,
    coverUrl: string,
    synopsis: string,
    coverPageUrl: string
}
interface updateAnime{
    name?: string,
    numberEpisode?: number,
    coverUrl?: string,
    synopsis?: string,
    coverPageUrl?: string
}

class Anime{
    _verifyById = async (id:number) =>{
        const result: any = await Connection("animes").select().where({id});

        if(result[0] !== undefined)
        {
            return true;
        }
        return  false;
    }
    _verifyByName = async (name:string) =>{
        
      
            const result: any = await Connection("animes").select().where({name});

        if(result[0] !== undefined)
        {
            return true;
        }
        return false
    }

    deleteAnime = async (req:any, res:any) =>{
       
        try{
            const id:number  = req.params.id;
            
            const exist:boolean = await this._verifyById(id);
            if(exist)
            {
                const query = await Connection("animes").delete("*").where({id});
                res.status(200).send(query);
            }
            else{
                res.status(404).send("anime not found")
            }
        }
        catch(error:any)
        {
            res.status(400).send(error.sqlMessage);
        }
    }
    registerAnime = async(req:any, res:any)=>{
        
        try{
            const anime:interfaceAnime = req.body;

            const existAnime:boolean = await this._verifyByName(anime.name);
    
    
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
    updateAnime = async (req:any, res:any) =>{
        try{
            const newAnime:updateAnime = req.body;
            const {id} = req.body;
            if(!newAnime)
            {
                res.status(400).send("Incorrect fields, please check and try again");
            }
            if(!id)
            {
                res.status(400).send("Fild ID unavailable");
            }
            const exist:boolean =  await this._verifyById(id);

            if(exist)
            {   
                await Connection("animes").update(newAnime).where({id});

                res.status(200).send("Updated!");
            }
            else{
                res.status(400).send("incorrect ID");
            }
            
        }
        catch(error:any)
        {
            res.status(error.status).send(error.sqlMessage)
        }
    }
}


export default Anime;