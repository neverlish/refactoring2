// 08 기능 이동 - 01 함수 옮기기

function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  };

  function calculateDistance() { // 총 거리 계산
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) { } // 두 지점의 거리 계산
  function radians(degress) { } // 라디안 값으로 변환
  function calculateTime() { } // 총 시간 계산
}

function top_calculateDistance(pointsz) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}