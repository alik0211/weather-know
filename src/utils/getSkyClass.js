export default function getSkyClass(clouds) {
  let className = '';
  switch (true) {
    case clouds < 20: {
      className = 'clear';
      break;
    }
    case clouds < 40: {
      className = 'few-clouds';
      break;
    }
    case clouds < 60: {
      className = 'scattered-clouds';
      break;
    }
    case clouds < 80: {
      className = 'broken-clouds';
      break;
    }
    default: {
      className = 'overcast-clouds';
    }
  }
  return className;
}
