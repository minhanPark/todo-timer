export default function timeChange(second) {
  const hours = Math.floor(second / 3600);
  const mins = Math.floor((second % 3600) / 60);
  const seconds = second % 60;

  return `${hours < 10 ? `0${hours}` : hours} : ${
    mins < 10 ? `0${mins}` : mins
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
