import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '2m', target: 1000 },
  ]
}

export default function () {
  const res = http.get('http://localhost:3500/products/5000/styles');
  check(res, { 'status was 200' : (r) => r.status === 200 });
  sleep(1);
}