VIRTUAL BUSINESS CARD

# propelTheoryAssignment

first i have created my user schema and card schema
then i've refer the user in the the card schema as objectId
i've created post and get APIs 
i have also made a seperate validation files where i have written all the 
required validations
used multer to upload multiple files
AWS to create public link

the dependecies i needed were:-{
    "aws-sdk",
    "express",
    "jsonwebtoken",
    "mongoose",
    "multer",
    "nodemon"
  }


this is my output -------------------

{
    "status": true,
    "msg": "Product updated",
    "data": {
        "name": "62cfd2b166f9160d0df7fbc1",
        "designation": "\"HR\"",
        "companyName": "\"viper\"",
        "websiteURL": "\"https://www.youtube.com\"",
        "socialURLs": [
            "[\"https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Ce%7Cfacebook%7C&placement=&creative=550525804791&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1001394929%26loc_physical_ms%3D9300524%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIFy6oXEC2xGHaCkZHTL89YtBkuRLRULQZqV5vW7lk_Qm-JrR4p4XNRoCL54QAvD_BwE\"]"
        ],
        "companyLogo": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/shubham/EbMu7foUEAAvUEp.jpg",
        "_id": "62cfd2c466f9160d0df7fbc3",
        "createdAt": "2022-07-14T08:24:36.187Z",
        "updatedAt": "2022-07-14T08:24:36.187Z",
        "__v": 0
    }
}


