const news = [
    {
        news_link: "#",
        news_img: 'home/images/news-images/0027969_cong-nghe-man-hinh-retina-cua-apple_1600.jpeg',
        news_content: 'Màn hình Retina là gì? Apple ứng dụng màn hình Retina cho thiết bị nào?',
        news_date: '05/08/2024'
    },
    {
        news_link: "#",
        news_img: 'home/images/news-images/0027857_banner iMac T8_Danh mục_1600.jpeg',
        news_content: 'NĂM HỌC MỚI, RINH MÁY MỚI - ƯU ĐÃI ĐỘC QUYỀN DÀNH CHO HỌC SINH SINH VIÊN',
        news_date: '02/08/2024'
    },
    {
        news_link: "#",
        news_img: 'home/images/news-images/0027856_banner Loa sony1 T8_TV_1600.png',
        news_content: 'Chill nhạc cùng Sony, rinh deal "khủng", quà tặng lên đến 2 triệu đồng!',
        news_date: '01/08/2024'
    }
]

createNews();
function createNews() {
    let news_container = document.querySelector('.news');
    // console.log('news ' + news);

    for (let i = 0; i < news.length; i++) {
        let news_content = document.createElement('div');
        news_content.className = 'news-content';

        let news_anchor = document.createElement('a');
        news_anchor.href = news[i].news_link;

        let news_img = document.createElement('img');
        news_img.src = news[i].news_img;

        let news_paragrah = document.createElement('p');
        news_paragrah.innerText = news[i].news_content;

        let news_date = document.createElement('p');
        news_date.className = 'date';
        news_date.innerText = news[i].news_date;

        news_anchor.appendChild(news_img);
        news_anchor.appendChild(news_paragrah);

        news_content.appendChild(news_anchor);
        news_content.appendChild(news_date);

        news_container.appendChild(news_content);
    }
    console.log(news_container);
}