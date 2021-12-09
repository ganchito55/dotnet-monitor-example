import http from 'k6/http';
 
import { sleep } from 'k6';
 
export let options = {
    stages: [
    { target: 50, duration: '2s' },
    { target: 300, duration: '90s' },
    { target: 3000, duration: '90s' },
    { target: 0, duration: '20s' },
  ],
  noConnectionReuse: true,
};
 
export default function () {
 
  http.get('http://host.docker.internal:1111/');
 
  sleep(1); 
}