import generateSignedUrl from "../S3.js";
export const imageController = async (req,res) =>{

    const url = await generateSignedUrl();
    console.log("hi");

    console.log(url);

    res.status(200).json({url})
}
// const uploadFile = async (req,res) =>{

// }