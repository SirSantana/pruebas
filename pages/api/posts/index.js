import DBConnect from "../../../libs/dbConnect";
import postModel from "../../../models/postModel";

DBConnect()
export default async function handler(req, res){
    switch (req.method) {
        case 'GET':
            await getPosts(req,res)
    
        
    }
}
export const getPosts = async (req, res) => {
      try {
        const posts = await postModel.find({})
        const data = await posts
       
        res.status(200).json({data});

      } catch (error) {
        res.status(403).json(error);
      }
    };

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '4mb',
      },
    },
  }