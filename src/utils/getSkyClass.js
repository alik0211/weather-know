export default function getSkyClass(clouds) {
  if (clouds < 20) {
    return 'clear';
  }

  if (clouds < 40) {
    return 'few-clouds';
  }

  if (clouds < 60) {
    return 'scattered-clouds';
  }

  if (clouds < 80) {
    return 'broken-clouds';
  }

  return 'overcast-clouds';
}
