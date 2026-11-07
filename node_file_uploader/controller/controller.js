const query=require('../prisma/queries.js');
const bcrypt = require("bcryptjs");
const { validationResult, matchedData } = require("express-validator");
const {cloudinary}=require('../cloudinary/cloudinary_config.js');


async function loginGET(req,res){
    if(req.user){
        const directories= await query.directoriesGET(req.user.id);
        res.render('login', {
            user: req.user,
            directories: directories
        });
    }
    else{
        res.render('login', {
            user: req.user,
        });
    }
}

function signUpGET(req,res){
    res.render('sign-up', {user:req.user});
}

async function signUpPOST(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).render("sign-up", {
        errors: errors.array(),
      });
    }
    const { username, password } = matchedData(req);
    const hashedPassword=await bcrypt.hash(password, 10);
    await query.insertData(username,hashedPassword);
    res.render('login', {user:req.user});
}

async function addDirectoryPOST(req,res) {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).render("login", {
        errors: errors.array(),
      });
    }
    await query.addDirectory(req.body.directoryName, req.user.id);
    res.redirect('/');
}

async function filesGET(req,res){
    if(req.user && req.user.username === req.params.user){
        const directories= await query.directoriesGET(req.user.id);
        const selectedDirectory=await query.findSelectedDirectory(req.params.directory, req.user.id); 
        const files=await query.filesGET(selectedDirectory.id);        
            
        res.render('login', { 
            user: req.user, 
            directories: directories,
            files: files,
            params: req.params
        });
    }
    else{
        res.redirect('/')
    }
    
}

async function filesPOST(req,res) {
    try {
        req.files.map(async file=>{
            const result= await cloudinary.uploader.upload(file.path, {
            folder: 'project'
            });
            console.log(result);
            
            const fileType=file.originalname.split(".").pop();
            const selectedDirectory=await query.findSelectedDirectory(req.params.dirId, req.user.id);
            const fileName=file.originalname.split('.').slice(0, -1).join('.').replace(/\s+/g, '').replace(/[^a-zA-Z0-9-_]/g, '');
            const imageLink=result.url.replace(/\.[^.]+$/, ".png");
            const downloadLink=cloudinary.url(result.public_id, {
                flags: "attachment:"+fileName
            })
            
            await query.filesInsert(fileName, fileType, selectedDirectory.id, imageLink, downloadLink, result.bytes, result.public_id);
        })
        res.redirect(req.get('referer'));
    }
    catch (error) {
        console.log(error);
    }
}

async function fileDeletePOST(req,res){
    const publicID=req.params.folder+'/'+req.params.publicID;
    const result=await cloudinary.uploader.destroy(publicID, (err)=>{
        if(err){
            console.log(err);
        }
    })
    await query.deleteFile(publicID);

    res.redirect(req.get('referer'));
}

module.exports={loginGET,signUpGET,signUpPOST,addDirectoryPOST,filesGET,filesPOST, fileDeletePOST}