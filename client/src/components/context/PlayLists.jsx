import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
const PlayListsContext = createContext();


const PlayListsProvider = ({children})=>{
    const [PlayLists , setPlayLists] = useState([
        {
            id: 1,
            name: "Bad Decisions",
            image: "https://pbs.twimg.com/media/FYIwVwIUIAEVfnn.jpg",
           artist: "BTS",
           genre: "kpop",
            year: "2022",
           song_path: "/assets/songs-kpop/BTS_Bad_Decisions.mp3"
        },
        {
            id: 2,
            name: "Butter",
            image: "https://pbs.twimg.com/media/E-5eZ1eWYAAwLIA?format=jpg&name=4096x4096",
           artist: "BTS",
           genre: "kpop",
            year: "2021",
           song_path: "/assets/songs-kpop/BTS_Butter.mp3"
        },
        {
            id: 3,
            name: "Dynamite",
            image: "https://pbs.twimg.com/media/EfeBiYbVAAAhBIe.jpg:large",
           artist: "BTS",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/BTS_Dynamite.mp3"
        },
        {
            id: 4,
            name: "Euphoria",
            image: "https://pbs.twimg.com/media/FEEiTLqVEAYlOPb.jpg:large",
           artist: "Jungkook",
           genre: "kpop",
            year: "2021",
           song_path: "/assets/songs-kpop/BTS_Euphoria.mp3"
        },
        {
            id: 5,
            name: "For Youth",
            image: "https://ih1.redbubble.net/image.4563939613.6462/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
           artist: "BTS",
           genre: "kpop",
            year: "2022",
           song_path: "/assets/songs-kpop/BTS_For_Youth.mp3"
        },
        {
            id: 6,
            name: "Go Go",
            image: "https://i.pinimg.com/originals/99/d9/c4/99d9c4b51e178bed33c8337f1092f3b6.jpg",
           artist: "BTS",
           genre: "kpop",
            year: "2017",
           song_path: "/assets/songs-kpop/BTS_Go_Go.mp3"
        },
        {
            id: 7,
            name: "Left And Right",
            image: "https://i.pinimg.com/736x/37/39/05/37390514d5028600ddf7dfc89c16afc5.jpg",
           artist: "Jungkook",
           genre: "kpop",
            year: "2022",
           song_path: "/assets/songs-kpop/BTS_LeftAndRight.mp3"
        },
        {
            id: 8,
            name: "savage Love",
            image: "https://a10.gaanacdn.com/images/albums/9/3440009/crop_480x480_3440009.jpg",
           artist: "BTS",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/BTS_Savage_Love.mp3"
        },
        {
            id: 9,
            name: "Save Me",
            image: "https://i.pinimg.com/originals/6a/56/76/6a5676633658526654159d072f0fc0e0.jpg",
           artist: "BTS",
           genre: "kpop",
            year: "2016",
           song_path: "/assets/songs-kpop/BTS_Save_Me.mp3"
        },
        {
            id: 10,
            name: "Cupid",
            image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Fifty_Fifty_-_The_Beginning_Cupid.png",
           artist: "Fifty Fifty",
           genre: "kpop",
            year: "2023",
           song_path: "/assets/songs-kpop/Cupid_i_Gave_A_Second_Chance.mp3"
        },
        {
            id: 11,
            name: "Flower",
            image: "https://hips.hearstapps.com/hmg-prod/images/jisoo-flower-3-6426f2bbefce8.jpg?crop=0.545xw:1.00xh;0.341xw,0&resize=1200:*",
           artist: "Jisso",
           genre: "kpop",
            year: "2023",
           song_path: "/assets/songs-kpop/Flower.mp3"
        },
        {
            id: 12,
            name: "Gangnam Style",
            image: "https://upload.wikimedia.org/wikipedia/en/a/ad/Gangnam_Style_Official_Cover.png",
           artist: "Psy",
           genre: "kpop",
            year: "2012",
           song_path: "/assets/songs-kpop/Gangnam_Style_PSY.mp3"
        },
        {
            id: 13,
            name: "Stay With Me",
            image: "https://upload.wikimedia.org/wikipedia/en/5/52/Chanyeol-Punch-Goblin-OST-Part-1.jpg",
           artist: "Chanyeol",
           genre: "kpop",
            year: "2016",
           song_path: "/assets/songs-kpop/Goblin-Stay-With-Me.mp3"
        },
        {
            id: 14,
            name: "How You Like That",
            image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Blackpink_-_How_You_Like_That.png",
           artist: "Blackpink",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/How_You_Like_That_BlackPink.mp3"
        },
        {
            id: 15,
            name: "Zoom",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f0/Jessi_-_Zoom.png",
           artist: "Jessi",
           genre: "kpop",
            year: "2022",
           song_path: "/assets/songs-kpop/I_See_You_Lookin_At_My_Pic_Jessi.mp3"
        },
        {
            id: 16,
            name: "Ice Cream",
            image: "https://upload.wikimedia.org/wikipedia/en/d/db/Blackpink_%26_Selena_Gomez_-_Ice_Cream.png",
           artist: "Blackpink",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/Ice_Cream_BLACKPINK_Selena_Gomez.mp3"
        },
        
        {
            id: 17,
            name: "Lalisa",
            image: "https://upload.wikimedia.org/wikipedia/en/2/22/Lisa_-_Lalisa.png",
           artist: "Lisa",
           genre: "kpop",
            year: "2021",
           song_path: "/assets/songs-kpop/Lalisa.mp3"
        },
        {
            id: 18,
            name: "Money",
            image: "https://whizbliz.com/wp-content/uploads/2022/03/lisa_main_16.jpg",
           artist: "Lisa",
           genre: "kpop",
            year: "2021",
           song_path: "/assets/songs-kpop/LISA_MONEY_(Cover)_AiSh.mp3"
        },
        {
            id: 19,
            name: "Pretty Savage",
            image: "https://i.ytimg.com/vi/Dpzk3ekE52I/maxresdefault.jpg",
           artist: "Blackpink",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/Pretty_Savage_BLACKPINK.mp3"
        },
        {
            id: 20,
            name: "No Other",
            image: "https://m.media-amazon.com/images/M/MV5BMDc2Y2Y4NzItZGYyZi00OTUyLTg0YjYtODVkYTRjZmRjMGYwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjk4ODMyMDI@.V1.jpg",
           artist: "super Junior",
           genre: "kpop",
            year: "2020",
           song_path: "/assets/songs-kpop/Super_Junior_No_Other.mp3"
        },
        {
            id:21,
            name:" Chaand Baaliyan",
            image:"https://www.pagalworld.tv/GpE34Kg9Gq/113604/148955-chaand-baaliyan-aditya-a-mp3-song-300.jpg",
           artist:"Aditya A",
           genre:"indie",
            year:"2020",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:22,
            name:"Choo lo",
            image:"https://hindi3.djpunjab.app/cover/-TmtZD_P-v1aDzBQuj8_3w==/aalas-ka-pedh-cover-image.jpg",
           artist:"local artist",
           genre:"indie",
            year:"2015",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:23,
            name:"Gul",
            image:"https://pagalworldl.com/uploads/thumb/sft37/18327_4.jpg",
           artist:"Anuv Jain",
           genre:"indie",
            year:"2022",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:24,
            name:"MERA JO SAFAR HAI",
            image:"https://www.pagalworld.tv/GpE34Kg9Gq/113603/150355-mera-jo-safar-hai-mp3-song-300.jpg",
           artist:"Mohit Goyal",
           genre:"indie",
            year:"2014",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:25,
            name:"Ram Siya Ram",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft134/66697_4.jpg",
           artist:"Sachet Tandon,",
           genre:"indie",
            year:"2023",
           song_path:"/assets/Songs-indie/"
    
        },{
            id:26,
            name:"Tere Vaaste",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft134/66738_4.jpg",
           artist:"Varun Jain",
           genre:"indie",
            year:"",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:27,
            name:"Maan Meri Jaan",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft130/64630_4.jpg",
           artist:"King",
           genre:"indie",
            year:"2022",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:28,
            name:"_ Heer Ranjha",
            image:"https://www.pagalworld.tv/GpE34Kg9Gq/113604/150579-heer-ranjha-rito-riba-mp3-song-300.jpg",
           artist:"Rajat Nagpal",
           genre:"indie",
            year:"2017",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:29,
            name:"Aankhon Se Batana",
            image:"https://pagaliworld.com/siteuploads/thumb/sft14/6767_4.jpg",
           artist:"Dikshant",
           genre:"indie",
            year:"2022",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:30,
            name:" Baarishein",
            image:"https://www.pagalworld.tv/GpE34Kg9Gq/14670/118491-baarishein-atif-aslam-mp3-song-300.jpg",
           artist:"Atif Aslam",
           genre:"indie",
            year:"2014",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:31,
            name:"Kesariya",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft14/6591_4.jpg",
           artist:"Arijit Singh",
           genre:"indie",
            year:"2022",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:32,
            name:"Raatan Lambiyan",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg",
           artist:"Jubin Nautiyal",
           genre:"indie",
            year:"2021",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:33,
            name:"Kahani Suno ",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft131/65497_4.jpg",
           artist:"Kaifi Khalil",
           genre:"indie",
            year:"2023",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:34,
            name:"Deewane Hum Nahi Hote",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft132/65986_4.jpg",
           artist:"Aditya Yadav",
           genre:"indie",
            year:"2023",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:35,
            name:"Dil Galti Kar Baitha Hai ",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft8/3809_4.jpg",
           artist:"Jubin Nautiyal",
           genre:"indie",
            year:"2021",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:36,
            name:"Deewane Hum Nahi Hote",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft132/65986_4.jpg",
           artist:"Aditya Yadav",
           genre:"indie",
            year:"2023",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:37,
            name:"Kalank",
            image:"https://pagaliworld.com/siteuploads/thumb/sft26/12590_4.jpg",
           artist:"Arijit Singh",
           genre:"indie",
            year:"2019",
           song_path:"/assets/Songs-indie/" 
         },
        {
            id:38,
            name:"Raatan Lambiyan",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg",
           artist:"Jubin Nautiyal",
           genre:"indie",
            year:"2021",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:39,
            name:"Kahani Suno ",
            image:"https://www.pagalworld.com.se/siteuploads/thumb/sft131/65497_4.jpg",
           artist:"Kaifi Khalil",
           genre:"indie",
            year:"2023",
           song_path:"/assets/Songs-indie/"
    
        },
        {
            id:40,
            name:"zara zara",
            image:"https://pagaliworld.com/siteuploads/thumb/sft3/1188_4.jpg",
           artist:"JalRaj",
           genre:"indie",
            year:"2012",
           song_path:"/assets/Songs-indie/"
    
        },
            {
                id: 41,
                name: "Zehnaseeb",
                image: "https://i.scdn.co/image/ab67616d0000b2732025db071cd9dd7e8023e01e",
               artist: "Shekhar Ravjiani, Chinmayi",
               genre: "romantic",
                year: "2014",
               song_path: "/assets/Songs-Romantic/Zehnaseeb.mp3"
            },
            {
                id: 42,
                name: "Aahista Aahista",
                image: "https://a10.gaanacdn.com/images/albums/1/5970001/crop_480x480_5970001.jpg",
               artist: "Saaj Bhatt",
               genre: "romantic",
                year: "2023",
               song_path: "/assets/Songs-Romantic/Aahista_Aahista.mp3"
            },
            {
                id: 43,
                name: "Bekhayali",
                image: "https://c.saavncdn.com/608/Bekhayali-From-Kabir-Singh--Hindi-2019-20190524024538-500x500.jpg",
               artist: "Sachet Tandon",
               genre: "romantic",
                year: "2019",
               song_path: "/assets/Songs-Romantic/Bekhayali.mp3"
            },
            {
                id: 44,
                name: "Humko Humise Chura Lo",
                image: "https://c.saavncdn.com/104/Mohabbatein-Hindi-2000-20190329182220-500x500.jpg",
               artist: "Lata Mangeshkar, Udit Narayan",
               genre: "romantic",
                year: "2014",
               song_path: "/assets/Songs-Romantic/HumkoHumiseChuraLo.mp3"
            },
            {
                id: 45,
                name: "Dheere Dheere",
                image: "https://i.ytimg.com/vi/nCD2hj6zJEc/maxresdefault.jpg",
               artist: "Honey Singh",
               genre: "romantic",
                year: "2015",
               song_path: "/assets/Songs-Romantic/DheereDheere.mp3"
            },
            {
                id: 46,
                name: "Fitoor",
                image: "https://c.saavncdn.com/188/Shamshera-Hindi-2022-20220707094545-500x500.jpg",
               artist: "Arijit Singh, Neeti Mohan",
               genre: "romantic",
                year: "2022",
               song_path: "/assets/Songs-Romantic/Fitoor.mp3"
            },
            {
                id: 47,
                name: "Haareya",
                image: "https://c.saavncdn.com/274/Meri-Pyaari-Bindu-Hindi-2017-20190329150334-500x500.jpg",
               artist: "Arijit Singh",
               genre: "romantic",
                year: "2017",
               song_path: "/assets/Songs-Romantic/Haareya.mp3"
            },
            {
                id: 48,
                name: "Halki Si Barsaat",
                image: "https://c.saavncdn.com/941/Halki-Si-Barsaat-Hindi-2022-20220606140806-500x500.jpg",
               artist: "Saaj Bhatt",
               genre: "romantic",
                year: "2022",
               song_path: "/assets/Songs-Romantic/HalkiSiBarsaat.mp3"
            },
            {
                id: 49,
                name: "Itni Si Baat",
                image: "https://i1.sndcdn.com/artworks-000179580652-qskijz-t500x500.jpg",
               artist: "Arijit Singh",
               genre: "romantic",
                year: "2016",
               song_path: "/assets/Songs-Romantic/ItniSiBaat.mp3"
            },
            {
                id: 50,
                name: "Maan Meri Jaan",
                image: "https://i.scdn.co/image/ab67616d0000b2735e62a28bb43adaabfa7a7d39",
               artist: "King",
               genre: "romantic",
                year: "2022",
               song_path: "/assets/Songs-Romantic/MaanMeriJaan.mp3"
            },
            {
                id: 51,
                name: "Samjhawan",
                image: "https://c.saavncdn.com/540/Humpty-Sharma-Ki-Dulhania-Hindi-2014-20190618095042-500x500.jpg",
               artist: "Arijit Singh, Shreya Ghoshal",
               genre: "romantic",
                year: "2014",
               song_path: "/assets/Songs-Romantic/Main-Tenu-Samjhawan-Ki.mp3"
            },
            {
                id: 52,
                name: "Duniyaa",
                image: "https://c.saavncdn.com/748/Duniyaa-From-Luka-Chuppi--Hindi-2019-20190222104011-500x500.jpg",
               artist: "Dhvani Bhanushali, Akhil",
               genre: "romantic",
                year: "2019",
               song_path: "/assets/Songs-Romantic/Duniyaa.mp3"
            },
            {
                id: 53,
                name: "Sawaar Loon",
                image: "https://c.saavncdn.com/048/Lootera-2013-500x500.jpg",
               artist: "Monali Thakur",
               genre: "romantic",
                year: "2013",
               song_path: "/assets/Songs-Romantic/SawaarLoon.mp3"
            },
            {
                id: 54,
                name: "Raatan Lambiyan",
                image: "https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg",
               artist: "Jubin Nautiyal, Tanishk Bagchi, Asees Kaur",
               genre: "romantic",
                year: "2021",
               song_path: "/assets/Songs-Romantic/RaatanLambiyan.mp3"
            },
            {
                id: 55,
                name: "Sanam Re",
                image: "https://c.saavncdn.com/829/Sanam-Re-Hindi-2015-500x500.jpg",
               artist: "Arijit Singh",
               genre: "romantic",
                year: "2016",
               song_path: "/assets/Songs-Romantic/SanamRe.mp3"
            },
            {
                id: 56,
                name: "Tere Hawaale",
                image: "https://c.saavncdn.com/119/Tere-Hawaale-From-Laal-Singh-Chaddha-Hindi-2022-20220804093945-500x500.jpg",
               artist: "Arijit Singh",
               genre: "romantic",
                year: "2022",
               song_path: "/assets/Songs-Romantic/TereHawaale.mp3"
            },
            {
                id: 57,
                name: "Tu Chahiye",
                image: "https://i1.sndcdn.com/artworks-000121414075-hm69nd-t500x500.jpg",
               artist: "Atif Aslam",
               genre: "romantic",
                year: "2015",
               song_path: "/assets/Songs-Romantic/TuChahiye.mp3"
            },
            {
                id: 58,
                name: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
                image: "https://i1.sndcdn.com/artworks-f48j8UFVEcQIocrq-sHMNbw-t500x500.jpg",
               artist: "Arijit Singh",
               genre: "romantic",
                year: "2023",
               song_path: "/assets/Songs-Romantic/TuHaiToMujhePhirAurKyaChahiye.mp3"
            },
            {
                id: 59,
                name: "Tujh Mein Rab Dikhta Hai",
                image: "https://c.saavncdn.com/344/Rab-Ne-Bana-Di-Jodi-Hindi-2008-500x500.jpg",
               artist: "Jay Kadn,Roopkumar Rathod",
               genre: "romantic",
                year: "2013",
               song_path: "/assets/Songs-Romantic/TujhMeinRabDikhtaHai.mp3"
            },{
                id: 60,
                name: "Ishq Bulaava",
                image: "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/lV3dlBaL3R/size_l.jpg",
               artist: "Shipra Goyal, Vishal-Shekhar",
               genre: "romantic",
                year: "2017",
               song_path: "/assets/Songs-Romantic/IshqBulaava.mp3"
            },
            {
                id: 61,
                name: "1234",
                image: "https://www.pagalworld.tv/GpE34Kg9Gq/8146/thumb-chennai-express-2013-190kbps-300.jpg",
               artist: "Vishal Dadlani Hamsika Iyer",
               genre: "travel",
                year: "2013",
               song_path: "/assets/Songs-travel/"
    
            },
            {
                id:62,
                name:"Aaja_We_Mahiya",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/7709/thumb-imran-khan-unforgettable-320kbps1-300.jpg",
               artist:"Imran Khan ",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:63,
                name:"Amplifier",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/7709/thumb-imran-khan-unforgettable-320kbps1-300.jpg",
               artist:"Imran Khan ",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:64,
                name:"Bewafa",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/7709/thumb-imran-khan-unforgettable-320kbps1-300.jpg",
               artist:"Imran Khan ",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:65,
                name:"Havana",
                image:"https://pagalworldi.com/siteuploads/thumb/sft6/2594_4.jpg",
               artist:"Camila Cabello ",
               genre:"travel",
                year:"2021",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:66,
                name:"On-My-Way",
                image:"https://www.mp3saavan.com/wp-content/uploads/2022/05/On-My-Way-mp3-image-300x300.jpg",
               artist:"Alan Walker",
               genre:"travel",
                year:"2019",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:67,
                name:"Shape-of-You",
                image:"https://pagalworldl.com/uploads/thumb/sft37/18180_4.jpg",
               artist:"Ed Sheeran",
               genre:"travel",
                year:"2017",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:68,
                name:"Gangnam_Style",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/7479/thumb-gangnam-style-psy-4-300.jpg",
               artist:"PSY",
               genre:"travel",
                year:"2015",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:69,
                name:"Unstoppable",
                image:"https://pagaliworld.com/siteuploads/thumb/sft8/3750_4.jpg",
               artist:"Sia",
               genre:"travel",
                year:"2021",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:70,
                name:"Safari",
                image:"https://pagaliworld.com/siteuploads/thumb/sft7/3066_4.jpg",
               artist:"Serena",
               genre:"travel",
                year:"2021",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:71,
                name:"Lamborghini",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/14671/118551-lamborghini-chalai-janiyo-mp3-song-300.jpg",
               artist:"The Doorbeen",
               genre:"travel",
                year:"2020",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:72,
                name:"Why_This_Kolaveri_ Di",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/6514/thumb-new-specail-songs-2012-300.jpg",
               artist:"Dhanush",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:73,
                name:"Haye Mera Dil",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/7395/thumb-2012-yo-yo-honey-singh-300.jpg",
               artist:"Alfaaz",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
    
            {
                id:74,
                name:"Urvashi",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/14497/117208-urvashi-mp3-song-300.jpg",
               artist:"honey Singh",
               genre:"travel",
                year:"2019",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:75,
                name:"Chammak_Challo",
                image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Ra-one-chammak-challo.jpg/330px-Ra-one-chammak-challo.jpg",
               artist:"Akon",
               genre:"travel",
                year:"2013",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:76,
                name:"Muqabla",
                image:"https://www.pagalworld.us/_big/street-dancer-3d-2020-250.jpg",
               artist:"Sachin–Jigar, Tanishk Bagchi",
               genre:"travel",
                year:"2020",
               song_path:"/assets/Songs-travel/"
            },
            {
                id:77,
                name:"Pritam_Pyaare",
                image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2077833%2F&psig=AOvVaw24LNdc-tDESW_6brEgOzH6&ust=1687589054409000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDnjaTl2P8CFQAAAAAdAAAAABAE",
               artist:"Mamta Sharma",
               genre:"travel",
                year:"2012",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:78,
                name:"Pungi",
                image:"https://www.pagalworld.us/_big/default.jpg",
               artist:"Mika Singh",
               genre:"travel",
                year:"2013",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:79,
                name:"Tum_Hi_Ho",
                image:"https://www.pagalworld.tv/GpE34Kg9Gq/110675/thumb-cocktail-2012-2-300.jpg",
               artist:"Neeraj Shridhar",
               genre:"travel",
                year:"2011",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id:80,
                name:"Tumse Milke Dilka Jo Haal",
                image:"https://www.pagalworld.us/_big/main-hoon-na-2004-250.jpg",
               artist:"Sonu Nigam",
               genre:"travel",
                year:"2004",
               song_path:"/assets/Songs-travel/"
    
            },
            {
                id: 81,
                name: "Ram Siya Ram",
                image: "https://i1.sndcdn.com/artworks-Lgdaig9D73SzDpv3-RvGJJQ-t500x500.jpg",
               artist: "Sachet Tandon",
               genre: "devotional",
                year: "2021",
               song_path: "./assets/Songs-Devotional/RamSiyaRam.mp3"
            },
            {
                id: 82,
                name: "Bolo Har Har",
                image: "https://www.india.com/wp-content/uploads/2016/09/shi.jpg",
               artist: "Badshah",
               genre: "devotional",
                year: "2016",
               song_path: "./assets/Songs-Devotional/BoloHarHar.mp3"
            },
            {
                id: 83,
                name: "Tum Asha Vishwas Humara",
                image: "https://dns2.pendusaab.com/thumb/1046001.jpg",
               artist: "lata Mangeshkar",
               genre: "devotional",
                year: "1982",
               song_path: "./assets/Songs-Devotional/TumAsha.mp3"
            },
            {
                id: 84,
                name: "Shri Krishna Govind Hare",
                image: "https://c.saavncdn.com/555/Shri-Krishna-Govind-Hare-Murari-Zee-Music-Devotional--Hindi-2019-20190117113152-500x500.jpg",
               artist: "Jubin Nautiyal",
               genre: "devotional",
                year: "2020",
               song_path: "./assets/Songs-Devotional/ShriKrishna.mp3"
            },
            {
                id: 85,
                name: "Deva Shree Ganesha",
                image: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/0c7860ad2ab6962612e59cdfc6c4cd44_500x500.jpg",
               artist: "Ajay-Atul",
               genre: "devotional",
                year: "2013",
               song_path: "./assets/Songs-Devotional/ShreeGanesha.mp3"
            }
            ,
            {
                id: 86,
                name: "Radhe Radhe",
                image: "https://rukminim1.flixcart.com/image/850/1000/khcb7gw0/sticker/3/k/y/radha-krishna-with-radhe-radhe-wall-sticker-medium-61-radha-original-imafxdz6bqvnh6cv.jpeg?q=90",
               artist: "Hansraj Raghuwanshi",
               genre: "devotional",
                year: "2022",
               song_path: "./assets/Songs-Devotional/RadheRadhe.mp3"
            }
            ,
            {
                id: 87,
                name: "Om Namah Shivaay",
                image: "https://images.herzindagi.info/image/2023/Feb/lord-shiva-mantra-om-namah-shivay.jpg",
               artist: "Anuradha Paudwal",
               genre: "devotional",
                year: "2022",
               song_path: "./assets/Songs-Devotional/OmNamah.mp3"
            },
            {
                id: 88,
                name: "Om Jai Jagdish Hare",
                image: "https://c.saavncdn.com/728/Om-Jai-Jagdish-Hare-Aarti-Hindi-2022-20220225182219-500x500.jpg",
               artist: "Anuradha Paudwal",
               genre: "devotional",
                year: "2011",
               song_path: "./assets/Songs-Devotional/OmJai.mp3"
            }
            ,
            {
                id: 89,
                name: "Namo Namo",
                image: "https://i.ytimg.com/vi/kwM2ApskJy4/maxresdefault.jpg",
               artist: "Amit Trivedi",
               genre: "devotional",
                year: "2020",
               song_path: "./assets/Songs-Devotional/namonamo.mp3"
            },
            {
                id: 90,
                name: "Maa ke Barabar Koi Nahi",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP4XOO3kUCUqxMp8ONQa68qXoAdUQj_0hGllIPuPkwub-SuSW3nDYhgihL_L5wYxwRqlZrTMmmEguHKZAO9kF2I6Uiy1d1R1y5M8OwT75lZ5CR5hgWlREbtZc3b4R57tFAhVc-Z1BxFjX5XnEzC9o_-oYPx_ZBpo2Y3WP8xOYqUuAjNvPFHWpF1aTrLg/s1080/png_20230404_200911_0000.png",
               artist: "Jubin Nautiyal",
               genre: "devotional",
                year: "2021",
               song_path: "./assets/Songs-Devotional/Maa.mp3"
            },
            {
                id: 91,
                name: "Hanuman Chalisa",
                image: "https://panotbook.com/wp-content/uploads/2021/03/Hanuman-Chalisa-In-Marathi.jpg",
               artist: "Gulshan Kumar",
               genre: "devotional",
                year: "2010",
               song_path: "./assets/Songs-Devotional/HanumanChalisa.mp3"
            }
            ,
            {
                id: 92,
                name: "Govind Bolo",
                image: "https://c.saavncdn.com/696/Govind-Bolo-Hindi-2020-20200519234001-500x500.jpg",
               artist: "Jubin Nautiyal",
               genre: "devotional",
                year: "2019",
               song_path: "./assets/Songs-Devotional/GovindBolo.mp3"
            }
            ,
            {
                id: 93,
                name: "Mai Hai Naa",
                image: "https://c.saavncdn.com/440/Maai-Hai-Na-Hindi-2023-20230318191542-500x500.jpg",
               artist: "Jubin Nautiyal",
               genre: "devotional",
                year: "2023",
               song_path: "./assets/Songs-Devotional/MaaiHaiNa.mp3"
            }
            
    
    ]);
    return (
        <PlayListsContext.Provider value={[PlayLists,setPlayLists]}>
            {children}
        </PlayListsContext.Provider>
    );
    
}
const usePlayLists =()=>useContext(PlayListsContext)
export {usePlayLists,PlayListsProvider}
