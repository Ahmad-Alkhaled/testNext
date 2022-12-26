// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  

  if(req.method === 'POST')
  {
    res.status(200).json({ name: 'test POST' })
  }else if (req.method === 'GET')
  {
    res.status(200).json({ name: 'test GET' })
  }else{
    res.status(200).json({ name: 'test eny' })
  }
 
}
