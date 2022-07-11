class siteController {
    //[GET] /
   index =  (req, res) =>{
    const result = 'hfsfello'
    res.send(result)
  }

   get = (req, res) =>{
    const result = 'this is a site'
    res.send(result)
  }
}

module.exports = new siteController ();