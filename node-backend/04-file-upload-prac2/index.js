const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8000;

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('폴더가 없어서 생성합니다');
    fs.mkdirSync('uploads');
}

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination:  function (req, file, done){
            done(null, 'uploads/')  
        },
        filename: function (req, file, done){
            console.log('file', file);
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            const filename = basename + '_' + Date.now() + ext;
            done(null, filename);
        }
    })
})

app.get("/", (req, res)=>{
    res.render('index');
})

app.post('/single', upload.single('file'), (req, res)=>{
    console.log("body", req.body);
    console.log("file", req.file);
    res.render('result', {
        src: req.file.path,
        title: req.body.title
    });
})

app.post('/several', upload.array('file'), (req, res)=>{
    console.log(req.files);
    //res.send('완료');
    res.render('result', {
        images: req.files,
        title: req.body.title
    });
})

app.post('/severals', upload.fields([{name: 'file1'}, {name: 'file2'}]), (req, res)=>{
    console.log(req.body)
    console.log(req.files)
    res.send('done!')
    // res.render('result', {
    //     images: req.files,
    //     title: req.body
    // })
})

app.post("/dynamic", upload.array("file"), (req,res)=>{
    res.send({
        src: req.files
    })
})


app.listen(PORT, (req, res)=>{
    console.log(`Server Open : ${PORT}`);
})