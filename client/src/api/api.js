// import axios from 'axios'

import Data from './fakeData'

let fakeData = Data

const currentHero = {
    // id: 'dsfsdfsdfdsfdsfsfsdfssf',
    // nickname: "Superman",
    // real_name: "Clark Kent",
    // origin_description :  "Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His adoptive parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante. To protect his privacy, he changes into a colorful costume and uses the alias 'Superman' when fighting crime. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's supporting characters include his love interest and fellow journalist Lois Lane, Daily Planet photographer Jimmy Olsen and editor-in-chief Perry White. His classic foe is Lex Luthor, who is either a mad scientist or a ruthless businessman, depending on the story.",
    // superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…",
    // catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    // images: [
    //     'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
    //     'https://static.wikia.nocookie.net/marvel_dc/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20180711061148',
    // ]
    id: 'fdsdfsfsdfds t;jelr',
    nickname: 'Batman',
    real_name: "Bat Man",
    origin_description: "Batman's secret identity is Bruce Wayne, a wealthy American industrialist. As a child, Bruce witnessed the murder of his parents, Dr. Thomas Wayne and Martha Wayne, which ultimately led him to craft the Batman persona and seek justice against criminals. He resides on the outskirts of Gotham City in his personal residence, Wayne Manor. Wayne averts suspicion by acting the part of a superficial playboy idly living off his family's fortune and the profits of Wayne Enterprises, his inherited conglomerate.[72][73] He supports philanthropic causes through his nonprofit Wayne Foundation, but is more widely known as a celebrity socialite.[74] In public, he frequently appears in the company of high-status women, which encourages tabloid gossip. Although Bruce Wayne leads an active romantic life, his vigilante activities as Batman account for most of his time",
    superpowers: 'eeeesolar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
    catch_phrase: "Batman",
    poster_image: 'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
    images: [
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://i2.wp.com/batman-news.com/wp-content/uploads/2019/07/Batman-Comic-Generic-07.jpg?fit=1400%2C700&quality=80&strip=info&ssl=1',
        'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://i2.wp.com/batman-news.com/wp-content/uploads/2019/07/Batman-Comic-Generic-07.jpg?fit=1400%2C700&quality=80&strip=info&ssl=1',
        'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://i2.wp.com/batman-news.com/wp-content/uploads/2019/07/Batman-Comic-Generic-07.jpg?fit=1400%2C700&quality=80&strip=info&ssl=1',
        'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://i2.wp.com/batman-news.com/wp-content/uploads/2019/07/Batman-Comic-Generic-07.jpg?fit=1400%2C700&quality=80&strip=info&ssl=1',
        'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg?h=1080&resize=1&w=1920',
        'https://i2.wp.com/batman-news.com/wp-content/uploads/2019/07/Batman-Comic-Generic-07.jpg?fit=1400%2C700&quality=80&strip=info&ssl=1',
    ]
}

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'http://localhost:3000/'
// })

const API = {
    fetchHeroes: ({ pageNumber, pageSize }) => {
        // return instance.get(`heroes?page=${pageNumber}&count=${pageSize}`)
        return fakeData
    },
    getHero: ({ id }) => {
        // return instance.get(`heroes?page=${pageNumber}&count=${pageSize}`)
        return currentHero
    },
    updateHeroData: (data) => {
        // return instance.get(`heroes?page=${pageNumber}&count=${pageSize}`)
        console.log(data);
        return {...currentHero, ...data}
    },
    deleteHero: (data) => {
        // return instance.delete(`hero/${data}`)
        // console.log(data);
        // const newData = fakeData.filter(hero => hero.id !== data)
        // return newData
        fakeData = fakeData.filter(hero=> hero.id !== data)
        return true
    },
    deleteImage: (data) => {
        // return instance.delete(`hero/${data}`)
        // console.log(data);
        // const newData = fakeData.filter(hero => hero.id !== data)
        // return newData
        fakeData = fakeData.filter(hero=> hero.id !== data)
        return true
    },
}

export default API