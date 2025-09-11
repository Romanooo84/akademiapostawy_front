const { getVideoList } = require('./authentication/services/getVideoList')
const express = require('express');
const app = express();
const path = require('path');
const cron = require('node-cron');
const multer =require( 'multer');
const cors = require('cors');
const fs = require('fs');
const link = require('./config')
const postfiles = require('./authentication/services/postfiles.js');
const {sendFileContent} = require( './authentication/services/sendFileContent.js');
const storage = require('./authentication/midleware/multerStorage.js');
const {deleteItem} = require('./authentication/services/deletefile.js');  
const editFiles = require(`./authentication/services/editFiles.js`)  

let videoList = []
const port = 3000;


const corsOptions = {
    origin: ['http://localhost:5173', 'https://romanooo84.github.io'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Define allowed methods
};

app.use(cors(corsOptions));
app.use(express.json());

const upload = multer({ storage });



const startServer = async () => {
    try {
        console.log('Pobieram listę wideo...');
        videoList = await getVideoList();

        // app.use(express.static(path.join(__dirname, 'dist'))); // jeśli serwujesz front

        app.use(express.json());

        app.get('/myvideolist', (req, res) => {
            console.log('Aktualna lista wideo:', videoList);
            res.json(videoList);
        });

        app.get('/getblogcontent', (req, res) => {
            const filePath = path.join(process.cwd(), 'files', 'blogsContent.js')
            sendFileContent(filePath, res);
        });

        app.get('/getmainpicturelist', (req, res) => { 
            const filePath = path.join(process.cwd(), 'files', 'mainPictureList.js')
            sendFileContent(filePath, res);
        });

        app.get('/projectscontent', (req, res) => {
           console.log('Wywołano /projectsContent')
            const filePath = path.join(process.cwd(), 'files', 'projectsContent.js')
            sendFileContent(filePath, res);
        });

         app.get('/partnerslist', (req, res) => {
            const filePath = path.join(process.cwd(), 'files', 'partnersList.js')
            sendFileContent(filePath, res);
        });

         app.get('/kindergardens', (req, res) => {
            const filePath = path.join(process.cwd(), 'files', 'kindergardenList.js')
            sendFileContent(filePath, res);
        });


       app.post('/getblogcontent', upload.fields([
            { name: 'image', maxCount: 1 },          // główne zdjęcie
            { name: 'editorImages', maxCount: 20 }   // zdjęcia z treści edytora
            ]), (req, res) => {
                const link = `https://srv93409.seohost.com.pl/images/`;
                const fileName = `blogsContent.js`;
                const pageType = 'blog';
                console.log('Wywołano /getblogcontent');
                postfiles(req, link, fileName, pageType, res);
            });

        app.post('/getmainpicturelist', upload.fields([
            { name: 'image', maxCount: 1 },          // główne zdjęcie
            { name: 'editorImages', maxCount: 20 }   // zdjęcia z treści edytora
            ]), (req, res) => {
                const link = `https://srv93409.seohost.com.pl/images/`;
                const fileName = `mainPictureList.js`;
                const pageType = 'about';
                console.log('Wywołano /getmainpicturelist');
                postfiles(req, link, fileName, pageType, res);
            });

         app.post('/projectscontent', upload.fields([
            { name: 'image', maxCount: 1 },          // główne zdjęcie
            { name: 'editorImages', maxCount: 20 }   // zdjęcia z treści edytora
            ]), (req, res) => {
                const link = `https://srv93409.seohost.com.pl/images/`;
                const fileName = `projectsContent.js`;
                const pageType = 'projects';
                console.log('Wywołano /projectscontent');
                postfiles(req, link, fileName, pageType, res);
            });

         app.post('/partnerslist', upload.fields([
            { name: 'image', maxCount: 1 },          // główne zdjęcie
            { name: 'editorImages', maxCount: 20 }   // zdjęcia z treści edytora
            ]), (req, res) => {
                const link = `https://srv93409.seohost.com.pl/images/`;
                const fileName = `partnersList.js`;
                const pageType = 'partners';
                console.log('Wywołano /partnerslist');
                postfiles(req, link, fileName, pageType, res);
            });

        app.post('/kindergardens', upload.fields([
            { name: 'image', maxCount: 1 },          // główne zdjęcie
            { name: 'editorImages', maxCount: 20 }   // zdjęcia z treści edytora
            ]), (req, res) => {
                const link = `https://srv93409.seohost.com.pl/images/`;
                const fileName = `kindergardenList.js`;
                const pageType = 'partners';
                console.log('Wywołano /kindergardenlist');
                postfiles(req, link, fileName, pageType, res);
            });

        app.delete("/getblogcontent", (req, res) => {
            const fileName=`blogsContent.js`
            deleteItem(req, fileName, res);
                });

        app.delete('/getmainpicturelist', (req, res) => {
            console.log('Usuwam z mainPictureList');
            const fileName='mainPictureList.js'
            deleteItem(req, fileName, res);
                });
    

        app.delete('/projectscontent', (req, res) => {
            console.log('Usuwam z projectsContent');
            const fileName=`projectsContent.js`
            deleteItem(req, fileName, res);
                });
        
        app.delete("/partnerslist", (req, res) => {
            const fileName=`partnersList.js`
            deleteItem(req, fileName, res);
                });

        app.delete("/kindergardens", (req, res) => {
            const fileName=`kindergardenList.js`
            deleteItem(req, fileName, res);
                });

        app.put('/getblogcontent', upload.fields([
            { name: 'image', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 }
            ]), (req, res) => {
                        const fileName = "blogsContent.js";
                        const pageType = 'blog';
                        editFiles(req, fileName, pageType, res);
                        });

        app.put('/getmainpicturelist', upload.fields([
            { name: 'image', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 }
            ]), (req, res) => {
                        const fileName = "mainPictureList.js";
                        const pageType = 'about';
                        editFiles(req, fileName, pageType, res);
                        });
        
        app.put("/projectscontent", upload.fields([
            { name: 'image', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 }
            ]), (req, res) => {
                        const fileName = "projectsContent.js";
                        const pageType = 'projects';
                        editFiles(req, fileName, pageType, res);
                        });

        app.put("/partnerslist", upload.fields([
            { name: 'image', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 }
            ]), (req, res) => {
                        const fileName = "partnersList.js";
                        const pageType = 'partnres';
                        editFiles(req, fileName, pageType, res);
                        });

         app.put("/kindergardens", upload.fields([
            { name: 'image', maxCount: 1 },
            { name: 'editorImages', maxCount: 20 }
            ]), (req, res) => {
                        const fileName = "kindergardenList.js";
                        const pageType = 'partnres';
                        editFiles(req, fileName, pageType, res);
                        });




         const blogPath = path.join(__dirname, 'images', 'blog');
         const projectsPath = path.join(__dirname, 'images', 'projects');
         const aboutPath = path.join(__dirname, 'images', 'about');
         const partnersPath = path.join(__dirname, 'images', 'partners'); 
         console.log(partnersPath)

        // Serwowanie lokalnych plików z blog
        app.use('/images/blog', express.static(blogPath));

        // Serwowanie lokalnych plików z projects
        app.use('/images/projects', express.static(projectsPath));

        // Serwowanie lokalnych plików z projects
        app.use('/images/about', express.static(aboutPath));

        // Serwowanie lokalnych plików z projects
        app.use('/images/partners', express.static(partnersPath));



        app.listen(port, () => {
            console.log(`Serwer działa na http://localhost:${port}/`);
        });

    } catch (err) {
        console.error('Błąd podczas pobierania listy wideo:', err);
        process.exit(1)
    }
};

startServer();

cron.schedule('0 * * * *', async () => {
    console.log('Cron: odświeżam listę wideo:', new Date().toLocaleString());
    try {
        videoList = await getVideoList();
        console.log('Lista wideo została zaktualizowana.');
        console.log('Aktualna lista wideo:', videoList);
    } catch (err) {
        console.error('Błąd przy aktualizacji listy wideo w CRON:', err);
    }
});
