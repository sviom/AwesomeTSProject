
/**
 * 랜덤한 숫자 받기
 * @param max_value 원하는 최대값
 * @returns 0과 max_value사이에 존재하는 랜덤한 값
 */
function getRandomNumber(max_value: number = 3) {
    const randomNum = Math.random() * Math.abs((max_value + 1));
    const randomNumFloor = Math.floor(randomNum); // 0 ~ 3 사이 숫자 추출
    return randomNumFloor;
}

export {
    getRandomNumber
}