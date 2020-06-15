// 08 기능 이동 - 01 함수 옮기기

function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  };

  function calculateTime() { } // 총 시간 계산
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) { }
  function radians(degress) { }
}