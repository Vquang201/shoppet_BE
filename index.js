// import dotenv from 'dotenv'
// import cors from 'cors'

const express = require("express")
const app = express()

// Enables CORS
const cors = require('cors')
app.use(cors({ origin: true }))
// dotenv.config()

const dogsV1 = [
    {
        id: 1,
        name: "Tini",
        breed: "CHIHUAHUA",
        price: "1000",
        description: "This is a crazy tiny dog with big alien eyes",
        imageUrl:
            "https://images.unsplash.com/photo-1605639156481-244775d6f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 2,
        name: "Butty",
        breed: "CORGI",
        price: "1500",
        description: "This is a cute dog with a heart-shaped butt",
        imageUrl:
            "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 3,
        name: "Pity",
        breed: "PITBULL",
        price: "2500",
        description:
            "A dangerous breed but everyone loves to have one of them cause they look cool",
        imageUrl:
            "https://images.unsplash.com/photo-1571868094976-6af3b50b43bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 4,
        name: "Puggy",
        breed: "PUG",
        price: "1700",
        description:
            "A sad looking dog that actually very energetic and love being cuddled",
        imageUrl:
            "https://images.unsplash.com/photo-1535909339361-ef56e179d637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 5,
        name: "Mally",
        breed: "MALTESE",
        price: "2000",
        description: "A maltese dog",
        imageUrl:
            "https://images.unsplash.com/photo-1508532566027-b2032cd8a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsdGVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 6,
        name: "Dachy",
        breed: "DASCHUND",
        price: "2700",
        description: "A dog looks like a sausage",
        imageUrl:
            "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzY2h1bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 7,
        name: "Ngao",
        breed: "HUSKY",
        price: "2500",
        description: "A dog looks like a wolf",
        imageUrl:
            "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 8,
        name: "Boxy",
        breed: "BOXER",
        price: "4700",
        description: "A dog knows how to fight",
        imageUrl:
            "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 9,
        name: "POODLE",
        breed: "Dogs",
        price: "3200",
        description: "Thanh lịch, tự tin & thông minh là 3 từ mô tả chính xác nhất về giống chó Poodle. Thường xuyên giành chiến thắng trong các cuộc thi Dogshow nhờ vẻ ngoài tuyệt đẹp với bộ lông được cắt tỉa cầu kì. Nhưng ẩn sau đó, bạn sẽ tìm thấy một chú chó gia đình tình cảm, có nguồn gốc lâu đời và cực kì tài năng.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/07/cho-poodle-teacup-mau-trang-cai-9-400x400.png",
    },
    {
        id: 10,
        name: "BICHON",
        breed: "Dogs",
        price: "2500",
        description: "Chó Bichon Frise có nguồn gốc từ nước Pháp. Chó Bichon là kết quả của quá trình lai tạo giữa dòng chó Spaniel Barbet và Poodle. Thời xưa, chó Bichon là vật nuôi cưng chiều của hoàng gia Pháp và Tây Ban Nha. Với bộ lông trắng muốt tuyệt đẹp, sang chảnh được cắt tỉa cầu kỳ, giống chó này đang rất được các bạn trẻ săn lùng.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/06/cho-bichon-trang-cai-7-400x400.png",
    },
    {
        id: 11,
        name: "GOLDEN",
        breed: "Dogs",
        price: "4200",
        description: "Chó Golden có nguồn gốc từ nước Anh, là kết quả của cuộc lai tạo thành công giữa 3 giống chó là: Spaniels, Setters và Newfoundland, Bloodhound. Là một trong những giống chó phổ biến nhất ở Hoa Kỳ.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/05/cho-golden-retriever-400x400.jpg",
    },
    {
        id: 12,
        name: "ALASKA",
        breed: "Dogs",
        price: "4775",
        description: "Alaskan Malamute là giống chó lâu đời nhất trong số các giống chó Bắc Cực. Giống chó này rất lớn, khỏe và cực kỳ ưa nhìn. Đó là một con chó mạnh mẽ, có cơ bắp khỏe mạnh với ngực sâu, đầu rộng và vẻ mặt tự hào. Nó hướng về gia đình và thích ở bên mọi người.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/04/cho-alaska-400x400.jpg",
    }
];

const dogsV2 = [
    {
        id: 13,
        name: "BULLDOG",
        breed: "Dogs",
        price: "3210",
        description: "Bulldog Anh là một giống chó nổi tiếng đến từ vương quốc Anh, hay còn gọi là Chó bò Anh. Bull Anh là giống chó biểu tượng ở Vương quốc Anh. Có tổ tiên là giống chó Ngao hung dữ trên chiến trường. Qua một lịch sử phát triển lâu dài, ngày nay chó Bull Anh đã trở thành thú cưng đáng yêu trong gia đình.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2021/02/cho-Bulldog-dogily-petshop-400x400.jpg",
    },
    {
        id: 14,
        name: "BULLY",
        breed: "Dogs",
        price: "4300",
        description: "Chó Bully hay Bully American (Bully Mỹ) là giống chó vừa mới xuất hiện vào năm 1995 tại Mỹ. Bully được biết đến như hậu duệ của loài chó Pitbull với dáng vẻ đầy cơ bắp, oai vệ.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2020/08/Cho-bully-con-tai-dogily-petshop-23456-400x400.jpg",
    },
    {
        id: 15,
        name: "BECGIE",
        breed: "Dogs",
        price: "3000",
        description: "Chó Becgie (GSD - German Shepherd Dog, Deutscher Schäferhund) là giống chó chăn cừu vô cùng nổi tiếng có xuất thân từ Đức. Nổi tiếng với trí thông minh tuyệt đỉnh, trung thành tuyệt đối, bền bỉ và khả năng đánh hơi tuyệt vời. Becgie Đức là giống chó được nuôi phổ biến thứ 2 và là giống chó nghiệp vụ số 1 thế giới.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2021/04/cho-becgie-gsd-duc-2-thang-tuoi-thuan-chung-8-400x400.jpg",
    }
    ,
    {
        id: 16,
        name: "BEAGLE",
        breed: "Dogs",
        price: "1300",
        description: "Chó Beagle còn được gọi là chó săn thỏ, một loài chó săn “nhỏ mà có võ”. Được lai tạo để săn các loài thú nhỏ như thỏ, chuột, sóc… Beagle tuy có vóc dáng khá nhỏ bé nhưng các giác quan nhạy bén và sự nhanh nhẹn của chúng khó giống chó nào sánh kịp. Ngày nay, giống chó săn thỏ này chủ yếu được nuôi làm thú cưng trong gia đình với tính tình cực kỳ thân thiện và quấn chủ.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/06/cho-beagle-tricolor-duc-4-400x400.png",
    },
    {
        id: 17,
        name: "SCHNAUZER",
        breed: "Dogs",
        price: "2100",
        description: "Chó Schnauzer hay còn gọi là chó sục Đức, chó “ông già”. Đây là một dòng chó đẹp, rất thông minh và dễ thương. Các bạn ấy lanh lợi, hòa đồng và luôn tìm cách mang đến niềm vui cho mọi người.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2022/08/cho-schnauzer-den-trang-6-400x400.png",
    },
    {
        id: 18,
        name: "YORKSHIRE",
        breed: "Dogs",
        price: "1999",
        description: "Chó Yorkshire Terrier là một trong những con chó nhỏ nhất thế giới. Giống chó này có bộ lông dài trải dài trên mặt và từ đáy hộp sọ đến cuối đuôi, trải đều và khá thẳng xuống mỗi bên của cơ thể. Là giống chó đồ chơi phổ biến nhất ở Hoa Kỳ.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2021/05/cho-yorkshire-dogilypetshop-4-400x400.jpg",
    },
    {
        id: 19,
        name: "SAINT BERNARD",
        breed: "Dogs",
        price: "2650",
        description: "Chó Saint Bernard hay còn gọi là “St. Bernhardshund” là một giống chó có nguồn gốc từ Ý và Alps Thụy Sĩ. Nổi tiếng là giống chó với kích thước cơ thể rất lớn. Thời gian đầu Saint Bernard được nuôi với mục đích cứu hộ. Saint Bernard ngày càng phổ biến dùng để thồ hàng, chăn gia súc và bảo vệ một số khu vực quan trọng.",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2020/12/Cho-Saint-bernard-vang-trang-Dogily-Petshop-5-400x400.jpg",
    },
    {
        id: 20,
        name: "BASENJI",
        breed: "Dogs",
        price: "2320",
        description: "Chó Basenji là một giống chó săn đặc biệt đến từ Trung Phi (Congo). Chúng được biết đến là một giống chó không bao giờ sủa, thường được gọi là “Barkless Dog”. Ngoài tên gọi Basenji, giống chó này có có một số tên gọi khác là Chó bụi rậm châu Phi, Ango Angari, chó săn Nyan-Nyan, Bongo, chó sục Kongo, Chó Zande,…",
        imageUrl:
            "https://dogily.vn/wp-content/uploads/2021/09/cho-basenji-khong-sua-nhap-khau-chau-au-4-thang-tuoi-13-400x400.jpg",
    }

]
// api 
const catsV1 = [
    {
        id: 1,
        name: 'Mèo MUNCHKIN',
        breed: 'Meow MeoW',
        description: 'Giống mèo chân ngắn đáng yêu , dễ mến',
        price: 2500,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2020/03/meo-anh-long-dai-de-thuong-400x400.jpg'
    },
    {
        id: 2,
        name: 'Mèo RAGDOLL',
        breed: 'Meow MeoW',
        description: 'mèo RAGDOLL trắng có ít xám',
        price: 1200,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2022/01/ragdoll-dogily-2-400x400.jpg'
    },
    {
        id: 3,
        name: 'Mèo SPHYNX',
        breed: 'Meow MeoW',
        description: 'Mèo SPHYNX nhìn trông dữ nhưng thực sự thì hiền không tưởng',
        price: 1350,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/09/Meo-Sphynx-dogily-petshop-2-400x400.jpg'
    },
    {
        id: 4,
        name: 'Mèo ba tư',
        breed: 'Meow MeoW',
        description: 'Mèo Ba tư (mèo Persian) là giống mèo có nguồn gốc từ xứ sở “nghìn lẻ một đêm” huyền thoại. Giống mèo này có khuôn mặt tròn trịa',
        price: 1000,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2019/12/meo-ba-tu-duc-dogily-3-thang-3-400x400.jpg'
    },
    {
        id: 5,
        name: 'Mèo Xiêm',
        breed: 'Meow MeoW',
        description: 'mèo xiêm lông nâu siêu mượt ',
        price: 850,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/09/meo-xiem-4-400x400.jpg'
    },
    {
        id: 6,
        name: 'Mèo MAINE ',
        breed: 'Meow MeoW',
        description: 'Mèo Maine Coon hay còn gọi là mèo Mỹ lông dài là giống mèo tự nhiên cổ xưa nhất ở Bắc Mỹ. Có nguồn gốc từ bang Maine (Hoa Kỳ) và là biểu tượng của bang này',
        price: 1950,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2020/12/meo-maine-coon-mau-vang-trang-6-thang-tuoi-11-400x400.jpg'
    },
    {
        id: 7,
        name: 'Mèo SCOTTISH',
        breed: 'Meow MeoW',
        description: 'mèo SCOTTISH tai cụt mắt tròn , thân hình nhỏ nhắn',
        price: 1430,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2022/07/meo-ald-trang-tai-cup-cai-8-400x400.png'
    },
    {
        id: 8,
        name: 'Mèo BENGAL',
        breed: 'Meow MeoW',
        description: 'Mèo Bengal hay còn gọi là mèo báo, mèo vằn hổ hay còn được ví von là “Rolls Royce” của thế giới thú cưng. Tại Việt Nam',
        price: 1110,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2022/05/meo-bengal-duc-1-400x400.png'
    },
    {
        id: 9,
        name: 'Mèo TOYGER',
        breed: 'Meow MeoW',
        description: 'Mèo Toyger với vằn hổ ấn tượng. Toyger được lai tạo để giống với những con hổ trong tự nhiên nhất',
        price: 999,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/05/meo-toyger-duoc-nhan-giong-tu-bengal-400x400.jpg'
    },
    {
        id: 10,
        name: 'Mèo BICOLOR',
        breed: 'Meow MeoW',
        description: 'Mèo BICOLOR trên nâu dưới trắng',
        price: 1850,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2022/03/aln-tai-cup-bicolor-duc-3-400x400.png'
    },
    {
        id: 11,
        name: 'Mèo CARACAL',
        breed: 'Mèo linh miêu ',
        description: 'Mèo Caracal hay còn được biết tới với cái tên linh miêu tai đen, mãn rừng. Giống mèo hoang dã phân bố chủ yếu ở Ấn Độ, Pakistan, Trung Đông và Châu Phi. Vẻ ngoài của chúng vô cùng ấn tượng, thu hút mọi người ngay từ cái nhìn đầu tiên. Cùng với đó là tính cách hiền lành',
        price: 3800,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/07/tim-hieu-cac-thong-tin-chi-tiet-ve-giong-meo-caracal-.jpg'
    },
    {
        id: 12,
        name: 'Mèo ABYSSINIAN ',
        breed: 'Meow MeoW',
        description: 'Mèo Abyssinian là một trong những giống mèo cảnh có lịch sử lâu đời nhất. Loài mèo gợi nhớ cho chúng ta nhớ tới mèo Ai Cập cổ đại trên các bức phù điêu cổ. Không chỉ nổi tiếng với vẻ ngoài sang trọng, tính cách trung thành, giống mèo này còn có tuổi thọ cao. Hãy cùng Dogily Petshop tìm hiểu thông tin chi tiết về mèo khi có nhu cầu mua thú cưng.',
        price: 999,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/07/giong-meo-abyssinian-co-ve-ngoai-sang-trong.jpg'
    }
]

const catsV2 = [
    {
        id: 13,
        name: 'Mèo BIRMAN',
        breed: 'Meow Miến Điện',
        description: 'Mèo Birman Miến Điện còn được biết tới với tên gọi khác là mèo Thần Miến Điện, mèo Burmese, mèo Myanmar.  Chú mèo có vẻ ngoài kiêu sa, phong thái quý tộc nhưng tính cách vô cùng ngọt ngào. Khi nuôi giống mèo này trong nhà',
        price: 1550,
        imageUrl: 'https://dogily.vn/wp-content/uploads/2021/07/meo-birman-mien-dien-co-ve-ngoai-sang-chanh-dam-chat-quy-toc.jpg'
    },
    {
        id: 14,
        name: 'Mèo CHINCHILLA ',
        breed: 'Meow MeoW',
        description: 'Đây là giống mèo cảnh được lai tạo giữa mèo Ba Tư với một giống mèo bản địa của Nam Phi. Đặc điểm của mèo Chichilla được thừa hưởng gen lông dài của mèo ba tư. Nhưng lại có đôi mắt màu xanh ngọc lục bảo hoang dã của mèo Nam Phi.',
        price: 500,
        imageUrl: 'https://th.bing.com/th/id/OIP.gPK9Y1_la8stHlm6KXBGSQHaFj?pid=ImgDet&rs=1'
    },
    {
        id: 15,
        name: 'Mèo HIMALAYA',
        breed: 'Meow MeoW',
        description: 'Giống mèo này là sản phẩm nhân giống giữa mèo Ba tư và mèo Xiêm. Được lai tạo đầu tiên ở Hoa Kỳ. Chúng sở hữu bộ lông dài tuyệt đẹp của mèo Ba Tư và màu sắc khá lạ mắt của mèo Xiêm.',
        price: 880,
        imageUrl: 'https://mypet.vn/wp-content/uploads/2021/06/Himalayan-lounging-1.jpg'
    },
    {
        id: 16,
        name: 'Mèo Mướp ',
        breed: 'Meow MeoW',
        description: 'Một giống mèo của nước Việt Nam và gần gũi mỗi gia đình Việt, mèo Mướp với tính cách tinh ranh, nghịch ngợm nhưng thông minh làm cho nhiều gia đình chọn nuôi nó trong nhà.',
        price: 1223,
        imageUrl: 'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241219494204.jpg'
    },
    {
        id: 17,
        name: 'Mèo OCICAT ',
        breed: 'Meow MeoW',
        description: 'Mèo Ocicat là giống mèo có nguồn gốc Hoa Kỳ. Được lai giống và phát triển thành công qua cuộc giao phối giữa 2 giống mèo là Abyssinians và mèo Xiêm vào năm 1965. Cũng trong năm đó, giống mèo này được đặt tên là mèo Tonga và chỉ đến năm 1980 mới chính thức được đổi tên thành mèo Ocicat.',
        price: 1000,
        imageUrl: 'https://petmaster.vn/petroom/wp-content/uploads/2020/06/2-16.jpg'
    }
]

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`sever is runing with host`)
})


app.get("/v1/dogs", (req, res) => {
    res.status(200).json(dogsV1)
    // gửi yêu cầu với đường dẫn http://localhost:8080/v1/dogs
});

app.get("/v2/dogs", (req, res) => {
    res.status(200).json(dogsV2)
});

app.get("/v1/cats", (req, res) => {
    res.status(200).json(catsV1)
})

app.get("/v2/cats", (req, res) => {
    res.status(200).json(catsV2)
})








