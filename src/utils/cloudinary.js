import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!LockFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded sucessfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the file from localStorage which is saved temporarily as the upload got failed
        return null;
    }
}
    

export {uploadOnCloudinary}

