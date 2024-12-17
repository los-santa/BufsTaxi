const express = require('express');
const router = express.Router();

const peopleCount = {};
const locationNames = {
    'NamStation': '남산역',
    'GSvill': '금산빌라(소방서)',
    'BGK': '버거킹앞(외대정문)'
};

router.get('/arrival.html', (req, res) => {
    const pickupLocation = req.query['pickup-location'];
    const arrivalLocation = '대학교'; // 도착지를 학교로 통일
    const key = `${pickupLocation}-${arrivalLocation}`;

    if (!peopleCount[key]) {
        peopleCount[key] = 0;
    }
    peopleCount[key] += 1;

    const pickupLocationName = locationNames[pickupLocation] || '알 수 없음';

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>도착지 확인</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <h1>도착지 확인</h1>
                <p>선택한 출발지는: <span id="pickup-location">${pickupLocationName}</span></p>
                <p>선택한 도착지는: <span id="arrival-location">${arrivalLocation}</span></p>
                <h2>사람 모집 현황</h2>
                <p id="recruitment-status">현재 ${pickupLocationName}에서 ${arrivalLocation}로 가는 사람을 모집 중입니다.</p>
                <p>현재 ${pickupLocationName}에서 ${arrivalLocation}로 가는 사람 수: <span id="people-count">${peopleCount[key]}</span></p>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;