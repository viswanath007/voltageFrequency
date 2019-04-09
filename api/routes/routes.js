import voltage from "../controller/voltage";

export default (app) => {
    app.get("/", async (req, res) => {
        const {tagName, tagValue} = req.query;
        if(tagName && tagValue){
            const data = await voltage(req.query);
            res.json({data});
        } else {
            res.status(400).send({
                message: 'Please provide tagName and tagValue'
             });
        }
    })
  }
  