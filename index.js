import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", async function (req, res) {
    var allData = { leaders: [], members: [],heads:[],testimonials:[],events:[],majorEvents:[] };
    try{
        allData.events = JSON.parse( await fs.promises.readFile(("data/Events.json"),'utf-8'));
        allData.leaders = JSON.parse( await fs.promises.readFile(("data/Leader.json"),'utf-8'));
        allData.members = JSON.parse( await fs.promises.readFile(("data/Member.json"),'utf-8'));
        allData.heads = JSON.parse( await fs.promises.readFile(("data/Head.json"),'utf-8'));
        allData.testimonials = JSON.parse( await fs.promises.readFile(("data/Testimonial.json"),'utf-8'));
        res.render("index", { data: allData });
    }catch(e){
        return res.render("error");
    }
 JSON.parse( await fs.promises.readFile(("data/Events.json"),'utf-8'));
});

app.get("/event/:name", function (req, res) {
    var name = req.params.name;

    fs.readFile("data/Events.json", 'utf-8', (error, data) => {
        if (error) {
            return res.render("error");
        } else {
            const parsedData = JSON.parse(data);
            var eventData = [];
            var moreEventData = [];
           parsedData.filter((curr) => {
                if (curr.id == name.toString()) {
                    eventData.push(curr);
                }else{
                    moreEventData.push(curr);
                }
            });
            if (eventData.length == 0) {
                return res.render("error");

            } else {
                return res.render('SingleEvent', { data: eventData[0],moreEvent: moreEventData})
            }
        }
    });
});
app.get("/*", function (req, res) {
    res.render("error");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
})